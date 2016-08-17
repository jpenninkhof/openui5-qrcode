sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.penninkhof.qrcode.controller.Main", {

		onInit: function() {
			this.view = this.getView();
			this.model = new sap.ui.model.json.JSONModel({
				code: "https://jpenninkhof.github.io/openui5-qrcode/",
				color: "#000000"
			});
			this.view.setModel(this.model);
		},

		onColorSelect: function(event) {
			switch (event.getParameter("selectedIndex")) {
				case 0: this.model.setProperty("/color", "#000000"); break;
				case 1: this.model.setProperty("/color", "#ff0000"); break;
				case 2: this.model.setProperty("/color", "#00ff00"); break;
				case 3: this.model.setProperty("/color", "#0000ff"); break;
			}
		}

	});

});
