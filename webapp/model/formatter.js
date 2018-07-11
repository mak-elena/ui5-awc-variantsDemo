sap.ui.define([
	], function () {
		"use strict";

		return {
			/**
			 * Rounds the currency value to 2 digits
			 *
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} formatted currency value with 2 digits
			 */
			currencyValue : function (sValue) {
				if (!sValue) {
					return "";
				}

				return parseFloat(sValue).toFixed(2);
			},

			dateFormat: function(sValue){
				var oDate = new Date(sValue);
				return oDate.toISOString().slice(0,10);
			},

			stringToDate: function(sValue){
				var oDate = new Date(sValue);
				return oDate;
			},

			getDateDiffDays: function(oDate1, oDate2) {
				var _MS_PER_DAY = 1000 * 60 * 60 * 24;
				// Discard the time and time-zone information.
				var utc1 = Date.UTC(oDate1.getFullYear(), oDate1.getMonth(), oDate1.getDate());
				var utc2 = Date.UTC(oDate2.getFullYear(), oDate2.getMonth(), oDate2.getDate());

				return Math.floor((utc2 - utc1) / _MS_PER_DAY);
			}
		};

	}
);