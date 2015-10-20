/**
 * Minimalistic Class for UI.Component Management
 *
 * @class UI.Component
 * @author Jerome Vial
 * @copyright © 1999-2014 - Jerome D. Vial. All Rights reserved.
 */
define('UI/Base/Ajax', [

], function(

) {

	UI.Component.implement({

		/**
		 * Set Ajax Content
		 *
		 * @param {string} source url
		 * @return {this}
		 */
		setAjaxContent: function(source) {
			if (this.iframe) {
				this.iframe.dispose();
			}

			var request = new Request.HTML({
				url: source,
				update: this.content,
				method: 'get',
				onComplete: function() {
					this.fireEvent('loadComplete');
					this.fireEvent('resize');
				}.bind(this)
			}).send();

			return this;
		},

		/**
		 * Set JSON content
		 *
		 * @param {string} source url
		 * @return {this}
		 */
		setJsonContent: function(source) {
			var request = new Request.JSON({
				url: source,
				onComplete: function(response) {
					this.fireEvent('loadComplete', new Array(response));
					this.fireEvent('resize');
				}.bind(this)
			}).get();

			return this;
		},

		/**
		 * Set ajax content
		 *
		 * @param {string} source url
		 * @return {this}
		 */
		setIFrameContent: function(source) {
			//var self = this;

			//_log.debug('---setIFrameContent', this.content);

			if (!this.iframe) {
				//_log.debug('---',this.options.name);
				this.iframe = new IFrame({
					width: '100%',
					height: '100%'
				}).inject(this.content);
			}

			//self.iframe.setStyle('opacity',0);

			this.iframe.set('src', source)
				.addEvent('load', function() {
					//self.iframe.fade(1);
					this.fireEvent('loadComplete');
					this.fireEvent('loaded');
					this.fireEvent('resize');
				}.bind(this));

			return this;
		},

		/**
		 * Set ajax content
		 *
		 * @param {string} source url
		 * @return {this}
		 */
		/*setIFrameContent: function(source) {
			//var self = this;

			//_log.debug('---setIFrameContent', this.element, this.options);

			if (!this.iframe) {
				//_log.debug('---',this.options.component);
				if (this.content === this.element) {
					this.content = new Element(this.options.contentTag)
						.addClass('container-content')
						.addClass('view-hidden')
						.inject(this.element);
				}

				this.iframe = new IFrame({
					width: '100%',
					height: '100%'
				}).inject(this.content);
			}

			//self.iframe.setStyle('opacity',0);


			this.iframe.set('src', source)
				.addEvent('load', function() {
					//self.iframe.fade(1);
					this.fireEvent('loadComplete');
					this.fireEvent('loaded');
					this.fireEvent('resize');
				}.bind(this));

			return this;
		}*/

	});

});

/**
 * UI.Builder Class
 *
 * @class UI.Builder
 * @param {Object} json
 * @param {parent} container
 * @return {parent} the dom structure
 * @example (start code)	new UI.Builder(object); (end)
 * @author Jerome Vial
 * @copyright © 1999-2014 - Jerome D. Vial. All Rights reserved.
 */

define('UI/Base/Builder', function() {


	var exports = new Class({

		Implements: [Events, Options],

		options: {

		},

		initialize: function(object, container) {
			this._initElement(object, container);

			//object.level++;

		},

		/*
		Method: _initElement
			private function

			Creates html structure and inject it to the dom.

		Returns:
			(void)

		*/

		_initElement: function(object, container) {
			//_log.debug('builder._initElement container ',object.level,object.name);

			var container = {};

			if (typeOf(object) === 'object') {
				if (!object.container) {
					object.container = 'container';
				}

				container = new UI[object.container.capitalize()](object)
					.inject(container);

				// shoub define ui.controller.container.register
				if (!ui.controller.workspace) {
					ui.controller.workspace = {};
				}

				ui.controller.workspace[object.name] = container;

				//_log.debug(ui.controller.workspace);

			}

			//_log.debug('UI.Builder._initElement()', container.views);

			if (object.views) {
				object.views.each(function(sub, i) {
					new UI.Builder(sub, container.views[i]);
				});
			}

			return ui.controller.workspace;
		}
	});

	return exports;
});


/**
 * Binding Component Class
 *
 * @class UI.Component.Binding
 * @author Jerome Vial, Bruno Santos
 */
define('UI/Component/Binding', [
	
], function(

) {

	var exports = new Class({

		options: {
			api: {
				emit: 'trigger'
			}
		},

		/**
		 * Events communication controller
		 * Event bindings
		 * @method _initBinding
		 * @return {object}      this.bind
		 */
		_initBinding: function() {
			var binding = this.options.binding;
			//_log.debug('_initBinding', binding);

			if (!binding) return;

			var list = binding._list;

			for (var i = 0; list.length > i; i++ ) {
				var bind = binding[list[i]];
				this.binding = this.binding || {};

				this._bindObject(bind);
			}

			return this.binding;
		},

		/**
		 * Bind an object
		 * @param  {object} obj obj whit key and value to be bound
		 * @return {void}
		 */
		_bindObject: function(obj) {
			//_log.debug('_bindObject', obj);
			for (var key in obj) {
				var value = obj[key];

				if (typeof value != 'object') {
					this._bindkey(key, value);
				} else {
					this._bindList(key, value);
				}
			}
		},

		/**
		 * Bind a list of events to a specific object
		 * @param  {string} key Object path that will listen
		 * @param  {array} values List if values to bind
		 * @return {void}
		 */
		_bindList: function(key, values) {
			//_log.debug('_bindList', key, values);
			for (var i = 0; i < values.length; i++) {
				this._bindkey(key, values[i]);
			}
		},

		/**
		 * Bind to object path
		 * get the event,
		 * get the reference to the last key of the first object,
		 * check if there is a event or a mehtod to bind
		 * @param  {string} key Object path that will listen
		 * @param  {string} val Object path to be bound
		 * @return {void}
		 */
		_bindkey: function(key, val) {
			//_log.debug('_bindkey', key, val);
			var eventKeys = key.split('.');
			var ev = eventKeys[eventKeys.length - 1];

			eventKeys.pop();
			var listenerCtx = this._path(eventKeys.join('.'));

			var valKeys = val.split('.');

			//Check if it's an event
			if (valKeys[valKeys.length - 2] == this.options.api.emit) {
				var emit = valKeys[valKeys.length - 1];
				this._bindEvent(listenerCtx, ev, emit, val);
			} else {
				this._bindMethod(listenerCtx, ev, val);
			}
		},

		/**
		 * Listen to the given event and trigger another
		 * @param  {object} listenerCtx Object to listen
		 * @param  {string} ev Event that will be listened
		 * @param  {string} emit Event that will be emitted
		 * @param  {string} val Method path to be bound
		 * @return {void}
		 */
		_bindEvent: function(listenerCtx, ev, emit, val) {
			//_log.debug('_bindEvent', listenerCtx, ev, emit, val);
			var emitter = this.options.api.emit;

			var valKeys = val.split('.');
			valKeys.splice(-2, 2);

			var boundCtx = this._path(valKeys.join('.'));

			if (listenerCtx && listenerCtx.addEvent && boundCtx && boundCtx.fireEvent) {
				listenerCtx.addEvent(ev, boundCtx.fireEvent.bind(boundCtx, emit));
				// keep track of the binding
				//this.binding[key] = event;
			} else if (listenerCtx && listenerCtx.on && boundCtx && boundCtx.fireEvent) {
				listenerCtx.on(ev, boundCtx.fireEvent.bind(boundCtx, emit));
			} else {
				_log.debug('Missing context or method', listenerCtx, val);
			}
		},

		/**
		 * Listen to the given event and bind to the given method
		 * @param  {object} listenerCtx Object to listen
		 * @param  {string} ev Event that will be listened
		 * @param  {string} val Method path to be bound
		 * @return {void}
		 */
		_bindMethod: function(listenerCtx, ev, val) {
			//_log.debug('_bindMethod', listenerCtx, ev, val);
			var method = this._path(val);

			var valKeys = val.split('.');
			valKeys.pop();
			var boundCtx = this._path(valKeys.join('.'));

			if (listenerCtx && listenerCtx.addEvent && method) {
				listenerCtx.addEvent(ev, method.bind(boundCtx));
				// keep track of the binding
				//this.binding[key] = method;
			} else if (listenerCtx && listenerCtx.on && method) {
				listenerCtx.on(ev, method.bind(boundCtx));
			} else {
				//_log.debug('Missing context or method', listenerCtx, val);
			}
		},

		/**
		 * Return the last reference to a object
		 * @param  {string} str Object path for example key1.key2.key3
		 * @return {object}
		 */
		_path: function(str) {
			//_log.debug('_path', str);
			if (!str) return this;
			else if (!str.match(/\./)) return this[str];

			var last;

			var keys = str.split('.');
			for (var i = 0, l = keys.length; i < l; i++) {
				var key = keys[i];

				last = last || this;
				last = last[key];
			}

			return last;
		}

	});

	return exports;
});

/**
 * Component Class
 * The base class for all ui components
 *
 * @class UI.Component
 * @extends {UI}
 * @return {parent} Class
 * @example (start code)	new UI.Context(object); (end)
 * @author [moolego,r2d2]
 * @copyright © 1999-2015 - Jerome D. Vial. All Rights reserved.
 */
