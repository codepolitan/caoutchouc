/**
* Minimalistic Implement for Minimal.Form Class
*
* @implement Minimal.Form
* @author Jerome Vial, Bruno Santos
*/

define([

], function(

) {

	var _log = __debug('view:form-iframe');

    var exports = new Class({

		options: {
			iframe: {
			}
		},

		_initIframe: function(field, doc, group) {
			var self = this;

			var value = this.getValueFromKey(field.name, doc);

			var iframe = new IFrame({
				'class': 'txt',
				name: field.name,
				styles: {
					height: 1000
				}
			}).inject(group);

			var win = iframe.contentWindow,
	   			document = win.document;

	   		document.open();
			document.write(value);

		}

    });

    return exports;

});
