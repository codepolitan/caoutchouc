/*
 ---
 description: Base of all ui name.

 authors: [moolego,r2d2]

 requires:
 - core:1.2.1: '*'

 provides: [UI.Component]

 ...
*/


/**
* Minimalistic base of all ui components.
*
* @class UI.Component
* @extends {UI}
* @Require Mootools
* @return {parent} Class
* @example (start code)	new UI.Context(object); (end)
* @author [moolego,r2d2]
* @copyright © 1999-2014 - Jerome D. Vial. All Rights reserved.
*/


UI.Component = new Class({

	Implements: [Events, Options, UI.Binding],

	name: 'component',
	component: 'component',

	options: {
		lib: 'ui',
		prefix: 'ui-',

		component: 'component',
		name: 'component',
		type: null,
		element: {
			attr: ['class', 'styles', 'events', 'id', 'name', 'html', 'title'],
			tag: 'span',
			type: null
		}
	},

	/**
	 * Constructor
	 * @param  {Object} options [description]
	 * @return {Object}         [description]
	 */
	initialize: function(options){
		this.setOptions(options);

		this.fireEvent('init');

		this._initOptions();
		this._initElement();
		this._initEvents();
		this._initBinding();

		return this;
	},

	/**
	 * Setter for the state of the component
	 * @param {String} state active/disable etc...
	 */
	setState: function(state){
		this.element.removeClass('state-'+this.state);

		if (state)
			this.element.addClass('state-'+state);

		this.state = state;
		this.fireEvent('state', state);

		return this;
	},

	/**
	 * [addComponent description]
	 * @param {[type]} node [description]
	 */
	addComponent: function(node) {
		_log('addComponent', node);
		if (!node.component)
			node.component = 'container';

		node.container = this.element;
		node.main = this.main;

		//_log(node);

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

		this._initElementType();
		var prop = this._initProps();

		var tag = opts.tag || opts.element.tag;
		var name = opts.name || opts.element.name;

		var element = new Element(tag, prop);

		element.store('_instance', this);

		this.element = element;
		this.content = element;

		this.fireEvent('created');

		if ( opts.container && opts.container != 'window') {
			//console.log('_initElement', opts.name, opts.container);
			this.inject(opts.container);
			this.fireEvent('injected');
		}

		this._initState();
		this._initClass();
	},

	_initProps: function() {
		//_log('_initProps');
		var opts = this.options,
			prop = {},
			props = [
				'id', 'name', 'type',
				'klass', 'styles',
				'html',	'title',
				'events'
			],
			cuts = ['name', 'tag'];

		for (var i = 0; i < props.length; i++ ) {
			var name = props[i];

			if (name == 'klass')
				name = 'class';

			//_log('-', name, props[i]);

			if (opts.element.attr[name])
				prop[name] = opts.element.attr[props[i]];
		}

		return prop;
	},


	_initElementType: function() {},

	/*
		function : _initEvents

			Build the split containers

	*/
	_initClass: function() {
		var opts = this.options;

		//this.element.addClass(opts.prefix + opts.name);
		var klass = opts.klass || opts.element.klass;

		if (klass)
			this.element.addClass(klass);

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
	/**
	 * set html to element
	 * @param {String} source [description]
	 * @deprecated Use setContent instead
	 */
	setHtmlContent: function(source){
		this.content.set('html',source);
		this.fireEvent('loadComplete');
		this.fireEvent('resize');

		return this;
	},

	/**
	 * set content of the element
	 * @param {String} content [description]
	 */
	setContent: function(content) {
		this.content.set('html',content);

		this.fireEvent('resize');

		return this;
	},

	/*
		function : inject

			Build the split containers

		Note:
			will be refactor or rethink

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

		//_log('container', container);
		if(container && container.component != 'window') {
			//_log('element', this.element, this.container);
			//if (!this.container )
			this.element.inject(this.container, position);
			/*this.element
			else this.element.inject(this.element, position);*/
		}

		if (this.setSize)
			this.setSize();

		this.size = this.element.getSize();
		//ui.controller.element.register(this);

		this.isInjected = true;
		this.fireEvent('injected');

		return this;
	}
});
