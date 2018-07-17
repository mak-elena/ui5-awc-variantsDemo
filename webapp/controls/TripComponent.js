sap.ui.define([],
	function(){
	"use strict";

		class TripInformationComponent extends awc.AdaptiveComponent(HTMLElement) {
			constructor() {
				super();
			}
			static get observedAttributes() {
				return [
					'depTime0',
					'depTime1',
					'arrTime0',
					'arrTime1',
					'depPoint0',
					'depPoint1',
					'arrPoint0',
					'arrPoint1',
					'depGate0',
					'depGate1',
					'arrGate0',
					'arrGate1'
				];
			}

			attributeChangedCallback(name, oldValue, newValue) {
				super.attributeChangedCallback(name, oldValue, newValue);
				this._updateAttribute();
			}

			performAdaptation(profile) {
				super.performAdaptation(profile);
				if (window.ShadyCSS) {
					window.ShadyCSS.styleSubtree(this);
				}
				this._update();
			}

			_updateAttribute (sAttribute) {
				if (this._currentVariant != null) {
					this._currentVariant[sAttribute] = this.getAttribute(sAttribute);
				}
			}

			_update() {
				if (this._currentVariant != null) {
					TripInformationComponent.observedAttributes.forEach(
						x => this._updateAttribute(x)
					);
				}
			}
		}

		class ShortTripInformationVariant extends awc.AdaptiveVariant {
			static matches(context) {
				return context['daysLeft'] > 7;
			}

			constructor() {
				super();
			}

			get template() {
				let template = document.createDocumentFragment();

				let s = document.createElement('style');
				s.innerHTML = this.getStyles();

				let p = document.createElement('div');
				p.innerHTML = `
					<div class="awc-trip">
						<div class="awc-trip__flight dep0">
							<span class="awc-trip__time"></span> 
							<span class="awc-trip__port dep"></span> -
							<span class="awc-trip__port arr"></span>
						</div>
						<div class="awc-trip__flight dep1">
							<span class="awc-trip__time"></span> 
							<span class="awc-trip__port dep"></span> -
							<span class="awc-trip__port arr"></span>
						</div>
					</div>`;
				template.appendChild(s);
				template.appendChild(p);
				return template;
			}

			getStyles() {
				return `
					:host {
					}
					
					.awc-trip {
						 padding: 0.75rem 0;
						 border-bottom: 1px solid;
					}

					.awc-trip__flight {
						padding: 0.2rem 0;
						color: #3f5161;
					}

					.awc-trip__flight > span {
						display: inline-block;
					}
					
					.awc-trip__time {
						font-weight: bold;
					}

					.awc-trip__port {
						width: 38%;
						max-width: 200px;
					}`;
			}

			connectedCallback() {
				super.connectedCallback();

				this._depTime0 = this.contentRoot.querySelector(".awc-trip__flight.dep0 > .awc-trip__time");
				this._depPoint0 = this.contentRoot.querySelector(".awc-trip__flight.dep0 > .awc-trip__port.dep");
				this._arrPoint0 = this.contentRoot.querySelector(".awc-trip__flight.dep0 > .awc-trip__port.arr");

				this._depTime1 = this.contentRoot.querySelector(".awc-trip__flight.dep1 > .awc-trip__time");
				this._depPoint1 = this.contentRoot.querySelector(".awc-trip__flight.dep1 > .awc-trip__port.dep");
				this._arrPoint1 = this.contentRoot.querySelector(".awc-trip__flight.dep1 > .awc-trip__port.arr");
			}

			formatDate (oValue) {
				return new Date(oValue).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set depTime0(val) {
				this._depTime0.innerText = this.formatDate(val);
			}

			set depTime1(val) {
				this._depTime1.innerText = this.formatDate(val);
			}

			set depPoint0(val) {
				this._depPoint0.innerText = val;
			}

			set depPoint1(val) {
				this._depPoint1.innerText = val;
			}

			set arrPoint0(val) {
				this._arrPoint0.innerText = val;
			}

			set arrPoint1(val) {
				this._arrPoint1.innerText = val;
			}
		}

		TripInformationComponent.registerVariant(ShortTripInformationVariant);

		TripInformationComponent.defaultVariant = ShortTripInformationVariant;

		customElements.define('trip-info', TripInformationComponent);
	});