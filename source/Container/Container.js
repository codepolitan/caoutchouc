/*
	Class: UI.Container
		The UI.Container class defines objects manage the content of the container
		that manage containers use by several object like windows, menus.
*/

/**
 * [initialize description]
 * @class  UI.Container
 * @extends {UI.Component}
 * @author Jerome Vial
 */
UI.Container = new Class({

	Extends: UI.Component,

	name: 'container',

	options: {
		name: 'container',

		node: null,

		tag: 'div',
		resizable: true,
		resizeBorders: ['top','right','bottom','left']
	},

	/**
	 * [initialize description]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	initialize: function(options){
		this.parent(options);

		if (this.options.comp)
			this._initComp(this.options.comp);
		else {
			this._initComponent();
		}

		return this;
	},

	/*
	Method: _initElement
		private function

		Creates html structure and inject it to the dom. The container is _initElement with two elements: the wrapper and the content.
		If the option scroll is set to true, it will also add the scrollbar object

	Returns:
		(void)

	See also:
		<UI.Component::_initElement>
	*/
	_initElement: function() {
		this.parent();

		var opts = this.options;
		this.menu = {};

		if ( opts.head ) this._initHead( opts.head );
		if ( opts.menu ) this.setMenu( opts.menu );
		if ( this.name == 'window' ) this._initBody();
		if ( opts.useOverlay ) this._initOverlay();

		if ( opts.foot ) this._initFoot( opts.foot );
	},

	/*
		function : _initContainer

			Build the split containers

	*/
	_initComponent: function() {
		var self = this,
			opts = this.options;

		if (opts.node === null) return;

		_log('_initComponent', opts.node);

		this.node = [];

		if (typeOf(opts.node) == 'array') {
			for (var i = 0; i < opts.node.length; i++) {
				this.addComponent(opts.node[i]);
			}
		} else if (typeOf(opts.node) == 'object') {
			var node = opts.node;

			this.addComponent(node);
		}

	},

	/*
	Method: _initComp
		private function

		create an overlay displayed when container is disabled (when moved or resized)

	Returns:
		(void)
	 */
	/**
	 * Initialize internal container components
	 * @param  {Mixin} comp Compenent description
	 * @return {[type]}      [description]
	 */
	_initComp: function(comp) {
		//_log('_initComp', comp);
		var self = this;

		if (typeOf(comp) == 'string' ) {
			this.addComp(comp);
		} else if (typeOf(comp) == 'object' ){

		} else if (typeOf(comp) == 'array' ) {
			comp.each(function(name) {
				self.addComp(name);
			});
		}
	},

	/**
	 * [_initComp description]
	 * @param  {[type]} name [description]
	 * @return {[type]}      [description]
	 */
	addComp: function(name, position, element) {
		_debug('addComp', name, position, element);
		var self = this;
		position = position || 'bottom';
		element = element || this.element;

		//_log('_addComp', name);

		if (!element) {
			_warn('Container is ', element);
			return;
		}

		var comp = this[name] = new Element('div')
			.addClass('container-'+name)
			.inject(element, position);

		return comp;
		/*this.addEvents({
			resize: function() {
				//_log('resize from head', this, this.head.getSize().y+'px');
				this.element.setStyle('padding-top', this.head.getSize().y+'px');
			}
		});*/
	},

	/*
	Method: _initClass
		private function

		_initClass container related class

	Returns:
		(void)
	*/
	_initClass: function(){
		this.parent();

		this.element.addClass('ui-container');
	},

	/*
	Method: _initHead
		private function

		create an overlay displayed when container is disabled (when moved or resized)

	Returns:
		(void)
	 */
	_initHead: function() {
		var self = this;

		this.head = new Element('div')
			.addClass('container-head')
			.inject(this.element,'top');
	},

	/*
	Function: setTitle
		set title html

	Arguments:
		html - (string) html formatted title

	Returns:
		this
	*/
	setTitle: function(title){
		if (this.title && this.head)
			return this.title.set('text', title);
	},

	/*
	Method: setMenu
		inject a menu in da head



	Returns:
		(void)
	 */
	setMenu: function(opts) {
		var self = this,
			comp = opts.comp || 'head';

		if (!this[comp])
			this['_init'+comp.capitalize()]();

		var container = this[comp].getElement('.'+comp+'-menu');

		if (!container) {
			container = new Element('div', {
				'class': comp+'-menu'
			}).inject(this[comp]);
		}

		//_log('_init'+comp.capitalize());
		var menu = new UI.Menu(opts);

		this.menu[opts.name] = menu;

		// _log('setMenu', opts.name, menu);

		menu.addEvents({
			'toggle': function() {
				self.fireEvent('resize');
			},
			'change': function(value) {
				self.fireEvent('menuChange', value);
			}
		}).inject(container);

		this.addEvents({
			onMinimize: function() {
				menu.hide();
			},
			onNormalize: function() {
				menu.show();
			}
		});

		//  need to find an event driven solution
		this.element.setStyle('padding-top', this[comp].getSize().y+'px');

		return menu;
	},

	/*
	Method: _initFoot
		private function

		inject a container, add it to the bottom

	Returns:
		(void)
	 */
	_initFoot: function(options) {
		var self = this;

		this.foot = new Element('div', {
			'class': 'container-foot'
		}).inject(this.element, 'bottom');
	},

	/*
	Method: _initStatus
		private function

		inject a container, add it to the bottom

	Returns:
		(void)
	 */
	_initStatus: function(component, context) {
		var self = this;

		component = component || 'foot';

		if (!this[component])
			this['_init'+component.capitalize()]();

		this.status = new Element('div', {
			'class': 'container-status'
		}).inject(this[component]);
	},

	/*
	Method: _initOverlay
		private function

		create an overlay displayed when container is disabled (when moved or resized)

	Returns:
		(void)
	 */
	_initOverlay: function() {
		this.overlay = new Element('div', {
			'class': 'container-overlay'
		}).inject(this.element);

		this.addEvent('onLoadComplete', function() {
			this.overlay.hide();
		});

		this.overlay.hide();
	},

	focus: function(){
		//_log('focus');
		//this.fireEvent('focus');
	},

	close: function() {
		//_log('!close');
		return;
	}
});
