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
			},

			renderer: function (oRM, oControl) {
				const sTripPointTpl = " {0} ({1})";
				var oDetails = oControl.getDetails();

				oRM.write("<trip-details");
				oRM.writeControlData(oControl);
				oRM.writeClasses();

				// outwards
				var oFlightDetails = oDetails.outward[0].departure;
				oRM.writeAttributeEscaped("out_departurePoint0", oFlightDetails.city);
				oRM.writeAttributeEscaped("out_departureTime0", oFlightDetails.date);
				oRM.writeAttributeEscaped("out_departureCode0", oFlightDetails.code);

				oFlightDetails = oDetails.outward[0].destination;
				oRM.writeAttributeEscaped("out_destinationPoint0", oFlightDetails.city);
				oRM.writeAttributeEscaped("out_destinationTime0", oFlightDetails.date);
				oRM.writeAttributeEscaped("out_destinationCode0", oFlightDetails.code);


				oFlightDetails = oDetails.outward[1].departure;
				oRM.writeAttributeEscaped("out_departurePoint1", oFlightDetails.city);
				oRM.writeAttributeEscaped("out_departureTime1", oFlightDetails.date);
				oRM.writeAttributeEscaped("out_departureCode1", oFlightDetails.code);

				oFlightDetails = oDetails.outward[1].destination;
				oRM.writeAttributeEscaped("out_destinationPoint1",oFlightDetails.city);
				oRM.writeAttributeEscaped("out_destinationTime1", oFlightDetails.date);
				oRM.writeAttributeEscaped("out_destinationCode1", oFlightDetails.code);

				oFlightDetails = oDetails.return[0].departure;
				oRM.writeAttributeEscaped("ret_departurePoint0", oFlightDetails.city);
				oRM.writeAttributeEscaped("ret_departureTime0", oFlightDetails.date);
				oRM.writeAttributeEscaped("ret_departureCode0", oFlightDetails.code);

				oFlightDetails = oDetails.return[0].destination;
				oRM.writeAttributeEscaped("ret_destinationPoint0", oFlightDetails.city);
				oRM.writeAttributeEscaped("ret_destinationTime0", oFlightDetails.date);
				oRM.writeAttributeEscaped("ret_destinationCode0", oFlightDetails.code);


				oFlightDetails = oDetails.return[1].departure;
				oRM.writeAttributeEscaped("ret_departurePoint1", oFlightDetails.city);
				oRM.writeAttributeEscaped("ret_departureTime1", oFlightDetails.date);
				oRM.writeAttributeEscaped("ret_departureCode1", oFlightDetails.code);

				oFlightDetails = oDetails.return[1].destination;
				oRM.writeAttributeEscaped("ret_destinationPoint1", oFlightDetails.city);
				oRM.writeAttributeEscaped("ret_destinationTime1", oFlightDetails.date);
				oRM.writeAttributeEscaped("ret_destinationCode1", oFlightDetails.code);
				oRM.write(">");
				oRM.write("</trip-details>");
			}
		});
	});
