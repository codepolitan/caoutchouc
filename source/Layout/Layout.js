
/**
 * UI Layout
 * @class UI.Layout
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
		clss: 'UI.Container',
		comp: ['body'],
		settings: {}
	},

	/**
	 * [initialize description]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	initialize: function(options){
		this.setOptions(options);
		var opts = this.options;

		//_log('initialize', opts);
		var node = opts.node;
		this.settings = opts.settings || {};
		this.component = {};
		this.components = [];

		this.container = new UI.Container({
			resizable: false,
			'class': 'ui-layout layout-' + opts.node._name
		}).inject(opts.container);

		this.map = new UI.Container({
			resizable: false,
			'class': 'ui-map map-' + opts.node._name
		});

		//_log('Layout container', this.container);

		this.container.addClass('ui-layout');
		this.container.addClass('layout-' + opts.node._name);


		node.container = this.container;

		this._process(node);

		//console.log(this.component);

		this._initResizers(this.components);

		return this;
	},

	/**
	 * [_process description]
	 * @param  {[type]} mnml [description]
	 * @return {[type]}      [description]
	 */
	_process: function(node, type) {
		_debug('_process', node);
		var list = node._list || [];

		for (var i = 0, len = list.length; i < list.length; i++) {
			//_log('--', list[i]);
			var name = list[i],
				comp = node[name] || {};

			comp.clss = comp.clss || this.options.clss;
			comp.opts = comp.opts || {};
			comp.opts.name = name;

			if (type != 'tab') {
				comp.opts.container = node.container;
			}

			var object = this._object(comp);

			if (type == 'tab') {
				console.log('tabtabta', object);
				object.options.noResizer = true;
				node.container.addTab(object);
			}

			object.element.addClass('container-'+name);

			if (i === 0)
				object.element.addClass('state-focus');

			if (comp.node) {
				//_log('-!!---', object.options.clss);

				if (object.options.clss == 'tab') {
					comp.node.container = object;
					var c = this._process(comp.node, 'tab');
				} else {
					comp.node.container = object;

					this._process(comp.node);
				}
			}
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
		//_log('_object', comp.clss);
		var name = comp.opts.name;
		var clss = mnml.strToClss(comp.clss);

		//comp.opts.container = comp.container;
		var object = this.component[name] = this[name] = new clss(comp.opts);

		if (this.settings[name] && this.settings[name].hidden) {
			//_log('hide', name, this.settings[name], this.settings[name].visible);
			object.element.setStyle('display', 'none');
		}

		if (this.settings[name] && this.settings[name].height) {
			object.element.setStyle('flex', 'none');
			object.element.setStyle('height', this.settings[name].height);
		}

		if (this.settings[name] && this.settings[name].width) {
			//_log('settinga', name, this.settings[name].width);
			object.element.setStyle('flex', 'none');
			object.element.setStyle('width', this.settings[name].width);
		}

		this.addEvents({
			resize: function() {
				object.fireEvent('resize');
			},
			drag: function() {
				object.fireEvent('resize');
			},
			normalize: function() {
				object.fireEvent('resize');
			},
			maximize: function() {
				object.fireEvent('resize');
			}
		});

		this.components.push(object);

		return this[name];
	}

});
