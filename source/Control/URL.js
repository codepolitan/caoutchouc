/*
	Class: UI.Field
		Create a skinnable input element

	Extends:
		<UI.Control>

	Arguments:
		options

	Options:
		name - (string) name for the input element
		value - (string) value
		name - (string) name name

	Example:
		(start code)
		var button = new UI.Button({
			name: 'myInput',
			value: 'Hello world'
		}).inject(document.body);
		(end)

	Implied global:
		Class - 25
		UI - 25 27

	Members:
		Control, Extends, Input, addEvents, bind, blur, name,
		focus, name, options, parent, _initEvents, setState, value

*/

UI.URL = new Class({

	Extends: UI.Field,

	options: {
		name: 'URL',
		base: 'control',
		tag: 'div',
		type: 'input',
		value: null,
		useTextAsLabel: false
	},

	initialize: function(options){
		this.setOptions(options);

		var opts = this.options;

		this.fireEvent('init');

		this._initOptions(opts);
		this._initElement();
		this._initEvents();

		return this;
	},
	/*
	Function: _initElement
		private function

		Create a div and a hidden input to receive the selected value

	Return:
		(void)

	See also:
		<UI.Control::_initElement>
		<UI.Component::_initElement>
	*/

	_initElement: function(){
		//create a new div as input element
		this.parent();

		var opts = this.options;

		this.element.addClass('ui-field');

		if (opts.klss)
			this.element.addClass(opts.klss);

		if (opts.label != false)
			this._initLabel();

		this._initInput();
	},

	_initLabel: function()  {
		var text = this.options.name;

		if (this.options.useTextAsLabel)
			text = this.options.text;

		this.label = new Element('label', {
			html: text
		}).inject(this.element);
	},

	_initInput: function()  {
		var self = this;

		//_log('imput option', this.options);

		this.input = new Element('input', {
			name: this.options.name,
			type: this.options.type,
			value: this.options.value,
			placeholder: this.options.text
		}).inject(this.element);

		this.input.addEvents({
			keyup: function() {
				self.fireEvent('change', this.get('value'));
			},
			mousedown: function(e) {
				e.stopPropagation();
				//this.focus();
			}
		});
	}
});