define('UI/Component/Component', [
	'UI/Component/Binding',
	'UI/Component/Method',
	'UI/Component/Location',
	'UI/Component/Drag',
	'UI/Component/Resize'
], function(
	Binding,
	Method,
	Location,
	Drag,
	Resize
) {

	var _log = __debug('ui:component');

	var exports = new Class({

		Implements: [
			Events,
			Options,
			Binding,
			Method,
			Location,
			Drag,
			Resize
		],

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
		initialize: function(options) {
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
		 * @param {string} state active/disable etc...
		 */
		setState: function(state) {
			this.element.removeClass('state-' + this.state);

			if (state) {
				this.element.addClass('state-' + state);
			}

			this.state = state;
			this.fireEvent('state', state);

			return this;
		},

		/**
		 * [addComponent description]
		 * @param {Object} node
		 */
		addComponent: function(node) {
			_log.debug('addComponent', node);
			if (!node.component) {
				node.component = 'container';
			}

			node.container = this.element;
			node.main = this.main;

			//_log.debug(node);

			var container = new UI[node.component.capitalize()](node);

			this.addEvent('resize', function() {
				container.fireEvent('resize');
			});

			this.node.push(container);
			this.layout[this.main][container.name] = container;
			ui.node[this.main][node.name] = container;
		},

		/**
		 * [_initOptions description]
		 * @return {void}
		 */
		_initOptions: function() {
			var opts = this.options;
			//this.name = this.options.name;
			this.main = opts.main || opts.name;

			ui.node = ui.node || {};
			ui.node[this.main] = ui.node[this.main] || {};

			this.layout = opts.layout || {};
			this.layout[this.main] = this.layout[this.main] || {};

			this.dragHandlers = opts.dragHandlers || [];
		},

		/**
		 * [_initState description]
		 * @return {void}
		 */
		_initState: function() {
			this.setState(this.options.state);
		},

		/**
		 * [_initElement description]
		 * @return {void}
		 */
		_initElement: function() {
			_log.debug('_initElement');

			var opts = this.options;

			this.fireEvent('create');

			this._initElementType();
			var prop = this._initProps();

			var tag = opts.tag || opts.element.tag;
			//var name = opts.name || opts.element.name;

			var element = new Element(tag, prop);

			element.store('_instance', this);

			this.element = element;
			this.content = element;

			this.fireEvent('created');

			if (opts.container && opts.container !== 'window') {
				//_log.debug('_initElement', opts.name, opts.container);
				this.inject(opts.container);
				this.fireEvent('injected');
			}

			this._initState();
			this._initClass();
		},

		/**
		 * [_initProps description]
		 * @return {Object}
		 */
		_initProps: function() {
			_log.debug('_initProps');

			var opts = this.options;
			var prop = {};
			var props = [
				'id', 'name', 'type',
				'klass', 'styles',
				'html', 'title',
				'events'
			];
			//var cuts = ['name', 'tag'];

			for (var i = 0; i < props.length; i++) {
				var name = props[i];

				if (name === 'klass') {
					name = 'class';
				}

				//_log.debug('-', name, props[i]);

				if (opts.element.attr[name]) {
					prop[name] = opts.element.attr[props[i]];
				}
			}

			return prop;
		},

		/**
		 * [_initElementType description]
		 * @return {void}
		 */
		_initElementType: function() {},

		/**
		 * [_initClass description]
		 * @return {void}
		 */
		_initClass: function() {
			var opts = this.options;

			//this.element.addClass(opts.prefix + opts.name);
			var klass = opts.klass || opts.element.klass;

			if (klass) {
				this.element.addClass(klass);
			}

			if (opts.type && typeOf(opts.type) !== undefined) {
				this.element.addClass('type-' + opts.type);
			}

			if (opts.state && typeOf(opts.state) !== undefined) {
				this.element.addClass('state-' + opts.state);
			}
		},

		/**
		 * [_initEvents description]
		 * @return {void}
		 */
		_initEvents: function() {
			//_log.debug('_initEvents');
			var self = this;
			var opts = this.options;

			this.addEvents({
				/**
				 * @ignore
				 */
				injected: function() {
					if (opts.resizable && self._initResizer) {
						self._initResizer();
					}
				},
				/**
				 * @ignore
				 */
				device: function(device) {
					//_log.debug('device', device);
					self.device = device;
				}
			});

			if (this.options.draggable && this.enableDrag) {
				this.enableDrag();
			}
		},

		/**
		 * [getName description]
		 * @return {string} name
		 */
		getName: function() {
			return this.options.name || this.name;
		},

		/**
		 * set html to element
		 * @param {string} source - (string) source's html
		 * @return {Object}
		 * @deprecated Use setContent instead
		 */
		setHtmlContent: function(source) {
			this.content.set('html', source);
			this.fireEvent('loadComplete');
			this.fireEvent('resize');

			return this;
		},

		/**
		 * set content of the element
		 * @param {string} content [description]
		 */
		setContent: function(content) {
			this.content.set('html', content);

			this.fireEvent('resize');

			return this;
		},

		/**
		 * [inject description]
		 * @param  {Object} container
		 * @param  {string} position
		 * @return {Object}
		 */
		inject: function(container, position) {
			_log.debug('inject', container, position);

			this.fireEvent('inject');

			if (typeOf(container) === 'element') {
				this.container = container;
			} else if (typeOf(container) === 'object') {
				if (container.element) {
					this.container = container.element;
				}
			}

			//_log.debug('container', container);
			if (container && container.component !== 'window') {
				//_log.debug('element', this.element, this.container);
				//if (!this.container )
				this.element.inject(this.container, position);
				/*this.element
				else this.element.inject(this.element, position);*/
			}

			if (this.setSize) {
				this.setSize();
			}

			//this.size = this.element.getSize();
			//ui.controller.element.register(this);

			this.isInjected = true;
			this.fireEvent('injected');

			return this;
		}
	});

	return exports;
});


/**
 * UI Component Drag
 * @class UI.Component.Drag
 * @author Jerome D. Vial
 */
define('UI/Component/Drag', [
	
], function(

) {

	var exports = new Class({

		options: {
			// Drag options
			draggable: false,
			dragLimitX: false,
			dragLimitY: false,

			dragHandlers: [],
			fx: {
				adaptLocation: {
					duration: 200,
					wait: true
				}
			}
		},

		/**
		 * [enableDrag description]
		 * @return {[type]} [description]
		 */
		enableDrag: function(){
			var self = this;

			if (this.dragHandlers.length === 0)
				this.dragHandlers = [];

			this.dragHandler = new Drag(this.element, {
				handle: this.dragHandlers,
				snap: 3,
				limit: {
					x: this.options.dragLimitX,
					y: this.options.dragLimitY
				},
				onStart: this.fireEvent.bind(this, 'onDragStart'),
				onDrag: this.fireEvent.bind(this, 'onDrag'),
				onComplete: this.fireEvent.bind(this, 'onDragComplete')
			});

			this.addEvent('onDragComplete', function(){
				self.adaptLocation();
			});

			return this;
		},

		/**
		 * [enableElementDrag description]
		 * @param  {[type]} element [description]
		 * @return {[type]}         [description]
		 */
		enableElementDrag: function(element){
			if (element === null) return;

			this.dragHandler = new Drag(this.element, {
				handle: element,
				snap: 3,
				limit: {
					x: this.options.dragLimitX,
					y: this.options.dragLimitY
				},
				onStart: this.fireEvent.bind(this, 'onDragStart'),
				onDrag: this.fireEvent.bind(this, 'onDrag'),
				onComplete: this.fireEvent.bind(this, 'onDragComplete')
			});

			this.addEvent('onDragComplete', this.adaptLocation.bind(this));

			return this;
		},

		/**
		 * [disableDrag description]
		 * @return {[type]} [description]
		 */
		disableDrag: function(){
			if (this.dragHandler)
				this.dragHandler.detach();

			return this;
		}
	});

	return exports;
});


/**
 * UI Component Location
 * @class UI.Component.Location
 * @author Jerome D. Vial
 */
define('UI/Component/Location', [
	
], function(

) {

	var exports = new Class({

		_initLocation: function() {
			var list = ['left', 'top', 'right', 'bottom'];
			var location = this.getInitialLocation();

			for (var i = 0; i < list.length; i++) {
				if (location[list[i]]) {
					this.options[list[i]] = location[list[i]];
				}
			}

			// _log.debug('location', location);

			this.element.setStyles(location);
		},

		setLocation: function(left, top, morph){
			var opts = this.options,
				el = this.element;

			this.element.left = left || opts.left || el.getCoordinates().x;
			this.element.top = top || opts.top || el.getCoordinates().y;

			this.element[morph ? 'morph' : 'setStyles']({
				top: this.element.top,
				left: this.element.left
			});

			return this;
		},

		getCenterLocation: function(){
			var location = {};
			var height = this.options.height;

			if (this.options.height != 'auto')
				location.top = (window.getHeight() - height.toInt()) / 2;
			else location.top = 160;

			location.left = (window.getWidth() - this.options.width.toInt()) / 2;

			return location;
		},


		/*
		Function: getInitialLocation
			private function

			Return the initial location depending on location options and window's size

		Returns:
			coordinates - (object) Object containing top and left properties
		*/
		getInitialLocation: function(){
			if (this.options.top || this.options.right || this.options.bottom || this.options.left) {
				/*//right || left
				var left = (this.options.right && !this.options.left) ?
					Window.getWidth() - this.options.right - this.options.width :
					this.options.left;

				//top || bottom
				var top = (this.options.bottom && !this.options.top) ?
					Window.getHeight() - this.options.bottom - this.options.height :
					this.options.top;*/

				return {
					top: this.options.top,
					bottom: this.options.bottom,
					left: this.options.left,
					right: this.options.right
				};
			} else if (this.options.location == 'center') {
				return this.getCenterLocation();
			} else {
				var c = ui.window.getCascadeLocation(this);
				return {
					top: c.top,
					left: c.left
				};
			}
		},

		adaptLocation: function(){
			var location = {};
			var needed = false;
			var coordinates = this.element.getCoordinates();

			if (coordinates.top.toInt() > window.getHeight()) {
				location.top = window.getHeight() - Number.random(25, 75);
				needed = true;
			}

			if (coordinates.top.toInt() < 0) {
				location.top = 50;
				needed = true;
			}

			if (coordinates.left.toInt() + this.element.getStyle('width').toInt() < 0) {
				location.left = Number.random(25, 75) - this.element.getStyle('width').toInt();
				needed = true;
			}

			if (this.element.getStyle('left').toInt() > window.getWidth()) {
				location.left = window.getWidth() - Number.random(25, 75);
				needed = true;
			}

			if (needed) {
				if (this.options.fx && this.options.fx.adaptLocation) {
					if (!this.reposFx) {
						this.reposFx = new Fx.Morph(this.element, this.options.fx.adaptLocation);
					}
					this.reposFx.start(location);
				}
			}
		}
	});
	
	return exports;
});


/**
 * UI Component Location
 * @class UI.Component.Location
 * @author Jerome D. Vial
 */
define('UI/Component/Method', [
	
], function(

) {

	var exports = new Class({

		/**
		 * [toElement description]
		 * @return {[type]} [description]
		 */
		toElement: function() {
			return this.element;
		},

		/**
		 * [show description]
		 * @return {[type]} [description]
		 */
		show: function(){
			this.fireEvent('show');
			this.element.show();

			return this;
		},


		/**
		 * [hide description]
		 * @return {[type]} [description]
		 */
		hide: function(){
			this.fireEvent('hide');
			this.element.hide();

			return this;
		},

		/**
		 * [show description]
		 * @return {[type]} [description]
		 */
		fade: function(value){
			this.fireEvent('fade');
			this.element.fade(value);

			return this;
		},


		/**
		 * [getStyle description]
		 * @param  {[type]} style [description]
		 * @return {[type]}       [description]
		 */
		getStyle: function(style){
			return this.element.getStyle(style);
		},

		/**
		 * [getSize description]
		 * @return {[type]} [description]
		 */
		getSize: function() {
			//_log.debug('------',typeOf(this.element));
			if (typeOf(this.element) == 'object')
				//_log.debug(this.options.name);

			return this.element.getSize();
		},

		/**
		 * [getComputedSize description]
		 * @return {[type]} [description]
		 */
		getComputedSize: function() {
			return this.element.getComputedSized();
		},

		/**
		 * [getCoordinates description]
		 * @return {[type]} [description]
		 */
		getCoordinates: function(context) {
			return this.element.getCoordinates(context);
		},

		/**
		 * [addClass description]
		 * @param {[type]} klass [description]
		 */
		addClass: function(klass){
			this.element.addClass(klass);
			return this;
		},

		/**
		 * [removeClass description]
		 * @param  {[type]} klass [description]
		 * @return {[type]}       [description]
		 */
		removeClass: function(klass){
			return this.element.removeClass(klass);
		},

		/**
		 * [get description]
		 * @param  {[type]} property [description]
		 * @return {[type]}          [description]
		 */
		get: function(property){
			return this.element.get(property);
		},

		/**
		 * [morph description]
		 * @param  {[type]} props [description]
		 * @return {[type]}       [description]
		 */
		morph: function(props){
			return this.element.morph(props);
		},

		/**
		 * [setSize description]
		 * @param {[type]} width  [description]
		 * @param {[type]} height [description]
		 */
		setSize: function(width, height){
			this.element.x = width || this.options.width;
			this.element.y = height || this.options.height;

			if (this.element.x)
				this.element.setStyle('width', this.element.x);

			if (this.element.y)
				this.element.setStyle('height', this.element.y);

			this.fireEvent('resize');
			return this;
		},

		/**
		 * [setStyle description]
		 * @param {[type]} style [description]
		 * @param {[type]} value [description]
		 */
		setStyle: function(style, value){
			this.element.setStyle(style, value);

			return this;
		},

		/**
		 * [setStyles description]
		 * @param {[type]} styles [description]
		 */
		setStyles: function(styles){
			this.element.setStyles(styles);

			return this;
		},

		/**
		 * [getElement description]
		 * @param  {[type]} string [description]
		 * @return {[type]}        [description]
		 */
		getElement: function(string){
			return this.element.getElement(string);
		},

		/**
		 * [getElements description]
		 * @param  {[type]} string [description]
		 * @return {[type]}        [description]
		 */
		getElements: function(string){
			return this.element.getElements(string);
		},

		/**
		 * [submit description]
		 * @param  {[type]} string [description]
		 * @return {[type]}        [description]
		 */
		submit:  function(string){
			return this.element.submit(string);
		},

		/**
		 * [dispose description]
		 * @return {[type]} [description]
		 */
		dispose: function(){
			return this.element.dispose();
		},

		/**
		 * [destroy description]
		 * @return {[type]} [description]
		 */
		destroy: function(){
			this.element.destroy();
			return;
		}
	});

	return exports;
});


/**
 * UI Component Progress
 * @class UI.Component.Progress
 * @author Jerome D. Vial
 */
define('UI/Component/Progress', [
	"UI/Component/Component"
], function(
	Component
) {

	var exports = new Class({

		Extends: Component,

		options: {
			name: 'progress',
			klass: 'ui-progress',

			tag: 'div',
		},

		/**
		 * [set description]
		 * @param {[type]} ratio [description]
		 */
		set: function(ratio) {
			var width = 0;

			var percentage = (ratio[0] * 100) / ratio[1];

			if (percentage > 0)
				width = this.element.getSize().x * percentage / 100;

			this.bar.setStyle('width', width.toInt());
			this.status.set('html', ratio[0] + ' / '+ ratio[1]);

			return this;
		},

		/**
		 * [setStatus description]
		 * @param {[type]} text [description]
		 */
		setStatus: function(text) {
			this.status.set('html', text);

			return this;
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function() {
			this.parent();

			this.status = new Element('span', {
				'class': 'progress-status'
			}).inject(this.element);

			this.bar = new Element('div', {
				'class': 'progress-bar'
			}).inject(this.element);
		}
	});

	return exports;
});


/**
 * Resize Component Class
 * @class UI.Component.Resize
 * @author Jerome D. Vial
 */
define('UI/Component/Resize', [
	
], function(

) {

	var exports = new Class({
		options: {
			// Resize options
			resizer: {
				'class': 'ui-resizer'
			},
			resizable: false,
			resizeLimitX: [100, screen.width],
			resizeLimitY: [100, screen.height]
		},

		/**
		 * [_initResizer description]
		 * @return {[type]}
		 */
		_initResizer: function(){
			//_log.debug('_initResizer', this.options.resizable);
			this.resizeHandlers = [];

			var wrapper = new Element('div', {
				'class': 'layer-resizer'
			}).inject(this.element, 'bottom');

			this.resizer = new Element('div', this.options.resizer)
			.addEvents({
				click: function(e){
					e.stop();
				},
				mousedown: function(e) {
					e.stop();
				}
			}).inject(wrapper, 'bottom');

			this.resizeHandlers.push(this.resizer);

			this.enableResize(0);

			if (this.options.resizeBorders) {
				this.options.resizeBorders.each(function(border,i){
					this.resizeHandlers.push(new Element('div', {
						style: border+": 0",
						'class': 'ui-resizer-'+border
					})
					.addEvents({
						click: function(e){
							e.stop();
						},
						mousedown: function(e) {
							e.stop();
						}
					}).inject(wrapper, 'top'));

					this.enableResize(i+1);
				},this);
			}
		},

		/**
		 * [enableResize description]
		 * @param  {[type]}
		 * @return {[type]}
		 */
		enableResize: function(i){
			var self = this;
			var options = {
				handle: this.resizeHandlers[i],
				limit: {
					x: self.options.resizeLimitX,
					y: self.options.resizeLimitY
				},
				modifiers: {
					'x': 'width',
					'y': 'height'
				},
				onStart: function(el){
					self.fireEvent('resizeStart', el);
				},
				onDrag: function(el, ev){
					self.fireEvent('resizeDrag', [el, ev]);
					self.fireEvent('resize', el);
				},
				onComplete: function(el){
					self.fireEvent('resizeComplete', el);
				}
			};

			if (i === 1 || i === 3) options.modifiers.x = false;
			if (i === 2 || i === 4) options.modifiers.y = false;

			if (i === 1 || i === 4) {
				this.dragHandlers.push(this.resizeHandlers[i]);
				options.invert = true;
			}

			this.element.makeResizable(options);

			return this;
		}
	});

	return exports;
});


/**
 * Scroll Class
 * @class Scroll
 *
 * 
 * Credits:
 * based on Valerio's Mootools scrollbar plugin.
 * found in upload folder of mootools website
 */
define('UI/Component/Scrollbar', [
	'UI/Component/Component'
], function(
	Component
) {

	var exports = new Class({

		Extends: Component,

		options: {
			name: 'scrollbar',
			klass: 'ui-scrollbar',
			type: 'track',

			maxThumbSize: 36,
			wheel: 16,
			autoHide: 1000,
			size: 8
		},

		/**
		 * [initialize description]
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		initialize: function(options){

			this.parent(options);

			this.bound = {
				start: this.start.bind(this),
				end: this.end.bind(this),
				drag: this.drag.bind(this),
				wheel: this.wheel.bind(this),
				page: this.page.bind(this)
			};

			//_log.debug('initalize',this.options.container,'before');

			this.container = this.options.container;
			this.position = {};
			this.mouse = {};
			this.update();
			this.attachEvent();
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function(){
			if (!this.options.container)
				return;

			this.options.width = this.options.size;

			this.parent();

			this.element.inject(this.options.container,'before');

			this.thumb = new UI.Component({
				name: 'thumb',
				klass: 'ui-thumb'
			}).inject(this.element);
		},

		/**
		 * [update description]
		 * @return {[type]} [description]
		 */
		update: function(){
			//_log.debug(this.options.container.getSize().y, this.options.container.scrollHeight);

			this.containerSize = this.options.container.getSize().y;

			this.setSize(this.options.width.toInt(), this.containerSize);
			this.containerScrollSize = this.options.container.scrollHeight;
			//this.containerScrollSize = this.options.containerSize;_log.debug(this.containerScrollSize);
			this.trackSize = this.element.offsetHeight.toInt();
			//this.trackSize = this.element.offsetHeight.toInt();_log.debug(this.trackSize);

			if (this.containerScrollSize === 0)
				return;

			if (this.visible())
				this.thumb.element.setStyle('visibility', 'visible');
			else
				this.thumb.element.setStyle('visibility', 'hidden');

			this.containerRatio = this.containerSize / this.containerScrollSize;
			this.thumbSize = this.trackSize * this.containerRatio;

			var offset;

			if (this.thumbSize < this.options.maxThumbSize.toInt()) {
				offset = this.trackSize - (this.options.maxThumbSize.toInt() - this.thumbSize);
				this.thumbSize = this.options.maxThumbSize.toInt();
			} else
				if (this.thumbSize > this.trackSize)
					this.thumbSize = this.options.maxThumbSize.toInt();
				else
					offset = this.trackSize;

			this.scrollRatio = this.containerScrollSize / offset;

			this.thumb.setSize(this.options.width, this.thumbSize);

			this.updateThumbFromContentScroll();
			this.updateContentFromThumbPosition();

			var el = this.element;

			if (this.options.autoHide)
			this.timer = (function() {
				el.fade(0);
			}).delay(this.options.autoHide);
		},

		/**
		 * [updateContentFromThumbPosition description]
		 * @return {[type]} [description]
		 */
		updateContentFromThumbPosition: function(){
			this.options.container.scrollTop = this.position.now * this.scrollRatio;
		},

		/**
		 * [updateThumbFromContentScroll description]
		 * @return {[type]} [description]
		 */
		updateThumbFromContentScroll: function(){
			//_log.debug('this.options.container', this.options.container);
			clearTimeout(this.timer);
			this.element.setStyle('opacity','1');
			//this.element.set('opacity','1');

			this.position.now = (this.options.container.scrollTop / this.scrollRatio).limit(0, (this.trackSize));
			this.thumb.setStyle('top', this.position.now + 'px');

			var el = this.element;

			if (this.options.autoHide)
			this.timer = (function() {
				el.fade(0);
			}).delay(this.options.autoHide);

		},

		/**
		 * [attachEvent description]
		 * @return {[type]} [description]
		 */
		attachEvent: function(){
			this.thumb.element.addEvent('mousedown', this.bound.start);

			if (this.options.wheel) {
				this.options.container.addEvent('mousewheel', this.bound.wheel);
			}
			this.element.addEvent('mouseup', this.bound.page);
		},

		/**
		 * [wheel description]
		 * @param  {[type]} event [description]
		 * @return {[type]}       [description]
		 */
		wheel: function(event){
			var opts = this.options;

			clearTimeout(this.timer);
			this.element.setStyle('visibility','visible');

			opts.container.scrollTop -= event.wheel * opts.wheel;
			this.updateThumbFromContentScroll();

			this.fireEvent('scrolling', event);

			event.stop();
		},

		/**
		 * [page description]
		 * @param  {[type]} event [description]
		 * @return {[type]}       [description]
		 */
		page: function(event){
			var opts = this.options,
				container = opts.container;

			if (event.page.y > this.thumb.element.getPosition().y)
				container.scrollTop += container.offsetHeight;
			else
				container.scrollTop -= container.offsetHeight;


			this.updateThumbFromContentScroll();
			event.stop();
		},

		/**
		 * [start description]
		 * @param  {[type]} event [description]
		 * @return {[type]}       [description]
		 */
		start: function(event){
			this.mouse.start = event.page.y;
			this.position.start = this.thumb.element.getStyle('top').toInt();

			document.addEvent('mousemove', this.bound.drag);
			document.addEvent('mouseup', this.bound.end);
			this.thumb.element.addEvent('mouseup', this.bound.end);

			event.stop();
		},

		/**
		 * [end description]
		 * @param  {[type]} event [description]
		 * @return {[type]}       [description]
		 */
		end: function(event){
			document.removeEvent('mousemove', this.bound.drag);
			document.removeEvent('mouseup', this.bound.end);
			this.thumb.element.removeEvent('mouseup', this.bound.end);
			this.fireEvent('dragCompplete');
			event.stop();
		},

		/**
		 * [drag description]
		 * @param  {[type]} event [description]
		 * @return {[type]}       [description]
		 */
		drag: function(event){
			this.mouse.now = event.page.y;

			this.position.now = (this.position.start + (this.mouse.now - this.mouse.start)).limit(0, (this.trackSize - this.thumbSize));
			this.updateContentFromThumbPosition();
			this.updateThumbFromContentScroll();

			if (Math.ceil(this.position.now + this.thumbSize) >= this.trackSize)
				this.options.container.scrollTop = this.containerScrollSize;

			this.fireEvent('drag', event);

			event.stop();
		},

		/**
		 * [visible description]
		 * @return {[type]} [description]
		 */
		visible: function(){
			if (this.containerSize < this.containerScrollSize) {
				return true;
			}
			else {
				return false;
			}
		}
	});

	return exports;
});


/**
 * UI Component Text
 * @class UI.Text
 * @extends {UI.Component}
 * @author Jerome D. Vial
 */
define('UI/Component/Text', [
	"UI/Component/Component",
], function(
	Component
) {

	var exports = new Class({

		Extends: Component,

		options: {
			name: 'text',
			klass: 'ui-text',
			tag: 'span',
			text: '&nbsp;',
			emboss: false,
			selectable: false
		},

		/*
			Method: _initElement
				private method

			Make a  Text and set the fade Fx

			Return:
			(void)

			See also:
			<UI.Component::_initElement>
		*/
		_initElement: function(){
			this.parent();

			if (this.options.text)
				this.set(this.options.text);
		},

		/**
		 * Default setter for the class
		 * @param {string} property [description]
		 * @param {mixin} value    [description]
		 */
		set: function(property, value) {
			//_log.debug('set', what, value);

			// if set has a single params
			if (value === undefined) {
				value = property;
				property = 'text';
			}

			if (property == 'text')
				this.element.set('html', value);
		}
	});

	return exports;
});


/**
 * UI Component Location
 * @class UI.Component.Location
 * @author Jerome D. Vial
 */
define('UI/Component/Toolbar', [
	"UI/Component/Component",
	'UI/Control/Button'
], function(
	Component
) { 

	var exports = UI.Toolbar = new Class({

		Extends: Component,

		name: 'toolbar',

		options: {
			base: 'component',
			name: 'toolbar'
		},

		/*
		Function: _initElement
			private function

			Call UI.Component _initElement, then create a menu wrapper

		Return:
			(void)

		See also:
			<UI.Component::_initElement>
		*/
		_initElement: function(){
			this.parent();

			this._initComponent();
		},

		/*
		Function: _initComponent
			private function

			Process the node object and inject the initialized component in the content of the container.

		Return:
			(void)

		Note:
			Override UI.Component._initComponent

		See also:
			<UI.Component::_initHead>
		*/
		_initComponent: function() {
			var self = this,
				opts = this.options,
				element = this.element;

			this.control = {};

			if (opts.comp.klss)
				element.addClass(opts.comp.klss);

			element.addClass('toolbar-' + opts.comp.name);

			opts.comp.list.each(function(n) {
				_log.debug('---', n, mnml.control);
				var comp = mnml.control[n];

				if (comp) {
					var clss = comp.clss || Button;
					var opts = comp.opts || {};
					self.control[n] = new clss(opts).inject(element).addEvents({
						click: function() {
							if (self.control[n].isEnable())
								self.fireEvent('emit', n);
						}
					});
				}
			});
		}
	});
	
	return exports;
});

/**
 * The UI.Container class defines objects manage the content of the container
 * that manage containers use by several object like windows, menus.
 * @class  UI.Container
 * @extends {UI.Component}
 * @author Jerome Vial
 */
define('UI/Container/Container', [
	'UI/Component/Component',
	'UI/Container/Display'
], function(
	Component,
	Display
) {

	var _log = __debug('ui:container');

	var exports = new Class({

		Extends: Component,

		Implements: [Options, Events, Display],

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
		 * @param  {Object} options [description]
		 * @return {Object}         [description]
		 */
		initialize: function(options) {
			this.parent(options);

			if (this.options.comp) {
				this._initComp(this.options.comp);
			} else {
				this._initComponent();
			}

			return this;
		},

		/**
		 * Creates html structure and inject it to the dom.
		 * The container is _initElement with two elements: the wrapper and the content.
		 * If the option scroll is set to true, it will also add the scrollbar object
		 * @return {void}
		 */
		_initElement: function() {
			//_log.debug('_initElement', this);
			this.parent();

			var opts = this.options;
			this.menu = {};

			if (opts.head) {
				this._initHead(opts.head);
			}
			if (opts.menu) {
				this.setMenu(opts.menu);
			}
			if (this.name === 'window') {
				this._initBody();
			}
			if (opts.useOverlay) {
				this._initOverlay();
			}

			if (opts.foot) {
				this._initFoot(opts.foot);
			}

			var self = this;
			this.addEvent('injected', function() {
				var direction = self.container.getStyle('flex-direction');
				_log.debug('direction', direction, this.element);
			});

			if (this.options.useUnderlay) {
				this._initUnderlay();
			}
		},

		/**
		 * [_initComponent description]
		 * @return {void}
		 */
		_initComponent: function() {
			var opts = this.options;

			if (opts.node === null) {
				return;
			}

			//_log.debug('_initComponent', opts.node);

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
		 * @return {void}
		 */
		_initComp: function(comp) {
			//_log.debug('_initComp', comp);
			var self = this;

			if (typeOf(comp) === 'string') {
				this.addComp(comp);
			} else if (typeOf(comp) === 'object') {
				_log.debug('object');
			} else if (typeOf(comp) === 'array') {
				comp.each(function(name) {
					self.addComp(name);
				});
			}
		},

		/**
		 * [_initComp description]
		 * @param  {string} name
		 * @param  {string} position
		 * @param  {DOMElement} element
		 * @return {DOMElement|void}
		 */
		addComp: function(name, position, element) {
			//_log.debug('addComp', name, position, element);
			position = position || 'bottom';
			element = element || this.element;

			//_log.debug('_addComp', name);

			if (!element) {
				_log.warn('Container is ', element);
				return;
			}

			var comp = this[name] = new Element('div')
				.addClass('container-' + name)
				.inject(element, position);

			return comp;
			/*this.addEvents({
				resize: function() {
					//_log.debug('resize from head', this, this.head.getSize().y+'px');
					this.element.setStyle('padding-top', this.head.getSize().y+'px');
				}
			});*/
		},

		/**
		 * _initClass container related class
		 * @return {void}
		 */
		_initClass: function() {
			this.parent();

			this.element.addClass('ui-container');
		},

		/**
		 * create an overlay displayed when container is disabled (when moved or resized)
		 * @return {void}
		 */
		_initHead: function() {
			var self = this;

			this.head = new Element('div')
				.addClass('container-head')
				.inject(this.element, 'top')
				.addEvent('dblclick', function() {
					self.fireEvent('max');
				});
		},

		/**
		 * [setTitle description]
		 * @param {string} title
		 */
		setTitle: function(title) {
			if (this.title && this.head) {
				return this.title.set('text', title);
			}
		},

		/**
		 * [setTitle description]
		 * @return {string}
		 */
		getTitle: function() {
			//_log.debug('getTitle', this.title);
			if (this.title) {
				return this.title.get('html');
			}
		},

		/*setMenu: function(opts) {
			_log.debug('setMenu', opts);
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

			//_log.debug('_init'+comp.capitalize());
			var menu = new Menu(opts);

			this.menu[opts.name] = menu;

			// _log.debug('setMenu', opts.name, menu);

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
		},*/

		/**
		 * [_initFoot description]
		 * @param  {Object} options
		 * @return {void}
		 */
		_initFoot: function( /*options*/ ) {

			this.foot = new Element('div', {
				'class': 'container-foot'
			}).inject(this.element, 'bottom');
		},

		/**
		 * [_initStatus description]
		 * @param  {string} component
		 * @param  {string} context
		 * @return {void}
		 */
		_initStatus: function(component /*, context*/ ) {

			component = component || 'foot';

			if (!this[component]) {
				this['_init' + component.capitalize()]();
			}

			this.status = new Element('div', {
				'class': 'container-status'
			}).inject(this[component]);
		},

		/**
		 * create an overlay displayed when container is disabled (when moved or resized)
		 * @return {void} [description]
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
					//_log.debug('blur');
					self.overlay.show();
				},
				onDragComplete: function() {
					//_log.debug('darg com', ui.window.underlay);
					self.overlay.hide();
				},
				onDragStart: function() {
					//_log.debug('darg start', this);
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
		 * @return {void}
		 */
		_initUnderlay: function() {
			//_log.debug('_initUnderlay', this.device);
			var self = this;

			this.underlay = new Element('div', {
				'class': 'dialog-underlay',
				styles: {
					zIndex: 10,
					//display: 'none'
				}
			}).inject(this.element, 'before');


			this.underlay.addEvent('click', function() {
				_log.debug('click underlay');
				self.minimize();
			});

			this.addEvent('close', function() {
				self.underlay.destroy();
			});
		},

		/**
		 * [focus description]
		 * @return {void}
		 */
		focus: function() {
			this.setState('focus');
		}
	});

	return exports;
});


/**
 * UI Component Drag
 * @class UI.Component.Drag
 * @author Jerome D. Vial
 */
define('UI/Container/Display', [
	
], function(

) {

	var exports = new Class({

		/**
		 * Display options for container
		 * @type {Object} options
		 */
		options: {
			display: {
				fx: {
					default: {
						duration: 160,
					    transition: 'sine:out',
					    link: 'cancel'
					},
					minimize: {
						duration: 160,
					    transition: 'sine:out',
					    link: 'cancel'
					}
				}
			}
		},

		/**
		 * [_initDisplay description]
		 * @return {[type]} [description]
		 */
		_initDisplay: function() {
	 		//_log.debug('_initDisplay', this.element);

	 		this._modifier = 'width';

	 		var direction = this.container.getStyle('flex-direction');

			if (direction === 'column')
				this._modifier = 'height';

			//_log.debug('direction', direction, this._modifier);

			var self = this,
				opts = this.options.display,
				fx = opts.fx.default,
				modifier = this._modifier;

			if (!this[modifier])
				this[modifier] = 220;

			this.device = this.device || 'desktop';
			//this.underlay.hide();
			this.display = {};

			fx.property = modifier;

			this.display.fx = new Fx.Tween(this.element, fx)
			.addEvent('complete', function() {
				self.fireEvent('toggled');
			});

			return this.display;
		},

		/**
		 * [getDisplay description]
		 * @return {[type]} [description]
		 */
		getDisplay: function() {

			return this._display;
		},

		/**
		 * [getDisplay description]
		 * @return {[type]} [description]
		 */
		setDisplay: function(display) {

			this._display = display;

			return this;
		},

		/**
		 * [toggle description]
		 * @return {[type]} [description]
		 */
		toggle: function() {
			//_log.debug('__toggle click, display', this._display);

			if (this._display === 'normalized'){
				this.minimize();
			} else {
				this.normalize();
			}

			return this._display;
		},

		/**
		 * [minimize description]
		 * @return {[type]} [description]
		 */
		minimize: function() {
			//_log.debug('------start minimalization', this.device);
			var self = this;	
			if (!this.display) {
				this._initDisplay();
			}

			this.fireEvent('minimize');

			this.display.fx.start(0);

			(function(){ 
				//self.element.setStyle('display', 'none');
			}).delay(160);

			this._display = 'minimized';

			if (this.underlay && this.device != 'desktop') {
				this.underlay.fade(0);
			}

			this.fireEvent('display', 'minimized');
		},

		/**
		 * [normalize description]
		 * @return {[type]} [description]
		 */
		normalize: function() {
			// _log.debug('normalize');
			var self = this;
			if (!this.display) {
				this._initDisplay();
			}
			
			this.fireEvent('normalize');

			//self.element.setStyle('display', 'flex');

			var size = this[this._modifier];

			if (this.display.fx) {
				this.display.fx.start(size);
			} else {
				this.element.setStyle(this._modifier, size);
			}
			if (this.underlay && this.device != 'desktop') {
				//_log.debug('---', this.device);
				this.underlay.show();
				this.underlay.fade(1);
			}
			this._display = 'normalized';

			this.fireEvent('display', 'normalized');
		},

		/**
		 * [normalize description]
		 * @return {[type]} [description]
		 */
		maximize: function() {
			//_log.debug('maximize', size);

			return;
			this.toggleFx.start(size);

			this.element.setStyle('display', null);
			this.element.addClass('state-focus');

			this.isOpen = true;

			this.fireEvent('maximized', this);


		}
	});

	return exports;
});


/**
 * [initialize description]
 * @class  UI.Container.Tab
 * @extends {UI.Component}
 * @author Jerome Vial
 */
define('UI/Container/Tab', [
	'UI/Component/Component',
	'UI/Control/Button',
	'UI/Container/Container'
], function(
	Component,
	ButtonControl,
	Container
) {

	var exports = new Class({

		Extends: Container,

		options: {
			clss: 'tab',
			name: 'tab',
			base: 'container',

			head: true,
			content: null,
			node:[{
				name: 'one'
	        }, {
				name: 'two'
	        }],
	        comp: ['body']
		},
		/**
		 * [initialize description]
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		initialize: function(options){
			this.list = [];
			this.components = [];

			this.parent(options);

			
		},
		/*
		Function: setContent

		Set Content of the current container (tab)
		*/
		setContent: function(method, source, options){
			this.active.setContent(method, source, options);
		},

		/*
			Function: add

				Create tab and its related container and addEvent
		 */
		addTab: function(container, position){
			//_log.debug('AddTab', this, container);
			var self = this,
				opts = container.options;

			var text = opts.text || opts.name;

			var tab = new ButtonControl({
				type: 'tab',
				text: text,
				name: opts.name,
				onPress: function(e){
					self.activate(container);
				}
			}).inject(this.bar);

			container.inject(this.body);

			this.components.push(container);

			if (this.components.length == 1) {
				this.activate(container);
			} else {
				container.hide();
			}

			container.element.store('tab', tab);

			if (this.active == container)
				self._setActiveTab(tab);
		},

		/*
		Function: setActive

		Set wich tab should be activated
		*/
		setActive: function(container){

			if (typeOf(container) == 'object') {
				var index = this.list.indexOf(container);

				if (index >= 0) {
					this.list[index].setState('active');
					this.list[num].fireEvent('click');
				}
			}
		},

		activate: function(container) {
			if (typeOf(container) != 'object') return;

			if (this.active)
				this.active.hide();

			container.show();
			container.fireEvent('resize');

			this._setActiveTab(container.element.retrieve('tab'));

			this.active = container;
			container.fireEvent('resize');

			return this;
		},

		_initElement: function() {
			this.parent();

			this._initBar();
		},

		/*
			function : _initContainer

				Build the split containers

		*/
		_initComponent: function() {
			var self = this,
				opts = this.options;

			this.components = [];

			if (opts.node === null) return;

			this.node = [];


			if (!this.layout)
				this.layout = {};

			opts.node.each(function(node,i){
				if (!node.component)
					node.component = 'container';

				node.container = self.content;
				node.main = self.main;

				var container = new UI[node.component.capitalize()](node);

				container.addEvent('focus', function() {
					self.activate(container);
				});

				self.components.push(container);

				self.addEvent('resize', function() {
					//_log.debug('tab resize,, views', container.name);
					container.fireEvent('resize');
				});

				self.node.push(container);

				if (i < 1) {
					self.activate(container);
				}

				self.addTab(container);
				if (i > 0 )	container.hide();


				self.layout[self.main][container.name] = container;
				ui.node[self.main][node.name] = container;

			});

			//self._initSplitter();
			//self._initSize();
		},

		_initClass: function(){
			this.parent();

			this.element.addClass('ui-tab');
		},

		/*
		Function: add

		Create tabbar and add tabs
		*/
		_initBar: function(){
			var self = this;
			this.bar = new Component({
				tag: 'div',
				klass: 'tab-bar',
				name: 'bar'
			}).inject(this.head, 'bottom');

			this.addEvent('resize', function() {
				//self.element.setStyle('padding-top', self.head.getSize().y+'px');
			}.bind(this));
		},


		/*
		Function: _initEvents

		Set some behaviours
		*/
		_initEvents: function(){
			this.parent();
			var self = this;

			this.addEvents({
				resize: function() {
					self.components.each( function(c){
						c.fireEvent('resize');
					});
				},
				injected: function(){

				}
			});
		},

		_setActiveTab: function(tab) {
			if (!tab) return;

			if (this.tab) {
				this.tab.element.removeClass('ui-selected');
				this.tab.setState('default');
			}

			tab.addClass('ui-selected');
			tab.setState('active');

			this.tab = tab;
		}
	});

	return exports;
});

/**
 * @class UI.Control.Button
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Button', [
	'UI/Control/Control'
], function(
	Control
) {

	var _log = __debug('ui:control-button');

	var exports = new Class({

		Extends: Control,

		name: 'button',

		options: {
			name: 'button',
			type: null, // push, file
			ink: true,
			element: {
				tag: 'span'
			},
			binding: {
				_list: ['element'],
				element: {
					'sensor.click': '_onClick',
					'sensor.dblclick': '_onDblClick',
					'sensor.mousedown': '_onMouseDown',
					'sensor.mouseup': '_onMouseUp',
					'sensor.mouseleave': '_onMouseLeave'
				}
			}
		},

		/**
		 * [set description]
		 */
		set: function() {},

		/**
		 * [_initElement description]
		 * @return {void}
		 */
		_initElement: function() {
			this.parent();

			var opts = this.options;
			var type = opts.type;

			opts.text = opts.text || opts.n;

			if (type === null) {
				type = 'icon-text';
			}

			/*if (opts.text && type != 'icon') {
				this.element.set('html', opts.text);
			}*/
			//var text = opts.type.match(/text/g);

			if (opts.name) {
				this.element.set('data-name', opts.name);
			}

			_log.debug('title', this.element, opts.text);

			this.element.set('title', opts.text);

			if (opts.icon) {
				this._initIcon(type, opts.icon || opts.name);
			}

			if (opts.text) {
				this._initText(type);
			}

			if (opts.ink) {
				this._initSensor();
			} else {
				this.sensor = this.element;
			}
		},


		/**
		 * [_initIcon description]
		 * @param  {string} type
		 * @return {string}
		 */
		_initIcon: function(type, name) {
			_log.debug('_initIcon', type, name);

			var tag = 'span';
			var code = name;
			var klss = null;

			var prop = {
				'class': 'ui-icon'
			};

			this.icon = new Element(tag, prop).inject(this.element);


			if (mnml.icon.mdi[name]) {
				//_log.debug('mdi');
				klss = 'icon-mdi';
				code = mnml.icon.mdi[name];
			} else if (mnml.icon.font[name]) {
				//_log.debug('iocn font name', name);
				klss = 'icon-font';
				code = mnml.icon.font[name];
			}

			if (klss) {
				this.icon.addClass(klss);
			}

			if (code) {
				this.icon.addClass(code);
			}
		},

		/**
		 * [_initText description]
		 * @param  {string} type
		 * @return {void}
		 */
		_initText: function(type) {
			var opts = this.options;

			var tag = 'span';

			var pos = 'bottom';
			if (type === 'text-icon') {
				pos = 'top';
			}

			this.text = new Element(tag, {
				'class': 'ui-text',
				'html': opts.text
			}).inject(this.element, pos);
		},

		/**
		 * [_initClass description]
		 * @return {void}
		 */
		_initClass: function() {
			var opts = this.options;
			//_log.debug(this.name);

			if (this.options.isPrimary) {
				this.element.addClass('is-primary');
			}

			if (this.options.klss) {
				this.element.addClass(opts.klss);
			}

			if (this.options.type) {
				this.element.addClass('type-' + this.options.type);
			}

			this.element.addClass(opts.prefix + this.name);

			if (this.options.clss) {
				this.element.addClass(this.options.clss);
			}
		},

		/**
		 * [_initText description]
		 * @return {void}
		 */
		_initSensor: function() {
			_log.debug('_initSensor');

			var tag = 'div';

			this.sensor = new Element(tag, {
				'class': 'ui-sensor',
			}).inject(this.element);
		},

		/**
		 * [_initEffect description]
		 * @param  {string} ink
		 * @param  {string} x
		 * @param  {string} y
		 * @param  {Object} coord
		 * @return {void}
		 */
		_touchInk: function(ink, x, y, coord) {
			var size = coord.height;
			var top = 0;
			var duration = 1000;

			this.ink = ink;

			if (coord.width > size) {
				size = coord.width;
				top = (coord.height - coord.width) / 2;
			}

			var fx = new Fx.Morph(ink, {
				duration: duration,
				link: 'chain',
				transition: Fx.Transitions.Quart.easeOut
			});

			fx.start({
				height: size,
				width: size,
				left: 0,
				top: top,
				opacity: 0
			});

			(function() {
				ink.destroy();
			}).delay(duration);
		},

		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e
		 * @return {void}
		 */
		_onClick: function(e) {
			_log.debug('_onElementClick', e);

			var opts = this.options;

			e.stopPropagation();

			if (opts.emit && this.state !== 'disabled') {
				this.fireEvent(opts.emit);
			}
			this.fireEvent('press', opts.emit);
			this.fireEvent('pressed', opts.emit);

			if (opts.call && this.state !== 'disabled') {
				opts.call();
			}
		},

		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e
		 * @return {void}
		 */
		_onDblClick: function(e) {
			var opts = this.options;

			e.stop();

			if (opts.emit && this.state !== 'disabled') {
				this.fireEvent('dblpress', opts.emit);
			}

			this.fireEvent('dblpressed', opts.emit);
		},

		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e
		 * @return {Object}
		 */
		_onMouseDown: function(e) {
			//_log.debug('_onElementMouseDown', e);

			e.stop();

			if (this.state === 'disabled') {
				return;
			}

			var x = e.event.offsetX;
			var y = e.event.offsetY;

			var coord = this.element.getCoordinates(this.element);

			var ink = this.ink = new Element('span', {
				class: 'ui-ink',
				styles: {
					left: x,
					top: y
				}
			}).inject(this.element, 'top');

			this._touchInk(ink, x, y, coord);

			this.fireEvent('mousedown');
		},

		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e
		 * @return {void}
		 */
		_onMouseLeave: function(e) {
			_log.debug('_onMouseLeave', e);


		},

		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e
		 * @return {void}
		 */
		_onMouseEnter: function(e) {
			_log.debug('_onElementMouseDown', e);


		},

		/**
		 * [_onElementMouseUp description]
		 * @return {void}
		 */
		_onMouseUp: function(e) {
			_log.debug('_onElementMouseUp', e);

			if (this.options.type === 'check') {
				if (this.state === 'checked') {
					this.setState(null);
				} else {
					this.setState('checked');
				}
			}

			//this.react.destroy();
		}

	});

	return exports;
});

