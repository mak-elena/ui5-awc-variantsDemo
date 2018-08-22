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
				var oFlightDetails = oDetails.outward[0].dep;
				oRM.writeAttributeEscaped("depPoint0", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("depTime0", oFlightDetails.date);
				oRM.writeAttributeEscaped("depGate0", sGateTpl.replace("{0}",oFlightDetails.gate));

				oFlightDetails = oDetails.outward[0].arr;
				oRM.writeAttributeEscaped("arrPoint0",sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("arrTime0", oFlightDetails.date);
				oRM.writeAttributeEscaped("arrGate0", sGateTpl.replace("{0}",oFlightDetails.gate));


				oFlightDetails = oDetails.outward[1].dep;
				oRM.writeAttributeEscaped("depPoint1", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("depTime1", oFlightDetails.date);
				oRM.writeAttributeEscaped("depGate1", sGateTpl.replace("{0}",oFlightDetails.gate));

				oFlightDetails = oDetails.outward[1].arr;
				oRM.writeAttributeEscaped("arrPoint1",sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("arrTime1", oFlightDetails.date);
				oRM.writeAttributeEscaped("arrGate1", sGateTpl.replace("{0}",oFlightDetails.gate));
				oRM.write(">");
				oRM.write("</trip-info>");

				oRM.write("<back-trip-info");

				oFlightDetails = oDetails.return[0].dep;
				oRM.writeAttributeEscaped("depPoint0", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("depTime0", oFlightDetails.date);

				oFlightDetails = oDetails.return[0].arr;
				oRM.writeAttributeEscaped("arrPoint0", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));

				oFlightDetails = oDetails.return[1].dep;
				oRM.writeAttributeEscaped("depPoint1", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
				oRM.writeAttributeEscaped("depTime1", oFlightDetails.date);

				oFlightDetails = oDetails.return[1].arr;
				oRM.writeAttributeEscaped("arrPoint1", sTripPointTpl.replace("{0}",oFlightDetails.city).replace("{1}",oFlightDetails.code));
					oRM.write(">");
				oRM.write("</back-trip-info>");
				oRM.write("</div>");
			}
		});
	});
