/*
 ---
 description: Base of all ui name.

 authors: [moolego,r2d2]

 requires:
 - core:1.2.1: '*'

 provides: [UI.Component]

 ...
*/

UI.Component = new Class({

	Implements: [Events, Options],

	name: 'component',
	component: 'component',

	options: {
		lib: 'ui',
		prefix: 'ui-',

		component: 'component',
		name: 'component',
		tag: 'span',
		attr: ['class', 'styles', 'events', 'id', 'name', 'html', 'title'],

		fx: {
			adaptLocation: {
				duration: 200,
				wait: true
			}
		}
	},

	initialize: function(options){
		this.setOptions(options);
		this.fireEvent('init');

		this._initOptions();
		this._initElement();
		this._initEvents();

		return this;
	},

	setState: function(state){
		this.element.removeClass('state-'+this.state);

		if (state)
			this.element.addClass('state-'+state);

		this.state = state;

		this.fireEvent('state', state);

		return this;
	},

	addComponent: function(node) {
		if (!node.component)
			node.component = 'container';

		node.container = this.element;
		node.main = this.main;

		//console.log(node);

		var container = new UI[node.component.capitalize()](node);

		this.addEvent('resize', function() {
			container.fireEvent('resize');
		});

		this.node.push(container);
		this.layout[this.main][container.name] = container;
		ui.node[this.main][node.name] = container;
	},


	/*
		function : _initState


	*/
	_initOptions: function(){
		var opts = this.options;
		//this.name = this.options.name;
		this.main = opts.main || opts.name;

		ui.node = ui.node || {};
		ui.node[this.main] = ui.node[this.main] || {};

		this.layout = opts.layout || {};
		this.layout[this.main] = this.layout[this.main] || {};

		this.dragHandlers = opts.dragHandlers || [];
	},

	/*
		function : _initState


	*/
	_initState: function(){
		this.setState(this.options.state);
	},

	/*
		function : _initElement

	*/
	_initElement: function(){
		var self = this,
			opts = this.options;

		this.fireEvent('create');

		var prop = this._initProps();

		//console.log('properties', prop);

		var element = new Element(opts.tag, prop);

		element.store('_instance', this);

		this.element = element;
		this.content = element;

		this.fireEvent('created');

		if ( opts.container && opts.container != 'window') {
			this.inject(opts.container);
			this.fireEvent('injected');
		}

		this._initState();
		this._initClass();
	},

	_initProps: function() {
		//console.log('_initProps');
		var opts = this.options,
			prop = {},
			props = [
				'id', 'name',
				'klass', 'styles',
				'html',	'title',
				'events'
			];

		for (var i = 0; i < props.length; i++ ) {
			var name = props[i];

			if (name == 'klass')
				name = 'class';

			//console.log('-', name, props[i]);

			if (opts[name])
				prop[name] = opts[props[i]];
		}

		return prop;
	},

	/*
		function : _initEvents

			Build the split containers

	*/
	_initClass: function() {
		var opts = this.options;

		//this.element.addClass(opts.prefix + opts.name);
		if (opts.klass)
			this.element.addClass(opts.klass);

		if (opts.type && typeOf(opts.type) !== undefined)
			this.element.addClass('type-' + opts.type);

		if (opts.state && typeOf(opts.state) !== undefined)
			this.element.addClass('state-' + opts.state);
	},

	/*
		function : _initEvents

			Build the split containers

	*/
	_initEvents: function(){
		var self = this,
			opts = this.options;

		this.addEvents({
			injected: function() {
				if ( opts.resizable && self._initResizer )
					self._initResizer();
			}
		});

		if (this.options.draggable && this.enableDrag)
			this.enableDrag();
	},

	/*
	Function: setHtmlContent
		Set html Content

	Arguments:
		source - (string) source's html

	Returns:
		this
	*/
	setHtmlContent: function(source){
		this.content.set('html',source);
		this.fireEvent('loadComplete');
		this.fireEvent('resize');

		return this;
	},
	/*
		function : inject

			Build the split containers

	*/
	inject: function(container, position){
		var self = this;

		this.fireEvent('inject');

		if (typeOf(container) == 'element')
			this.container = container;
		else if (typeOf(container) == 'object') {
			if (container.element)
			this.container = container.element;
		}

		if(container && container.component != 'window')
			this.element.inject(this.container, position);

		if (this.setSize)
			this.setSize();

		this.size = this.element.getSize();
		//ui.controller.element.register(this);

		this.isInjected = true;
		this.fireEvent('injected');

		return this;
	}
});
