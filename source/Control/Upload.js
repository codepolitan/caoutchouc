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
		type: null, // push, file
		element: {
			tag: 'span'
		}
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
		var opts = this.options;

		this.parent();

		if (opts.icon) {
			var tag = 'span';
			if (opts.type == 'file')
				tag = 'label';
			this.icon = new Element(tag, {
				'class' : 'button-icon',
				'for': ''
			}).inject(this.element);

			this.icon.addClass(opts.icon);
		}

		if (opts.type == 'file') {
			this._initFile();
		}

		//var text = opts.type.match(/text/g);

		if (opts.text)
			this.element.set('html', opts.text);

		this._initClass();

		if (this.options.clss)
			this.element.addClass(this.options.clss);
	},

	_initFile: function() {
		var self = this;

		var file = new Element('input', {
			'type' : 'file'
		}).inject(this.element);

		this.addEvent('injected', function() {
			_log(self.element.getSize());
			this
		});
	},

	_initEvents: function(){
		this.parent();

		var self = this,
			opts = this.options,
			state = opts.state;

		this.element.addEvents({
			mousedown: function(e) {
				self.fireEvent('mousedown');
				e.stop();
			},
			click: function(e){
				e.stopPropagation();
				if (opts.emit && self.state != 'disabled')
					self.fireEvent(opts.emit);

				if (opts.call && self.state != 'disabled')
					opts.call();
			},
			mouseup: function(){
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
		//_log(this.name);

		if (this.options.klss)
			this.element.addClass(this.options.klss);

		if (this.options.type)
			this.element.addClass('type-' + this.options.type);

		this.element.addClass(opts.prefix + this.name);
	}
});

