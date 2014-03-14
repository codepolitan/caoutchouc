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

	/*
	Function: _initElement
		private function

		Call <UI.Control::_initElement> and make a textarea element

	Return:
		(void)

	See also:
		<UI.Control::buil(state);
		<UI.Component::_initElement>
	*/


	_initInput: function()  {
		var	opts = this.options;

		this.input = new Element('textarea', {
			name: opts.name,
			placeholder: opts.name,
			type: opts.type,
			value: opts.value
		}).inject(this.element);

		if (opts.klss)
			this.input.addClass(opts.klss);
	},


	/*
		Method: _initEvents
			private function

			Set behavior

		Return:
			(void)

		See also:
			<UI.Control::_initEvents>
			<UI.Component::_initEvents>
	*/

	_initEvents: function(){
		this.parent();
		var self = this;

		this.input.addEvents({
			focus: function(e){
				self.focus = this;
				this.retrieve('autogrow').resize();
			},
			keyup: function() {
				//console.log('up', this.get('value'));

				self.fireEvent('change', this.get('value'));
			}
		});

		this.addEvents({
			blur: this.setState.bind(this, 'default'),
			focus: this.setState.bind(this, 'focus')
		});
	}
});
