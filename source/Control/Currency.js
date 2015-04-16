/**
 * 
 */

UI.Currency = new Class({

	Extends: UI.Field,

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

		//_log(this.element);

		this.input.addClass('mask');
		this.input.set('alt', "{ type:'number', groupSymbol: ',', groupDigits: 3, decSymbol: '.', decDigits: 2,	stripMask: false}");

		this.element.addClass('field-currency');

	}
});
