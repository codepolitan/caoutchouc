/*

DRAFT

*/

UI.Layout = new Class({

	Implements: [Events, Options],

	options: {

		layout: {
			desktop: {
				node: {
					clss: 'UI.Container',
					name: 'main',
				}
			}
		},
		defaultClss: 'UI.Container',
		shorcuts: ['type', 'size', 'klss', 'name']
	},

	initialize: function(options) {
		this.setOptions(options);
		var opts = this.options;



		this.layout = opts.layout;
		this.container = opts.container;

		// define

		this.container = {};
		//this.view = {};
		this.clss = {};

		this._initLayout();

	// object.level++;

	},

	_initLayout: function() {
		var opts = this.options,
			layout = opts.layout;

		// check media and decide what layout to use

		//if (agent = 'mobile') // or if screen size
		//	var node = layout.mobile.node;

		var node = layout.desktop.node;

		// then _initNode

		this._initNode(node);
	},


	/*
		function : _initContainer

			Build the split containers

	*/
	_initNode: function(node) {
		var self = this,
			opts = this.options;

		if (opts.node === null) return;

		this.nodes = [];

		if (typeOf(opts.node) == 'array') {
			opts.node.each(function(node){
				self._initClass(node);
			});

		} else if (typeOf(opts.node) == 'object') {
			node = opts.node;

			this._initClass(node);
		}
	},



	_initClass: function(node, element) {

		if (!node.clss)
			node.clss = 'UI.Component';

		node.container = this.element;
		node.main = this.main;

		node.opts = node.opts || {};

		// init someshort cuts

		if (node.size)	node.opts.size = node.size;

		//console.log(node);

		var clss = new UI[node.clss](node);

		this.addEvent('resize', function() {
			container.fireEvent('resize');
		});
	},



	/*
	Method: build
		private function

		Creates html structure and inject it to the dom.

	Returns:
		(void)

	*/

	_initClass: function(name, object, container) {
		//console.log('floor.sapce.build',object.level,object.name);

		container = container || document.body;
		floor.build.count = floor.build.count++ || 1;

		//console.log('count sub space',floor.space.count);
		var clss = {};

		if (typeOf(object) == 'object') {
			if (!object.clss)
				object.clss = 'view';

			var names = clss.split(/\./);

			console.log(names);

			clss = new UI[object.clss.capitalize()](object)
			.inject(container);

			// should define ui.controller.view.register
			if (!floor.ui[name])
				floor.ui[name] = {};

			floor.ui[name][object.name] = view;
		}

		/*if (object.views) {
			object.views.each( function(sub, i) {
				this.ui(name, sub, view.views[i]);
			},this);
		}*/

		return view;
	}
});


