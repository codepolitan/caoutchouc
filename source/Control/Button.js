
/**
 * @class UI.Button
 * @extends {UI.Control}
 * @type {Class}
 */
UI.Button = new Class({

	Extends: UI.Control,

	name: 'button',

	options: {
		name: 'button',
		type: null, // push, file
		element: {
			tag: 'button'
		},
		binding: {
			_list: ['element'],
			element: {
				'element.click': '_onElementClick',
				//'element.dblclick': '_onElementClick',
				'element.mousedown': '_onElementMouseDown',
				'element.mouseup': '_onElementMouseUp'
			}
		}
	},

	set: function() {},

	/**
	 * [_initElement description]
	 * @return {[type]} [description]
	 */
	_initElement: function(){
		this.parent();
		var opts = this.options,
			type = opts.type;

		opts.text = opts.text || opts.n;

		if (type === null)
			type = 'icon-text';

/*		if (opts.text && type != 'icon')
			this.element.set('html', opts.text);*/
		//var text = opts.type.match(/text/g);


		if (opts.name)
			this.element.set('data-name', opts.name);

		//_log('title', this.element,  opts.text);
		this.element.set('title', opts.text);

		if (opts.icon)
			this._initIcon(type);

		if (opts.text)
			this._initText(type);

		this._initClass();
	},


	/**
	 * [_initIcon description]
	 * @param  {[type]} type [description]
	 * @return {[type]}      [description]
	 */
	_initIcon: function(type) {
		var opts = this.options;

		var tag = 'span';

		var prop = {
			'class': 'button-icon'
		};

		this.icon = new Element(tag, prop).inject(this.element);

		var klss = opts.icon.replace("icon-", "fa-");

		this.icon.addClass('fa');
		this.icon.addClass(klss);
	},

	/**
	 * [_initText description]
	 * @param  {[type]} type [description]
	 * @return {[type]}      [description]
	 */
	_initText: function(type) {
		var opts = this.options;

		var tag = 'span';

		var pos = 'bottom';
		if (type == 'text-icon')
			pos = 'top';

		this.text = new Element(tag, {
			'class': 'button-text',
			'html': opts.text
		}).inject(this.element, pos);

	},

	/**
	 * [_initClass description]
	 * @return {[type]} [description]
	 */
	_initClass: function() {
		var opts = this.options;
		//_log(this.name);

		if (this.options.klss)
			this.element.addClass('button-'+opts.klss);

		if (this.options.type)
			this.element.addClass('type-' + this.options.type);

		this.element.addClass(opts.prefix + this.name);

		if (this.options.clss)
			this.element.addClass(this.options.clss);
	},

	/**
	 * [_onElementMouseDown description]
	 * @param  {event} e [description]
	 * @return {[type]}   [description]
	 */
	_onElementMouseDown: function(e) {
		//return;
		console.log(e);
		e.stop();
	
		var x = e.event.offsetX;
		var y = e.event.offsetY;
		console.log('mousedown', x, y, e.event.layerX, e.event.layerY);

		coord = this.element.getCoordinates(this.element);

		var ink = new Element('span', {
			class: 'button-ink',
			styles: {
				left: x,
				top: y,

			}
		}).inject(this.element, 'top');

		this._initInk(ink, x, y, coord);

		this.fireEvent('mousedown');
	},

	/**
	 * [_initEffect description]
	 * @param  {[type]} inner [description]
	 * @param  {[type]} x     [description]
	 * @param  {[type]} y     [description]
	 * @return {[type]}       [description]
	 */
	_initInk: function(ink, x, y, coord) {
		var size = coord.height,
			top = 0,
			duration = 750;

		if (coord.width > size) {
			size = coord.width;
			top = (coord.height - coord.width) / 2;
		}

		var fx = new Fx.Morph(ink, {
		    duration: duration,
		    link: 'chain',
		    transition: Fx.Transitions.Quart.easeOut
		});

		fx.start({
		    height: size,
		    width: size,
		    left: 0,
		    top: top,
			opacity: 0
		});

		(function() {
			ink.destroy();
		}).delay(duration);
	},

	/**
	 * [_onElementMouseDown description]
	 * @param  {event} e [description]
	 * @return {[type]}   [description]
	 */
	_onElementClick: function(e) {
		var opts = this.options;
		e.stopPropagation();
		if (opts.emit && this.state != 'disabled') 
			this.fireEvent(opts.emit);
			this.fireEvent('press', opts.emit);
			this.fireEvent('pressed', opts.emit);

		if (opts.call && this.state != 'disabled')
			opts.call();
	},

	/**
	 * [_onElementMouseUp description]
	 * @return {[type]} [description]
	 */
	_onElementMouseUp: function(){
		var opts = this.options;
		if (this.options.type == 'check') {
			if (this.state == 'checked')
				this.setState(null);
			else this.setState('checked');
		}

		//this.react.destroy();
	}
});
