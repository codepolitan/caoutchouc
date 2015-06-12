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
define([
	"UI/Component/Component",
	"UI/Component/Method",
	"UI/Container/Display"
], function(
	Component,
	Method,
	Display
) {

	var exports = new Class({

		Extends: Component,

		Implements: [Options, Events, Method, Display],

		name: 'container',

		options: {
			name: 'container',

			node: null,

			tag: 'div',
			/*resizable: false,
			resizeBorders: ['top','right','bottom','left']*/
		},

		/**
		 * [initialize description]
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		initialize: function(options){
			this.parent(options);

			if (this.options.comp) {
				this._initComp(this.options.comp);
			} else {
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
			//_log('_initElement', this);
			this.parent();

			var opts = this.options;
			this.menu = {};

			if ( opts.head ) this._initHead( opts.head );
			if ( opts.menu ) this.setMenu( opts.menu );
			if ( this.name === 'window' ) this._initBody();
			if ( opts.useOverlay ) this._initOverlay();

			if ( opts.foot ) this._initFoot( opts.foot );

			var self = this;
			this.addEvent('injected', function() {
				var direction = self.container.getStyle('flex-direction');
				//_log('direction', direction, this.element);
			});

			if (this.options.useUnderlay)
				this._initUnderlay();
		},

		/**
		 * [_initComponent description]
		 * @return {[type]} [description]
		 */
		_initComponent: function() {
			var self = this,
				opts = this.options;

			if (opts.node === null) return;

			//_log('_initComponent', opts.node);

			this.node = [];

			if (typeOf(opts.node) === 'array') {
				for (var i = 0; i < opts.node.length; i++) {
					this.addComponent(opts.node[i]);
				}
			} else if (typeOf(opts.node) === 'object') {
				var node = opts.node;

				this.addComponent(node);
			}

		},

		/**
		 * Initialize internal container components
		 * @param  {Mixin} comp Compenent description
		 * @return {[type]}      [description]
		 */
		_initComp: function(comp) {
			//_log('_initComp', comp);
			var self = this;

			if (typeOf(comp) === 'string' ) {
				this.addComp(comp);
			} else if (typeOf(comp) === 'object' ){

			} else if (typeOf(comp) === 'array' ) {
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
			//_log('addComp', name, position, element);
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
				.inject(this.element,'top')
				.addEvent('dblclick', function() {
					self.fireEvent('max');
				});
		},

		/**
		 * [setTitle description]
		 * @param {[type]} title [description]
		 */
		setTitle: function(title){
			if (this.title && this.head)
				return this.title.set('text', title);
		},

		/**
		 * [setTitle description]
		 * @param {[type]} title [description]
		 */
		getTitle: function(){
			//_log('getTitle', this.title);
			if (this.title)
				return this.title.get('html');
		},


		/**
		 * [setMenu description]
		 * @param {[type]} opts [description]
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

		/**
		 * [_initFoot description]
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		_initFoot: function(options) {
			var self = this;

			this.foot = new Element('div', {
				'class': 'container-foot'
			}).inject(this.element, 'bottom');
		},

		/**
		 * [_initStatus description]
		 * @param  {[type]} component [description]
		 * @param  {[type]} context   [description]
		 * @return {[type]}           [description]
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

		/**
		 * create an overlay displayed when container is disabled (when moved or resized)
		 * @return {[type]} [description]
		 */
		_initOverlay: function() {
			var self = this;

			this.overlay = new Element('div', {
				'class': 'container-overlay'
			}).inject(this.element);

			this.addEvent('onLoadComplete', function() {
				this.overlay.hide();
			});

			this.overlay.hide();

			this.addEvents({
				onBlur: function() {
					//_log('blur');
					self.overlay.show();
				},
				onDragComplete: function() {
					//_log('darg com', ui.window.underlay);
					self.overlay.hide();
				},
				onDragStart: function(){
					//_log('darg start', this);
					self.overlay.show();
				},
				onResizeComplete: function() {
					self.overlay.hide();
					this.coord = this.element.getCoordinates();
				},
				onResizeStart: function() {
					self.overlay.show();
				}
			});
		},

		/**
		 * [_initUnderlay description]
		 * @return {[type]} [description]
		 */
		_initUnderlay: function() {
			//_log('_initUnderlay', this.device);
			var self = this;

			this.underlay = new Element('div', {
				'class': 'dialog-underlay',
				styles: {
					zIndex: 10,
					//display: 'none'
				}
			}).inject(this.element, 'before');

			
			this.underlay.addEvent('click', function() {
				_log('click underlay');
				self.minimize();
			});

	 		this.addEvent('close', function(){
				self.underlay.destroy();
			});
	   	},

	   	/**
	   	 * [focus description]
	   	 * @return {[type]} [description]
	   	 */
		focus: function(){
			this.setState('focus');
		}
	});

	return exports;
});
