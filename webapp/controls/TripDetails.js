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

				// get the start city
				var sFromCity = oDetails.outward[0].departure.city;
				var sFromCountry = oDetails.outward[0].departure.country;
				var sStopCity = oDetails.outward[0].destination.city;
				var sStopCountry = oDetails.outward[0].destination.country;
				var sToCity = oDetails.outward[1].destination.city;
				var sToCountry = oDetails.outward[1].destination.country;
				oRM.write("<trip-details");
				oRM.writeControlData(oControl);
				oRM.writeClasses();

				// outwards
				var oFlightDetails = oDetails.outward[0].departure;
				oRM.writeAttributeEscaped("departurePoint0", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}", oFlightDetails.country));
				oRM.writeAttributeEscaped("departureTime0", oFlightDetails.date);
				oRM.writeAttributeEscaped("departureAirport0", oFlightDetails.code);

				oFlightDetails = oDetails.outward[0].destination;
				oRM.writeAttributeEscaped("destinationPoint0", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}", oFlightDetails.country));
				oRM.writeAttributeEscaped("destinationTime0", oFlightDetails.date);
				oRM.writeAttributeEscaped("destinationAirport0", oFlightDetails.code);


				oFlightDetails = oDetails.outward[1].departure;
				oRM.writeAttributeEscaped("departurePoint1", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}", oFlightDetails.country));
				oRM.writeAttributeEscaped("departureTime1", oFlightDetails.date);
				oRM.writeAttributeEscaped("departureAirport1", oFlightDetails.code);

				oFlightDetails = oDetails.outward[1].destination;
				oRM.writeAttributeEscaped("destinationPoint1", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}", oFlightDetails.country));
				oRM.writeAttributeEscaped("destinationTime1", oFlightDetails.date);
				oRM.writeAttributeEscaped("destinationAirport1", oFlightDetails.code);

				/*oRM.writeAttributeEscaped("destinationCountry", sToCountry);
				oRM.writeAttributeEscaped("departureCountry", sFromCountry);
				oRM.writeAttributeEscaped("intermediateStopCity", sStopCity);
				oRM.writeAttributeEscaped("intermediateStopCountry", sStopCountry);*/
				oRM.write(">");
				oRM.write("</trip-details>");
			}
		});
	});
