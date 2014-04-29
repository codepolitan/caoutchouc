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
		useTextAsLabel: false
	},

	_initInput: function()  {
		var self = this,
			opts = this.options;

		//console.log('imput option', this.options);

		this.element.addClass('field-date');

		this.input = new Element('input', {
			name: opts.name,
			type: opts.type
		}).inject(this.element);

		this.text = new Element('span', {
			'class': 'text'
		}).inject(this.element);

		this.input.addEvents({
			jkeyup: function() {
				self.fireEvent('change', this.get('value'));
			},
			mousedown: function(e) {
				//e.stopPropagation();
				//this.focus();
			}
		});

		this.set(opts.value)


		/*input.input.addEvents({
			keyup: function() {
				self.doc[this.get('name')] = this.get('value');
				self.fireEvent('change', this.get('value'));
			}
		});
*/
		//console.log('-|x-', date);

		var datePicker = new Picker.Date(this.input, {
			//timePicker: true,
			useFadeInOut: false,
			//inject: this.element,
			positionOffset: {x: 5, y: 0},
			pickerClass: 'datepicker_bootstrap',
			format: "%Y/%m/%d",
			onSelect: function(d){
				console.log('--', d);
				self.set(d);
				self.fireEvent('change', d);
			},
			onShow: function(d){
				console.log('-show-', d);

			}
		});

		//this.datePickers.push(datePicker);
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

		this.element.addEvents({
/*			mouseup: function(){
				self.fireEvent('mouseup');
			}*/
		});
	},

	set: function(d) {
		var opts = this.options;

		var date = moment(d).toISOString();
		var text = moment(d).format(opts.format);

		this.input.set('value', date);
		this.text.set('html', text);
	}

});
