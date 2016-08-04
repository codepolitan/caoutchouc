
/**
 * UI Component Image
 * @class UI.Component.Image
 * @extends {UI.Component}
 */
UI.Image = new Class({

	Extends: UI.Component,

	/**
	 * [options description]
	 * @type {Object}
	 */
	options: {
		name: 'image',

		tag: 'div',
		html: 'div',

		selectable: false
	},

	/**
	 * [_initElement description]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	_initElement: function(options){
		this.parent(options);
	}

});

