/*
	Class: UI.Checkbox
		Creates checkbox control

	Extends:
		<UI.Control>

	Arguments:
		options

	Options:
		text - (string) checkbox text
		name - (string) input element name
		value - (string) checkbox's value
		checked - (boolean) set to true to check on initialize

	Example:
		(start code)
			var checkbox = new UI.Checkbox({
				name		: 'myCheckbox'
				value		: 'check',
				text		: 'Hello world!'
			}).inject(document.body);
		(end)


	Implied global:
		Class - 27
		Event - 118
		UI - 27 29 61
*/

UI.Check = new Class({

	Extends: UI.Control,

	name: 'check',

	options: {
		text: null,
		checked: false
	},

	/*
	Function: _initElement
		private function

		Call UI.Component _initElement, set an input and a textLabel

	Returns:
		(void)

	See also:
		<UI.Control::_initElement>
		<UI.Component::_initElement>
	*/

	_initElement: function(){
		this.parent();
		this.setInput();

		if (this.options.text) {
			this.text = new UI.Text({
				'for': this.options.name,
				skin: this.options.skin,
				html: this.options.text
			}).inject(this.element);
		}
		this.control.store('value', this.options.value);
		if (this.options.checked) {
			this.toggleValue();
		}
	},

	/*
	Function: toggleValue
		Toggle the value of the checkbox

	Return:
		this
	*/

	toggleValue: function(){
		if (this.state == 'checked') {
			this.setState('default');
			this.state = 'default';
			this.input.value = '';
			this.value = undefined;
		} else {
			this.setState('checked');
			this.state = 'checked';
			this.input.value = this.control.retrieve('value');
			this.value = this.control.retrieve('value');
		}

		return this;
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

	_initEvents : function(){
		this.parent();
		this.element.addEvents({
			click: function(e){
				var ev = new Event(e).stop();
				this.toggleValue();
			}.bind(this)
		});
	}
});