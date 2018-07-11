/*global location */
sap.ui.define([
		"ui5/awc/demo/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"ui5/awc/demo/model/formatter",
		"ui5/awc/demo/controls/AwcProfileManager",
		"sap/ui/unified/DateRange"
	], function (BaseController, JSONModel, formatter, AwcProfileStore, DateRange) {
		"use strict";

		return BaseController.extend("ui5.awc.demo.controller.Trips", {

			formatter: formatter,

			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			onInit : function () {
				this._setInitialDate();
				this.getRouter().getRoute("uiStructure").attachPatternMatched(this._onObjectMatched, this);
			},

			/* =========================================================== */
			/* event handlers                                              */
			/* =========================================================== */
			onDaysLeftChange: function (oEvent) {
				var fValue = -oEvent.getParameter("value");
				if(fValue <= 1) {
					AwcProfileStore.updateProfile({"details": "full"});
				}
				else if(fValue < 10) {
					AwcProfileStore.updateProfile({"details": "mid"});
				}
				else {
					AwcProfileStore.updateProfile({"details": "short"});
				}

			},

			onDateSelected: function(oEvent) {
				var oCalendar = oEvent.oSource,
					oSelectedDateRange = oCalendar.getSelectedDates()[0],
					oSelectedDate = new Date(oSelectedDateRange.getStartDate());

				var oTripDetails = this.getOwnerComponent().getModel("tripDetails");
				var oTripDate = oTripDetails.getProperty("/beginDate");

				var iDiffDays = formatter.getDateDiffDays(oSelectedDate, new Date(oTripDate))
				if(iDiffDays <= 1) {
					AwcProfileStore.updateProfile({"details": "full"});
				}
				else if(iDiffDays < 10) {
					AwcProfileStore.updateProfile({"details": "mid"});
				}
				else {
					AwcProfileStore.updateProfile({"details": "short"});
				}
			},

			/* =========================================================== */
			/* begin: internal methods                                     */
			/* =========================================================== */

			/**
			 * Binds the view to the object path and expands the aggregated line items.
			 * @function
			 * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
			 * @private
			 */
			_onObjectMatched : function (oEvent) {
			},

			_setInitialDate: function() {
				var oTripDetails = this.getOwnerComponent().getModel("tripDetails");
				var sTripDate = oTripDetails.getProperty("/beginDate");
				var oTripDate = new Date(sTripDate);
				oTripDate.setDate(oTripDate.getDate() - 20);
				this.byId("calendar").addSelectedDate(new DateRange({startDate: oTripDate}));
				//this.byId("calendar").displayDate(oTripDate);
			}

		});

	}
);
