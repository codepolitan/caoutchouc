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
		format: 'ddd, MMM D YYYY',
		value: null,
		useTextAsLabel: false,
		picker: {
			//timePicker: true,
			useFadeInOut: false,
			//inject: this.element,
			//showOnInit: true,
			draggable: false,
			columns: 1,
			positionOffset: { x: 0, y: 5 },
			pickerClass: 'datepicker_bootstrap',
			format: "b"
		}
	},

	_initInput: function()  {
		var self = this,
			opts = this.options;

		//_log('input option', this.options);

		this.element.addClass('field-date');
		this.element.addClass('icon-text');

		this.input = new Element('input', {
			//readonly: 'readonly',
			name: opts.name,
			type: 'text',
			class: 'date-input'
		}).inject(this.element);

		/*this.icon = new Element('span', {
			'class': 'fa fa-calendar'
		}).inject(this.element);*/

		this._initPicker();

		//this.picker.detach(this.input);

		this.text = new Element('input', {
			'class': 'date-text',
			type: 'text'
		}).inject(this.element);

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

		options.onHide = function(d){
			//_log('-hide-', d);

		};

		this.picker = new Picker.Date(this.input, options);

		//_log('pickcer', this.picker);
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
				//_log('kkk', d);
				self.set(d);
			}
		});

	},

	set: function(d) {
		var opts = this.options;

		var date = moment(d).format(opts.format);
		var text = moment(d).toISOString();

		self.fireEvent('change', text);

		this.input.set('value', date);
		this.text.set('value', text);
	}

});
