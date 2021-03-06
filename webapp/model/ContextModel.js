sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"jquery.sap.storage"
], function(JSONModel, jQuery) {
	"use strict";

	return JSONModel.extend("ui5.awc.ContextModel", {

		_STORAGE_KEY : "UI5_AWC_CONTEXT_MODEL",
		_storage : jQuery.sap.storage(jQuery.sap.storage.Type.local),

		constructor : function(oInitialData) {
			// call super constructor
			JSONModel.apply(this, arguments);

			this.setSizeLimit(1000000);

			// load data from local storage
			var sJSON = this._storage.get(this._STORAGE_KEY);
			var oData;

			try {
				oData = JSON.parse(sJSON) ;
			} catch (oException) {
				jQuery.sap.log.warning("ContextModel: Could not parse the data read from local storage");
			}

			// default data if storage is empty
			if (!oData) {
				oData = oInitialData;
			}

			// set data
			this.setData(oData);

			return this;
		}
	});
});
