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
			text        : 'i am a new UI.Button',
			onClick     : { alert('click') }
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
		this.parent();
		var opts = this.options,
			type = opts.type;

		if (type === null)
			type = 'icon-text';


		//console.log(type, type.indexOf('icon'));

		if (opts.text && type != 'icon')
			this.element.set('html', opts.text);
		//var text = opts.type.match(/text/g);


		//console.log('title', this.element,  opts.text);
		this.element.set('title', opts.text);

		if ((opts.icon && type.indexOf('icon') > -1) || type == 'file')
			this._initIcon(type);

		this._initClass();

		if (this.options.clss)
			this.element.addClass(this.options.clss);

		if (opts.type == 'file') {
			this._initFile(type);
		}
	},

	_initIcon: function(type) {
		var opts = this.options;

		var tag = 'span';
		if (type == 'file')	tag = 'label';

		var pos = 'top';
		if (type == 'text-icon')
			pos = 'bottom';

		this.icon = new Element(tag, {
			'class': 'button-icon',
			for: 'upload'
		}).inject(this.element, pos);

		this.icon.addClass(opts.icon);
	},

	_initFile: function(type) {
		var self = this;

		var file = new Element('input', {
			type: 'file',
			name: 'upload',
			id: 'upload'
		}).inject(this.element);

		file.addEvent('change', function(info) {
			//console.log('change', info);
		});

		file.onchange = function(info) {
			var files = this.files;
			//console.log(files);
			if (files)
			self.fireEvent('uploadFile', [files]);
		
		};


		this.addEvent('injected', function() {
			/*var coord = self.icon.getCoordinates();

			coord.top = '0';
			coord.left = '0';

			file.setStyles(coord);*/
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
					self.fireEvent('press', opts.emit);

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
		//console.log(this.name);

		if (this.options.klss)
			this.element.addClass(this.options.klss);

		if (this.options.type)
			this.element.addClass('type-' + this.options.type);

		this.element.addClass(opts.prefix + this.name);
	}
});

