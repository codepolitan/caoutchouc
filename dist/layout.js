(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("layout", [], factory);
	else if(typeof exports === 'object')
		exports["layout"] = factory();
	else
		root["caoutchouc"] = root["caoutchouc"] || {}, root["caoutchouc"]["layout"] = factory();
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

	module.exports = __webpack_require__(20);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _container = __webpack_require__(18);

	var _container2 = _interopRequireDefault(_container);

	var _component = __webpack_require__(21);

	var _component2 = _interopRequireDefault(_component);

	var _resize = __webpack_require__(23);

	var _resize2 = _interopRequireDefault(_resize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-layout').defineLevel();

	exports.default = new Class({

	  Implements: [Events, Options, _component2.default, _resize2.default],

	  /**
	   * Layout options
	   * @type {Object}
	   * @param {name} [name] layout
	   * @param {Object} [clss] Default component class
	   */
	  options: {
	    name: 'layout',
	    clss: _container2.default,
	    settings: {}
	  },

	  /**
	   * initialize
	   * @param  {Object} options
	   * @return {Object}
	   */
	  initialize: function initialize(options) {
	    this.setOptions(options);

	    this._initLayout(this.options);

	    return this;
	  },

	  /**
	   * init layout
	   * @param {Object} opts
	   * @return {void}
	   */
	  _initLayout: function _initLayout(opts) {
	    _log.debug('initialize', opts);
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
	   * init events
	   * @return {void}
	   */
	  _initEvents: function _initEvents() {
	    var self = this;

	    window.addEvent('resize', function () {
	      var coord = self.container.getCoordinates();

	      _log.debug('layout resize', self.container, coord);

	      //chck if element is in the DOM
	      if (document.body.contains(self.container.element) === false) {
	        return;
	      }

	      if (coord.width < 720 && self.navi) {
	        self.navi.minimize();
	        //self.resizer.navi.hide();
	      }

	      self.fireEvent('drag');
	    });

	    (function () {
	      self.fireEvent('drag');
	    }).delay(1000);
	  },

	  /**
	   * init container
	   * @param {Object} opts
	   * @return {void}
	   */
	  _initContainer: function _initContainer(opts) {

	    this.container = new _container2.default({
	      resizable: false,
	      'class': 'ui-layout layout-' + opts.node._name
	    }).inject(opts.container);

	    this.mask = new Element('div', {
	      'class': 'layout-mask'
	    }).inject(this.container);

	    _log.debug('Layout container', this.container);

	    this.container.addClass('ui-layout');
	    this.container.addClass('layout-' + opts.node._name);

	    if (this.options.theme) {
	      this.container.addClass('theme-' + this.options.theme);
	    }

	    opts.node.container = this.container;
	  },

	  /**
	   * process components
	   * @param  {Object} node
	   * @param  {string} type
	   * @param  {integer} level
	   * @return {void}
	   */
	  _processComponents: function _processComponents(node, type, level) {
	    _log.debug('_processComponents', node, type, level);

	    var list = node._list || [];

	    level = level++ || 1;

	    if (type !== 'tab') {
	      node._axis = this._initFlexDirection(node.container, node._axis);
	    }

	    for (var i = 0; i < list.length; i++) {
	      var name = list[i];
	      var comp = node[name] || {};

	      comp.clss = comp.clss || this.options.clss;
	      comp.opts = comp.opts || {};

	      comp.opts.name = name;
	      comp.opts.position = i + 1;
	      comp.opts.axis = node._axis;
	      comp.opts.nComp = list.length;

	      if (name === 'navi') {
	        comp.opts.useUnderlay = true;
	      }

	      if (i === list.length - 1) {
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

	      component.element.addClass('container-' + name);

	      if (comp.node) {
	        comp.node.container = component;

	        if (component.options.clss === 'tab') {
	          this._processComponents(comp.node, 'tab', level);
	        } else {
	          this._processComponents(comp.node, null, level);
	        }
	      }
	    }
	  },

	  /**
	   * init flex direction
	   * @param  {DOMElement} container
	   * @param  {string} axis
	   * @return {string}
	   */
	  _initFlexDirection: function _initFlexDirection(container, axis) {
	    _log.debug('_initFlexDirection', container, axis);

	    if (!container) {
	      return;
	    }

	    axis = axis || 'x';

	    if (axis === 'x') {
	      container.addClass('flex-horizontal');
	    } else if (axis === 'y') {
	      container.addClass('flex-vertical');
	    }

	    return axis;
	  },

	  /**
	   * set device
	   * @param {string} device
	   */
	  setDevice: function setDevice(device) {
	    _log.debug('setDevice');

	    this.device = device;

	    this.fireEvent('device', device);
	  },

	  /**
	   * destroy
	   * @return {void}
	   */
	  destroy: function destroy() {
	    this.container.destroy();
	  }

	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _minimalUtils = __webpack_require__(22);

	var _log = __debug('ui-layout-component').defineLevel();

	exports.default = new Class({

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
	   * @param  {Object} comp list component
	   * @return {void}
	   */
	  _initComponent: function _initComponent(comp) {
	    _log.debug('_initComponent', comp.opts.name, comp);

	    // shortcuts
	    comp.opts.flex = comp.opts.flex || comp.flex;
	    comp.opts.hide = comp.opts.hide || comp.hide;
	    comp.opts.theme = comp.opts.theme || comp.theme;
	    comp.opts.title = comp.opts.title || comp.title;

	    _log.debug('comp', comp.clss);

	    var name = comp.opts.name;
	    var clss = _minimalUtils.api.strToClss(comp.clss);

	    //comp.opts.container = comp.container;
	    var component = this.component[name] = this[name] = new clss(comp.opts);

	    _log.debug('component', comp);

	    // register component
	    this._componentRegister(name, component);

	    //settings
	    this._initComponentSettings(component);

	    // styles and size
	    this._setComponentStyles(component);
	    this._setComponentDisplay(component);
	    this._attachComponentEvents(component);

	    return component;
	  },

	  /**
	   * [_componentRegister description]
	   * @param  {[type]} name      [description]
	   * @param  {[type]} component [description]
	   * @return {[type]}           [description]
	   */
	  _componentRegister: function _componentRegister(name, component) {
	    //_log.debug('_componentRegister', name, component);

	    this.components = this.components || [];
	    this.components.push(component);
	  },

	  /**
	   * [_initComponentSettings description]
	   * @param  {Object} component
	   * @return {void}
	   */
	  _initComponentSettings: function _initComponentSettings(component) {
	    _log.debug('_initcompSettings', component);

	    //var name = component.getName();
	    //var element = component.element;
	  },

	  /**
	   * initComponentSettings
	   * @param  {Object} component
	   * @return {void}
	   */
	  _setComponentStyles: function _setComponentStyles(component) {
	    _log.debug('_setComponentStyles', component);

	    if (component.options.flex) {
	      component.element.addClass('flex-' + component.options.flex);
	    }

	    if (component.options.theme) {
	      component.element.addClass('theme' + '-' + component.options.theme);
	    }
	  },

	  /**
	   * initSize
	   * @param  {Object} component
	   * @return {void}
	   */
	  _setComponentDisplay: function _setComponentDisplay(component) {
	    _log.debug('comp opts', component.options);

	    var display = 'normalized';

	    if (component.options.hide || component.options.state === 'minimized') {
	      component.minimize(1);
	      display = 'minimized';
	    }

	    var name = component.getName();
	    var element = component.element;

	    var settings = this.settings[name];
	    if (settings && settings.display) {
	      display = settings.display;
	    }

	    component.setDisplay(display, 'width');

	    if (!component.options.flex) {
	      if (settings && component.options.axis === 'x') {
	        //element.setStyle('flex', 'none');
	        element.addClass('flex-none');

	        if (display === 'minimized') {
	          element.setStyle('width', 0);
	        } else {
	          if (settings.width < 32) {
	            settings.width = 32;
	          }

	          element.setStyle('width', settings.width || null);
	        }

	        component.width = settings.width || 260;
	        component._modifier = 'width';
	      } else if (settings && component.options.axis === 'y') {
	        element.setStyle('flex', 'none');
	        element.setStyle('height', settings.height || null);
	        component.height = settings.height || 260;
	        component._modifier = 'height';
	      }

	      this._initResizer(component);
	    }
	  },

	  /**
	   * _attachComponentEvents
	   * @param {Object} component
	   * @return {void}
	   */
	  _attachComponentEvents: function _attachComponentEvents(component) {
	    _log.debug('_attachComponentEvents', component);

	    var self = this;
	    var name = component.getName();

	    component.addEvents({
	      toggled: function toggled() {
	        _log.debug('toggled');
	        self.fireEvent('resize');
	      },
	      resizing: function resizing() {
	        _log.debug('toggled');
	        self.fireEvent('resize');
	      },
	      display: function display(state) {
	        _log.debug('display', name, state);
	        self.fireEvent('display', [name, state]);
	      }
	    });

	    this.addEvents({
	      resize: function resize() {
	        _log.debug('resize');
	        component.fireEvent('resize');
	      },
	      drag: function drag() {
	        _log.debug('drag');
	        component.fireEvent('resize');
	      },
	      normalize: function normalize() {
	        _log.debug('normalize');
	        component.fireEvent('resize');
	      },
	      maximize: function maximize() {
	        _log.debug('maximize');
	        component.fireEvent('resize');
	      },
	      minimize: function minimize() {
	        _log.debug('minimize');
	        component.fireEvent('resize');
	      },
	      device: function device(_device) {
	        _log.debug('device', _device);
	        component.fireEvent('device', _device);
	      }
	    });
	  }

	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("minimal-utils", [], factory);
		else if(typeof exports === 'object')
			exports["minimal-utils"] = factory();
		else
			root["minimal-utils"] = factory();
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

		var _api = __webpack_require__(1);

		Object.defineProperty(exports, 'api', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_api).default;
		  }
		});

		var _array = __webpack_require__(2);

		Object.defineProperty(exports, 'array', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_array).default;
		  }
		});

		var _date = __webpack_require__(3);

		Object.defineProperty(exports, 'date', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_date).default;
		  }
		});

		var _dom = __webpack_require__(4);

		Object.defineProperty(exports, 'dom', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_dom).default;
		  }
		});

		var _filter = __webpack_require__(5);

		Object.defineProperty(exports, 'filter', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_filter).default;
		  }
		});

		var _object = __webpack_require__(6);

		Object.defineProperty(exports, 'object', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_object).default;
		  }
		});

		var _request = __webpack_require__(7);

		Object.defineProperty(exports, 'request', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_request).default;
		  }
		});

		var _search = __webpack_require__(8);

		Object.defineProperty(exports, 'search', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_search).default;
		  }
		});

		var _string = __webpack_require__(9);

		Object.defineProperty(exports, 'string', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_string).default;
		  }
		});

		var _url = __webpack_require__(10);

		Object.defineProperty(exports, 'url', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_url).default;
		  }
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		/**
		 * API Utils
		 * @class API
		 * @description minimal utils
		 * @author Bruno Santos, Jerome Vial
		 */
		exports.default = {

		  /**
		   * Return Something (func) from a given path
		   * @param {string} path The path in dot notation
		   * @param {Object} self
		   * @return {Object}
		   */
		  _pathTo: function _pathTo(path, self) {

		    //console.log('_pathTo', path);
		    // Maybe should not be so restricive
		    if (typeOf(path) === 'function') {
		      return path;
		    }

		    var keys = path.split('.');

		    var func = null;
		    var context = null;

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      func = func || self;
		      func = func[key];
		      context = context || self;

		      if (typeof context[key] !== 'function') {
		        context = context[key];
		      }
		    }

		    /*console.log({
		    	func: func,
		    	context: context
		    });*/

		    return {
		      func: func,
		      context: context
		    };
		  },


		  /**
		   * deref
		   * @param  {Object} obj
		   * @param  {Array} s
		   * @return {Object}
		   */
		  deref: function deref(obj, s) {
		    var i = 0;
		    s = s.split('.');
		    while (obj && i < s.length) {
		      obj = obj[s[i++]];
		    }
		    return obj;
		  },


		  /**
		   * Get Class From String
		   * @param {string} str
		   * @return {clss}
		   */
		  strToClss: function strToClss(str) {
		    if (typeOf(str) === 'class') {
		      return str;
		    }

		    var keys = str.split('.');

		    var clss = null;

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];
		      if (clss) {
		        clss = clss[key];
		      } else {
		        clss = window[key];
		      }
		    }

		    return clss;
		  },


		  /**
		   * Get Class From String
		   * @param {string} str
		   * @return {clss}
		   */
		  toclss: function toclss(str) {
		    if (typeOf(str) === 'class') {
		      return str;
		    }

		    var keys = str.split('.');

		    var clss = null;

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];
		      if (clss) {
		        clss = clss[key];
		      } else {
		        clss = window[key];
		      }
		    }

		    return clss;
		  }
		};

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		/**
		 * Array Utils
		 * @class Array
		 * @description minimal utils
		 * @author Bruno Santos, Jerome Vial
		 */
		exports.default = {

		  /**
		   * find obj by key
		   * @param  {Array} arr
		   * @param  {string} key
		   * @param  {string} value
		   * @return {Object|null}
		   */
		  findObjByKey: function findObjByKey(arr, key, value) {
		    for (var i = 0, len = arr.length; i < len; i++) {
		      if (arr[i][key] === value) {
		        return arr[i];
		      }
		    }
		    return null;
		  },


		  /**
		   * update obj by key
		   * @param  {Array} arr
		   * @param  {string} key
		   * @param  {string} value
		   * @param  {Object} obj
		   * @return {Object|null}
		   */
		  updateObjByKey: function updateObjByKey(arr, key, value, obj) {
		    for (var i = 0, len = arr.length; i < len; i++) {
		      if (arr[i][key] === value) {
		        arr[i] = obj;
		      }
		    }
		  },


		  /**
		   * delete obj by key
		   * @param  {Array} arr
		   * @param  {string} key
		   * @param  {string} value
		   * @return {Object|null}
		   */
		  deleteObjByKey: function deleteObjByKey(arr, key, value) {
		    for (var i = 0, len = arr.length; i < len; i++) {
		      if (arr[i][key] === value) {
		        arr.splice(i, 1);
		        return arr;
		      }
		    }
		    return arr;
		  },


		  /**
		   * convert obj to array
		   * @param  {Object} obj
		   * @return {Array}
		   */
		  objToArray: function objToArray(obj) {
		    obj = obj || {};
		    return Object.keys(obj).map(function (key) {
		      return obj[key];
		    });
		  },


		  /**
		   * sort
		   * @param  {Array} array
		   * @param  {string} key
		   * @return {Array}
		   */
		  sort: function sort(array, key) {
		    return array.sort(function (a, b) {
		      var x = a[key];
		      var y = b[key];

		      return x < y ? -1 : x > y ? 1 : 0;
		    });
		  },


		  /**
		   * moveUp
		   * @param  {Array} array
		   * @param  {string} value
		   * @param  {Array} by
		   * @return {Array}
		   */
		  moveUp: function moveUp(array, value, by) {
		    var index = array.indexOf(value);
		    var newPos = index - (by || 1);

		    if (index === -1) {
		      throw new Error('Element not found in array');
		    }

		    if (newPos < 0) {
		      newPos = 0;
		    }

		    array.splice(index, 1);
		    array.splice(newPos, 0, value);
		  },


		  /**
		   * moveDown
		   * @param  {Array} array
		   * @param  {string} value
		   * @param  {Array} by
		   * @return {Array}
		   */
		  moveDown: function moveDown(array, value, by) {
		    var index = array.indexOf(value);
		    var newPos = index + (by || 1);

		    if (index === -1) {
		      throw new Error('Element not found in array');
		    }

		    if (newPos >= this.length) {
		      newPos = this.length;
		    }

		    array.splice(index, 1);
		    array.splice(newPos, 0, value);
		  },


		  /**
		   * remove duplicateds
		   * @param  {Array} array
		   * @return {Array}
		   */
		  unique: function unique(array) {
		    var a = array.concat();
		    for (var i = 0; i < a.length; ++i) {
		      for (var j = i + 1; j < a.length; ++j) {
		        if (a[i] === a[j]) {
		          a.splice(j--, 1);
		        }
		      }
		    }

		    return a;
		  },


		  /**
		   * move array element into another position
		   * @see http://www.redips.net/javascript/array-move/
		   * @param  {Integer} pos1
		   * @param  {Integer} pos2
		   * @return {void}
		   */
		  move: function move(array, pos1, pos2) {
		    // local variables
		    var i, tmp;
		    // cast input parameters to integers
		    pos1 = parseInt(pos1, 10);
		    pos2 = parseInt(pos2, 10);
		    // if positions are different and inside array
		    if (pos1 !== pos2 && 0 <= pos1 && pos1 <= array.length && 0 <= pos2 && pos2 <= array.length) {
		      // save element from position 1
		      tmp = array[pos1];
		      // move element down and shift other elements up
		      if (pos1 < pos2) {
		        for (i = pos1; i < pos2; i++) {
		          array[i] = array[i + 1];
		        }
		      }
		      // move element up and shift other elements down
		      else {
		          for (i = pos1; i > pos2; i--) {
		            array[i] = array[i - 1];
		          }
		        }
		      // put element from position 1 to destination
		      array[pos2] = tmp;
		    }
		  }
		};

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		/**
		 * Date Utils
		 * @class Date
		 * @description minimal utils
		 * @author Bruno Santos, Jerome Vial
		 */
		exports.default = {

		  /**
		   * toShortText
		   * @param  {[type]} d [description]
		   * @return {[type]}   [description]
		   */
		  toShortText: function toShortText(d) {
		    var day = d.getDate();
		    var month = d.getMonth() + 1;
		    var year = d.getUTCFullYear();

		    if (day < 10) {
		      day = '0' + day;
		    }
		    if (month < 10) {
		      month = '0' + month;
		    }

		    var date = year + '-' + month + '-' + day;

		    return date;
		  },


		  /**
		   * [toSearch description]
		   * @param  {[type]} d [description]
		   * @return {[type]}   [description]
		   */
		  toSearch: function toSearch(d) {

		    var day = d.getDate();
		    var month = d.getMonth() + 1;
		    var year = d.getUTCFullYear();

		    if (day < 10) {
		      day = '0' + day;
		    }
		    if (month < 10) {
		      month = '0' + month;
		    }

		    var date = year + '-' + month + '-' + day;

		    return date;
		  },


		  /**
		   * [toTextWithTime description]
		   * @param  {[type]} string [description]
		   * @return {[type]}        [description]
		   */
		  toTextWithTime: function toTextWithTime(string) {

		    var d = new Date(string);

		    var day = d.getDate();
		    var month = d.getMonth() + 1;
		    var year = d.getUTCFullYear();

		    var hours = d.getHours();
		    var minutes = d.getMinutes();

		    if (minutes < 10) {
		      minutes = '0' + minutes;
		    }
		    if (minutes === 0) {
		      minutes = '00';
		    }

		    if (hours < 10) {
		      hours = '0' + hours;
		    }
		    if (hours === 0) {
		      hours = '00';
		    }

		    if (day < 10) {
		      day = '0' + day;
		    }
		    if (month < 10) {
		      month = '0' + month;
		    }

		    var date = day + '/' + month + '/' + year + ' ' + hours + 'h' + minutes;

		    return date;
		  },


		  /**
		   * [toText description]
		   * @param  {[type]} date [description]
		   * @return {[type]}      [description]
		   */
		  toText: function toText(date) {
		    var d = new Date(date);

		    var day = d.getDate();
		    var month = d.getMonth() + 1;
		    var year = d.getUTCFullYear();

		    if (day < 10) {
		      day = '0' + day;
		    }
		    if (month < 10) {
		      month = '0' + month;
		    }

		    return day + '/' + month + '/' + year;
		  },


		  /**
		   * [toJSON description]
		   * @param  {[type]} string [description]
		   * @return {[type]}        [description]
		   */
		  toJSON: function toJSON(string) {

		    var s = string.split(/ /);

		    var d = s[0].split(/\//);
		    var h = s[1].split(/:/);

		    var date = new Date(d[2], d[1] - 1, d[0], h[0], h[1]).toJSON();

		    return date;
		  },


		  /**
		   * [getWeekNumber description]
		   * @param  {[type]} d [description]
		   * @return {[type]}   [description]
		   */
		  getWeekNumber: function getWeekNumber(d) {
		    //_log.debug(d);
		    var target = new Date(d.valueOf());
		    var dayNr = (d.getDay() + 6) % 7;
		    target.setDate(target.getDate() - dayNr + 3);

		    var jan4 = new Date(target.getFullYear(), 0, 4);

		    var dayDiff = (target - jan4) / 86400000;
		    var weekNr = 1 + Math.ceil(dayDiff / 7);

		    return weekNr.toString();
		  }
		};

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		/**
		 * DOM Utils
		 * @class DOM
		 * @description minimal utils
		 * @author Bruno Santos, Jerome Vial
		 */
		exports.default = {

		  /**
		   * getAttrFirst
		   * @param  {DOMElement} element
		   * @param  {string} attribute
		   * @param  {number} level
		   * @return {DOMElement}
		   */
		  getAttrFirst: function getAttrFirst(element, attribute, level) {
		    if (!element || !attribute) {
		      return;
		    }

		    var el = null;

		    level = level || 20;

		    if (element.get(attribute)) {
		      el = element;
		    } else {
		      for (var i = 0; i < level; i++) {
		        element = element.getParent();
		        if (!element) {
		          break;
		        }

		        if (element.get(attribute)) {
		          el = element;
		          break;
		        }
		      }
		    }

		    return el;
		  },


		  /**
		   * getAttrFirstValue
		   * @param  {DOMElement} element
		   * @param  {string} attribute
		   * @param  {number} level
		   * @return {DOMElement}
		   */
		  getAttrFirstValue: function getAttrFirstValue(element, attribute, level) {
		    var el = this.getAttrFirst(element, attribute, level);
		    if (!el) {
		      return el;
		    } else {
		      return el.get(attribute);
		    }
		  }
		};

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _api = __webpack_require__(1);

		var _api2 = _interopRequireDefault(_api);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = {

		  /**
		   * filter
		   * @param  {Object} filters
		   * @param  {Object} infos
		   * @return {Object}
		   */
		  filter: function filter(filters, infos) {
		    //console.log('filter', filters, infos);

		    for (var filter in filters) {
		      if (!filters.hasOwnProperty(filter)) {
		        continue;
		      }
		      infos = this.processFilter(filters[filter], infos);
		    }

		    return infos;
		  },


		  /**
		   * process filter
		   * @param {Object} filter
		   * @param {Array} infos
		   * @return {Array}
		   */
		  processFilter: function processFilter(filter, infos) {
		    //console.log('processFilter', filter, infos);

		    var result = [];
		    var info;
		    var keyValue;

		    for (var j = 0; j < infos.length; j++) {
		      info = infos[j];

		      keyValue = _api2.default.deref(info, filter.key);

		      //console.log('keyValue', keyValue);

		      if (!keyValue) {
		        if (filter.type === 'boolean') {
		          keyValue = false;
		        } else {
		          continue;
		        }
		      }

		      var processInfo = this.processKey(filter, info, keyValue);
		      if (processInfo) {
		        result.push(info);
		      }
		    }

		    return result;
		  },


		  /**
		   * process key
		   * @param {Object} filter
		   * @param {Object} info
		   * @param {Array|boolean|Object} keyValue
		   * @return {boolean}
		   */
		  processKey: function processKey(filter, info, keyValue) {
		    //console.log('processKey', filter, info, keyValue);

		    switch (typeOf(keyValue)) {
		      case 'boolean':
		        if (keyValue === filter.value) {
		          return info;
		        }
		        break;
		      case 'array':
		        if (keyValue.indexOf(filter.value) > -1) {
		          return info;
		        }
		        break;
		      default:
		        /*allow to filter string fields using true*/
		        if (filter.value === true && keyValue) {
		          return info;
		        }

		        var regexp = new RegExp(filter.value, 'gi');
		        if (keyValue.match(regexp)) {
		          return info;
		        }
		    }

		    return false;
		  }
		}; /**
		    * Filter Util
		    * @class Filter
		    * @description minimal utils
		    * @author Bruno Santos, Jerome Vial
		    */

	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		/**
		 * Object Utils
		 * @class Object
		 * @description minimal utils
		 * @author Bruno Santos, Jerome Vial
		 */
		exports.default = {

		  /**
		   * setKey
		   * @param {string} key
		   * @param {Array|Object|string|number} val
		   * @param {Object} obj
		   */
		  setKey: function setKey(key, val, obj) {
		    if (!obj || !key) {
		      return;
		    }

		    var ka = key.split(/\./);

		    if (ka.length < 2) {
		      obj[ka[0]] = val;
		    } else {
		      if (!obj[ka[0]]) {
		        obj[ka[0]] = {};
		      }
		      obj = obj[ka.shift()];
		      this.setKey(ka.join('.'), val, obj);
		    }
		  },


		  /**
		   * checkKey
		   * @param  {string} key
		   * @param  {Object} obj
		   * @return {boolean}
		   */
		  checkKey: function checkKey(key, obj) {
		    if (!obj || !key) {
		      return;
		    }

		    var args = key.split(/\./);

		    for (var i = 0; i < args.length; i++) {
		      if (obj === null) {
		        obj = {};
		      }
		      if (!obj.hasOwnProperty(args[i])) {
		        return false;
		      }
		      obj = obj[args[i]];
		    }

		    return true;
		  },


		  /**
		   * getKey
		   * @param  {string} key
		   * @param  {Object} obj
		   * @return {Object|void}
		   */
		  getKey: function getKey(key, obj) {
		    if (!obj || !key) {
		      return;
		    }

		    var parts = key.split('.');
		    var last = parts.pop();
		    var l = parts.length;
		    var i = 1;
		    var current = parts[0];

		    while ((obj = obj[current]) && i < l) {
		      current = parts[i];
		      i++;
		    }

		    if (obj) {
		      return obj[last];
		    }
		  },


		  /**
		   * getSize
		   * @param  {Object} obj
		   * @return {number}
		   */
		  getSize: function getSize(obj) {
		    if (!obj) {
		      return;
		    }

		    var size = 0;
		    var key;

		    for (key in obj) {
		      if (obj.hasOwnProperty(key)) {
		        size++;
		      }
		    }

		    return size;
		  },


		  /**
		   * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
		   * @param {Object} obj1
		   * @param {Object} obj2
		   * @returns obj3 a new object based on obj1 and obj2
		   * @see http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
		   */
		  merge: function merge(obj1, obj2) {
		    var obj3 = {};
		    for (var attrname in obj1) {
		      obj3[attrname] = obj1[attrname];
		    }
		    for (var attrname in obj2) {
		      obj3[attrname] = obj2[attrname];
		    }
		    return obj3;
		  },


		  /**
		   * flatten nested object
		   * @param {Object} data
		   * @return {Object}
		   * @see http://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects
		   */
		  flatten: function flatten(data) {
		    var result = {};

		    function recurse(cur, prop) {
		      if (Object(cur) !== cur) {
		        result[prop] = cur;
		      } else if (Array.isArray(cur)) {
		        for (var i = 0, l = cur.length; i < l; i++) {
		          recurse(cur[i], prop + '[' + i + ']');
		        }
		        if (l == 0) {
		          result[prop] = [];
		        }
		      } else {
		        var isEmpty = true;
		        for (var p in cur) {
		          isEmpty = false;
		          recurse(cur[p], prop ? prop + '.' + p : p);
		        }
		        if (isEmpty && prop) {
		          result[prop] = {};
		        }
		      }
		    }
		    recurse(data, '');
		    return result;
		  }
		};

	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		exports.default = function (obj, callback) {
		  var methods = ['get', 'post', 'put', 'delete'];

		  callback = callback || function () {};

		  if (methods.indexOf(obj.method) === -1) {
		    obj.method = 'get';
		  }

		  new Request.JSON({
		    url: obj.url,
		    data: obj.data,
		    method: obj.method,
		    emulation: false,
		    onSuccess: function onSuccess(resp) {
		      //console.log(obj.method, obj.url, obj.data, resp);
		      callback(null, resp);
		      callback = function callback() {};
		    },
		    onError: function onError(text, error) {
		      console.log(text, error);
		      callback(error);
		      callback = function callback() {};
		    },
		    onFailure: function onFailure(xhr) {
		      console.log(xhr);
		      callback(xhr);
		      callback = function callback() {};
		    },
		    onCancel: function onCancel() {
		      console.log('canceled');
		      callback('canceled');
		      callback = function callback() {};
		    }
		  }).send();
		};

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
		                                                                                                                                                                                                                                                                               * Search Util
		                                                                                                                                                                                                                                                                               * @class Search
		                                                                                                                                                                                                                                                                               * @description minimal utils
		                                                                                                                                                                                                                                                                               * @author Bruno Santos, Jerome Vial
		                                                                                                                                                                                                                                                                               */


		var _array = __webpack_require__(2);

		var _array2 = _interopRequireDefault(_array);

		var _string = __webpack_require__(9);

		var _string2 = _interopRequireDefault(_string);

		var _date = __webpack_require__(3);

		var _date2 = _interopRequireDefault(_date);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = {

		  options: {
		    operator: 'AND',
		    keys: ['name'],
		    dates: ['created_date', 'modified_date']
		  },

		  /**
		   * search list of infos
		   * @param {string} str
		   * @param {Array} infos
		   * @return {Array}
		   */
		  search: function search(str, infos, opts) {
		    //console.log('search', str, infos, opts);

		    this.options.keys = opts.keys || this.options.keys;

		    if (_typeof(opts.dates) === 'object') {
		      this.options.dates = _array2.default.unique(this.options.dates.concat(opts.dates));
		    }

		    if (!str) {
		      return infos;
		    }

		    return this.searchByKeyword(str, infos);
		  },


		  /**
		   * Search By Keyword
		   * @param {string} keyword
		   * @param {Array} infos
		   * @return {Array}
		   */
		  searchByKeyword: function searchByKeyword(keyword, infos) {
		    //console.log('searchByKeyword');

		    if (!keyword) {
		      return;
		    }

		    var words = keyword.split(' ');

		    if (!words[words.length - 1]) {
		      words.pop();
		    }

		    for (var i = 0; i < words.length; i++) {
		      words[i] = _string2.default.removeAccents(words[i]);
		    }

		    return this.searchKeys(words, infos);
		  },


		  /**
		   * Search Keys
		   * @param {Array} words
		   * @param {infos} infos
		   * @return {infos}
		   */
		  searchKeys: function searchKeys(words, infos) {

		    var searchKeys = this.options.keys;
		    var result = [];

		    if (!searchKeys) {
		      //console.log('missing searchKeys');
		      return;
		    }

		    for (var i = 0, len = infos.length; i < len; i++) {
		      var value = '';
		      var info = infos[i];

		      for (var j = 0; j < searchKeys.length; j++) {
		        var key = searchKeys[j];

		        if (this.options.dates.indexOf(key) !== -1 && info[key]) {
		          value += ' ' + _date2.default.toText(info[key]);
		        } else {
		          var keys = key.split(/\./);
		          var v = '';

		          if (keys.length === 1) {
		            v = info[keys[0]];
		          }
		          if (keys.length === 2) {
		            if (info[keys[0]]) {
		              v = info[keys[0]][keys[1]];
		            }
		          }

		          value += ' ' + v;
		        }
		      }

		      value = _string2.default.removeAccents(value);
		      var r = this.searchValue(value, words, info);
		      if (r) {
		        result.push(r);
		      }
		    }

		    return result;
		  },


		  /**
		   * Search Value
		   * @param {Array} value
		   * @param {Array} words
		   * @param {Object} info
		   */
		  searchValue: function searchValue(value, words, info) {
		    var operator = this.options.operator || 'AND';

		    for (var i = 0; i < words.length; i++) {
		      if (operator === 'AND' && value.indexOf(words[i]) === -1) {
		        return;
		      } else if (operator === 'OR' && value.indexOf(words[i]) !== -1) {
		        return info;
		      }
		    }

		    if (operator === 'AND') {
		      return info;
		    }
		  }
		};

	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		/**
		 * String Utils
		 * @class String
		 * @description minimal utils
		 * @author Bruno Santos, Jerome Vial
		 */
		exports.default = {

		  /**
		   * basic method to remove accents
		   * @param  {string} str
		   * @return {string}
		   */
		  removeAccents: function removeAccents(str) {
		    if (!str) {
		      return;
		    }

		    str = str.toLowerCase();

		    str = str.replace(/è|é|ë|ê|ě/g, 'e');
		    str = str.replace(/à|á|ä|â/g, 'a');
		    str = str.replace(/ù|ú|ü|û/g, 'u');
		    str = str.replace(/ò|ó|ö|ô/g, 'o');
		    str = str.replace(/ì|í|ï|î/g, 'i');
		    str = str.replace(/ç|¢/g, 'i');
		    str = str.replace(/[^\w|\/|\-|\.]/g, '_');

		    return str;
		  },


		  /**
		   * urlify
		   * @param  {string} str
		   * @return {string}
		   */
		  urlify: function urlify(str) {
		    if (!str) {
		      return;
		    }

		    str = this.removeAccents(str);
		    str = str.replace(/[^\w|\/|\-|\.]/g, '_');

		    return str;
		  },


		  /**
		   * convert HTML
		   * @param  {string} str
		   * @return {DOMElement}
		   */
		  convertHTML: function convertHTML(str) {
		    if (!str) {
		      return;
		    }

		    var temp = document.createElement('pre');
		    temp.innerHTML = str;

		    return temp.firstChild.nodeValue;
		  },


		  /**
		   * remove tags
		   * @param  {string} html
		   * @return {string}
		   */
		  removeTags: function removeTags(html) {
		    if (!html) {
		      return;
		    }

		    html = html.replace(/&(lt|gt);/g, function (strMatch, p1) {
		      return p1 == 'lt' ? '<' : '>';
		    });

		    var text = html.replace(/<\/?[^>]+(>|$)/g, '');

		    return text;
		  }
		};

	/***/ },
	/* 10 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		/**
		 * URL Utils
		 * @class URL
		 * @description minimal utils
		 * @author Bruno Santos, Jerome Vial
		 */
		exports.default = {

		  /**
		   * validate url
		   * @param  {string} str
		   * @return {bollean}
		   * @see http://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-an-url
		   */
		  validate: function validate(str) {
		    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
		    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
		    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
		    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
		    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
		    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
		    return pattern.test(str);
		  }
		};

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('ui-layout-resize').defineLevel();

	exports.default = new Class({

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
	   * init resize border
	   * @param  {Object} component
	   * @return {void}
	   */
	  _initResizer: function _initResizer(component) {
	    _log.debug('_initResizer', component);

	    var self = this;

	    var name = component.options.name;
	    var container = component.container;
	    var last = component.options.last;

	    this._initMaximize(component);

	    if (!container) {
	      return;
	    }

	    var direction = container.getStyle('flex-direction');

	    if (!direction) {
	      return;
	    }

	    var modifier = this.options.resizer.modifier[direction];

	    if (!modifier) {
	      return;
	    }

	    var resizer = this.resizer[name] = new Element('div', {
	      'class': 'ui-resizer',
	      'data-name': component.options.name
	    }).addEvents({
	      click: function click(e) {
	        e.stop();
	      },
	      mousedown: function mousedown(e) {
	        e.stop();
	        self.mask.setStyle('display', 'block');
	      },
	      mouseup: function mouseup(e) {
	        //e.stop();
	        self.mask.setStyle('display', 'none');
	      }
	    }).inject(container);

	    if (modifier.size) {
	      resizer.addClass('resizer-' + modifier.size);
	    }

	    if (last) {
	      _log.debug('------last');
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
	  _initResizerDrag: function _initResizerDrag(resizer, modifier, component) {
	    _log.debug('initResizerDrag', resizer, modifier, component);

	    var self = this;
	    var element = component.element;
	    var container = component.container;
	    var last = component.options.last;

	    var drag = new Drag.Move(resizer, {
	      modifiers: modifier.mode,
	      onStart: function onStart(el) {
	        //_log.debug('onStart', el);
	        //self.fireEvent('resizeStart', el);
	        self.mask.setStyle('display', 'block');
	      },
	      onDrag: function onDrag(el) {
	        _log.debug('onDrag', el);

	        self.mask.setStyle('display', 'block');
	        var coord = element.getCoordinates(container);
	        var coordc = container.getCoordinates();
	        var c = resizer.getCoordinates(container);

	        //element.setStyle('flex','none');
	        //element.setStyle(modifier.size, c[modifier.from] - coord[modifier.from]);
	        if (last) {
	          //_log.debug(modifier.size, coordc[modifier.size], c[modifier.from]);
	          element.setStyle(modifier.size, coordc[modifier.size] - c[modifier.from]);
	        } else {
	          element.setStyle(modifier.size, c[modifier.from] - coord[modifier.from]);
	        }

	        self.fireEvent('drag');
	      },
	      onComplete: function onComplete(el) {
	        _log.debug('onComplete', el);

	        self.mask.setStyle('display', 'none');
	        //_log.debug('onComplete', component.main, modifier.size, size);
	        //_log.debug('onComplete', modifier.size, element.getCoordinates(container)[modifier.size]);
	        //var coord = element.getCoordinates(container);
	        var size = element.getCoordinates(container)[modifier.size];
	        self.fireEvent('resizer', [component.main, modifier.size, size]);
	        component.fireEvent('resizeComplete', [modifier.size, size]);

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
	  _initResizerEvent: function _initResizerEvent(component, resizer, modifier) {
	    _log.debug('_initResizerEvent', component, resizer, modifier);

	    var self = this;

	    this.addEvents({
	      drag: function drag() {
	        //_log.debug('drag', e);
	        self._updateSize(component, resizer, modifier);
	      },
	      maximize: function maximize() {
	        //_log.debug(direction);
	        self._updateSize(component, resizer, modifier);
	      },
	      normalize: function normalize() {
	        //_log.debug(direction);
	        self._updateSize(component, resizer, modifier);
	      },
	      resize: function resize() {
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
	  _updateSize: function _updateSize(component, resizer, modifier) {
	    _log.debug('_updazeSize', component, resizer, modifier);

	    var container = component.container;
	    var element = component.element;

	    var coord = element.getCoordinates(container);
	    //_log.debug('coord',  coord[modifier.from]);
	    //
	    // the last container doesnt need resizedr
	    if (component.options.last) {
	      resizer.setStyle(modifier.from, coord[modifier.from] - 3);
	    } else {
	      resizer.setStyle(modifier.from, coord[modifier.from] + coord[modifier.size] - 3);
	    }

	    this.fireEvent('size');
	  },

	  /**
	   * Init maximisation. dblclick trigger the toggle
	   * @param  {[type]} component [description]
	   * @return {[type]}           [description]
	   */
	  _initMaximize: function _initMaximize(component) {
	    _log.debug('_initMaximize', component);

	    var self = this;
	    var element = component.element;
	    var container = component.container;

	    if (!container) {
	      return;
	    }

	    component.addEvent('max', function () {
	      var name = component.options.name;

	      _log.debug('max', component);
	      if (element.hasClass('container-max')) {
	        element.removeClass('container-max');
	        container.getChildren('.ui-container').each(function (c) {
	          c.setStyle('display', c.retrieve('display'));
	        });

	        element.setStyle('width', element.retrieve('width'));
	        element.setStyle('height', element.retrieve('height'));

	        self.fireEvent('normalize', component);
	      } else {
	        element.addClass('container-max');
	        element.store('width', element.getStyle('width'));
	        element.store('height', element.getStyle('height'));
	        element.setStyle('width', 'initial');
	        element.setStyle('height', 'initial');
	        container.getChildren('.ui-container').each(function (c) {
	          if (!c.hasClass('container-' + name)) {
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
	  _initResizers: function _initResizers(components) {
	    _log.debug('_initResizers', components);

	    var len = components.length;

	    // add resize Border on the right or on the bottom
	    // execpt for the last one
	    for (var i = 0; i < len; i++) {
	      var component = components[i];

	      if (component.options.noResizer) {
	        continue;
	      }

	      this._initResizer(component);
	    }
	  }

	});

/***/ }
/******/ ])
});
;