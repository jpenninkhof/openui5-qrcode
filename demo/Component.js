sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/penninkhof/qrcode/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.penninkhof.qrcode.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {

			// Register custom controls
			var modulePath = jQuery.sap.getModulePath(this.getManifestObject().getComponentName());
			jQuery.sap.registerModulePath("com.penninkhof.controls", "../control");

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

		}
	});

});