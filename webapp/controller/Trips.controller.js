/*global location */
sap.ui.define([
		"ui5/awc/demo/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"ui5/awc/demo/model/formatter",
		"ui5/awc/demo/controls/AwcProfileManager"
	], function (BaseController, JSONModel, formatter, AwcProfileStore) {
		"use strict";

		return BaseController.extend("ui5.awc.demo.controller.Trips", {

			formatter: formatter,

			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			onInit : function () {
				this._setInitialDate();
				this.getRouter().getRoute("trips").attachPatternMatched(this._onObjectMatched, this);
			},

			/* =========================================================== */
			/* event handlers                                              */
			/* =========================================================== */

			onDateChanged: function(oEvent) {
				var oValue = oEvent.getParameter("value"),
					oSelectedDate = new Date(oValue),
					oTripDate = this._getTripDate();
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
				var oCurrentDate = new Date();
				oCurrentDate.setDate(oTripDate.getDate() - 20);
				var oDatePicker = this.byId("datePicker");
				oDatePicker.setDateValue(oCurrentDate);
				//this.byId("calendar").displayDate(oTripDate);
			},

			_getTripDate: function() {
				var oTripDetails = this.getOwnerComponent().getModel("tripDetails");
				var oTripDate = oTripDetails.getProperty("/beginDate");
				return new Date(oTripDate);
			}

		});

	}
);
