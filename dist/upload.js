(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("upload", [], factory);
	else if(typeof exports === 'object')
		exports["upload"] = factory();
	else
		root["caoutchouc"] = root["caoutchouc"] || {}, root["caoutchouc"]["upload"] = factory();
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

	module.exports = __webpack_require__(106);


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

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(3);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-control-upload').defineLevel();

	exports.default = new Class({

	  Extends: _button2.default,

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
	   * init element
	   * @return {void}
	   */
	  _initElement: function _initElement() {
	    _log.debug('_initElement');

	    this.parent();
	    this._initFile();
	  },

	  /**
	   * init file
	   * @return {void}
	   */
	  _initFile: function _initFile() {
	    var self = this;

	    var file = new Element('input', {
	      type: 'file',
	      name: 'upload',
	      id: 'upload',
	      multiple: 'multiple'
	    }).inject(this.element);

	    file.addEvent('change', function (info) {
	      _log.debug('change', info);
	    });

	    /**
	     * @ignore
	     */
	    file.onchange = function (info) {
	      _log.debug('onchage', info, this.files);

	      var files = this.files;

	      if (files) {
	        _log.debug('fireEvent uploadFile', files);
	        self.fireEvent('uploadFile', [files]);
	      }
	    };

	    /*this.addEvent('injected', function() {
	      var coord = self.icon.getCoordinates();
	       coord.top = '0';
	      coord.left = '0';
	       file.setStyles(coord);
	    });*/
	  }

	});

/***/ }

/******/ })
});
;