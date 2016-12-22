(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define("date", ["moment"], factory);
	else if(typeof exports === 'object')
		exports["date"] = factory(require("moment"));
	else
		root["caoutchouc"] = root["caoutchouc"] || {}, root["caoutchouc"]["date"] = factory(root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_58__) {
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

	module.exports = __webpack_require__(79);


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

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _control = __webpack_require__(4);

	var _control2 = _interopRequireDefault(_control);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-control-field');

	exports.default = new Class({

	  Extends: _control2.default,

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
	        //'input.keydown': '_onKeyDown',
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
	  _initElement: function _initElement() {
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
	  _initLabel: function _initLabel() {
	    var text = this.options.name;

	    if (this.options.useTextAsLabel) {
	      text = this.options.text;
	    }

	    this.label = new Element('label', {
	      html: text,
	      'for': this.options.name
	    }).inject(this.element);
	  },

	  /**
	   * [_initInput description]
	   * @return {[type]} [description]
	   */
	  _initInput: function _initInput() {
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
	  _initName: function _initName(name) {
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
	  _initValue: function _initValue() {
	    var opts = this.options;

	    //create a new div as input element
	    if (opts.value) {
	      this.setValue(opts.value);
	    }
	  },

	  /**
	   * [getValue description]
	   * @return {[type]} [description]
	   */
	  getValue: function getValue() {
	    return this.input.get('value');
	  },

	  /**
	   * [setValue description]
	   * @param {[type]} value [description]
	   */
	  setValue: function setValue(value) {
	    this.input.set('value', value);
	    this.value = value;
	    this.fireEvent('change', value);
	  },

	  /**
	   * [_initEvents description]
	   * @return {[type]} [description]
	   */
	  _initEvents: function _initEvents() {
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
	  _onKeyUp: function _onKeyUp(e) {
	    this.fireEvent('change', this.get('value'));
	  },

	  /**
	   * [_onKeyUp description]
	   * @return {[type]} [description]
	   */
	  onKeyDown: function onKeyDown(e) {
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
	  _onMouseDown: function _onMouseDown(e) {
	    //_log.debug('mousedown');

	    if (this.readonly) {
	      return;
	    }

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
	  _onFocus: function _onFocus(e) {
	    //_log.debug('focus');

	    if (this.readonly) {
	      return;
	    }

	    this.isFocused = true;
	    this.setState('focus');
	    this._inputFocus(e);
	  },

	  /**
	   * [_onBlur description]
	   * @return {[type]} [description]
	   */
	  _onBlur: function _onBlur(e) {
	    //_log.debug('_onBlur');

	    if (this.readonly) {
	      return;
	    }

	    this.setState(null);
	    this._hideInk();
	    this.isFocused = false;
	  },

	  /**
	   * [_inputFocus description]
	   * @param  {event} e [description]
	   * @return {[type]}   [description]
	   */
	  _inputFocus: function _inputFocus(e) {
	    //_log.debug('_inputFocus', e);

	    this.fireEvent('mousedown');

	    this._showInk(e);

	    this.isFocused = true;
	  },

	  /**
	   * [_initInk description]
	   * @return {[type]} [description]
	   */
	  _initInk: function _initInk() {
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
	  _showInk: function _showInk(e) {
	    //_log.debug('_showInk');

	    if (this.readonly) {
	      return;
	    }

	    //if (this.ink) return;

	    var coord = this.input.getCoordinates(this.element);

	    var x = coord.width / 2;

	    if (e === 0) {
	      x = 0;
	    } else if (e && e.event && e.event.offsetX) {
	      x = e.event.offsetX;
	    }

	    var size = coord.width;
	    //var top = 0;

	    if (!this.ink) {
	      this._initInk();
	    }

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
	  _setInk: function _setInk(e) {

	    if (this.readonly) {
	      return;
	    }

	    //if (this.ink) return;

	    var coord = this.input.getCoordinates(this.element);

	    //var x = coord.width / 2;

	    var size = coord.width;
	    //var top = 0;

	    if (!this.ink) {
	      this._initInk();
	    }

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
	  _hideInk: function _hideInk() {
	    var self = this;
	    var coord = this.input.getCoordinates(this.element);
	    var size = coord.width / 2;

	    if (!this.inkFx) {
	      //_log.debug('errorrrrrrr');
	      return;
	    }

	    this.inkFx.start({
	      width: 0,
	      left: size,
	      top: coord.top + coord.height - 2,
	      bottom: 'initial',
	      opacity: 0
	    });

	    (function () {
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
	  _initError: function _initError() {
	    this.error = new Element('span', {
	      class: 'error-message'
	    }).inject(this.element);
	  },

	  /**
	   * [set description]
	   * @param {[type]} name  [description]
	   * @param {[type]} value [description]
	   */
	  set: function set(value) {
	    //_log.debug('set', value);

	    this.input.set('value', value);
	    this.fireEvent('change', value);
	  },

	  /**
	   * [setError description]
	   * @param {[type]} error [description]
	   */
	  setError: function setError(error) {

	    if (error) {
	      this.element.addClass('field-error');
	      if (this.error) {
	        this.error.set('html', error);
	      }
	    } else {
	      if (this.error) {
	        this.element.removeClass('field-error');
	      }
	      if (this.error) {
	        this.error.set('html', '');
	      }
	    }
	  }

	});

/***/ },

/***/ 58:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(41);

	var _field2 = _interopRequireDefault(_field);

	var _moment = __webpack_require__(58);

	var _moment2 = _interopRequireDefault(_moment);

	__webpack_require__(80);

	__webpack_require__(81);

	__webpack_require__(83);

	__webpack_require__(84);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-control-date').defineLevel();

	exports.default = new Class({

	  Extends: _field2.default,

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
	      positionOffset: {
	        x: 0,
	        y: 5
	      },
	      pickerClass: 'datepicker_bootstrap',
	      format: 'b'
	    }
	  },

	  /**
	   * _initInput
	   * @return {void}
	   */
	  _initInput: function _initInput() {
	    var opts = this.options;

	    _log.debug('input option', opts.read, opts.name);

	    this.element.addClass('field-date');
	    this.element.addClass('icon-text');

	    this.input = new Element('input', {
	      //readonly: 'readonly',
	      name: opts.name,
	      type: 'text',
	      class: 'date-input'
	    }).inject(this.element);

	    this.input.set('placeholder', opts.text);

	    if (opts.read) {
	      this.input.set('readonly', 'readonly');
	    }

	    /*this.icon = new Element('span', {
	      'class': 'fa fa-calendar'
	    }).inject(this.element);*/

	    if (!opts.read) {
	      this._initPicker();
	    }

	    //this.picker.detach(this.input);

	    this.text = new Element('input', {
	      'class': 'date-text',
	      type: 'text'
	    }).inject(this.element);

	    if (opts.value) {
	      this.set(opts.value);
	    }
	  },

	  /**
	   * _initPicker
	   * @return {void}
	   */
	  _initPicker: function _initPicker() {

	    var self = this;
	    var opts = this.options;
	    var options = opts.picker;

	    options.pickOnly = this.options.pickOnly || false;

	    /**
	     * @ignore
	     */
	    options.onShow = function () {
	      _log.debug('picker date show');

	      /*when the picker open,
	      set the last selected date
	      to open the picker in the right date*/
	      var val = self.text.get('value');
	      self.input.setStyle('visibility', 'hidden');
	      self.input.set('value', val);
	      setTimeout(function () {
	        self.set(val);
	        self.input.setStyle('visibility', 'initial');
	      }, 0);
	    };

	    /**
	     * @ignore
	     */
	    options.onHide = function () {
	      _log.debug('picker date hide');
	    };

	    this.picker = new Picker.Date(this.input, options);

	    //_log.debug('pickcer', this.picker);
	  },

	  /**
	   * Set control relative behavior (blur and focus)
	   * @return {void}
	   */
	  _initEvents: function _initEvents() {
	    if (this.options.read) {
	      return;
	    }

	    var self = this;

	    this.picker.addEvents({
	      select: function select(date) {
	        self.set(date);
	        self.fireEvent('change', date);
	      }
	    });
	  },

	  /**
	   * set
	   * @param {string} d
	   */
	  set: function set(d) {
	    _log.debug('set', d);

	    if (!d) {
	      _log.warn('missing date value', d);
	      return;
	    }

	    var opts = this.options;
	    var text = (0, _moment2.default)(d).format(opts.format);
	    var date = (0, _moment2.default)(d).toISOString();

	    if (this.picker && this.picker.options.pickOnly === 'months') {
	      text = (0, _moment2.default)(d).format('MMMM YYYY');
	    }

	    _log.debug('text:', text, 'date:', date);

	    this.input.set('value', text);
	    this.input.set('placeholder', opts.text);
	    this.text.set('value', date);
	  },

	  /**
	   * empty
	   * @return {Object}
	   */
	  empty: function empty() {
	    this.input.set('value', '');
	    this.input.set('placeholder', this.options.text);
	    this.text.set('value', '');

	    return this;
	  }

	});

/***/ },

/***/ 80:
/***/ function(module, exports) {

	/*
	---
	name: Locale.en-US.DatePicker
	description: English Language File for DatePicker
	authors: Arian Stolwijk
	requires: [More/Locale]
	provides: Locale.en-US.DatePicker
	...
	*/


	Locale.define('en-US', 'DatePicker', {
		select_a_time: 'Select a time',
		use_mouse_wheel: 'Use the mouse wheel to quickly change value',
		time_confirm_button: 'OK',
		apply_range: 'Apply',
		cancel: 'Cancel',
		week: 'Wk'
	});


/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Picker"] = __webpack_require__(82);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 82:
/***/ function(module, exports) {

	/*
	---
	name: Picker
	description: Creates a Picker, which can be used for anything
	authors: Arian Stolwijk
	requires: [Core/Element.Dimensions, Core/Fx.Tween, Core/Fx.Transitions]
	provides: Picker
	...
	*/


	var Picker = new Class({

		Implements: [Options, Events],

		options: {/*
			onShow: function(){},
			onOpen: function(){},
			onHide: function(){},
			onClose: function(){},*/

			pickerClass: 'datepicker',
			inject: null,
			animationDuration: 400,
			useFadeInOut: true,
			positionOffset: {x: 0, y: 0},
			pickerPosition: 'bottom',
			draggable: true,
			showOnInit: true,
			columns: 1,
			footer: false
		},

		initialize: function(options){
			this.setOptions(options);
			this.constructPicker();
			if (this.options.showOnInit) this.show();
		},

		constructPicker: function(){
			var options = this.options;

			var picker = this.picker = new Element('div', {
				'class': options.pickerClass,
				styles: {
					left: 0,
					top: 0,
					display: 'none',
					opacity: 0
				}
			}).inject(options.inject || document.body);
			picker.addClass('column_' + options.columns);

			if (options.useFadeInOut){
				picker.set('tween', {
					duration: options.animationDuration,
					link: 'cancel'
				});
			}

			// Build the header
			var header = this.header = new Element('div.header').inject(picker);

			var title = this.title = new Element('div.title').inject(header);
			var titleID = this.titleID = 'pickertitle-' + String.uniqueID();
			this.titleText = new Element('div', {
				'role': 'heading',
				'class': 'titleText',
				'id': titleID,
				'aria-live': 'assertive',
				'aria-atomic': 'true'
			}).inject(title);

			this.closeButton = new Element('div.closeButton[text=x][role=button]')
				.addEvent('click', this.close.pass(false, this))
				.inject(header);

			// Build the body of the picker
			var body = this.body = new Element('div.body').inject(picker);

			if (options.footer){
				this.footer = new Element('div.footer').inject(picker);
				picker.addClass('footer');
			}

			// oldContents and newContents are used to slide from the old content to a new one.
			var slider = this.slider = new Element('div.slider', {
				styles: {
					position: 'absolute',
					top: 0,
					left: 0
				}
			}).set('tween', {
				duration: options.animationDuration,
				transition: Fx.Transitions.Quad.easeInOut
			}).inject(body);

			this.newContents = new Element('div', {
				styles: {
					position: 'absolute',
					top: 0,
					left: 0
				}
			}).inject(slider);

			this.oldContents = new Element('div', {
				styles: {
					position: 'absolute',
					top: 0
				}
			}).inject(slider);

			this.originalColumns = options.columns;
			this.setColumns(options.columns);

			// IFrameShim for select fields in IE
			var shim = this.shim = window['IframeShim'] ? new IframeShim(picker) : null;

			// Dragging
			if (options.draggable && typeOf(picker.makeDraggable) == 'function'){
				this.dragger = picker.makeDraggable(shim ? {
					onDrag: shim.position.bind(shim)
				} : null);
				picker.setStyle('cursor', 'move');
			}
		},

		open: function(noFx){
			if (this.opened == true) return this;
			this.opened = true;
			var self = this,
				picker = this.picker.setStyle('display', 'block').set('aria-hidden', 'false')
			if (this.shim) this.shim.show();
			this.fireEvent('open');
			if (this.options.useFadeInOut && !noFx){
				picker.get('tween').start('opacity', 1).chain(function(){
					self.fireEvent('show');
					this.callChain();
				});
			} else {
				picker.setStyle('opacity', 1);
				this.fireEvent('show');
			}
			return this;
		},

		show: function(){
			return this.open(true);
		},

		close: function(noFx){
			if (this.opened == false) return this;
			this.opened = false;
			this.fireEvent('close');
			var self = this, picker = this.picker, hide = function(){
				picker.setStyle('display', 'none').set('aria-hidden', 'true');
				if (self.shim) self.shim.hide();
				self.fireEvent('hide');
			};
			if (this.options.useFadeInOut && !noFx){
				picker.get('tween').start('opacity', 0).chain(hide);
			} else {
				picker.setStyle('opacity', 0);
				hide();
			}
			return this;
		},

		hide: function(){
			return this.close(true);
		},

		toggle: function(){
			return this[this.opened == true ? 'close' : 'open']();
		},

		destroy: function(){
			this.picker.destroy();
			if (this.shim) this.shim.destroy();
		},

		position: function(x, y){
			var offset = this.options.positionOffset,
				scroll = document.getScroll(),
				size = document.getSize(),
				pickersize = this.picker.getSize();

			if (typeOf(x) == 'element'){
				var element = x,
					where = y || this.options.pickerPosition;

				var elementCoords = element.getCoordinates();

				x = (where == 'left') ? elementCoords.left - pickersize.x
					: (where == 'bottom' || where == 'top') ? elementCoords.left
					: elementCoords.right
				y = (where == 'bottom') ? elementCoords.bottom
					: (where == 'top') ? elementCoords.top - pickersize.y
					: elementCoords.top;
			}

			x += offset.x * ((where && where == 'left') ? -1 : 1);
			y += offset.y * ((where && where == 'top') ? -1: 1);

			if ((x + pickersize.x) > (size.x + scroll.x)) x = (size.x + scroll.x) - pickersize.x;
			if ((y + pickersize.y) > (size.y + scroll.y)) y = (size.y + scroll.y) - pickersize.y;
			if (x < 0) x = 0;
			if (y < 0) y = 0;

			this.picker.setStyles({
				left: x,
				top: y
			});
			if (this.shim) this.shim.position();
			return this;
		},

		setBodySize: function(){
			var bodysize = this.bodysize = this.body.getSize();

			this.slider.setStyles({
				width: 2 * bodysize.x,
				height: bodysize.y
			});
			this.oldContents.setStyles({
				left: bodysize.x,
				width: bodysize.x,
				height: bodysize.y
			});
			this.newContents.setStyles({
				width: bodysize.x,
				height: bodysize.y
			});
		},

		setColumnContent: function(column, content){
			var columnElement = this.columns[column];
			if (!columnElement) return this;

			var type = typeOf(content);
			if (['string', 'number'].contains(type)) columnElement.set('text', content);
			else columnElement.empty().adopt(content);

			return this;
		},

		setColumnsContent: function(content, fx){
			var old = this.columns;
			this.columns = this.newColumns;
			this.newColumns = old;

			content.forEach(function(_content, i){
				this.setColumnContent(i, _content);
			}, this);
			return this.setContent(null, fx);
		},

		setColumns: function(columns){
			var _columns = this.columns = new Elements, _newColumns = this.newColumns = new Elements;
			for (var i = columns; i--;){
				_columns.push(new Element('div.column').addClass('column_' + (columns - i)));
				_newColumns.push(new Element('div.column').addClass('column_' + (columns - i)));
			}

			var oldClass = 'column_' + this.options.columns, newClass = 'column_' + columns;
			this.picker.removeClass(oldClass).addClass(newClass);

			this.options.columns = columns;
			return this;
		},

		setContent: function(content, fx){
			if (content) return this.setColumnsContent([content], fx);

			// swap contents so we can fill the newContents again and animate
			var old = this.oldContents;
			this.oldContents = this.newContents;
			this.newContents = old;
			this.newContents.empty();

			this.newContents.adopt(this.columns);

			this.setBodySize();

			if (fx){
				this.fx(fx);
			} else {
				this.slider.setStyle('left', 0);
				this.oldContents.setStyles({left: 0, opacity: 0});
				this.newContents.setStyles({left: 0, opacity: 1});
			}
			return this;
		},

		fx: function(fx){
			var oldContents = this.oldContents,
				newContents = this.newContents,
				slider = this.slider,
				bodysize = this.bodysize;
			if (fx == 'right'){
				oldContents.setStyles({left: 0, opacity: 1});
				newContents.setStyles({left: bodysize.x, opacity: 1});
				slider.setStyle('left', 0).tween('left', 0, -bodysize.x);
			} else if (fx == 'left'){
				oldContents.setStyles({left: bodysize.x, opacity: 1});
				newContents.setStyles({left: 0, opacity: 1});
				slider.setStyle('left', -bodysize.x).tween('left', -bodysize.x, 0);
			} else if (fx == 'fade'){
				slider.setStyle('left', 0);
				oldContents.setStyle('left', 0).set('tween', {
					duration: this.options.animationDuration / 2
				}).tween('opacity', 1, 0).get('tween').chain(function(){
					oldContents.setStyle('left', bodysize.x);
				});
				newContents.setStyles({opacity: 0, left: 0}).set('tween', {
					duration: this.options.animationDuration
				}).tween('opacity', 0, 1);
			}
		},

		toElement: function(){
			return this.picker;
		},

		setTitle: function(content, fn){
			if (!fn) fn = Function.from;
			this.titleText.empty().adopt(
				Array.convert(content).map(function(item, i){
					return typeOf(item) == 'element'
						? item
						: new Element('div.column', {text: fn(item, this.options)}).addClass('column_' + (i + 1));
				}, this)
			);
			return this;
		},

		setTitleEvent: function(fn){
			this.titleText.removeEvents('click');
			if (fn) this.titleText.addEvent('click', fn);
			this.titleText.setStyle('cursor', fn ? 'pointer' : '');
			return this;
		}

	});


	/*** EXPORTS FROM exports-loader ***/
	module.exports = Picker;

/***/ },

/***/ 83:
/***/ function(module, exports) {

	/*
	---
	name: Picker.Attach
	description: Adds attach and detach methods to the Picker, to attach it to element events
	authors: Arian Stolwijk
	requires: [Picker, Core/Element.Event]
	provides: Picker.Attach
	...
	*/


	Picker.Attach = new Class({

		Extends: Picker,

		options: {/*
			onAttached: function(event){},

			toggleElements: null, // deprecated
			toggle: null, // When set it deactivate toggling by clicking on the input */
			togglesOnly: true, // set to false to always make calendar popup on input element, if true, it depends on the toggles elements set.
			showOnInit: false, // overrides the Picker option
			blockKeydown: true
		},

		initialize: function(attachTo, options){
			this.parent(options);

			this.attachedEvents = [];
			this.attachedElements = [];
			this.toggles = [];
			this.inputs = [];

			var documentEvent = function(event){
				if (this.attachedElements.contains(event.target)) return;
				this.close();
			}.bind(this);
			var document = this.picker.getDocument().addEvent('click', documentEvent);

			var preventPickerClick = function(event){
				event.stopPropagation();
				return false;
			};
			this.picker.addEvent('click', preventPickerClick);

			// Support for deprecated toggleElements
			if (this.options.toggleElements) this.options.toggle = document.getElements(this.options.toggleElements);

			this.attach(attachTo, this.options.toggle);
		},

		attach: function(attachTo, toggle){
			if (typeOf(attachTo) == 'string') attachTo = document.id(attachTo);
			if (typeOf(toggle) == 'string') toggle = document.id(toggle);

			var elements = Array.convert(attachTo),
				toggles = Array.convert(toggle),
				allElements = [].append(elements).combine(toggles),
				self = this;

			var closeEvent = function(event){
				var stopInput = self.options.blockKeydown
						&& event.type == 'keydown'
						&& !(['tab', 'esc'].contains(event.key)),
					isCloseKey = event.type == 'keydown'
						&& (['tab', 'esc'].contains(event.key)),
					isA = event.target.get('tag') == 'a';

				if (stopInput || isA) event.preventDefault();
				if (isCloseKey || isA) self.close();
			};

			var getOpenEvent = function(element){
				return function(event){
					var tag = event.target.get('tag');
					if (tag == 'input' && event.type == 'click' && !element.match(':focus') || (self.opened && self.input == element)) return;
					if (tag == 'a') event.stop();
					self.position(element);
					self.open();
					self.fireEvent('attached', [event, element]);
				};
			};

			var getToggleEvent = function(open, close){
				return function(event){
					if (self.opened) close(event);
					else open(event);
				};
			};

			allElements.each(function(element){

				// The events are already attached!
				if (self.attachedElements.contains(element)) return;

				var events = {},
					tag = element.get('tag'),
					openEvent = getOpenEvent(element),
					// closeEvent does not have a depency on element
					toggleEvent = getToggleEvent(openEvent, closeEvent);

				if (tag == 'input'){
					// Fix in order to use togglers only
					if (!self.options.togglesOnly || !toggles.length){
						events = {
							focus: openEvent,
							click: openEvent,
							keydown: closeEvent
						};
					}
					self.inputs.push(element);
				} else {
					if (toggles.contains(element)){
						self.toggles.push(element);
						events.click = toggleEvent
					} else {
						events.click = openEvent;
					}
				}
				element.addEvents(events);
				self.attachedElements.push(element);
				self.attachedEvents.push(events);
			});
			return this;
		},

		detach: function(attachTo, toggle){
			if (typeOf(attachTo) == 'string') attachTo = document.id(attachTo);
			if (typeOf(toggle) == 'string') toggle = document.id(toggle);

			var elements = Array.convert(attachTo),
				toggles = Array.convert(toggle),
				allElements = [].append(elements).combine(toggles),
				self = this;

			if (!allElements.length) allElements = self.attachedElements;

			allElements.each(function(element){
				var i = self.attachedElements.indexOf(element);
				if (i < 0) return;

				var events = self.attachedEvents[i];
				element.removeEvents(events);
				delete self.attachedEvents[i];
				delete self.attachedElements[i];

				var toggleIndex = self.toggles.indexOf(element);
				if (toggleIndex != -1) delete self.toggles[toggleIndex];

				var inputIndex = self.inputs.indexOf(element);
				if (toggleIndex != -1) delete self.inputs[inputIndex];
			});
			return this;
		},

		destroy: function(){
			this.detach();
			return this.parent();
		}

	});


/***/ },

/***/ 84:
/***/ function(module, exports) {

	/*
	---
	name: Picker.Date
	description: Creates a DatePicker, can be used for picking years/months/days and time, or all of them
	authors: Arian Stolwijk
	requires: [Picker, Picker.Attach, Locale.en-US.DatePicker, More/Locale, More/Date]
	provides: Picker.Date
	...
	*/


	(function(){

	this.DatePicker = Picker.Date = new Class({

		Extends: Picker.Attach,

		options: {/*
			onSelect: function(date){},

			minDate: new Date('3/4/2010'), // Date object or a string
			maxDate: new Date('3/4/2011'), // same as minDate
			availableDates: {}, //
			invertAvailable: false,

			format: null,*/

			timePicker: false,
			timePickerOnly: false, // deprecated, use onlyView = 'time'
			timeWheelStep: 1, // 10,15,20,30

			yearPicker: true,
			yearsPerPage: 20,

			startDay: 1, // Sunday (0) through Saturday (6) - be aware that this may affect your layout, since the days on the right might have a different margin
			rtl: false,

			startView: 'days', // allowed values: {time, days, months, years}
			openLastView: false,
			pickOnly: false, // 'years', 'months', 'days', 'time'
			canAlwaysGoUp: ['months', 'days'],
			updateAll : false, //whether or not to update all inputs when selecting a date

			weeknumbers: false,

			// if you like to use your own translations
			months_abbr: null,
			days_abbr: null,
			years_title: function(date, options){
				var year = date.get('year');
				return year + '-' + (year + options.yearsPerPage - 1);
			},
			months_title: function(date, options){
				return date.get('year');
			},
			days_title: function(date, options){
				return date.format('%b %Y');
			},
			time_title: function(date, options){
				return (options.pickOnly == 'time') ? Locale.get('DatePicker.select_a_time') : date.format('%d %B, %Y');
			}
		},

		initialize: function(attachTo, options){
			this.parent(attachTo, options);

			this.setOptions(options);
			options = this.options;

			// If we only want to use one picker / backwards compatibility
			['year', 'month', 'day', 'time'].some(function(what){
				if (options[what + 'PickerOnly']){
					options.pickOnly = what;
					return true;
				}
				return false;
			});
			if (options.pickOnly){
				options[options.pickOnly + 'Picker'] = true;
				options.startView = options.pickOnly;
			}

			// backward compatibility for startView
			var newViews = ['days', 'months', 'years'];
			['month', 'year', 'decades'].some(function(what, i){
				return (options.startView == what) && (options.startView = newViews[i]);
			});

			options.canAlwaysGoUp = options.canAlwaysGoUp ? Array.convert(options.canAlwaysGoUp) : [];

			// Set the min and max dates as Date objects
			if (options.minDate){
				if (!(options.minDate instanceof Date)) options.minDate = Date.parse(options.minDate);
				options.minDate.clearTime();
			}
			if (options.maxDate){
				if (!(options.maxDate instanceof Date)) options.maxDate = Date.parse(options.maxDate);
				options.maxDate.clearTime();
			}

			if (!options.format){
				options.format = (options.pickOnly != 'time') ? Locale.get('Date.shortDate') : '';
				if (options.timePicker) options.format = (options.format) + (options.format ? ' ' : '') + Locale.get('Date.shortTime');
			}

			// Some link or input has fired an event!
			this.addEvent('attached', function(event, element){

				// This is where we store the selected date
				if (!this.currentView || !options.openLastView) this.currentView = options.startView;

				this.date = limitDate(new Date(), options.minDate, options.maxDate);
				var tag = element.get('tag'), input;
				if (tag == 'input') input = element;
				else {
					var index = this.toggles.indexOf(element);
					if (this.inputs[index]) input = this.inputs[index];
				}
				this.getInputDate(input);
				this.input = input;
				this.setColumns(this.originalColumns);
			}.bind(this), true);

		},

		getInputDate: function(input){
			this.date = new Date();
			if (!input) return;
			var date = Date.parse(input.get('value'));
			if (date == null || !date.isValid()){
				var storeDate = input.retrieve('datepicker:value');
				if (storeDate) date = Date.parse(storeDate);
			}
			if (date != null && date.isValid()) this.date = date;
		},

		// Control the previous and next elements

		constructPicker: function(){
			this.parent();

			if (!this.options.rtl){
				this.previous = new Element('div.previous[html=&#171;]').inject(this.header);
				this.next = new Element('div.next[html=&#187;]').inject(this.header);
			} else {
				this.next = new Element('div.previous[html=&#171;]').inject(this.header);
				this.previous = new Element('div.next[html=&#187;]').inject(this.header);
			}
		},

		hidePrevious: function(_next, _show){
			this[_next ? 'next' : 'previous'].setStyle('display', _show ? 'block' : 'none');
			return this;
		},

		showPrevious: function(_next){
			return this.hidePrevious(_next, true);
		},

		setPreviousEvent: function(fn, _next){
			this[_next ? 'next' : 'previous'].removeEvents('click');
			if (fn) this[_next ? 'next' : 'previous'].addEvent('click', fn);
			return this;
		},

		hideNext: function(){
			return this.hidePrevious(true);
		},

		showNext: function(){
			return this.showPrevious(true);
		},

		setNextEvent: function(fn){
			return this.setPreviousEvent(fn, true);
		},

		setColumns: function(columns, view, date, viewFx){
			var ret = this.parent(columns), method;

			if ((view || this.currentView)
				&& (method = 'render' + (view || this.currentView).capitalize())
				&& this[method]
			) this[method](date || this.date.clone(), viewFx);

			return ret;
		},

		// Render the Pickers

		renderYears: function(date, fx){
			var options = this.options, pages = options.columns, perPage = options.yearsPerPage,
				_columns = [], _dates = [];
			this.dateElements = [];

			// start neatly at interval (eg. 1980 instead of 1987)
			date = date.clone().decrement('year', date.get('year') % perPage);

			var iterateDate = date.clone().decrement('year', Math.floor((pages - 1) / 2) * perPage);

			for (var i = pages; i--;){
				var _date = iterateDate.clone();
				_dates.push(_date);
				_columns.push(renderers.years(
					timesSelectors.years(options, _date.clone()),
					options,
					this.date.clone(),
					this.dateElements,
					function(date){
						if (options.pickOnly == 'years') this.select(date);
						else this.renderMonths(date, 'fade');
						this.date = date;
					}.bind(this)
				));
				iterateDate.increment('year', perPage);
			}

			this.setColumnsContent(_columns, fx);
			this.setTitle(_dates, options.years_title);

			// Set limits
			var limitLeft = (options.minDate && date.get('year') <= options.minDate.get('year')),
				limitRight = (options.maxDate && (date.get('year') + options.yearsPerPage) >= options.maxDate.get('year'));
			this[(limitLeft ? 'hide' : 'show') + 'Previous']();
			this[(limitRight ? 'hide' : 'show') + 'Next']();

			this.setPreviousEvent(function(){
				this.renderYears(date.decrement('year', perPage), 'left');
			}.bind(this));

			this.setNextEvent(function(){
				this.renderYears(date.increment('year', perPage), 'right');
			}.bind(this));

			// We can't go up!
			this.setTitleEvent(null);

			this.currentView = 'years';
		},

		renderMonths: function(date, fx){
			var options = this.options, years = options.columns, _columns = [], _dates = [],
				iterateDate = date.clone().decrement('year', Math.floor((years - 1) / 2));
			this.dateElements = [];

			for (var i = years; i--;){
				var _date = iterateDate.clone();
				_dates.push(_date);
				_columns.push(renderers.months(
					timesSelectors.months(options, _date.clone()),
					options,
					this.date.clone(),
					this.dateElements,
					function(date){
						if (options.pickOnly == 'months') this.select(date);
						else this.renderDays(date, 'fade');
						this.date = date;
					}.bind(this)
				));
				iterateDate.increment('year', 1);
			}

			this.setColumnsContent(_columns, fx);
			this.setTitle(_dates, options.months_title);

			// Set limits
			var year = date.get('year'),
				limitLeft = (options.minDate && year <= options.minDate.get('year')),
				limitRight = (options.maxDate && year >= options.maxDate.get('year'));
			this[(limitLeft ? 'hide' : 'show') + 'Previous']();
			this[(limitRight ? 'hide' : 'show') + 'Next']();

			this.setPreviousEvent(function(){
				this.renderMonths(date.decrement('year', years), 'left');
			}.bind(this));

			this.setNextEvent(function(){
				this.renderMonths(date.increment('year', years), 'right');
			}.bind(this));

			var canGoUp = options.yearPicker && (options.pickOnly != 'months' || options.canAlwaysGoUp.contains('months'));
			var titleEvent = (canGoUp) ? function(){
				this.renderYears(date, 'fade');
			}.bind(this) : null;
			this.setTitleEvent(titleEvent);

			this.currentView = 'months';
		},

		renderDays: function(date, fx){
			var options = this.options, months = options.columns, _columns = [], _dates = [],
				iterateDate = date.clone().decrement('month', Math.floor((months - 1) / 2));
			this.dateElements = [];

			for (var i = months; i--;){
				_date = iterateDate.clone();
				_dates.push(_date);
				_columns.push(renderers.days(
					timesSelectors.days(options, _date.clone()),
					options,
					this.date.clone(),
					this.dateElements,
					function(date){
						if (options.pickOnly == 'days' || !options.timePicker) this.select(date)
						else this.renderTime(date, 'fade');
						this.date = date;
					}.bind(this)
				));
				iterateDate.increment('month', 1);
			}

			this.setColumnsContent(_columns, fx);
			this.setTitle(_dates, options.days_title);

			var yearmonth = date.format('%Y%m').toInt(),
				limitLeft = (options.minDate && yearmonth <= options.minDate.format('%Y%m')),
				limitRight = (options.maxDate && yearmonth >= options.maxDate.format('%Y%m'));
			this[(limitLeft ? 'hide' : 'show') + 'Previous']();
			this[(limitRight ? 'hide' : 'show') + 'Next']();

			this.setPreviousEvent(function(){
				this.renderDays(date.decrement('month', months), 'left');
			}.bind(this));

			this.setNextEvent(function(){
				this.renderDays(date.increment('month', months), 'right');
			}.bind(this));

			var canGoUp = options.pickOnly != 'days' || options.canAlwaysGoUp.contains('days');
			var titleEvent = (canGoUp) ? function(){
				this.renderMonths(date, 'fade');
			}.bind(this) : null;
			this.setTitleEvent(titleEvent);

			this.currentView = 'days';
		},

		renderTime: function(date, fx){
			var options = this.options;
			this.setTitle(date, options.time_title);

			var originalColumns = this.originalColumns = options.columns;
			this.currentView = null; // otherwise you'd get crazy recursion
			if (originalColumns != 1) this.setColumns(1);

			this.setContent(renderers.time(
				options,
				date.clone(),
				function(date){
					this.select(date);
				}.bind(this)
			), fx);

			// Hide « and » buttons
			this.hidePrevious()
				.hideNext()
				.setPreviousEvent(null)
				.setNextEvent(null);

			var canGoUp = options.pickOnly != 'time' || options.canAlwaysGoUp.contains('time');
			var titleEvent = (canGoUp) ? function(){
				this.setColumns(originalColumns, 'days', date, 'fade');
			}.bind(this) : null;
			this.setTitleEvent(titleEvent);

			this.currentView = 'time';
		},

		select: function(date, all){
			this.date = date;
			var formatted = date.format(this.options.format),
				time = date.strftime(),
				inputs = (!this.options.updateAll && !all && this.input) ? [this.input] : this.inputs;

			inputs.each(function(input){
				input.set('value', formatted).store('datepicker:value', time).fireEvent('change');
			}, this);

			this.fireEvent('select', [date].concat(inputs));
			this.close();
			return this;
		}

	});


	// Renderers only output elements and calculate the limits!

	var timesSelectors = {

		years: function(options, date){
			var times = [];
			for (var i = 0; i < options.yearsPerPage; i++){
				times.push(+date);
				date.increment('year', 1);
			}
			return times;
		},

		months: function(options, date){
			var times = [];
			date.set('month', 0);
			for (var i = 0; i <= 11; i++){
				times.push(+date);
				date.increment('month', 1);
			}
			return times;
		},

		days: function(options, date){
			var times = [];
			date.set('date', 1);
			while (date.get('day') != options.startDay) date.set('date', date.get('date') - 1);
			for (var i = 0; i < 42; i++){
				times.push(+date);
				date.increment('day',  1);
			}
			return times;
		}

	};

	var renderers = {

		years: function(years, options, currentDate, dateElements, fn){
			var container = new Element('table.years'),
				today     = new Date(),
				rows      = [],
				element, classes;

			years.each(function(_year, i){
				var date = new Date(_year), year = date.get('year');
				if (i % 4 === 0) {
					rows.push(new Element('tr'));
					rows[rows.length - 1].inject(container)
				}
				classes = '.year.year' + i;
				if (year == today.get('year')) classes += '.today';
				if (year == currentDate.get('year')) classes += '.selected';
				element = new Element('td' + classes, {text: year}).inject(rows[rows.length - 1]);

				dateElements.push({element: element, time: _year});

				if (isUnavailable('year', date, options)) element.addClass('unavailable');
				else element.addEvent('click', fn.pass(date));
			});

			return container;
		},

		months: function(months, options, currentDate, dateElements, fn){
			var today        = new Date(),
				month        = today.get('month'),
				thisyear     = today.get('year'),
				selectedyear = currentDate.get('year'),
				container    = new Element('table.months'),
				monthsAbbr   = options.months_abbr || Locale.get('Date.months_abbr'),
				rows         = [],
				element, classes;

			months.each(function(_month, i){
				var date = new Date(_month), year = date.get('year');
				if (i % 3 === 0) {
					rows.push(new Element('tr'));
					rows[rows.length - 1].inject(container)
				}

				classes = '.month.month' + (i + 1);
				if (i == month && year == thisyear) classes += '.today';
				if (i == currentDate.get('month') && year == selectedyear) classes += '.selected';
				element = new Element('td' + classes, {text: monthsAbbr[i]}).inject(rows[rows.length - 1]);
				dateElements.push({element: element, time: _month});

				if (isUnavailable('month', date, options)) element.addClass('unavailable');
				else element.addEvent('click', fn.pass(date));
			});

			return container;
		},

		days: function(days, options, currentDate, dateElements, fn){
			var month = new Date(days[14]).get('month'),
				todayString = new Date().toDateString(),
				currentString = currentDate.toDateString(),
				weeknumbers = options.weeknumbers,
				container = new Element('table.days' + (weeknumbers ? '.weeknumbers' : ''), {
					role: 'grid', 'aria-labelledby': this.titleID
				}),
				header = new Element('thead').inject(container),
				body = new Element('tbody').inject(container),
				titles = new Element('tr.titles').inject(header),
				localeDaysShort = options.days_abbr || Locale.get('Date.days_abbr'),
				day, classes, element, weekcontainer, dateString,
				where = options.rtl ? 'top' : 'bottom';

			if (weeknumbers) new Element('th.title.day.weeknumber', {
				text: Locale.get('DatePicker.week')
			}).inject(titles);

			for (day = options.startDay; day < (options.startDay + 7); day++){
				new Element('th.title.day.day' + (day % 7), {
					text: localeDaysShort[(day % 7)],
					role: 'columnheader'
				}).inject(titles, where);
			}

			days.each(function(_date, i){
				var date = new Date(_date);

				if (i % 7 == 0){
					weekcontainer = new Element('tr.week.week' + (Math.floor(i / 7))).set('role', 'row').inject(body);
					if (weeknumbers) new Element('th.day.weeknumber', {text: date.get('week'), scope: 'row', role: 'rowheader'}).inject(weekcontainer);
				}

				dateString = date.toDateString();
				classes = '.day.day' + date.get('day');
				if (dateString == todayString) classes += '.today';
				if (date.get('month') != month) classes += '.otherMonth';
				element = new Element('td' + classes, {text: date.getDate(), role: 'gridcell'}).inject(weekcontainer, where);

				if (dateString == currentString) element.addClass('selected').set('aria-selected', 'true');
				else element.set('aria-selected', 'false');

				dateElements.push({element: element, time: _date});

				if (isUnavailable('date', date, options)) element.addClass('unavailable');
				else element.addEvent('click', fn.pass(date.clone()));
			});

			return container;
		},

		time: function(options, date, fn){
			var container = new Element('div.time'),
				// make sure that the minutes are timeWheelStep * k
				initMinutes = (date.get('minutes') / options.timeWheelStep).round() * options.timeWheelStep

			if (initMinutes >= 60) initMinutes = 0;
			date.set('minutes', initMinutes);

			var hoursInput = new Element('input.hour[type=text]', {
				title: Locale.get('DatePicker.use_mouse_wheel'),
				value: date.format('%H'),
				events: {
					click: function(event){
						event.target.focus();
						event.stop();
					},
					mousewheel: function(event){
						event.stop();
						hoursInput.focus();
						var value = hoursInput.get('value').toInt();
						value = (event.wheel > 0) ? ((value < 23) ? value + 1 : 0)
							: ((value > 0) ? value - 1 : 23)
						date.set('hours', value);
						hoursInput.set('value', date.format('%H'));
					}.bind(this)
				},
				maxlength: 2
			}).inject(container);

			new Element('div.separator[text=:]').inject(container);

			var minutesInput = new Element('input.minutes[type=text]', {
				title: Locale.get('DatePicker.use_mouse_wheel'),
				value: date.format('%M'),
				events: {
					click: function(event){
						event.target.focus();
						event.stop();
					},
					mousewheel: function(event){
						event.stop();
						minutesInput.focus();
						var value = minutesInput.get('value').toInt();
						value = (event.wheel > 0) ? ((value < 59) ? (value + options.timeWheelStep) : 0)
							: ((value > 0) ? (value - options.timeWheelStep) : (60 - options.timeWheelStep));
						if (value >= 60) value = 0;
						date.set('minutes', value);
						minutesInput.set('value', date.format('%M'));
					}.bind(this)
				},
				maxlength: 2
			}).inject(container);


			new Element('input.ok', {
				'type': 'submit',
				value: Locale.get('DatePicker.time_confirm_button'),
				events: {click: function(event){
					event.stop();
					date.set({
						hours: hoursInput.get('value').toInt(),
						minutes: minutesInput.get('value').toInt()
					});
					fn(date.clone());
				}}
			}).inject(container);

			return container;
		}

	};


	Picker.Date.defineRenderer = function(name, fn){
		renderers[name] = fn;
		return this;
	};

	Picker.Date.getRenderer = function(name) {
		return renderers[name];
	}

	var limitDate = function(date, min, max){
		if (min && date < min) return min;
		if (max && date > max) return max;
		return date;
	};

	var isUnavailable = function(type, date, options){
		var minDate = options.minDate,
			maxDate = options.maxDate,
			availableDates = options.availableDates,
			year, month, day, ms;

		if (!minDate && !maxDate && !availableDates) return false;
		date.clearTime();

		if (type == 'year'){
			year = date.get('year');
			return (
				(minDate && year < minDate.get('year')) ||
				(maxDate && year > maxDate.get('year')) ||
				(
					(availableDates != null &&  !options.invertAvailable) && (
						availableDates[year] == null ||
						Object.getLength(availableDates[year]) == 0 ||
						Object.getLength(
							Object.filter(availableDates[year], function(days){
								return (days.length > 0);
							})
						) == 0
					)
				)
			);
		}

		if (type == 'month'){
			year = date.get('year');
			month = date.get('month') + 1;
			ms = date.format('%Y%m').toInt();
			return (
				(minDate && ms < minDate.format('%Y%m').toInt()) ||
				(maxDate && ms > maxDate.format('%Y%m').toInt()) ||
				(
					(availableDates != null && !options.invertAvailable) && (
						availableDates[year] == null ||
						availableDates[year][month] == null ||
						availableDates[year][month].length == 0
					)
				)
			);
		}

		// type == 'date'
		year = date.get('year');
		month = date.get('month') + 1;
		day = date.get('date');

		var dateAllow = (minDate && date < minDate) || (maxDate && date > maxDate);
		if (availableDates != null){
			dateAllow = dateAllow
				|| availableDates[year] == null
				|| availableDates[year][month] == null
				|| !availableDates[year][month].contains(day);
			if (options.invertAvailable) dateAllow = !dateAllow;
		}

		return dateAllow;
	};

	})();


/***/ }

/******/ })
});
;