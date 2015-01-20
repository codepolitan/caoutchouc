
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
				'element.mousedown': '_onElementMouseDown',
				'element.click': '_onElementClick',
				'element.dblclick': '_onElementClick'
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

		if (this.options.clss)
			this.element.addClass(this.options.clss);

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
	},

	/**
	 * [_onElementMouseDown description]
	 * @param  {event} e [description]
	 * @return {[type]}   [description]
	 */
	_onElementMouseDown: function(e) {
		e.stop();
		
		var x = e.event.layerX;
		var y = e.event.layerY;
		console.log('mousedown', x, y);


		var layer = new Element('span', {
			class: 'button-force',
			styles: {
				left: x,
				top: y,
			}
		}).inject(this.element);

		this._initEffect(layer, x, y);

		this.fireEvent('mousedown');
	},

	/**
	 * [_initEffect description]
	 * @param  {[type]} layer [description]
	 * @param  {[type]} x     [description]
	 * @param  {[type]} y     [description]
	 * @return {[type]}       [description]
	 */
	_initEffect: function(layer, x, y) {

		var fx = new Fx.Morph(layer, {
		    //duration: 'long',
		    transition: Fx.Transitions.Sine.easeOut
		});

		fx.start({
		    height: [0, '100%'],
		    width: [0, '100%'],
		    left: 0,
		    top: 0,
		});
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
	}
});

