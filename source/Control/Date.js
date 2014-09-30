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

UI.Date = new Class({

	Extends: UI.Field,

	options: {
		name: 'date',
		base: 'control',
		tag: 'div',
		type: 'input',
		format: 'll',
		value: null,
		useTextAsLabel: false,
		picker: {
			//timePicker: true,
			useFadeInOut: false,
			//inject: this.element,
			//showOnInit: true,
			draggable: false,
			columns: 1,
			positionOffset: { x: 15, y: 5 },
			pickerClass: 'datepicker_bootstrap',
			format: "%Y/%m/%d"
		}
	},

	_initInput: function()  {
		var self = this,
			opts = this.options;

		//_log('imput option', this.options);

		this.element.addClass('field-date');
		this.element.addClass('icon-text');

		this.input = new Element('input', {
			readonly: 'readonly',
			name: opts.name,
			styles: {
				display: 'none'
			}
		}).inject(this.element);

		this.icon = new Element('span', {
			'class': 'icon icon-calendar'
		}).inject(this.element);


		this.text = new Element('input', {
			'class': 'text',
			type: 'text'
		}).inject(this.element);

		this._initPicker();

		this.set(opts.value);

	},

	_initPicker: function() {
		var self = this,
			opts = this.options;

		this.picker = new Picker.Date(this.input, opts.picker);

		//_log(this.picker);
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
		var self = this;

		this.picker.addEvents({
			select: function(d){
				self.set(d);
				self.fireEvent('change', d);
			}
		});

	},

	set: function(d) {
		var opts = this.options;

		var date = moment(d).toISOString();
		var text = moment(d).format(opts.format);

		this.input.set('value', date);
		this.text.set('value', text);
	}

});
