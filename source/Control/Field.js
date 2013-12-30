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

UI.Field = new Class({

	Extends: UI.Control,

	options: {
		name: 'field',
		base: 'control',
		tag: 'div',
		type: 'input',
		value: null
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

		this.element.addClass('labelinput');

		if (opts.klss)
			this.element.addClass(opts.klss);

		this._initLabel();
		this._initInput();

/*		this._initValue();
		this._initName();*/

	},

	_initLabel: function()  {
		var text = this.options.name;
/*		if (this.options.text)
			text = this.options.text;*/

		this.label = new Element('label', {
			html: text
		}).inject(this.element);
	},

	_initInput: function()  {
		var self = this;

		//console.log('imput option', this.options);

		this.input = new Element('input', {
			name: this.options.name,
			type: this.options.type,
			value: this.options.value,
			placeholder: this.options.text
		}).inject(this.element);

		this.input.addEvents({
			keyup: function() {
				//console.log('up', this.get('value'));

				self.fireEvent('change', this.get('value'));
			}
		});
	},

	_initName: function(name) {
		var opts = this.options;

		if (opts.name) {
			this.label.set('html', name);
			this.input.set('name', name);
		}
	},

	_initValue: function(){
		var opts = this.options;

		//create a new div as input element
		if (opts.value)
			this.setValue(opts.value);
	},

	setValue: function(value){
		//create a new div as input element

		//console.log('tag...', this.element.tag, value);

		this.input.set('value', value);

		this.value = value;

		this.fireEvent('change' , value);
	},

	/*
	Function: setState
		Set element state

	Arguments:
		state - (string) State name

	Return:
		(void)

	See also:
		<UI.Component::setState>
	*/

	setState: function(state){
		this.parent(state);
	},

	/*
	Function: _initEvents
		private function

		Set control relative behavior (blur and focus)

	Return:
		(void)

	See also:
		<UI.Control::_initEvents>
		<UI.Component::_initEvents>
	*/

	_initEvents: function() {
		this.parent();
		this.addEvents({
			blur: this.setState.bind(this, 'default'),
			focus: this.setState.bind(this, 'focus')
		});
	},

	set: function(name, value) {
		

	}

});
