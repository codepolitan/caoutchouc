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

		component: 'component',
		name: 'component',
		tag: 'span',

		prefix: 'ui-',

		fx: {
			adaptLocation: {
				duration: 200,
				wait: true
			}
		}
	},

	initialize: function(options){
		this.setOptions(options);

		var opts = this.options;

		this.fireEvent('init');

		this._initOptions(opts);
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
	_initOptions: function(options){
		//this.name = this.options.name;
		this.main = this.options.main || this.options.name;

		ui.node = ui.node || {};
		ui.node[this.main] = ui.node[this.main] || {};

		this.layout = this.options.layout || {};
		this.layout[this.main] = this.layout[this.main] || {};

		this.dragHandlers = this.options.dragHandlers || [];
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

		var element = new Element(opts.tag, {
			'class': this.klass,
			styles: opts.styles,
			events: opts.events,
			id: opts.id,
			name: opts.name,
			html: opts.html
		});

		this.element = element;
		this.content = element;

		element.store('_instance', this);

		this.fireEvent('created');
		// inject the component if the container is given
		// console.log(opts.container);
		if ( opts.container && opts.container != 'window')
			this.inject(opts.container);

		if ( opts.resizable && this._initResizer )
			this._initResizer();

		this._initState();
		this._initClass();

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


		if (opts.type)
			this.element.addClass('type-' + opts.type);

		if (opts.state)
			this.element.addClass('state-' + opts.state);
	},

	/*
		function : _initEvents

			Build the split containers

	*/
	_initEvents: function(){
		var self = this;

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
