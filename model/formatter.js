sap.ui.define([
	], function () {
		"use strict";

		return {
			dateFormat: function(sValue){
				var options = { year: 'numeric', month: 'short', day: 'numeric' };
				var oDate = new Date(sValue);
				return oDate.toLocaleDateString("en-US", options);
			}
		};

	}
);