/**
 * UI COntrol ButtonMenu Class
 * @class UI.Control.ButtonMenu
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/ButtonMenu', [
	'UI/Control/Button',
	'UI/Control/Separator'
], function(
	Button
) {

	var _log = __debug('ui:control-buttonMenu');

	var exports = new Class({

		Extends: Button,

		name: 'button',

		options: {
			name: 'button',
			type: 'action', // push, file
		},

		/**
		 * [_initElement description]
		 * @return {void}
		 */
		_initElement: function() {
			this.parent();

			_log.debug('_initElement');

			this.control = {};
		},

		/**
		 * [_initToolbarComp description]
		 * @param {Object} opts
		 * @return {void}
		 */
		_initMenu: function(opts) {
			_log.debug('_initMenu', opts);

			var timer = null;

			_log.debug(opts.list, this.element);

			opts.list = opts.list || [];
			//_log.debug(this.element);
			this.container = $(this.element).getParent();
			//_log.debug(this.container);

			var menu = this.menu = new Element('ul', {
				class: 'button-menu'
			}).addEvents({
				/**
				 * @ignore
				 */
				mouseleave: function() {
					clearTimeout(timer);
					timer = setTimeout(function() {
						menu.setStyle('display', 'none');
					}, 500);
				},
				/**
				 * @ignore
				 */
				mouseenter: function() {
					clearTimeout(timer);
				},
				/**
				 * @ignore
				 */
				click: function() {
					menu.setStyle('display', 'none');
				}
			}).inject(this.container, 'bottom');


			for (var i = 0; i < opts.list.length; i++) {
				var name = opts.list[i];
				var def = opts[name];
				this._initItem(name, def, this.menu);
			}

			var coord = this._initMenuPosition();
			//var size = this.menu.getSize();
			//_log.debug(size);

			this.menu.setStyles({
				top: coord.top,
				right: coord.right

			});

			_log.debug(this.menu);
		},

		/**
		 * [_initMenuPosition description]
		 * @return {Object}
		 */
		_initMenuPosition: function() {
			//_log.debug('_initMenuPosition');
			//var container = this.container.getParent().getCoordinates();
			var coord = this.element.getCoordinates(this.container);

			return coord;
		},

		/**
		 * [_initItem description]
		 * @param  {string} name
		 * @param  {Object} def
		 * @param  {HTMLElement} element
		 * @return {void}
		 */
		_initItem: function(name, def, element) {
			var self = this;
			var clss = 'UI/Control/Button';
			var opts;

			def = def || {};

			// init class
			var l = name.split(/\:\:/);

			name = l[0];
			l.splice(0, 1);

			//var klss = l.join(' ');

			if (name === 'separator') {
				clss = 'UI/Control/Separator';
			}

			if (def.clss) {
				clss = def.clss;
			}

			var icon = mnml.icon.font[def.icon || name] || 'mdi-action-help';

			_log.debug('_initItem', name, icon);

			if (def.opts) {
				opts = def.opts;
				opts.text = def.text || Locale.get('control.' + name, name) || name;
				opts.icon = icon;
				opts.tag = 'span';
			} else {
				opts = {
					name: name,
					icon: icon
				};
			}

			if (!name) {
				return;
			}

			if (clss === 'UI/Control/Button' || clss === 'UI/Control/ButtonMenu') {
				opts.text = def.text || Locale.get('control.' + name, name) || name;
			}

			this._requireModule(clss, function(Clss) {

				self.control[name] = new Clss(opts).inject(element);

				if (clss === 'UI/Control/Button') {
					self.control[name].addEvents({
						/**
						 * @ignore
						 */
						press: function() {
							var name = this.options.name;
							_log.debug('press', name, this.isEnable());
							if (this.isEnable()) {
								//self.fireEvent('control::'+name, this);
								self.fireEvent('press', name);
							}
							self.menu.hide();
						}
					});
				}
			});
		},

		/**
		 * [_requireView description]
		 * @param {string|Object} module
		 * @param {Function} cb
		 * @return {void}
		 */
		_requireModule: function(module, cb) {
			_log.debug('_requireModule', module);

			if (typeOf(module) === 'class') {
				cb(module);
				return;
			}

			require([module], function(Class) {
				cb(Class);
			}, function(err) {
				_log.error(err);
				cb();
			});
		},

		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e
		 * @return {void}
		 */
		_onClick: function(e) {
			_log.debug('_onElementClick');

			var opts = this.options;

			e.stopPropagation();

			if (!this.menu) {
				this._initMenu(opts);
			}

			this.menu.setStyle('display', 'block');
		}

	});

	return exports;
});


/**
 * @class UI.Control.Button
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Check', [
	"UI/Control/Field"
], function(
	Field
) {

	var exports = new Class({

		Extends: Field,

		name: 'check',

		options: {
			text: null,
			checked: false,
			error: false,
			opts: {
				type: 'ckeck',
				
			}
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function() {
			this.parent();

			var self = this,
				opts = this.options;

			this.checked = opts.value;

			this.input.set('type', 'hidden');

			var options = opts.opts;

			this.wrapper = new Element('div', {
				'class': 'check-wrapper'
			}).inject(this.element);

			this._initText(opts);
			this._initCheck(opts);

			this._initError();

			if (this.checked) this.check.addClass('checked');
		},

		/**
		 * [_initCheck description]
		 * @return {[type]} [description]
		 */
		_initCheck: function() {
			var self = this;

			var check = this.check = new Element('span', {
				'class': 'control-check',
			}).inject(this.wrapper);

			if (!this.readonly) {
				check.addEvents({
					click: function() {
						//_log.debug(self.checked);
						if (self.checked) {
							self.checked = false;
							this.removeClass('checked');
						} else {
							self.checked = true;
							this.addClass('checked');
						}

						self.fireEvent('change', self.checked);
					}
				});
			}

			this.on = new Element('span', {
				'class': 'check-text check-on',
				'html': 'oui'
			}).inject(check);

			this.knob = new Element('span', {
				'class': 'ckeck-knob',
				html: '&nbsp;'
			}).inject(check);

			this.off = new Element('span', {
				'class': 'check-text check-off',
				'html': 'non'
			}).inject(check);
		},

		/**
		 * [_initText description]
		 * @param  {[type]} opts [description]
		 * @return {[type]}      [description]
		 */
		_initText: function(opts) {
			var self = this;

			this.text = new Element('span', {
				'class': 'control-text',
				html: opts.text
			}).addEvents({
				click: function() {
					//_log.debug(self.checked);
					if (self.checked) {
						self.checked = false;
						this.removeClass('checked');
					} else {
						self.checked = true;
						this.addClass('checked');
					}
					self.fireEvent('change', self.checked);

				}
			}).inject(this.wrapper);
		}

	});

	return exports;
});


/**
 * Choice Control Class
 * @class UI.Control.Choice
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Choice', [
	"UI/Control/Field"
], function(
	Field
) {

	var exports = new Class({

		Extends: Field,

		options: {
			name: 'choice',
			//error: false,
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function() {
			this.parent();

			this.item = {};

			var self = this,
				opts = this.options;

			//_log.debug(opts);
			this.input.set('type', 'text');
			this.input.addClass(opts.klss);
			this.element.addClass('ui-choice');

			this.wrapper = new Element('div', {
				'class': 'choice-wrapper'
			}).inject(this.label, 'after');

			this.choice = new Element('span', {
				'class': 'choice-text',
				html: opts.value
			}).inject(this.wrapper);

			this._initList(opts.list);

			if (opts.value)
				this.input.set('value', opts.value);

		},

		/**
		 * [_initList description]
		 * @param  {[type]} list [description]
		 * @return {[type]}      [description]
		 */
		_initList: function(list) {

			var self = this;
			this.list = new Element('ul', {
				'class': 'choice-list'
			}).inject(this.label, 'after');

			this.itemList = [];

			if (list && list.length > 0)
			for(var i = 0; i < list.length; i++) {
				this._initItem(list[i]);
			}
		},

		/**
		 * [_initItem description]
		 * @param  {[type]} item [description]
		 * @return {[type]}      [description]
		 */
		_initItem: function(item) {
			var self = this,
				opts = this.options;

			var li = new Element('li', {
				html: item,
				'data-value': item
			}).inject(this.list).addEvent('click', function(){
				if (opts.read) return;
				//_log.debug('click', this);
				if (self.selected)
					self.selected.removeClass('selected');

				if (self.selected && self.selected === this) {
					self.selected.removeClass('selected');
					self.selected = null;

					if (opts.type === 'push')
						self.select();
				} else {
					this.addClass('selected');
					self.selected = this;
					self.select(item);
				}
			});

			this.item[item] = li;

			this.itemList.push(item);

			if (opts.value === item ) {
				li.addClass('selected');
				self.selected = li;
			}
		},

		/**
		 * [toggle_selected description]
		 * @return {[type]} [description]
		 */
		toggle_selected: function() {
			//_log.debug('toggle_selected', this.element);

			if (this.selected)
				this.selected.removeClass('selected');

			if (this.selected && this.selected === this) {
				this.selected.removeClass('selected');
				this.selected = null;
			} else {
				this.addClass('selected');
				this.selected = this;
			}
		},

		/**
		 * [select description]
		 * @param  {[type]} value [description]
		 * @return {[type]}       [description]
		 */
		select: function(value) {
			var name = this.options.name;

			this.input.set('value', value);
			this.choice.set('html', value);
			this.element.removeClass('state-open');
			this.fireEvent('change', value, name);
		},

		/**
		 * [select description]
		 * @param  {[type]} value [description]
		 * @return {[type]}       [description]
		 */
		set: function(value) {
			//_log.debug('choice set', value, this.item);
			var item = this.item[value];

			if (!item) return;

			if (this.selected)
				this.selected.removeClass('selected');

			item.addClass('selected');
			this.selected = item;
		},

		/**
		 * [_toggle description]
		 * @return {[type]} [description]
		 */
		_toggle: function() {
			if (this.element.hasClass('state-open'))
				this.element.removeClass('state-open');
			else this.element.addClass('state-open');
		},

		/**
		 * [_initEvents description]
		 * @return {[type]} [description]
		 */
		_initEvents: function() {
			this.parent();
			var self = this;

			/*this.choice.addEvents({
				click: this._toggle.bind(this, 'default')
			});*/
			/*this.input.addEvents({
				click: this._toggle.bind(this, 'default'),
				blur: this.setState.bind(this, 'default'),
				focus: this.setState.bind(this, 'focus')
			});*/
		}

	});

	return exports;
});


/**
 * UI Control Color Class
 * @class  UI.Control.Color
 * @extends {UI.Control}
 */


/**
 * @class UI.Control.Button
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Color', [
	"UI/Control/Choice"
], function(
	Choice
) {

	var exports = new Class({

		Extends: Choice,

		options: {
			name: 'choice'
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function() {
			this.parent();

			
			this.element.addClass('choice-color');
		},

		/**
		 * [_initItem description]
		 * @param  {[type]} info [description]
		 * @return {[type]}      [description]
		 */
		_initItem: function(info) {
			var self = this,
				opts = this.options;

			var item = new Element('li', {
				'class': info
			}).inject(this.list).addEvent('click', function(){
				//_log.debug('jjj');
				if (self.selected)
					self.selected.removeClass('selected');

				if (self.selected && self.selected == this) {
					self.selected.removeClass('selected');
					self.selected = null;
					self.select(null);
				} else {
					this.addClass('selected');
					self.selected = this;
					self.select(info);
				}
			});

			var color = new Element('span', {
				html: '&nbsp;'
			}).inject(item);

			this.itemList.push(item);

			if (opts.value == info ) {
				item.addClass('selected');
				self.selected = item;
			}
		},

		/**
		 * [set description]
		 * @param {[type]} color [description]
		 */
		set: function(color) {
			//_log.debug(color);
			var list = this.itemList;

			for(var i = 0; i < list.length; i++) {
				var item = list[i];
				if (item.hasClass(color))
					item.addClass('selected');
				else item.removeClass('selected');
			}
		}
	});

	return exports;
});

/**
 * UI Control Class
 * @class  UI.Control
 * @extends {UI.Component}
 * @author Jerome Vial
 */
define('UI/Control/Control', [
	'UI/Component/Component'
], function(
	Component
) {

	var _log = __debug('ui:control');

	var exports = new Class({

		Extends: Component,

		options: {
			//disabled: false
			error: false
		},

		/**
		 * [isEnable description]
		 * @return {boolean}
		 */
		isEnable: function() {
			//_log.debug(this.state)
			if (this.state === 'disabled') {
				return false;
			} else {
				return true;
			}
		},

		/**
		 * [isActive description]
		 * @return {boolean} [description]
		 */
		isActive: function() {
			if (this.state === 'active') {
				return true;
			} else {
				return false;
			}
		},


		/**
		 * [_initOptions description]
		 * @return {void} [description]
		 */
		_initOptions: function() {
			this.parent();

			var opts = this.options;

			this.value = opts.value;
			this.readonly = opts.read;
		},

		/**
		 * [_initEvents description]
		 * @return {void} [description]
		 */
		_initEvents: function() {
			var self = this;

			//this.element.set('tabindex', 0);

			this.element.addEvents({
				/**
				 * @ignore
				 */
				click: function(e) {
					_log.debug('click', e);
					//e.stopPropagation();
					self.fireEvent('click');
				},
				/**
				 * @ignore
				 */
				mouseup: function() {
					self.fireEvent('mouseup');
				}
			});
		}

	});

	return exports;
});


/**
 * UI Control Currency Class
 * @class UI.Control.Currency
 * @extends {UI.Control}
 * @author Jerome Vial
 */
define('UI/Control/Currency', [
	"UI/Control/Field"
], function(
	Field
) {

	var exports = new Class({

		Extends: Field,

		options: {
			name: 'currency',
			base: 'control'
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function(){

			//create a new div as input element
			this.parent();

			//_log.debug(this.element);

			this.input.addClass('mask');
			this.input.set('alt', "{ type:'number', groupSymbol: ',', groupDigits: 3, decSymbol: '', decDigits: 0,	stripMask: false}");

			this.element.addClass('field-currency');
		}
	});

	return exports;
});



/**
 * UI Control Date
 * @class UI.Control.Date
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Date', [
	'moment',
	'UI/Control/Field',
	'Mootools/DatePicker/Locale.en-US.DatePicker',
	'Mootools/DatePicker/Picker.Date'
], function(
	moment,
	Field
) {

	var _log = __debug('ui:control-date');

	var exports = new Class({

		Extends: Field,

		options: {
			name: 'date',
			base: 'control',
			tag: 'div',
			type: 'input',
			format: 'ddd, MMM D YYYY',
			value: null,
			useTextAsLabel: false,
			picker: {
				//timePicker: true,
				useFadeInOut: false,
				//inject: this.element,
				//showOnInit: true,
				draggable: false,
				columns: 1,
				positionOffset: { x: 0, y: 5 },
				pickerClass: 'datepicker_bootstrap',
				format: "b"
			}
		},

		_initInput: function()  {
			var opts = this.options;

			//_log.debug('input option', opts.read, opts.name);

			this.element.addClass('field-date');
			this.element.addClass('icon-text');

			this.input = new Element('input', {
				//readonly: 'readonly',
				name: opts.name,
				type: 'text',
				class: 'date-input'
			}).inject(this.element);

			if (opts.read)
				this.input.set('readonly', 'readonly');

			/*this.icon = new Element('span', {
				'class': 'fa fa-calendar'
			}).inject(this.element);*/

			if (!opts.read)
				this._initPicker();

			//this.picker.detach(this.input);

			this.text = new Element('input', {
				'class': 'date-text',
				type: 'text'
			}).inject(this.element);

			this.set(opts.value);

		},

		_initPicker: function() {
			var opts = this.options;

			var options = opts.picker;

			//comment this because we already handle the select in the method down '_initEvents'

			/*options.onSelect = function(d){
				_log.debug('onSelect', d);
				self.fireEvent('change', [d, opts.name]);
			};*/

			options.onShow = function() {
				_log.debug('picker date show');
			};

			options.onHide = function() {
				_log.debug('picker date hide');
			};

			this.picker = new Picker.Date(this.input, options);

			//_log.debug('pickcer', this.picker);
		},

		/*
		Function: _initEvents
			private function

			Set control relative behavior (blur and focus)

		Return:
			(void)

		See also:
			<UI.Control::_initEvents>
			<UI.Component::_initEvents>
		*/

		_initEvents: function() {
			var self = this;

			if (this.options.read) return;

			this.picker.addEvents({
				select: function(date){
					//_log.debug('select', date);
					self.set(date);
					self.fireEvent('change', date);
				}
			});
		},

		/**
		 * [set description]
		 * @param {[type]} d [description]
		 */
		set: function(date) {
			//_log.debug('set', date);
			var opts = this.options;
			var text;

			if (date) {
				date = moment(date).format(opts.format);
				text = moment(date).toISOString();

				//the window was trigger 'chnage' because self was not define
				//I just comment this (bsantos)
				//self.fireEvent('change', text);
			}

			this.input.set('value', date);
			this.input.set('placeholder', opts.text);
			this.text.set('value', text);
		}

	});

	return exports;
});


/**
 * UI Control Dates
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Dates', [
	"UI/Component/Component"
], function(
	Component
) {

	var exports = new Class({

		Extends: Component,

		options: {
			name: 'dates',
			base: 'control'
		},

		/*
		Function: _initElement
			private function

			Create a div and a hidden input to receive the selected value

		Return:
			(void)

		See also:
			<UI.Control::_initElement>
			<UI.Component::_initElement>
		*/

		_initElement: function(){

			//create a new div as input element
			this.parent();
			this.date = this.options.date;

			var tmp = new Date(this.date);
			var time = this.convertDateTimeToHour(tmp);

			this.input.set('value', time);

			this.input.set('type', 'text');
			this.input.addClass('control-hour');

			var self = this;

			this.addEvent('injected', function(){
				self._addControls();
			});

			//this._initMenu();
			//this._initWheel();
		},

		_addControls: function() {
			var self = this;

			var controls = new Element('span', {
				'class': 'hour-controls'
			}).inject(this.input, 'after');

			this.plus = new Element('span', {
				'class': 'icon-plus'
			}).inject(controls);


			this.plus.addEvent('click', function() {
				tmp = new Date(self.date).increment('minute', '15').toJSON();
				self.date = new Date(self.date).increment('minute', '15');
				var time = self.convertDateTimeToHour(tmp);
				self.input.set('value', time);
				self.fireEvent('change', self.date);

			});


			this.minus = new Element('span', {
				'class': 'icon-minus'
			}).inject(controls);

			this.minus.addEvent('click', function() {
				tmp = new Date(self.date).decrement('minute', '15').toJSON();
				self.date = new Date(self.date).decrement('minute', '15');
				var time = self.convertDateTimeToHour(tmp);
				self.input.set('value', time);
				self.fireEvent('change', self.date);

			});

			//_log.debug('plus', self.element, self.minus);
		},

		convertDateTimeToHour: function(dateTime) {
			var date = new Date(dateTime);
			var h = date.getHours().toString();
			var m = date.getMinutes().toString();

			if (h.length == 1) h = '0' + h;
			if (m.length == 1) m = m + '0';

			return h + 'h' + m;
		},


		/*
		Function: setState
			Set element state

		Arguments:
			state - (string) State name

		Return:
			(void)

		See also:
			<UI.Component::setState>
		*/

		setState: function(state){
			this.parent(state);
		},

		/*
		Function: _initEvents
			private function

			Set control relative behavior (blur and focus)

		Return:
			(void)

		See also:
			<UI.Control::_initEvents>
			<UI.Component::_initEvents>
		*/

		_initEvents: function() {
			this.parent();
			this.addEvents({
				blur: this.setState.bind(this, 'default'),
				focus: this.setState.bind(this, 'focus')
			});
		},

		set: function(name, value) {
			this.element.set(name, value);

		}

	});

	return exports;
});

/*var UI = UI || {},
	Class = Class || function() {},
	Locale = Locale || {},
	mnml = mnml || {},
	floor = floor || {};*/


/**
 * UI Control Dropdown Class
 * @class UI.Control.Dropdown
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Dropdown', [
	'utils/api',
	'UI/Control/Field',
	'UI/Control/Button',
	'UI/Control/ButtonMenu'
], function(
	api,
	Field,
	ButtonControl,
	ButtonMenu
) {

	var _log = __debug('ui:control-dropdown').defineLevel();

	var exports = new Class({

		Extends: Field,

		name: 'dropdown',

		options: {
			name: 'dropdown',
			type: 'text', // push, file
			menuFx: {
				duration: 150,
				link: 'chain',
				transition: Fx.Transitions.Quart.easeOut
			},
			binding: {
				_list: ['input', 'button'],
				input: {
					'input.mousedown': '_onMouseDown',
					'input.keydown': '_onKeyDown',
					'input.keyup': '_onKeyUp'
				},
				button: {
					'button.press': '_onButtonPress'
				}
			}
		},

		/**
		 * [_initElement description]
		 * @return {void} [description]
		 */
		_initElement: function() {
			this.parent();

			this.control = {};

			this.element.addClass('type-dropdown');

			//this.input.set('readonly', 'readonly');

			var opts = this.options;

			if (!this.readonly) {
				this._initMenu(opts);
				this._initButton();
				this._initEvents();
			}
		},

		/**
		 * _onKeyDown
		 * @return {void}
		 */
		_onKeyDown: function(e) {
			_log.debug('KeyDown');

			if (e.key !== 'tab') {
				e.stop();
				return;
			}

			if (this.readonly) {
				e.stop();
				return;
			}
		},

		/**
		 * [_onKeyDown description]
		 * @param  {event} e
		 * @return {void}
		 */
		_onKeyUp: function(e) {
			_log.debug('_onKeyUp', e);

		},

		/**
		 * [_initIcon description]
		 * @return {void} [description]
		 */
		_initButton: function() {
			_log.debug('_initButton');

			this.button = new ButtonControl({
				'clss': 'right',
				type: 'icon',
				name: 'movedown',
				icon: 'mdi-hardware-keyboard-arrow-down',
			}).inject(this.element, 'top');
		},

		/**
		 * [_onButtonClick description]
		 * @return {void} [description]
		 */
		_onButtonPress: function(e) {
			_log.debug('_onButtonClick', e);

			if (this.isFocused) {
				this._showMenu();
			} else {
				this.input.focus();
			}
		},

		/**
		 * [_onMouseDown description]
		 * @return {void} [description]
		 */
		_onMouseDown: function(e) {
			this.parent(e);

			this._onButtonPress(e);
		},

		/**
		 * [_initToolbarComp description]
		 * @param {Object} opts
		 * @return {Object}
		 */
		_initMenu: function(opts) {
			//_log.debug('_initMenu', opts);
			var self = this;
			//var list = opts.list;
			var timer = null;

			opts.list = opts.list || [];

			this.container = this.element.getParent();

			var value = self.input.get('value');

			var menu = this.menu = new Element('ul', {
				class: 'ui-menu',
			}).inject(this.element, 'bottom').addEvents({
				mouseleave: function() {
					clearTimeout(timer);
					timer = setTimeout(function() {
						menu.setStyle('display', 'none');
					}, 500);
				},
				mouseenter: function() {
					clearTimeout(timer);
				},
				click: function() {
					menu.setStyle('display', 'none');
				}
			});

			for (var i = 0; i < opts.list.length; i++) {
				var name = opts.list[i];
				var def = opts.list[name];
				this._initItem(name, def, this.menu, value);
			}

			this.menuFx = new Fx.Morph(this.menu, opts.menuFx);


			//_log.debug('menu coord', menu.getCoordinates());
			//menu.setStyle('display', 'none');

			return menu;
		},


		/**
		 * [_initEvents description]
		 * @return {void}
		 */
		_initEvents: function() {
			var self = this;

			if (this.readonly) {
				return;
			}

			this.addEvents({
				select: function(name) {
					//_log.debug('select');
					self.input.set('value', name);
					self.fireEvent('change', name);
				}
			});

		},

		/**
		 * [_onFocus description]
		 * @return {void}
		 */
		_onFocus: function(e) {
			//_log.debug('_onFocus');

			this._showMenu(e);

			this.parent(e);
		},

		/**
		 * [_onFocus description]
		 * @return {void}
		 */
		_onBlur: function(e) {
			//_log.debug('_onBlur');
			this.parent(e);
			this._hideMenu(e);
		},

		/**
		 * [_showMenu description]
		 * @return {void}
		 */
		_showMenu: function() {

			if (this.readonly) {
				return;
			}

			var menu = this.menu;

			menu.setStyles({
				height: 0,
				left: 16,
				paddingTop: 0,
				paddingBottom: 0,
				display: 'block',
				opacity: 0
			});

			var coord = this.input.getCoordinates(this.element);

			var top = coord.height + coord.top;
			menu.setStyle('top', top);

			var width = coord.width;

			//_log.debug('widh', menu.scrollWidth, coord.width);

			if (menu.scrollWidth > coord.width) {
				width = menu.scrollWidth;
			}

			menu.setStyle('width', width);

			this.menuFx.start({
				height: this.menu.scrollHeight + 22,
				paddingTop: 10,
				paddingBottom: 10,
				opacity: 1
			});

			this.fireEvent('showMenu', menu);
		},


		/**
		 * [_showMenu description]
		 * @return {void}
		 */
		_hideMenu: function() {

			if (this.input.get('readonly')) {
				return;
			}

			this.menuFx.start({
				height: 0,
				paddingTop: 0,
				paddingBottom: 0,
				opacity: 0
			});

			var self = this;
			(function() {
				self.menu.setStyle('display', 'none');
			}).delay(this.options.menuFx.duration);

			this.fireEvent('hide');
		},

		/**
		 * [_initMenuPosition description]
		 * @return {Object}
		 */
		_initMenuPosition: function() {
			//_log.debug('_initMenuPosition');
			//var container = this.container.getParent().getCoordinates();
			var coord = this.element.getCoordinates(this.container);

			return coord;
		},

		/**
		 * [_initItem description]
		 * @param  {string} name
		 * @param  {Object} def
		 * @param  {DOMElement} element
		 * @return {void}
		 */
		_initItem: function(name, def, element, value) {
			var self = this;
			var clss = ButtonControl;
			var opts;
			var comps = name.split(/\./);

			if (comps.length > 1) {
				clss = 'UI.' + comps[0].capitalize();
				name = comps[1];
			}

			if (name === 'separator') {
				clss = Separator;
			}

			if (def && def.clss) {
				clss = def.clss;
			}

			if (def && def.opts) {
				opts = def.opts;
				_log.debug('--', name, def.opts);
				opts.text = Locale.get('control.' + name, name) || name;
				//opts.icon = mnml.icon.font[name];
				opts.tag = 'span';
			} else {
				opts = {
					name: name,
					//icon: mnml.icon.font[name]
				};
			}

			//_log.debug(this.options.value, name);

			if (this.value === name) {
				opts.klss = 'is-selected';
			}

			if (!name) {
				return;
			}

			var Clss = api.strToClss(clss);

			if (clss === ButtonControl || clss === ButtonMenu) {
				opts.text = Locale.get('control.' + name, name) || name;
			}

			this.options.control = this.options.control || {};

			this.control[name] = new Clss(opts).inject(element);

			if (clss === ButtonControl) {
				this.control[name].addEvents({
					press: function() {
						var name = this.options.name;
						//_log.debug('press', name, this.isEnable());
						if (this.isEnable()) {
							self.value = name;
							//self.fireEvent('control::'+name, this);
							self.fireEvent('select', name);
						}
						self.menu.hide();
					}
				});
			}
		},

		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e
		 * @return {void}
		 */
		_onClick: function(e) {
			//_log.debug('_onElementClick');
			var opts = this.options;

			e.stopPropagation();

			if (!this.menu) {
				this._initMenu(opts);
			}

			this.menuShow(e);
		}

	});

	return exports;
});


