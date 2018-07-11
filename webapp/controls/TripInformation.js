sap.ui.define([
		'sap/ui/core/Control',
		'ui5/awc/TripComponent',
		'ui5/awc/BackTripComponent'
	],
	function (Control) {
		"use strict";

		return Control.extend("ui5.awc.TripInformation", {
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
			},

			renderer: function (oRM, oControl) {
				const sTripPointTpl = " {0} ({1})";
				const sGateTpl = "Gate {0}";
				var oDetails = oControl.getDetails();
				oRM.write("<div");
				oRM.writeControlData(oControl);
				oRM.writeClasses();
				oRM.write(">");

				oRM.write("<trip-info");

				// outwards
				var oFlightDetails = oDetails.outward[0].departure;
				oRM.writeAttributeEscaped("departurePoint0", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("departureTime0", oFlightDetails.date);

				oFlightDetails = oDetails.outward[0].destination;
				oRM.writeAttributeEscaped("destinationPoint0",sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));

				oFlightDetails = oDetails.outward[1].departure;
				oRM.writeAttributeEscaped("departurePoint1", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("departureTime1", oFlightDetails.date);

				oFlightDetails = oDetails.outward[1].destination;
				oRM.writeAttributeEscaped("destinationPoint1",sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.write(">");
				oRM.write("</trip-info>");

				oRM.write("<back-trip-info");

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
				oRM.write("</back-trip-info>");
				oRM.write("</div>");
			}
		});
	});
