
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
		settings: {}
	},

	/**
	 * [initialize description]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	initialize: function(options){
		this.setOptions(options);

		this._initLayout(this.options);

		return this;
	},

	/**
	 * [_initLayout description]
	 * @return {[type]} [description]
	 */
	_initLayout: function(opts) {
		//_log('initialize', opts);
		var node = opts.node;
		this.settings = opts.settings || {};
		this.component = {};
		this.components = [];

		this._initContainer(opts);
		this._processComponents(node);
	},

	/**
	 * [_initContainer description]
	 * @return {[type]} [description]
	 */
	_initContainer: function(opts) {

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

		opts.node.container = this.container;
	},

	/**
	 * [_process description]
	 * @param  {[type]} mnml [description]
	 * @return {[type]}      [description]
	 */
	_processComponents: function(node, type, level) {
		//_debug('_process', node);
		var list = node._list || [];
			level = level++ || 1;

		for (var i = 0, len = list.length; i < list.length; i++) {
			//_log('--', list[i]);
			var name = list[i],
				comp = node[name] || {};

			comp.clss = comp.clss || this.options.clss;
			comp.opts = comp.opts || {};
			comp.opts.name = name;
			comp.opts.position = i + 1;
			comp.opts.nComp = i + 1;

			if (i == list.length - 1) {
				console.log('last--', name);
				comp.last = true;
			}

			if (type != 'tab') {
				comp.opts.container = node.container;
			}

			var component = this._initComponent(comp);

			if (type == 'tab') {
				//console.log('tab', component);
				component.options.noResizer = true;
				node.container.addTab(component);
			}

			component.element.addClass('container-'+name);

			if (comp.node) {
				comp.node.container = component;

				if (component.options.clss == 'tab') {
					var c = this._processComponents(comp.node, 'tab');
				} else {
					this._processComponents(comp.node);
				}
			}
		}
	}
});