/**
 * @class UI.Control.Field
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Field', [
	"UI/Control/Control"
], function(
	Control
) {

	var _log = __debug('ui:control-field');

	var exports = new Class({

		Extends: Control,

		options: {
			name: 'field',
			base: 'control',
			tag: 'div',
			type: 'input',
			value: null,
			error: true,
			useTextAsLabel: false,
			inkFx: {
			    duration: 200,
			    link: 'chain',
			    transition: Fx.Transitions.Quart.easeOut
			},
			binding: {
				_list: ['input'],
				input: {
					'input.keyup': '_onKeyUp',
					'input.keydown': '_onKeyDown',
					'input.mousedown': '_onMouseDown',
					'input.focus': '_onFocus',
					'input.blur': '_onBlur'
				}
			}
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function(){
			//create a new div as input element
			this.parent();

			var opts = this.options;

			_log.debug('_initElement', opts.name, opts.klss);

			this.element.addClass('ui-field');

			if (opts.klss) {
				this.element.addClass(opts.klss);
			}

			if (opts.label !== false) {
				this._initLabel();
			}

			this._initInput();

			if (opts.error) {
				this._initError();
			}
		},

		/**
		 * [_initLabel description]
		 * @return {[type]} [description]
		 */
		_initLabel: function()  {
			var text = this.options.name;

			if (this.options.useTextAsLabel)
				text = this.options.text;

			this.label = new Element('label', {
				html: text,
				'for': this.options.name
			}).inject(this.element);
		},

		/**
		 * [_initInput description]
		 * @return {[type]} [description]
		 */
		_initInput: function()  {
			//_log.debug('_initInput', this.options);

			this.input = new Element('input', {
				name: this.options.name,
				type: this.options.type,
				value: this.options.value,
				placeholder: this.options.text
			}).inject(this.element);

			if (this.readonly) {
				this.input.set('readonly', 'readonly');
				this.input.set('tabindex', '-1');
			}

			return this.input;
		},

		/**
		 * [_initName description]
		 * @param  {[type]} name [description]
		 * @return {[type]}      [description]
		 */
		_initName: function(name) {
			var opts = this.options;

			if (opts.name) {
				this.label.set('html', name);
				this.input.set('name', name);
			}
		},

		/**
		 * [_initValue description]
		 * @return {[type]} [description]
		 */
		_initValue: function(){
			var opts = this.options;

			//create a new div as input element
			if (opts.value)
				this.setValue(opts.value);
		},


		/**
		 * [getValue description]
		 * @return {[type]} [description]
		 */
		getValue: function(){
			return this.input.get('value');
		},

		/**
		 * [setValue description]
		 * @param {[type]} value [description]
		 */
		setValue: function(value){
			this.input.set('value', value);
			this.value = value;
			this.fireEvent('change' , value);
		},

		/**
		 * [_initEvents description]
		 * @return {[type]} [description]
		 */
		_initEvents: function() {
			this.parent();
			
			this.addEvents({
				blur: this.setState.bind(this, 'default'),
				focus: this.setState.bind(this, 'focus')
			});
		},

		/**
		 * [_onKeyUp description]
		 * @return {[type]} [description]
		 */
		_onKeyUp: function(e) {
			this.fireEvent('change', this.get('value'));
		},

		/**
		 * [_onKeyUp description]
		 * @return {[type]} [description]
		 */
		onKeyDown: function(e) {
			//_log.debug('keydown');
			if (this.readonly) { 
				e.stop();
				return;
			}

			this.fireEvent('change', this.get('value'));
		},

		/**
		 * [_onMouseDown description]
		 * @return {[type]} [description]
		 */
		_onMouseDown: function(e) {
			//_log.debug('mousedown');
			
			if (this.readonly) return;

			this.isFocused = true;
			this.setState('focus');
			this._inputFocus(e);
			//e.stopPropagation();
			//this.focus();
			//this._inputFocus(e);
		},

		/**
		 * [_onFocus description]
		 * @return {[type]} [description]
		 */
		_onFocus: function(e) {
			//_log.debug('focus');

			if (this.readonly) return;

			this.isFocused = true;
			this.setState('focus');
			this._inputFocus(e);
		},

		/**
		 * [_onBlur description]
		 * @return {[type]} [description]
		 */
		_onBlur: function(e) {
			//_log.debug('_onBlur');

			if (this.readonly) return;

			this.setState(null);
			this._hideInk();
			this.isFocused = false;
		},

		/**
		 * [_inputFocus description]
		 * @param  {event} e [description]
		 * @return {[type]}   [description]
		 */
		_inputFocus: function(e) {
			//_log.debug('_inputFocus', e);

			this.fireEvent('mousedown');

			this._showInk(e);

			this.isFocused = true;
		},

		/**
		 * [_initInk description]
		 * @return {[type]} [description]
		 */
		_initInk: function() {
			var opts = this.options;

			this.ink = new Element('span', {
				class: 'field-ink'
			}).inject(this.element);

			this.inkFx = new Fx.Morph(this.ink, opts.inkFx);
		},

		/**
		 * [_initEffect description]
		 * @param  {[type]} inner [description]
		 * @param  {[type]} x     [description]
		 * @param  {[type]} y     [description]
		 * @return {[type]}       [description]
		 */
		_showInk: function(e) {
			//_log.debug('_showInk');

			if (this.readonly) return;

			//if (this.ink) return;

			var coord = this.input.getCoordinates(this.element);

			var x = coord.width / 2;

			if (e === 0)
				x = 0;
			else if (e && e.event && e.event.offsetX)
				x = e.event.offsetX;

			var size = coord.width,
				top = 0;

			if (!this.ink)
				this._initInk();

			this.ink.setStyles({
				left: x
			});

			this.inkFx.start({
			    width: size,
			    top: coord.top + coord.height - 2,
			    bottom: 'initial',
			    left: coord.left,
			    opacity: 1
			});
		},


		/**
		 * [_initEffect description]
		 * @param  {[type]} inner [description]
		 * @param  {[type]} x     [description]
		 * @param  {[type]} y     [description]
		 * @return {[type]}       [description]
		 */
		_setInk: function(e) {

			if (this.readonly) return;

			//if (this.ink) return;

			var coord = this.input.getCoordinates(this.element);

			var x = coord.width / 2;

			var size = coord.width,
				top = 0;

			if (!this.ink)
				this._initInk();

			this.inkFx.set({
			    width: size,
			    top: coord.top + coord.height - 2,
			    bottom: 'initial',
			    left: coord.left,
			    opacity: 1
			});
		},

		/**
		 * [_initEffect description]
		 * @param  {[type]} inner [description]
		 * @param  {[type]} x     [description]
		 * @param  {[type]} y     [description]
		 * @return {[type]}       [description]
		 */
		_hideInk: function() {
			var self= this;
			var coord = this.input.getCoordinates(this.element);
			var size = coord.width / 2;

			if (!this.inkFx) {
				//_log.debug('errorrrrrrr');
				return;
			}

			this.inkFx.start({
			    width: 0,
			    left:size,
			    top: coord.top + coord.height - 2,
			    bottom: 'initial',
				opacity: 0
			});

			(function() {
				if (self.ink) {
					self.ink.destroy();
					self.ink = null;
				}
			}).delay(100);
		},

		/**
		 * [_initError description]
		 * @return {[type]} [description]
		 */
		_initError: function() {
			this.error = new Element('span', {
				class: 'error-message'
			}).inject(this.element);
		},

		/**
		 * [set description]
		 * @param {[type]} name  [description]
		 * @param {[type]} value [description]
		 */
		set: function(value) {
			//_log.debug('set', value);

			this.input.set('value', value);
			this.fireEvent('change', value);
		},

		/**
		 * [setError description]
		 * @param {[type]} error [description]
		 */
		setError: function(error) {

			if (error) {
				this.element.addClass('field-error');
					if (this.error)
						this.error.set('html', error);
			} else {
				if (this.error)
					this.element.removeClass('field-error');
					if (this.error)
						this.error.set('html', '');
			}

		}

	});

	return exports;
});


/*var UI = UI || {};
var Class = Class || function() {};*/

/**
 * UI Control Hour Class
 * @class UI.Control.Hour
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Hour', [
	'moment',
	"UI/Control/Field"
], function(
	moment,
	Field
) {

	var exports = new Class({

		Extends: Field,

		options: {
			name: 'hour',
			base: 'control'

		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function(){

			//create a new div as input element
			this.parent();

			//_log.debug(this.element, this.options.read);

			if (!this.options.read) {
				this.input.addClass('mask');
				this.input.set('alt', "{ type: 'fixed', mask: '99h99' }");
			}

			this.element.addClass('field-hour');

			this.date = this.options.value  || this.options.date;

			var time;
			if (this.date) {
				var tmp = new Date(this.date);
				time = this.convertDateTimeToHour(tmp);
			}

			this.input.set('value', time);

			this.input.set('type', 'text');
			this.input.addClass('control-hour');

			var self = this;

			this.addEvent('injected', function(){
				self._addControls();
			});

			//this._initMenu();
			//this._initWheel();
		},

		/**
		 * [_addControls description]
		 */
		_addControls: function() {
			var self = this;

			var controls = new Element('span', {
				'class': 'hour-controls'
			}).inject(this.input, 'after');

			this.plus = new Element('span', {
				'class': 'icon-font mdi-navigation-expand-less icon-more'
			}).inject(controls);

			this.plus.addEvent('click', function() {
				var tmp = new Date(self.date).increment('minute', '15').toJSON();
				self.date = new Date(self.date).increment('minute', '15');
				var time = self.convertDateTimeToHour(tmp);
				self.input.set('value', time);
				self.fireEvent('change', self.date);

			});


			this.minus = new Element('span', {
				'class': 'icon-font mdi-navigation-expand-more icon-less'
			}).inject(controls);

			this.minus.addEvent('click', function() {
				var tmp = new Date(self.date).decrement('minute', '15').toJSON();
				self.date = new Date(self.date).decrement('minute', '15');
				var time = self.convertDateTimeToHour(tmp);
				self.input.set('value', time);
				self.fireEvent('change', self.date);

			});

			//_log.debug('plus', self.element, self.minus);
		},

		convertDateTimeToHour: function(dateTime) {
			var date = new Date(dateTime);
			var h = date.getHours().toString();
			var m = date.getMinutes().toString();

			if (h.length === 1) h = '0' + h;
			if (m.length === 1) m = '0' + m;

			return h + 'h' + m;
		},


		/*
		Function: setState
			Set element state

		Arguments:
			state - (string) State name

		Return:
			(void)

		See also:
			<UI.Component::setState>
		*/

		setState: function(state){
			this.parent(state);
		},

		/*
		Function: _initEvents
			private function

			Set control relative behavior (blur and focus)

		Return:
			(void)

		See also:
			<UI.Control::_initEvents>
			<UI.Component::_initEvents>
		*/

		_initEvents: function() {
			var self = this;

			if (this.options.read) return;

			this.input.addEvents({
				keyup: function() {
					var hours = this.get('value').split('h');

					self.date = new Date(self.date);

					self.date.setHours(hours[0]);
					self.date.setMinutes(hours[1]);
					self.date.setSeconds(0);

					self.fireEvent('change', self.date);

				},
				mousedown: function(e) {
					//e.stopPropagation();
					//this.focus();
				},
				focus: function(e) {
					if (!this.get('readonly'))
						self.setState('focus', e);
				},
				blur: function(e) {
					self.setState(null, e);
				}
			});

			this.addEvents({
				blur: this.setState.bind(this, 'default'),
				focus: this.setState.bind(this, 'focus')
			});
		},

		_onKeyUp: function(e) {
			//this.fireEvent('change', this.get('value'));
		},

		/**
		 * [set description]
		 * @param {[type]} name  [description]
		 * @param {[type]} value [description]
		 */
		setOld: function(name, value) {
			this.element.set(name, value);

		},

		set: function(date) {
			//_log.debug('set', date);

			this.date = moment(date).toISOString();

			var time = this.convertDateTimeToHour(this.date);

			this.input.set('value', time);

			this.fireEvent('change', this.date);
		}

	});

	return exports;
});


/**
 * UI Control Input Class
 * @class UI.Control.Input
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Input', [
	"UI/Control/Control"
], function(
	Control
) {

	var exports = new Class({

		Extends: Control,

		options: {

			// default options
			name: 'ui-input',
			value: ''
		},

	/*
		Function: _initElement
			private function

			Create a div and a hidden input to receive the selected value

		Return:
			(void)

		See also:
			<UI.Control::_initElement>
			<UI.Component::_initElement>
		*/

		_initElement: function(){
			//create a new div as input element
			this.parent();


			_log.debug('_initElement', this);
			//create input
			this.setInput('text');
			this.input.setStyle('width', this.props.width - this.input.getStyle('paddingLeft').toInt() - this.input.getStyle('paddingRight').toInt());


		},

		/*
		Function: setState
			Set element state

		Arguments:
			state - (string) State name

		Return:
			(void)

		See also:
			<UI.Component::setState>
		*/

		setState: function(state){
			this.parent(state);
			if (this.skin[state]) this.input.set(this.skin[state].components.input.styles);
		},

		/*
		Function: _initEvents
			private function

			Set control relative behavior (blur and focus)

		Return:
			(void)

		See also:
			<UI.Control::_initEvents>
			<UI.Component::_initEvents>
		*/

		_initEvents: function() {
			this.parent();
			this.addEvents({
				blur: this.setState.bind(this, 'default'),
				focus: this.setState.bind(this, 'focus')
			});
		}

	});
	
	return exports;
});


/**
 * UI Control Item
 * @class UI.Control.Item
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Item', [
	"UI/Control/Control"
], function(
	Control
) {

	var exports = new Class({

		Extends: Control,

		name: 'item',

		options: {
			name: 'button',
			type: null, // push, file
			ink: true,
			element: {
				tag: 'span'
			},
			binding: {
				_list: ['element'],
				element: {
					'sensor.click': '_onClick',
					'sensor.dblclick': '_onDblClick',
					'sensor.mousedown': '_onMouseDown',
					'sensor.mouseup': '_onMouseUp',
					'sensor.mouseleave': '_onMouseLeave'
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

			//_log.debug('title', this.element,  opts.text);
			this.element.set('title', opts.text);

			if (opts.icon)
				this._initIcon(type);

			if (opts.text)
				this._initText(type);

			if (opts.ink)
				this._initSensor();
			else this.sensor = this.element;
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
			if (type == 'text-icon') {
				pos = 'top';
			}

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
			//_log.debug(this.name);

			if (this.options.klss)
				this.element.addClass('button-'+opts.klss);

			if (this.options.type)
				this.element.addClass('type-' + this.options.type);

			this.element.addClass(opts.prefix + this.name);

			if (this.options.clss)
				this.element.addClass(this.options.clss);
		},

		/**
		 * [_initText description]
		 * @param  {[type]} type [description]
		 * @return {[type]}      [description]
		 */
		_initSensor: function(type) {
			var opts = this.options;

			var tag = 'div';

			this.sensor = new Element(tag, {
				'class': 'button-sensor',
			}).inject(this.element);
		},

		/**
		 * [_initEffect description]
		 * @param  {[type]} inner [description]
		 * @param  {[type]} x     [description]
		 * @param  {[type]} y     [description]
		 * @return {[type]}       [description]
		 */
		_touchInk: function(ink, x, y, coord) {
			var size = coord.height,
				top = 0,
				duration = 1000;

			this.ink = ink;

			if (coord.width > size) {
				size = coord.width;
				top = (coord.height - coord.width) / 2;
			}

			var fx = new Fx.Morph(ink, {
			    duration: duration,
			    link: 'chain',
			    transition: Fx.Transitions.Quart.easeOut
			});

			fx.start({
			    height: size,
			    width: size,
			    left: 0,
			    top: top,
				opacity: 0
			});

			(function() {
				ink.destroy();
			}).delay(duration);
		},


		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e [description]
		 * @return {[type]}   [description]
		 */
		_onClick: function(e) {
			_log.debug('_onElementClick', e);
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
		 * [_onElementMouseDown description]
		 * @param  {event} e [description]
		 * @return {[type]}   [description]
		 */
		_onDblClick: function(e) {
			var opts = this.options;
			e.stop();
			if (opts.emit && this.state != 'disabled')
				this.fireEvent('dblpress', opts.emit);
				this.fireEvent('dblpressed', opts.emit);
		},

		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e [description]
		 * @return {[type]}   [description]
		 */
		_onMouseDown: function(e) {
			_log.debug('_onElementMouseDown', e);

			e.stop();

			var x = e.event.offsetX;
			var y = e.event.offsetY;

			coord = this.element.getCoordinates(this.element);

			var ink = this.ink = new Element('span', {
				class: 'button-ink',
				styles: {
					left: x,
					top: y
				}
			}).inject(this.element, 'top');

			this._touchInk(ink, x, y, coord);

			this.fireEvent('mousedown');
		},

		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e [description]
		 * @return {[type]}   [description]
		 */
		_onMouseLeave: function(e) {
			_log.debug('_onMouseLeave', e);


		},

		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e [description]
		 * @return {[type]}   [description]
		 */
		_onMouseEnter: function(e) {
			_log.debug('_onElementMouseDown', e);


		},

		/**
		 * [_onElementMouseUp description]
		 * @return {[type]} [description]
		 */
		_onMouseUp: function(e){
			_log.debug('_onElementMouseUp', e);

			var opts = this.options;
			if (this.options.type == 'check') {
				if (this.state == 'checked')
					this.setState(null);
				else this.setState('checked');
			}
			//this.react.destroy();
		}
	});

	return exports;
});


/**
 * UI Control Multi Class
 * @class UI.Control.Multi
 * @extends {UI.Multi}
 * @type {Class}
 */
define('UI/Control/Multi', [
	"UI/Control/Field"
], function(
	Field
) {

	var exports = new Class({

		Extends: Field,

		options: {
			name: 'choice'
		},

		_initElement: function() {
			this.parent();
			var self = this,
				opts = this.options;

			this.value = opts.value || [];

			//_log.debug(opts);
			this.input.set('type', 'text');
			this.input.addClass(opts.klss);
			this.element.addClass('ui-choice');

			this.wrapper = new Element('div', {
				'class': 'choice-wrapper'
			}).inject(this.element);

			this.choice = new Element('span', {
				'class': 'choice-text',
				html: opts.value
			}).inject(this.wrapper);

			this._initList(opts.list);

			/*if (opts.value)
				this.input.set('value', opts.value);*/

		},


		_initList: function(list) {
			var self = this;
			this.menu = new Element('ul', {
				'class': 'choice-list'
			}).inject(this.element);

			if (list && list.length > 0)
			for(var i = 0; i < list.length; i++) {
				this._initItem(list[i]);
			}
		},

		_initItem: function(item) {
			var self = this,
				opts = this.options;

			var li = new Element('li', {
				html: item
			}).inject(this.menu).addEvent('click', function(){
			
				if (this.hasClass('selected')) {
					this.removeClass('selected');
					var idx = self.value.indexOf(item);
					_log.debug(idx, item);
					if (idx > -1)
					self.value.splice(idx, 1);
				} else {
					this.addClass('selected');
					self.value.push(item);
				}

				_log.debug(self.value);

				self.fireEvent('change', {
					value: self.value,
					key: opts.name
				});
			});

			if (this.value && this.value.indexOf(item) > -1)
				li.addClass('selected');
		},


		toggle: function() {
			_log.debug('toggle_selected', this.element);

			if (this.selected)
				this.selected.removeClass('selected');

			if (this.selected && this.selected == this) {
				this.selected.removeClass('selected');
				this.selected = null;
			} else {
				this.addClass('selected');
				this.selected = this;
			}
		},

		_select: function(value) {
			var name = this.options.name;

			this.input.set('value', value);
			this.choice.set('html', value);
			this.element.removeClass('state-open');
			this.fireEvent('change', value, name);
		},

		_toggle: function() {
			if (this.element.hasClass('state-open'))
				this.element.removeClass('state-open');
			else this.element.addClass('state-open');
		},

		_initEvents: function() {
			this.parent();
			var self = this;

			this.choice.addEvents({
				click: this._toggle.bind(this, 'default')
			});
			/*this.input.addEvents({
				click: this._toggle.bind(this, 'default'),
				blur: this.setState.bind(this, 'default'),
				focus: this.setState.bind(this, 'focus')
			});*/
		},

	});

	return exports;
});


/**
 * UI Control RadiosGroup Class
 * @class UI.Control.RadiosGroup
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Radio', [

], function(

) {

	var exports = UI.RadiosGroup = new Class({

		Extends: UI.Control,

		options: {
			// default options
			name: 'radiosgroup',
			name: 'radio'
		},

		/*
		Constructor: initialize
			Constructor

		Arguments:
			options - (object) options

		Returns:
			this

		See also:
			<UI.Component::initialize>
		*/

		initialize: function(options) {
			this.parent(options);

			this.radios = [];
			this.selectedRadio = false;

			return this;
		},

		/*
		Function: newRadio
			Create a new radio element and return it

		Arguments:
			opt - (object) options, see above

		Return:
			(element) radio element

		Discussion:
			this method shoul no longer exist.
		*/

		newRadio: function(opt) {
			var radio = new Element('span', {
				'class': 'ui-radio',
				styles: Object.merge({}, {
					position: 'relative',
					display: 'inline-block',
					height: 15,
					zIndex: this.radios.length + 1
				}, opt.styles)
			}).store('value', opt.value);

			this.radios.push(radio);
			if (!this.radios[1]) {
				this.control = radio;
				this.setInput();
			}

			if (opt.text) {
				var text = new UI.Text({
					skin: this.options.skin,
					'for': this.options.name,
					html: opt.text
				}).inject(radio);

				//set width to element
				radio.setStyle('width', 100);
			} else {
				//radio.setStyle('width', this.props.width);
			}

			if (opt.selected && !this.selectedRadio) {
				this.selectedRadio = radio;
				this.input.value = radio.retrieve('value');
				this.setState(radio, 'selected');
			}
			this.addRadioAction(radio);

			return radio;
		},

		/*
		Function: newRadio
			private function

			Add event to radio

		Arguments:
			radio - (element) the radio element where event will be _setEventsed

		Return:
			(void)
		*/

		addRadioAction: function(radio) {
			radio.addEvents({
				'click': function() {
					if (this.selectedRadio) {
						this.setState(this.selectedRadio, 'default');
					}
					this.setState(radio, 'selected');
					this.selectedRadio = radio;
					this.input.value = radio.retrieve('value');
				}.bind(this)
			});
		},


		/*
		Function: setState
			private function

			set the state for the radio

		Arguments:
			radio - (element) the radio element
			state - (string) state

		Return:
			(void)
		*/

		setState: function(radio, state) {
			radio.paint.draw(this.skin[state]);
		}

	});

	return exports;

});


/**
 * UI Control Search Class
 * @class UI.Control.Search
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Search', [
	'UI/Control/Field',
	'UI/Control/Button',
	'UI/Component/Method'
], function(
	Field,
	Button,
	Method
) {

	var exports = new Class({

		Extends: Field,

		Implements: [Options, Events, Method],

		options: {
			name: 'search',
			error: false,
			label: false,
			timer: 100
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
		/*
		Function: _initElement
			private function

			Create a div and a hidden input to receive the selected value

		Return:
			(void)

		See also:
			<UI.Field::_initElement>
			<UI.Control::_initElement>
			<UI.Component::_initElement>
		*/

		_initElement: function(){
			//create a new div as input element
			this.parent();
			var opts = this.options;

			this.element.addClass('ui-search');

			this._initReset();
		},

		/**
		 * [_initInput description]
		 * @return {[type]} [description]
		 */
		_initInput: function()  {
			//_log.debug('_initInput', this.options);
			this.parent();

			this.input.set('autocomplete', 'off');
		},

		/*
		Function: _initReset
			private function

			Reset the value



		*/
		_initReset: function() {
			var self = this;
			var icon = mnml.icon.font.clear || 'mdi-action-help';
			this.reset = new Button({
				name: 'clear',
				icon: icon,
			}).inject(this.element).addEvent('press', function() {
				self.empty();
			});
		},

		_initEvents: function() {
			this.parent();

			var self = this,
				opts = this.options,
				timer;

			this.input.addEvents({
				keyup: function() {
					clearTimeout(timer);
					timer = setTimeout(function() {
						self.fireEvent('search', self.input.get('value'));
					}, opts.timer);
				},
				mousedown: function(e) {
					e.stopPropagation();
				}
			});
		},


		/*
		Function: focus

			Focus

		Return:
			this

		*/

		focus: function() {
			this.input.focus();
			this.fireEvent('focus');

			return this;
		},

		/*
		Function: empty

			Create a div and a hidden input to receive the selected value

		Return:
			this

		*/

		empty: function() {
			this.input.set('value', '');
			this.fireEvent('reset');

			return this;
		}
	});

	return exports;
});


/**
 * UI Control Select Class
 * @class UI.Control.Select
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Select', [
	"UI/Control/Field"
], function(
	Field
) {

	var exports = new Class({

		Extends: Field,

		options: {
			name: 'select',
			opts: {
				type: 'select',
				showValue: true
			}
		},

		_initElement: function() {
			this.parent();

			var self = this;

			this.input.set('type', 'hidden');
			var opts = this.options.opts;

			this.menu = new UI.Menu(opts)
			.addEvents({
				change: function(value){
					self.input.set('value', value);
					self.fireEvent('change', value);
					self.setState('close');
				}
			}).inject(this.element);

			if (this.options.value)
				self.menu.head.set('html', this.options.value);

		}
	});

	return exports;
});


/**
 * UI Control Separator
 * @class UI.Control.Separator
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Separator', [
	"UI/Control/Control"
], function(
	Control
) {

	var exports = new Class({

		Extends: Control,

		name: 'separator',

		options: {
			name: 'separator',
			type: null, // push, file
			element: {
				tag: 'span'
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

			if (this.options.clss)
				this.element.addClass(this.options.clss);
		},


		/**
		 * [_initClass description]
		 * @return {[type]} [description]
		 */
		_initClass: function() {
			var opts = this.options;
			//_log.debug(this.name);

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
			_log.debug();
			this.fireEvent('mousedown');
			e.stop();
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

	return exports;
});

/**
 * UI Control Slider Class
 * @class UI.Control.Slider
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Slider', [

], function(

) {

	var exports = UI.Slider = new Class({

		Extends: UI.Component,

		options: {

			// default options
			name: 'slider',
			type: 'horizontal',

			// implemented events
			onStart: function() {},
			onChange: function() {},
			onComplete: function() {},
			onTick: function() {},

			// mootools slider default settings
			snap: false,
			offset: 0,
			range: false,
			wheel: false,
			steps: 100
		},

		/*
		Constructor: initialize
			Construtor

		Arguments:
			options - (object) options
		*/

		initialize: function(options) {
			this.parent(options);
		},

		/*
		Function: _initElement
			private function

			Call parent method and create a skinned knob element

		Return:
			(void)
		*/

		_initElement: function() {
			this.parent();

			this.handler = new UI.Component({
				skin: this.options.skin,
				name: 'slider',
				type: 'knob'
			}).inject(this.element);
		},

		/*
		Function: inject
			Create the slider and inject it

		Arguments:
			target - (mix) See mootools doc
			position - (string) See mootools doc

		Return:
			this
		*/

		inject: function(target, position) {
			this.fireEvent('inject');

			var self = this;

			this.element.inject(target, position);
			this.element.setStyle('visibility', 'visible');
			this.setSize();
			this.setCanvas();
			//ui.controller.element.register(this);

			this.slider = new Slider(this.paint.canvas, this.handler.element, {
				snap: this.options.snap,
				offset: this.options.offset,
				range: this.options.range,
				wheel: this.options.wheel,
				steps: this.options.steps,
				mode: this.options.type,

				onStart: function(step) {
					self.fireEvent('start', step);
				},
				onTick: function(position) {
					if (this.options.snap) {
						position = this.toPosition(this.step);
					}
					this.knob.setStyle(this.property, position);
				},
				onChange: function(step) {
					self.fireEvent('change', step);
				},
				onComplete: function(step) {
					self.fireEvent('complete', step);
				}
			});
			this.fireEvent('injected');

			return this;
		},

		/*
		Function: _initEvents
			private function

			Set behavior relative to slider (complete)

		Return:
			(void)
		*/

		_initEvents: function() {
			this.parent();
			this.addEvent('complete', function(step) {
				this.value = step;
			});
		},

		/*
		Function: set
			Set the slider value

		Arguments:
			value - (integer) The value to set

		Return:
			this
		*/

		set: function(value) {
			return this.slider.set(value);
		}

	});

	return exports;

});


/**
 * UI Control Steps Class
 * @class UI.Control.Steps
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Steps', [
	"UI/Control/Field"
], function(
	Field
) {

	var exports = new Class({

		Extends: Field,

		options: {
			name: 'steps'
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function() {
			//_log.debug('_initElement');
			this.parent();

			this.item = {};

			var opts = this.options;

			//_log.debug(opts);
			this.input.set('type', 'text');
			this.input.addClass(opts.klss);
			this.element.addClass('ui-steps');

			this.wrapper = new Element('div', {
				'class': 'steps-wrapper'
			}).inject(this.element);

			this.steps = new Element('span', {
				'class': 'steps-text',
				html: opts.value
			}).inject(this.wrapper);

			this._initList(opts.list);

			//_log.debug(opts.value);

			if (!opts.value)
				opts.value = 1;

			if (opts.value)
				this.input.set('value', opts.value);

		},

		/**
		 * [_initList description]
		 * @param  {[type]} list [description]
		 * @return {[type]}      [description]
		 */
		_initList: function(list) {
			//_log.debug('_initList', list);

			this.list = new Element('ul', {
				'class': 'steps-list'
			}).inject(this.element);

			this.itemList = [];

			if (list && list.length > 0)
			for(var i = 0; i < list.length; i++) {
				this._initItem(list[i], i+1);
			}
		},

		/**
		 * [_initItem description]
		 * @param  {[type]} item [description]
		 * @return {[type]}      [description]
		 */
		_initItem: function(item, idx) {
			//_log.debug('_initItem', item);
			var self = this,
				opts = this.options;

			var li = new Element('li', {
				'data-value': item
			}).inject(this.list)
			 .addEvent('click', function(){
			 	//_log.debug('step emit', idx, item, name);
				self.fireEvent('step', idx);
				self.fireEvent(item);
			 });

			new Element('span', {
				html: idx,
				'class': 'step-index'
			}).inject(li);

			this.options.opts = this.options.opts || {};
			var map = this.options.opts.text || {};
			var text = map[item] || item;

			new Element('span', {
				html: text,
				'class': 'step-label'
			}).inject(li);

			this.item[item] = li;

			this.itemList.push(item);

			if (opts.value === item ) {
				li.addClass('selected');
				self.selected = li;
			}

			if (opts.value === item ) {
				li.addClass('selected');
				self.selected = li;
			}
		},

		/**
		 * override default _initError
		 * @return {[type]} [description]
		 */
		_initError: function() {

		},

		/**
		 * [select description]
		 * @param  {[type]} value [description]
		 * @return {[type]}       [description]
		 */
		set: function(value) {
			//_log.debug('steps set', value, this.item);
			var item = this.item[value];

			if (!item) return;

			if (this.selected)
				this.selected.removeClass('selected');

			item.addClass('selected');
			this.selected = item;
		}

	});

	return exports;
});

