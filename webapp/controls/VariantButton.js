sap.ui.define([
		'sap/m/Button',
		'sap/m/ButtonRenderer',
		"sap/ui/Device",
		'sap/m/library',
		'sap/ui/core/library',
		'sap/ui/core/IconPool',

		"ui5/awc/VariantButtonManager"
	],
	function (Button, ButtonRenderer, Device, library, coreLibrary, IconPool) {
		"use strict";

		// shortcut for sap.m.ButtonType
		var ButtonType = library.ButtonType;

		// shortcut for sap.ui.core.TextDirection
		var TextDirection = coreLibrary.TextDirection;

		/**
		 * Renders tabindex with value of "-1" if required by  <code>_bExcludeFromTabChain</code> property.
		 * @param {sap.m.Button} oButton The sap.m.Button to be rendered
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the Render-Output-Buffer
		 */
		function renderTabIndex(oButton, oRm){
			if (oButton._bExcludeFromTabChain) {
				oRm.writeAttribute("tabindex", -1);
			}
		}

		return Button.extend("ui5.awc.demo.VariantButton", {
			metadata: {
				properties: {}
			},

			init: function () {
				// init CSS
				this.addStyleClass("ui5-awc_variantButton");
				},

			renderer: function (oRm, oButton) {
				// get control properties
				var sType = oButton.getType();
				var bEnabled = oButton.getEnabled();
				var sWidth = oButton.getWidth();
				var sTooltip = oButton._getTooltip();
				var sText = oButton._getText();
				var sTextDir = oButton.getTextDirection();
				var bIE_Edge = Device.browser.internet_explorer || Device.browser.edge;
				// render bdi tag only if the browser is different from IE and Edge since it is not supported there
				var bRenderBDI = (sTextDir === TextDirection.Inherit) && !bIE_Edge;

				// get icon from icon pool
				var sBackURI = IconPool.getIconURI("nav-back");

				// start button tag
				oRm.write("<button");
				oRm.writeControlData(oButton);
				oRm.addClass("sapMBtnBase");

				// button container style class
				if (!oButton._isUnstyled()) {
					oRm.addClass("sapMBtn");

					// extend  minimum button size if icon is set without text for button types back and up
					if ((sType === ButtonType.Back || sType === ButtonType.Up) && oButton.getIcon() && !sText) {
						oRm.addClass("sapMBtnBack");
					}
				}

				//ARIA attributes
				var mAccProps = {};

				var sTextId = ButtonRenderer.getButtonTypeAriaLabelId(sType);
				if (sTextId) {
					mAccProps["describedby"] = {value: sTextId, append: true};
				}

				// add reference only to the text content of the button
				// so it can be read otherwise it causes the issue reported in BCP: 1680223321
				if (sText && oButton.getAriaLabelledBy() && oButton.getAriaLabelledBy().length > 0) {
					mAccProps["labelledby"] = {value: oButton.getId() + "-content", append: true };
				}

				//descendants (e.g. ToggleButton) callback
				if (this.renderAccessibilityAttributes) {
					this.renderAccessibilityAttributes(oRm, oButton, mAccProps);
				}
				oRm.writeAccessibilityState(oButton, mAccProps);

				// check if the button is disabled
				if (!bEnabled) {
					oRm.writeAttribute("disabled", "disabled");
					if (!oButton._isUnstyled()) {
						oRm.addClass("sapMBtnDisabled");
					}
				} else {
					switch (sType) {
						case ButtonType.Accept:
						case ButtonType.Reject:
						case ButtonType.Emphasized:
							oRm.addClass("sapMBtnInverted");
							break;
						default: // No need to do anything for other button types
							break;
					}
				}

				// add tooltip if available
				if (sTooltip) {
					oRm.writeAttributeEscaped("title", sTooltip);
				}

				oRm.writeClasses();

				// set user defined width
				if (sWidth != "" || sWidth.toLowerCase() === "auto") {
					oRm.addStyle("width", sWidth);
					oRm.writeStyles();
				}
				renderTabIndex(oButton, oRm);

				// close button tag
				oRm.write(">");

				// start inner button tag
				oRm.write("<span");
				oRm.writeAttribute("id", oButton.getId() + "-inner");

				// button style class
				if (!oButton._isUnstyled()) {
					oRm.addClass("sapMBtnInner");
				}

				// check if button is hoverable
				if (oButton._isHoverable()) {
					oRm.addClass("sapMBtnHoverable");
				}

				// check if button is focusable (not disabled)
				if (bEnabled) {
					oRm.addClass("sapMFocusable");
					// special focus handling for IE
					if (bIE_Edge) {
						oRm.addClass("sapMIE");
					}
				}

				if (!oButton._isUnstyled()) {
					if (sText) {
						oRm.addClass("sapMBtnText");
					}
					if (sType === ButtonType.Back || sType === ButtonType.Up) {
						oRm.addClass("sapMBtnBack");
					}
					if (oButton.getIcon()) {
						if (oButton.getIconFirst()) {
							oRm.addClass("sapMBtnIconFirst");
						} else {
							oRm.addClass("sapMBtnIconLast");
						}
					}
				}

				//get render attributes of depended buttons (e.g. ToggleButton)
				if (this.renderButtonAttributes) {
					this.renderButtonAttributes(oRm, oButton);
				}

				// set button specific styles
				if (!oButton._isUnstyled() && sType !== "") {
					// set button specific styles
					oRm.addClass("sapMBtn" + jQuery.sap.encodeHTML(sType));
				}

				// add all classes to inner button tag
				oRm.writeClasses();

				//apply on the inner level as well as not applying it will allow for focusing the button after a mouse click
				renderTabIndex(oButton, oRm);

				// close inner button tag
				oRm.write(">");

				// Write variant button content
				oButton._renderInnerContent(oRm, oButton);

/*				// set image for internal image control (back)
				if (sType === ButtonType.Back || sType === ButtonType.Up) {
					this.writeInternalIconPoolHtml(oRm, oButton, sBackURI);
				}

				// write icon
				if (oButton.getIcon()) {
					this.writeImgHtml(oRm, oButton);
				}*/

				// write button text
/*				if (sText) {
					oRm.write("<span ");
					oRm.addClass("sapMBtnContent");
					// check if textDirection property is not set to default "Inherit" and add "dir" attribute
					if (sTextDir !== TextDirection.Inherit) {
						oRm.writeAttribute("dir", sTextDir.toLowerCase());
					}
					oRm.writeClasses();
					oRm.writeAttribute("id", oButton.getId() + "-content");
					oRm.write(">");

					if (bRenderBDI) {
						oRm.write("<bdi");
						oRm.writeAttribute("id", oButton.getId() + "-BDI-content");
						oRm.write(">");
					}
					oRm.writeEscaped(sText);
					if (bRenderBDI) {
						oRm.write("</bdi>");
					}
					oRm.write("</span>");
				}*/

				// special handling for IE focus outline
				if (bIE_Edge && bEnabled) {
					oRm.write('<span class="sapMBtnFocusDiv"></span>');
				}

				// end inner button tag
				oRm.write("</span>");

				// end button tag
				oRm.write("</button>");
			},

			_renderInnerContent(oRm, oButton) {
				oRm.write("<variant-button ");
				oRm.writeAttribute("text","_Click me!_");
				oRm.writeAttribute("icon","sap-icon://credit-card");
				oRm.write(">");
				oRm.write("</variant-button>");
			}
		});
	});
