sap.ui.define([
		'sap/ui/core/Control',
		'ui5/awc/TripInformationVariantManager',
		'ui5/awc/BackTripComponent'
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
			},

			renderer: function (oRM, oControl) {
				const sTripPointTpl = " {0} ({1})";
				const sGateTpl = "Gate {0}";
				var oDetails = oControl.getDetails();
				oRM.write("<div");
				oRM.writeControlData(oControl);
				oRM.writeClasses();
				oRM.write(">");

				oRM.write("<trip-details");

				// outwards
				var oFlightDetails = oDetails.outward[0].departure;
				oRM.writeAttributeEscaped("departurePoint0", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("departureTime0", oFlightDetails.date);
				oRM.writeAttributeEscaped("departureGate0", sGateTpl.replace("{0}",oFlightDetails.gate));

				oFlightDetails = oDetails.outward[0].destination;
				oRM.writeAttributeEscaped("destinationPoint0",sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("destinationTime0", oFlightDetails.date);
				oRM.writeAttributeEscaped("destinationGate0", sGateTpl.replace("{0}",oFlightDetails.gate));


				oFlightDetails = oDetails.outward[1].departure;
				oRM.writeAttributeEscaped("departurePoint1", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("departureTime1", oFlightDetails.date);
				oRM.writeAttributeEscaped("departureGate1", sGateTpl.replace("{0}",oFlightDetails.gate));

				oFlightDetails = oDetails.outward[1].destination;
				oRM.writeAttributeEscaped("destinationPoint1",sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("destinationTime1", oFlightDetails.date);
				oRM.writeAttributeEscaped("destinationGate1", sGateTpl.replace("{0}",oFlightDetails.gate));
				oRM.write(">");
				oRM.write("</trip-details>");

				oRM.write("<back-trip");

				oFlightDetails = oDetails.return[0].departure;
				oRM.writeAttributeEscaped("departurePoint0", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("departureTime0", oFlightDetails.date);

				oFlightDetails = oDetails.return[0].destination;
				oRM.writeAttributeEscaped("destinationPoint0", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));

				oFlightDetails = oDetails.return[1].departure;
				oRM.writeAttributeEscaped("departurePoint1", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("departureTime1", oFlightDetails.date);

				oFlightDetails = oDetails.return[1].destination;
				oRM.writeAttributeEscaped("destinationPoint1", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
					oRM.write(">");
				oRM.write("</back-trip>");
				oRM.write("</div>");
			}
		});
	});
