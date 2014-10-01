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
			format: "lll"
		}
	},

	_initInput: function()  {
		var self = this,
			opts = this.options;

		_log('input option', this.options);

		this.element.addClass('field-date');
		this.element.addClass('icon-text');

		this.input = new Element('input', {
			//readonly: 'readonly',
			name: opts.name,
			type: 'text',
			styles: {
				//display: 'none'
			}
		}).inject(this.element);

		/*this.icon = new Element('span', {
			'class': 'fa fa-calendar'
		}).inject(this.element);*/

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


		var options =  opts.picker;

		options.onSelect = function(d){
			//_log('--', d, self.doc, field.name);
			//self.updateDocKey(opts.name, d);
			//self.doc[field.name] = d;
			self.fireEvent('change', [d, opts.name]);
		};

		options.onShow = function(d){
			//_log('-show-', d);

		};

		this.picker = new Picker.Date(this.input, options);

		_log('pickcer', this.picker);
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
