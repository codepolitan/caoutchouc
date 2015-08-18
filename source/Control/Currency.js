
/**
 * UI Control Currency Class
 * @class UI.Control.Currency
 * @extends {UI.Control}
 * @author Jerome Vial
 */
define([
	"UI/Control/Field"
], function(
	Field
) {

	var exports = new Class({

		Extends: Field,

		options: {
			name: 'currency',
			base: 'control'
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function(){

			//create a new div as input element
			this.parent();

			//_log.debug(this.element);

			this.input.addClass('mask');
			this.input.set('alt', "{ type:'number', groupSymbol: ',', groupDigits: 3, decSymbol: '', decDigits: 0,	stripMask: false}");

			this.element.addClass('field-currency');
		}
	});

	return exports;
});

