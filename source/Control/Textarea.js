/*
	Class: UI.Textarea
		Create a skinnable textarea element

	Extends:
		<UI.Control>

	Arguments:
		options

	Options:
		name - (string) name of hidden input
		value - (string) value to set on initialize

	Example:
		(start code)
			var textarea = new UI.Textarea({
				name : 'myTextarea',
				value : 'Hello world!'
			}).inject(document.body);
		(end)
*/

UI.Textarea = new Class({

	Extends: UI.Field,

	options: {
		name: 'textarea',

		// default options
		name: 'ui-input',
		value: ''
	},


	/**
	 * [_initInput description]
	 * @return {[type]} [description]
	 */
	_initInput: function()  {
		var	opts = this.options;

		this.input = new Element('textarea', {
			name: opts.name,
			placeholder: opts.text,
			type: opts.type,
			value: opts.value
		}).inject(this.element);

		if (this.readonly) {
			this.input.set('readonly', true);
			this.input.set('tabeindex', '-1');
		}

		if (opts.klss)
			this.input.addClass(opts.klss);
	},

	/**
	 * [_initEvents description]
	 * @return {[type]} [description]
	 */
	_initEvents: function(){
		this.parent();
		var self = this;


		this.addEvents({
			blur: this.setState.bind(this, 'default'),
			focus: this.setState.bind(this, 'focus')
		});
	}
});