/*
	Class: UI.Textarea
		Create a skinnable textarea element

	Extends:
		<UI.Control>

	Arguments:
		options

	Options:
		name - (string) name of hidden input
		value - (string) value to set on initialize

	Example:
		(start code)
			var textarea = new UI.Textarea({
				name : 'myTextarea',
				value : 'Hello world!'
			}).inject(document.body);
		(end)
*/

/**
 * UI Control Textarea
 * @class UI.Control.Textarea
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Textarea', [
	"UI/Control/Field"
], function(
	Field
) {

	var _log = __debug('ui:textarea');

	var exports = new Class({

		Extends: Field,

		options: {
			name: 'textarea',

			// default options
			name: 'ui-input',
			value: '',
			binding: {
				_list: ['input', 'button'],
				input: {
					'input.mousedown': '_onMouseDown',
					'input.keydown': '_updateInk',
					'input.keyup': '_updateInk'
				},
				button: {
					'button.press': '_onButtonPress'
				}
			}
		},


		/**
		 * [_initInput description]
		 * @return {[type]} [description]
		 */
		_initInput: function()  {
			_log.debug('_initInput');
			var	opts = this.options;

			var input = this.input = new Element('textarea', {
				name: opts.name,
				placeholder: opts.text,
				type: opts.type,
				value: opts.value
			}).inject(this.element);

			if (this.readonly) {
				this.input.set('readonly', true);
				this.input.set('tabeindex', '-1');
			}

			if (opts.klss)
				this.input.addClass(opts.klss);

			this._initAutogrow(input);
		},


		/**
		 * [_initAutogrow description]
		 * @param  {[type]} input [description]
		 * @return {[type]}       [description]
		 */
		_initAutogrow: function(input) {
			var self = this;

			clearTimeout(this.autogrowTimeout);

			this.autogrowTimeout = setTimeout(function() {
				var autogrow = new Form.AutoGrow(input, {
					minHeightFactor: 1
				});
				input.store('autogrow', autogrow);

				input.addEvent('focus', function() {
					autogrow.resize();
				});
			}, 200);
		},

		/**
		 *           
		 * @return {[type]} [description]
		 */
		_updateInk: function(e) {
			//_log.debug('_updateInk');

			if (this.readonly) {
				e.stop();
				return;
			}

			if (this._setInk)
				this._setInk(1);
		},

		/**
		 * [_initEvents description]
		 * @return {[type]} [description]
		 */
		_initEvents: function(){
			this.parent();

			this.addEvents({
				blur: this.setState.bind(this, 'default'),
				focus: this.setState.bind(this, 'focus')
			});
		}
	});

	return exports;
});

/**
 * UI Control Tool
 * @class UI.Control.Tool
 * @type {Class}
 */
define('UI/Control/Tool', [

], function(

) {

	var exports = UI.Tool = new Class({

		Extends: UI.Container,

		name: 'tool',

		options: {
			base: 'component',
			name: 'tool',

			content: true,

			type: null, // drop
			menu: {
				tag: 'ul'
			},
			item: {
				component: 'button',
				options: {
					tag: 'li',
					klass: 'list-item'
				}
			},
			trigger: 'click',
			timerOnHide: 500,
			hideOnCall: true
		},

		initialize: function(options) {
			this.setOptions(options);

			this.timer = null;

			if (this.options.type == 'drop')
				this.state = 'close';
			else this.state = 'open';

			this.item = {};
			this.menus = [];

			this._initElement();
			this._initComponent();
			this._initEvents();

			ui.menu.register(this);

			return this;
		},

		/*
		Function: _initElement
			private function

			Call UI.Component _initElement, then create a menu wrapper

		Return:
			(void)

		See also:
			<UI.Component::_initElement>
		*/
		_initElement: function() {
			var self = this,
				opts = this.options;

			//_log.debug('UI.MEnu._initElement()', opts);

			this.element = new Element('div', {
				'class': 'ui-menu',
				'zIndex': opts.zIndex
			});

			this.element.addClass('menu-' + opts.name);

			if (opts.klss)
				this.element.addClass(opts.klss);

			if (opts.type)
				this.element.addClass('type-' + opts.type);

			this._initHead(opts.head);

			this.content = new Element('ul', {
				'class': 'menu-list'
			}).inject(this.element);

			this.addEvents({
				show: function() {
					self.content.getStyle('display', 'block');
				},
				hide: function() {
					self.content.getStyle('display', 'none');
				}
			});

			if (opts.open)
				this.display = this.content.getStyle('display', 'block');

			this.element.addEvent('click', function(e) {
				e.stop();
			});
		},

		/*
		Function: _initHead
			private function

			Call UI.Component _initHead, then create a menu wrapper

		Return:
			(void)

		See also:
			<UI.Component::_initHead>
		*/
		_initHead: function() {
			var self = this,
				opts = this.options;
			trigger = opts.trigger;

			if (!opts.head) return;

			head = new Element('div', {
				'class': 'menu-head',
				html: opts.head.text
			}).inject(this);

			head.addEvent(trigger, function() {
				self.toggle();
			});

			this.addEvents({
				show: function() {
					this.head.addClass('open');
				},
				hide: function() {
					this.head.removeClass('open');
				},
				change: function(value) {
					//_log.debug('change',value);
					if (opts.showValue && self.head)
						self.head.set('html', value);
				}
			});

			if (opts.head.klss)
				head.addClass(opts.head.klss);

			this.head = head;
		},

		/*
		Function: _initComponent
			private function

			Process the node object and inject the initialized component in the content of the container.

		Return:
			(void)

		Note:
			Override UI.Component._initComponent

		See also:
			<UI.Component::_initHead>
		*/
		_initComponent: function() {
			var self = this,
				opts = this.options,
				node = opts.menu,
				container = this.content;

			//_log.debug(node);

			node.each(function(comp, i) {
				if (!comp.text)
					comp.text = null; // comp.name;
				//comp.text = comp.name;

				var component = opts.item.component.capitalize();

				var itemopts = Object.merge(opts.item.options, comp);
				// _log.debug('---',itemopts);
				// instantiate de menu component

				var item = new UI[component](itemopts);

				self.item[comp.name] = item;

				if (comp.klss)
					item.element.addClass(comp.klss);

				if (comp.type)
					item.addClass('type-' + comp.type);

				if (comp.state)
					item.setState(comp.state);

				this.menus.push(comp);
				//this.item[comp.name]

				if (comp.selected)
					self.select(item);

				if (comp.call) {
					item.element.addEvents({
						click: function(e) {
							//_log.debug('click event menu', opts.hideOnCall, opts.type);
							//e.stop();

							self.fireEvent('change', this.get('name'));
							self.fireEvent('select', this);
							if (opts.type == 'drop' && opts.hideOnCall)
								self.hideNow();

							if (self.name == 'context')
								self.hideNow();
						}
					});
				} else if (comp.emit) {
					item.element.addEvents({
						click: function(e) {
							e.stop();
							self.fireEvent(comp.emit);
						}
					});
				} else {
					item.element.addEvents({
						click: function(e) {
							e.stop();
							if (self.state == 'disabled') return;
							//_log.debug('---',opts.type);
							self.value = this.get('name');
							self.fireEvent('change', this.get('name'));
							self.fireEvent('selectItem', comp);



							if (opts.type == 'push')
								self.fireEvent('select', this);
							else if (opts.type == 'drop')
								self.hideNow();
						}
					});
				}

				item.inject(this.content);

			}, this);
		},

		_initEvents: function() {

			//_log.debug('_initEvents',this.options.name);
			var self = this,
				opts = this.options;

			if (opts.type == 'drop') {
				if (opts.timerOnHide) {
					this.element.addEvents({
						mouseleave: function() {
							self.hide();
						},
						mouseenter: function() {
							clearTimeout(self.timer);
						}
					});
				}
			}


			if (opts.type == 'push') {
				//_log.debug('push',this);
				this.addEvents({
					'select': function(menu) {
						//_log.debug('mmm', menu.get('name'));
						self.select(menu.get('name'));
					}
				});
			}
		},

		select: function(menu) {

			if (menu === false || menu === null) {
				if (this.selected) {
					//_log.debug('selected');
					this.selected.removeClass('state-active');
					this.selected.removeClass('state-checked');
				}
				return;
			}

			if (typeOf(menu) == 'string') {
				menu = this.element.getElement('[name="' + menu + '"]');
			}

			if (!menu) return;

			if (this.selected)
				this.selected.removeClass('state-active');

			menu.addClass('state-active');
			this.selected = menu;
		},

		unselect: function(menu) {

			var self = this;
			//_log.debug(typeOf(menu));

			if (typeOf(menu) == 'string') {
				menu = this.element.getElement('[name="' + menu + '"]');
			}

			if (!menu) return;

			if (self.selected)
				self.selected = null;

			menu.removeClass('state-active');
			menu.removeClass('state-checked');
		},

		deselect: function() {
			if (!this.selected) return;

			this.selected.removeClass('state-active');
			this.selected.removeClass('state-checked');
		},

		getSelected: function() {

		},

		toggle: function() {
			if (this.state == 'open') {
				this.setState('close');
			} else {
				this.setState('open');
			}

			this.fireEvent('toggle');
		},

		toggleFold: function() {
			if (this.state == 'folded') {
				this.setState('unfolded');
			} else {
				this.setState('floded');
			}

			this.fireEvent('toggle');
		},


		hide: function() {
			clearTimeout(this.timer);
			this.timer = (function() {
				this.close();
			}).delay(this.options.timerOnHide, this);
		},

		hideNow: function() {
			this.close();
		},

		shut: function() {
			this.setState('close');

			this.fireEvent('closed');
		},

		close: function() {
			this.setState('close');

			this.fireEvent('closed');
		},

		open: function() {
			this.setState('open');

			this.fireEvent('opened');
		}

	});

	return exports;

});


/**
 * UI Control Url
 * @class UI.Control.Url
 * @extends {UI.COntrol}
 * @author Jerome Vial, Bruno Santos
 */
