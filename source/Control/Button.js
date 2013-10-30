/*
	Class: UI.Button
		Creates button and let you _initEvents events action

	Extend:
		<UI.Control>

	Arguments:
		options

	Options:
		text - (string) Text to show in button
		submit - (boolean) Set to true if you want your button act as a submit button

	Example:
	(start code)
		var button = new UI.Button({
			text		: 'i am a new UI.Button',
			onClick		: { alert('click') }
		}).inject(document.body);
	(end)


	Implied global:
		UI,
		Class,Event

*/

UI.Button = new Class({

	Extends: UI.Control,

	name: 'button',

	options: {
		type: null // push
	},

	/*
	Function: _initElement
		private function

		Create a textLabel and call parent method

	Returns:
		(void)

	See also:
		<UI.Control::_initElement>
		<UI.Component::_initElement>
	*/

	_initElement: function(){
		this.parent();

		if (this.options.icon) {
			this.icon = new Element('span', {
				'class' : this.options.icon
			}).inject(this.element);
		}

		if (this.options.text) {
			this.text = new UI.Text({
				text : this.options.text
			}).inject(this.element);
		}

		this._initClass();

		if (this.options.clss)
			this.element.addClass(this.options.clss);
	},

	/*
	Function: _initEvents
		private function

		Set behavior relative to button (mouseenter, mousedown, mouseup, mouseleave)

	Returns:
		(void)

	See also:
		<UI.Control::_initEvents>
		<UI.Component::_initEvents>
	*/

	_initEvents: function(){
		this.parent();

		var self = this,
			opts = this.options,
			state = opts.state

		this.element.addEvents({
			mousedown: function(e) {
				self.fireEvent('mousedown');
				e.stop();
			},
			click: function(e){
				e.stopPropagation();
				if (opts.emit)
					self.fireEvent(opts.emit);

				if (opts.call && self.state != 'disabled')
					opts.call();
			},
			mouseup: function(){
				

				//console.log('mouseup', opts.type, self.state);

				if (opts.type == 'check') {
					if (self.state == 'checked')
						self.setState(null);
					else self.setState('checked');
				}

			}
		});
	},

	/*
		function : _initClass

			Build the split containers

	*/
	_initClass: function() {
		var opts = this.options;
		//console.log(this.name);

		if (this.options.klss)
			this.element.addClass(this.options.klss);

		this.element.addClass(opts.prefix + this.name)

		if (opts.type !== null && opts.type !== '')
			this.element.addClass('type-' + opts.type);

		if (opts.state !== null && opts.type !== '')
			this.element.addClass('state-' + opts.state);
	}
});

