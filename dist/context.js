(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("context", [], factory);
	else if(typeof exports === 'object')
		exports["context"] = factory();
	else
		root["caoutchouc"] = root["caoutchouc"] || {}, root["caoutchouc"]["context"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(108);


/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _control = __webpack_require__(4);

	var _control2 = _interopRequireDefault(_control);

	var _control3 = __webpack_require__(11);

	var _control4 = _interopRequireDefault(_control3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui:control-button');

	exports.default = new Class({

	  Extends: _control2.default,

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
	  set: function set() {},

	  /**
	   * [_initElement description]
	   * @return {void}
	   */
	  _initElement: function _initElement() {
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
	  _initIcon: function _initIcon(type, name) {
	    _log.debug('_initIcon', type, name);

	    var tag = 'span';
	    var code = name;
	    var klss = null;

	    var prop = {
	      'class': 'ui-icon'
	    };

	    this.icon = new Element(tag, prop).inject(this.element);

	    if (_control4.default[name]) {
	      _log.debug('icon font name', name);
	      klss = 'icon-font';
	      code = _control4.default[name];
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
	  _initText: function _initText(type) {
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
	  _initClass: function _initClass() {
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
	  _initSensor: function _initSensor() {
	    _log.debug('_initSensor');

	    var tag = 'div';

	    this.sensor = new Element(tag, {
	      'class': 'ui-sensor'
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
	  _touchInk: function _touchInk(ink, x, y, coord) {
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

	    (function () {
	      ink.destroy();
	    }).delay(duration);
	  },

	  /**
	   * [_onElementMouseDown description]
	   * @param  {event} e
	   * @return {void}
	   */
	  _onClick: function _onClick(e) {
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
	  _onDblClick: function _onDblClick(e) {
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
	  _onMouseDown: function _onMouseDown(e) {
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
	  _onMouseLeave: function _onMouseLeave(e) {
	    _log.debug('_onMouseLeave', e);
	  },

	  /**
	   * [_onElementMouseDown description]
	   * @param  {event} e
	   * @return {void}
	   */
	  _onMouseEnter: function _onMouseEnter(e) {
	    _log.debug('_onElementMouseDown', e);
	  },

	  /**
	   * [_onElementMouseUp description]
	   * @return {void}
	   */
	  _onMouseUp: function _onMouseUp(e) {
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

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui:control');

	exports.default = new Class({

	  Extends: _component2.default,

	  options: {
	    //disabled: false
	    error: false
	  },

	  /**
	   * [isEnable description]
	   * @return {boolean}
	   */
	  isEnable: function isEnable() {
	    //_log.debug('isEnable', this);
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
	  isActive: function isActive() {
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
	  _initOptions: function _initOptions() {
	    this.parent();

	    var opts = this.options;

	    this.value = opts.value;
	    this.readonly = opts.read;
	  },

	  /**
	   * [_initEvents description]
	   * @return {void} [description]
	   */
	  _initEvents: function _initEvents() {
	    var self = this;

	    //this.element.set('tabindex', 0);

	    this.element.addEvents({
	      /**
	       * @ignore
	       */
	      click: function click(e) {
	        _log.debug('click', e);
	        //e.stopPropagation();
	        self.fireEvent('click');
	      },
	      /**
	       * @ignore
	       */
	      mouseup: function mouseup() {
	        self.fireEvent('mouseup');
	      }
	    });
	  }

	});

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _minimalBinding = __webpack_require__(6);

	var _minimalBinding2 = _interopRequireDefault(_minimalBinding);

	var _method = __webpack_require__(7);

	var _method2 = _interopRequireDefault(_method);

	var _location = __webpack_require__(8);

	var _location2 = _interopRequireDefault(_location);

	var _drag = __webpack_require__(9);

	var _drag2 = _interopRequireDefault(_drag);

	var _resize = __webpack_require__(10);

	var _resize2 = _interopRequireDefault(_resize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-component');

	exports.default = new Class({

	  Implements: [Events, Options, _minimalBinding2.default, _method2.default, _location2.default, _drag2.default, _resize2.default],

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
	  initialize: function initialize(options) {
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
	  setState: function setState(state) {
	    _log.debug('setState', state, this);

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
	  addComponent: function addComponent(node) {
	    _log.debug('addComponent', node);
	    if (!node.component) {
	      node.component = 'container';
	    }

	    node.container = this.element;
	    node.main = this.main;

	    //_log.debug(node);

	    var container = new UI[node.component.capitalize()](node);

	    this.addEvent('resize', function () {
	      container.fireEvent('resize');
	    });

	    this.node.push(container);
	    this.layout[this.main][container.name] = container;
	    //ui.node[this.main][node.name] = container;
	  },

	  /**
	   * [_initOptions description]
	   * @return {void}
	   */
	  _initOptions: function _initOptions() {
	    var opts = this.options;
	    //this.name = this.options.name;
	    this.main = opts.main || opts.name;

	    //ui.node = ui.node || {};
	    //ui.node[this.main] = ui.node[this.main] || {};

	    this.layout = opts.layout || {};
	    this.layout[this.main] = this.layout[this.main] || {};

	    this.dragHandlers = opts.dragHandlers || [];
	  },

	  /**
	   * [_initState description]
	   * @return {void}
	   */
	  _initState: function _initState() {
	    if (this.options.state) {
	      this.setState(this.options.state);
	    }
	  },

	  /**
	   * [_initElement description]
	   * @return {void}
	   */
	  _initElement: function _initElement() {
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
	  _initProps: function _initProps() {
	    _log.debug('_initProps');

	    var opts = this.options;
	    var prop = {};
	    var props = ['id', 'name', 'type', 'klass', 'styles', 'html', 'title', 'events'];
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
	  _initElementType: function _initElementType() {},

	  /**
	   * [_initClass description]
	   * @return {void}
	   */
	  _initClass: function _initClass() {
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
	  _initEvents: function _initEvents() {
	    //_log.debug('_initEvents');
	    var self = this;
	    var opts = this.options;

	    this.addEvents({
	      /**
	       * @ignore
	       */
	      injected: function injected() {
	        if (opts.resizable && self._initResizer) {
	          self._initResizer();
	        }
	      },
	      /**
	       * @ignore
	       */
	      device: function device(_device) {
	        //_log.debug('device', device);
	        self.device = _device;
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
	  getName: function getName() {
	    return this.options.name || this.name;
	  },

	  /**
	   * set html to element
	   * @param {string} source - (string) source's html
	   * @return {Object}
	   * @deprecated Use setContent instead
	   */
	  setHtmlContent: function setHtmlContent(source) {
	    this.content.set('html', source);
	    this.fireEvent('loadComplete');
	    this.fireEvent('resize');

	    return this;
	  },

	  /**
	   * set content of the element
	   * @param {string} content [description]
	   */
	  setContent: function setContent(content) {
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
	  inject: function inject(container, position) {
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

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("minimal-binding", [], factory);
		else if(typeof exports === 'object')
			exports["minimal-binding"] = factory();
		else
			root["minimal-binding"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		if (typeof window === 'undefined') {
		  Class = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"primish\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
		  Events = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"primish/emitter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
		}

		exports.default = new Class({

		  Implements: [Events],

		  options: {
		    api: {
		      emit: 'trigger'
		    }
		  },

		  /**
		   * Initialize the module.
		   * @return {void}
		   */
		  initialize: function initialize() {
		    //console.log('initialize binding');

		    var self = this;

		    this.addEvent('initReady', function () {
		      self._initBinding.bind(this)();
		    });
		  },

		  /**
		   * Events communication controller.
		   * @param {Object} binding object to be bound
		   * @return {Object}
		   */
		  _initBinding: function _initBinding(binding) {
		    binding = binding || this.options.controller || this.options.binding;

		    this.binding = this.binding || {};

		    //console.log('_initBinding', this.options.name, binding);

		    if (!binding) {
		      //console.warn('missing binding options');
		      return;
		    }

		    if (!binding._list) {
		      this._bindObject(binding);
		      return;
		    }

		    var list = binding._list;

		    //console.log(list, binding);

		    for (var i = 0; list.length > i; i++) {
		      var bind = binding[list[i]];
		      this.binding = this.binding || {};

		      this._bindObject(bind);
		    }

		    if (this.fireEvent) {
		      this.fireEvent('bindingsReady');
		    } else if (this.trigger) {
		      this.trigger('bindingsReady');
		    }

		    return this.binding;
		  },

		  /**
		   * Bind an object.
		   * @param  {Object} obj obj whit key and value to be bound
		   * @return {void}
		   */
		  _bindObject: function _bindObject(obj) {
		    //console.log('_bindObject', obj);

		    for (var key in obj) {
		      if (!obj.hasOwnProperty(key)) {
		        continue;
		      }
		      var value = obj[key];

		      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
		        this._bindkey(key, value);
		      } else {
		        this._bindList(key, value);
		      }
		    }
		  },

		  /**
		   * Bind a list of events to a specific object.
		   * @param  {string} key Object path that will listen
		   * @param  {Array} values List if values to bind
		   * @return {void}
		   */
		  _bindList: function _bindList(key, values) {
		    //console.log('_bindList', key, values);

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
		  _bindkey: function _bindkey(key, val) {
		    //console.log('_bindkey', key, val);

		    var eventKeys = key.split('.');
		    var ev = eventKeys[eventKeys.length - 1];
		    eventKeys.pop();
		    var listenerCtx = this._path(eventKeys.join('.'));

		    //handle obj
		    var obj = this._getObj(listenerCtx, val);
		    if (obj) {
		      for (var newCtx in obj) {
		        if (!obj.hasOwnProperty(newCtx)) {
		          continue;
		        }
		        var newKey = eventKeys.join('.') + '.' + newCtx + '.' + ev;
		        //console.log('_bindkey', newKey, val);
		        this._bindkey(newKey, val);
		      }
		      return;
		    }

		    //handle args
		    var args;
		    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
		      for (var k in val) {
		        if (!val.hasOwnProperty(k)) {
		          continue;
		        }
		        break;
		      }
		      args = this._processKeyObj(k, val);
		      val = k;
		    }

		    var valKeys = val.split('.');

		    //Check if it's an event
		    if (valKeys[valKeys.length - 2] === this.options.api.emit) {
		      var emit = valKeys[valKeys.length - 1];
		      this._bindEvent(listenerCtx, ev, emit, val);
		    } else {
		      this._bindMethod(listenerCtx, ev, val, args);
		    }
		  },

		  /**
		   * Process object key.
		   * @param  {string} key
		   * @param  {Object} val
		   * @return {Object}
		   */
		  _processKeyObj: function _processKeyObj(key, val) {
		    //console.log('_processKeyObj', key, val);

		    var args = val[key];

		    for (var i = 0; i < args.length; i++) {
		      var arg = args[i];

		      if (arg.split('.')[0] === 'this') {
		        arg = arg.split('.');
		        arg.shift();
		        args[i] = this._path(arg.join('.'));
		      }
		    }

		    return args;
		  },

		  /**
		   * Listen to the given event and trigger another.
		   * @param  {Object} listenerCtx Object to listen
		   * @param  {string} ev Event that will be listened
		   * @param  {string} emit Event that will be emitted
		   * @param  {string} val Method path to be bound
		   * @return {void}
		   */
		  _bindEvent: function _bindEvent(listenerCtx, ev, emit, val) {
		    //console.log('_bindEvent', listenerCtx, ev, emit, val);

		    var emitter = this.options.api.emit;

		    var valKeys = val.split('.');
		    var save = valKeys[valKeys.length - 1];
		    valKeys.splice(-2, 2);
		    var boundCtx = this._path(valKeys.join('.'));

		    //handle obj
		    var obj = this._getObj(boundCtx, val);
		    if (obj) {
		      for (var newCtx in obj) {
		        if (!obj.hasOwnProperty(newCtx)) {
		          continue;
		        }
		        var newKey = valKeys.join('.') + '.' + newCtx + '.' + emitter + '.' + save;
		        //console.log('_bindEvent', newKey);
		        this._bindEvent(listenerCtx, ev, emit, newKey);
		      }
		      return;
		    }

		    if (listenerCtx && listenerCtx.addEvent && boundCtx && boundCtx.fireEvent) {
		      //console.log('bind val', val);
		      listenerCtx.addEvent(ev, boundCtx.fireEvent.bind(boundCtx, emit));
		      // keep track of the binding
		      //this.binding[ev] = event;
		    } else if (listenerCtx && listenerCtx.on && boundCtx && boundCtx.fireEvent) {
		      //this.binding[ev] = event;
		      listenerCtx.on(ev, boundCtx.fireEvent.bind(boundCtx, emit));
		    } else {
		      console.warn('missing context or method', listenerCtx, val, this);
		    }
		  },

		  /**
		   * Listen to the given event and bind to the given method.
		   * @param  {Object} listenerCtx Object to listen
		   * @param  {string} ev Event that will be listened
		   * @param  {string} val Method path to be bound
		   * @return {void}
		   */
		  _bindMethod: function _bindMethod(listenerCtx, ev, val, args) {
		    //console.log('_bindMethod', listenerCtx, ev, val);
		    var method = this._path(val);

		    var valKeys = val.split('.');
		    valKeys.pop();
		    var boundCtx = this._path(valKeys.join('.'));

		    //handle obj
		    var obj = this._getObj(boundCtx, val);
		    if (obj) {
		      for (var newCtx in obj) {
		        if (!obj.hasOwnProperty(newCtx)) {
		          continue;
		        }
		        var newKey = valKeys.slice(0, 2).join('.');
		        newKey = val.replace(newKey, newKey + '.' + newCtx);
		        //console.log('_bindMethod', newKey);
		        this._bindMethod(listenerCtx, ev, newKey, args);
		      }
		      return;
		    }

		    if (listenerCtx && listenerCtx.addEvent && method) {
		      if (args) {
		        listenerCtx.addEvent(ev, method.bind(boundCtx, args));
		      } else {
		        listenerCtx.addEvent(ev, method.bind(boundCtx));
		      }
		      // keep track of the binding
		      this.binding[ev] = method;
		    } else if (listenerCtx && listenerCtx.on && method) {
		      this.binding[ev] = method;
		      listenerCtx.on(ev, method.bind(boundCtx));
		    } else {
		      console.warn('missing context or method', listenerCtx, val, this);
		    }
		  },

		  /**
		   * Return the last reference to a object.
		   * @param  {string} str Object path for example key1.key2.key3
		   * @return {Object}
		   */
		  _path: function _path(str) {
		    //console.log('_path', str);
		    if (!str) {
		      return this;
		    } else if (!str.match(/\./)) {
		      return this[str];
		    }

		    var last;

		    var keys = str.split('.');
		    for (var i = 0, l = keys.length; i < l; i++) {
		      var key = keys[i];

		      last = last || this;
		      last = last[key];
		    }

		    return last;
		  },

		  /**
		   * Get object.
		   * @param  {Object} ctx object context
		   * @param  {string} str string
		   * @return {Object}
		   */
		  _getObj: function _getObj(ctx, str) {

		    if (ctx && ctx.constructor && ctx.constructor.name === 'Object') {
		      for (var first in ctx) {
		        if (!ctx.hasOwnProperty(first)) {
		          continue;
		        }
		        break;
		      }
		      if (str.indexOf(first) !== -1) {
		        return;
		      }
		      //console.log('_getObj', str, ctx, first);
		      return ctx;
		    }
		  }

		});

	/***/ }
	/******/ ])
	});
	;

/***/ },

/***/ 7:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Class({

	  /**
	   * [toElement description]
	   * @return {[type]} [description]
	   */
	  toElement: function toElement() {
	    return this.element;
	  },

	  /**
	   * [show description]
	   * @return {[type]} [description]
	   */
	  show: function show() {
	    this.fireEvent('show');
	    this.element.show();

	    return this;
	  },

	  /**
	   * [hide description]
	   * @return {[type]} [description]
	   */
	  hide: function hide() {
	    this.fireEvent('hide');
	    this.element.hide();

	    return this;
	  },

	  /**
	   * [show description]
	   * @return {[type]} [description]
	   */
	  fade: function fade(value) {
	    this.fireEvent('fade');
	    this.element.fade(value);

	    return this;
	  },

	  /**
	   * [getStyle description]
	   * @param  {[type]} style [description]
	   * @return {[type]}       [description]
	   */
	  getStyle: function getStyle(style) {
	    return this.element.getStyle(style);
	  },

	  /**
	   * [getSize description]
	   * @return {[type]} [description]
	   */
	  getSize: function getSize() {
	    //_log.debug('------',typeOf(this.element));
	    if (typeOf(this.element) == 'object') {
	      return this.element.getSize();
	    }
	  },

	  /**
	   * [getComputedSize description]
	   * @return {[type]} [description]
	   */
	  getComputedSize: function getComputedSize() {
	    return this.element.getComputedSized();
	  },

	  /**
	   * [getCoordinates description]
	   * @return {[type]} [description]
	   */
	  getCoordinates: function getCoordinates(context) {
	    return this.element.getCoordinates(context);
	  },

	  /**
	   * [addClass description]
	   * @param {[type]} klass [description]
	   */
	  addClass: function addClass(klass) {
	    this.element.addClass(klass);
	    return this;
	  },

	  /**
	   * [removeClass description]
	   * @param  {[type]} klass [description]
	   * @return {[type]}       [description]
	   */
	  removeClass: function removeClass(klass) {
	    return this.element.removeClass(klass);
	  },

	  /**
	   * [get description]
	   * @param  {[type]} property [description]
	   * @return {[type]}          [description]
	   */
	  get: function get(property) {
	    return this.element.get(property);
	  },

	  /**
	   * [morph description]
	   * @param  {[type]} props [description]
	   * @return {[type]}       [description]
	   */
	  morph: function morph(props) {
	    return this.element.morph(props);
	  },

	  /**
	   * [setSize description]
	   * @param {[type]} width  [description]
	   * @param {[type]} height [description]
	   */
	  setSize: function setSize(width, height) {
	    this.element.x = width || this.options.width;
	    this.element.y = height || this.options.height;

	    if (this.element.x) {
	      this.element.setStyle('width', this.element.x);
	    }

	    if (this.element.y) {
	      this.element.setStyle('height', this.element.y);
	    }

	    this.fireEvent('resize');
	    return this;
	  },

	  /**
	   * [setStyle description]
	   * @param {[type]} style [description]
	   * @param {[type]} value [description]
	   */
	  setStyle: function setStyle(style, value) {
	    this.element.setStyle(style, value);

	    return this;
	  },

	  /**
	   * [setStyles description]
	   * @param {[type]} styles [description]
	   */
	  setStyles: function setStyles(styles) {
	    this.element.setStyles(styles);

	    return this;
	  },

	  /**
	   * [getElement description]
	   * @param  {[type]} string [description]
	   * @return {[type]}        [description]
	   */
	  getElement: function getElement(string) {
	    return this.element.getElement(string);
	  },

	  /**
	   * [getElements description]
	   * @param  {[type]} string [description]
	   * @return {[type]}        [description]
	   */
	  getElements: function getElements(string) {
	    return this.element.getElements(string);
	  },

	  /**
	   * [submit description]
	   * @param  {[type]} string [description]
	   * @return {[type]}        [description]
	   */
	  submit: function submit(string) {
	    return this.element.submit(string);
	  },

	  /**
	   * [dispose description]
	   * @return {[type]} [description]
	   */
	  dispose: function dispose() {
	    return this.element.dispose();
	  },

	  /**
	   * [destroy description]
	   * @return {[type]} [description]
	   */
	  destroy: function destroy() {
	    this.element.destroy();
	    return;
	  }

	});

/***/ },

/***/ 8:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Class({

	  _initLocation: function _initLocation() {
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

	  setLocation: function setLocation(left, top, morph) {
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

	  getCenterLocation: function getCenterLocation() {
	    var location = {};
	    var height = this.options.height;

	    if (this.options.height != 'auto') {
	      location.top = (window.getHeight() - height.toInt()) / 2;
	    } else {
	      location.top = 160;
	    }

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
	  getInitialLocation: function getInitialLocation() {
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
	      var c = this.controller.getCascadeLocation(this);
	      return {
	        top: c.top,
	        left: c.left
	      };
	    }
	  },

	  adaptLocation: function adaptLocation() {
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

	      //this.minimize();

	      if (this.options.fx && this.options.fx.adaptLocation) {
	        if (!this.reposFx) {
	          this.reposFx = new Fx.Morph(this.element, this.options.fx.adaptLocation);
	        }
	        this.reposFx.start(location);
	      }
	    }
	  }

	});

/***/ },

/***/ 9:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Class({

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
	  enableDrag: function enableDrag() {
	    var self = this;

	    if (this.dragHandlers.length === 0) {
	      this.dragHandlers = [];
	    }

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

	    this.addEvent('onDragComplete', function () {
	      self.adaptLocation();
	    });

	    return this;
	  },

	  /**
	   * [enableElementDrag description]
	   * @param  {[type]} element [description]
	   * @return {[type]}         [description]
	   */
	  enableElementDrag: function enableElementDrag(element) {
	    if (element === null) {
	      return;
	    }

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
	  disableDrag: function disableDrag() {
	    if (this.dragHandler) {
	      this.dragHandler.detach();
	    }

	    return this;
	  }

	});

/***/ },

/***/ 10:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Class({

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
	  _initResizer: function _initResizer() {
	    //_log.debug('_initResizer', this.options.resizable);
	    this.resizeHandlers = [];

	    var wrapper = new Element('div', {
	      'class': 'layer-resizer'
	    }).inject(this.element, 'bottom');

	    this.resizer = new Element('div', this.options.resizer).addEvents({
	      click: function click(e) {
	        e.stop();
	      },
	      mousedown: function mousedown(e) {
	        e.stop();
	      }
	    }).inject(wrapper, 'bottom');

	    this.resizeHandlers.push(this.resizer);

	    this.enableResize(0);

	    if (this.options.resizeBorders) {
	      this.options.resizeBorders.each(function (border, i) {
	        this.resizeHandlers.push(new Element('div', {
	          style: border + ': 0',
	          'class': 'ui-resizer-' + border
	        }).addEvents({
	          click: function click(e) {
	            e.stop();
	          },
	          mousedown: function mousedown(e) {
	            e.stop();
	          }
	        }).inject(wrapper, 'top'));

	        this.enableResize(i + 1);
	      }, this);
	    }
	  },

	  /**
	   * [enableResize description]
	   * @param  {[type]}
	   * @return {[type]}
	   */
	  enableResize: function enableResize(i) {
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
	      onStart: function onStart(el) {
	        self.fireEvent('resizeStart', el);
	      },
	      onDrag: function onDrag(el, ev) {
	        self.fireEvent('resizeDrag', [el, ev]);
	        self.fireEvent('resize', el);
	      },
	      onComplete: function onComplete(el) {
	        self.fireEvent('resizeComplete', el);
	      }
	    };

	    if (i === 1 || i === 3) {
	      options.modifiers.x = false;
	    }
	    if (i === 2 || i === 4) {
	      options.modifiers.y = false;
	    }

	    if (i === 1 || i === 4) {
	      this.dragHandlers.push(this.resizeHandlers[i]);
	      options.invert = true;
	    }

	    this.element.makeResizable(options);

	    return this;
	  }

	});

/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * map control name with ui-icon-
	 */
	exports.default = {
	  validator: 'minimal-icon-thumbs-up',
	  subcribe: 'mdi-content-mail',
	  resendClosure: 'mdi-content-mail',
	  resendApproval: 'mdi-content-mail',
	  beat: 'mdi-image-flash-on',
	  invite: 'mdi-maps-local-post-office',
	  ticket: 'mdi-action-input',
	  listtype: 'mdi-action-view-module',
	  grid: 'mdi-action-list',
	  stream: 'mdi-action-view-stream',
	  three: 'mdi-maps-map',
	  folder: 'mdi-file-folder-open',
	  column: 'mdi-action-view-column',
	  history: 'mdi-action-history',
	  savedraft: 'mdi-action-done',
	  approve: 'mdi-action-done',
	  reject: 'mdi-navigation-cancel',
	  setPending: 'mdi-av-timer',
	  submit: 'mdi-action-done',
	  favorite_o: 'mdi-action-favorite-outline',
	  favorite: 'mdi-action-favorite',
	  addnode: 'mdi-content-add-box',
	  launcher: 'mdi-notification-vibration',
	  desktop: 'mdi-action-open-in-browser',
	  tablet: 'mdi-hardware-tablet',
	  phone: 'mdi-hardware-smartphone',
	  infoview: 'mdi-action-info-outline',
	  editinfo: 'mdi-av-explicit',
	  infoedit: 'mdi-av-explicit',
	  organize: 'mdi-editor-format-line-spacing',
	  repair: 'fa-wrench',
	  process: 'fa-wrench',
	  emptyNode: 'icon-trash-o',
	  processView: 'icon-trash-o',
	  emptyView: 'icon-trash-o',
	  screenshot: 'mdi-image-camera',
	  notification: 'mdi-social-notifications',
	  clear: 'mdi-action-highlight-remove',
	  navi: 'mdi-navigation-menu',
	  list: 'mdi-navigation-menu',
	  side: 'mdi-navigation-menu',
	  share: 'mdi-social-share',
	  info: 'mdi-action-info',
	  more: 'mdi-navigation-more-vert',
	  space: 'mdi-navigation-more-horiz',
	  duplicate: 'mdi-content-content-copy',
	  separator: 'undefined',
	  add: 'mdi-content-add',
	  addOne: 'mdi-social-plus-one',
	  people: 'mdi-social-group',
	  print: 'mdi-action-print',
	  power: 'mdi-power',
	  proforma: 'mdi-action-print',
	  user: 'mdi-action-account-circle',
	  apps: 'mdi-navigation-apps',
	  zoomOut: 'mdi-content-remove-circle-outline',
	  zoomIn: 'mdi-content-add-circle-outline',
	  date: 'mdi-action-event',
	  today: 'mdi-action-today',
	  fixed: 'mdi-action-schedule',
	  talk: 'mdi-communication-chat',
	  replan: 'mdi-action-schedule',
	  complete: 'mdi-action-done',
	  ship: 'mdi-maps-flight',
	  cancelCase: 'mdi-navigation-cancel',
	  cancelChange: 'mdi-navigation-cancel',
	  mailing: 'icon-envelope',
	  send: 'mdi-content-send',
	  openinnew: 'mdi-action-open-in-new',
	  switchapp: 'mdi-action-open-in-new',
	  look: 'mdi-image-remove-red-eye',
	  preview: 'mdi-image-remove-red-eye',
	  code: 'mdi-image-remove-red-eye',
	  save: 'icon-envelope',
	  recipients: 'minimal-icon-list-all',
	  move: 'mdi-action-open-with',
	  insert: 'mdi-navigation-check',
	  publish: 'mdi-editor-publish',
	  generateURL: 'icon-level-down',
	  publishAll: 'mdi-action-done-all',
	  forward: 'mdi-navigation-arrow-forward',
	  previous: 'mdi-navigation-arrow-back',
	  next: 'mdi-navigation-arrow-forward',
	  nextstep: 'mdi-navigation-arrow-forward',
	  back: 'mdi-navigation-arrow-back',
	  reload: 'mdi-navigation-refresh',
	  SLSync: 'mdi-navigation-refresh',
	  participant: 'mdi-content-add',
	  search: 'mdi-action-search',
	  settings: 'mdi-action-settings',
	  properties: 'mdi-action-settings-applications',
	  upload: 'mdi-file-cloud-upload',
	  searchField: 'mdi-action-search',
	  invoice: 'minimal-icon-barcode',
	  edit: 'mdi-editor-mode-edit',
	  filter: 'mdi-content-filter-list',
	  trash: 'mdi-action-delete',
	  delete: 'mdi-navigation-cancel',
	  editmove: 'mdi-editor-format-line-spacing',
	  position: 'mdi-editor-format-line-spacing',
	  moveup: 'mdi-hardware-keyboard-arrow-up',
	  movedown: 'mdi-hardware-keyboard-arrow-down',
	  orderSession: 'mdi-content-add',
	  choose: 'mdi-action-done',
	  sync: 'mdi-notification-sync',
	  export: 'mdi-file-file-download',
	  download: 'mdi-file-file-download',
	  sort: 'mdi-content-sort',
	  minus: 'mdi-content-remove-circle-outline',
	  showAll: 'mdi-action-list',
	  restore: 'mdi-action-restore',
	  apply: 'mdi-action-done',
	  cancel: 'mdi-navigation-close',
	  close: 'mdi-navigation-close',
	  tracker: 'mdi-action-track-changes',
	  contact: 'mdi-action-perm-contact-cal',
	  collapse: 'mdi-navigation-unfold-less',
	  uncollapse: 'mdi-navigation-unfold-more',
	  checked: 'mdi-check-box',
	  sprints: 'mdi-action-run',
	  package: 'mdi-package',
	  planning: 'mdi-calendar-clock',
	  notes: 'mdi-app-notes',
	  files: 'mdi-app-files',
	  news: 'mdi-app-news',
	  template: 'mdi-app-template'
	};

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	var _display = __webpack_require__(19);

	var _display2 = _interopRequireDefault(_display);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-container');

	/**
	 * @description
	 * The UI.Container class defines objects manage the content of the container
	 * that manage containers use by several object like windows, menus.
	 */
	exports.default = new Class({

	  Extends: _component2.default,

	  Implements: [Options, Events, _display2.default],

	  name: 'container',

	  options: {
	    name: 'container',

	    node: null,

	    tag: 'div'
	  },

	  /**
	   * [initialize description]
	   * @param  {Object} options [description]
	   * @return {Object}         [description]
	   */
	  initialize: function initialize(options) {
	    this.parent(options);

	    _log.debug('initialize', this.options);
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
	  _initElement: function _initElement() {
	    this.parent();

	    _log.debug('_initElement', this);
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
	    this.addEvent('injected', function () {
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
	  _initComponent: function _initComponent() {
	    var opts = this.options;

	    if (opts.node === null) {
	      return;
	    }

	    _log.debug('_initComponent', opts.node);

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
	  _initComp: function _initComp(comp) {
	    _log.debug('_initComp', comp);
	    var self = this;

	    if (typeOf(comp) === 'string') {
	      this.addComp(comp);
	    } else if (typeOf(comp) === 'object') {
	      _log.debug('object');
	    } else if (typeOf(comp) === 'array') {
	      comp.each(function (name) {
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
	  addComp: function addComp(name, position, element) {
	    _log.debug('addComp', name, position, element);
	    position = position || 'bottom';
	    element = element || this.element;

	    if (!element) {
	      _log.warn('container is', element);
	      return;
	    }

	    var comp = this[name] = new Element('div').addClass('container-' + name).inject(element, position);

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
	  _initClass: function _initClass() {
	    this.parent();

	    this.element.addClass('ui-container');
	  },

	  /**
	   * create an overlay displayed when container is disabled (when moved or resized)
	   * @return {void}
	   */
	  _initHead: function _initHead() {
	    var self = this;

	    this.head = new Element('div').addClass('container-head').inject(this.element, 'top').addEvent('dblclick', function () {
	      self.fireEvent('max');
	    });
	  },

	  /**
	   * [setTitle description]
	   * @param {string} title
	   */
	  setTitle: function setTitle(title) {
	    if (this.title && this.head) {
	      return this.title.set('text', title);
	    }
	  },

	  /**
	   * [setTitle description]
	   * @return {string}
	   */
	  getTitle: function getTitle() {
	    //_log.debug('getTitle', this.title);
	    if (this.title) {
	      return this.title.get('html');
	    }
	  },

	  /**
	   * [_initFoot description]
	   * @param  {Object} options
	   * @return {void}
	   */
	  _initFoot: function _initFoot() /*options*/{

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
	  _initStatus: function _initStatus(component /*, context*/) {

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
	  _initOverlay: function _initOverlay() {
	    var self = this;

	    this.overlay = new Element('div', {
	      'class': 'container-overlay'
	    }).inject(this.element);

	    this.addEvent('onLoadComplete', function () {
	      this.overlay.hide();
	    });

	    this.overlay.hide();

	    this.addEvents({
	      onBlur: function onBlur() {
	        //_log.debug('blur');
	        self.overlay.show();
	      },
	      onDragComplete: function onDragComplete() {
	        //_log.debug('darg com', ui.window.underlay);
	        self.overlay.hide();
	      },
	      onDragStart: function onDragStart() {
	        //_log.debug('darg start', this);
	        self.overlay.show();
	      },
	      onResizeComplete: function onResizeComplete() {
	        self.overlay.hide();
	        this.coord = this.element.getCoordinates();
	      },
	      onResizeStart: function onResizeStart() {
	        self.overlay.show();
	      },
	      resizeStart: function resizeStart() {
	        //_log.debug('darg start', this);
	        self.overlay.show();
	      },
	      resizeStop: function resizeStop() {
	        //_log.debug('darg start', this);
	        self.overlay.hide();
	      }

	    });
	  },

	  /**
	   * [_initUnderlay description]
	   * @return {void}
	   */
	  _initUnderlay: function _initUnderlay() {
	    //_log.debug('_initUnderlay', this.device);
	    var self = this;

	    this.underlay = new Element('div', {
	      'class': 'dialog-underlay',
	      styles: {
	        zIndex: 10
	      }
	    }).inject(this.element, 'before');

	    this.underlay.addEvent('click', function () {
	      _log.debug('click underlay');
	      self.minimize();
	    });

	    this.addEvent('close', function () {
	      self.underlay.destroy();
	    });
	  },

	  /**
	   * [focus description]
	   * @return {void}
	   */
	  focus: function focus() {
	    this.setState('focus');
	  }

	});

/***/ },

/***/ 19:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('ui-container-display').defineLevel();

	exports.default = new Class({

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
	  _initDisplay: function _initDisplay() {
	    _log.debug('_initDisplay', this.element);

	    this._modifier = 'width';

	    var direction = this.container.getStyle('flex-direction');

	    if (direction === 'column') {
	      this._modifier = 'height';
	    }

	    //_log.debug('direction', direction, this._modifier);

	    var self = this;
	    var opts = this.options.display;
	    var fx = opts.fx.default;
	    var modifier = this._modifier;

	    if (!this[modifier]) {
	      this[modifier] = this.options.size || 320;
	    }

	    this.device = this.device || 'desktop';
	    //this.underlay.hide();
	    this.display = {};

	    fx.property = modifier;

	    this.display.fx = new Fx.Tween(this.element, fx).addEvent('complete', function () {
	      self.fireEvent('toggled');
	    });

	    return this.display;
	  },

	  /**
	   * [getDisplay description]
	   * @return {[type]} [description]
	   */
	  getDisplay: function getDisplay() {

	    return this._display;
	  },

	  /**
	   * [getDisplay description]
	   * @return {[type]} [description]
	   */
	  setDisplay: function setDisplay(display) {

	    this._display = display;

	    return this;
	  },

	  /**
	   * [toggle description]
	   * @return {[type]} [description]
	   */
	  toggle: function toggle() {
	    _log.debug('toggle', this._display);

	    if (this._display === 'normalized') {
	      this.minimize();
	    } else {
	      this.normalize();
	    }

	    return this._display;
	  },

	  close: function close() {
	    _log.debug('close');

	    this.minimize();
	  },

	  /**
	   * [minimize description]
	   * @return {[type]} [description]
	   */
	  minimize: function minimize(quiet) {
	    _log.debug('start minimalization', this.device);

	    if (!this.display) {
	      this._initDisplay();
	    }

	    this.fireEvent('minimize');

	    if (quiet) {
	      this.element.setStyle(this._modifier, 0);
	    } else {
	      this.display.fx.start(0);
	    }

	    this._display = 'minimized';
	    //_log.debug('display', this._display);

	    if (this.underlay && this.device !== 'desktop') {
	      this.underlay.fade(0);
	    }

	    this.fireEvent('display', 'minimized');
	  },

	  /**
	   * [normalize description]
	   * @return {[type]} [description]
	   */
	  normalize: function normalize() {
	    _log.debug('normalize');

	    if (!this.display) {
	      this._initDisplay();
	    }

	    this.fireEvent('normalize');
	    // this.setStyle('display', 'initial');
	    // this.element.setStyle('display', 'initial');

	    var size = this[this._modifier] || this.options.size;

	    var w = window;
	    var d = document;
	    var e = d.documentElement;
	    var g = d.getElementsByTagName('body')[0];
	    var x = w.innerWidth || e.clientWidth || g.clientWidth;

	    if (x < 640) {
	      size = x;
	    }

	    //_log.debug('size', size);

	    if (this.display.fx) {
	      this.display.fx.start(size);
	    } else {
	      this.element.setStyle(this._modifier, size);
	    }
	    if (this.underlay && this.device !== 'desktop') {
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
	  maximize: function maximize() {
	    _log.debug('maximize');

	    return;
	    this.toggleFx.start(size);

	    this.element.setStyle('display', null);
	    this.element.addClass('state-focus');

	    this.isOpen = true;

	    this.fireEvent('maximized', this);
	  }

	});

/***/ },

/***/ 29:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('ui-controller').defineLevel();

	exports.default = new Class.Singleton({

	  Implements: [Options, Events],

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
	      offset: [170, 50]
	    },
	    stack: {
	      offset: {
	        x: 16,
	        y: 16
	      }
	    },
	    underlay: {},
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

	  /**
	   * [initialize description]
	   * @param  {[type]} options [description]
	   * @return {[type]}         [description]
	   */
	  initialize: function initialize(options) {
	    this.setOptions(options);
	    //_log.debug('controller window');

	    this.init(this.options.container);
	  },

	  /**
	   * [init description]
	   * @param  {[type]} container [description]
	   * @return {[type]}           [description]
	   */
	  init: function init(container) {
	    //_log.debug('init');
	    this.container = container;
	    this.list = [];
	    this.zIndex = this.options.zBase;
	    this.group = {};

	    //this.buildunderlay();

	    window.addEvent('resize', function () {
	      this.resizeMaximizedWindow();
	    }.bind(this));
	  },

	  /**
	   * Add passing window to the manage list
	   * @param  {[type]} win   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  register: function register(win, group) {
	    //_log.debug('register', win);
	    this.list.push(win);

	    if (group) {
	      if (this.group[group]) {
	        this.group[group] = [];
	      }

	      this.group[group].push(win);
	    }

	    if (win.options.zIndex === 'auto') {
	      win.element.setStyle('zIndex', this.zIndex);
	      if (win.underlay) {
	        win.underlay.setStyle('zIndex', this.zIndex - 1);
	      }

	      win.altitude = this.zIndex;
	    } else {
	      _log.debug('zINdex', win.element, win.options.zIndex);
	      win.element.setStyle('zIndex', win.options.zIndex);
	      if (win.underlay) {
	        _log.debug('---', win.options.zIndex - 1);
	        win.underlay.setStyle('zIndex', win.options.zIndex - 1);
	      }
	    }
	    this.zIndex += this.options.zStep;
	  },

	  /**
	   * Destroy the provided window and focus to next one
	   * @param  {[type]} win [description]
	   * @return {[type]}     [description]
	   */
	  close: function close(win) {
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

	  /**
	   * Increment max z-index and focus provided window
	   * @param  {[type]} win [description]
	   * @return {[type]}     [description]
	   */
	  focus: function focus(win) {
	    //_log.debug('focus', win);
	    if (!win) {
	      //make next highest window focus
	      var zIndex = 0;
	      for (var i = this.list.length - 1; i >= 0; i--) {
	        var windowZIndex = this.list[i].element.getStyle('zIndex');
	        if (windowZIndex >= zIndex && !this.list[i].minimized) {
	          win = this.list[i];
	          zIndex = windowZIndex;
	        }
	      }

	      //_log.debug('focus', win);

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

	      if (win.underlay) {
	        win.underlay.style.zIndex = this.zIndex - 1;
	      }

	      win.element.style.zoom = '1';

	      this.active = win;
	      win.fireEvent('focus');

	      //_log.debug('focus', win, win.grid, win.coord);
	      if (win.grid) {
	        this.list.each(function (w) {
	          win.setStyles(coord);
	        });
	      }

	      return;
	    }
	  },

	  /**
	   * Blur active window
	   * @param  {[type]} win [description]
	   * @return {[type]}     [description]
	   */
	  blur: function blur(win) {
	    if (win !== null && !win.minimized) {
	      win.setState('inactive');
	      win.fireEvent('onBlur');
	    } else if (this.active) {
	      this.blur(this.active);
	    }
	  },

	  /**
	   * [minimize description]
	   * @param  {[type]} win [description]
	   * @return {[type]}     [description]
	   */
	  minimize: function minimize(win) {
	    var w = win || this.active;
	    w.minimize();
	  },

	  /**
	   * getMinimizedLocation
	   * @param  {[type]} etat [description]
	   * @return {[type]}      [description]
	   */
	  getcoord: function getcoord(etat) {
	    var opts = this.options;
	    var x = 0;
	    //_log.debug('getcoord:', opts[etat]);
	    var coord = opts[etat].coord;
	    x += coord.left;

	    this.list.each(function (w, i) {
	      if (w.state === etat) {

	        //_log.debug('getStackCoord:', i, x, coord.width,coord.offset);

	        x += coord.width + coord.offset.x;
	      }
	    });

	    //  coord.offset = null;

	    //  coord.left = x;

	    return {
	      width: coord.width,
	      height: coord.height,
	      bottom: coord.bottom,
	      top: 'auto',
	      left: x
	    };
	  },

	  /**
	   * Replace minimized windows
	   * @return {[type]} [description]
	   */
	  resetMinimized: function resetMinimized() {
	    var etat = 'minimized',
	        opts = this.options,
	        coord = opts[etat].coord;

	    var x = 0;
	    var y = coord.bottom;

	    this.list.each(function (win, i) {
	      if (win.state === 'minimized') {
	        x += coord.width + coord.offset.x;
	        win.setLocation(x, y);
	      }
	    });
	  },

	  /**
	   * Set new maximized size for all mamimized window
	   * @return {[type]} [description]
	   */
	  resizeMaximizedWindow: function resizeMaximizedWindow() {
	    //_log.debug('resizeMaximizedWindow');

	    this.list.each(function (win) {
	      if (win.state === 'maximized') {
	        win.setSize({
	          height: window.getHeight() - 32,
	          width: window.getWidth()
	        });
	      }
	    });
	  },

	  /**
	   * Calculate the location of the window in the cascade
	   * @param  {[type]} win [description]
	   * @return {[type]}     [description]
	   */
	  getCascadeLocation: function getCascadeLocation(win) {
	    var location = {
	      left: 71,
	      top: 121
	    };

	    this.list.each(function (w, i) {
	      if (w.state != 'minimized' && w.options.location == 'cascade') {
	        location.left += this.options.cascade.step.x;
	        location.top += this.options.cascade.step.y;
	      }
	    }, this);
	    return location;
	  },

	  /**
	   * Move every windows to its position in the cascade
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  cascade: function cascade(group) {
	    var start = [51, 101];
	    var offset = [20, 20];
	    var zIndex = this.zIndex;
	    var last;
	    var list = [];

	    if (group) {
	      list = this.group;
	    } else {
	      list = this.list;
	    }

	    list.each(function (win) {
	      if (win.state === 'minimized') {
	        return;
	      }

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

	  /**
	   * Move every windows to its position in the cascade
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  circle: function circle(group) {
	    //should be define in the skin sheet
	    var center = [200, 300];
	    var offset = [];
	    var radius = 200;
	    var zIndex = this.zIndex;

	    var i = 1;
	    var length = this.list.length;

	    this.list.each(function (win) {
	      //if (win.state = 'minimized') return;

	      win.element.style.zIndex = zIndex++;
	      win.element.style.zoom = '1';

	      var ratio = i / length * 2;

	      offset[0] = Math.cos(ratio * Math.PI);
	      offset[1] = Math.sin(ratio * Math.PI);

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

	  /**
	   * [grid description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  grid: function grid(group) {
	    //should be define in the skin sheet
	    var size = [160, 240];
	    var start = [100, 100];
	    var offset = [20, 20];
	    var zIndex = this.zIndex;
	    var row = 0;
	    var column = 0;
	    var coord = {};

	    this.list.each(function (win, i) {
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

	  /**
	   * [closeall description]
	   * @return {[type]} [description]
	   */
	  closeall: function closeall() {
	    this.list.each(function (win) {
	      this.close(win);
	    }, this);
	  },

	  /**
	   * _initElement an overlay for windows
	   * @param  {[type]} container [description]
	   * @return {[type]}           [description]
	   */
	  buildunderlay: function buildunderlay(container) {
	    // should use ui.builder

	    this.underlay = new Element('div', {
	      'class': 'ui-underlay'
	    }).inject(this.container);

	    this.underlay.hide();
	  },

	  /**
	   * _initElement an overlay for windows
	   * @param  {[type]} win [description]
	   * @return {[type]}     [description]
	   */
	  showunderlay: function showunderlay(win) {
	    this.underlay.setStyles({
	      display: 'block',
	      'zIndex': win.altitude
	    });
	  }

	});

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _menu = __webpack_require__(109);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-menu-context').defineLevel();

	exports.default = new Class({

	  Extends: _menu2.default,

	  name: 'context',

	  options: {
	    name: 'context',
	    scope: $(document.body),
	    container: $(document.body),
	    trigger: 'contextmenu',
	    zIndex: 20,
	    underlay: false
	  },

	  /**
	   * initialize
	   * @param  {Object} options
	   * @return {Object}
	   */
	  initialize: function initialize(options) {
	    _log.debug('initialize', options);

	    this.parent(options);
	    var opts = this.options;
	    if (opts.underlay) {
	      this._initUnderlay();
	    }

	    this.element.inject(opts.container);
	    this._initContext();

	    return this;
	  },

	  /**
	   * Call UI.Component _initElement,
	   * then create a menu wrapper
	   * @return {void}
	   */
	  _initElement: function _initElement() {
	    _log.debug('_initElement');

	    var self = this;
	    var opts = this.options;

	    this.element = new Element('div', {
	      'class': 'ui-context',
	      styles: {
	        zIndex: opts.zIndex + 10
	      }
	    }).addEvents({
	      mousediown: function mousediown(e) {
	        self.fireEvent('mousedown');
	        e.stop();
	      }
	    });

	    this.element.addClass('context-' + opts.name);

	    if (opts.klss) {
	      this.element.addClass(opts.klss);
	    }

	    if (opts.type) {
	      this.element.addClass('type-' + opts.type);
	    }

	    this._initHead(opts.head);

	    this.content = new Element('ul', {
	      'class': 'menu-list'
	    }).inject(this.element);

	    this.addEvents({
	      show: function show() {
	        _log.debug('show');
	        self.content.getStyle('display', 'block');
	      },
	      hide: function hide() {
	        _log.debug('hide');
	        self.content.getStyle('display', 'none');
	      }
	    });

	    this.element.addEvent('click', function (e) {
	      e.stop();
	    });

	    this.element.hide();
	  },

	  /**
	   * init context
	   * @return {Object}
	   */
	  _initContext: function _initContext() {
	    var self = this;
	    var opts = this.options;
	    var scope = opts.scope || opts.container;

	    scope.getElements(opts.target).each(function (el) {
	      //_log.debug(el);
	      self.addTarget(el);
	    });

	    // self.element.addEvent('contextmenu', function(e){
	    //  e.stop();
	    // });

	    return this;
	  },

	  /**
	   * init underlay
	   * @return {void}
	   */
	  _initUnderlay: function _initUnderlay() {
	    var self = this;
	    var opts = this.options;

	    var underlay = this.underlay = new Element('div', {
	      'class': 'context-underlay',
	      styles: {
	        zIndex: opts.zIndex
	      }
	    }).addEvents({
	      click: function click() {
	        _log.debug('click');
	        underlay.setStyle('display', 'none');
	        self.element.hide();
	      }
	    }).inject(opts.container);

	    this.addEvents({
	      show: function show() {
	        _log.debug('show');
	        underlay.setStyle('display', 'block');
	      }
	    });
	  },

	  /**
	   * @ignore
	   */
	  addList: function addList() {},

	  /**
	   * add target
	   * @param {DOMElement} el
	   */
	  addTarget: function addTarget(el) {
	    var self = this;

	    el.addEvent(self.options.trigger, function (e) {
	      e.stop();
	      e.preventDefault();

	      self.el = el;

	      self.target = e.target;

	      //_log.debug(e.target);

	      //.hide(0);
	      //self.buildMenu(context.menu);
	      self.show(e);
	    });
	  },

	  /**
	   * remove list
	   * @return {void}
	   */
	  removeList: function removeList() {},

	  /**
	   * init events
	   * @return {void}
	   */
	  _initEvents: function _initEvents() {
	    this.parent();

	    this.addEvents({
	      show: function show() {
	        _log.debug('show');
	        //ui.menu.hideAll();
	      },
	      hide: function hide() {
	        _log.debug('hide');
	      }
	    });
	  },

	  /**
	   * Remove context to elements (defined by target)
	   * @return {Object}
	   */
	  removeContexts: function removeContexts() {
	    //_log.debug('removeContext',this.options.scope);
	    this.els.each(function (el) {
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

	  /**
	   * Overwrite the setPosition method of UI.Menu
	   * to use mouse coordinates to set menu location
	   * @param {integer} x X mouse's coordinates
	   * @param {integer} y Y mouse's coordinates
	   */
	  setPosition: function setPosition(x, y) {
	    var opts = this.options;
	    var container = opts.container;

	    if (x === null || y === null) {
	      return;
	    }

	    var ctop = container.getPosition().y;

	    var coor = this.element.getCoordinates();
	    var top = y - ctop;
	    var left = x - container.getPosition().x;

	    if (x + coor.width > container.getWidth()) {
	      left = left - coor.width;
	    }
	    if (y + coor.height > container.getHeight()) {
	      //_log.debug('top', top);
	      top = top - coor.height;
	    }

	    this.element.setStyles({
	      'top': top,
	      'left': left
	    });
	  },

	  /**
	   * hide
	   * @return {void}
	   */
	  hide: function hide() {
	    _log.debug('hide');

	    clearTimeout(this.timer);
	    this.timer = function () {
	      this.close();
	    }.delay(this.options.timerOnHide, this);
	  },

	  /**
	   * hideNow function
	   * @return {void}
	   */
	  hideNow: function hideNow() {
	    this.element.hide();
	  },

	  /**
	   * Overwrite the show method of UI.Menu to use mouse coordinates
	   * @param  {Object} e
	   * @return {Object}
	   */
	  show: function show(e) {
	    _log.debug('show', this);

	    this.fireEvent('show', e.target);

	    this.element.show();

	    //var coord = this.content.getCoordinates();
	    //this.setSize(coord.width, coord.height);
	    this.setPosition(e.client.x, e.client.y);

	    return this;
	  }

	});

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(29);

	var _controller2 = _interopRequireDefault(_controller);

	var _container = __webpack_require__(18);

	var _container2 = _interopRequireDefault(_container);

	var _button = __webpack_require__(3);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-menu').defineLevel();

	exports.default = new Class({

	  Extends: _container2.default,

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

	  /**
	   * initialize
	   * @param  {Object} options
	   * @return {Object}
	   */
	  initialize: function initialize(options) {
	    //_log.debug('menu init', options);

	    this.setOptions(options);

	    this.timer = null;

	    if (this.options.type === 'drop') {
	      this.state = 'close';
	    } else {
	      this.state = 'open';
	    }

	    this.item = {};
	    this.menus = [];

	    this._initElement();
	    this._initComponent();
	    this._initEvents();

	    //ui.menu.register(this);

	    return this;
	  },

	  /**
	   * init controller
	   * @return {void}
	   */
	  _initController: function _initController() {
	    if (!ui.menu) {
	      this.controller = ui.menu = _controller2.default;
	    }
	  },

	  /**
	   * Call UI.Component _initElement,
	   * then create a menu wrapper
	   * @return {void}
	   */
	  _initElement: function _initElement() {
	    _log.debug('_initElement', opts);

	    var self = this;
	    var opts = this.options;

	    this.element = new Element('div', {
	      'class': 'ui-menu',
	      'zIndex': opts.zIndex
	    });

	    this.element.addClass('menu-' + opts.name);

	    if (opts.klss) {
	      this.element.addClass(opts.klss);
	    }

	    if (opts.type) {
	      this.element.addClass('type-' + opts.type);
	    }

	    this._initHead(opts.head);

	    this.content = new Element('ul', {
	      'class': 'menu-list'
	    }).inject(this.element);

	    this.addEvents({
	      show: function show() {
	        _log.debug('show');
	        self.content.getStyle('display', 'block');
	      },
	      hide: function hide() {
	        _log.debug('hide');
	        self.content.getStyle('display', 'none');
	      }
	    });

	    if (opts.open) {
	      this.display = this.content.getStyle('display', 'block');
	    }

	    this.element.addEvent('click', function (e) {
	      e.stop();
	    });
	  },

	  /**
	   * Call UI.Component _initHead,
	   * then create a menu wrapper
	   * @return {void}
	   */
	  _initHead: function _initHead() {
	    var self = this;
	    var opts = this.options;
	    var trigger = opts.trigger;

	    if (!opts.head) {
	      //_log.warn('missing opts.head', opts);
	      return;
	    }

	    var head = new Element('div', {
	      'class': 'menu-head',
	      html: opts.head.text
	    }).inject(this);

	    head.addEvent(trigger, function () {
	      self.toggle();
	    });

	    this.addEvents({
	      show: function show() {
	        _log.debug('show');
	        this.head.addClass('open');
	      },
	      hide: function hide() {
	        _log.debug('hide');
	        this.head.removeClass('open');
	      },
	      change: function change(value) {
	        _log.debug('change', value);
	        if (opts.showValue && self.head) {
	          self.head.set('html', value);
	        }
	      }
	    });

	    if (opts.head.klss) {
	      head.addClass(opts.head.klss);
	    }

	    this.head = head;
	  },

	  /**
	   * Process the node object and inject the initialized
	   * component in the content of the container
	   * @return {void}
	   */
	  _initComponent: function _initComponent() {
	    var self = this;
	    var opts = this.options;
	    var node = opts.menu;
	    //var container = this.content;

	    _log.debug('_initComponent', node);

	    node.each(function (comp) {
	      if (!comp.text) {
	        comp.text = null; // comp.name;
	        //comp.text = comp.name;
	      }

	      var component = opts.item.component.capitalize();

	      var itemopts = comp;
	      //var itemopts = Object.merge(opts.item.options, comp);

	      _log.debug('_initComponent component', component);

	      // instantiate de menu component
	      var item = new _button2.default(itemopts);

	      self.item[comp.name] = item;

	      if (comp.klss) {
	        item.element.addClass(comp.klss);
	      }

	      if (comp.type) {
	        item.addClass('type-' + comp.type);
	      }

	      if (comp.state) {
	        item.setState(comp.state);
	      }

	      this.menus.push(comp);
	      //this.item[comp.name]

	      if (comp.selected) {
	        self.select(item);
	      }

	      if (comp.call) {
	        item.element.addEvents({
	          click: function click(e) {
	            _log.debug('click event menu', opts.type);
	            //e.stop();
	            self.fireEvent('change', this.get('data-name'));
	            self.fireEvent('select', this);
	            if (opts.type === 'drop' && opts.hideOnCall) {
	              self.hideNow();
	            }

	            if (self.name === 'context') {
	              self.hideNow();
	            }
	          }
	        });
	      } else if (comp.emit) {
	        item.element.addEvents({
	          click: function click(e) {
	            _log.debug('click');
	            e.stop();
	            self.fireEvent(comp.emit);
	          }
	        });
	      } else {
	        item.element.addEvents({
	          click: function click(e) {
	            _log.debug('click event menu');
	            e.stop();
	            if (self.state === 'disabled') {
	              return;
	            }
	            _log.debug('click', opts.type);
	            self.value = this.get('data-name');
	            self.fireEvent('change', this.get('data-name'));
	            self.fireEvent('selectItem', comp);

	            if (opts.type === 'push') {
	              _log.debug('select', this);
	              self.fireEvent('select', this);
	            } else if (opts.type === 'drop') {
	              self.hideNow();
	            }
	          }
	        });
	      }

	      item.inject(this.content);
	    }, this);
	  },

	  /**
	   * [_initEvents description]
	   * @return {[type]} [description]
	   */
	  _initEvents: function _initEvents() {
	    _log.debug('_initEvents', this.options.name);

	    var self = this;
	    var opts = this.options;

	    if (opts.type === 'drop') {
	      if (opts.timerOnHide) {
	        this.element.addEvents({
	          mouseleave: function mouseleave() {
	            self.hide();
	          },
	          mouseenter: function mouseenter() {
	            clearTimeout(self.timer);
	          }
	        });
	      }
	    }

	    if (opts.type === 'push') {
	      this.addEvents({
	        select: function select(menu) {
	          _log.debug('select', menu.get('data-name'));
	          self.select(menu.get('data-name'));
	        }
	      });
	    }
	  },

	  /**
	   * select
	   * @param  {[type]} menu [description]
	   * @return {[type]}      [description]
	   */
	  select: function select(menu) {
	    _log.debug('select', menu);

	    if (menu === false || menu === null) {
	      if (this.selected) {
	        //_log.debug('selected');
	        this.selected.removeClass('state-active');
	        this.selected.removeClass('state-checked');
	      }
	      return;
	    }

	    if (typeOf(menu) === 'string') {
	      menu = this.element.getElement('[data-name="' + menu + '"]');
	    }

	    if (!menu) {
	      return;
	    }

	    if (this.selected) {
	      this.selected.removeClass('state-active');
	    }

	    menu.addClass('state-active');
	    this.selected = menu;
	  },

	  /**
	   * [unselect description]
	   * @param  {[type]} menu [description]
	   * @return {[type]}      [description]
	   */
	  unselect: function unselect(menu) {
	    _log.debug('unselect');

	    var self = this;

	    if (typeOf(menu) === 'string') {
	      menu = this.element.getElement('[name="' + menu + '"]');
	    }

	    if (!menu) {
	      return;
	    }

	    if (self.selected) {
	      self.selected = null;
	    }

	    menu.removeClass('state-active');
	    menu.removeClass('state-checked');
	  },

	  /**
	   * [deselect description]
	   * @return {[type]} [description]
	   */
	  deselect: function deselect() {
	    _log.debug('deselect');

	    if (!this.selected) {
	      return;
	    }

	    this.selected.removeClass('state-active');
	    this.selected.removeClass('state-checked');
	  },

	  getSelected: function getSelected() {},

	  /**
	   * [toggle description]
	   * @return {[type]} [description]
	   */
	  toggle: function toggle() {
	    _log.debug('toggle');

	    if (this.state === 'open') {
	      this.setState('close');
	    } else {
	      this.setState('open');
	    }

	    this.fireEvent('toggle');
	  },

	  /**
	   * [toggleFold description]
	   * @return {[type]} [description]
	   */
	  toggleFold: function toggleFold() {
	    _log.debug('toggleFold');

	    if (this.state === 'folded') {
	      this.setState('unfolded');
	    } else {
	      this.setState('floded');
	    }

	    this.fireEvent('toggle');
	  },

	  /**
	   * [hide description]
	   * @return {[type]} [description]
	   */
	  hide: function hide() {
	    _log.debug('hide');

	    clearTimeout(this.timer);
	    this.timer = function () {
	      this.close();
	    }.delay(this.options.timerOnHide, this);
	  },

	  /**
	   * [hideNow description]
	   * @return {[type]} [description]
	   */
	  hideNow: function hideNow() {
	    _log.debug('hideNow');

	    this.close();
	  },

	  /**
	   * [shut description]
	   * @return {[type]} [description]
	   */
	  shut: function shut() {
	    _log.debug('shut');

	    this.setState('close');

	    this.fireEvent('closed');
	  },

	  /**
	   * [close description]
	   * @return {[type]} [description]
	   */
	  close: function close() {
	    _log.debug('close');

	    this.setState('close');

	    this.element.setStyle('display', 'none');

	    this.fireEvent('closed');
	  },

	  /**
	   * [open description]
	   * @return {[type]} [description]
	   */
	  open: function open() {
	    _log.debug('open');

	    this.setState('open');

	    this.fireEvent('opened');
	  }

	});

/***/ }

/******/ })
});
;