define('UI/Control/URL', [
	"UI/Control/Field"
], function(
	Field
) {

	var exports = new Class({

		Extends: Field,

		options: {
			name: 'URL',
			base: 'control',
			tag: 'div',
			type: 'input',
			value: null,
			useTextAsLabel: false
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
		/*
		Function: _initElement
			private function

			Create a div and a hidden input to receive the selected value

		Return:
			(void)

		See also:
			<UI.Control::_initElement>
			<UI.Component::_initElement>
		*/

		_initElement: function(){
			//create a new div as input element
			this.parent();

			var opts = this.options;

			this.element.addClass('ui-field');

			if (opts.klss)
				this.element.addClass(opts.klss);

			if (opts.label != false)
				this._initLabel();

			this._initInput();
		},

		_initLabel: function()  {
			var text = this.options.name;

			if (this.options.useTextAsLabel)
				text = this.options.text;

			this.label = new Element('label', {
				html: text
			}).inject(this.element);
		},

		_initInput: function()  {
			var self = this;

			//_log.debug('imput option', this.options);

			this.input = new Element('input', {
				name: this.options.name,
				type: this.options.type,
				value: this.options.value,
				placeholder: this.options.text
			}).inject(this.element);

			this.input.addEvents({
				keyup: function() {
					self.fireEvent('change', this.get('value'));
				},
				mousedown: function(e) {
					e.stopPropagation();
					//this.focus();
				}
			});
		}
	});

	return exports;
});


/**
 * UI Control Upload
 * @class UI.Control.Upload
 * @extends {UI.Control}
 * @type {Class}
 */
define('UI/Control/Upload', [
	"UI/Control/Button"
], function(
	Button
) {

	var exports = UI.Upload = new Class({

		Extends: Button,

		name: 'button',

		options: {
			name: 'upload',
			type: null, // push, file
			ink: false,
			element: {
				tag: 'button',
				class: 'type-action'
			}
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function(){
			_log.debug('upload');
			this.parent();
			var opts = this.options;

			this._initFile(opts.type);
		},

		/**
		 * [_initFile description]
		 * @param  {[type]} type [description]
		 * @return {[type]}      [description]
		 */
		_initFile: function(type) {
			var self = this;

			var file = new Element('input', {
				type: 'file',
				name: 'upload',
				id: 'upload',
				multiple: 'multiple'
			}).inject(this.element);

			file.addEvent('change', function(info) {
				_log.debug('change mootools', info);
			});

			file.onchange = function(info) {
				_log.debug('onchage native', info, this.files);
				var files = this.files;
				
				if (files) {
					_log.debug('fireevent uploadFile', files);
					self.fireEvent('uploadFile', [files]);
				}
			};


			this.addEvent('injected', function() {
				/*var coord = self.icon.getCoordinates();

				coord.top = '0';
				coord.left = '0';

				file.setStyles(coord);*/
			});
		}

	});

	return exports;
});


/**
 * UI Component Drag
 * @class UI.Component.Drag
 * @author Jerome D. Vial
 */
define('UI/Layout/Component', [
	'utils/api',
], function(
	api
) {

	var exports = new Class({
		options: {
			resizer: {
				modifier: {
					row: {
						size: 'width',
						from: 'left',
						mode: {
							y: false
						}
					},
					column: {
						size: 'height',
						from: 'top',
						mode: {
							x: false
						}
					}
				}
			}
		},

		/**
		 * Instanciate the given object comp
		 * @param  {object]} comp list component
		 * @return {[type]}      [description]
		 */
		_initComponent: function(comp) {
			//_log.debug('_initComponent', comp.opts.name, comp);

			// shortcuts
			comp.opts.flex = comp.opts.flex || comp.flex;
			comp.opts.hide = comp.opts.hide || comp.hide;
			comp.opts.theme = comp.opts.theme || comp.theme;

			//_log.debug('comp', comp.clss);

			var name = comp.opts.name;
			var clss = api.strToClss(comp.clss);

			//comp.opts.container = comp.container;
			var component = this.component[name] = this[name] = new clss(comp.opts);
			
			//_log.debug(component.container);

			// register component
			this._componentRegister(name, component);

			//settings
			this._initComponentSettings(component);

			// styles and size
			this._setComponentStyles(component);
			this._setComponentDisplay(component);
			this._attachComponentEvents(component);

			// 
			
			return component;
		},

		/**
		 * [_componentRegister description]
		 * @param  {[type]} name      [description]
		 * @param  {[type]} component [description]
		 * @return {[type]}           [description]
		 */
		_componentRegister: function(name, component) {
			//_log.debug('_componentRegister', name, component);

			this.components = this.components || [];
			this.components.push(component);
		},

		/**
		 * [_initComponentSettings description]
		 * @param  {object} name   [description]
		 * @param  {[type]} object [description]
		 * @return {[type]}        [description]
		 */
		_initComponentSettings: function(component) {
			//_log.debug('_initcompSettings', component);

			var name = component.getName();
			var element = component.element;
		
		},

		/**
		 * [_initComponentSettings description]
		 * @param  {object} name   [description]
		 * @param  {[type]} object [description]
		 * @return {[type]}        [description]
		 */
		_setComponentStyles: function(component) {
			//_log.debug('_setComponentStyles', component);

			if (component.options.flex) {
				//component.element.setStyle('flex', component.options.flex);
				component.element.addClass('flex-'+component.options.flex);
			}

			if (component.options.hide) {
				component.element.setStyle('display', 'none');

			}

			if (component.options.theme) {
				component.element.addClass('theme' + '-' + component.options.theme);

			}
		},

		/**
		 * [_initSize description]
		 * @param  {[type]} name   [description]
		 * @param  {[type]} object [description]
		 * @return {[type]}        [description]
		 */
		_setComponentDisplay: function(component) {
			//_log.debug('comp opts', component.options);
			var display = 'normalized';

			
			var name = component.getName();
			var element = component.element;

			if (this.settings[name] && this.settings[name].display) {
				display = this.settings[name].display;
			}

			component.setDisplay(display, 'width');

			if (component.options.flex) {
				//_log.debug('---flex', name, component.options);
			} else {
				
				if (this.settings[name] && this.settings[name].width) {
					//_log.debug('settings', name, display);
					//element.setStyle('flex', 'none');
					element.addClass('flex-none');
					if (display === 'minimized') {
					
						element.setStyle('width', 0);
					} else {
						
						if (this.settings[name].width < 32)
							this.settings[name].width = 32;

						
						//_log.debug('----', name, element);
						element.setStyle('width', this.settings[name].width || 160);
					}

					component.width = this.settings[name].width || 200;
					component._modifier = 'width';
				} else if (this.settings[name] && this.settings[name].height) {
					element.setStyle('flex', 'none');
					element.setStyle('height', this.settings[name].height);
					component.height = this.settings[name].height || 160;
					component._modifier = 'height';
				}

				this._initResizer(component);
			}
		},

		/**
		 * [_attachComponentEvents description]
		 * @param  {[type]} object [description]
		 * @return {[type]}        [description]
		 */
		_attachComponentEvents: function(component) {
			var self = this;
			var name = component.getName();

			component.addEvents({
				toggled:  function() {
					//_log.debug('toggled');
					self.fireEvent('resize');
				},
				resizing:  function() {
					//_log.debug('toggled');
					self.fireEvent('resize');
				},
				display: function(state) {
					//_log.debug('display', name, state);
					self.fireEvent('display', [name, state]);
				}
			});

			this.addEvents({
				resize: function() {
					component.fireEvent('resize');
				},
				drag: function() {
					component.fireEvent('resize');
				},
				normalize: function() {
					component.fireEvent('resize');
				},
				maximize: function() {
					component.fireEvent('resize');
				},
				minimize: function() {
					component.fireEvent('resize');
				},
				device: function(device) {
					//_log.debug('device', device);
					component.fireEvent('device', device);
				}
			});
		}
	});

	return exports;
});


/**
 * UI Layout Class
 * @class UI.Layout
 * @implements {Events, Options}
 */
define('UI/Layout/Layout', [
	"UI/Container/Container",
	"UI/Layout/Component",
	"UI/Layout/Resize"
], function(
	Container,
	Component,
	Resize
) {

	var _log = __debug('ui:layout');

	var exports = new Class({

		Implements: [Events, Options, Component, Resize],

		/**
		 * Layout options
		 * @type {Object}
		 * @param {name} [name] layout
		 * @param {Object} [clss] Default component class
		 */
		options: {
			name: 'layout',
			clss: Container,
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
			//_log.debug('initialize', opts);
			var node = opts.node;
			this.settings = opts.settings || {};
			this.component = {};
			this.components = [];
			this.resizer = {};

			this._initContainer(opts);
			this._processComponents(node);
			this._initEvents();
		},

		/**
		 * [_initEvents description]
		 * @param  {[type]} opts [description]
		 * @return {[type]}      [description]
		 */
		_initEvents: function(opts) {
			var self = this;

			window.addEvent('resize', function() {
				//_log.debug('layout resize', this.container.getCoordinates());
				var coord = self.container.getCoordinates();
				if (coord.width < 720 && self.navi) {
					self.navi.minimize();
					//self.resizer.navi.hide();
				}
				self.fireEvent('drag');
			});


			(function() {
				self.fireEvent('drag');
			}).delay(1000);
		},

		/**
		 * [_initContainer description]
		 * @return {[type]} [description]
		 */
		_initContainer: function(opts) {

			this.container = new Container({
				resizable: false,
				'class': 'ui-layout layout-' + opts.node._name
			}).inject(opts.container);

			//_log.debug('Layout container', this.container);

			this.container.addClass('ui-layout');
			this.container.addClass('layout-' + opts.node._name);

			if (this.options.theme)
				this.container.addClass('theme-' + this.options.theme);

			opts.node.container = this.container;
		},

		/**
		 * [_process description]
		 * @param  {[type]} mnml [description]
		 * @return {[type]}      [description]
		 */
		_processComponents: function(node, type, level) {
			//_log.debug('_processComponents', node, type, level || 1);
			var list = node._list || [];
				level = level++ || 1;

			//_log.debug('---!!! axis', node._axis);

			if (type !== 'tab') {
				this._initFlexDirection(node.container, node._axis);
			}


			for (var i = 0, len = list.length; i < list.length; i++) {
				//_log.debug('--', list[i]);
				var name = list[i],
					comp = node[name] || {};

				comp.clss = comp.clss || this.options.clss;
				comp.opts = comp.opts || {};
				comp.opts.name = name;
				comp.opts.position = i + 1;
				comp.opts.nComp = list.length;

				if (name === "navi")
					comp.opts.useUnderlay = true;

				if (i === list.length - 1) {
					//_log.debug('last--', name);
					comp.opts.last = true;
				}

				if (type !== 'tab') {
					comp.opts.container = node.container;
				}

				var component = this._initComponent(comp);

				if (type === 'tab') {
					//_log.debug('tab', component);
					component.options.noResizer = true;
					node.container.addTab(component);
				}

				component.element.addClass('container-'+name);

				if (comp.node) {
					comp.node.container = component;

					if (component.options.clss === 'tab') {
						var c = this._processComponents(comp.node, 'tab', level);
					} else {
						this._processComponents(comp.node, null, level);
					}
				}
			}
		},

		/**
		 * [_initFlexDirection description]
		 * @param  {[type]} container [description]
		 * @param  {[type]} axis      [description]
		 * @return {[type]}           [description]
		 */
		_initFlexDirection: function(container, axis) {
			//_log.debug('_initFlexDirection', container, axis);

			if (!container) return;

			axis = axis || 'x';

			if (axis === 'x') {
				container.addClass('flex-horizontal');
			} else if (axis === 'y') {
				container.addClass('flex-vertical');
			}
		},

		/**
		 * [setDevice description]
		 * @param {[type]} device [description]
		 */
		setDevice: function(device) {
			//_log.debug('setDevice');

			this.device = device;

			this.fireEvent('device', device);
		}
	});

	return exports;
});


/**
 * Resize Layout
 * @class UI.Layout.Resize
 * @author Jerome D. Vial
 */
define('UI/Layout/Resize', [
	
], function(

) {

	var exports = new Class({
		options: {
			resizer: {
				modifier: {
					row: {
						size: 'width',
						from: 'left',
						mode: {
							y: false
						}
					},
					column: {
						size: 'height',
						from: 'top',
						mode: {
							x: false
						}
					}
				}
			}
		},

		/**
		 * [_initResizeBorder description]
		 * @param  {[type]} component [description]
		 * @param  {[type]} border    [description]
		 * @return {[type]}           [description]
		 */
		_initResizer: function(component) {
			//_log.debug('_initResizer', component.options.name);

			var self = this,
				name = component.options.name,
				element = component.element,
				container = component.container,
				last = component.options.last;

			this._initMaximize(component);


			if (!container) return;

			var direction = container.getStyle('flex-direction');
			
			if (!direction)	return;

			var modifier = this.options.resizer.modifier[direction];

			if (!modifier) return;

			//_log.debug('direction', direction, modifier);

			//_log.debug(element, coord);
			var resizer = this.resizer[name] = new Element('div', {
				'class': 'ui-resizer',
				'data-name': component.options.name
			}).addEvents({
				click: function(e){
					e.stop();
				},
				mousedown: function(e) {
					e.stop();
				}
			}).inject(container);

			if (modifier.size) {
				resizer.addClass('resizer-'+ modifier.size);
			}

			if (last) {
				//_log.debug('------last' );
				//resizer.addClass('resizer-last');
			}

			this._initResizerDrag(resizer, modifier, component);
			this._initResizerEvent(component, resizer, modifier);

			this.fireEvent('drag');
		},

		/**
		 * [_initDrag description]
		 * @param  {[type]} resizer  [description]
		 * @param  {[type]} modifier [description]
		 * @return {[type]}          [description]
		 */
		_initResizerDrag: function(resizer, modifier, component) {
			var self = this;
			//_log.debug('initResizerDrag', resizer, modifier);

			var element = component.element,
				container = component.container,
				last = component.options.last;

			var drag = new Drag.Move(resizer, {
				modifiers: modifier.mode,
			    onStart: function(el){
					//_log.debug('onStart', el);
					//self.fireEvent('resizeStart', el);
				},
				onDrag: function(el, ev){
					//_log.debug('onDrag', el);
					var coord = element.getCoordinates(container);
					var coordc = container.getCoordinates();
					var c = resizer.getCoordinates(container);
					//element.setStyle('flex','none');
					//element.setStyle(modifier.size, c[modifier.from] - coord[modifier.from]);
					if (last){
						//_log.debug(modifier.size, coordc[modifier.size], c[modifier.from]);
						element.setStyle(modifier.size, coordc[modifier.size] - c[modifier.from]);
					}
					else {
						element.setStyle(modifier.size, c[modifier.from] - coord[modifier.from]);
					}

					self.fireEvent('drag');
				},
				onComplete: function(el){
					//_log.debug('onComplete', component.main, modifier.size, size);
					//_log.debug('onComplete', modifier.size, element.getCoordinates(container)[modifier.size]);
					var coord = element.getCoordinates(container);
					var size = element.getCoordinates(container)[modifier.size];
					self.fireEvent('resizer', [component.main, modifier.size, size]);
					component.fireEvent('resizeComplete', [modifier.size, size]);

					//_log.debug('size', modifier, size);

					component[modifier.size] = size;
				}
			});

			return drag;
		},

		/**
		 * [_initResizerEvent description]
		 * @param  {[type]} component [description]
		 * @param  {[type]} resizer   [description]
		 * @param  {[type]} modifier  [description]
		 * @return {[type]}           [description]
		 */
		// will definitly use a controller for that
		_initResizerEvent: function(component, resizer, modifier) {
			//_log.debug('_initResizerEvent', component.options.name, component.options.last);
			var self = this;

			this.addEvents({
				drag: function(e) {
					//_log.debug('drag', e);
					self._updateSize(component, resizer, modifier);
				},
				maximize: function() {
					//_log.debug(direction);
					self._updateSize(component, resizer, modifier);
				},
				normalize: function() {
					//_log.debug(direction);
					self._updateSize(component, resizer, modifier);
				},
				resize: function() {
					//_log.debug('resize', component.element, resizer);
					
					self._updateSize(component, resizer, modifier);
				}
			});
		},

		/**
		 * [_updateSize description]
		 * @param  {[type]} component [description]
		 * @param  {[type]} resizer   [description]
		 * @param  {[type]} modifier  [description]
		 * @return {[type]}           [description]
		 */
		_updateSize: function(component, resizer, modifier) {
			//_log.debug('_updazeSize');
			var container = component.container,
				element = component.element;

			var coord = element.getCoordinates(container);
			//_log.debug('coord',  coord[modifier.from]);
			//
			// the last container doesnt need resizedr
			if (component.options.last) {
				resizer.setStyle(modifier.from, coord[modifier.from] -3);
			} else { 
				resizer.setStyle(modifier.from, coord[modifier.from] + coord[modifier.size] -3);
			}

			this.fireEvent('size');
		},

		/**
		 * Init maximisation. dblclick trigger the toggle
		 * @param  {[type]} component [description]
		 * @return {[type]}           [description]
		 */
		_initMaximize: function(component) {
			//_log.debug('_initMaximize', component);
			var self = this;
			var element = component.element;
			var container = component.container;

			if (!container) return;

			component.addEvent('max', function() {
				var name = component.options.name;

				_log.debug('max', component);
				if (element.hasClass('container-max')) {
					element.removeClass('container-max');
					container.getChildren('.ui-container').each(function(c) {
						c.setStyle('display', c.retrieve('display'));
					});

					element.setStyle('width', element.retrieve('width'));
					element.setStyle('height', element.retrieve('height'));

					self.fireEvent('normalize', component);
				} else{
					element.addClass('container-max');
					element.store('width', element.getStyle('width'));
					element.store('height', element.getStyle('height'));
					element.setStyle('width', 'initial');
					element.setStyle('height', 'initial');
					container.getChildren('.ui-container').each(function(c) {
						if (!c.hasClass('container-'+name)) {
							c.store('display', c.getStyle('display'));
							c.hide();
						}
					});

					self.fireEvent('resize', component);
				}
			});
		},


		/**
		 * [_initResize description]
		 * @return {[type]} [description]
		 */
		_initResizers: function(components) {
			//_log.debug('_initResizers');
			var len = components.length;

			// add resize Border on the right or on the bottom
			// execpt for the last one 
			for (var i = 0; i < len; i++) {
				var component = components[i];

				if (component.options.noResizer) {
					//_log.debug('--', component.main);
					continue;
				}

				this._initResizer(component);
				
			}
		},

	});

	return exports;
});


/**
 * UI Menu Context Class
 * @class UI.Menu.Context
 * @extends {UI.Menu}
 * @type {Class}
 */
define('UI/Menu/Context', [
	"UI/Menu/Menu"
], function(
	Menu
) {

	var exports = new Class({	

		Extends: Menu,

		name: 'context',

		options:{
			name: 'context',
			scope: $(document.body),
			container: $(document.body),
			trigger: 'contextmenu',
			zIndex: 20,
			underlay: false
		},

		/*
		Constructor: initialize
			Construtor

		Arguments:
			options - (object) options

		See also:
			<UI.Menu::initialize>
			<UI.Element::initialize>
		*/

		/**
		 * [initialize description]
		 * @param  {[type]} options
		 * @return {[type]}
		 */
		initialize: function(options){
			this.parent(options);
			var opts = this.options;
			if (opts.underlay)
				this._initUnderlay();

			this.element.inject(opts.container);
			this._initContext();

			return this;
		},

		/*
		Function: _initElement
			private function

			
		Return:
			(void)

		See also:
			<UI.Component::_initElement>
		*/

		/**
		 * Call UI.Component _initElement, then create a menu wrapper
		 * @return {[type]}
		 */
		_initElement: function(){
			var self = this,
				opts = this.options;

			//_log.debug('UI.MEnu._initElement()', opts);

			this.element = new Element('div', {
				'class': 'ui-context',
				styles: {
					zIndex: opts.zIndex + 10
				}
			}).addEvents({
				mousediown: function(e){
					self.fireEvent('mousedown');
					e.stop();
				}
			});

			this.element.addClass('context-'+opts.name);

			if (opts.klss)
				this.element.addClass(opts.klss);

			if (opts.type)
				this.element.addClass('type-'+opts.type);

			this._initHead(opts.head);

			this.content = new Element('ul', {
				'class': 'menu-list'
			}).inject(this.element);

			this.addEvents({
				show: function() {
					self.content.getStyle('display', 'block');
				},
				hide: function() {
					self.content.getStyle('display', 'none');
				}
			});

			this.element.addEvent('click', function(e){
				e.stop();
			});

			this.element.hide();
		},


		/*
		Method: addContexts
			Attach context to elements (provided by contexts.target)

		Arguments:
			contexts - (array) an array containing contexts definition. See above in class' options for more details

		Return:
			this
		*/
		/**
		 * [_initContext description]
		 * @return {[type]}
		 */
		_initContext: function(){
			var self = this;
				opts = this.options;
				scope = opts.scope || opts.container;

			scope.getElements(opts.target).each(function(el) {
				//_log.debug(el);
				self.addTarget(el);
			});

			// self.element.addEvent('contextmenu', function(e){
			// 	e.stop();
			// });

			return this;
		},


		_initUnderlay: function() {
			var self = this,
				opts = this.options;


			var underlay = this.underlay = new Element('div', {
				'class': 'context-underlay',
				styles: {
					zIndex: opts.zIndex
				}
			}).addEvents({
				click: function(){
					underlay.setStyle('display', 'none');
					self.element.hide();
				}
			}).inject(opts.container);

			this.addEvents({
				show: function() {
					underlay.setStyle('display', 'block');
				}
			})
		},

		addList: function() {

		},

		addTarget: function(el) {
			var self = this;

			el.addEvent(self.options.trigger, function(e){
				e.stop();
				e.preventDefault();

				self.target = e.target;

				//_log.debug(e.target);

				//.hide(0);
				//self.buildMenu(context.menu);
				self.show(e);
			});
		},

		removeList: function() {

		},

		_initEvents: function() {
			this.parent();

			this.addEvents({
				show: function(){
					ui.menu.hideAll();
				}
			});
		},

		/*
		Method: removeContexts
			Remove context to elements (defined by target)

		Arguments:
			target - (string) target defining elements where context will be detached

		Return:
			this
		*/

		removeContexts: function(){
			//_log.debug('removeContext',this.options.scope);
			this.els.each(function(el) {
				el.removeEvents('contextmenu');
			});

			/*this.options.contexts.each(function(context){
				this.options.scope.getElements(context.target).each(function(el){
					//_log.debug(context.target,el);
					el.removeEvents('contextmenu');
				},this);
			},this);*/

			return this;
		},

		/*
		Method: setPosition
			private function

			Overwrite the setPosition method of UI.Menu to use mouse coordinates to set menu location

		Arguments:
			x - (integer) X mouse's coordinates
			y - (integer) Y mouse's coordinates

		Return:
			(void)

		See also:
			<UI.Menu::setPosition>

		*/

		setPosition: function(x,y){
			var opts = this.options,
				container = opts.container;

			if ((x === null) || (y === null)) {
				return;
			}

			var ctop = container.getPosition().y;

			var coor = this.element.getCoordinates();
			var top = y - ctop;
			var left = x + container.getScrollLeft();

			if ((x + coor.width) > container.getWidth()) { left =  left - coor.width; }
			if ((y + coor.height) > container.getHeight()) {
				//_log.debug('top', top);
				top = top - coor.height;
			}

			this.element.setStyles({
				'top' : top,
				'left' : left
			});
		},

		/*
			Method: show
				private function

				Hide 

			Arguments:
				e - (event) Event who provide cursor's position

			Return:
				this

			See also:
				<UI.Menu::show>
				<UI.Element::show>
		*/
	/**
	 * [hide description]
	 * @return {[type]}
	 */
		hide: function(){
			clearTimeout(this.timer);
			this.timer = (function() {
				this.close();
			}).delay(this.options.timerOnHide, this);
		},


		hideNow: function() {
			this.element.hide();
		},

		/*
			Method: show
				private function

				Overwrite the show method of UI.Menu to use mouse coordinates

			Arguments:
				e - (event) Event who provide cursor's position

			Return:
				this

			See also:
				<UI.Menu::show>
				<UI.Element::show>
		*/

		/**
		 * [show description]
		 * @param  {[type]} e
		 * @return {[type]}
		 */
		show: function(e){
			this.fireEvent('show', e.target);

			this.element.show();
			var coord = this.content.getCoordinates();
			//this.setSize(coord.width, coord.height);
			this.setPosition(e.client.x,e.client.y);

			return this;
		}
	});

	return exports;
});

/*
	Class: UI.Context
		Create a context menu

	Extends:
		<UI.Menu>

	Arguments:
		options

	Options:
		contexts - (array) An array containing contexts definition. A context definition is an object composed of following keys :
			a name key, who is the context name,
			a target key, who define on wich elements the context menu will be attached. It could be a CSS3 target as well.
			a menu key, who is a menu list as defined in <UI.Menu>.

	Discussion:
		We must still add methods to set dynamically new contexts, ...

	Example:
		(start code)
		var context = new UI.Context({
			contexts : [
				{
					name : 'workspace',
					target	: '.app-workspace',
					menu		: [
						{ text: 'Workspace menu'},
						{ text		: 'separator' },
						{
							text: 'Hello world...',
							action	: function(){ alert('Hello world!') }
						}
						{ text		: 'viewSource'},
						{ text		: 'separator' },
						{ text		: 'deleteCategory'}
					]
				},
				{
					name: 'pageinfo',
					target: '[id^=pageinfo]',
					menu: [
						{
							text: 'editCategory',
							action: function(){ this.test('dorpdown') }.bind(this)
						},
						{ text: 'editCategoryApparence'}
					]
				}
			]
		});
		(end)

	Implied global:
		UI,ui,
		$,
		Class,Event,	Window,
		document

*/

define('UI/Menu/ContextTool', [

], function(

) {

	var exports = UI.ContextTool = new Class({

		Extends: UI.Menu,

		name: 'context',

		options: {
			name: 'context',
			scope: $(document.body),
			container: $(document.body),
			trigger: 'contextmenu'
		},

		/*
		Constructor: initialize
			Construtor

		Arguments:
			options - (object) options

		See also:
			<UI.Menu::initialize>
			<UI.Element::initialize>
		*/

		initialize: function(options) {
			this.parent(options);

			_log.debug(this.options.container, this.element);

			this.element.inject(this.options.container);

			this._initContext();
		},

		/*
		Function: _initElement
			private function

			Call UI.Component _initElement, then create a menu wrapper

		Return:
			(void)

		See also:
			<UI.Component::_initElement>
		*/
		_initElement: function() {
			var self = this,
				opts = this.options;

			_log.debug('UI.MEnu._initElement()', opts);

			this.element = new Element('div', {
				'class': 'ui-context',
				zIndex: opts.zIndex,
				display: 'none'
			});

			this.element.addClass('context-' + opts.name);

			if (opts.klss)
				this.element.addClass(opts.klss);

			if (opts.type)
				this.element.addClass('type-' + opts.type);

			this._initHead(opts.head);

			this.content = new Element('ul', {
				'class': 'menu-list'
			}).inject(this.element);

			this.addEvents({
				show: function() {
					self.content.getStyle('display', 'block');
				},
				hide: function() {
					self.content.getStyle('display', 'none');
				}
			});

			this.element.addEvent('click', function(e) {
				e.stop();
			});

			this.element.hide();
		},
		/*
		Method: addContexts
			Attach context to elements (provided by contexts.target)

		Arguments:
			contexts - (array) an array containing contexts definition. See above in class' options for more details

		Return:
			this
		*/

		_initContext: function() {
			var self = this;
			opts = this.options;
			scope = opts.scope || $(document.body);

			_log.debug(scope, scope.getElements(opts.target));

			var delegation = self.options.trigger + ':relay(' + opts.target + ')';

			_log.debug(delegation);

			scope.addEvent(delegation, function(ev) {
				ev.stop();
				ev.preventDefault();
				ev.stopPropagation();

				self.target = ev.target;

				self.show(ev);
			});


			return this;
		},

		addList: function() {

		},

		removeList: function() {

		},

		_initEvents: function() {
			this.parent();

			this.addEvents({
				show: function() {
					ui.menu.hideAll();
				}
			});


		},

		/*
		Method: removeContexts
			Remove context to elements (defined by target)

		Arguments:
			target - (string) target defining elements where context will be detached

		Return:
			this
		*/

		removeContexts: function() {
			//_log.debug('removeContext',this.options.scope);
			this.els.each(function(el) {
				el.removeEvents('contextmenu');
			});

			/*this.options.contexts.each(function(context){
				this.options.scope.getElements(context.target).each(function(el){
					//_log.debug(context.target,el);
					el.removeEvents('contextmenu');
				},this);
			},this);*/

			return this;
		},

		/*
		Method: setPosition
			private function

			Overwrite the setPosition method of UI.Menu to use mouse coordinates to set menu location

		Arguments:
			x - (integer) X mouse's coordinates
			y - (integer) Y mouse's coordinates

		Return:
			(void)

		See also:
			<UI.Menu::setPosition>

		*/

		setPosition: function(x, y) {
			var self = this;
			opts = this.options;
			container = opts.container;



			if ((x === null) || (y === null)) {
				return;
			}

			var pos = container.getPosition();

			_log.debug(pos, x, y);
			var y = y - pos.y;

			var coor = this.element.getCoordinates(container);
			var top = y;
			var left = x + this.options.container.getScrollLeft();

			if ((x + coor.width) > this.options.container.getWidth()) {
				left = left - coor.width;
			}
			if ((y + coor.height) > this.options.container.getHeight()) {
				//_log.debug('top', top);
				top = top; // - coor.height;
			}

			this.element.setStyles({
				'top': top,
				'left': left
			});
		},

		/*
			Method: show
				private function

				Hide 

			Arguments:
				e - (event) Event who provide cursor's position

			Return:
				this

			See also:
				<UI.Menu::show>
				<UI.Element::show>
		*/
		hide: function() {
			clearTimeout(this.timer);
			this.timer = (function() {
				this.close();
			}).delay(this.options.timerOnHide, this);
		},


		hideNow: function() {
			this.element.hide();
		},

		/*
			Method: show
				private function

				Overwrite the show method of UI.Menu to use mouse coordinates

			Arguments:
				e - (event) Event who provide cursor's position

			Return:
				this

			See also:
				<UI.Menu::show>
				<UI.Element::show>
		*/

		show: function(e) {
			this.fireEvent('show', e.target);

			this.element.show();
			var coord = this.content.getCoordinates();
			//this.setSize(coord.width, coord.height);
			this.setPosition(e.client.x, e.client.y);

			return this;
		}

	});

	return exports;
});


/**
 * UI Menu Class
 * @class UI.Menu
 * @extends {UI.Component}
 * @type {Class}
 */
define('UI/Menu/Menu', [
	'UI/Window/controller',
	'UI/Container/Container',
	'UI/Control/Button'
], function(
	controller,
	Container,
	ButtonControl
) {

	var exports = new Class({

		Extends: Container,

		Implements: [Options, Events],

		name: 'menu',

		options: {
			base: 'component',
			name: 'menu',

			content: true,

			type: null, // drop
			menu: {
				tag: 'ul'
			},
			item: {
				component: 'button',
				options: {
					tag: 'li',
					klass: 'list-item'
				}
			},
			trigger: 'click',
			timerOnHide: 500,
			hideOnCall: true
		},

		initialize: function(options){
			//_log.debug('meni init');
			this.setOptions(options);

			this.timer = null;

			if (this.options.type == 'drop')
				this.state = 'close';
			else this.state = 'open';

			this.item = {};
			this.menus = [];

			this._initElement();
			this._initComponent();
			this._initEvents();

			//ui.menu.register(this);

			return this;
		},

		/**
		 * [_initController description]
		 * @return {[type]} [description]
		 */
		_initController: function() {
			if (!ui.menu) {
				this.controller = ui.menu = controller;
			}
		},

		/*
		Function: _initElement
			private function

			Call UI.Component _initElement, then create a menu wrapper

		Return:
			(void)

		See also:
			<UI.Component::_initElement>
		*/
		_initElement: function(){
			var self = this,
				opts = this.options;

			//_log.debug('UI.MEnu._initElement()', opts);

			this.element = new Element('div', {
				'class': 'ui-menu',
				'zIndex': opts.zIndex
			});

			this.element.addClass('menu-'+opts.name);

			if (opts.klss)
				this.element.addClass(opts.klss);

			if (opts.type)
				this.element.addClass('type-'+opts.type);

			this._initHead(opts.head);

			this.content = new Element('ul', {
				'class': 'menu-list'
			}).inject(this.element);

			this.addEvents({
				show: function() {
					self.content.getStyle('display', 'block');
				},
				hide: function() {
					self.content.getStyle('display', 'none');
				}
			});

			if (opts.open)
				this.display = this.content.getStyle('display', 'block');

			this.element.addEvent('click', function(e){
				e.stop();
			});
		},

		/*
		Function: _initHead
			private function

			Call UI.Component _initHead, then create a menu wrapper

		Return:
			(void)

		See also:
			<UI.Component::_initHead>
		*/
		_initHead: function() {
			var self = this,
				opts = this.options,
				trigger = opts.trigger;

			if (!opts.head) return;

			_log.debug('++++', this);

			var head = new Element('div', {
				'class': 'menu-head',
				html: opts.head.text
			}).inject(this);

			head.addEvent(trigger , function() {
				self.toggle();
			});

			this.addEvents({
				show: function() {
					this.head.addClass('open');
				},
				hide: function() {
					this.head.removeClass('open');
				},
				change: function(value) {
					//_log.debug('change',value);
					if (opts.showValue && self.head)
						self.head.set('html', value);
				}
			});

			if (opts.head.klss)
				head.addClass(opts.head.klss);

			this.head = head;
		},

		/*
		Function: _initComponent
			private function

			Process the node object and inject the initialized component in the content of the container.

		Return:
			(void)

		Note:
			Override UI.Component._initComponent

		See also:
			<UI.Component::_initHead>
		*/
		_initComponent: function() {
			var self = this,
				opts = this.options,
				node = opts.menu,
				container = this.content;

			//_log.debug(node);

			node.each(function(comp, i){
				if (!comp.text)
					comp.text = null; // comp.name;
					//comp.text = comp.name;

				var component = opts.item.component.capitalize();

				//_log.debug('---',comp);
				var itemopts = comp;
				//var itemopts = Object.merge(opts.item.options, comp);
				_log.debug('---',component);
				// instantiate de menu component

				var item = new ButtonControl(itemopts);

				self.item[comp.name] = item;

				if (comp.klss)
					item.element.addClass(comp.klss);

				if (comp.type)
					item.addClass('type-'+comp.type);

				if (comp.state)
					item.setState(comp.state);

				this.menus.push(comp);
				//this.item[comp.name]

				if (comp.selected)
					self.select(item);

				if (comp.call) {
					item.element.addEvents({
						click: function(e) {
							//_log.debug('click event menu', opts.hideOnCall, opts.type);
							//e.stop();
							self.fireEvent('change', this.get('data-name'));
							self.fireEvent('select', this);
							if (opts.type === 'drop' && opts.hideOnCall)
								self.hideNow();

							if (self.name === 'context')
								self.hideNow();
						}
					});
				} else if (comp.emit) {
					item.element.addEvents({
						click: function(e) {
							e.stop();
							self.fireEvent(comp.emit);
						}
					});
				} else {
					item.element.addEvents({
						click: function(e) {
							e.stop();
							if (self.state === 'disabled') return;
							//_log.debug('---',opts.type);
							self.value = this.get('data-name');
							self.fireEvent('change', this.get('data-name'));
							self.fireEvent('selectItem', comp);

							if (opts.type === 'push') {
								_log.debug('select', this);
								self.fireEvent('select', this);
							}
							else if (opts.type === 'drop')
								self.hideNow();
						}
					});
				}

				item.inject(this.content);

			},this);
		},

		_initEvents: function() {

			//_log.debug('_initEvents',this.options.name);
			var self = this,
				opts = this.options;

			if (opts.type === 'drop') {
				if (opts.timerOnHide) {
					this.element.addEvents({
						mouseleave: function() {
							self.hide();
						},
						mouseenter: function() {
							clearTimeout(self.timer);
						}
					});
				}
			}


			if (opts.type === 'push') {
				//_log.debug('push',this);
				this.addEvents({
					'select': function(menu) {
						_log.debug('mmm', menu.get('data-name'));
						self.select(menu.get('data-name'));
					}
				});
			}
		},

		select: function(menu) {
			//_log.debug('select', menu);
			if (menu === false || menu === null) {
				if (this.selected) {
					//_log.debug('selected');
					this.selected.removeClass('state-active');
					this.selected.removeClass('state-checked');
				}
				return;
			}

			if (typeOf(menu) === 'string') {
				menu = this.element.getElement('[data-name="'+ menu +'"]');
			}

			if (!menu) return;

			if (this.selected) 
				this.selected.removeClass('state-active');

			menu.addClass('state-active');
			this.selected = menu;
		},

		unselect: function(menu) {

			var self = this;
			//_log.debug(typeOf(menu));

			if (typeOf(menu) === 'string') {
				menu = this.element.getElement('[name="'+ menu +'"]');
			}

			if (!menu) return;

			if (self.selected)
				self.selected = null;

			menu.removeClass('state-active');
			menu.removeClass('state-checked');
		},

		deselect: function() {
			if (!this.selected) return;

			this.selected.removeClass('state-active');
			this.selected.removeClass('state-checked');
		},

		getSelected : function() {

		},

		toggle: function() {
			if (this.state === 'open') {
				this.setState('close');
			} else {
				this.setState('open');
			}

			this.fireEvent('toggle');
		},

		toggleFold: function() {
			if (this.state === 'folded') {
				this.setState('unfolded');
			} else {
				this.setState('floded');
			}

			this.fireEvent('toggle');
		},


		hide: function(){
			clearTimeout(this.timer);
			this.timer = (function() {
				this.close();
			}).delay(this.options.timerOnHide,this);
		},

		hideNow: function(){
			this.close();
		},

		shut: function() {
			this.setState('close');

			this.fireEvent('closed');
		},

		close: function() {
			this.setState('close');

			this.fireEvent('closed');
		},

		open: function() {
			this.setState('open');

			this.fireEvent('opened');
		}
	});

	return exports;
});

/*
	Class: UI.Menu
		Creates a new menu, manages submenus and positionning as well

	Extends:
		<UI.Component>

	Arguments:
		options

	Options:
		- node
		- _parent - component
		- context -


		- name - (string) name of the compnent, it is automatically add to the css class
		- base - (string) base component, if define the name of it will be add the the css class

		- tag - (string) Tag name for menu elements

		- position - (string) Specify where the new menu must be positionned.
			It could be normal (element will be positionned on parent's side),
			over (element will be positionned over the parent element, used for <UI.Select>),
			bottom (element will be positionned on bottom of parent element, used for <UI.Toolbar>)

		- scrollToSelected - (boolean) Determine if a menu (specifically a <UI.Select>) should remember last item selected
		- scrollMargin - (integer) Determine remaining margin on top and bottom when a menu is too large to feet in window
		- menu - (array) Array containing menu definition

	Example:
		(start code)
		var submenu = new UI.Menu({
			container : this.container.element,
			underlay : this.options.underlay,
			zIndex : 1
		});
		(end)

	Implied global:
		- MooLego - UI,ui,
		- MooTools - Class, Element, Event, Fx, Window
		- Javascript - document

	Discussion
		Should use listView

*/


define('UI/Menu/Tool', [

], function(

) {

	var exports = UI.Tool = new Class({

		Extends: UI.Container,

		name: 'menu',

		options: {
			base: 'component',
			name: 'menu',

			content: true,

			type: null, // drop
			menu: {
				tag: 'ul'
			},
			item: {
				component: 'button',
				options: {
					tag: 'li',
					klass: 'list-item'
				}
			},
			trigger: 'click',
			timerOnHide: 500,
			hideOnCall: true
		},

		initialize: function(options) {
			this.setOptions(options);

			this.timer = null;

			if (this.options.type == 'drop')
				this.state = 'close';
			else this.state = 'open';

			this.item = {};
			this.menus = [];

			this._initElement();
			this._initComponent();
			this._initEvents();

			ui.menu.register(this);

			return this;
		},

		/*
		Function: _initElement
			private function

			Call UI.Component _initElement, then create a menu wrapper

		Return:
			(void)

		See also:
			<UI.Component::_initElement>
		*/
		_initElement: function() {
			var self = this,
				opts = this.options;

			//_log.debug('UI.MEnu._initElement()', opts);

			this.element = new Element('div', {
				'class': 'ui-menu',
				'zIndex': opts.zIndex
			});

			this.element.addClass('menu-' + opts.name);

			if (opts.klss)
				this.element.addClass(opts.klss);

			if (opts.type)
				this.element.addClass('type-' + opts.type);

			this._initHead(opts.head);

			this.content = new Element('ul', {
				'class': 'menu-list'
			}).inject(this.element);

			this.addEvents({
				show: function() {
					self.content.getStyle('display', 'block');
				},
				hide: function() {
					self.content.getStyle('display', 'none');
				}
			});

			if (opts.open)
				this.display = this.content.getStyle('display', 'block');

			this.element.addEvent('click', function(e) {
				e.stop();
			});
		},

		/*
		Function: _initHead
			private function

			Call UI.Component _initHead, then create a menu wrapper

		Return:
			(void)

		See also:
			<UI.Component::_initHead>
		*/
		_initHead: function() {
			var self = this,
				opts = this.options;
			trigger = opts.trigger;

			if (!opts.head) return;

			head = new Element('div', {
				'class': 'menu-head',
				html: opts.head.text
			}).inject(this);

			head.addEvent(trigger, function() {
				self.toggle();
			});

			this.addEvents({
				show: function() {
					this.head.addClass('open');
				},
				hide: function() {
					this.head.removeClass('open');
				},
				change: function(value) {
					//_log.debug('change',value);
					if (opts.showValue && self.head)
						self.head.set('html', value);
				}
			});

			if (opts.head.klss)
				head.addClass(opts.head.klss);

			this.head = head;
		},

		/*
		Function: _initComponent
			private function

			Process the node object and inject the initialized component in the content of the container.

		Return:
			(void)

		Note:
			Override UI.Component._initComponent

		See also:
			<UI.Component::_initHead>
		*/
		_initComponent: function() {
			var self = this,
				opts = this.options,
				node = opts.menu,
				container = this.content;

			//_log.debug(node);

			node.each(function(comp, i) {
				if (!comp.text)
					comp.text = null; // comp.name;
				//comp.text = comp.name;

				var component = opts.item.component.capitalize();

				var itemopts = Object.merge(opts.item.options, comp);
				// _log.debug('---',itemopts);
				// instantiate de menu component

				var item = new UI[component](itemopts);

				self.item[comp.name] = item;

				if (comp.klss)
					item.element.addClass(comp.klss);

				if (comp.type)
					item.addClass('type-' + comp.type);

				if (comp.state)
					item.setState(comp.state);

				this.menus.push(comp);
				//this.item[comp.name]

				if (comp.selected)
					self.select(item);

				if (comp.call) {
					item.element.addEvents({
						click: function(e) {
							//_log.debug('click event menu', opts.hideOnCall, opts.type);
							//e.stop();

							self.fireEvent('change', this.get('name'));
							self.fireEvent('select', this);
							if (opts.type == 'drop' && opts.hideOnCall)
								self.hideNow();

							if (self.name == 'context')
								self.hideNow();
						}
					});
				} else if (comp.emit) {
					item.element.addEvents({
						click: function(e) {
							e.stop();
							self.fireEvent(comp.emit);
						}
					});
				} else {
					item.element.addEvents({
						click: function(e) {
							e.stop();
							if (self.state == 'disabled') return;
							//_log.debug('---',opts.type);
							self.value = this.get('name');
							self.fireEvent('change', this.get('name'));
							self.fireEvent('selectItem', comp);



							if (opts.type == 'push')
								self.fireEvent('select', this);
							else if (opts.type == 'drop')
								self.hideNow();
						}
					});
				}

				item.inject(this.content);

			}, this);
		},

		_initEvents: function() {

			//_log.debug('_initEvents',this.options.name);
			var self = this,
				opts = this.options;

			if (opts.type == 'drop') {
				if (opts.timerOnHide) {
					this.element.addEvents({
						mouseleave: function() {
							self.hide();
						},
						mouseenter: function() {
							clearTimeout(self.timer);
						}
					});
				}
			}


			if (opts.type == 'push') {
				//_log.debug('push',this);
				this.addEvents({
					'select': function(menu) {
						//_log.debug('mmm', menu.get('name'));
						self.select(menu.get('name'));
					}
				});
			}
		},

		select: function(menu) {

			if (menu === false || menu === null) {
				if (this.selected) {
					//_log.debug('selected');
					this.selected.removeClass('state-active');
					this.selected.removeClass('state-checked');
				}
				return;
			}

			if (typeOf(menu) == 'string') {
				menu = this.element.getElement('[name="' + menu + '"]');
			}

			if (!menu) return;

			if (this.selected)
				this.selected.removeClass('state-active');

			menu.addClass('state-active');
			this.selected = menu;
		},

		unselect: function(menu) {

			var self = this;
			//_log.debug(typeOf(menu));

			if (typeOf(menu) == 'string') {
				menu = this.element.getElement('[name="' + menu + '"]');
			}

			if (!menu) return;

			if (self.selected)
				self.selected = null;

			menu.removeClass('state-active');
			menu.removeClass('state-checked');
		},

		deselect: function() {
			if (!this.selected) return;

			this.selected.removeClass('state-active');
			this.selected.removeClass('state-checked');
		},

		getSelected: function() {

		},

		toggle: function() {
			if (this.state == 'open') {
				this.setState('close');
			} else {
				this.setState('open');
			}

			this.fireEvent('toggle');
		},

		toggleFold: function() {
			if (this.state == 'folded') {
				this.setState('unfolded');
			} else {
				this.setState('floded');
			}

			this.fireEvent('toggle');
		},


		hide: function() {
			clearTimeout(this.timer);
			this.timer = (function() {
				this.close();
			}).delay(this.options.timerOnHide, this);
		},

		hideNow: function() {
			this.close();
		},

		shut: function() {
			this.setState('close');

			this.fireEvent('closed');
		},

		close: function() {
			this.setState('close');

			this.fireEvent('closed');
		},

		open: function() {
			this.setState('open');

			this.fireEvent('opened');
		}

	});

	return exports;
});

/*
	Object: ui.controller.menu
		Window controller. It handles altitude, list, position and state

	Arguments:
		options - (object)

	Options:
		zBase - (integer)
		zStep - (integer)
		cascade - (object)
		stack - (object)

	Requires:
		<UI.Window>


	Implied global:
		ui,
		window

	Discussion:
		to be continued....

*/
//var ui = ui || {};

define('UI/Menu/controller', [

], function(

) {
	var exports = {
		options: {
			version: '0.1',
			zBase: 300,
			zStep: 2
		},

		list: [],
		zIndex: 300,

		/*
		Function: register
			Add passing menu to list of menus

		Arguments:
			win - (object) the window class instance to register

		Returns:
			(void)
		*/

		register: function(menu) {
			this.list.push(menu);
			if (menu.options.zIndex == 'auto') {
				menu.element.setStyle('zIndex', this.zIndex);
			} else {
				menu.element.setStyle('zIndex', menu.options.zIndex);
			}
			this.zIndex += this.options.zStep;
		},

		/*
		Function: close
			Destroy the provided window and focus to next one

		Arguments:
			win - (object) the window class instance to close and destroy

		Returns:
			(void)
		*/

		close: function(menu) {
			//_log.debug('close...');
			menu = menu || this.active;
			menu.hide();
			menu.fireEvent('onClose');
			for (var i = this.list.length - 1; i >= 0; i--) {
				if (this.list[i] == menu) {
					menu.destroy();
					delete this.list[i];
					this.list = this.list.clean();
				}
			}
			this.focus();
		},

		/*
		Function: focus
			Increment max z-index and focus provided window

		Arguments:
			menu - (object) the menu class instance to focus

		Returns:
			(void)
		*/
		focus: function(win) {},

		closeall: function() {
			this.list.each(function(menu) {
				//menu.hideNow();
			}, this);
		},

		hideAll: function() {
			this.list.each(function(menu) {
				menu.hideNow();
			}, this);
		}
	};

	return exports;
});


/**
 * UI Selector Border Class
 * @class UI.Selector.Border
 * @extends {UI.Selector}
 * @type {Class}
 */
define('UI/Selector/Border', [

], function(

) {

	var exports = new Class({

		Implements: [Events, Options],

		options: {
			container: document.body,
			type: 'solid',
			clss: 'selector-border',
			zIndex: 2,
			size: 1,
			color: '#000',
			opacity: '1',
			location: 'outside'  // inside or outside
		},

		initialize: function(container, options){
			this.setOptions(options);

			//_log.debug('UI.Selector.Border:',container, options);

			this.container = container;
			this.lines = [];

			this._initElement();
		},

		_initElement: function(){
			var lines = [[], [], [], []];

			lines.each(function(line){
				this.buildBorder();
			}, this);
		},

		buildBorder: function(){
			var self = this;

			var line = new Element("div", {
				'class': this.options.clss
			}).addClass('type-' + self.options.type).setStyles({
				'zIndex': this.options.zIndex,
				'backgroundColor': this.options.color,
				'opacity': this.options.opacity
			}).addEvent('click', function(){
				self.fireEvent('click');
			}).inject(this.container, 'top');

			line.set('morph', {
				duration: 250,
				transition: 'expo:out',
				link: 'cancel'
			});


			this.lines.push(line);
		},

		reach: function(el){
			if (!el) {
				if (this.el) {
					el = this.el;
				} else return;
			} else {
				this.el = el;
			}

			var infos = [];
			var o = [];
			//_log.debug('boder reach', el);
			var bs = this.options.size;
			var c = el.getCoordinates();

			if (this.options.positionning == 'relative') {
				var pos = el.getPosition(this.container);
				c.left = pos.x;
				c.right = pos.x + c.width;
				c.top = pos.y;
				c.bottom = pos.y + c.height;
			}

			//_log.debug('coord',c,pos);

			if (this.options.location == 'inside') {
				infos = [
					[c.top, c.left, c.right - c.left - bs, bs],
					[c.top, c.right - bs, bs, c.bottom - c.top],
					[c.bottom - bs, c.left + bs, c.right - c.left - (2 * bs), bs],
					[c.top + bs, c.left, bs, c.bottom - c.top -bs]
				];
			} else {
				infos = [
					[c.top - bs, c.left - bs, c.right - c.left + (2 * bs), bs],
					[c.top, c.right, bs, c.bottom - c.top],
					[c.bottom, c.left - bs, c.right - c.left + (2 * bs), bs],
					[c.top, c.left - bs, bs, c.bottom - c.top]
				];
			}

			this.lines.each(function(line, i){
				this._setLinePosition(line, infos[i]);
			}, this);

			this.fireEvent('selected');

			return this;
		},

		addClass: function(c) {
			this.lines.each(function(line, i){
				line.addClass(c);
			}, this);
		},

		removeClass: function(c) {
			this.lines.each(function(line, i){
				line.addClass(c);
			}, this);
		},

		_setLinePosition: function(line, info){

			if (this.options.usefx)
				line.morph({
					'margin-top': info[0],
					'margin-left': info[1],
					'width': info[2],
					'height': info[3]
				});
			else
				line.setStyles({
					'margin-top': info[0],
					'margin-left': info[1],
					'width': info[2],
					'height': info[3]
				});
		},

		set: function(name,value){
			if (selector)
				self[selector][name](value);
			else
			this.selectors.each(function(selector) {
				self[selector][name](value);
			});

			return this;
		},

		setColor: function(color) {
			this._setStyle('backgroundColor',color);
		},

		setOpacity: function(opacity) {
			this._setStyle('opacity',opacity);
		},

		_setStyle: function(name,value){
			this.lines.each(function(line){
				line.setStyle(name,value);
			});

			return this;
		},

		setStyles: function(styles){
			this.lines.each(function(line){
				line.setStyles(styles);
			});

			return this;
		},

		hide: function(){
			this._setStyle('display','none');

			return this;
		},

		show: function(){
			this._setStyle('display','block');

			return this;
		},

		highlight: function(color){
			this.lines.each(function(line){
				line.highlight(color);
			});

			return this;
		},

		remove: function(){
			this.lines.each(function(line){
				line.destroy();
			});

			return this;
		}
	});

	return exports;
});


/**
 * UI Selector Maks Class
 * @class UI.Selector.Mask
 * @extends {UI.Selector}
 * @type {Class}
 */
define('UI/Selector/Mask', [

], function(

) {

	var exports = new Class({
		Implements: [Events, Options],

		options: {
			container: document.body,
			clss: 'selector-mask',
			type: 'solid',
			zIndex: 1,
			offset: 0,
			color: 'rgba(255,255,255,.8)',
			opacity: '1',
			location: 'outside' // inside or outside
		},

		initialize: function(container, options){
			this.setOptions(options);

			this.container = container;
			this.masks = [];

			this._initElement();
		},

		_initElement: function(){
			var masks = [[],[],[],[]];

			masks.each(function(mask){
				this.buildMask();
			}, this);
		},

		buildMask: function(){
			var self = this;

			var mask = new Element("div", {
				'class': this.options.clss
			}).addClass('type-' + self.options.type).setStyles({
				'zIndex': this.options.zIndex,
				'backgroundColor': this.options.color,
				'opacity': this.options.opacity
			}).addEvent('click', function(){
				self.fireEvent('click');
			}).inject(this.container, 'top');

			mask.set('morph', {
				duration: 250,
				transition: 'expo:out',
				link: 'cancel'
			});

			mask.set('tween', {
				duration: 250,
				transition: 'expo:out',
				link: 'cancel'
			});

			this.masks.push(mask);
		},

		reach: function(el){
			if (!el) return;
			this.el = el;
			var infos = [];
			var o = [];

			//_log.debug('maskreac',this.options.scope,el);

			var content = this.options.scope.getScrollSize();

			var offset = this.options.offset;
			var c = el.getCoordinates();

			if (this.options.positionning == 'relative') {
				var pos = el.getPosition(this.container);
				c.left = pos.x;
				c.right = pos.x + c.width;
				c.top = pos.y;
				c.bottom = pos.y + c.height;
			}

			infos = [
				[0, 0, c.left - offset, content.y],
				[0, c.left - offset, c.width + ( offset*2 ), c.top - offset],
				[0, c.right + offset, content.x - c.right, content.y],
				[c.top + c.height + offset, c.left - offset, c.width + ( offset * 2 ) , content.y - c.bottom ]
			];

			this.masks.each(function(mask, i){
				this._setMaskPosition(mask, infos[i]);
			}, this);

			this.fireEvent('selected');

			return this;
		},

		addClass: function(c) {
			this.masks.each(function(mask, i){
				mask.addClass(c);
			}, this);
		},

		removeClass: function(c) {
			this.masks.each(function(mask, i){
				mask.addClass(c);
			}, this);
		},

		_setMaskPosition: function(mask, info){

			/*if (this.options.usefx)
				mask.morph({
					'top': info[0],
					'left': info[1],
					'width': info[2],
					'height': info[3]
				});
			else*/
				mask.setStyles({
					'top': info[0],
					'left': info[1],
					'width': info[2],
					'height': info[3]
				});

		},

		set: function(name,value){
			if (selector)
				self[selector][name](value);
			else
			this.selectors.each(function(selector) {
				self[selector][name](value);
			});

			return this;
		},


		setColor: function(color) {
			this._setStyle('backgroundColor', color);
		},

		_setStyle: function(name,value){
			var self = this;
			this.masks.each(function(mask){
				if (self.options.usefx)
					mask.tween(name,value);
				else
					mask.setStyle(name, value);
			});

			return this;
		},

		setStyles: function(styles){
			var self = this;

			this.masks.each(function(mask){
				if (self.options.usefx)
					mask.morph(styles);
				else
					mask.setStyles(styles);
			});

			return this;
		},

		hide: function(){
			var self = this;

			this.masks.each(function(mask){
				mask.setStyle('display','none');
			});

			return this;

		},

		show: function(){
			var self = this;

			this.masks.each(function(mask){
				mask.setStyle('display','block');
			});

			return this;

		},

		highlight: function(color){
			this.masks.each(function(mask){
				mask.highlight(color);
			});

			return this;
		},

		remove: function(){
			this.masks.each(function(mask){
				mask.destroy();
			});

			return this;
		}
	});

	return exports;
});


/**
 * UI Selector Menu Class
 * @class UI.Selector.Menu
 * @extends {UI.Selector}
 * @type {Class}
 */
define('UI/Selector/Menu', [

], function(

) {

	var exports = new Class({

		Implements: [Events, Options],

		options: {
			container: document.body,
			//type: 'small',
			zIndex: 200,
			//clss: 'selector-menu',
			position: 'top left',
			location: 'outside',
			offset: [1,1],
			positionning: 'absolute'
		},

		initialize: function(container,options){
			this.setOptions(options);

			this.container = container;

			var offset = this.options.offset;

			_log.debug('selector-view', this.options);

			if (typeOf(offset) == 'number') {
				this.offset = [offset,offset];
			} else {
				this.offset = offset;
			}

			this.menus = [];

			this._initElement(container);
		},

		_initElement: function(container){
			//_log.debug('_initElement menu', this.options);

			this.element = new Element('ul', {
				'class': 'ui-menu type-selector',
				'zIndex': this.options.zIndex
			}).inject(container);

			this.fx = new Fx.Morph(this.element, {
				link: 'cancel',
				duration: 250,
				transition: 'expo:out',
			});


			this.element.addEvents({
				mouseenter: function(e) {
					e.stop();
				},
				mouseover: function(e) {
					e.stop();
				}

			});

			if (this.options.klss)
				this.element.addClass(this.options.klss);

			this.element.addEvent('click', function(e){
				e.stop();
			});


			this.buildMenu(this.options.list);
		},

		buildMenu: function(list){

			list.each(function(menu){

				item = new Element('li', {
					html: menu.text
				}).set(menu.options);

				if (menu.klss)
					item.addClass(menu.klss);

				if (menu.type)
					item.addClass('type-'+menu.type);

				this.menus.push(menu);

				if (menu.action) {
					item.addEvents({
						click: function(e) {
							e.stop();
							//_log.debug(menu.action);
							menu.action();

							//(function() { menu.action() });
						}
					});
				}

				item.inject(this.element);

			},this);
		},

		reach: function(el) {
			if (!el)
				if (this.el) el = this.el;
				else return;
			else this.el = el;

			//_log.debug(this.options.content, this.options.content.scrollWidth);

			var opts = this.options;
			var size = this.element.getCoordinates();
			var c = el.getCoordinates();
			

			if (opts.positionning == 'relative') {
				var pos = el.getPosition(this.options.content);
				c.left = pos.x;
				c.right = pos.x + c.width;
				c.top = pos.y;
				c.bottom = pos.y + c.height;
			}

			//_log.debug('reach',pos.x, pos.y);
			var top = 'auto',
				left = 'auto',
				bottom = 'auto',
				right = 'auto';

			if (opts.position.indexOf('left') > -1) {
				left = c.left + this.offset[0];
			}

			if (opts.position.indexOf('right') > -1) {
				//_log.debug('sdfasdfasdfasdfasdfa');
				left = c.left + c.width - size.width + this.offset[0];
			}

			if (opts.position.indexOf('top') > -1) {
				top = c.top;
				//top = pos.y;
			}

			if (opts.position.indexOf('bottom') > -1) {
				top = c.top + c.height;
			}

			if (opts.location == 'outside') {
				top = top - size.height - this.offset[1];
			}

			if (opts.location == 'inside') {
				top = top + this.offset[1];
			}

			if (this.options.usefx)
				this.fx.start({
					top: top,
					bottom: bottom,
					left: left,
					right: right
				});
			else
				this.element.setStyles({
					position: 'absolute',
					top: top,
					bottom: bottom,
					left: left,
					right: right
				});
		},

		getParent: function() {
			return this.parent;
		},

		hide: function(){
			this.element.hide();
		},

		show: function(){
			this.element.show();
		}
	});

	return exports;
});


/**
 * UI Selector Overlay Class
 * @class UI.Selector.Overlay
 * @extends {UI.Selector}
 * @type {Class}
 */
define('UI/Selector/Overlay', [

], function(

) {

	var exports = new Class({
		Implements: [Events, Options],

		options: {
			container: document.body,
			clss: 'selector-overlay',
			offset: '0',
			styles: {
				position: 'absolute',
				zIndex:'1000'
				//background: 'rgba(0,0,0,.2)'
			}
		},

		initialize: function(options){
			this.setOptions(options);
			this._initElement();
		},

		_initElement: function(){
			var self = this;
			var position = 'absolute';
			//if (element.isFixed()) position = 'fixed';
			var timer;
			this.element = new Element("div", {
				'class': this.options.clss
			}).setStyles(this.options.styles)
			.setStyle('position',position)
			.addEvents({
				'mouseover': function(e){

				},
				'click': function(e){
					e.stop();
					clearTimeout(timer);
						timer = (function(){
						self.fireEvent('click', self.el);
						self.hide();
					}).delay(200, this);
				},
				dblclick: function() {
					clearTimeout(timer);
					self.fireEvent('dblclick');
				}
			}).inject(this.options.container, 'top');
		},

		reach: function(el){
			this.el = el;
			var offset = this.options.offset;
			var c = el.getCoordinates();

			this.element.setStyles({
				'margin-top': c.top - offset,
				'margin-left': c.left - offset,
				'width': c.right - c.left +  (2 * offset),
				'height': c.bottom - c.top +  (2 * offset)
			});
		},

		remove: function(){
			this.element.destroy();
		},

		hide: function(){
			this.element.hide();
		},

		show: function(){
			this.element.show();
		},

		highlight: function(color){
			this.element.highlight(color);
		}
	});

	return exports;
});



/**
 * UI Selector Resizer Class
 * @class UI.Selector.Resizer
 * @extends {UI.Selector}
 * @type {Class}
 */
define('UI/Selector/Resizer', [

], function(

) {

	var exports = new Class({
		Implements: [Events, Options],

		options: {
			container: document.body,
			type: 'border',
			clss: 'selector-resizer',
			handler: {
				size:3
			},
			positions: ['n','e','s','w'], //['n','e','s','w'], // or positions: ['n','ne','e','se','s','sw','w','nw'],
			styles: {
				display:'none',
				zIndex: 1200,
				border: '1px solid #71aad3',
				backgroundColor: '#fff',
				cursor:'resize',
				boxSizing: 'content-box'
			}
		},

		initialize: function(container,options){
			this.setOptions(options);

			this.container = container;

			//_log.debug('resizer init:',container,options);

			this.handlers = [];
			this.container = container;

			this._initElement();
		},

		_initElement: function(){
			var position = 'absolute';
			//if (el.isFixed()) position = 'fixed';

			var i = 0;
			this.options.positions.each(function(position){
				this.buildHandler(position);
				i++;
			}, this);
		},

		buildHandler: function(position){
			var self = this;
			var pos = 'absolute';

			var handler = new Element("div")
			.setStyles(this.options.styles)
			.setStyle('position',pos)
			.store('position',position)
			.set('class',position)
			.inject(this.container, 'top')
			.addEvents({
				click: function(e){
					new Event(e).stop();
					//_log.debug(this.get('class')+':click');
				},
				mouseenter: function(e){
					self.fireEvent('mouseenter',this);
				},
				mouseleave: function(e){
					self.fireEvent('moussleave',this);
				}
			});

			this.handlers.push(handler);
		},

		reach: function(el){
			if (!el) return;
			this.el = el;

			var c = el.getCoordinates();
			var pos = el.getPosition(this.container);
			c.top = pos.y;
			c.bottom = pos.y + c.height;




			var offset = this.options.handler.size;


			var pos = el.getPosition(this.container);

			c.left = pos.x;
			c.right = pos.x + c.width;
			c.top = pos.y;
			c.bottom = pos.y + c.height;

			var infos = {
				nw: [c.top - offset, c.left - offset],
				n: [c.top - offset, c.right - ((c.right-c.left)/2) - offset],
				ne:[c.top - offset, c.right - offset + 1],
				e: [c.bottom - ((c.bottom-c.top)/2) - offset, c.right - offset + 1],
				se:[c.bottom - offset + 1, c.right - offset + 1],
				s: [c.bottom - offset + 1, c.left +((c.right-c.left)/2)  - offset],
				sw: [c.bottom - offset + 1, c.left - offset],
				w: [c.top + ((c.bottom-c.top)/2) - offset, c.left - offset]
			};

			this.handlers.each(function(handler){
				var coor = infos[handler.retrieve('position')];
				this.setHandlerPosition(handler, coor);
			}, this);
		},

		setHandlerPosition: function(handler,coor) {
			handler.setStyles({
				'margin-top': coor[0],
				'margin-left': coor[1],
				'width': this.options.handler.size,
				'height': this.options.handler.size
			});
		},

		remove: function(){
			this.handlers.each(function(handler){
				handler.destroy();
			}, this);
		},

		hide: function(){
			this.handlers.each(function(handler){
				handler.setStyle('display', 'none');
			}, this);
		},

		show: function(){
			this.handlers.each(function(handler){
				handler.setStyle('display', 'block');
			}, this);
		}
	});

	return exports;
});


/**
 * UI Selector Class
 * @class UI.Selector
 * @extends {UI.Component}
 * @type {Class}
 */
define('UI/Selector/Selector', [
	'UI/Selector/Border',
	'UI/Selector/Menu',
	'UI/Selector/Resizer',
	'UI/Selector/Overlay',
	'UI/Selector/Mask'
], function(
	Border,
	Menu,
	Resizer,
	Overlay,
	Mask
) {

	var exports = new Class({

		Implements: [Events, Options],

		options: {
			container: document.body,
			scope: document.body,
			target: document.body,
			trigger: 'click',

			clss: 'ui-selector',
			prefix: 'pages',
			zIndex: 1100,
			wrapper: {
				tagName: 'div',
				clss: 'ui-selector'
			},

			components: [],
			toolbar: false,
			menu: false,
			border: {
				size: 1,
				display:'none'
			},
			resizer: true,
			overlay: false,
			cookie: {
				duration: 365,
				path: '/'
			},
			usefx: false,
			enable : true,
			timerOnHide: 0,
			onCatch: {},
			onDisable: {},
			onEnable: {},
			positionning: 'relative'
		},

		initialize: function(options){
			//_log.debug('UI.Selector.initilize()');
			this.setOptions(options);

			this.selectors = [];

			this.container = this.options.container;

			var scope = this.options.scope || this.container;
			var target = this.options.target;

			this.name = this.options.prefix+'-'+this.options.name;
			this.size = {};

			this.timer = null;

			//_log.debug('UI.Selector.init(scope,target)',this.name);

			this._initElement(this.options.components);
			this._initEvents(scope,target);

			//_log.debug('shoud hide this');

			this.hideNow();
		},

		update: function(){

			var scope = this.options.scope;
			var target = this.options.target;

			this._initEvents(scope,target);
		},

		_initEvents: function(scope,target) {
			//_log.debug('UI.Selector._initEvents(scope,target)',typeOf(scope),target);
			var delay = 20;
			var self = this;

			//_log.debug('UI.Selector._initEvents(scope,target)',typeOf(scope),target);

			var delegation = self.options.trigger+':relay('+target+')';

			scope.addEvent(delegation, function(ev, el) {
				self.reach(el)
			});

			/*var list = scope.querySelectorAll( target );

			//_log.debug(list);

			new Array()

			Array.each(list, function(el) {
				//_log.debug('UI.Selector.target',el,self.options.trigger);
				el.store('selector', self);
				el.addEvent(self.options.trigger, function(){
					self.reach(el);
				});

				el.addEvents({
					mouseenter: function(e) {
						//e.stop();
						clearTimeout(self.timer);
					},
					mouseover: function(e) {
						//self.reach(el);
						//e.stop();
						clearTimeout(self.timer);
					}
				});
			});*/

			/*pages.addEvent('resize', function() {
				self.reach(self.el);
			});*/
		},

		attachElement: function(el) {
			//_log.debug('UI.Selector._initEvents(scope,target)',scope,target);
			var delay = 20;
			var self = this;


			//_log.debug('UI.Selector._setEventsElement',el,self.options.trigger);

			el.addEvent(self.options.trigger, function(){
				self.reach(el);
			});

			el.addEvents({
				mouseenter: function(e) {
					//e.stop();
					clearTimeout(self.timer);
				},
				mouseover: function(e) {
					//self.reach(el);
					//e.stop();
					clearTimeout(self.timer);
				}
			});

			/*pages.addEvent('resize', function() {
				self.reach(self.el);
			});*/
		},


		_initElement: function(components){
			var self = this;

			this.wrapper = new Element('div', {
				'class': this.options.wrapper.clss,
				zIndex: this.options.zIndex
			}).set('data-selector', this.options.name)
			.inject(this.options.container, 'top');

			components.each(function(name){
				//_log.debug('Selector _initElement',name);
				self.options[name].content = self.options.container;
				var build = 'build'+name.capitalize();
				if (!self.options[name].usefx)
					self.options[name].usefx = self.options.usefx;

				self.selectors.push(self[build](self.options[name]));
			});

			if (this.isEnable()) this.enable();
			else this.disable();

			return this.wrapper;
		},

		buildComponent: function() {


		},

		buildBorder: function(options){
			var self = this;
			//_log.debug();

			options.positionning = this.options.positionning;

			this.border = new Border(this.wrapper, options);

			this.addEvents({
				show: function(){ self.border.show(); },
				hide: function(){ self.border.hide(); },
				reach: function(el){ self.border.reach(el); },
				repos: function(el){ self.border.reach(el); },
				highlight: function(color){	self.border.highlight(color); }
			});
		},

		buildMask: function(opts){
			var self = this;

			opts.positionning = this.options.positionning;

			opts.scope = this.options.scope;

			this.mask = new Mask(this.wrapper, opts);


			this.mask.addEvent('click', function(ev) {
				self.fireEvent('click', ev);
			}); 

			this.addEvents({
				show: function(){ self.mask.show(); },
				hide: function(){ self.mask.hide(); },
				reach: function(el){	self.mask.reach(el); },
				repos: function(el){	self.mask.reach(el); },
				highlight: function(color){	self.mask.highlight(color); }
			});
		},

		buildResizer: function(options){
			var self = this;

			this.resizer = new Resizer(this.wrapper, options).addEvents({
				mouseleave: function() {
					self.hide();
				},
				mouseenter: function() {
					clearTimeout(self.timer);
				}
			});

			this.addEvents({
				show: function(el){ self.resizer.show(); },
				hide: function(el){	self.resizer.hide(); },
				reach: function(el){ self.resizer.reach(el); },
				repos: function(el){ self.resizer.reach(el); }
			});
		},

		buildMenu: function(options){
			//_log.debug('buildMenu', this.options.name, options);

			var self = this,
				left = null,
				right = null;

			// _log.debug( this.wrapper, options);

			options.positionning = this.options.positionning;

			this.menu = new Menu( this.wrapper, options);

			if (this.options.timerOnHide) {
				this.menu.element.addEvents({
					mouseleave: function() {
						self.hide();
					},
					mouseenter: function() {
						clearTimeout(self.timer);
					}
				});
			}

			this.addEvents({
				show: function(){ self.menu.element.show(); },
				hide: function(){	self.menu.element.hide(); },
				reach: function(el) { self.menu.reach(el);	},
				repos: function(el) { self.menu.reach(el); },
				highlight: function(color){	self.menu.element.highlight(color); }
			});
		},


		buildStatus: function(options){
			//_log.debug('buildMenu', this.options.name, options);

			var self = this,
				left = null,
				right = null;

			//_log.debug( this.wrapper);

			this.status = new Status( this.wrapper, options);

			if (this.options.timerOnHide) {
				this.status.element.addEvents({
					mouseleave: function() {
						self.hide();
					},
					mouseenter: function() {
						clearTimeout(self.timer);
					}
				});
			}

			this.addEvents({
				show: function(){ self.status.element.show(); },
				hide: function(){	self.status.element.hide(); },
				reach: function(el) { self.status.reach(el); },
				repos: function(el) { self.status.reach(el); },
				highlight: function(color){	self.status.element.highlight(color); }
			});
		},

		_initOverlay: function(){
			var self = this;

			this.overlay = new Overlay({
				container: this.options.container
			}).addEvents({
				click: function() {
					self.fireEvent('click', self.el);
				},
				dblclick: function() {
					self.fireEvent('dblclick',self.el);
				}
			});

			if (this.options.timerOnHide) {
				this.overlay.element.addEvents({
					mouseleave: function() {
						clearTimeout(self.timer);
						self.hide();
					},
					mouseenter: function() {
						//_log.debug('enteroverlay');
						clearTimeout(self.timer);
					}

				});
			}

			this.addEvents({
				show: function(el){ self.overlay.show(); },
				hide: function(el){	self.overlay.hide(); },
				reach: function(el){ self.overlay.reach(el); },
				repos: function(el){ self.overlay.reach(el); },
				highlight: function(color){	self.overlay.highlight(color); }
			});
		},

		reach: function(el){
			if (el) {
				this.el = el;
			} else if (this.el) {
				el = this.el;
			} else { return; }

			//_log.debug('reach',el);

			if (this.isEnable) {
				this.show();
				this.fireEvent('reach',el);
			}
		},

		repos: function(el){
			if (el) {
				this.el = el;
			} else if (this.el) {
				el = this.el;
			} else { return; }

			if (this.isEnable) {
				this.show();
				this.fireEvent('repos',el);
			}
		},

		set: function(name,value,name){
			//_log.debug(name,value,name);

			if (name)
				self[name][name](value);
			else
			this.selectors.each(function(name) {
				self[name][name](value);
			});

			return this;
		},

		/*

				Note: Should be cool if we can also add and remove selectors

		*/
		add: function(type) {

		},

		remove: function(type) {

		},

		hide: function(){
			clearTimeout(this.timer);
			this.timer = (function() {
				this.fireEvent('hide');
			}).delay(this.options.timerOnHide,this);
		},

		hideNow: function(){
			clearTimeout(this.timer);
			this.fireEvent('hide');
		},

		show: function(){
			clearTimeout(this.timer);
			if (this.isEnable)
				this.fireEvent('show');
		},

		highlight: function(color){
			if (this.isEnable)
				this.fireEvent('highlight',color);
		},

		enable: function(selector) {
			//_log.debug('enable', this.options.name);

			this.isEnable = true;
			Cookie.write(this.name, '1', this.options.cookie);
			//this.show();
		},

		disable: function(selector) {
			//_log.debug('disable', this.options.name);

			this.isEnable = false;
			Cookie.write(this.name, '0', this.options.cookie);
			this.hideNow();
		},

		isEnable: function() {
			if (Cookie.read(this.name) === '1') return true;
				else return false;
		},

		toggle: function(){
			if (Cookie.read(this.name) === '1') this.disable();
			else this.enable();
		}
	});

	return exports;
});



/**
 * UI Selector Status Class
 * @class UI.Selector.Status
 * @extends {UI.Selector}
 * @type {Class}
 */
define('UI/Selector/Status', [

], function(

) {

	var exports = new Class({
		Implements: [Events, Options],

		options: {
			container: document.body,
			type: 'status',
			zIndex: 3,
			clss: 'selector-status',
			position: 'top left',
			location: 'outside',
			offset: [1,1]
		},

		initialize: function(container,options){
			this.setOptions(options);

			var offset = this.options.offset;
			//_log.debug(typeOf(offset));

			if (typeOf(offset) == 'number') {
				this.offset = [offset,offset];
			} else {
				this.offset = offset;
			}

			this._initElement(container);
		},

		_initElement: function(container){
			//_log.debug('_initElement menu', this.options);

			this.element = new Element('span', {
				'class': this.options.clss,
				'zIndex': this.options.zIndex,
				html: 'status'
			}).inject(container);

			this.fx = new Fx.Morph(this.element, {
				link: 'cancel',
				duration: 250,
				transition: 'expo:out',
			});
		},

		setStatus: function(status) {
			this.element.set('html',status);
		},

		getStatus: function(el) {
			var opts = this.options,
				status = '';

			if (opts.dataset) {
				var dataset = el.dataset[opts.dataset];
				var ds = dataset.split('.');
				if (ds.length > 1)
					status += status + ds[1];
				else status += status + ds;
			}

			if (opts.attr)
				status += el.get(opts.attr);

			return status;
		},

		reach: function(el) {
			if (!el) {
				if (this.el) {
					el = this.el;
				} else return;
			} else {
				this.el = el;
			}

			var opts = this.options;

			this.setStatus(this.getStatus(el));
			this.show();
			var size = this.element.getCoordinates();
			var coord = el.getCoordinates();

			var top = 'auto',
				left = 'auto',
				bottom = 'auto',
				right = 'auto';

			if (opts.position.indexOf('left') > -1) {
				left = coord.left + this.offset[0];
			}

			if (opts.position.indexOf('right') > -1) {
				//_log.debug('sdfasdfasdfasdfasdfa');
				left = coord.left + coord.width - size.width + this.offset[0];
			}

			if (opts.position.indexOf('top') > -1) {
				top = coord.top;
			}

			if (opts.position.indexOf('bottom') > -1) {
				top = coord.top + coord.height;
			}

			if (opts.location == 'outside') {
				top = top - size.height - this.offset[1];
			}

			if (opts.location == 'inside') {
				top = top + this.offset[1];
			}

			if (this.options.usefx)
				this.fx.start({
					top: top,
					bottom: bottom,
					left: left,
					right: right
				});
			else
				this.element.setStyles({
					position: 'absolute',
					top: top,
					bottom: bottom,
					left: left,
					right: right
				});
		},

		getParent: function() {
			return this.parent;
		},

		hide: function(){
			this.element.hide();
		},

		show: function(){
			this.element.show();
		}
	});

	return exports;
});

/**
 * UI
 * @type {Object}
 */
define('UI', [

], function(

) {

	var UI = {
		props: {}
	};

	var ui = {
		version: '1.0.0',
		_initElement: '%_initElement%'
	};

	/*
		Object: ui.controller

	*/

	ui.controller = {};

});


/*

Class: DomBuilder 0.1
	A minimimalist Dom Builder class
	Return or inject a dom object from json string or javascript object source

Arguments:
	source	: the json or javascript source
	options :
		container : the container where to inject the new dom object

Example :

	// this example inject inside this.wrapper the json_string

	var json_string = '["table",{ class : "mytable"}, ["tr", { class : "row1" },["td",{ class : "col1" },"bonjour","td",{ class : "col2" }]],["tr", { class : "row2" },["td",{ class : "col1"},"td",{ class : "col2" }]],["tr", { class : "row3" },["td",{ class : "col1"},"td",{ class : "col2" }]]]'

	this.dom = new UI.Dom.Builder(json_string)
	 .inject(this.container);

*/

define('UI/Util/DOMBuilder', function() {


	var exports = new Class({

		Implements: [Events, Options],

		options: {
			onBuild: {},
			onStart: {}
		},

		/**
		 * [initialize description]
		 * @param  {[type]} source  [description]
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		initialize: function(source,options){
			this.setOptions(options);

			typeOf(source) === "string" ? this.object = JSON.decode(source) : this.object = source;

			this._initElement(this.object);

			return this.dom || '';
		},

		/**
		 * [_initElement description]
		 * @param  {[type]} object    [description]
		 * @param  {[type]} container [description]
		 * @return {[type]}           [description]
		 */
		_initElement: function(object,container){
			var dom, tag, func, next = '';

			object.each( function(o,i) {
				if (typeOf(o) === "string") {
					(typeOf(object[i+1]) === "object") ? tag = o : dom.set("html",o);
				} else if (typeOf(o) === "object") {
					dom = new Element(tag, o)
					container ? dom.inject(container) : this.dom = dom;
				} else if (typeOf(o) === "array") {
					this._initElement(o, dom);
				} else if (typeOf(o) === "function") {
					this.dom.addEvent('click',function() { o() });
				}
			}, this)
		}
	});

	return exports;
});



/**
 * UI Window Dialog Class
 * @class UI.Window.Dialog
 * @extends {UI.Container}
 * @type {Class}
 */

define('UI/Window/Dialog', [
	'UI/Control/Button',
	'UI/Window/Window'
], function(
	ButtonControl,
	Window
) {

	var exports = new Class({

		Extends: Window,

		name: 'dialog',

		/**
		 * options
		 * @type {Object}
		 */
		options: {
			center: true,
			title: 'Dialog',
			type:'dialog',

			alert: false,

			// Default size
			width: 480,
			height: 200,
			location: 'center',
			zIndex: 6000,
			modal: true,

			foot: {
				'class': 'ui-foot'
			},

			controls: ['minimize', 'maximize', 'close'],

			control: {
				_list: ['cancel', 'ok::is-primary']
			},
			useOverlay: false
			// Components Options
			/*head: true,
			controls: ['close'],
			container: {},
			foot: true,
			overflow: 'scrollbar',

			resizable: false,

			action: {
				list: ['cancel'],
				cancel: {
					text: 'Cancel',
					fire: 'close'
				},
				confirm: {
					clss: 'confirm',
					text: 'Apply'
				}
			}*/
		},

		initialize: function(options) {
			this.parent(options);
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement:function(){
			this.parent();

			this._initBody();
			this._initActions();

			/*
			this.buildButtons(this.options.action);
			*/
		},

		/**
		 * [_initBody description]
		 * @return {[type]} [description]
		 */
		_initBody: function() {
			//_log.debug('_initBody', this.content);

			var message = this.options.message;

			this.message = new Element('div', {
				class: 'container-body', 
				styles : { padding:'16px' },
				html: message
			}).inject(this.foot, 'before');
		},


		/**
		 * [_initMessage description]
		 * @param  {[type]} message [description]
		 * @return {[type]}         [description]
		 */
		_initMessage: function(message) {

			
		},

		/**
		 * [_initControls description]
		 * @param  {[type]} controls [description]
		 * @return {[type]}          [description]
		 */
		_initActions: function() {
			//_log.debug('_initActions', this.foot);
			var self = this;

			this.actions = this.actions || [];

			var toolbar = new Element('div', {
				'class': 'ui-toolbar toolbar-action'
			}).inject(this.foot);

			if (this.options.alert) {
				var list = this.options.control._list;
				var idx = list.indexOf('cancel');
				if (idx > -1) {
				    list.splice(idx, 1);
				}
			}

			var control = this.options.control || {};
			var list = control._list || [];

			for (var i = 0; i < list.length; i++) {
				//_log.debug('for..loop', i);
				var name = list[i];
				var opts = control[name];

				self._initAction(name, opts, toolbar);
			};
		},

		/**
		 * [_intiControl description]
		 * @param  {[type]} name      [description]
		 * @param  {[type]} opts      [description]
		 * @param  {[type]} container [description]
		 * @return {[type]}           [description]
		 */
		_initAction: function(name, opts, toolbar) {
			//_log.debug('_intiAction', name, opts, toolbar);
			var self = this;

			var n = name.split('::');
			var name = n[0];

			var klss = n[1];

			var action = new ButtonControl({
				name: name,
				text: name,
				klss: klss
			}).addEvent('press', function(e){ 
				//_log.debug('press', name);
				self.fireEvent(name);
				self.close();
			}).inject(toolbar);

			this.actions.push(action);
		}

	});
	
	return exports;
});


/**
 * UI Window Prompt Class
 * @class UI.Window.Prompt
 * @extends {UI.Container}
 * @type {Class}
 */
define('UI/Window/Prompt', [
	'UI/Component/Text',
	//'UI/Control/Textarea',
	'UI/Control/Button',
	'UI/Window/Window'
], function(
	UIText,
	//TextareaControl,
	ButtonControl,
	Window
) {

	var exports = new Class({

		Extends: Window,

		name: 'prompt',

		/**
		 * options
		 * @type {Object}
		 */
		options: {
			center: true,
			title: 'Prompt',
			type: 'prompt',

			// Default size
			width: 480,
			height: 200,
			location: 'center',
			zIndex: 6000,
			modal: true,

			foot: {
				'class': 'ui-foot'
			},

			controls: ['minimize', 'maximize', 'close'],

			control: {
				_list: ['cancel', 'ok::is-primary']
			},
			useOverlay: false
			// Components Options
			/*head: true,
			controls: ['close'],
			container: {},
			foot: true,
			overflow: 'scrollbar',

			resizable: false,

			action: {
				list: ['cancel'],
				cancel: {
					text: 'Cancel',
					fire: 'close'
				},
				confirm: {
					clss: 'confirm',
					text: 'Apply'
				}
			}*/
		},

		initialize: function(options) {
			this.parent(options);

			this.message.focus();
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function() {
			this.parent();

			this._initBody();
			this._initActions();
		},

		_initHead: function(options){
			//_log.debug('_initHead', options);
			this.parent(options);

			this.title = new UIText({
				type: 'title',
				text: this.options.title
			}).inject(this.head);
		},

		/**
		 * [_initBody description]
		 * @return {[type]} [description]
		 */
		_initBody: function() {
			//_log.debug('_initBody', this.content);
			var self = this;

			this.message = new Element('textarea', {
				class: 'ui-prompt'
			}).inject(this.foot, 'before');

			this.addEvents({
				ok: function() {
					var val = self.message.get('value');
					self.fireEvent('confirm', val);
				},
			});
		},

		/**
		 * [_initControls description]
		 * @param  {[type]} controls [description]
		 * @return {[type]}          [description]
		 */
		_initActions: function() {
			//_log.debug('_initActions', this.foot);
			var self = this;

			this.actions = this.actions || [];

			var toolbar = new Element('div', {
				'class': 'ui-toolbar toolbar-action'
			}).inject(this.foot);

			var control = this.options.control || {};
			var list = control._list || [];

			for (var i = 0; i < list.length; i++) {
				//_log.debug('for..loop', i);
				var name = list[i];
				var opts = control[name];

				self._initAction(name, opts, toolbar);
			}
		},

		/**
		 * [_intiControl description]
		 * @param  {[type]} name      [description]
		 * @param  {[type]} opts      [description]
		 * @param  {[type]} container [description]
		 * @return {[type]}           [description]
		 */
		_initAction: function(name, opts, toolbar) {
			//_log.debug('_intiAction', name, opts, toolbar);
			var self = this;

			var n = name.split('::');

			name = n[0];

			var klss = n[1];

			var action = new ButtonControl({
				name: name,
				text: name,
				klss: klss
			}).addEvent('press', function() {
				//_log.debug('press', name);
				self.fireEvent(name);
				self.close();
			}).inject(toolbar);

			this.actions.push(action);
		}

	});

	return exports;

});


/**
 * UI Window Class
 * 
 * @class UI.Window
 * @extends {UI.Container}
 * @type {Class}
 */
define('UI/Window/Window', [
	'UI/Window/controller',
	'UI/Container/Container',
	'UI/Control/Button'
], function(
	controller,
	Container,
	ButtonControl
) {

	var exports = new Class({

		Extends: Container,

		name: 'window',

		/**
		 * options
		 * @type {Object}
		 */
		options: {
			name: 'window',
			title: 'Window',

			container: $(document.body),
			context: 'top',

			content: true,
			// Size options
			width: 220,
			height: 360,

			location: 'cascade',
			position: 'fixed',

			zIndex: 'auto', // to get zIndex from skin or an Int as zIndex
			tag: 'div',

			// Components Options
			head: true,
			view: {},
			foot: {
				'class': 'ui-foot'
			},

			controls: ['minimize', 'maximize', 'close'],

			// Not Implemented should be able to enable/disable effects
			useEffects: false,

			focus: true,

			// Drag options
			draggable: true,
			/*dragLimitX: [-1000, window.getWidth() + 1000],
			dragLimitY: [26, window.getHeight() + 1000],*/
			dragHandlers: ['head', 'foot'],
			//hideContentOnDrag: true,


			useUnderlay: true,
			useOverlay: true,

			hideOnDrag : true,

			// Resize options
			resizable: true,
			resizeLimitX: [160, screen.width],
			resizeLimitY: [260, screen.height],
			resizeOnDragIfMaximized: false,
			resizeBorders: ['top','right','bottom','left']
		},

		/**
		 * [initialize description]
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		initialize: function(options) {
			this._initController();
			this.parent(options);


			this._initLocation();
			this.adaptLocation();

			if (this.options.position == 'fixed'){
				this.element.setStyle('position', 'fixed');
			}

			ui.window.register(this);

			if (this.options.focus)
				ui.window.focus(this);

			window.onresize = function(event){
				ui.window.resetMinimized();
			};

			this.inject(this.options.container);
		},

		/**
		 * [_initController description]
		 * @return {[type]} [description]
		 */
		_initController: function() {
			if (!ui.window) {
				this.controller = ui.window = controller;

				ui.window.init();
			}

		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function() {
			this.parent();

			//this._initContent();

			//this._initShim();




			this._initControl(this.options.controls);
		},

		_initShim: function() {
			this.shim = new Element('iframe', {
				src: 'javascript:false;document.write("");',
				scrolling: 'no',
				frameborder: 0,
				styles: {
					top:0,
					left:0,
					zIndex: '1',
					position: 'absolute',
					border: 'none',
					filter: 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)'
				},
				'class': 'iframeShim'
			}).inject(this.element, 'top').store('IframeShim', this);
		},

		/*
		Function: _initHead
			private function

			Create a new head element, set class and styles and inject

		Returns:
			(void)
		*/
		_initHead: function(options){
			this.parent(options);
			this.dragHandlers.push(this.head);

			// this.title = new UI.Text({
			// 	type: 'title',
			// 	text: this.options.title
			// }).inject(this.head);
		},

		/*
		Function: buildControls
			private function

			Create window controls that allow window close, maximize and minimize

		Returns:
			(void)
		*/
		_initControl: function(){
			return;
			var opts = this.options;

			if (!this.head) return;

			//_log.debug('buildControls');
			if (!this.options.controls) { return; }
			var self = this;

			this.controls = new Element('div', {
				'class': opts.name+'-control'
			}).addEvent('click',function(e) { e.stop(); })
			.inject(this.head);

			opts.controls.each(function(action){
				new ButtonControl({
					icon: action,
					text: action,
					klss: 'button-'+action
				}).addEvent('press', function(ev) {
					//_log.debug('press', ev);
					self.control(action);
				}).inject(self.controls);
			});

			this.addEvents({
				'minimize': function() { this.controls.hide(); },
				'normalize': function() { this.controls.show(); }
			});

			this.dragHandlers.push(this.controls);

			//this.fireEvent('resize');
		},

		_initBody: function(options) {
			this.fireEvent('resize');

			this.body = new Element('div')
				.addClass('container-body')
				.inject(this.element);

			this.addEvents({
				'minimize': function() { this.body.hide(); },
				'normalize': function() { this.body.show(); }
			});
		},


		/*
		Function: _initElement Foot
			private function

			Create a new head element, set class and styles and inject

		Returns:
			(void)
		*/
		_initFoot: function(options){
			this.parent(options);
			this.dragHandlers.push(this.foot);

			this.addEvents({
				minimize: function() { this.body.hide(); },
				normalize: function() { this.body.show(); }
			});
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
			return;
			if (this.title && this.head)
				return this.title.set('text', title);
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

			this.element.addClass('ui-window');
		},

		/*
		Function: _initEvents

		Arguments:
			html - (string) html formatted title

		Returns:
			this
		*/
		_initEvents: function(){
			this.parent();

			var self = this;

			this.addEvents({
				onFocus: function() {
					//_log.debug('OnFocus');
				},
				injected: function() {
					self.adaptLocation();
				},
				onResizeStart: function() {

				},
				onResizeComplete: function() {
					this.coord = this.element.getCoordinates();
				},
				onDragStart: function(){
					//_log.debug('darg start', this);
				},
				'onDragComplete': function() {
					//_log.debug('darg com', ui.window.underlay);
					this.coord = this.element.getCoordinates();
				},
				resizeComplete: function(){
					self.maximized = false;
					this.coord = this.element.getCoordinates();
				}
			});


			this.element.addEvents({
				mousedown: function() {
					self.focus();
				}
			});

			if (this.resizeHandlers)
			this.resizeHandlers.each(function(handler) {
				handler.addEvents({
					'mousedown': function() {
						//ui.window.showunderlay(self);
					},
					'mouseup': function() {
						//ui.window.underlay.hide();
					}
				});
			});
		},

		_initUnderlay: function() {
			//_log.debug('_initUnderlay', this.options.container);
			var self = this;

			var container = this.options.container || $(document.body)

			//_log.debug(container);

			this.underlay = new Element('div', {
				'class': 'dialog-underlay',
				styles: {
					zIndex: 900
				}
			}).inject(container);

			this.underlay.addEvents({
				mousedown: function() {
					//_log.debug('click underlay');
					//_log.debug(self.editForm.control.apply);
					self.element.addClass('reveal-window');
				},
				mouseup: function() {
					//_log.debug('click underlay');
					//_log.debug(self.editForm.control.apply);
					self.element.removeClass('reveal-window');
				},

			});


			this.underlay.show();

	 		this.addEvent('close', function(){
				self.underlay.destroy();
			});
	   	},
		/*
		Function: focus
			If minimize normalize and fireEvent OnFocus

		Returns:
			(void)
		*/
		focus: function(){
			if (this.minimized){
				this.normalize();
				ui.window.resetMinimized();
			} else
				if (this.maximized && this.options.resizeOnDragIfMaximized)
				this.normalize();
			else
				ui.window.focus(this);

			if (this.state != 'default')
				this.setState('default');
		},


		/*
		Function: control
			handle window controls' actions

		Arguments:
			actions - (string) minimize,maximize,close

		Returns:
			this
		*/
		control: function(action){
			this[action]();
			return this;
		},

		/*
		Function: minimize
			This action method displays the minimized window

		Returns:
			(void)
		*/
		minimize : function() {

			this.fireEvent('minimize');
			this.disableDrag();

			this.coord = this.element.getCoordinates();

			this.maximized = false;
			this.minimized = true;

			this.setState('minimized');

			var coord = ui.window.getcoord('minimized');

			// _log.debug('--',coord);

			this.element.setStyles(coord);

			ui.window.focus();
		},

		/*
		Function: maximize
			private function

			This action method set the size to fit the window container

		Returns:
			(void)
		*/
		maximize: function(){
			if (this.maximized) this.normalize();
			else {

				this.coord = this.element.getCoordinates();
				this.max = this.container.getCoordinates();

				//_log.debug(this.coord);

				this.setState('maximized');

				//this.setStyles(this.max);
				//
				this.setStyles({
					position: 'absolute',
					width: '100%',
					height: '100%',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0
				});

				this.minimized = false;
				this.maximized = true;
				//this.fireEvent('maximize');
				//this.fireEvent('resize');
			}

			return this;
		},


		/*
		Function: normalize
			Normalize window

		Returns:
			(void)
		*/
		normalize: function(){
			var self = this;

			this.fireEvent('normalize');
			this.element.setStyles(this.coord);
			this.setState('default');

			this.maximized = false;
			this.minimized = false;

			// c'est moche
			// this.fireEvent('onResizeDrag');

			(function(){ self.enableDrag(); }).delay(1000);

			return this;
		},

		storeCoordinates: function() {
			this.coord = this.element.getCoordinates();
		},

		/*
		Function: close
			Close window

		Returns:
			(void)
		*/
		close: function(){
			//_log.debug('close');
			ui.window.close(this);
			this.fireEvent('closed');

			return this;
		}
	});

	return exports;
});


/*
	Object: ui.controller.window
		Window controller. It handles windows cascading position, minimize position, focusing, ...

	Arguments:
		options - (object)

	Options:
		zBase - (integer)
		zStep - (integer)
		cascade - (object)
		stack - (object)

	Requires:
		<UI.Window>


	Implied global:
		ui,
		window

	Discussion:
		Stacks should be better implemented

*/

//var ui = ui || {};

define('UI/Window/controller', [

], function(

) {
	var exports = {
		options: {
			version: '0.1',
			zBase: 1000,
			zStep: 2,
			container: document.body,
			cascade: {
				start: {
					x: 51,
					y: 101
				},
				step: {
					x: 20,
					y: 20
				},
				offset : [170,50]
			},
			stack: {
				offset: {
					x: 16,
					y: 16
				}
			},
			underlay: {

			},
			minimized: {
				coord: {
					width: 160,
					height: 50,
					bottom: -10,
					left: 32,
					offset: {
						x: 16
					}
				}
			},
			maximized: {
				coord: {
					width: 960,
					height: 760,
					top: 'auto',
					left: 'auto'
				}
			},
			normalized: {
				coord: {
					width: 220,
					height: 360,
					bottom: 10,
					top: 'auto',
					left: ''
				}
			}
		},

		/*
		Constructor: initialize
			Construtor

		Arguments:
			options - (object) options

		Returns:
			(void)
		*/

		init: function(container){
			//_log.debug('init');
			this.container = container;
			this.list = [];
			this.zIndex = this.options.zBase;
			this.group = {};

			//this.buildunderlay();

			window.addEvent('resize', function(){ this.resizeMaximizedWindow(); }.bind(this));
		},

		/*
		Function: register
			Add passing window to the manage list

		Arguments:
			win - (object) the window class instance to register

		Returns:
			(void)
		*/

		register: function(win, group) {
			//_log.debug('register', win);
			this.list.push(win);

			if (group) {
				if (this.group[group])
					this.group[group] = [];

				this.group[group].push(win);
			}

			if (win.options.zIndex === 'auto') {
				win.element.setStyle('zIndex', this.zIndex);
				win.altitude = this.zIndex;
			}
			else {
				win.element.setStyle('zIndex', win.options.zIndex);
			}
			this.zIndex += this.options.zStep;
		},

		/*
		Function: close
			Destroy the provided window and focus to next one

		Arguments:
			win - (object) the window class instance to close and destroy

		Returns:
			(void)
		*/

		close: function(win) {
			win = win || this.active;
			win.hide();
			win.fireEvent('onClose');
			for (var i = this.list.length - 1; i >= 0; i--) {
				if (this.list[i] == win) {
					win.destroy();
					delete this.list[i];
					this.list = this.list.clean();
				}
			}
			this.focus();
		},

		/*
		Function: focus
			Increment max z-index and focus provided window

		Arguments:
			win - (object) the window class instance to focus

		Returns:
			(void)
		*/
		focus: function(win) {
			//_log.debug('focus', win);
			if (win === null) {
				//make next highest window focus
				var zIndex = 0;
				for (var i = this.list.length - 1; i >= 0; i--) {
					var windowZIndex = this.list[i].element.getStyle('zIndex');
					if (windowZIndex >= zIndex && !this.list[i].minimized) {
						win = this.list[i];
						zIndex = windowZIndex;
					}
				}

				if (win) {
					win.focus();
				}

				return;
			} else if (win && this.active !== win) {
				if (this.active && !this.active.minimized) {
					this.blur(this.active);
				}

				this.zIndex += this.options.zStep;
				win.element.style.zIndex = this.zIndex;
				win.element.style.zoom = '1';

				this.active = win;
				win.fireEvent('focus');

				//_log.debug('focus', win, win.grid, win.coord);
				if (win.grid) {
					this.list.each(function(w){
						win.setStyles(coord);
					});
				}

				return;
			}
		},

		/*
		Function: blur
			Blur active window

		Arguments:
			win - (object) the window class instance to blur

		Returns:
			(void)
		*/
		blur: function(win) {
			if ((win !== null) && !win.minimized) {
				win.setState('inactive');
				win.fireEvent('onBlur');
			} else if (this.active) {
				this.blur(this.active);
			}
		},

		minimize: function(win) {
			var w = win || this.active;
			w.minimize();
		},

		/*
		Function: getMinimizedLocation
			Return the position of next minimized window

		Returns:
			location - (array) Array containing left and top position
		 */
		getcoord: function(etat) {
			var opts = this.options;
			var x = 0;
			//_log.debug('getcoord:', opts[etat]);
			var coord = opts[etat].coord;
			x += coord.left;

			this.list.each(function(w, i) {
				if (w.state === etat) {

					//_log.debug('getStackCoord:', i, x, coord.width,coord.offset);

					x += (coord.width) + coord.offset.x;
				}
			});

		//	coord.offset = null;

		//	coord.left = x;

			return {
				width: coord.width,
				height: coord.height,
				bottom: coord.bottom,
				top: 'auto',
				left: x
			};
		},

		/*
		Function: resetMinimizedLocation
			Replace minimized windows

		Returns:
			(void)
		*/
		resetMinimized : function(){
			var etat = 'minimized',
				opts = ui.window.options,
				coord = opts[etat].coord;

			var x = 0;
			var y = coord.bottom;

			this.list.each(function(win, i) {
				if (win.state === 'minimized') {
					x += coord.width + coord.offset.x;
					win.setLocation(x, y);
				}
			});
		},

		/*
		Function: resizeMaximizedWindow
			Set new maximized size for all mamimized window

		Returns:
			(void)
		*/
		resizeMaximizedWindow: function(){
			//_log.debug('resizeMaximizedWindow');

			this.list.each(function(win) {
				if (win.state === 'maximized') {
					win.setSize({
						height: window.getHeight()-32,
						width: window.getWidth()
					});
				}
			});
		},

		/*
		Function: getCascadeLocation
			Calculate the location of the window in the cascade

		Arguments:
			win - (object) the window class instance to get location

		Returns:
			location - (object) location coordinates { left : 100, top : 100 }
		*/
		getCascadeLocation: function(win){
			var location = {
				left : 71,
				top : 121
			};

			this.list.each(function(w, i) {
				if (w.state != 'minimized' && w.options.location == 'cascade') {
					location.left += this.options.cascade.step.x;
					location.top += this.options.cascade.step.y;
				}
			},this);
			return location;
		},

		/*
		Function: cascade
			Move every windows to its position in the cascade

		Returns:
			(void)
		*/
		cascade: function(group){
			var start = [51,101];
			var offset = [20,20];
			var zIndex = this.zIndex;
			var last;
			var list = [];

			if (group)
				list = this.group;
			else list = this.list;

			list.each(function(win){
				if (win.state === 'minimized')
					return;

				win.element.style.zIndex = zIndex++;

				start[0] += offset[0];
				start[1] += offset[1];

				win.element.morph({
					'left': start[0],
					'top': start[1]
				});

				win.location = 'cascade';
				last = win;
			});

			this.zIndex = zIndex;
		},

		/*
		Function: circle
			Move every windows to its position in the cascade

		Returns:
			(void)
		*/
		circle: function(group){
			//should be define in the skin sheet
			var center = [200,300];
			var offset = [];
			var radius = 200;
			var zIndex = this.zIndex;

			var i = 1;
			var length = (this.list.length);

			this.list.each(function(win){
				//if (win.state = 'minimized') return;

				win.element.style.zIndex = zIndex++;
				win.element.style.zoom = '1';

				var ratio = i/length*2;

				offset[0] = Math.cos(ratio*Math.PI);
				offset[1] = Math.sin(ratio*Math.PI);

				var left = center[0] + offset[0] * radius;
				var top = center[1] + offset[1] * radius;

				i++;

				win.element.morph({
					top: top,
					left: left
				});

				win.adaptLocation();
				win.location = 'circle';
			});

			this.zIndex = zIndex;
		},


		grid: function(group){
			//should be define in the skin sheet
			var size = [160,240],
				start = [100,100],
				offset = [20,20],
				zIndex = this.zIndex,
				row = 0,
				column = 0,
				coord= {};

			var length = (this.list.length);

			this.list.each(function(win, i){
				//if (win.state = 'minimized') return;

				win.element.style.zIndex = zIndex++;
				win.coord = win.getCoordinates();

				coord.left = start[0] + (offset[0] + size[0]) * column;

				//_log.debug(column);

				if (coord.left > 1000) {
					coord.left = start[0];
					row++;
					column = 0;
				}

				coord.top = start[1] + (offset[1] + size[1]) * row;
				coord.width = size[0];
				coord.height = size[1];

				win.element.morph(coord);
				column++;
				win.adaptLocation();
				win.location = 'grid';

			});

			this.zIndex = zIndex;
		},

		closeall: function(){
			this.list.each(function(win){
				this.close(win);
			},this);
		},

		/*
		Function: buildunderlay
			_initElement an overlay for windows

		Arguments:

		Returns:
			(void)
		*/
		buildunderlay: function(container) {
			var opts = this.options.underlay;

			// should use ui.builder

			this.underlay = new Element('div', {
				'class': 'ui-underlay'
			}).inject(this.container);

			this.underlay.hide();
		},

		/*
		Function: buildunderlay
			_initElement an overlay for windows

		Arguments:

		Returns:
			(void)
		*/
		showunderlay: function(win) {
			this.underlay.setStyles({
				display: 'block',
				'zIndex': win.altitude
			});
		}
	};

	// window.addEvent('domready', function() {
	//     ui.window.init(document.body);
	// });

	return exports;

});

