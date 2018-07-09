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
				this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
			}

		});

	}
);
