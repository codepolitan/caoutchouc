
/**
 * sick layout
 * @class sick.Layout
 * @implements {Events, Options}
 */

UI.Layout = new Class({

	Implements: [Events, Options],

	/**
	 * sick layout Options
	 * @type {Object}
	 * @param {name} [name] layout
	 * @param {Object} [clss] Default component class
	 */
	options: {
		name: 'layout',
		clss: 'UI.Layout',
		comp: ['body']
	},

	/**
	 * [initialize description]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	initialize: function(options){
		this.setOptions(options);

		this._init(this.options);

		return this;
	},

	/**
	 * init ui.layout
	 * @param  {[type]} opts [description]
	 * @return {[type]}      [description]
	 */
	_init: function(opts) {
		_log('_init', opts);
		var node = opts.node;

		this.container = new Element('div', {
			'class': 'ui-layout layout-' + opts.node._name
		}).inject(opts.container.body);

		node.container = this.container;

		this._process(node);
	},

	/**
	 * [_process description]
	 * @param  {[type]} mnml [description]
	 * @return {[type]}      [description]
	 */
	_process: function(node) {
		_debug('_process', node);
		var list = node._list || [];

		//_log('-----process', node._list);
		for (var i = 0, len = list.length; i < list.length; i++) {
			//_log('--', list[i], node[list[i]]);
			var name = list[i],
				comp = node[name] || {};

			comp.clss = comp.clss || this.opts.clss;
			comp.opts = comp.opts || {};
			comp.opts.name = name;
			comp.opts.container = node.container;

			//_log('---', comp, this.opts.wrap);
			var object = this._object(comp);

			if (i === 0)
				object.element.addClass('state-focus');

			/*if (comp.node) {
				_log('-!!---', object.body);
				comp.node.container = object.body;

				this._process(comp.node);
			}*/
		}
	},

	/**
	 * [_array description]
	 * @param  {[type]} object [description]
	 * @return {[type]}        [description]
	 */
	_array: function(array) {
		_debug('_array', array);
		var list = object._list || [];

		for (var i = 0, len = list.length; i < list.length; i++) {
			var name = list[i];
			var comp = object[name];
		}
	},

	/**
	 * Instanciate the given object comp
	 * @param  {object]} comp list component
	 * @return {[type]}      [description]
	 */
	_object: function(comp) {
		_debug('_object', comp);
		var name = comp.opts.name;
		var clss = sick.api.toclss(comp.clss);

		//comp.opts.container = comp.container;
		var object = this[name] = new clss(comp.opts);

		this.addEvent('resize', function() {
			object.fireEvent('resize');
		});

		return this[name];
	}

});
