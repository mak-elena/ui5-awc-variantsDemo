sap.ui.define([
		'sap/ui/core/Control',
		'ui5/awc/TripInformationVariantManager'
	],
	function (Control) {
		"use strict";

		return Control.extend("sap.dig.TripDetails", {
			metadata: {
				properties: {
					details: {
						type: "object",
						group: "Data",
						defaultValue: ""
					}
				},

			},

			init: function () {
				// init CSS
				this.addStyleClass("sapDig-kpiPanel");
			},

			renderer: function (oRM, oControl) {
				var oDetails = oControl.getDetails();

				// get the start city
				var sFromCity = oDetails[0].from.city;
				var sToCity = oDetails[1].from.city;
				oRM.write("<trip-details");
				oRM.writeControlData(oControl);
				oRM.writeClasses();


				oRM.writeAttributeEscaped("fromCityCode", sFromCity);
				oRM.writeAttributeEscaped("startDate", oDetails[0].from.date);
				oRM.writeAttributeEscaped("toCityCode", sToCity);
				oRM.writeAttributeEscaped("endDate", oDetails[1].from.date);
				oRM.write(">");
				oRM.write("</trip-details>");
			}
		});
	});
