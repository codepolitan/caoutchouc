(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define("caoutchouc", ["moment"], factory);
	else if(typeof exports === 'object')
		exports["caoutchouc"] = factory(require("moment"));
	else
		root["caoutchouc"] = factory(root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_54__) {
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _view = __webpack_require__(2);

	Object.defineProperty(exports, 'View', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_view).default;
	  }
	});

	var _list = __webpack_require__(31);

	Object.defineProperty(exports, 'List', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_list).default;
	  }
	});

	var _tree = __webpack_require__(46);

	Object.defineProperty(exports, 'Tree', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tree).default;
	  }
	});

	var _form = __webpack_require__(52);

	Object.defineProperty(exports, 'Form', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_form).default;
	  }
	});

	var _container = __webpack_require__(20);

	Object.defineProperty(exports, 'ViewContainer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_container).default;
	  }
	});

	var _container2 = __webpack_require__(4);

	Object.defineProperty(exports, 'Container', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_container2).default;
	  }
	});

	var _tab = __webpack_require__(100);

	Object.defineProperty(exports, 'Tab', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tab).default;
	  }
	});

	var _window = __webpack_require__(21);

	Object.defineProperty(exports, 'Window', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_window).default;
	  }
	});

	var _dialog = __webpack_require__(60);

	Object.defineProperty(exports, 'Dialog', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_dialog).default;
	  }
	});

	var _prompt = __webpack_require__(101);

	Object.defineProperty(exports, 'Prompt', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_prompt).default;
	  }
	});

	var _text = __webpack_require__(102);

	Object.defineProperty(exports, 'Text', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_text).default;
	  }
	});

	var _component = __webpack_require__(5);

	Object.defineProperty(exports, 'Component', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_component).default;
	  }
	});

	var _progress = __webpack_require__(103);

	Object.defineProperty(exports, 'Progress', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_progress).default;
	  }
	});

	var _button = __webpack_require__(23);

	Object.defineProperty(exports, 'Button', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_button).default;
	  }
	});

	var _upload = __webpack_require__(104);

	Object.defineProperty(exports, 'Upload', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_upload).default;
	  }
	});

	var _color = __webpack_require__(105);

	Object.defineProperty(exports, 'Color', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_color).default;
	  }
	});

	var _date = __webpack_require__(77);

	Object.defineProperty(exports, 'Date', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_date).default;
	  }
	});

	var _buttonMenu = __webpack_require__(65);

	Object.defineProperty(exports, 'Buttonmenu', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_buttonMenu).default;
	  }
	});

	var _choice = __webpack_require__(38);

	Object.defineProperty(exports, 'Choice', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_choice).default;
	  }
	});

	var _search = __webpack_require__(42);

	Object.defineProperty(exports, 'Search', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_search).default;
	  }
	});

	var _separator = __webpack_require__(66);

	Object.defineProperty(exports, 'Separator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_separator).default;
	  }
	});

	var _border = __webpack_require__(106);

	Object.defineProperty(exports, 'Border', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_border).default;
	  }
	});

	var _context = __webpack_require__(107);

	Object.defineProperty(exports, 'Context', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_context).default;
	  }
	});

	var _toolbar = __webpack_require__(16);

	Object.defineProperty(exports, 'Toolbar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_toolbar).default;
	  }
	});

	var _layout = __webpack_require__(12);

	Object.defineProperty(exports, 'Layout', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_layout).default;
	  }
	});

	var _selector = __webpack_require__(109);

	Object.defineProperty(exports, 'Selector', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_selector).default;
	  }
	});

	var _control = __webpack_require__(17);

	Object.defineProperty(exports, 'controlIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_control).default;
	  }
	});

	var _app = __webpack_require__(115);

	Object.defineProperty(exports, 'appIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_app).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(3);

	var _container = __webpack_require__(4);

	var _container2 = _interopRequireDefault(_container);

	var _layout = __webpack_require__(12);

	var _layout2 = _interopRequireDefault(_layout);

	var _toolbar = __webpack_require__(16);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _container3 = __webpack_require__(20);

	var _container4 = _interopRequireDefault(_container3);

	var _dragging = __webpack_require__(25);

	var _dragging2 = _interopRequireDefault(_dragging);

	var _limit = __webpack_require__(26);

	var _limit2 = _interopRequireDefault(_limit);

	var _loader = __webpack_require__(27);

	var _loader2 = _interopRequireDefault(_loader);

	var _scroll = __webpack_require__(28);

	var _scroll2 = _interopRequireDefault(_scroll);

	var _zoom = __webpack_require__(29);

	var _zoom2 = _interopRequireDefault(_zoom);

	var _minimalBinding = __webpack_require__(6);

	var _minimalBinding2 = _interopRequireDefault(_minimalBinding);

	var _scriptjs = __webpack_require__(30);

	var _scriptjs2 = _interopRequireDefault(_scriptjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view').defineLevel();

	exports.default = new Class({

	  Implements: [Events, Options, _minimalBinding2.default, _toolbar2.default, _container4.default, _dragging2.default, _limit2.default, _loader2.default, _scroll2.default, _zoom2.default],

	  options: {
	    lib: 'ui',
	    base: 'view',
	    clss: 'view',
	    lang: 'en',

	    content: true,

	    friction: 5,
	    tag: 'div',
	    node: {
	      name: 'container'
	    },
	    axis: {
	      x: true,
	      y: true
	    },

	    range: [10, 52],

	    fx: {
	      transition: Fx.Transitions.Quart.easeOut,
	      duration: 240,
	      wait: false
	    },
	    scrollbar: null,
	    scroll: 'scrollbar',
	    dragging: null,
	    scroller: null,
	    scroller_opts: {
	      area: 160,
	      velocity: 0.5
	    },
	    autoScrollOptions: {
	      wait: false,
	      duration: 200,
	      offset: {
	        'x': 0,
	        'y': -50
	      },
	      transition: Fx.Transitions.Quad.easeInOut
	    },
	    controller: {
	      _list: []
	    }
	  },

	  /**
	   * Initialize
	   * @param {Object} options
	   * @return {Object}
	   */
	  initialize: function initialize(options) {
	    _log.debug('initialize', options);

	    options = options || {};

	    if (options.setCaller) {
	      this.setCaller = options.setCaller.bind(null, this);
	      options.setCaller = true;
	    }

	    if (options.getRange) {
	      this.getRange = options.getRange.bind(null, this);
	      options.getRange = true;
	    }

	    if (options.fetchFunction) {
	      this.fetchFunction = options.fetchFunction;
	      options.fetchFunction = true;
	    }

	    if (options.templateFunction) {
	      this.templateFunction = options.templateFunction;
	      options.templateFunction = true;
	    }

	    if (options.toolbarFunction) {
	      this.toolbarFunction = options.toolbarFunction;
	      options.toolbarFunction = true;
	    }

	    if (options.processFunction) {
	      this.processFunction = options.processFunction;
	      options.processFunction = true;
	    }

	    if (options.sandbox) {
	      this.sandbox = options.sandbox;
	      options.sandbox = true;
	    }

	    if (options.connector) {
	      this.connector = options.connector;
	      options.connector = true;
	    }

	    if (options.collection) {
	      this.collection = options.collection;
	      options.collection = true;
	    }

	    if (options.onSettings) {
	      this.onSettings = options.onSettings;
	      options.onSettings = true;
	    }

	    this.setOptions(options);
	    this.opts = this.options;

	    this.container = options.container;

	    this._init();
	    //this._initBinding();

	    return this;
	  },

	  /**
	   * init
	   * @param {Object} opts
	   * @return {void}
	   * @private
	   */
	  _init: function _init(opts) {
	    _log.debug('init');

	    opts = this.opts;

	    this.index = 0;
	    this.views = [];
	    //this.layout = ui.node[opts.name];

	    this._initContainer();

	    if (opts.toolbar) {
	      opts.toolbar.lang = this.options.lang;
	      this._initToolbar(opts.toolbar);
	    }

	    if (opts.menus) {
	      this._initMenus();
	    }

	    this._initEvents();

	    if (opts.scroller) {
	      this._initScroller();
	    }

	    this._initView();
	    //this.binding = this._initBinding();

	    this.fireEvent('initReady');
	  },

	  /**
	   * init view
	   * @return {void}
	   * @private
	   */
	  _initView: function _initView() {
	    _log.debug('_initView');

	    this.isOpen = true;
	    this.visible = true;

	    /*if (this.options.foot) {
	      this.container._initFoot();
	    }*/

	    //this.foot = this.container.foot;
	  },

	  /**
	   * initialize content
	   * @return {void}
	   * @private
	   */
	  _initContent: function _initContent() {
	    //var self = this;
	    var opts = this.options;

	    /**
	     * Fired before element is created.
	     * @param {Ext.Component} this
	     * @param {string} value
	     */
	    this.fireEvent('create');

	    // should call UI.Component
	    var element = new Element(opts.tag, {
	      'class': this.klass,
	      styles: opts.styles,
	      events: opts.events,
	      id: opts.id,
	      name: opts.name,
	      html: opts.html
	    });

	    element.addClass('container-body');
	    /*element.addClass('view-' + opts.name);
	    element.addEvents({
	      mouseup: function(e) {
	        _log.debug('focus', self.options.name);
	        self.focus(e);
	      }
	    });*/

	    this.element = element;
	    this.content = element;

	    element.store('_instance', this);

	    /**
	     * Fired when element is clicked on.
	     * @param {Ext.Component} this
	     * @param {string} value
	     */
	    this.fireEvent('created');
	    // inject the component if the container is given

	    if (opts.container && opts.container !== 'window') {
	      this.element.inject(this.container);
	    }

	    if (opts.resizable) {
	      this._initResizer();
	    }

	    //this._initState();
	    this._initClass();
	  },

	  /**
	   * [focus description]
	   * @return {void}
	   */
	  focus: function focus() {
	    _log.debug('focus');

	    this.fireEvent('focus');
	    this.fireEvent('render');
	  },

	  /**
	   * initialize the user interface
	   * @return {void}
	   * @private
	   */
	  _initLayout: function _initLayout(layout) {
	    _log.debug('_initLayout', layout);

	    var opts = this.options;

	    this.container = new _container2.default({
	      container: opts.container,
	      name: opts.name,
	      node: opts.layout || opts.node
	    });

	    this.layout = new _layout2.default({
	      container: this.container,
	      layout: opts.layout
	    });

	    this.container = this.layout.container;
	  },

	  /**
	   * [_initModules description]
	   * @return {void}
	   * @private
	   */
	  _initModules: function _initModules(modules, callback) {
	    //_log.debug('initModule');

	    (0, _scriptjs2.default)(modules, function () {
	      callback();
	    });
	  },

	  /**
	   * initialize events
	   * @return {void}
	   * @private
	   */
	  _initEvents: function _initEvents() {
	    _log.debug('_initEvents');

	    var opts = this.options;

	    this.fx = new Fx.Scroll(this.element, this.options.fx);

	    if (this._initLoader) {
	      this._initLoader();
	    }

	    /*if (opts.scrollbar) {
	      this._initScrollbar();
	    }*/

	    if (opts.dragging) {
	      this._initDragging();
	    }

	    if (!opts.container) {
	      return;
	    }

	    /*var self = this;
	     if (opts.container.component !== 'window') {
	      this.container.addEvent('resize', function() {
	        _log.debug('resize from view.initEvents');
	        self.fireEvent('resize');
	      });
	    }*/
	  },

	  /**
	   * initialize class
	   * @return {void}
	   * @private
	   */
	  _initClass: function _initClass() {
	    var opts = this.options;

	    this.element.addClass(opts.lib + '-' + opts.base);
	    this.element.addClass(opts.base + '-' + opts.clss);

	    if (opts.klss) {
	      this.element.addClass(opts.klss);
	    }
	  },

	  /**
	   * destroy element
	   * @param {DOMElement} element
	   */
	  remove: function remove(element) {
	    if (element.destroy) {
	      element.destroy();
	    }
	  },

	  /**
	   * set title
	   * @param {string} text
	   * @return {Object}
	   */
	  setTitle: function setTitle(text) {
	    _log.debug('setTitle', text);

	    var self = this;

	    (function () {
	      if (self.control.title) {
	        self.control.title.set(text);
	      }
	    }).delay(200);

	    /*if (this.container.head) {
	      this.container.setTitle(text);
	    }*/

	    return this;
	  },

	  /**
	   * get title
	   * @return {string}
	   */
	  getTitle: function getTitle() {
	    //_log.debug('getTitle', this.container.getTitle());

	    return this.container.getTitle();
	  },

	  /**
	   * set status
	   * @param {string} text
	   */
	  setStatus: function setStatus(text) {
	    _log.debug('setStatus', text);

	    if (this.control && this.control.status) {
	      this.control.status.element.set('html', text);
	    }

	    //this.container.fireEvent('resize');
	  },

	  /**
	   * return the isVisible status
	   * @return {boolean}
	   */
	  isVisible: function isVisible() {
	    return this.visible;
	  },

	  /**
	   * clear the content of the view
	   * @return {void}
	   */
	  clear: function clear() {
	    if (this.content && this.content.empty) {
	      this.content.empty();
	    }
	  },

	  /**
	   * close
	   * @return {Object}
	   */
	  close: function close() {
	    this.container.close();

	    return this;
	  },

	  /**
	   * initialize status
	   * @return {void}
	   * @private
	   */
	  _initStatus: function _initStatus() {},

	  /**
	   * hide
	   * @return {void}
	   */
	  hide: function hide() {
	    _log.debug('hide');

	    this.container.hide();
	    this.visible = false;
	  },

	  /**
	   * show
	   * @return {void}
	   */
	  show: function show() {
	    _log.debug('show');

	    this.container.setStyle('display', null);
	    this.visible = true;
	  }

	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("js-debugger", [], factory);
		else if(typeof exports === 'object')
			exports["js-debugger"] = factory();
		else
			root["js-debugger"] = factory();
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

		/* jscs:disable jsDoc */
		var Logger = __webpack_require__(1);

		//handle browser without console
		var console = console || {
		  log: function log() {}
		};

		//define global _log
		window._log = {
		  debug: window.console.info.bind(window.console, '%s'),
		  info: window.console.info.bind(window.console, '%s'),
		  warn: window.console.warn.bind(window.console, '%s'),
		  error: window.console.error.bind(window.console, '%s'),
		  fatal: window.console.error.bind(window.console, '%s')
		};

		//use default settings for logger
		Logger.useDefaults();

		//define global __debug
		window.__debug = function (what) {

		  what = what || 'js-debugger';

		  var logger = Logger.get(what);

		  logger.setLevel(Logger.WARN);

		  logger.warn = window.console.warn.bind(window.console, '[' + what + '] %s');
		  logger.error = window.console.error.bind(window.console, '[' + what + '] %s');
		  logger.fatal = window.console.error.bind(window.console, '[' + what + '] %s');

		  logger.defineLevel = function (level) {
		    if (level && Logger[level.toUpperCase()]) {
		      Logger.get(what).setLevel(Logger[level.toUpperCase()]);
		    }

		    return logger;
		  };

		  return logger;
		};

		//bind _log with console
		function setDebug(isDebug, what) {
		  if (isDebug) {
		    what = {
		      debug: window.console.info.bind(window.console, '%s'),
		      info: window.console.info.bind(window.console, '%s'),
		      warn: window.console.warn.bind(window.console, '%s'),
		      error: window.console.error.bind(window.console, '%s'),
		      fatal: window.console.error.bind(window.console, '%s')
		    };
		  } else {
		    var __no_op = function __no_op() {};

		    what = {
		      debug: __no_op,
		      info: __no_op,
		      warn: __no_op,
		      error: __no_op,
		      fatal: __no_op
		    };
		  }
		}

		setDebug(true, window._log);

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * js-logger - http://github.com/jonnyreeves/js-logger
		 * Jonny Reeves, http://jonnyreeves.co.uk/
		 * js-logger may be freely distributed under the MIT license.
		 */
		(function (global) {
			"use strict";

			// Top level module for the global, static logger instance.
			var Logger = { };

			// For those that are at home that are keeping score.
			Logger.VERSION = "1.2.0";

			// Function which handles all incoming log messages.
			var logHandler;

			// Map of ContextualLogger instances by name; used by Logger.get() to return the same named instance.
			var contextualLoggersByNameMap = {};

			// Polyfill for ES5's Function.bind.
			var bind = function(scope, func) {
				return function() {
					return func.apply(scope, arguments);
				};
			};

			// Super exciting object merger-matron 9000 adding another 100 bytes to your download.
			var merge = function () {
				var args = arguments, target = args[0], key, i;
				for (i = 1; i < args.length; i++) {
					for (key in args[i]) {
						if (!(key in target) && args[i].hasOwnProperty(key)) {
							target[key] = args[i][key];
						}
					}
				}
				return target;
			};

			// Helper to define a logging level object; helps with optimisation.
			var defineLogLevel = function(value, name) {
				return { value: value, name: name };
			};

			// Predefined logging levels.
			Logger.DEBUG = defineLogLevel(1, 'DEBUG');
			Logger.INFO = defineLogLevel(2, 'INFO');
			Logger.TIME = defineLogLevel(3, 'TIME');
			Logger.WARN = defineLogLevel(4, 'WARN');
			Logger.ERROR = defineLogLevel(8, 'ERROR');
			Logger.OFF = defineLogLevel(99, 'OFF');

			// Inner class which performs the bulk of the work; ContextualLogger instances can be configured independently
			// of each other.
			var ContextualLogger = function(defaultContext) {
				this.context = defaultContext;
				this.setLevel(defaultContext.filterLevel);
				this.log = this.info;  // Convenience alias.
			};

			ContextualLogger.prototype = {
				// Changes the current logging level for the logging instance.
				setLevel: function (newLevel) {
					// Ensure the supplied Level object looks valid.
					if (newLevel && "value" in newLevel) {
						this.context.filterLevel = newLevel;
					}
				},

				// Is the logger configured to output messages at the supplied level?
				enabledFor: function (lvl) {
					var filterLevel = this.context.filterLevel;
					return lvl.value >= filterLevel.value;
				},

				debug: function () {
					this.invoke(Logger.DEBUG, arguments);
				},

				info: function () {
					this.invoke(Logger.INFO, arguments);
				},

				warn: function () {
					this.invoke(Logger.WARN, arguments);
				},

				error: function () {
					this.invoke(Logger.ERROR, arguments);
				},

				time: function (label) {
					if (typeof label === 'string' && label.length > 0) {
						this.invoke(Logger.TIME, [ label, 'start' ]);
					}
				},

				timeEnd: function (label) {
					if (typeof label === 'string' && label.length > 0) {
						this.invoke(Logger.TIME, [ label, 'end' ]);
					}
				},

				// Invokes the logger callback if it's not being filtered.
				invoke: function (level, msgArgs) {
					if (logHandler && this.enabledFor(level)) {
						logHandler(msgArgs, merge({ level: level }, this.context));
					}
				}
			};

			// Protected instance which all calls to the to level `Logger` module will be routed through.
			var globalLogger = new ContextualLogger({ filterLevel: Logger.OFF });

			// Configure the global Logger instance.
			(function() {
				// Shortcut for optimisers.
				var L = Logger;

				L.enabledFor = bind(globalLogger, globalLogger.enabledFor);
				L.debug = bind(globalLogger, globalLogger.debug);
				L.time = bind(globalLogger, globalLogger.time);
				L.timeEnd = bind(globalLogger, globalLogger.timeEnd);
				L.info = bind(globalLogger, globalLogger.info);
				L.warn = bind(globalLogger, globalLogger.warn);
				L.error = bind(globalLogger, globalLogger.error);

				// Don't forget the convenience alias!
				L.log = L.info;
			}());

			// Set the global logging handler.  The supplied function should expect two arguments, the first being an arguments
			// object with the supplied log messages and the second being a context object which contains a hash of stateful
			// parameters which the logging function can consume.
			Logger.setHandler = function (func) {
				logHandler = func;
			};

			// Sets the global logging filter level which applies to *all* previously registered, and future Logger instances.
			// (note that named loggers (retrieved via `Logger.get`) can be configured independently if required).
			Logger.setLevel = function(level) {
				// Set the globalLogger's level.
				globalLogger.setLevel(level);

				// Apply this level to all registered contextual loggers.
				for (var key in contextualLoggersByNameMap) {
					if (contextualLoggersByNameMap.hasOwnProperty(key)) {
						contextualLoggersByNameMap[key].setLevel(level);
					}
				}
			};

			// Retrieve a ContextualLogger instance.  Note that named loggers automatically inherit the global logger's level,
			// default context and log handler.
			Logger.get = function (name) {
				// All logger instances are cached so they can be configured ahead of use.
				return contextualLoggersByNameMap[name] ||
					(contextualLoggersByNameMap[name] = new ContextualLogger(merge({ name: name }, globalLogger.context)));
			};

			// Configure and example a Default implementation which writes to the `window.console` (if present).  The
			// `options` hash can be used to configure the default logLevel and provide a custom message formatter.
			Logger.useDefaults = function(options) {
				options = options || {};

				options.formatter = options.formatter || function defaultMessageFormatter(messages, context) {
					// Prepend the logger's name to the log message for easy identification.
					if (context.name) {
						messages.unshift("[" + context.name + "]");
					}
				};

				// Check for the presence of a logger.
				if (typeof console === "undefined") {
					return;
				}

				// Map of timestamps by timer labels used to track `#time` and `#timeEnd()` invocations in environments
				// that don't offer a native console method.
				var timerStartTimeByLabelMap = {};

				// Support for IE8+ (and other, slightly more sane environments)
				var invokeConsoleMethod = function (hdlr, messages) {
					Function.prototype.apply.call(hdlr, console, messages);
				};

				Logger.setLevel(options.defaultLevel || Logger.DEBUG);
				Logger.setHandler(function(messages, context) {
					// Convert arguments object to Array.
					messages = Array.prototype.slice.call(messages);

					var hdlr = console.log;
					var timerLabel;

					if (context.level === Logger.TIME) {
						timerLabel = (context.name ? '[' + context.name + '] ' : '') + messages[0];

						if (messages[1] === 'start') {
							if (console.time) {
								console.time(timerLabel);
							}
							else {
								timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
							}
						}
						else {
							if (console.timeEnd) {
								console.timeEnd(timerLabel);
							}
							else {
								invokeConsoleMethod(hdlr, [ timerLabel + ': ' +
									(new Date().getTime() - timerStartTimeByLabelMap[timerLabel]) + 'ms' ]);
							}
						}
					}
					else {
						// Delegate through to custom warn/error loggers if present on the console.
						if (context.level === Logger.WARN && console.warn) {
							hdlr = console.warn;
						} else if (context.level === Logger.ERROR && console.error) {
							hdlr = console.error;
						} else if (context.level === Logger.INFO && console.info) {
							hdlr = console.info;
						}

						options.formatter(messages, context);
						invokeConsoleMethod(hdlr, messages);
					}
				});
			};

			// Export to popular environments boilerplate.
			if (true) {
				!(__WEBPACK_AMD_DEFINE_FACTORY__ = (Logger), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			}
			else if (typeof module !== 'undefined' && module.exports) {
				module.exports = Logger;
			}
			else {
				Logger._prevLogger = global.Logger;

				Logger.noConflict = function () {
					global.Logger = Logger._prevLogger;
					return Logger;
				};

				global.Logger = Logger;
			}
		}(this));


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	var _display = __webpack_require__(11);

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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _container = __webpack_require__(4);

	var _container2 = _interopRequireDefault(_container);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _resize = __webpack_require__(15);

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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _minimalUtils = __webpack_require__(14);

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
/* 14 */
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
/* 15 */
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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _minimalUtils = __webpack_require__(14);

	var _control = __webpack_require__(17);

	var _control2 = _interopRequireDefault(_control);

	var _en = __webpack_require__(18);

	var _en2 = _interopRequireDefault(_en);

	var _fr = __webpack_require__(19);

	var _fr2 = _interopRequireDefault(_fr);

	var _index = __webpack_require__(1);

	var UI = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('core-module-toolbar').defineLevel();

	exports.default = new Class({

	  options: {
	    lang: 'en',
	    toolbar: {
	      role: 'admin'
	    }
	  },

	  /**
	   * initialize toolbar
	   * @param {Object} obj
	   */
	  _initToolbar: function _initToolbar(obj) {
	    _log.debug('_initToolbar', obj);

	    this.langControl = {
	      en: _en2.default,
	      fr: _fr2.default
	    };

	    this.toolbar = {};
	    this.control = {};

	    if (!obj.list) {
	      _log.warn('missing list field');
	      return;
	    }

	    // more needs to be instantiated first
	    // because other controls depend on it
	    var moreIdx = obj.list.indexOf('more');
	    if (moreIdx > 0) {
	      _minimalUtils.array.move(obj.list, moreIdx, 0);
	    }

	    this._initToolbarReady(obj);

	    for (var i = 0; obj.list.length > i; i++) {
	      var name = obj.list[i];
	      var bar = obj[name];

	      if (!bar) {
	        continue;
	      }

	      //continue if container is not defined
	      if (!bar.container) {
	        continue;
	      }

	      //init container if doesn't exist
	      if (!this.container[bar.container]) {
	        this.container['_init' + bar.container.capitalize()]();
	      }

	      var element = this._initToolbarEl(name, bar);

	      this._initToolbarComp(bar, element);
	    }

	    this.container.fireEvent('resize');
	  },

	  /**
	   * init toolbar element
	   * @param  {string} name
	   * @param  {Object} bar
	   * @return {DOMElement}
	   */
	  _initToolbarEl: function _initToolbarEl(name, bar) {
	    var element = this.toolbar[name] = new Element('div', {
	      'class': 'ui-toolbar'
	    }).addEvents({}).inject(this.container[bar.container]);

	    if (bar.klss) {
	      element.addClass(bar.klss);
	    }

	    element.addClass('toolbar-' + name);

	    return element;
	  },

	  /**
	   * init toolbar eeady
	   * @return {void}
	   */
	  _initToolbarReady: function _initToolbarReady(obj) {
	    var self = this;
	    this.ready = 0;
	    this.isReady = 0;

	    Object.map(obj, function (map) {
	      if (map.list) {
	        self.ready = self.ready + map.list.length;
	      }
	    });

	    this.addEvent('isReady', function (isReady) {
	      //_log.debug('isready', isReady);
	      if (isReady >= this.ready) {
	        //_log.debug('toolbarReady');
	        self.fireEvent('toolbarReady', isReady);
	      }
	    });
	  },

	  /**
	   * init toolbar comp
	   * @param {Object} bar
	   * @param {DOMElement} element
	   */
	  _initToolbarComp: function _initToolbarComp(bar, element) {
	    _log.debug('_initToolbarComp', bar, element);

	    bar.list = bar.list || [];

	    for (var i = 0; i < bar.list.length; i++) {
	      var name = bar.list[i];
	      var def = bar[name] || {};
	      this._instanciateComp(name, def, element);
	    }
	  },

	  /**
	   * [_instanciateComp description]
	   * @param  {string} name    [description]
	   * @param  {Object} def     [description]
	   * @param  {HTMLElement} element [description]
	   * @return {void}
	   */
	  _instanciateComp: function _instanciateComp(name, def, element) {
	    _log.debug('_instanciateComp', name, def, element);

	    var self = this;
	    var clss = def.clss || 'ui/button';

	    //process name and klss for components with ::
	    var temp = name.split(/\:\:/);
	    name = temp[0];
	    temp.splice(0, 1);
	    var klss = temp.join(' ');

	    if (!name) {
	      _log.warn('missing name');
	      return;
	    }

	    //handle separator
	    if (name === 'separator') {
	      clss = 'ui/separator';
	    }

	    var icon = def.icon || name;
	    var opts = {
	      name: name,
	      icon: _control2.default[icon] || 'mdi-action-help',
	      type: 'action',
	      klss: klss
	    };

	    if (def.opts) {
	      opts = def.opts;
	      opts.text = Locale.get('control.' + name, name) || name;
	      opts.icon = _control2.default[icon] || 'mdi-action-help';
	    }

	    var lang = this.options.lang;

	    if (!this.langControl[lang]) {
	      lang = 'en';
	    }

	    var text = '';
	    if (def.text) {
	      text = this.langControl[lang][name] || def.text;
	    }

	    if (clss === 'ui/button' || clss === 'ui/buttonmenu') {
	      opts.text = this.langControl[lang][name] || Locale.get('control.' + name, name) || text || name;
	    }

	    var isAllow = this._isAllow(name);

	    if (isAllow) {
	      this._requireModule(clss, function (Clss) {
	        self._initToolbarControl(Clss, name, clss, opts, element);
	      });

	      self.isReady++;
	      self.fireEvent('isReady', self.isReady);
	    }
	  },

	  /**
	   * check role for control
	   * @return {boolean}
	   */
	  _isAllow: function _isAllow(name) {
	    var isAllow = true;
	    var role = this.options.toolbar.role;

	    this.options.control = this.options.control || {};

	    var ctrRole = this.options.control[role];

	    if (!ctrRole || !ctrRole.disallowed) {
	      return isAllow;
	    }

	    if (ctrRole.disallowed.indexOf(name) !== -1) {
	      isAllow = false;
	    }

	    return isAllow;
	  },

	  /**
	   * _initToolbarControl
	   */
	  _initToolbarControl: function _initToolbarControl(Clss, name, clss, opts, element) {
	    //_log.debug('Clss', typeOf(Clss));

	    var self = this;

	    if (!Clss) {
	      _log.warn('not found, should require?', name, opts);
	      return;
	    }

	    this.control[name] = new Clss(opts).inject(element);

	    // init more toolbar menu
	    if (name === 'more') {
	      this._initMore();
	      return;
	    }

	    self.control[name].addEvents({
	      /**
	       * @ignore
	       */
	      change: function change(value) {
	        if (this.isEnable()) {
	          self.fireEvent(name, value);
	        }
	      }
	    });

	    if (clss === 'ui/button') {
	      self.control[name].addEvents({
	        /**
	         * @ignore
	         */
	        press: function press() {
	          self.fireEvent('control::pressed');
	          if (this.isEnable()) {
	            self.fireEvent('control::' + name, this);
	            self.fireEvent(name, [self]);
	          }
	        }
	      });
	    }

	    if (clss === 'ui/upload') {
	      self.control[name].addEvents({
	        /**
	         * @ignore
	         */
	        uploadFile: function uploadFile(files) {
	          if (this.isEnable()) {
	            self.fireEvent(name, [files]);
	          }
	        }
	      });
	    }

	    if (clss === 'ui/field') {
	      self.control[name].addEvents({
	        /**
	         * @ignore
	         */
	        change: function change() {
	          self.fireEvent('control::pressed');
	          if (this.isEnable()) {
	            self.fireEvent('control::' + name, this);
	            self.fireEvent(name, [self]);
	          }
	        }
	      });
	    }

	    if (clss === 'ui/buttonmenu') {
	      self.control[name].addEvents({
	        /**
	         * @ignore
	         */
	        press: function press(name) {
	          self.fireEvent('control::pressed');
	          if (this.isEnable()) {
	            self.fireEvent('control::' + name, this);
	            self.fireEvent(name, [self]);
	          }
	        }
	      });
	    }
	  },

	  /**
	   * [_initMore description]
	   * @return {void}
	   */
	  _initMore: function _initMore() {
	    _log.debug('_initMore', this.toolbar.more);

	    if (!this.control || !this.toolbar) {
	      _log.warn('missing control or toolbar');
	      return null;
	    }

	    var timer = null;

	    var toolbar = this.toolbar.more;
	    var control = this.control.more;

	    if (!control || !toolbar) {
	      _log.warn('missing control or toolbar', control, toolbar);
	      return;
	    }

	    control.addEvent('press', function (ev) {
	      _log.debug('-- press', ev);
	      //var coord = control.getCoordinates();
	      toolbar.setStyles({
	        display: 'inline-block'
	      });

	      return true;
	    });

	    this.addEvent('control::pressed', function () {
	      toolbar.setStyle('display', 'none');
	    });

	    toolbar.addEvents({
	      /**
	       * @ignore
	       */
	      mouseleave: function mouseleave() {
	        clearTimeout(timer);
	        timer = setTimeout(function () {
	          toolbar.setStyle('display', 'none');
	        }, 500);
	      },
	      /**
	       * @ignore
	       */
	      mouseenter: function mouseenter() {
	        clearTimeout(timer);
	      },
	      /**
	       * @ignore
	       */
	      click: function click() {
	        toolbar.setStyle('display', 'none');
	      }
	    });
	  },

	  /**
	   * [_requireView description]
	   * @return {void}
	   */
	  _requireModule: function _requireModule(module, cb) {
	    _log.debug('_requireModule', module);
	    if (typeOf(module) === 'class') {
	      cb(module);
	      return;
	    }

	    var Class = UI[module.replace('ui/', '').capitalize()];
	    cb(Class);
	  }

	});

/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("control/en", [], factory);
		else if(typeof exports === 'object')
			exports["control/en"] = factory();
		else
			root["control/en"] = factory();
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
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  showAll: 'Show All',
		  resendClosure: 'Resend Closure email',
		  resendApproval: 'Resend Approval',
		  reload: 'Reload',
		  publish: 'Publish',
		  publishAll: 'Publish All',
		  recipients: 'Recipients',
		  tracker: 'Tracker',
		  code: 'Code',
		  look: 'Look',
		  openinnew: 'Open',
		  validator: 'Validate',
		  setPending: 'Set to pending',
		  sort: 'Sort',
		  apply: 'Apply',
		  save: 'Save',
		  new: 'New',
		  file: 'File',
		  invoice: 'Invoice',
		  editmove: 'Move',
		  moveup: 'Move up',
		  movedown: 'Move down',
		  send: 'Send',
		  choose: 'Choose',
		  activity: 'activité',
		  agenda: 'agenda',
		  aircrafts: 'aircrafts',
		  billing: 'invoice',
		  catalog: 'catalog',
		  client: 'clients',
		  contact: 'contacts',
		  content: 'content',
		  course: 'course',
		  desktop: 'desktop',
		  directory: 'liens',
		  document: 'files',
		  export: 'Export list',
		  finder: 'finder',
		  cancelCase: 'cancel',
		  jobs: 'jobs',
		  legs: 'legs',
		  mailing: 'mailing',
		  news: 'news',
		  nodes: 'nodes',
		  objects: 'objects',
		  orders: 'commandes',
		  participants: 'participants',
		  places: 'lieux',
		  planning: 'planning',
		  project: 'projets',
		  register: 'register',
		  resource: 'resource',
		  resources: 'resources',
		  sellers: 'sellers',
		  sessions: 'inscriptions',
		  settings: 'préférences',
		  template: 'template',
		  ticket: 'ticket',
		  trash: 'Trash',
		  website: 'website',
		  proforma: 'proforma',
		  emptyNode: 'empty node',
		  emptyView: 'empty view',
		  position: 'Position',
		  minus: 'Minus',
		  filter: 'Filter',
		  search: 'Search',
		  more: 'More',
		  edit: 'Edit',
		  back: 'Back',
		  side: 'Side',
		  today: 'Today',
		  sync: 'Sync',
		  add: 'Add',
		  forward: 'Forward',
		  addOne: 'Add one',
		  fixed: 'Fixed',
		  delete: 'Delete',
		  print: 'Print',
		  zoomOut: 'Zoom Out',
		  zoomIn: 'Zoom In',
		  organize: 'Organize',
		  infoedit: 'Edit JSON',
		  addnode: 'Add node',
		  infoview: 'Edit Info',
		  history: 'History',
		  collapse: 'Collapse',
		  uncollapse: 'Uncollapse',
		  listtype: 'List Type',
		  share: 'Share',
		  navi: 'Navi',
		  apps: 'Apps',
		  beat: 'Beat',
		  notification: 'Notification',
		  user: 'User',
		  cancel: 'Cancel',
		  close: 'Close',
		  subcribe: 'Subcribe',
		  ship: 'Ship',
		  complete: 'Complete',
		  replan: 'Replan',
		  signout: 'Sign out'
		};

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("control/fr", [], factory);
		else if(typeof exports === 'object')
			exports["control/fr"] = factory();
		else
			root["control/fr"] = factory();
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
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  showAll: 'Liste Complète',
		  reload: 'Recharger',
		  publish: 'Publier',
		  publishAll: 'Publier Tout',
		  recipients: 'Destinataires',
		  tracker: 'Traqueur',
		  code: 'Code',
		  look: 'Aperçu',
		  openinnew: 'Ouvrir',
		  validator: 'Valider',
		  setPending: 'Mettre en attente',
		  sort: 'Trier',
		  apply: 'Appliquer',
		  save: 'Sauver',
		  new: 'Nouveau',
		  file: 'Charger',
		  invoice: 'Facturer',
		  editmove: 'Position',
		  moveup: 'Monter',
		  movedown: 'Descendre',
		  send: 'Envoyer',
		  choose: 'Choisir',
		  activity: 'Activité',
		  agenda: 'agenda',
		  aircrafts: 'avions',
		  billing: 'facture',
		  catalog: 'catalogue',
		  client: 'clients',
		  contact: 'contacts',
		  content: 'contenu',
		  course: 'cours',
		  desktop: 'bureau',
		  directory: 'liens',
		  document: 'fichiers',
		  export: 'Exporter liste',
		  finder: 'finder',
		  cancelCase: 'Annuler',
		  jobs: 'Tâches',
		  legs: 'legs',
		  mailing: 'mailing',
		  news: 'nouvelles',
		  nodes: 'noeuds',
		  objects: 'objets',
		  orders: 'commandes',
		  participants: 'participants',
		  places: 'lieux',
		  planning: 'planning',
		  project: 'projets',
		  register: 's\'enregistrer',
		  resource: 'ressource',
		  resources: 'ressources',
		  sellers: 'vendeurs',
		  sessions: 'inscriptions',
		  settings: 'préférences',
		  template: 'modèle',
		  ticket: 'ticket',
		  trash: 'Corbeille',
		  website: 'Site Web',
		  proforma: 'proforma',
		  emptyNode: 'Noeud vide',
		  emptyView: 'Vue vide',
		  position: 'Position',
		  minus: 'Minus',
		  filter: 'Filtrer',
		  search: 'Chercher',
		  more: 'Plus',
		  edit: 'Editer',
		  back: 'Précédent',
		  side: 'Côté',
		  today: 'Autjoud\'hui',
		  sync: 'Synchroniser',
		  add: 'Ajouter',
		  forward: 'Avancer',
		  addOne: 'Ajouter un',
		  fixed: 'Fixe',
		  delete: 'Supprimer',
		  print: 'Imrpimer',
		  zoomOut: 'Réduire',
		  zoomIn: 'Agrandire',
		  organize: 'Organiser',
		  infoedit: 'Edit JSON',
		  addnode: 'Ajouter noeud',
		  infoview: 'Editer Info',
		  history: 'Historique',
		  collapse: 'Réduire',
		  uncollapse: 'Déployer',
		  listtype: 'Type de Liste',
		  share: 'Partager',
		  navi: 'Navigation',
		  apps: 'Applications',
		  beat: 'Beat',
		  notification: 'Notification',
		  user: 'Utilisateur',
		  cancel: 'Annuler',
		  close: 'Fermer',
		  subcribe: 'S\'inscrire',
		  ship: 'Expédier',
		  complete: 'Complet',
		  replan: 'Replannifier',
		  signout: 'Se déconnecter'
		};

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _container = __webpack_require__(4);

	var _container2 = _interopRequireDefault(_container);

	var _window = __webpack_require__(21);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('core-view-container').defineLevel();

	exports.default = new Class({

	  options: {
	    containers: {
	      dispose: true
	    }
	  },

	  /**
	   * Initialize Container
	   * @private
	   */
	  _initContainer: function _initContainer() {
	    _log.debug('_initContainer', this.container);
	    var self = this;
	    var opts = this.options;
	    var type = typeOf(opts.container);

	    if (type === 'object') {
	      this.container.addEvent('resize', function () {
	        self.fireEvent('resize');
	      });
	    } else if (type === 'element') {
	      this.container = new _container2.default({
	        container: opts.container
	      });
	    } else {
	      if (opts.window) {
	        var win = new _window2.default(opts.window);

	        this.content = win.body;
	        this.element = win.body;
	        this.element.addClass('view-' + opts.clss);
	        this.container = win;

	        this.container.addEvent('resize', function () {
	          self.fireEvent('resize');
	        });
	      }
	    }

	    if (!this.content) {
	      this._initContent();
	    }

	    this.addEvents({
	      focus: function focus() {
	        self.container.setState('focus');
	      },
	      blur: function blur() {
	        self.container.setState();
	      }
	    });

	    /*this.container.addEvent('resize', function(){
	      self.fireEvent('resize');
	    });*/
	  },

	  /**
	   * Add Slide(subview), intect it in the container, resize container and return it
	   * @param {idx} idx
	   */
	  addContainer: function addContainer(idx) {
	    var self = this;
	    var opts = this.options.view;
	    var index = idx || this.index;

	    //var size = this.size;

	    var container = new _container2.default(opts).inject(this);

	    self.addEvent('resize', function () {
	      container.fireEvent('resize');
	    });

	    if (this.views.length === 0) {
	      this.index = 0;
	    }

	    container.addClass('view' + index);
	    this.views[index] = container;

	    this.fireEvent('added', container);

	    if (!idx) {
	      this.view = container;
	    }

	    return container;
	  },

	  /**
	   * Set the given view as active and move to it
	   * @param {index} index
	   */
	  moveTo: function moveTo(index) {
	    //_log.debug('moveTo', index);
	    var opts = this.options;

	    this.index = index;
	    this.last = this.view;

	    if (!this.views[index]) {
	      this.view = this.addContainer(index);
	    } else {
	      this.view = this.views[index];

	      if (opts.containers.dispose) {
	        this.view.element.inject(this.element);
	        this.fireEvent('updateWeekCell');
	      } else {
	        this.view.element.show();
	      }
	    }

	    /*hide last element*/
	    if (opts.containers.dispose) {
	      this.last.element.dispose();
	    } else {
	      this.last.element.hide();
	    }

	    return this.view;
	  },

	  /**
	   * Find the next view from the list and move to it if exist
	   * @param {unit} unit
	   */
	  next: function next(unit) {
	    unit = unit || 1;

	    var index = this.index + unit;

	    this.moveTo(index, 1);
	  },

	  /**
	   * Find the previous view from the list and move to it if exist
	   * @param {unit} unit
	   */
	  back: function back(unit) {
	    unit = unit || 1;

	    var index = this.index - unit;

	    this.moveTo(index, -1);
	  }

	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(22);

	var _controller2 = _interopRequireDefault(_controller);

	var _container = __webpack_require__(4);

	var _container2 = _interopRequireDefault(_container);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('window').defineLevel();

	exports.default = new Class({

	  Extends: _container2.default,

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

	    location: 'center',
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

	    hideOnDrag: true,

	    // Resize options
	    resizable: true,
	    resizeLimitX: [160, screen.width],
	    resizeLimitY: [260, screen.height],
	    resizeOnDragIfMaximized: false,
	    resizeBorders: ['top', 'right', 'bottom', 'left']
	  },

	  /**
	   * initialize
	   * @param  {Object} options
	   * @return {void}
	   */
	  initialize: function initialize(options) {
	    this._initController();
	    this.parent(options);

	    this._initLocation();
	    this.adaptLocation();

	    if (this.options.position == 'fixed') {
	      this.element.setStyle('position', 'fixed');
	    }

	    this.controller.register(this);

	    if (this.options.focus) {
	      this.controller.focus(this);
	    }

	    var self = this;
	    window.onresize = function (event) {
	      self.controller.resetMinimized();
	    };

	    this.inject(this.options.container);
	  },

	  /**
	   * init controller
	   * @return {void}
	   */
	  _initController: function _initController() {

	    this.controller = new _controller2.default();
	    //_log.debug('_initController', this.controller);
	  },

	  /**
	   * init element
	   * @return {void}
	   */
	  _initElement: function _initElement() {
	    this.parent();

	    //this._initContent();
	    //this._initShim();

	    //this._initControl(this.options.controls);
	  },

	  /**
	   * [_initShim description]
	   * @return {[type]} [description]
	   */
	  _initShim: function _initShim() {
	    this.shim = new Element('iframe', {
	      src: 'javascript:false;document.write("");',
	      scrolling: 'no',
	      frameborder: 0,
	      styles: {
	        top: 0,
	        left: 0,
	        zIndex: '1',
	        position: 'absolute',
	        border: 'none',
	        filter: 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)'
	      },
	      'class': 'iframeShim'
	    }).inject(this.element, 'top').store('IframeShim', this);
	  },

	  /**
	   * Create a new head element, set class and styles and inject
	   * @param  {Object} options
	   * @return {void}
	   */
	  _initHead: function _initHead(options) {
	    this.parent(options);
	    this.dragHandlers.push(this.head);

	    // this.title = new UI.Text({
	    //  type: 'title',
	    //  text: this.options.title
	    // }).inject(this.head);
	  },

	  /**
	   * Create window controls that allow window close, maximize and minimize
	   * @return {void}
	   */
	  _initControl: function _initControl() {
	    var opts = this.options;

	    if (!this.head) {
	      return;
	    }

	    //_log.debug('buildControls');

	    if (!this.options.controls) {
	      return;
	    }

	    var self = this;

	    this.controls = new Element('div', {
	      'class': opts.name + '-control'
	    }).addEvent('click', function (e) {
	      e.stop();
	    }).inject(this.head);

	    opts.controls.each(function (action) {
	      new _button2.default({
	        icon: action,
	        text: action,
	        klss: 'button-' + action
	      }).addEvent('press', function (ev) {
	        _log.debug('press', ev);
	        self.control(action);
	      }).inject(self.controls);
	    });

	    this.addEvents({
	      'minimize': function minimize() {
	        this.controls.hide();
	      },
	      'normalize': function normalize() {
	        this.controls.show();
	      }
	    });

	    this.dragHandlers.push(this.controls);

	    //this.fireEvent('resize');
	  },

	  /**
	   * initBody
	   * @param  {Object} options
	   * @return {void}
	   */
	  _initBody: function _initBody(options) {
	    this.fireEvent('resize');

	    this.body = new Element('div').addClass('container-body').inject(this.element);

	    this.addEvents({
	      'minimize': function minimize() {
	        this.body.hide();
	      },
	      'normalize': function normalize() {
	        this.body.show();
	      }
	    });
	  },

	  /**
	   * initFoot
	   * @param  {Object} options
	   * @return {void}
	   */
	  _initFoot: function _initFoot(options) {
	    this.parent(options);
	    this.dragHandlers.push(this.foot);

	    this.addEvents({
	      minimize: function minimize() {
	        this.body.hide();
	      },
	      normalize: function normalize() {
	        this.body.show();
	      }
	    });
	  },

	  /**
	   * set title html
	   * @param {string} title html formatted title
	   */
	  setTitle: function setTitle(title) {
	    return;

	    if (this.title && this.head) {
	      return this.title.set('text', title);
	    }
	  },

	  /**
	   * _initClass container related class
	   * @return {void}
	   */
	  _initClass: function _initClass() {
	    this.parent();

	    this.element.addClass('ui-window');
	  },

	  /**
	   * [_initEvents description]
	   * @return {void}
	   */
	  _initEvents: function _initEvents() {
	    this.parent();

	    var self = this;

	    this.addEvents({
	      onFocus: function onFocus() {
	        //_log.debug('OnFocus');
	      },
	      injected: function injected() {
	        self.adaptLocation();
	      },
	      onResizeStart: function onResizeStart() {},
	      onResizeComplete: function onResizeComplete() {
	        this.coord = this.element.getCoordinates();
	      },
	      onDragStart: function onDragStart() {
	        //_log.debug('darg start', this);
	      },
	      'onDragComplete': function onDragComplete() {
	        //_log.debug('darg com', ui.window.underlay);
	        this.coord = this.element.getCoordinates();
	      },
	      resizeComplete: function resizeComplete() {
	        self.maximized = false;
	        this.coord = this.element.getCoordinates();
	      }
	    });

	    this.element.addEvents({
	      mousedown: function mousedown() {
	        self.focus();
	      }
	    });

	    if (this.resizeHandlers) {
	      this.resizeHandlers.each(function (handler) {
	        handler.addEvents({
	          'mousedown': function mousedown() {
	            self.controller.showunderlay(self);
	            self.overlay.show();
	          },
	          'mouseup': function mouseup() {
	            self.underlay.hide();
	            self.overlay.hide();
	          }
	        });
	      });
	    }
	  },

	  /**
	   * init Underlay
	   * @return {void}
	   */
	  _initUnderlay: function _initUnderlay() {
	    //_log.debug('_initUnderlay', this.options.container);

	    var self = this;

	    var container = this.options.container || $(document.body);

	    //_log.debug(container);

	    //_log.debug('zindex', this.element.getStyle('zIndex'));

	    this.underlay = new Element('div', {
	      'class': 'dialog-underlay'
	    }).inject(container);

	    this.underlay.addEvents({
	      mousedown: function mousedown() {
	        //_log.debug('click underlay');
	        //_log.debug(self.editForm.control.apply);
	        self.element.addClass('reveal-window');
	      },
	      mouseup: function mouseup() {
	        //_log.debug('click underlay');
	        //_log.debug(self.editForm.control.apply);
	        self.element.removeClass('reveal-window');
	      }

	    });

	    this.underlay.show();

	    this.addEvent('close', function () {
	      self.underlay.destroy();
	    });
	  },

	  /**
	   * focus
	   * @return {void}
	   */
	  focus: function focus() {
	    if (this.minimized) {
	      this.normalize();
	      this.controller.resetMinimized();
	    } else if (this.maximized && this.options.resizeOnDragIfMaximized) {
	      this.normalize();
	    } else {
	      this.controller.focus(this);
	    }
	    this.overlay.hide();
	    if (this.state != 'default') {

	      this.setState('default');
	    }
	  },

	  /**
	   * handle window controls' actions
	   * @param  {string} action minimize,maximize,close
	   * @return {Object}
	   */
	  control: function control(action) {
	    this[action]();
	    return this;
	  },

	  /**
	   * This action method displays the minimized window
	   * @return {void}
	   */
	  minimize: function minimize() {

	    this.fireEvent('minimize');
	    this.disableDrag();

	    this.coord = this.element.getCoordinates();

	    this.maximized = false;
	    this.minimized = true;

	    this.setState('minimized');

	    var coord = this.controller.getcoord('minimized');

	    // _log.debug('--',coord);

	    this.element.setStyles(coord);

	    this.controller.focus();
	  },

	  /**
	   * This action method set the size to fit the window container
	   * @return {Object}
	   */
	  maximize: function maximize() {
	    if (this.maximized) {
	      this.normalize();
	    } else {

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

	  /**
	   * Normalize window
	   * @return {void}
	   */
	  normalize: function normalize() {
	    var self = this;

	    this.fireEvent('normalize');
	    this.element.setStyles(this.coord);
	    this.setState('default');

	    this.maximized = false;
	    this.minimized = false;

	    // c'est moche
	    // this.fireEvent('onResizeDrag');

	    (function () {
	      self.enableDrag();
	    }).delay(1000);

	    return this;
	  },

	  /**
	   * [storeCoordinates description]
	   * @return {void}
	   */
	  storeCoordinates: function storeCoordinates() {
	    this.coord = this.element.getCoordinates();
	  },

	  /**
	   * Close window
	   * @return {void}
	   */
	  close: function close() {
	    //_log.debug('close');
	    this.controller.close(this);
	    this.fireEvent('closed');

	    return this;
	  }

	});

/***/ },
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _control = __webpack_require__(24);

	var _control2 = _interopRequireDefault(_control);

	var _control3 = __webpack_require__(17);

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
/* 24 */
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
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Class({

	  /**
	   * Initialize Dragging - The idea is to allow dragging when content is
	   * larger than the container For example to view an image. as google map.
	   * @method _initDragging
	   * @param {DOMElement} element
	   * @param {Object} options
	   * @private
	   */
	  _initDragging: function _initDragging(element, options) {

	    element = this.element;
	    // _log.debug('Drag.Scroll ', element);
	    // Drag speed
	    var prevTime;
	    var prevScroll;
	    var speed;
	    var scroll;
	    var timer;
	    var timerFn = function timerFn() {
	      var now = Date.now();
	      scroll = [element.scrollLeft, element.scrollTop];
	      if (prevTime) {
	        var dt = now - prevTime + 1;
	        speed = [1000 * (scroll[0] - prevScroll[0]) / dt, 1000 * (scroll[1] - prevScroll[1]) / dt];
	      }

	      prevScroll = scroll;
	      prevTime = now;
	    };

	    // Use Fx.Scroll for scrolling to the right position after the dragging
	    var fxdrag = this.fxdrag = new Fx.Scroll(element, {
	      transition: Fx.Transitions.Expo.easeOut
	    });

	    //_log.debug('-----------', fxdrag);

	    // Set initial scroll
	    fxdrag.set.apply(fxdrag, this.limit(element.scrollLeft, element.scrollTop));

	    //var self = this;
	    //var friction = this.options.friction;
	    var axis = this.options.axis;

	    // Make the element draggable
	    this.drag = new Drag(element, {
	      style: false,
	      invert: true,
	      handlers: [],
	      modifiers: {
	        x: axis.x && 'scrollLeft',
	        y: axis.y && 'scrollTop'
	      },
	      onStart: function onStart() {
	        // Start the speed measuring
	        timerFn();
	        timer = setInterval(timerFn, 1000 / 60);
	        // cancel any fx if they are still running
	        fxdrag.cancel();
	      },
	      onDrag: function onDrag() {
	        //_log.debug(element.scrollHeight,element.scrollWidth);
	      },
	      onComplete: function onComplete() {
	        // Stop the speed measuring
	        prevTime = false;
	        clearInterval(timer);
	        // Scroll to the new location
	        /*fxdrag.start.apply(fxdrag, self.limit(
	          scroll[0] + (speed[0] || 0) / friction,
	          scroll[1] + (speed[1] || 0) / friction
	        ));*/
	      }
	    });
	  }

	});

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Class({

	  /**
	   * Calculate the limits
	   * @method getLimit
	   * @return {Array}
	   * @private
	   */
	  getLimit: function getLimit() {
	    var limit = [[0, 0], [0, 0]];
	    var element = this.element;

	    limit[0][0] = 0;
	    limit[0][1] = limit[0][0] - element.clientWidth;
	    limit[1][0] = 0;
	    limit[1][1] = limit[1][0] - element.clientHeight;

	    return limit;
	  },

	  /**
	   * Apply the limits to the x and y values
	   * @method limit
	   * @param {x} x
	   * @param {y} y
	   * @return {Array}
	   * @private
	   */
	  limit: function limit(x, y) {
	    var limit = this.getLimit();
	    return [x.limit(limit[0][0], limit[0][1]), y.limit(limit[1][0], limit[1][1])];
	  }

	});

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('view-core-loader').defineLevel();

	exports.default = new Class({

	  options: {
	    loader: {
	      text: {
	        default: 'Loading...',
	        statusBar: 'Loading '
	      },
	      delay: 200
	    }
	  },

	  /**
	   * init loader
	   * @return {void}
	   */
	  _initLoader: function _initLoader() {
	    _log.debug('_initLoader');

	    this.statusBarText = this.options.loader.text.statusBar;

	    this.addEvents({
	      getData: this.showLoader.bind(this),
	      noData: this.hideLoader.bind(this),
	      setList: this.hideLoader.bind(this),
	      progress: this.setLoaderText.bind(this)
	    });
	  },

	  /**
	   * Show Loader
	   * @return {void}
	   */
	  showLoader: function showLoader() {
	    _log.debug('showLoader');

	    var self = this;
	    var opts = this.options.loader;

	    this.setStatus(this.statusBarText);

	    if (!this.loader) {
	      this._createLoader();
	    }

	    /*display loader after 200ms*/
	    clearTimeout(this.loaderTimeout);
	    this.loaderTimeout = setTimeout(function () {
	      self.loader.setStyle('display', 'initial');
	    }, opts.delay);
	  },

	  /**
	   * Hide Loader
	   * @return {void}
	   */
	  hideLoader: function hideLoader() {
	    _log.debug('hideLoader', this.loader);

	    if (!this.loader) {
	      return;
	    }

	    clearTimeout(this.loaderTimeout);
	    this.loader.destroy();
	    this.loader = undefined;
	    this.loaderText = undefined;
	  },

	  /**
	   * create loader element
	   * @return {void}
	   */
	  _createLoader: function _createLoader() {
	    _log.debug('_createLoader', this.element);

	    if (!this.element) {
	      return;
	    }

	    var opts = this.options.loader;

	    var loader = this.loader = new Element('div', {
	      class: 'ui-loader',
	      styles: {
	        display: 'none'
	      }
	    }).inject(this.element, 'before');

	    this.loaderText = new Element('span', {
	      html: opts.text.default,
	      class: 'loader-text'
	    }).inject(loader, 'top');

	    new Element('div', {
	      class: 'loader-bar'
	    }).inject(loader, 'bottom');
	  },

	  /**
	   * set loader text
	   * @return {void}
	   */
	  setLoaderText: function setLoaderText(text) {
	    //_log.debug('setLoaderText', this.loaderText, text);

	    if (this.loaderText) {
	      this.loaderText.set('html', this.statusBarText + text);
	    } else if (text) {
	      this.setStatus(this.statusBarText + text);
	    }
	  }

	});

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('core-view-scroll').defineLevel();

	exports.default = new Class({

	  /**
	   * Initialize Auto Scroll
	   * Manage scroll when mouse reach boudaries dragging element
	   * @private
	   */
	  _initAutoScroll: function _initAutoScroll() {
	    this.scroll = new Fx.Scroll(this.element, this.options.autoScrollOptions);
	  },

	  /**
	   * Initialize Scroll
	   * @param {scroll} scroll
	   * @private
	   */
	  _initScroll: function _initScroll(scroll) {
	    var opts = this.options;

	    /*if (opts.scrollbar) {
	      this._initScrollbar(opts.scrollbar);
	    }*/

	    if (opts.scroller) {
	      this._initScroller(opts.scroller);
	    }
	  },

	  /**
	   * Initialize Scrollbar
	   * Creates a new scrollbar object _setEventsed to the container
	   * @private
	   */
	  _initScrollbar: function _initScrollbar() {
	    var self = this;

	    var options = {};
	    options.container = this.element;

	    this.scrollbar = new UI.Scroll(options).addEvent('scrolling', function () {
	      //_log.debug('------------');
	      self.fireEvent('scrolling');
	    });

	    this.addEvents({
	      // this shouldn't be neessary
	      loadCompplete: function loadCompplete() {
	        //_log.debug('loaded');
	        self.scrollbar.update();
	      },
	      resize: function resize() {
	        //self.scrollbar.element.setStyle('padding-top', this.head.getSize().y+'px');
	        self.scrollbar.update();
	      }
	    });
	  },

	  /**
	   * Initialize Scroller - Creates a new scrollbar object _setEventsed to the container
	   * @private
	   */
	  _initScroller: function _initScroller() {
	    //var self = this;

	    //_log.debug('_initScroller', this.element);

	    this.scroller = new Scroller(this.element, this.options.scroller_opts).addEvent('change', function () {
	      _log.debug('scroller change');
	    });

	    /*this.container.addEvents({
	      resize: function() {
	        _log.debug('!!!', self.element.getSize().y);
	        //self.scroller.options.area
	      }
	    });*/

	    /*this.element.addEvents({
	      mousedown: function() {
	        self.scroller.start();
	      },
	      mouseup: function() {
	        self.scroller.stop();
	      }
	    });*/

	    return this;
	  }

	});

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('view').defineLevel();

	exports.default = new Class({

	  /**
	   * Initialize Zoom
	   * @method _initZoom
	   * @private
	   */
	  _initZoom: function _initZoom() {},

	  /**
	   * Zoom In
	   * @method zoomIn
	   */
	  zoomIn: function zoomIn() {
	    var self = this;
	    // zoom factor
	    if (!this.zf) {
	      this.zf = 0.7;
	    }

	    if (this.zf > 1.6) {
	      return;
	    }

	    //_log.debug(typeOf(this.zf));

	    this.zf = self.zf.toFloat() + 0.1;

	    var lh = this.zf + 0.1;
	    var lhem = lh.toString() + 'em';
	    var em = this.zf.toString() + 'em';

	    _log.debug(em, lhem);
	    this.element.setStyle('font-size', em);
	    this.element.setStyle('line-height', lhem);

	    this.fireEvent('resize');
	  },

	  /**
	   * Zoom Out
	   * @method zoomOut
	   */
	  zoomOut: function zoomOut() {
	    var self = this;

	    if (!this.zf) {
	      this.zf = 0.7;
	    }

	    if (this.zf < 0.5) {
	      return;
	    }

	    this.zf = self.zf.toFloat() - 0.1;

	    var lh = this.zf + 0.1;
	    var lhem = lh.toString() + 'em';
	    var em = this.zf.toString() + 'em';

	    _log.debug(em, lhem);
	    this.element.setStyle('font-size', em);
	    this.element.setStyle('line-height', lhem);

	    this.fireEvent('resize');
	  }

	});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * $script.js JS loader & dependency manager
	  * https://github.com/ded/script.js
	  * (c) Dustin Diaz 2014 | License MIT
	  */

	(function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	})('$script', function () {
	  var doc = document
	    , head = doc.getElementsByTagName('head')[0]
	    , s = 'string'
	    , f = false
	    , push = 'push'
	    , readyState = 'readyState'
	    , onreadystatechange = 'onreadystatechange'
	    , list = {}
	    , ids = {}
	    , delay = {}
	    , scripts = {}
	    , scriptpath
	    , urlArgs

	  function every(ar, fn) {
	    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
	    return 1
	  }
	  function each(ar, fn) {
	    every(ar, function (el) {
	      return !fn(el)
	    })
	  }

	  function $script(paths, idOrDone, optDone) {
	    paths = paths[push] ? paths : [paths]
	    var idOrDoneIsDone = idOrDone && idOrDone.call
	      , done = idOrDoneIsDone ? idOrDone : optDone
	      , id = idOrDoneIsDone ? paths.join('') : idOrDone
	      , queue = paths.length
	    function loopFn(item) {
	      return item.call ? item() : list[item]
	    }
	    function callback() {
	      if (!--queue) {
	        list[id] = 1
	        done && done()
	        for (var dset in delay) {
	          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
	        }
	      }
	    }
	    setTimeout(function () {
	      each(paths, function loading(path, force) {
	        if (path === null) return callback()
	        
	        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
	          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
	        }
	        
	        if (scripts[path]) {
	          if (id) ids[id] = 1
	          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
	        }

	        scripts[path] = 1
	        if (id) ids[id] = 1
	        create(path, callback)
	      })
	    }, 0)
	    return $script
	  }

	  function create(path, fn) {
	    var el = doc.createElement('script'), loaded
	    el.onload = el.onerror = el[onreadystatechange] = function () {
	      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
	      el.onload = el[onreadystatechange] = null
	      loaded = 1
	      scripts[path] = 2
	      fn()
	    }
	    el.async = 1
	    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
	    head.insertBefore(el, head.lastChild)
	  }

	  $script.get = create

	  $script.order = function (scripts, id, done) {
	    (function callback(s) {
	      s = scripts.shift()
	      !scripts.length ? $script(s, id, done) : $script(s, callback)
	    }())
	  }

	  $script.path = function (p) {
	    scriptpath = p
	  }
	  $script.urlArgs = function (str) {
	    urlArgs = str;
	  }
	  $script.ready = function (deps, ready, req) {
	    deps = deps[push] ? deps : [deps]
	    var missing = [];
	    !each(deps, function (dep) {
	      list[dep] || missing[push](dep);
	    }) && every(deps, function (dep) {return list[dep]}) ?
	      ready() : !function (key) {
	      delay[key] = delay[key] || []
	      delay[key][push](ready)
	      req && req(missing)
	    }(deps.join('|'))
	    return $script
	  }

	  $script.done = function (idOrDone) {
	    $script([null], idOrDone)
	  }

	  return $script
	});


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * List View
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * # Info Structure:
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               *      {
	                                                                                                                                                                                                                                                                               *          _id: unique info id
	                                                                                                                                                                                                                                                                               *          name: name
	                                                                                                                                                                                                                                                                               *      }
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * # The options accept:
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               *      selectFirst: select the first node if there is no other node to select
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               */

	//import Separator from './separator';

	//import Sort from './sort';


	var _mustache = __webpack_require__(32);

	var _mustache2 = _interopRequireDefault(_mustache);

	var _minimalUtils = __webpack_require__(14);

	var _view = __webpack_require__(2);

	var _view2 = _interopRequireDefault(_view);

	var _compat = __webpack_require__(33);

	var _compat2 = _interopRequireDefault(_compat);

	var _expand = __webpack_require__(34);

	var _expand2 = _interopRequireDefault(_expand);

	var _filter = __webpack_require__(35);

	var _filter2 = _interopRequireDefault(_filter);

	var _insert = __webpack_require__(39);

	var _insert2 = _interopRequireDefault(_insert);

	var _position = __webpack_require__(40);

	var _position2 = _interopRequireDefault(_position);

	var _search = __webpack_require__(41);

	var _search2 = _interopRequireDefault(_search);

	var _select = __webpack_require__(43);

	var _select2 = _interopRequireDefault(_select);

	var _settings = __webpack_require__(44);

	var _settings2 = _interopRequireDefault(_settings);

	var _virtual = __webpack_require__(45);

	var _virtual2 = _interopRequireDefault(_virtual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-core-ListV2').defineLevel();

	exports.default = new Class({

	  Extends: _view2.default,

	  Implements: [_compat2.default, _expand2.default, _filter2.default, _insert2.default, _position2.default, _search2.default, _select2.default,
	  //Separator,
	  _settings2.default,
	  //Sort,
	  _virtual2.default],

	  options: {
	    clss: 'listtwo',

	    rangeSize: 50,

	    save: {
	      scrollTop: true
	    },

	    // options to use template module
	    useTemplateModule: true,

	    // options to use multiple selection
	    multipleSelect: false,

	    selectable: true,

	    /*background: '' +
	      'url("data:image/svg+xml;utf8,' +
	      '<svg xmlns=\'http://www.w3.org/2000/svg\'' +
	      'width=\'100\' height=\'SIZE\'>' +
	      '  <line x1=\'0\' y1=\'SIZE\' x2=\'100\' y2=\'SIZE\'' +
	      '  style=\'stroke:rgb(243, 243, 243);stroke-width:1\' />' +
	      '</svg>")',*/

	    template: {
	      _class: 'ui-item item-list',
	      _type: 'simple',
	      simple: '' + '<div class="trunc">' + '  <span class="small right">{{type}}</span>' + '  <span class="name">{{name}}</span>' + '</div>'
	    },

	    /*integrated should be replaced client
	    and event by server*/
	    search: {
	      type: 'integrated', //integrated || event
	      enable: true
	    },

	    status: {
	      enable: true
	    },

	    filter: {
	      type: 'integrated', //integrated || event
	      enable: true
	    },

	    expand: {
	      enable: false,
	      height: '630px'
	    },

	    sort: {
	      key: 'name'
	    },

	    separator: {
	      enable: false,
	      type: 'alpha',
	      key: 'name'
	    },

	    controller: {
	      _list: ['view', 'search', 'expand', 'position', 'filter'],
	      view: {
	        'element.scroll': '_scroll',
	        'element.click': '_elementDidClick',
	        'add': 'new'
	      },
	      search: {
	        'search': 'toggleSearch'
	      },
	      expand: {
	        'elSelect': '_toggleExpand',
	        'expand': '_renderViewport',
	        'collapse': '_renderViewport'
	      },
	      filter: {
	        'filter': 'toggleFilter'
	      },
	      sort: {
	        'sort': '_setSort'
	      },
	      position: {
	        'position': 'togglePosition',
	        'moveup': 'moveUp',
	        'movedown': 'moveDown'
	      }
	    }
	  },

	  /**
	   * Initialize view
	   * @return {void}
	   */
	  _initView: function _initView() {
	    this.parent();

	    this.render = this.options.render || this.render;

	    _log.debug('_initView', this.options);

	    this.content = new Element('div', {
	      'class': 'list-content list-virtual'
	    }).inject(this.element);

	    if (this.options.template) {
	      this.element.addClass('type-' + this.options.template._type);
	    }

	    //define control obj to be used by the
	    //plugins without trigger errors
	    this.control = this.control || {};

	    var self = this;

	    /*timer used because the controls
	    are not ready when we pass here*/
	    setTimeout(function () {
	      self._initCompat();
	      //self._initStatus();
	      self._initSearch();
	      self._initExpand();
	      self._initPosition();
	      self._initFilter();
	      //self._initSort();
	      //self._initSeparator();
	    }, 200);

	    this.fireEvent('initialize');
	  },

	  /**
	   * init events
	   * @return {void}
	   */
	  _initEvents: function _initEvents() {
	    //_log.debug('_initEvents');

	    this.parent();

	    var self = this;

	    this.content.addEvents({
	      'click:relay(div.item-list)': this._onSelect.bind(this),
	      'dblclick:relay(div.item-list)': function dblclickRelayDivItemList(ev, element) {
	        self._onSelect(ev, element);
	        self.fireEvent('choose', self.get('info'));
	      }
	    });
	  },

	  /**
	   * when the list select
	   * @param  {Object} ev
	   * @return {void}
	   */
	  _onSelect: function _onSelect(ev, element) {
	    if (this.options.selectable === false) {
	      return;
	    }
	    /*var item = ev.target;
	    var element = DOM.getAttrFirst(item, 'data-id');*/
	    this._selectByElement(element);
	  },

	  /**
	   * element did click
	   * @param  {Object} ev
	   * @return {void}
	   */
	  _elementDidClick: function _elementDidClick(ev) {
	    //_log.debug('_elementDidClick');

	    if (ev.target === this.element) {
	      this.remove('new');
	      this.removeSelected();
	    }
	  },

	  /**
	   * Setter
	   * @param {string} prop
	   * @param {string} value
	   */
	  set: function set(prop, value, opts, opts1) {
	    //_log.debug('set', prop, value);

	    switch (prop) {
	      case 'list':
	        this._tempCache = [];
	        this._tempCount = undefined;
	        this.processModules = false;
	        return this._setList(value);
	      case 'virtualList':
	        this._tempCache = [];
	        this._tempCount = undefined;
	        this.processModules = false;
	        return this.setVirtualList(value, opts, opts1);
	      case 'range':
	        return this.setVirtualList(opts, value);
	      case 'info':
	        return this._setInfo(value);
	      case 'settings':
	        return this._defineSettings(value);
	      case 'status':
	        return this.setStatus(value);
	      case 'searchValue':
	        return this.setSearch(value);
	      case 'selected':
	        return this.select(value);
	      default:
	        return this._setInfo(prop);
	    }

	    this.fireEvent('set', [prop, value]);

	    return this;
	  },

	  /**
	   * Getter
	   * @param {string} prop
	   * @param {string} value
	   */
	  get: function get(prop, value) {
	    switch (prop) {
	      case 'listIds':
	      case 'idList':
	        return this._getIdList();
	      case 'listIdsSelected':
	        return this._getIdsSelected();
	      case 'info':
	      case 'selectedInfo':
	        return this.selectedInfo;
	      case 'lastInfoRange':
	        return this._getlastInfoRange(value);
	      case 'id':
	        return this.selectedId;
	      case 'infoById':
	        return this._getInfoById(value);
	      case 'list':
	        return this._getInfoList();
	      case 'options':
	        return this.options[value] || this.options;
	      case 'control':
	        return this.control[value];
	      case 'caller':
	        return this._caller;
	      case 'type':
	        return 'list';
	    }

	    return this;
	  },

	  /**
	   * [renderInfo description]
	   * @param  {Object} info
	   * @param  {number} range
	   * @return {void|item}
	   */
	  renderInfo: function renderInfo(info, range, where) {
	    //_log.debug('renderInfo', info, range);

	    if (!info) {
	      _log.warn('missing info', info);
	      return;
	    }

	    var rangeEl = this.rangeEl[range];

	    if (!rangeEl) {
	      _log.warn('missing range el', rangeEl);
	      return;
	    }

	    var item = this.render(info, this);

	    if (!item) {
	      _log.warn('missing item el', item);
	      return;
	    }

	    where = where || 'bottom';

	    item.inject(rangeEl, where);

	    /*this.ccc = this.ccc ||0;
	    if(this.ccc % 2 == 0 && range % 2 == 0)
	      item.destroy('height', '100px');
	      //item.setStyle('height', '100px');
	    this.ccc++;*/

	    return item;
	  },

	  /**
	   * render info element
	   * @param  {Object} info
	   * @return {DOMElement}
	   */
	  render: function render(info) {
	    //_log.debug('render', info);
	    var opts = this.options;
	    var tmplType = opts.template._type;
	    var tmpl = opts.template[tmplType] || opts.template.simple;

	    var _class = opts.template._class;
	    if (tmplType) {
	      _class += ' type-' + tmplType;
	    }
	    if (info.type) {
	      _class += ' item-' + info.type;
	    }

	    return new Element('div', {
	      html: _mustache2.default.render(tmpl, info),
	      'data-id': info._id,
	      class: _class
	    });
	  },

	  /**
	   * when scroll
	   * @return {void}
	   */
	  _scroll: function _scroll() {
	    //_log.debug('_scroll');

	    if (this.totalLoaded >= this.virtualSize) {
	      this.__scroll();
	    } else {
	      clearTimeout(this.scrollTimeout);
	      this.scrollTimeout = setTimeout(this.__scroll.bind(this), 50);
	    }
	  },

	  /**
	   * __scroll
	   * @return {void}
	   */
	  __scroll: function __scroll() {
	    this._renderViewport();
	    this.updateStatusIndex();

	    var self = this;

	    setTimeout(function () {
	      self._saveSettings();
	    }, 500);
	  },
	  /**
	   * update status with current index
	   * @return {void}
	   */
	  updateStatusIndex: function updateStatusIndex() {

	    var itemSize = this.itemSize;

	    //_log.debug('updateStatusIndex', itemSize);

	    if (itemSize === 0) {
	      this.setStatus(' / ' + this.virtualList.length);
	      return;
	    }

	    var contentSize = this.element.getSize().y;
	    var scrollTop = this.content.parentNode.scrollTop;
	    var docsLen = this.virtualList.length;

	    var displayCount = parseInt(contentSize / itemSize, 10);
	    var idx = Math.ceil(scrollTop / itemSize + displayCount);

	    idx = idx.limit(0, docsLen);

	    this.setStatus(idx + ' / ' + this.virtualList.length);
	  },

	  /**
	   * empty list view
	   * @return {void}
	   */
	  empty: function empty() {

	    this.content.empty();
	    this.content.setStyle('height', '0px');
	    this.content.setStyle('padding-top', '0px');
	    this.element.scrollTop = 0;
	    this.setStatus('');
	    this._start();
	  },

	  /**
	   * reveal item
	   * for now just can be used with _selectPrevious and _selectNext
	   * @param {string} id
	   * @param {boolean} quiet
	   * @param {boolean} alignToTop param pass to scrollIntoView
	   * @return {Object} this
	   * @see [description]
	   */
	  reveal: function reveal(id, quiet, alignToTop) {
	    _log.debug('reveal', id, quiet);

	    if (!id) {
	      return;
	    }

	    var el = this.content.getElement('[data-id="' + id + '"]');

	    // when scroll up the el can be missing before scroll to previous range
	    // try to scroll to previous range and get el again
	    if (!el) {
	      this.content.getParent().scrollTo(0, 5);
	      el = this.content.getElement('[data-id="' + id + '"]');
	    }

	    if (!el) {
	      return;
	    }

	    // check if element is in the viewport
	    var rect = el.getBoundingClientRect();
	    var containerRect = this.content.getParent().getBoundingClientRect();
	    var offset = el.getSize().y;
	    var isElementInViewport = rect.bottom >= containerRect.top + offset && rect.right >= containerRect.left + offset && rect.left <= containerRect.right - offset && rect.top <= containerRect.bottom - offset;

	    this.select(id, quiet);

	    if (isElementInViewport === false) {
	      el.scrollIntoView(alignToTop);
	    }
	  },

	  /**
	   * remove
	   * @param  {string|Object} id
	   * @return {void}
	   */
	  remove: function remove(id) {
	    _log.debug('remove', id);

	    if ((typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {
	      id = id._id;
	    }

	    if (!id || this.virtualSize === undefined) {
	      _log.warn('missing id when remove', id);
	      return;
	    }

	    // delete element from DOM
	    for (var range in this.rangeEl) {
	      if (!this.rangeEl.hasOwnProperty(range)) {
	        continue;
	      }

	      var rangeEl = this.rangeEl[range];

	      var el = rangeEl.getElement('[data-id="' + id + '"]');

	      if (el) {
	        el.destroy();
	        break;
	      }
	    }

	    // delete from virtualList
	    for (var i = 0; i < this.virtualList.length; i++) {
	      var info = this.virtualList[i] || {};

	      if (info && info._id === id) {
	        this.virtualList.splice(i, 1);
	      } else if (id === 'new' && info && !info._id) {
	        this.virtualList.splice(i, 1);
	      }
	    }

	    // delete from _tempCache
	    for (var j = 0; j < this._tempCache.length; j++) {
	      var info = this._tempCache[j] || {};

	      if (info && info._id === id) {
	        this._tempCache.splice(j, 1);
	      } else if (id === 'new' && info && !info._id) {
	        this._tempCache.splice(j, 1);
	      }
	    }
	  },

	  /**
	   * process infos
	   * @return {void}
	   */
	  processInfos: function processInfos() {
	    var self = this;
	    var infos;

	    _log.debug('processInfos');

	    if (!this._tempCache.length) {
	      this._tempCache = this.get('list').slice(0);
	      this.options.data = this.options.data || {};
	      this._tempCount = this.options.data._count || this._tempCache.length;
	      infos = this.get('list');
	    } else {
	      infos = this._tempCache.slice(0);
	    }

	    if (this.control.filter) {
	      this.applyFilters(infos, function (respFltr) {
	        if (self.control.search) {
	          self.applySearch(respFltr, function (respSrc) {
	            self._processInfos(respSrc);
	          });
	        } else {
	          self._processInfos(respFltr);
	        }
	      });
	    } else if (this.control.search) {
	      this.applySearch(infos, function (respSrc) {
	        self._processInfos(respSrc);
	      });
	    } else {
	      this._processInfos(infos);
	    }
	  },

	  /**
	   * process infos
	   * @param {Array} infos
	   * @return {void}
	   */
	  _processInfos: function _processInfos(infos) {
	    //_log.debug('_processInfos', infos);

	    //there is no result from filter/search
	    var tmp = this._tempCache;
	    if (tmp.length === infos.length && tmp[0] === infos[0] && tmp[tmp.length - 1] === infos[infos.length - 1]) {
	      this._makeVirtual(infos, 1, this._tempCount || infos.length);
	      this._tempCache = [];
	      this._tempCount = undefined;
	      //set filter/search result
	    } else {
	      this._makeVirtual(infos, 1, infos.length);
	      this.element.scrollTop = 0;
	    }
	  },

	  /**
	   * select next
	   * @return {void}
	   */
	  next: function next() {
	    console.log('next');
	  },

	  /**
	   * select previous
	   * @return {void}
	   */
	  previous: function previous() {
	    console.log('previous');
	  },

	  /*METHODS TO REVIEW*/

	  /**
	   * draw background lines
	   * @return {void}
	   */
	  _drawBackground: function _drawBackground() {
	    _log.debug('_drawBackground', this.itemSize);

	    return;

	    var background = this.options.background.replace('SIZE', this.itemSize);
	    this.content.style.backgroundImage = background;
	  },

	  /**
	   * init canvas
	   */
	  _initCanvas: function _initCanvas(el, height) {
	    var itemHeight = 56;
	    height = 56 * 50;

	    //console.log('_initCanvas', height, el);
	    this.canvasReady = true;

	    var canvas = new Element('canvas', {
	      id: 'listcanvas_w',
	      styles: {
	        zIndex: 0,
	        position: 'absolute',
	        left: '0',
	        top: '0',
	        height: height,
	        width: 341,
	        background: '#ffffff'
	      },
	      height: height,
	      width: '341'
	    }).inject(el);

	    var ctx = canvas.getContext('2d');
	    ctx.lineWidth = 0.5;
	    ctx.strokeStyle = '#dedbdb';

	    var total = height / itemHeight;
	    //console.log('total', total);
	    for (var j = 0; j <= total; j++) {
	      var y = j * itemHeight + 0.5;
	      //console.log('y', y);
	      ctx.beginPath();
	      ctx.moveTo(16, y);
	      ctx.lineTo(340, y);
	      ctx.stroke();
	    }
	  },

	  _getElById: function _getElById(id) {
	    _log.debug('_getElById', id);

	    var el;
	    for (var range in this.rangeEl) {
	      if (!this.rangeEl.hasOwnProperty(range)) {
	        continue;
	      }

	      var rangeEl = this.rangeEl[range];

	      var exist = rangeEl.getElement('[data-id="' + id + '"]');
	      if (exist) {
	        el = exist;
	        break;
	      }
	    }

	    return el;
	  },

	  //temparory fix to get selected info
	  _getInfoById: function _getInfoById(id) {
	    _log.debug('_getInfoById', id);

	    var info;
	    for (var i = 0; i < this.virtualList.length; i++) {
	      info = this.virtualList[i];
	      if (info && info._id === id) {
	        break;
	      }
	      info = undefined;
	    }

	    return info;
	  },

	  _getIdList: function _getIdList() {
	    _log.debug('_getIdList');

	    var list = [];

	    for (var i = 0; i < this.virtualList.length; i++) {
	      var id = this.virtualList[i] || {};
	      id = id._id;
	      if (id && list.indexOf(id) === -1) {
	        list.push(id);
	      }
	    }

	    return list;
	  },

	  _getInfoList: function _getInfoList() {
	    _log.debug('_getInfoList');

	    var list = [];

	    for (var i = 0; i < this.virtualList.length; i++) {
	      var info = this.virtualList[i];

	      if (info) {
	        list.push(info);
	      }
	    }

	    return list;
	  }

	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false Mustache: true*/

	(function defineMustache (global, factory) {
	  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
	    factory(exports); // CommonJS
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	  } else {
	    global.Mustache = {};
	    factory(Mustache); // script, wsh, asp
	  }
	}(this, function mustacheFactory (mustache) {

	  var objectToString = Object.prototype.toString;
	  var isArray = Array.isArray || function isArrayPolyfill (object) {
	    return objectToString.call(object) === '[object Array]';
	  };

	  function isFunction (object) {
	    return typeof object === 'function';
	  }

	  /**
	   * More correct typeof string handling array
	   * which normally returns typeof 'object'
	   */
	  function typeStr (obj) {
	    return isArray(obj) ? 'array' : typeof obj;
	  }

	  function escapeRegExp (string) {
	    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	  }

	  /**
	   * Null safe way of checking whether or not an object,
	   * including its prototype, has a given property
	   */
	  function hasProperty (obj, propName) {
	    return obj != null && typeof obj === 'object' && (propName in obj);
	  }

	  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	  // See https://github.com/janl/mustache.js/issues/189
	  var regExpTest = RegExp.prototype.test;
	  function testRegExp (re, string) {
	    return regExpTest.call(re, string);
	  }

	  var nonSpaceRe = /\S/;
	  function isWhitespace (string) {
	    return !testRegExp(nonSpaceRe, string);
	  }

	  var entityMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '/': '&#x2F;'
	  };

	  function escapeHtml (string) {
	    return String(string).replace(/[&<>"'\/]/g, function fromEntityMap (s) {
	      return entityMap[s];
	    });
	  }

	  var whiteRe = /\s*/;
	  var spaceRe = /\s+/;
	  var equalsRe = /\s*=/;
	  var curlyRe = /\s*\}/;
	  var tagRe = /#|\^|\/|>|\{|&|=|!/;

	  /**
	   * Breaks up the given `template` string into a tree of tokens. If the `tags`
	   * argument is given here it must be an array with two string values: the
	   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	   * course, the default is to use mustaches (i.e. mustache.tags).
	   *
	   * A token is an array with at least 4 elements. The first element is the
	   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	   * all text that appears outside a symbol this element is "text".
	   *
	   * The second element of a token is its "value". For mustache tags this is
	   * whatever else was inside the tag besides the opening symbol. For text tokens
	   * this is the text itself.
	   *
	   * The third and fourth elements of the token are the start and end indices,
	   * respectively, of the token in the original template.
	   *
	   * Tokens that are the root node of a subtree contain two more elements: 1) an
	   * array of tokens in the subtree and 2) the index in the original template at
	   * which the closing tag for that section begins.
	   */
	  function parseTemplate (template, tags) {
	    if (!template)
	      return [];

	    var sections = [];     // Stack to hold section tokens
	    var tokens = [];       // Buffer to hold the tokens
	    var spaces = [];       // Indices of whitespace tokens on the current line
	    var hasTag = false;    // Is there a {{tag}} on the current line?
	    var nonSpace = false;  // Is there a non-space char on the current line?

	    // Strips all whitespace tokens array for the current line
	    // if there was a {{#tag}} on it and otherwise only space.
	    function stripSpace () {
	      if (hasTag && !nonSpace) {
	        while (spaces.length)
	          delete tokens[spaces.pop()];
	      } else {
	        spaces = [];
	      }

	      hasTag = false;
	      nonSpace = false;
	    }

	    var openingTagRe, closingTagRe, closingCurlyRe;
	    function compileTags (tagsToCompile) {
	      if (typeof tagsToCompile === 'string')
	        tagsToCompile = tagsToCompile.split(spaceRe, 2);

	      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
	        throw new Error('Invalid tags: ' + tagsToCompile);

	      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
	      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
	      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
	    }

	    compileTags(tags || mustache.tags);

	    var scanner = new Scanner(template);

	    var start, type, value, chr, token, openSection;
	    while (!scanner.eos()) {
	      start = scanner.pos;

	      // Match any text between tags.
	      value = scanner.scanUntil(openingTagRe);

	      if (value) {
	        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
	          chr = value.charAt(i);

	          if (isWhitespace(chr)) {
	            spaces.push(tokens.length);
	          } else {
	            nonSpace = true;
	          }

	          tokens.push([ 'text', chr, start, start + 1 ]);
	          start += 1;

	          // Check for whitespace on the current line.
	          if (chr === '\n')
	            stripSpace();
	        }
	      }

	      // Match the opening tag.
	      if (!scanner.scan(openingTagRe))
	        break;

	      hasTag = true;

	      // Get the tag type.
	      type = scanner.scan(tagRe) || 'name';
	      scanner.scan(whiteRe);

	      // Get the tag value.
	      if (type === '=') {
	        value = scanner.scanUntil(equalsRe);
	        scanner.scan(equalsRe);
	        scanner.scanUntil(closingTagRe);
	      } else if (type === '{') {
	        value = scanner.scanUntil(closingCurlyRe);
	        scanner.scan(curlyRe);
	        scanner.scanUntil(closingTagRe);
	        type = '&';
	      } else {
	        value = scanner.scanUntil(closingTagRe);
	      }

	      // Match the closing tag.
	      if (!scanner.scan(closingTagRe))
	        throw new Error('Unclosed tag at ' + scanner.pos);

	      token = [ type, value, start, scanner.pos ];
	      tokens.push(token);

	      if (type === '#' || type === '^') {
	        sections.push(token);
	      } else if (type === '/') {
	        // Check section nesting.
	        openSection = sections.pop();

	        if (!openSection)
	          throw new Error('Unopened section "' + value + '" at ' + start);

	        if (openSection[1] !== value)
	          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	      } else if (type === 'name' || type === '{' || type === '&') {
	        nonSpace = true;
	      } else if (type === '=') {
	        // Set the tags for the next time around.
	        compileTags(value);
	      }
	    }

	    // Make sure there are no open sections when we're done.
	    openSection = sections.pop();

	    if (openSection)
	      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

	    return nestTokens(squashTokens(tokens));
	  }

	  /**
	   * Combines the values of consecutive text tokens in the given `tokens` array
	   * to a single token.
	   */
	  function squashTokens (tokens) {
	    var squashedTokens = [];

	    var token, lastToken;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      if (token) {
	        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	          lastToken[1] += token[1];
	          lastToken[3] = token[3];
	        } else {
	          squashedTokens.push(token);
	          lastToken = token;
	        }
	      }
	    }

	    return squashedTokens;
	  }

	  /**
	   * Forms the given array of `tokens` into a nested tree structure where
	   * tokens that represent a section have two additional items: 1) an array of
	   * all tokens that appear in that section and 2) the index in the original
	   * template that represents the end of that section.
	   */
	  function nestTokens (tokens) {
	    var nestedTokens = [];
	    var collector = nestedTokens;
	    var sections = [];

	    var token, section;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      switch (token[0]) {
	      case '#':
	      case '^':
	        collector.push(token);
	        sections.push(token);
	        collector = token[4] = [];
	        break;
	      case '/':
	        section = sections.pop();
	        section[5] = token[2];
	        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
	        break;
	      default:
	        collector.push(token);
	      }
	    }

	    return nestedTokens;
	  }

	  /**
	   * A simple string scanner that is used by the template parser to find
	   * tokens in template strings.
	   */
	  function Scanner (string) {
	    this.string = string;
	    this.tail = string;
	    this.pos = 0;
	  }

	  /**
	   * Returns `true` if the tail is empty (end of string).
	   */
	  Scanner.prototype.eos = function eos () {
	    return this.tail === '';
	  };

	  /**
	   * Tries to match the given regular expression at the current position.
	   * Returns the matched text if it can match, the empty string otherwise.
	   */
	  Scanner.prototype.scan = function scan (re) {
	    var match = this.tail.match(re);

	    if (!match || match.index !== 0)
	      return '';

	    var string = match[0];

	    this.tail = this.tail.substring(string.length);
	    this.pos += string.length;

	    return string;
	  };

	  /**
	   * Skips all text until the given regular expression can be matched. Returns
	   * the skipped string, which is the entire tail if no match can be made.
	   */
	  Scanner.prototype.scanUntil = function scanUntil (re) {
	    var index = this.tail.search(re), match;

	    switch (index) {
	    case -1:
	      match = this.tail;
	      this.tail = '';
	      break;
	    case 0:
	      match = '';
	      break;
	    default:
	      match = this.tail.substring(0, index);
	      this.tail = this.tail.substring(index);
	    }

	    this.pos += match.length;

	    return match;
	  };

	  /**
	   * Represents a rendering context by wrapping a view object and
	   * maintaining a reference to the parent context.
	   */
	  function Context (view, parentContext) {
	    this.view = view;
	    this.cache = { '.': this.view };
	    this.parent = parentContext;
	  }

	  /**
	   * Creates a new context using the given view with this context
	   * as the parent.
	   */
	  Context.prototype.push = function push (view) {
	    return new Context(view, this);
	  };

	  /**
	   * Returns the value of the given name in this context, traversing
	   * up the context hierarchy if the value is absent in this context's view.
	   */
	  Context.prototype.lookup = function lookup (name) {
	    var cache = this.cache;

	    var value;
	    if (cache.hasOwnProperty(name)) {
	      value = cache[name];
	    } else {
	      var context = this, names, index, lookupHit = false;

	      while (context) {
	        if (name.indexOf('.') > 0) {
	          value = context.view;
	          names = name.split('.');
	          index = 0;

	          /**
	           * Using the dot notion path in `name`, we descend through the
	           * nested objects.
	           *
	           * To be certain that the lookup has been successful, we have to
	           * check if the last object in the path actually has the property
	           * we are looking for. We store the result in `lookupHit`.
	           *
	           * This is specially necessary for when the value has been set to
	           * `undefined` and we want to avoid looking up parent contexts.
	           **/
	          while (value != null && index < names.length) {
	            if (index === names.length - 1)
	              lookupHit = hasProperty(value, names[index]);

	            value = value[names[index++]];
	          }
	        } else {
	          value = context.view[name];
	          lookupHit = hasProperty(context.view, name);
	        }

	        if (lookupHit)
	          break;

	        context = context.parent;
	      }

	      cache[name] = value;
	    }

	    if (isFunction(value))
	      value = value.call(this.view);

	    return value;
	  };

	  /**
	   * A Writer knows how to take a stream of tokens and render them to a
	   * string, given a context. It also maintains a cache of templates to
	   * avoid the need to parse the same template twice.
	   */
	  function Writer () {
	    this.cache = {};
	  }

	  /**
	   * Clears all cached templates in this writer.
	   */
	  Writer.prototype.clearCache = function clearCache () {
	    this.cache = {};
	  };

	  /**
	   * Parses and caches the given `template` and returns the array of tokens
	   * that is generated from the parse.
	   */
	  Writer.prototype.parse = function parse (template, tags) {
	    var cache = this.cache;
	    var tokens = cache[template];

	    if (tokens == null)
	      tokens = cache[template] = parseTemplate(template, tags);

	    return tokens;
	  };

	  /**
	   * High-level method that is used to render the given `template` with
	   * the given `view`.
	   *
	   * The optional `partials` argument may be an object that contains the
	   * names and templates of partials that are used in the template. It may
	   * also be a function that is used to load partial templates on the fly
	   * that takes a single argument: the name of the partial.
	   */
	  Writer.prototype.render = function render (template, view, partials) {
	    var tokens = this.parse(template);
	    var context = (view instanceof Context) ? view : new Context(view);
	    return this.renderTokens(tokens, context, partials, template);
	  };

	  /**
	   * Low-level method that renders the given array of `tokens` using
	   * the given `context` and `partials`.
	   *
	   * Note: The `originalTemplate` is only ever used to extract the portion
	   * of the original template that was contained in a higher-order section.
	   * If the template doesn't use higher-order sections, this argument may
	   * be omitted.
	   */
	  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
	    var buffer = '';

	    var token, symbol, value;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      value = undefined;
	      token = tokens[i];
	      symbol = token[0];

	      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
	      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
	      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
	      else if (symbol === '&') value = this.unescapedValue(token, context);
	      else if (symbol === 'name') value = this.escapedValue(token, context);
	      else if (symbol === 'text') value = this.rawValue(token);

	      if (value !== undefined)
	        buffer += value;
	    }

	    return buffer;
	  };

	  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
	    var self = this;
	    var buffer = '';
	    var value = context.lookup(token[1]);

	    // This function is used to render an arbitrary template
	    // in the current context by higher-order sections.
	    function subRender (template) {
	      return self.render(template, context, partials);
	    }

	    if (!value) return;

	    if (isArray(value)) {
	      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
	        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
	      }
	    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
	      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
	    } else if (isFunction(value)) {
	      if (typeof originalTemplate !== 'string')
	        throw new Error('Cannot use higher-order sections without the original template');

	      // Extract the portion of the original template that the section contains.
	      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

	      if (value != null)
	        buffer += value;
	    } else {
	      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
	    }
	    return buffer;
	  };

	  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
	    var value = context.lookup(token[1]);

	    // Use JavaScript's definition of falsy. Include empty arrays.
	    // See https://github.com/janl/mustache.js/issues/186
	    if (!value || (isArray(value) && value.length === 0))
	      return this.renderTokens(token[4], context, partials, originalTemplate);
	  };

	  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
	    if (!partials) return;

	    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
	    if (value != null)
	      return this.renderTokens(this.parse(value), context, partials, value);
	  };

	  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return value;
	  };

	  Writer.prototype.escapedValue = function escapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return mustache.escape(value);
	  };

	  Writer.prototype.rawValue = function rawValue (token) {
	    return token[1];
	  };

	  mustache.name = 'mustache.js';
	  mustache.version = '2.1.3';
	  mustache.tags = [ '{{', '}}' ];

	  // All high-level mustache.* functions use this writer.
	  var defaultWriter = new Writer();

	  /**
	   * Clears all cached templates in the default writer.
	   */
	  mustache.clearCache = function clearCache () {
	    return defaultWriter.clearCache();
	  };

	  /**
	   * Parses and caches the given template in the default writer and returns the
	   * array of tokens it contains. Doing this ahead of time avoids the need to
	   * parse templates on the fly as they are rendered.
	   */
	  mustache.parse = function parse (template, tags) {
	    return defaultWriter.parse(template, tags);
	  };

	  /**
	   * Renders the `template` with the given `view` and `partials` using the
	   * default writer.
	   */
	  mustache.render = function render (template, view, partials) {
	    if (typeof template !== 'string') {
	      throw new TypeError('Invalid template! Template should be a "string" ' +
	                          'but "' + typeStr(template) + '" was given as the first ' +
	                          'argument for mustache#render(template, view, partials)');
	    }

	    return defaultWriter.render(template, view, partials);
	  };

	  // This is here for backwards compatibility with 0.4.x.,
	  /*eslint-disable */ // eslint wants camel cased function name
	  mustache.to_html = function to_html (template, view, partials, send) {
	    /*eslint-enable*/

	    var result = mustache.render(template, view, partials);

	    if (isFunction(send)) {
	      send(result);
	    } else {
	      return result;
	    }
	  };

	  // Export the escaping function so that the user may override it.
	  // See https://github.com/janl/mustache.js/issues/244
	  mustache.escape = escapeHtml;

	  // Export these mainly for testing, but also for advanced usage.
	  mustache.Scanner = Scanner;
	  mustache.Context = Context;
	  mustache.Writer = Writer;

	}));


/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//const _log = __debug('view-core-listV2-compat').defineLevel();

	exports.default = new Class({

	  /**
	   * for compatibility
	   */
	  _initCompat: function _initCompat() {

	    //var self = this;

	    this.addEvents({
	      /**
	       * @ignore
	       */
	      render: function render() {
	        //self._scroll();
	      }
	    });
	  },

	  /**
	   * for compatibility
	   */
	  cancel: function cancel() {
	    this.remove('new');
	  },

	  /**
	   * for compatibility
	   */
	  insert: function insert(info) {
	    this.set(info);
	  },

	  /**
	   * for compatibility
	   */
	  updateItem: function updateItem(info) {
	    this.set(info);
	  }

	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('view-core-listV2-expand').defineLevel();

	exports.default = new Class({

	  /**
	   * Initialize Expand
	   * @private
	   */
	  _initExpand: function _initExpand() {

	    if (!this.options.expand.enable) {
	      return;
	    }

	    this.expandList = {};

	    _log.debug('_initExpand', this.options.expand);
	  },

	  /**
	   * toggle expand
	   * @param  {DOMElement} el
	   * @return {void}
	   */
	  _toggleExpand: function _toggleExpand(el) {
	    _log.debug('_toggleExpand', el);

	    if (!this.options.expand.enable) {
	      _log.debug('expand is not enabled');
	      return;
	    }

	    if (this.expandList[el.get('data-id')]) {
	      this._collapse(el);
	    } else {
	      this._expand(el);
	    }
	  },

	  /**
	   * expand el
	   * @param  {DOMElement} el
	   * @return {void}
	   */
	  _expand: function _expand(el) {
	    _log.debug('_expand', el);

	    var id = el.get('data-id');
	    var info = this.get('infoById', id);

	    /*for (var i in this.expandList) {
	      this.expandList[i].destroy();
	    }*/

	    this.expandList[id] = new Element('div', {
	      'class': 'ui-expand'
	    }).inject(el, 'after');

	    this.fireEvent('expand', [this.expandList[id], info]);
	  },

	  /**
	   * collapse
	   * @param  {DOMElement} el
	   * @return {void}
	   */
	  _collapse: function _collapse(el) {
	    _log.debug('_collapse', el);

	    this.expandList[el.get('data-id')].destroy();

	    delete this.expandList[el.get('data-id')];

	    this.fireEvent('collapse');
	  }

	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _minimalUtils = __webpack_require__(14);

	var _filter = __webpack_require__(36);

	var _filter2 = _interopRequireDefault(_filter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-core-list-filter').defineLevel();

	exports.default = new Class({

	  /**
	   * initialize filter
	   * @private
	   */
	  _initFilter: function _initFilter() {
	    if (!this.control.filter) {
	      return;
	    }

	    _log.debug('_initFilter');

	    this.filter = new _filter2.default({
	      filter: this.options.filter
	    }).inject(this.container.head, 'after');

	    this._initFilterEvents();
	    this._initFilterSettings();
	  },

	  /**
	   * init filter events
	   * @return {void}
	   */
	  _initFilterEvents: function _initFilterEvents() {
	    this.filter.addEvents({
	      change: this.processInfos.bind(this),
	      hide: this.processInfos.bind(this)
	    });
	  },

	  /**
	   * init filter settings
	   * @return {void}
	   */
	  _initFilterSettings: function _initFilterSettings() {
	    var opts = this.options.filter;
	    if (opts.open === true) {
	      this.showFilter();
	    }
	  },

	  /**
	   * apply filters
	   * @return {Array}
	   */
	  applyFilters: function applyFilters(infos, cb) {
	    var filters = this.filter.get('filters');

	    _log.debug('applyFilters', infos.length, filters);

	    if (this.options.filter.type === 'event') {
	      this.fireEvent('filterObj', [this, filters, infos, cb.bind(this)]);
	    } else {
	      cb(_minimalUtils.filter.filter(filters, infos));
	    }

	    this.fireEvent('settings', ['filter', Object.clone(filters)]);
	    if (this.control.filter.isActive()) {
	      //update filter state
	      this.fireEvent('settings', ['filter.open', true]);
	    } else {
	      this.fireEvent('settings', ['filter.open', false]);
	    }
	  },

	  /**
	   * toggle filter
	   * @return {void}
	   */
	  toggleFilter: function toggleFilter() {
	    _log.debug('toggleFilter');

	    var filter = this.control.filter;

	    if (!filter) {
	      return;
	    }

	    if (filter.isActive()) {
	      this.hideFilter();
	    } else {
	      this.showFilter();
	    }

	    this.fireEvent('toggleFilter');
	  },

	  /**
	   * hide filter
	   * @return {void}
	   */
	  hideFilter: function hideFilter() {
	    var filter = this.control.filter;

	    filter.setState(null);
	    this.filter.empty();
	    this.filter.hide();
	    this.fireEvent('settings', ['filter.open', false]);
	  },

	  /**
	   * show filter
	   * @return {void}
	   */
	  showFilter: function showFilter() {
	    var filter = this.control.filter;

	    filter.setState('active');
	    this.filter.show();
	    this.fireEvent('settings', ['filter.open', true]);
	  },

	  /**
	   * set filter
	   * @param {Object} filter
	   */
	  setFilter: function setFilter(filter) {
	    _log.debug('setFilter', filter);

	    this.options.filter = filter;

	    if (this.filter) {
	      this.filter.destroy();
	      this.control.filter.setState(null);
	    }

	    this._initFilter();
	  }

	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	var _choice = __webpack_require__(38);

	var _choice2 = _interopRequireDefault(_choice);

	var _method = __webpack_require__(7);

	var _method2 = _interopRequireDefault(_method);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-control-filter').defineLevel();

	exports.default = new Class({

	  Extends: _field2.default,

	  Implements: [Options, Events, _method2.default],

	  options: {
	    name: 'filter',
	    error: false,
	    label: false,
	    timer: 150
	  },

	  /**
	   * initialize
	   * @param  {Object} options
	   * @return {Object}
	   */
	  initialize: function initialize(options) {
	    this.setOptions(options);
	    var opts = this.options;

	    this.fireEvent('init');

	    this.filters = {};
	    this.controls = {};
	    this.filterEnable = false;

	    this._initOptions(opts);
	    this._initElement();
	    //this._initEvents();

	    return this;
	  },

	  /**
	   * init element
	   * @return {void}
	   */
	  _initElement: function _initElement() {
	    //create a new div as input element
	    this.parent();

	    this.element.addClass('head-filter');
	    this.element.setStyle('display', 'none');

	    this._initFilterControls();
	  },

	  /**
	   * initInput
	   * @return {void}
	   */
	  _initInput: function _initInput() {
	    //_log.debug('_initInput', this.options);
	    //this.parent();

	    //this.input.set('autocomplete', 'off');
	  },

	  /**
	   * get
	   * @return {void}
	   */
	  get: function get(what) {

	    if (what === 'filters') {
	      return this.filters;
	    }
	  },

	  /**
	   * init filter controls
	   * @return {void}
	   */
	  _initFilterControls: function _initFilterControls() {
	    var opts = this.options;
	    var filter = opts.filter;
	    var list = filter.list || [];

	    _log.debug('_initFilterControls', filter, list);

	    for (var i = 0; list.length > i; i++) {
	      var name = list[i];
	      var f = filter[name];

	      var values = f.text;
	      values = values || f.values;

	      var choice = this._initChoice(name, values, f.value);

	      this.controls[f.key] = choice;
	    }
	  },

	  /**
	   * init choice
	   * @param  {string} name
	   * @param  {Array} values
	   * @param  {string} value
	   * @return {Object}
	   */
	  _initChoice: function _initChoice(name, values, value) {
	    _log.debug('_initChoice', name, values, value);

	    /*handle text*/
	    var list = [];
	    var f = this.options.filter[name];
	    if (f.valuesText) {
	      list = f.valuesText;
	    } else {
	      list = values;
	    }

	    var choice = new _choice2.default({
	      name: name,
	      type: 'push',
	      error: false,
	      list: list,
	      value: value
	    }).inject(this.element).addEvents({
	      change: this._choiceDidChange.bind(this, name)
	    });

	    if (value) {
	      this.changeFilter(name, value);
	    }

	    return choice;
	  },

	  /**
	   * choice did change
	   * @param  {string} name
	   * @param  {string} value
	   * @return {void}
	   */
	  _choiceDidChange: function _choiceDidChange(name, value) {
	    _log.debug('_choiceDidChange', name, value);

	    if (value !== undefined) {
	      this.changeFilter(name, value);
	    } else {
	      this.removeFilter(name);
	    }

	    _log.debug('change', this.filters[name]);

	    this.fireEvent('change', this.filters[name]);
	  },

	  /**
	   * change filter
	   * @param {string} name
	   * @param {string} value
	   */
	  changeFilter: function changeFilter(name, value) {
	    var filter = this.options.filter[name];

	    filter.value = value;

	    _log.debug('changeFilter', name, value, filter);

	    this.filters[name] = filter;
	  },

	  /**
	   * remove filter
	   * @param {string} name
	   */
	  removeFilter: function removeFilter(name) {
	    _log.debug('removeFilter', name);

	    if (this.filters[name]) {
	      delete this.filters[name];
	    }
	  },

	  /**
	   * select filter
	   * @param  {string} key
	   * @param  {string} value
	   * @return {Object}
	   */
	  select: function select(key, value) {
	    _log.debug('selectFilter', key, value, this.controls);

	    if (this.controls && this.controls[key]) {
	      this.controls[key].select(value);
	    }

	    return this;
	  },

	  /**
	   * set filter
	   * @param {Object} filter
	   */
	  setFilter: function setFilter(filter) {
	    _log.debug('setFilter', filter);

	    this.options.filter = filter;

	    if (this.filterBar) {
	      this.filterBar.empty();
	    }

	    this._initFilter(filter);
	  },

	  /**
	   * init events
	   * @return {void}
	   */
	  _initEvents: function _initEvents() {
	    this.parent();

	    var self = this;
	    var opts = this.options;
	    var timer;

	    this.input.addEvents({
	      keyup: function keyup() {
	        clearTimeout(timer);
	        timer = setTimeout(function () {
	          self.fireEvent('search', self.input.get('value'));
	        }, opts.timer);
	      },
	      mousedown: function mousedown(e) {
	        e.stopPropagation();
	      }
	    });
	  },

	  /**
	   * empty
	   * @return {Object}
	   */
	  empty: function empty() {
	    _log.debug('empty', this.filters);

	    var filters = this.filters;

	    for (var filter in filters) {
	      if (!filters.hasOwnProperty(filter)) {
	        continue;
	      }
	      this.controls[filters[filter].key].toggle_selected();
	      this.removeFilter(filter);
	    }

	    return this;
	  }

	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _control = __webpack_require__(24);

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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('control-choice').defineLevel();

	exports.default = new Class({

	  Extends: _field2.default,

	  options: {
	    name: 'choice'
	  },

	  /**
	   * init element
	   * @return {void}
	   */
	  _initElement: function _initElement() {
	    _log.debug('_initElement');

	    this.parent();

	    this.item = {};

	    var opts = this.options;

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

	    if (opts.value) {
	      this.input.set('value', opts.value);
	    }
	  },

	  /**
	   * init list
	   * @param  {Array} list
	   * @return {void}
	   */
	  _initList: function _initList(list) {
	    _log.debug('_initList');

	    this.list = new Element('ul', {
	      'class': 'choice-list'
	    }).inject(this.label, 'after');

	    this.itemList = [];

	    if (list && list.length > 0) {
	      for (var i = 0; i < list.length; i++) {
	        this._initItem(list[i]);
	      }
	    }
	  },

	  /**
	   * init item
	   * @param  {string} item
	   * @return {void}
	   */
	  _initItem: function _initItem(item) {
	    _log.debug('_initItem');

	    var li = new Element('li', {
	      html: item,
	      'data-value': item
	    }).inject(this.list);

	    li.addEvent('click', this._itemDidClick.bind(this, li, item));

	    this.item[item] = li;

	    this.itemList.push(item);

	    if (this.options.value === item) {
	      li.addClass('selected');
	      this.selected = li;
	    }
	  },

	  /**
	   * item did click
	   * @param  {DOMElement} el
	   * @param  {string} item
	   * @return {void}
	   */
	  _itemDidClick: function _itemDidClick(el, item) {
	    _log.debug('_itemDidClick');

	    var opts = this.options;

	    if (opts.read) {
	      return;
	    }

	    if (this.selected) {
	      this.selected.removeClass('selected');
	    }

	    if (this.selected && this.selected === el) {
	      this.selected.removeClass('selected');
	      this.selected = null;

	      this.select();
	    } else {
	      el.addClass('selected');
	      this.selected = el;
	      this.select(item);
	    }
	  },

	  /**
	   * toggle selected
	   * @return {void}
	   */
	  toggle_selected: function toggle_selected() {
	    _log.debug('toggle_selected', this.element);

	    if (this.selected) {
	      this.selected.removeClass('selected');
	    }

	    if (this.selected && this.selected === this) {
	      this.selected.removeClass('selected');
	      this.selected = null;
	    } else {
	      this.addClass('selected');
	      this.selected = this;
	    }
	  },

	  /**
	   * select
	   * @param  {string} value
	   * @return {void}
	   */
	  select: function select(value) {
	    _log.debug('select', value);

	    var name = this.options.name;

	    this.input.set('value', value);
	    this.choice.set('html', value);
	    this.element.removeClass('state-open');
	    this.fireEvent('change', value, name);
	  },

	  /**
	   * set
	   * @param  {string} value
	   * @return {void}
	   */
	  set: function set(value) {
	    _log.debug('set', value, this.item);

	    var item = this.item[value];

	    if (!item) {
	      return;
	    }

	    if (this.selected) {
	      this.selected.removeClass('selected');
	    }

	    item.addClass('selected');
	    this.selected = item;
	  },

	  /**
	   * _toggle
	   * @return {void}
	   */
	  _toggle: function _toggle() {
	    _log.debug('_toggle');

	    if (this.element.hasClass('state-open')) {
	      this.element.removeClass('state-open');
	    } else {
	      this.element.addClass('state-open');
	    }
	  }

	});

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _log = __debug('view-core-listV2-insert').defineLevel();

	exports.default = new Class({

	  /**
	   * new info
	   * @return {void}
	   */
	  new: function _new(info) {
	    _log.debug('new', info);

	    //handle view in arg
	    if (info === this) {
	      info = {};
	    }

	    info = info || {};

	    var newInfo = {
	      _id: 'new',
	      type: this.options.data.type,
	      nodes: []
	    };

	    info = Object.merge(newInfo, info);

	    if (this.options.data && this.options.data._id && info.nodes.indexOf(this.options.data._id) === -1) {
	      info.nodes.push(this.options.data._id);
	    }

	    // clean search and filter when insert a new info
	    // maybe instead of cleaning the search/filter
	    // should insert the new one in the current list
	    if (info._id === 'new') {
	      if (this.control.filter && this.control.filter.isActive()) {
	        this.toggleFilter();
	      }
	      if (this.control.search && this.control.search.isActive()) {
	        this.toggleSearch();
	      }
	    }

	    this.remove('new');
	    this._setInfo(info);

	    this.select('new');
	  },

	  /**
	   * remove new info if exist
	   * @return {void}
	   */
	  removeNew: function removeNew() {
	    this.remove('new');
	  },

	  /**
	   * set info
	   * @param {Object} info
	   */
	  _setInfo: function _setInfo(info) {
	    _log.debug('_setInfo', info);

	    if (this.virtualSize === undefined) {
	      this._setList([]);
	    }

	    if ((typeof info === 'undefined' ? 'undefined' : _typeof(info)) !== 'object' || this.virtualSize === undefined) {
	      _log.warn('invalid info type', info);
	      return;
	    }

	    //check if the id is in the list
	    var exist = this._getInfoById(info._id);
	    if (exist) {
	      this.updateInfo(info);
	      this.select(this.selectedId);
	      return;
	    }

	    // return if there is a search or filter result in the list
	    // maybe the list should be updated
	    // if the info is part of the search/filter result
	    // this is generating strange behaviors
	    // possible solution (but not complety related):
	    // a new info should be added from outside the list
	    if (this._tempCache.length && this._tempCache.length !== this.virtualList.length) {
	      return;
	    }

	    this.remove('new');
	    this.virtualSize++;
	    this.virtualList.unshift(info);
	    //this._tempCache.unshift(info);
	    this.renderInfo(info, 1, 'top');
	    this.element.scrollTop = 0;
	    this._scroll();
	  },

	  /**
	   * update info
	   * @param  {Object} info
	   * @return {void}
	   */
	  updateInfo: function updateInfo(info) {
	    _log.debug('updateInfo', info);

	    //update element
	    var oldEl = this._getElById(info._id);
	    var newEl = this.render(info, this);

	    //update the old el if has been already rendered
	    if (oldEl) {
	      newEl.replaces(oldEl);
	    }

	    //update virtualList
	    for (var i = 0; i < this.virtualList.length; i++) {
	      var oldInfo = this.virtualList[i];

	      if (oldInfo && oldInfo._id === info._id) {
	        this.virtualList[i] = info;
	        break;
	      }
	    }

	    //update _tempCache
	    if (this._tempCache.length) {
	      for (var j = 0; j < this._tempCache.length; j++) {
	        var oldInfo = this._tempCache[j];

	        if (oldInfo && oldInfo._id === info._id) {
	          this._tempCache[j] = info;
	          break;
	        }
	      }
	    }
	  }

	});

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('view-core-listV2-position').defineLevel();

	exports.default = new Class({

	  /**
	   * initialize
	   * @return {Object} this
	   */
	  _initPosition: function _initPosition() {
	    _log.debug('_initPosition', this.control);

	    var positionCtr = this.control.position;
	    var upCtr = this.control.moveup;
	    var downCtr = this.control.movedown;

	    if (positionCtr && upCtr && downCtr) {
	      upCtr.setState('disabled');
	      downCtr.setState('disabled');

	      this.positionEnable = false;
	    } else {
	      _log.debug('missing control for position');
	    }

	    return this;
	  },

	  /**
	   * toggle position
	   * @return {void}
	   */
	  togglePosition: function togglePosition() {
	    _log.debug('togglePosition', this.positionEnable);

	    if (this.positionEnable === true) {
	      this.disablePosition();
	    } else if (this.positionEnable === false) {
	      this._enablePosition();
	    }
	  },

	  /**
	   * enable position
	   * @return {void}
	   */
	  _enablePosition: function _enablePosition() {
	    _log.debug('_enablePosition');

	    this.control.position.setState('active');
	    this.control.moveup.setState('enable');
	    this.control.movedown.setState('enable');

	    this.checkInfosPositions();

	    this.positionEnable = true;
	  },

	  /**
	   * disable position
	   * @return {void}
	   */
	  disablePosition: function disablePosition() {
	    _log.debug('disablePosition');

	    this.control.position.setState('enable');
	    this.control.moveup.setState('disabled');
	    this.control.movedown.setState('disabled');

	    this.positionEnable = false;

	    this.fireEvent('update', this.virtualList);
	  },

	  /**
	   * move up
	   * @return {void}
	   */
	  moveUp: function moveUp() {
	    var info = this.get('selectedInfo');

	    var pos = parseInt(info.position);

	    if (pos === 1) {
	      _log.warn('can not move the first info up');
	      return;
	    }

	    _log.debug('moveUp', pos);

	    var oldIndex = pos - 1;
	    var newIndex = oldIndex - 1;

	    this.virtualList[oldIndex].position = this._pad(newIndex + 1);
	    this.virtualList[newIndex].position = this._pad(oldIndex + 1);

	    _log.debug(this.virtualList[oldIndex], this.virtualList[newIndex]);

	    this.virtualList = this._moveArrayItem(oldIndex, newIndex, this.virtualList);

	    var el = this.content.getElement('[data-id="' + info._id + '"]');
	    this._moveEl(el, 'up');
	  },

	  /**
	   * move down
	   * @return {void}
	   */
	  moveDown: function moveDown() {
	    var info = this.get('selectedInfo');

	    var pos = parseInt(info.position);

	    if (pos === this.virtualList.length) {
	      _log.warn('can not move the last info down');
	      return;
	    }

	    _log.debug('moveDown', pos);

	    var oldIndex = pos - 1;
	    var newIndex = oldIndex + 1;

	    this.virtualList[oldIndex].position = this._pad(newIndex + 1);
	    this.virtualList[newIndex].position = this._pad(oldIndex + 1);

	    _log.debug(this.virtualList[oldIndex], this.virtualList[newIndex]);

	    this.virtualList = this._moveArrayItem(oldIndex, newIndex, this.virtualList);

	    var el = this.content.getElement('[data-id="' + info._id + '"]');
	    this._moveEl(el, 'down');
	  },

	  /**
	   * move array item
	   * @param  {number} oldIndex
	   * @param  {number} newIndex
	   * @return {number}
	   * @see http://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
	   */
	  _moveArrayItem: function _moveArrayItem(oldIndex, newIndex, arr) {
	    while (oldIndex < 0) {
	      oldIndex += arr.length;
	    }
	    while (newIndex < 0) {
	      newIndex += arr.length;
	    }
	    if (newIndex >= arr.length) {
	      var k = newIndex - arr.length;
	      while (k-- + 1) {
	        arr.push(undefined);
	      }
	    }
	    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
	    return arr;
	  },

	  /**
	   * move element
	   * @return {void}
	   * @see http://stackoverflow.com/questions/7587646/how-do-i-move-an-element-up-down-one-position-in-tree
	   */
	  _moveEl: function _moveEl(el, where) {
	    _log.debug('moveEl', el, where);

	    var parent = el.parentNode;
	    var oldChild;

	    if (where === 'up') {
	      var prev = el.previousSibling;
	      oldChild = parent.removeChild(el);
	      parent.insertBefore(oldChild, prev);
	    } else {
	      var next = el.nextSibling;
	      oldChild = parent.removeChild(el);
	      parent.insertBefore(oldChild, next.nextSibling);
	    }
	  },

	  /**
	   * check consistency of infos position
	   * @return {void}
	   */
	  checkInfosPositions: function checkInfosPositions() {

	    var list = this.virtualList;

	    _log.debug('checkInfosPositions', list);

	    for (var i = 0; i < list.length; i++) {
	      var info = list[i];

	      info.position = this._pad(i + 1);

	      _log.debug('position', info.name, info.position);
	    }
	  },

	  /**
	   * pad
	   * @description convert 1 to 00001
	   * @param  {number} num
	   * @return {string}
	   */
	  _pad: function _pad(num) {
	    var s = num + '';
	    while (s.length < 5) {
	      s = '0' + s;
	    }
	    return s;
	  }

	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _search = __webpack_require__(42);

	var _search2 = _interopRequireDefault(_search);

	var _minimalUtils = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-core-list-search').defineLevel();

	exports.default = new Class({

	  /**
	   * Initialize Search
	   * @private
	   */
	  _initSearch: function _initSearch() {
	    if (!this.control.search) {
	      return;
	    }

	    _log.debug('_initSearch');

	    this.search = new _search2.default().inject(this.container.head, 'after');

	    this.search.addClass('container-search');

	    this._initSearchEvents();
	    this._initSearchSettings();
	  },

	  /**
	   * init search events
	   * @return {void}
	   */
	  _initSearchEvents: function _initSearchEvents() {
	    this.search.addEvents({
	      search: this._searchDidChange.bind(this),
	      hide: this.processInfos.bind(this)
	    });
	  },

	  /**
	   * init search settings
	   * @return {void}
	   */
	  _initSearchSettings: function _initSearchSettings() {
	    var opts = this.options.search;
	    if (opts.open === true) {
	      this.showSearch();
	    }
	    if (opts.value) {
	      this.search.setValue(opts.value);
	    }
	  },

	  /**
	   * search did change
	   * @return {void}
	   */
	  _searchDidChange: function _searchDidChange() {
	    clearTimeout(this.searchTimeout);
	    this.searchTimeout = setTimeout(this.processInfos.bind(this), 300);
	  },

	  /**
	   * applySearch
	   * @param  {Array} infos
	   * @return {void}
	   */
	  applySearch: function applySearch(infos, cb) {
	    var str = this.search.getValue();

	    _log.debug('applySearch', infos.length, str);

	    //handle same search value
	    if (this.lastSearch === str) {
	      return;
	    } else {
	      this.lastSearch = str;
	    }

	    if (this.options.search.type === 'event') {
	      this.fireEvent('searchStr', [this, str, infos, cb.bind(this)]);
	    } else {
	      cb(_minimalUtils.search.search(str, infos, this.options.search));
	    }

	    this.fireEvent('settings', ['search.value', str]);
	  },

	  /**
	   * Toggle Search
	   * @return {void}
	   */
	  toggleSearch: function toggleSearch() {
	    _log.debug('toggleSearch', search);

	    var search = this.control.search;

	    if (!search) {
	      return;
	    }

	    if (search.isActive()) {
	      this.hideSearch();
	    } else {
	      this.showSearch();
	    }

	    this.fireEvent('toggleSearch');
	  },

	  /**
	   * Hide Search
	   * @return {void}
	   */
	  hideSearch: function hideSearch() {
	    var search = this.control.search;

	    if (!search) {
	      return;
	    }

	    search.setState(null);
	    this.search.empty();
	    this.search.hide();
	    this.fireEvent('settings', ['search.open', false]);
	    this.fireEvent('settings', ['search.value', '']);
	  },

	  /**
	   * Show Search
	   * @return {void}
	   */
	  showSearch: function showSearch() {
	    var search = this.control.search;

	    if (!search) {
	      return;
	    }

	    search.setState('active');
	    this.search.show();
	    this.search.focus();
	    this.fireEvent('settings', ['search.open', true]);
	  },

	  /**
	   * search a string
	   * @param  {string} str
	   * @return {void}
	   */
	  setSearch: function setSearch(str) {
	    _log.debug('setSearch', str);

	    var search = this.control.search;

	    if (!search) {
	      return;
	    }

	    this.showSearch();
	    this.search.setValue(str);
	    this.processInfos();
	  }

	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _method = __webpack_require__(7);

	var _method2 = _interopRequireDefault(_method);

	var _control = __webpack_require__(17);

	var _control2 = _interopRequireDefault(_control);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _field2.default,

	  Implements: [Options, Events, _method2.default],

	  options: {
	    name: 'search',
	    error: false,
	    label: false,
	    timer: 150
	  },

	  /**
	   * initialize
	   * @param  {Object} options
	   * @return {Object}
	   */
	  initialize: function initialize(options) {
	    this.setOptions(options);
	    var opts = this.options;

	    this.fireEvent('init');

	    this._initOptions(opts);
	    this._initElement();
	    this._initEvents();

	    return this;
	  },

	  /**
	   * init element
	   * @return {void}
	   */
	  _initElement: function _initElement() {
	    //create a new div as input element
	    this.parent();

	    this.element.addClass('ui-search');

	    this._initReset();
	  },

	  /**
	   * initInput
	   * @return {void}
	   */
	  _initInput: function _initInput() {
	    //_log.debug('_initInput', this.options);
	    this.parent();

	    this.input.set('autocomplete', 'off');
	  },

	  /**
	   * init reset
	   * @return {void}
	   */
	  _initReset: function _initReset() {
	    var self = this;
	    var icon = _control2.default.clear || 'mdi-action-help';

	    this.reset = new _button2.default({
	      name: 'clear',
	      icon: icon
	    }).inject(this.element).addEvent('press', function () {
	      self.empty();
	    });
	  },

	  /**
	   * init events
	   * @return {void}
	   */
	  _initEvents: function _initEvents() {
	    this.parent();

	    var self = this;
	    var opts = this.options;
	    var timer;

	    this.input.addEvents({
	      keyup: function keyup() {
	        clearTimeout(timer);
	        timer = setTimeout(function () {
	          self.fireEvent('search', self.input.get('value'));
	        }, opts.timer);
	      },
	      mousedown: function mousedown(e) {
	        e.stopPropagation();
	      }
	    });
	  },

	  /**
	   * focus
	   * @return {Object}
	   */
	  focus: function focus() {
	    this.input.focus();
	    this.fireEvent('focus');

	    return this;
	  },

	  /**
	   * empty
	   * @return {Object}
	   */
	  empty: function empty() {
	    this.input.set('value', '');
	    this.fireEvent('reset');

	    return this;
	  }

	});

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('view-core-listV2-select').defineLevel();

	exports.default = new Class({

	  /**
	   * select _selectPrevious
	   * @param  {boolean} quiet
	   * @return {void}
	   */
	  _selectPrevious: function _selectPrevious(quiet) {
	    _log.debug('_selectPrevious');

	    if (!this.selectedId) {
	      return;
	    }

	    var list = this._getIdList();
	    var idx = list.indexOf(this.selectedId);

	    if (idx > 0 && idx < list.length) {
	      this.reveal(list[idx - 1], quiet, true);
	    }
	  },

	  /**
	   * select _selectNext
	   * @param  {boolean} quiet
	   * @return {void}
	   */
	  _selectNext: function _selectNext(quiet) {
	    _log.debug('_selectNext');

	    if (!this.selectedId) {
	      return;
	    }

	    var list = this._getIdList();
	    var idx = list.indexOf(this.selectedId);

	    if (idx > -1 && idx < list.length - 1) {
	      this.reveal(list[idx + 1], quiet, false);
	    }
	  },

	  /**
	   * select by element
	   * @param  {element} element DOM element
	   * @return {void}
	   */
	  _selectByElement: function _selectByElement(element) {
	    if (!element) {
	      _log.warn('missing element');
	      return;
	    }

	    var id = element.get('data-id');

	    if (this.options.multipleSelect) {
	      this.selectMultiple(id);
	    } else {
	      this.select(id);
	    }
	  },

	  /**
	   * select element by id
	   * @param  {string} id
	   * @param  {boolean} quiet
	   * @return {void}
	   */
	  select: function select(id, quiet) {
	    _log.debug('select', id, quiet);

	    // handle previous and next
	    if (id === 'previous' || id === 'next') {
	      this['_select' + id.capitalize()](quiet);
	      return;
	    }

	    var el = this.content.getElement('[data-id="' + id + '"]');

	    if (!el) {
	      this.selectedId = undefined;
	      _log.warn('missing el', el, id);
	      return;
	    }

	    var info = this.get('infoById', id);

	    /*remove new info when select another one*/
	    if (id !== 'new') {
	      this.remove('new');
	    }

	    this.removeSelected();

	    el.addClass('item-selected');

	    this.selectedEl = el;
	    this.selectedInfo = info;
	    this.selectedId = id;

	    if (!quiet) {
	      this.fireEvent('elSelect', el);
	      this.fireEvent('select', info);
	      this.fireEvent('userSelect');
	    }

	    this._saveSettings();
	  },

	  /**
	   * select multiple
	   * @param  {string} id
	   * @return {void}
	   */
	  selectMultiple: function selectMultiple(id) {
	    _log.debug('select', id);

	    var el = this.content.getElement('[data-id="' + id + '"]');

	    if (!el) {
	      _log.warn('missing el');
	      return;
	    }

	    var idx;
	    if (el.hasClass('is-selected')) {
	      if (this.options.template._type === 'check') {
	        el.removeClass('is-selected');
	        el.removeClass('is-checked');
	      } else {
	        el.removeClass('item-selected');
	      }

	      idx = this.multipleSelect.indexOf(id);
	      if (idx !== -1) {
	        this.multipleSelect.splice(idx, 1);
	      }
	    } else {
	      if (this.options.template._type === 'check') {
	        el.addClass('is-selected');
	        el.addClass('is-checked');
	      } else {
	        el.addClass('item-selected');
	      }

	      idx = this.multipleSelect.indexOf(id);
	      if (idx === -1) {
	        this.multipleSelect.push(id);
	      }
	    }

	    var info = this.get('infoById', id);

	    this.fireEvent('elSelect', el);
	    this.fireEvent('select', info);
	    this.fireEvent('userSelect');
	  },

	  /**
	   * get selected ids
	   * @return {Array}
	   */
	  _getIdsSelected: function _getIdsSelected() {
	    _log.debug('_getIdsSelected');

	    var els = this.content.getElements('div[class*=is-checked]');
	    var ids = [];

	    for (var i = 0; i < els.length; i++) {
	      var el = els[i];
	      var id = el.get('data-id');

	      if (ids.indexOf(id) === -1) {
	        ids.push(id);
	      }
	    }

	    return ids;
	  },

	  /**
	   * remove selected element
	   * @return {void}
	   */
	  removeSelected: function removeSelected() {
	    _log.debug('removeSelected');

	    var el = this.selectedEl;

	    if (el) {
	      el.removeClass('item-selected');
	      this.selectedId = undefined;
	      this.fireEvent('unselect');
	    }

	    this._saveSettings();
	  }

	});

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('view-core-list-settings').defineLevel();

	exports.default = new Class({

	  /**
	   * when the view request settings
	   * @return {void}
	   */
	  onSettings: function onSettings() {
	    this.set('settings', this.options.save);
	  },

	  /**
	   * define settings
	   * @return {void}
	   */
	  _defineSettings: function _defineSettings(settings) {
	    _log.debug('_defineSettings', settings);

	    var self = this;

	    settings = settings || {};

	    if (settings.ranges) {
	      for (var i = 0; i < settings.ranges.length; i++) {
	        var range = settings.ranges[i];
	        this.getRange(range);
	      }
	    }

	    if (settings.scrollTop) {
	      this.element.scrollTop = settings.scrollTop;
	    }

	    if (settings.selectedId) {
	      /*timer used because the ranges are not all
	      loaded when we pass here should listen a
	      event when all the ranges are ready*/
	      setTimeout(function () {
	        self.select(settings.selectedId, false);
	      }, 100);
	    }

	    this.settingsReady = true;
	  },

	  /**
	   * save settings
	   * @return {void}
	   */
	  _saveSettings: function _saveSettings() {
	    _log.debug('_saveSettings');

	    var save = {
	      scrollTop: this.content.parentNode.scrollTop,
	      ranges: this.renderedRanges,
	      selectedId: this.selectedId
	    };

	    this.fireEvent('settings', ['save', save]);
	  }

	});

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* jshint forin:false */
	/**
	 * Virtual List.V2 View Class
	 * @description
	 *    1-receive a list of infos, a range and a count
	 *    2-reset all vars
	 *    3-calculate number of ranges
	 *    4-create ranges Els wrappers in memory
	 *    5-create a array with the size of the count and set undefined for missing infos
	 *    6-update range el with data
	 *    7-render current viewport
	 */
	var _log = __debug('view-core-listV2-virtual').defineLevel();

	exports.default = new Class({

	  /**
	   * reset local variables
	   * @return {void}
	   */
	  _start: function _start() {
	    _log.debug('_start');

	    //total number of loaded infos
	    this.totalLoaded = 0;

	    //selected id
	    this.selectedId = undefined;

	    //save selected values in multi-select mode
	    this.multipleSelect = [];

	    //default item size
	    this.itemSize = 0;

	    //settings status (if has been set)
	    this.settingsReady = false;

	    //settings status (if has been set)
	    this.processModules = this.processModules || false;

	    //empty top reference
	    this.top = 0;

	    //list of infos ids
	    this.idsList = [];

	    //list of infos by order
	    this.virtualList = [];

	    //first range height
	    this.firstRangeHeight = 0;

	    //list of ranges height
	    this.rangesHeight = {};

	    //range els
	    this.rangeEl = {};

	    //number of ranges
	    this.ranges = [];

	    //count for virtual list
	    this.virtualSize = undefined;

	    //if the list is fully loaded
	    this.isFullyLoaded = false;

	    //current rendered ranges
	    this.renderedRanges = [];

	    this.lastSearch = undefined;

	    //cache list temporarily
	    this._tempCache = this._tempCache || [];
	    this._tempCount = this._tempCount || undefined;
	  },

	  /**
	   * used to set a complete list, can't set a range after
	   * @param {Array} list
	   * @return {Object} this
	   */
	  _setList: function _setList(list) {
	    _log.debug('_setList', list);

	    this._makeVirtual(list, 1, list.length);

	    return this;
	  },

	  /**
	   * Set a list and make it virtual
	   * @param {Array} list
	   * @param {Integer} range
	   * @param {Integer} count
	   * @return {void}
	   */
	  setVirtualList: function setVirtualList(list, range, count) {
	    _log.debug('setVirtualList', list.length, range, count);

	    //temporary fix for incomplete lists
	    var self = this;
	    setTimeout(function () {
	      self.fireEvent('noData');
	    }, 40000);

	    if (!isNaN(count)) {
	      this._makeVirtual(list, range, count);
	    } else {
	      this._setRange(list, range);
	    }
	  },

	  /**
	   * make virtual
	   * @param {Array} list
	   * @param {Integer} range
	   * @param {Integer} count
	   * @return {void}
	   */
	  _makeVirtual: function _makeVirtual(list, range, count) {
	    _log.debug('_makeVirtual', list.length, range, count);

	    range = range || 1;

	    this.empty();

	    this.virtualSize = count;

	    //num min of ranges is 1
	    this.ranges = Math.ceil(count / this.options.rangeSize) || 1;

	    this._createRangesEls();

	    //populate virtual list
	    var arr = this.virtualList;
	    while (arr.length < count) {
	      arr.push(undefined);
	    }

	    if (list.length === count) {
	      this.isFullyLoaded = true;
	    }

	    this._setRange(list, range);

	    if (count == 0) {
	      this.set('status', count + ' Results');
	    } else {
	      this.set('status', ' / ' + count);
	    }
	  },

	  /**
	   * set range
	   * @param {Array} list
	   * @param {number} range
	   * @return {void}
	   */
	  _setRange: function _setRange(list, range) {
	    //_log.debug('set range', range, 'with', list.length, 'infos');

	    this._updateVirtualList(list, range);
	    this._renderViewport(range);

	    if (list.length && this.settingsReady === false) {
	      this.onSettings(this);
	    }

	    if (this.totalLoaded >= this.virtualSize) {
	      this.fireEvent('setList');

	      //process info modules for filter and search
	      var s = this.search && this.search.getValue();
	      var f = this.filter;
	      var sf = s || f;
	      if (this.processModules === false && sf) {
	        this.processModules = true;
	        this.processInfos();
	      }
	    } else if (!this.options.data.fetchAll) {
	      this.fireEvent('setList');
	    }
	  },

	  /**
	   * Create ranges Elements and save in memory
	   * @return {void}
	   */
	  _createRangesEls: function _createRangesEls() {
	    var ranges = this.ranges;

	    //_log.debug('_createRangesEls', ranges);

	    for (var range = 1; range <= ranges; range++) {
	      var el = new Element('div', {
	        class: 'list-range',
	        'data-range': range
	      });

	      this.rangeEl[range] = el;
	      this.rangesHeight[range] = undefined;

	      /*if (!this.canvasReady) {
	        this._initCanvas(el);
	      }*/
	    }
	  },

	  /**
	   * Process ranges
	   * create this.virtualList with undefined when there is no info,
	   * @return {void}
	   */
	  _updateVirtualList: function _updateVirtualList(list, range) {
	    //_log.debug('update virtualList range:', range, 'length:', list.length);

	    var arr = this.virtualList;

	    this.totalLoaded += list.length;

	    //find index to start the insert
	    var rangeSize = this.options.rangeSize;
	    var idx = range * rangeSize - rangeSize;
	    if (arr[idx]) {
	      var count = idx;
	      while (arr[count]) {
	        idx = count;
	        count++;
	      }
	    }

	    //insert array at a specific index
	    Array.prototype.splice.apply(arr, [idx, list.length].concat(list));
	  },

	  /**
	   * _updateRangeEl
	   * @param  {number} range
	   * @param  {Array|undefined} list
	   * @return {void}
	   */
	  _updateRangeEl: function _updateRangeEl(range, list) {
	    var rangeEl = this.rangeEl[range];

	    if (!rangeEl) {
	      _log.warn('missing rangeEl');
	      return;
	    }

	    rangeEl.empty();

	    //_log.debug('update range el', range, list.length);

	    for (var i = 0, leng = list.length; i < leng; i++) {
	      var info = list[i];
	      this.renderInfo(info, range);
	    }

	    /*get and set range height when render
	    the range el for the first time
	    (uncomment to remove getSize)*/
	    /*rangeEl.inject(document.body);
	    this.rangesHeight[range] = rangeEl.getSize().y;
	    rangeEl.dispose();
	    this._resizeViewPort();*/
	  },

	  /**
	   * render current viewport
	   * @param  {number} range
	   * @return {void}
	   */
	  _renderViewport: function _renderViewport(range) {
	    //_log.debug('_renderViewport', range);

	    if (this.rendering) {
	      return;
	    }

	    var firstRangeEl = this.content.firstChild;

	    //if list view is empty
	    if (!firstRangeEl) {
	      this._injectRange(range, 'first');
	      return;
	    }

	    //take default size for item and set settings
	    if (this.itemSize === 0 && firstRangeEl && firstRangeEl.firstChild) {
	      var item = firstRangeEl.firstChild;
	      this.itemSize = item.getSize().y;

	      this._drawBackground();

	      this.updateStatusIndex();
	    }

	    this.rendering = true;

	    var ranges = this._getViewportRanges();

	    //_log.debug('render viewport', ranges, this.renderedRanges);

	    this._cleanViewport(ranges);

	    for (var i = 0; i < ranges.length; i++) {
	      var r = ranges[i];

	      if (i === 0) {
	        this._injectRange(r, 'first');
	      } else {
	        this._injectRange(r);
	      }
	    }

	    this.rendering = false;

	    this.fireEvent('viewportRendered');
	  },

	  /**
	   * get current ranges in the viewport
	   * @return {Array} ranges
	   */
	  _getViewportRanges: function _getViewportRanges() {
	    //_log.debug('_getViewportRanges');

	    var ranges = [];
	    var range;

	    var rangesHeight = this.rangesHeight;

	    var viewportHeight = this.element.getSize().y;
	    var scrollTop = this.content.parentNode.scrollTop;
	    var total = 0;
	    for (var key in rangesHeight) {
	      total += rangesHeight[key];

	      //range found if scrollTop is smaller than the total height
	      if (scrollTop <= total) {
	        range = parseInt(key, 10);
	        ranges.push(range);

	        //_log.debug('scrollTop', range, total, viewportHeight, scrollTop);

	        //find transition from one range to another (display 2 ranges)
	        if (scrollTop + viewportHeight >= total) {
	          ranges.push(range + 1);
	        }

	        this.top = total - rangesHeight[key];

	        break;
	      }
	    }

	    //temporary fix
	    if (!ranges.length) {
	      ranges.push(1);
	    }

	    //_log.debug('viewport ranges', range, ranges, this.ranges);

	    return ranges;
	  },

	  /**
	   * clean viewport
	   * @param  {Array} ranges
	   * @return {void}
	   */
	  _cleanViewport: function _cleanViewport(ranges) {
	    //_log.debug('_cleanViewport', ranges);

	    var render = [];

	    var renderedRanges = this.renderedRanges;
	    var len = renderedRanges.length;
	    var renderedRange;
	    var rangeEl;

	    for (var r = 0; r < len; r++) {
	      renderedRange = renderedRanges[r];

	      if (ranges.indexOf(renderedRange) !== -1) {
	        continue;
	      }

	      rangeEl = this.rangeEl[renderedRange];

	      if (rangeEl) {
	        this.renderedRanges.splice(len, 1);

	        rangeEl.dispose();
	      }
	    }

	    return render;
	  },

	  /**
	   * inject range
	   * @param  {number} range
	   * @param  {string} where
	   * @return {void}
	   */
	  _injectRange: function _injectRange(range, where) {
	    //_log.debug('_injectRange', range, where);

	    var rangeEl = this.rangeEl[range];

	    if (!rangeEl) {
	      //_log.warn('missing range el', rangeEl);
	      return;
	    }

	    if (!rangeEl.firstChild) {
	      var list = this._getListByRange(range);
	      if (!list[0]) {
	        return;
	      }
	      this._updateRangeEl(range, list);
	    }

	    rangeEl.inject(this.content);

	    var rangeHeight = this.rangesHeight[range];

	    var height;
	    if (where === 'first') {
	      var top = this.top;

	      rangeEl.style.paddingTop = top + 'px';

	      height = rangeEl.getSize().y;

	      if (!this.firstRangeHeight) {
	        this.firstRangeHeight = height;
	      }

	      this.rangesHeight[range] = height - top;

	      if (rangeHeight !== height) {
	        this._resizeViewPort();
	      }
	    } else {
	      rangeEl.style.paddingTop = '0px';

	      height = rangeEl.getSize().y;

	      this.rangesHeight[range] = height;

	      if (rangeHeight !== height) {
	        this._resizeViewPort();
	      }
	    }

	    if (this.renderedRanges.indexOf(range) === -1) {
	      this.renderedRanges.push(range);
	      this.getRange(range);
	    }
	  },

	  /**
	   * update viewport EL with the right height
	   * @return {void}
	   */
	  _resizeViewPort: function _resizeViewPort() {
	    var height = 0;
	    var rangesHeight = this.rangesHeight;
	    var result;
	    for (var key in rangesHeight) {
	      result = rangesHeight[key];

	      if (!result) {
	        result = this.firstRangeHeight;
	        rangesHeight[key] = result;
	      }

	      height += result;
	    }

	    //_log.debug('_resizeViewPort', height);

	    this.content.setStyle('height', height);
	  },

	  /**
	   * get list by range
	   * @param  {number} range
	   * @return {Array}
	   */
	  _getListByRange: function _getListByRange(range) {
	    var rangeSize = this.options.rangeSize;
	    var from = range * rangeSize - rangeSize;
	    var docs = this.virtualList.slice(from, from + rangeSize);

	    //_log.debug('_getListByRange', range, docs.length);

	    if (!docs.length || docs[0] === undefined) {
	      this.getRange(range);
	    }

	    return docs;
	  },

	  /**
	   * used by internal API
	   * new definition to prevent error
	   * @return {void}
	   */
	  getRange: function getRange() {}

	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Tree View
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * # Info Structure:
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               *      {
	                                                                                                                                                                                                                                                                               *          id: unique info id
	                                                                                                                                                                                                                                                                               *          name: name
	                                                                                                                                                                                                                                                                               *          count: number of documents inside this node
	                                                                                                                                                                                                                                                                               *          sort: sortKey
	                                                                                                                                                                                                                                                                               *          path: node path
	                                                                                                                                                                                                                                                                               *      }
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * # The options accept:
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               *      selectFirst: select the first node if there is no other node to select
	                                                                                                                                                                                                                                                                               *      selectedId: the selected node, will be the node with this id
	                                                                                                                                                                                                                                                                               *      selectedCode: the selected node, will be the node with this code - override the selectedId
	                                                                                                                                                                                                                                                                               *      selectedIndex: the selected node, will be the node with this index in the list - override the selectedCode
	                                                                                                                                                                                                                                                                               *      toggle: if set to true the view will toggle when initialize
	                                                                                                                                                                                                                                                                               *      nodes: a list of documents that will be render when the view intanciate
	                                                                                                                                                                                                                                                                               *      displayCount: true or false - if the tree display the count element
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               */


	var _options = __webpack_require__(47);

	var _options2 = _interopRequireDefault(_options);

	var _minimalUtils = __webpack_require__(14);

	var _view = __webpack_require__(2);

	var _view2 = _interopRequireDefault(_view);

	var _collapse = __webpack_require__(48);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _tree = __webpack_require__(49);

	var _tree2 = _interopRequireDefault(_tree);

	var _collapse3 = __webpack_require__(50);

	var _collapse4 = _interopRequireDefault(_collapse3);

	var _count = __webpack_require__(51);

	var _count2 = _interopRequireDefault(_count);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-core-tree').defineLevel();

	exports.default = new Class({

	  Extends: _view2.default,

	  Implements: [_collapse4.default, _count2.default],

	  options: _options2.default,

	  /**
	   * On resize complete
	   * @param  {string} modifier
	   * @param  {integer} size
	   * @return {void}
	   * @private
	   */
	  _onViewResizeComplete: function _onViewResizeComplete(modifier, size) {
	    //_log.debug('_onViewResizeComplete');
	    this.zoomFx = this.zoomFx || new Fx.Tween(this.element, {
	      duration: 250,
	      transition: 'quart:out',
	      //link: 'cancel',
	      property: 'zoom'
	    });

	    if (size < 200) {
	      //_log.debug('go small', this.element);
	      this.element.setStyle('zoom', '.8');
	      //this.zoomFx.start(1, 0.7);
	      this.isSmall = true;
	    } else {
	      //_log.debug('go big', this.element);
	      this.element.setStyle('zoom', '1');
	      //this.zoomFx.start(0.7, 1);
	      this.isSmall = false;
	    }
	  },

	  /**
	   * Initialize View
	   * @return {void}
	   * @private
	   */
	  _initView: function _initView() {
	    var opts = this.options;

	    this.parent();

	    this.multipleSelect = [];

	    this._initTree();
	    this._initTitle();

	    if (opts.autoScroll) {
	      this._initAutoScroll();
	    }

	    //For the settings
	    if (opts.nodeId) {
	      this.nodeId = opts.nodeId;
	    }
	  },

	  /**
	   * Initialize list if exist
	   * @return {void}
	   * @private
	   */
	  _initList: function _initList() {
	    _log.debug('_initList', this.options);

	    var opts = this.options;

	    if (opts.nodes) {
	      this.set('list', opts.nodes);
	    }
	  },

	  /**
	   * Initialize tree
	   * @return {void}
	   * @private
	   */
	  _initTree: function _initTree() {
	    var params = {
	      /** @ignore */
	      checkDrop: function checkDrop(element) {
	        return !element.hasClass('nodrop');
	      }
	    };

	    this.tree = new _tree2.default(this.content, params);
	  },

	  /**
	   * Initialize tree title
	   * @return {void}
	   * @private
	   */
	  _initTitle: function _initTitle() {
	    //_log.debug('_initTitle');

	    if (!this.control || !this.control.title) {
	      return;
	    }

	    var titleControl = this.control.title;

	    var title = this.options.data.kind || this.options.data.type;

	    if (titleControl) {
	      titleControl.set('text', title);
	    }
	  },

	  /**
	   * Setter
	   * @param {string} prop
	   * @param {string|Object} value
	   * @return {void}
	   */
	  set: function set(prop, value) {
	    switch (prop) {
	      case 'count':
	        this.refreshCount(value);
	        break;
	      case 'info':
	        this._setInfo(value);
	        break;
	      case 'list':
	        this._setList(value);
	        break;
	      case 'settings':
	        this._setSettings(value);
	        break;
	      case 'selectCode':
	        this._selectByCode(value);
	        break;
	      case 'selectedByName':
	        this._selectByName(value);
	    }

	    this.fireEvent('set', [prop, value]);
	  },

	  /**
	   * Getter
	   * @param {string} prop
	   * @param {string} value
	   * @return {void}
	   */
	  get: function get(prop, value) {
	    switch (prop) {
	      case 'multiSelected':
	        return this.multipleSelect;
	      case 'id':
	        return this.getSelectedId();
	      case 'info':
	        return this.getSelectedDoc();
	      case 'count':
	        return this.getNodeCount(value);
	      case 'list':
	        return this.list;
	      case 'options':
	        return this.options;
	      case 'type':
	        return 'tree';
	    }
	  },

	  /**
	   * Set settings
	   * @param {string} prop settings property
	   * @private
	   */
	  _setSettings: function _setSettings(prop) {
	    if (!this.settings) {
	      return;
	    }

	    var props = ['select'];

	    if (props.indexOf(prop) === -1) {
	      return;
	    }

	    if (props === 'select') {
	      this.settings.select(this.getSelectedId());
	    }
	  },

	  /**
	   * Set nodes
	   * @param {Object} node
	   * @return {void}
	   * @private
	   */
	  _setInfo: function _setInfo(node) {
	    _log.debug('_setInfo', node);

	    var info = _minimalUtils.array.findObjByKey(this.list, '_id', node._id);

	    if (info && !node._count) {
	      node._count = info._count;
	    }

	    if (info) {
	      info = node;
	      _minimalUtils.array.updateObjByKey(this.list, '_id', node._id, node);
	    } else {
	      this.list.push(node);
	    }

	    this.refresh();
	  },

	  /**
	   * remove
	   * @param {Object} node
	   * @return {void}
	   * @private
	   */
	  remove: function remove(node) {
	    _log.debug('remove', node);

	    if (typeof node === 'string') {
	      _minimalUtils.array.deleteObjByKey(this.list, '_id', node);
	    } else {
	      _minimalUtils.array.deleteObjByKey(this.list, '_id', node._id);
	    }

	    this.refresh();
	  },

	  /**
	   * Set nodes
	   * @param {Array} list Nodes objects
	   * @return {void}
	   * @private
	   */
	  _setList: function _setList(list) {
	    _log.debug('_setList', list.length);

	    this.fireEvent('settingList');

	    this.list = list;

	    this.fireEvent('listSet', list);
	  },

	  /**
	   * Get tree list
	   * @return {Array}
	   * @private
	   */
	  _getList: function _getList() {
	    return this.list;
	  },

	  /**
	   * init selected by code
	   * @return {void}
	   * @private
	   */
	  _initSelectedCode: function _initSelectedCode() {
	    var opts = this.options;

	    if (!opts.selectedCode) {
	      return;
	    }

	    this._selectByCode(opts.selectedCode);
	  },

	  /**
	   * Initialize select
	   * @return {void}
	   * @private
	   */
	  _initSelected: function _initSelected() {
	    //_log.debug('_initSelected', this.nodeId);
	    if (!this.options.selectFirst) {
	      return;
	    }

	    var info = _minimalUtils.array.findObjByKey(this.list, '_id', this.nodeId);

	    if (!info) {
	      var nodes = this.list;
	      if (nodes && nodes[0]) {
	        this.select(nodes[0]._id);
	      }
	    }
	  },

	  /**
	   * Select node by code
	   * @param {string} code
	   * @return {void}
	   * @private
	   */
	  _selectByCode: function _selectByCode(code) {
	    var info = _minimalUtils.array.findObjByKey(this.list, 'code', code);

	    if (!info) {
	      return;
	    }

	    var id = info._id;

	    this.select(id);
	  },

	  /**
	   * Select node by name
	   * @param {string} name
	   * @return {void}
	   * @private
	   */
	  _selectByName: function _selectByName(name) {
	    var info = _minimalUtils.array.findObjByKey(this.list, 'name', name);

	    if (!info) {
	      return;
	    }

	    var id = info._id;

	    this.select(id);
	  },

	  /**
	   * Get info by index and select it
	   * @return {void}
	   * @private
	   */
	  _initSelectedIndex: function _initSelectedIndex() {
	    var opts = this.options;

	    if (opts.selectedIndex === null) {
	      return;
	    }

	    var nodes = this.list;

	    var info = nodes[opts.selectedIndex];

	    if (!info) {
	      return;
	    }

	    var id = info._id;

	    this.select(id);
	  },

	  /**
	   * Get scrollTop value
	   * and fire scroll event
	   * @return {void}
	   * @private
	   */
	  _elementDidScroll: function _elementDidScroll() {
	    //_log.debug('_elementDidScroll');
	    var self = this;

	    clearTimeout(this.scrollTimeout);

	    this.scrollTimeout = setTimeout(function () {
	      var val = self.element.scrollTop;
	      self.fireEvent('scroll', val);
	      self.fireEvent('settings', ['scrollTop', val]);
	    }, 50);
	  },

	  /**
	   * Initialize scroll top
	   * @return {void}
	   * @private
	   */
	  _initScrollTop: function _initScrollTop() {
	    var opts = this.options;

	    if (opts.scrollTop) {
	      this.element.scrollTop = opts.scrollTop;
	    }
	  },

	  /**
	   * Initialize Tree Object
	   * @param {Array} list
	   * @return {Array} tree
	   * @private
	   */
	  _getTreeObject: function _getTreeObject(list) {
	    //_log.debug('_getTreeObject', list);
	    var tree = [];
	    var mem = {};
	    var node;
	    var kind = this.options.kind;

	    for (var i = 0; i < list.length; i++) {
	      node = list[i];
	      var n = {
	        _id: node._id,
	        name: node.name,
	        count: node._count,
	        sort: node.sort,
	        nodes: [],
	        select: node._select
	      };
	      if (!kind) {
	        mem[node._id] = n;
	      } else if (kind === node.kind) {
	        mem[node._id] = n;
	      }
	    }

	    list = _minimalUtils.array.sort(list, 'sort');

	    for (var j = 0; j < list.length; j++) {
	      node = list[j];
	      if (!mem[node._id]) {
	        continue;
	      }

	      var obj = mem[node._id];

	      node.path = node.path || [];

	      var parentId = node.path[node.path.length - 1];

	      if (!parentId) {
	        tree.push(obj);
	      } else {
	        //The solution as delete the node id that don't exist from the node
	        //IN TEST
	        if (!mem[parentId]) {
	          node.path.splice(node.path.length - 1, 1);
	          j--;
	        } else {
	          mem[parentId].nodes.push(obj);
	        }
	      }
	    }

	    return tree;
	  },

	  /**
	   * Render list
	   * @param  {Array} list
	   * @return {void}
	   */
	  render: function render(list) {
	    list = this.list;

	    _log.debug('render', list.length);

	    var tree = this._getTreeObject(list);

	    this.clear();

	    this._render(tree, this.content);

	    this.select(this.nodeId, undefined, true);

	    // this is horrible and need to disapear!
	    var ul = this.content.getElement('ul').addClass('tree').addClass('collapse');
	    this.collapse = new _collapse2.default(ul);

	    //repeated code
	    if (this.orderMode) {
	      this.element.firstChild.addClass('mode-edit');
	      if (this.options.shake === true) {
	        this.element.firstChild.addClass('shake');
	      }
	    }

	    this._setCollapse();

	    /**
	     * @event rendered
	     * Fired when the view render
	     * @param {Object} view instance
	     */
	    this.fireEvent('rendered');
	  },

	  /**
	   * Render data
	   * @param {data} data
	   * @param {container} container
	   * @private
	   */
	  _render: function _render(data, container) {
	    //_log.debug('_render', data);

	    if (!data) {
	      return;
	    }

	    var ul = new Element('ul').inject(container);

	    for (var i = 0; i < data.length; i++) {
	      var node = data[i];

	      var li = new Element('li', {
	        'data-id': node._id
	      }).inject(ul);

	      var line = new Element('div', {
	        class: 'line'
	      }).inject(li);

	      if (this.options.checkbox) {

	        /*should use a UI.Checkbox instead*/
	        var checkbox = new Element('div', {
	          class: 'ui-checkbox',
	          styles: {
	            'flex': 'none 1 0%',
	            'width': '32px',
	            'padding': '3px 6px',
	            'margin': '0 0 0 0px',
	            'opacity': '.8',
	            'background-repeat': 'no-repeat',
	            'background-position': 'center',
	            'background-image': 'url(/vendor/caoutchouc/icon/mdi/svg/checkbox.svg)'
	          }
	        }).inject(line);

	        checkbox.addEvent('click', this._handleCheckboxClick.bind(this, node._id, checkbox));

	        if (node.select) {
	          this._handleCheckboxClick(node._id, checkbox);
	        }
	      }

	      new Element('a', {
	        class: 'label',
	        html: node.name
	      }).inject(line);

	      var count = node.count || '';
	      if (!this.options.displayCount) {
	        count = '';
	      }

	      new Element('span', {
	        class: 'count',
	        html: count
	      }).inject(line);

	      new Element('a', {
	        'class': 'expand',
	        href: '#'
	      }).inject(line, 'top');

	      this._render(node.nodes, li);
	    }
	  },

	  /**
	   * select checkbox
	   * @param  {string} id Info id
	   * @param  {DOMElement} el
	   * @return {void}
	   */
	  _handleCheckboxClick: function _handleCheckboxClick(id, el) {
	    _log.debug('_handleCheckboxClick', id, el);

	    var unselect = false;
	    if (el.hasClass('is-checked')) {
	      unselect = true;
	    }

	    //handle children
	    var l = this.list;
	    for (var i = 0; i < l.length; i++) {
	      var info = l[i];

	      if (info.path.indexOf(id) !== -1) {
	        var relatedEl = this.content.getElement('[data-id="' + info._id + '"]');

	        if (!relatedEl) {
	          continue;
	        }

	        relatedEl = relatedEl.getElement('.ui-checkbox');

	        if (unselect) {
	          this._unselectCheckbox(info._id, relatedEl);
	        } else {
	          this._selectCheckbox(info._id, relatedEl);
	        }
	      }
	    }

	    if (unselect) {
	      this._unselectCheckbox(id, el);
	    } else {
	      this._selectCheckbox(id, el);
	    }
	  },

	  /**
	   * select Checkbox
	   * @param  {string} id
	   * @param  {DOMElement} el
	   * @param  {boolean} quiet
	   * @return {void}
	   */
	  _selectCheckbox: function _selectCheckbox(id, el, quiet) {
	    el.addClass('is-checked');
	    /*should use the is-checked class instead of change the background like this*/
	    el.setStyle('background-image', 'url(/vendor/caoutchouc/icon/mdi/svg/checked.svg)');

	    var idx = this.multipleSelect.indexOf(id);
	    if (idx === -1) {
	      this.multipleSelect.push(id);
	    }

	    if (!quiet) {
	      this.fireEvent('checkboxSelect', id, el);
	    }
	  },

	  /**
	   * unselect Checkbox
	   * @param  {string} id
	   * @param  {DOMElement} el
	   * @param  {boolean} quiet
	   * @return {void}
	   */
	  _unselectCheckbox: function _unselectCheckbox(id, el, quiet) {
	    el.removeClass('is-checked');
	    /*should use the is-checked class instead of change the background like this*/
	    el.setStyle('background-image', 'url(/vendor/caoutchouc/icon/mdi/svg/checkbox.svg)');

	    var idx = this.multipleSelect.indexOf(id);
	    if (idx !== -1) {
	      this.multipleSelect.splice(idx, 1);
	    }

	    if (!quiet) {
	      this.fireEvent('checkboxUnselect', id, el);
	    }
	  },

	  /**
	   * Select By element
	   * @param  {element} element DOM element
	   * @return {void}
	   * @private
	   */
	  _selectByElement: function _selectByElement(element) {
	    var id = element.get('data-id');
	    this.select(id);
	  },

	  /**
	   * Select Id
	   * @param  {string} id Id to be selected
	   * @param  {boolean} quiet
	   * @param  {boolean} settings
	   */
	  select: function select(id, quiet, settings) {
	    _log.debug('select', id, quiet);

	    /*if the view is a checkbox do not
	    use the default select method*/
	    if (this.options.checkbox) {
	      this.removeSelected();
	      return;
	    }

	    id = id || this.get('id');

	    var el = this.content.getElement('[data-id="' + id + '"]');

	    if (!el) {
	      this.unselect();
	      return;
	    }

	    this.removeSelected();

	    this.tree.current = el;
	    el.addClass('selected');

	    //this.scroll.toElement(el);

	    /*nodeId should be set before triggering any event*/
	    this.nodeId = id;

	    if (!quiet && id !== 'new') {
	      var info = _minimalUtils.array.findObjByKey(this.list, '_id', id);
	      /**
	       * @event select
	       * Fired when the view select a document
	       * @param {Object} view instance
	       * @param {Array} document id and document type
	       */
	      this.fireEvent('select', [info, this]);
	    }

	    if (!settings) {
	      this.fireEvent('settings', ['nodeId', id]);
	    }
	  },

	  /**
	   * unselect
	   * @return {void}
	   */
	  unselect: function unselect() {
	    this.nodeId = null;
	    this.fireEvent('settings', ['nodeId', null]);
	    this.fireEvent('unselect');

	    this.removeSelected();
	  },

	  /**
	   * Remove selected class from the
	   * selected element
	   * @return {void}
	   */
	  removeSelected: function removeSelected() {
	    //_log.debug('removeSelected');
	    var el = this.tree.current;

	    if (el) {
	      el.removeClass('selected');
	      this.nodeId = null;
	    }
	  },

	  /**
	   * Update sort and path for all nodes
	   * @return {void}
	   * @private
	   */
	  _updateSortAndPath: function _updateSortAndPath() {
	    //_log.debug('_updateSortAndPath', treeOjb);
	    var treeOjb = this._serialize();
	    this._updateData(treeOjb);
	    this.refresh();
	  },

	  /**
	   * on disable drag
	   * @return {void}
	   * @private
	   */
	  _onDisableDrag: function _onDisableDrag() {
	    //_log.debug('_onDisableDrag', this.list);
	    this.fireEvent('save', [this.list]);
	  },

	  /**
	   * Update Node Sortkey
	   * @param {Object} object
	   * @param {boolean} level Inter var
	   * @private
	   */
	  _updateData: function _updateData(object, level) {
	    //_log.debug('_updateData', treeObj);
	    var count = 1;

	    for (var key in object) {
	      if (object.hasOwnProperty(key)) {
	        var node = _minimalUtils.array.findObjByKey(this.list, '_id', key);

	        if (!level) {
	          node.sort = this._fillSortkey(count);
	          node.path = [];
	          count++;
	          var tmp = _minimalUtils.array.findObjByKey(this.list, '_id', node._id);
	          tmp = node;
	        }

	        if (_typeof(object[key]) !== 'object') {
	          continue;
	        }

	        var list = [];
	        for (var cid in object[key]) {
	          if (object[key].hasOwnProperty(cid)) {
	            list.push(cid);
	          }
	        }

	        for (var i = 0, len = list.length; i < len; i++) {
	          var id = list[i];
	          var doc = _minimalUtils.array.findObjByKey(this.list, '_id', id);

	          doc.sort = node.sort + this._fillSortkey(i + 1);
	          doc.path = Array.clone(node.path);

	          if (node._id) {
	            doc.path.push(node._id);
	          }

	          var tmp1 = _minimalUtils.array.findObjByKey(this.list, '_id', id);
	          tmp1 = doc;
	        }

	        this._updateData(object[key], true);
	      }
	    }
	  },

	  /**
	   * Get selected document
	   * @return {Object} selected document or null
	   */
	  getSelectedDoc: function getSelectedDoc() {
	    if (!this.nodeId) {
	      return null;
	    }

	    var info = _minimalUtils.array.findObjByKey(this.list, '_id', this.nodeId);

	    if (info) {
	      return info;
	    }

	    return null;
	  },

	  /**
	   * Get selected id
	   * @return {string} selected id or null
	   */
	  getSelectedId: function getSelectedId() {
	    return this.nodeId || null;
	  },

	  /**
	   * Get count from selected node
	   * @return {void}
	   */
	  getNodeCount: function getNodeCount(id) {
	    //_log.debug('getNodeCount');
	    id = id || this.nodeId;

	    if (!id) {
	      return null;
	    }

	    var info = _minimalUtils.array.findObjByKey(this.list, '_id', id);

	    if (!info) {
	      return null;
	    }

	    return info._count;
	  },

	  /**
	   * Clear tree
	   * @return {void}
	   */
	  clear: function clear() {
	    this.content.empty();
	  },

	  /**
	   * Get Node Sort key And Path key
	   * @return {Object}
	   * @private
	   */
	  _getMainkeys: function _getMainkeys() {
	    var sortkey = 0;
	    var path = [];
	    var list = this.list;

	    for (var i = 0; i < list.length; i++) {
	      var node = list[i];

	      if (node.sort.length === 5) {
	        sortkey = node.sort.substr(4);
	        path = node.path;
	      }
	    }

	    sortkey++;
	    sortkey = this._fillSortkey(sortkey);

	    return {
	      sort: sortkey,
	      path: path
	    };
	  },

	  /**
	   * Get Node Parent Sort key And Path key
	   * @param {Object} parent
	   * @return {Object}
	   * @private
	   */
	  _getParentKeys: function _getParentKeys(parent) {
	    var sortkey = 0;
	    var path = [];
	    var list = this.list;

	    for (var i = 0; i < list.length; i++) {
	      var node = list[i];

	      if (node.sort === parent.sort && node.sort.length === parent.sort.length + 5) {
	        sortkey++;
	        path = Array.clone(parent.path);
	      }
	    }

	    sortkey = this._fillSortkey(sortkey);
	    sortkey = parent.sort + sortkey;

	    parent.path = parent.path || [];
	    path = Array.clone(parent.path);
	    path.push(parent._id);

	    return {
	      sort: sortkey,
	      path: path
	    };
	  },

	  /**
	   * New Node
	   * @param {Object} parentId
	   * @return {void}
	   * @private
	   */
	  _addNode: function _addNode(parentId) {
	    if (!parentId || typeof parentId !== 'string') {
	      parentId = this.nodeId;
	    }

	    _log.debug('_addNode', parentId);

	    var opts = this.options;
	    var len = this.list.length;

	    //if (!parentId && len > 0) return;

	    var sortkey = this._fillSortkey(len + 1);

	    var node = {
	      type: opts.data.type,
	      kind: opts.data.kind || undefined,
	      node: true,
	      sort: sortkey,
	      name: 'New node',
	      path: [],
	      _count: 0
	    };

	    if (parentId) {
	      if (opts.collapse && opts.collapse[parentId]) {
	        delete opts.collapse[parentId];
	      }

	      var parent = _minimalUtils.array.findObjByKey(this.list, '_id', parentId);
	      var keys;

	      if (parent) {
	        keys = this._getParentKeys(parent);
	      } else {
	        keys = this._getMainkeys();
	      }

	      node.path = keys.path;
	      node.sort = keys.sort;
	    }

	    this.list.push(node);

	    var info = this.list[len];
	    info._id = 'new';

	    this.refresh();
	    this.setNameById('new');
	  },

	  /**
	   * Set name by id
	   * @return {void}
	   */
	  setNameById: function setNameById(id) {
	    this.select(id);
	    this._setName();
	  },

	  /**
	   * Set Name
	   * @param {element} el DOM element
	   * @private
	   */
	  _setName: function _setName(el) {
	    _log.debug('updateName', el);
	    el = el || this.tree.current;

	    if (!el || this.orderMode) {
	      return;
	    }

	    var control = this.control;

	    if (control) {
	      if (control.add) {
	        control.add.setState('disabled');
	      }
	      if (control.edit) {
	        control.edit.setState('disabled');
	      }
	      if (control.trash) {
	        control.trash.setState('disabled');
	      }
	      if (control.properties) {
	        control.properties.setState('disabled');
	      }
	    }

	    var self = this;
	    var id = el.get('data-id');
	    var info = _minimalUtils.array.findObjByKey(this.list, '_id', id);
	    var name = el.getElement('.label');
	    var text = name.get('html');
	    var key = null;

	    this._selectElementContent(name);

	    name.addEvents({
	      /** @function */
	      blur: function blur() {
	        name.set('contenteditable', false);

	        if (control) {
	          if (control.add) {
	            control.add.setState('enable');
	          }
	          if (control.edit) {
	            control.edit.setState('enable');
	          }
	          if (control.trash) {
	            control.trash.setState('enable');
	          }
	          if (control.properties) {
	            control.properties.setState('enable');
	          }
	        }

	        var value = name.get('html');

	        if (id === 'new' && key === 'esc') {
	          _minimalUtils.array.deleteObjByKey(self.list, '_id', id);
	          self.refresh();
	        } else if (text !== value || value === 'New node') {
	          info.name = value;
	          if (info._id === 'new') {
	            info._id = undefined;
	            _minimalUtils.array.deleteObjByKey(self.list, '_id', info._id);
	          }
	          self.fireEvent('save', info);
	        }
	      },
	      /** @function */
	      keydown: function keydown(ev) {
	        key = ev.key;

	        if (ev.key === 'enter') {
	          ev.stop();
	          name.set('contenteditable', false);
	        }

	        //cancel
	        if (ev.key === 'esc') {
	          ev.stop();
	          name.set('contenteditable', false);
	          name.set('html', text);
	        }
	      }
	    });
	  },

	  /**
	   * Select Element Content
	   * @param {element} el
	   * @private
	   */
	  _selectElementContent: function _selectElementContent(el) {
	    el.set('contenteditable', true);
	    el.focus();
	    el.removeEvents('blur', 'keydown');

	    var range = document.createRange();
	    range.selectNodeContents(el);
	    var sel = window.getSelection();
	    sel.removeAllRanges();
	    sel.addRange(range);
	  },

	  /**
	   * Refresh Node View
	   */
	  refresh: function refresh() {
	    //_log.debug('refresh', this.list);
	    this._setList(this.list);
	  },

	  /**
	   * Toggle Order Mode
	   * @private
	   */
	  _toggleOrganize: function _toggleOrganize() {
	    //_log.debug('toggleOrderMode');

	    if (this.orderMode) {
	      this._disableOrganize();
	    } else {
	      this._enableOrganize();
	    }
	  },

	  /**
	   * Enable Organize
	   * @return {void}
	   * @private
	   */
	  _enableOrganize: function _enableOrganize() {
	    var control = this.control;

	    this.element.firstChild.addClass('mode-edit');
	    if (this.options.shake === true) {
	      this.element.firstChild.addClass('shake');
	    }

	    this.tree.enableDrag();

	    this.orderMode = true;

	    if (control) {
	      //control.organize.element.addClass('state-active');
	      control.organize.setState('active');
	      control.addnode.setState('disabled');
	      control.trash.setState('disabled');
	      control.infoview.setState('disabled');
	    }

	    this.fireEvent('dragEnabled');
	  },

	  /**
	   * Disable Organize
	   * @return {void}
	   * @private
	   */
	  _disableOrganize: function _disableOrganize() {
	    var control = this.control;

	    this.element.removeClass('mode-edit');

	    this.tree.disableDrag();

	    this.orderMode = false;

	    if (control) {
	      //control.organize.element.removeClass('state-active');
	      control.organize.setState('enable');
	      control.addnode.setState('enable');
	      control.trash.setState('enable');
	      control.infoview.setState('enable');
	    }

	    this.fireEvent('dragDisabled');
	  },

	  /**
	   * Serialize tree
	   * @return {Object} serialize
	   * @private
	   */
	  _serialize: function _serialize() {
	    this.content.getElement('ul').addClass('tree');
	    var serialize = this.tree.serialize();

	    return serialize;
	  },

	  /**
	   * Util to fill the a new sortkey
	   * @param  {integer} num
	   * @return {integer} num
	   * @private
	   */
	  _fillSortkey: function _fillSortkey(num) {
	    num += '';
	    while (num.length < 5) {
	      num = '0' + num;
	    }
	    return num;
	  }

	});

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  clss: 'tree',
	  autoScroll: true,
	  checkbox: false,
	  selectFirst: true,
	  drag: true,
	  toggle: false,
	  nodeId: null,
	  selectedId: null,
	  selectedCode: null,
	  selectedIndex: null,
	  nodes: null,
	  displayCount: true,
	  shake: false,
	  text: {
	    trash: 'Êtes-vous sûr(e) de vouloir effacer cette catégorie?'
	  },
	  controller: {
	    _list: ['view', 'tree', 'settings'],
	    view: {
	      'bindingsReady': '_initList',
	      'addnode': '_addNode',
	      'organize': '_toggleOrganize',
	      'dragDisabled': '_onDisableDrag',
	      'element.scroll': '_elementDidScroll',
	      'listSet': 'render',
	      //'resize': '_onViewResize',
	      'container.resizeComplete': '_onViewResizeComplete'
	    },
	    tree: {
	      'tree.change': '_updateSortAndPath',
	      'tree.select': '_selectByElement',
	      'tree.dblclick': ['_selectByElement', '_setName'],
	      'tree.blur': ['trigger.unselect', 'unselect'],
	      'tree.expand': '_treeDidExpand',
	      'tree.collapse': '_treeDidCollapse'
	    }
	  },
	  toolbar: {
	    list: ['info', /*'action', 'more' */'alternate', 'status'],
	    info: {
	      container: 'head',
	      list: ['text.title']
	    },
	    action: {
	      container: 'head',
	      klss: 'half',
	      list: ['more']
	    },
	    more: {
	      container: 'head',
	      list: []
	    },
	    alternate: {
	      container: 'foot',
	      list: ['addnode', 'organize', 'trash', 'separator', 'infoedit', 'infoview']
	    },
	    status: {
	      container: 'foot',
	      list: ['text.status']
	    }
	  },
	  control: {
	    admin: {
	      disallowed: ['infoedit']
	    },
	    guest: {
	      disallowed: ['infoedit']
	    },
	    super: {
	      disallowed: []
	    },
	    disabled: [],
	    enabled: []
	  }
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Tree View Collapse
	 * @see https://github.com/cpojer/mootools-tree
	 */
	exports.default = new Class({

	  Implements: [Options, Class.Single],

	  options: {
	    animate: false,
	    fadeOpacity: 1,
	    className: 'collapse',
	    selector: 'a.expand',
	    listSelector: 'li',
	    childSelector: 'ul'
	  },

	  initialize: function initialize(element, options) {
	    this.setOptions(options);
	    element = this.element = document.id(element);

	    return this.check(element) || this.setup();
	  },

	  setup: function setup() {
	    var self = this;
	    this.handler = function (e) {
	      self.toggle(this, e);
	    };

	    this.mouseover = function () {
	      if (self.hasChildren(this)) {
	        this.getElement(self.options.selector).fade(1);
	      }
	    };

	    this.mouseout = function () {
	      if (self.hasChildren(this)) {
	        this.getElement(self.options.selector).fade(self.options.fadeOpacity);
	      }
	    };

	    this.prepare().attach();
	  },

	  attach: function attach() {
	    var element = this.element;
	    element.addEvent('click:relay(' + this.options.selector + ')', this.handler);
	    if (this.options.animate) {
	      element.addEvent('mouseover:relay(' + this.options.listSelector + ')', this.mouseover);
	      element.addEvent('mouseout:relay(' + this.options.listSelector + ')', this.mouseout);
	    }
	    return this;
	  },

	  detach: function detach() {
	    this.element.removeEvent('click:relay(' + this.options.selector + ')', this.handler).removeEvent('mouseover:relay(' + this.options.listSelector + ')', this.mouseover).removeEvent('mouseout:relay(' + this.options.listSelector + ')', this.mouseout);
	    return this;
	  },

	  prepare: function prepare() {
	    this.prepares = true;
	    this.element.getElements(this.options.listSelector).each(this.updateElement, this);
	    this.prepares = false;
	    return this;
	  },

	  updateElement: function updateElement(element) {
	    var child = element.getElement(this.options.childSelector);
	    var icon = element.getElement(this.options.selector);

	    if (!this.hasChildren(element)) {
	      if (!this.options.animate || this.prepares) {
	        icon.setStyle('opacity', 0);
	      } else {
	        icon.fade(0);
	      }
	      return;
	    }

	    if (this.options.animate) {
	      icon.fade(this.options.fadeOpacity);
	    } else {
	      icon.setStyle('opacity', this.options.fadeOpacity);
	    }

	    if (this.isCollapsed(child)) {
	      icon.removeClass('collapse');
	    } else {
	      icon.addClass('collapse');
	    }
	  },

	  hasChildren: function hasChildren(element) {
	    var child = element.getElement(this.options.childSelector);
	    return child && child.getChildren().length;
	  },

	  isCollapsed: function isCollapsed(element) {
	    if (!element) {
	      return;
	    }
	    return element.getStyle('display') == 'none';
	  },

	  toggle: function toggle(element, event) {
	    if (event) {
	      event.preventDefault();
	    }

	    if (!element.match(this.options.listSelector)) {
	      element = element.getParent(this.options.listSelector);
	    }

	    if (this.isCollapsed(element.getElement(this.options.childSelector))) {
	      this.expand(element);
	    } else {
	      this.collapse(element);
	    }

	    return this;
	  },

	  expand: function expand(element) {
	    element.getElement(this.options.childSelector).setStyle('display', 'block');
	    element.getElement(this.options.selector).addClass(this.options.className);
	    return this;
	  },

	  collapse: function collapse(element) {
	    if (!element.getElement(this.options.childSelector)) {
	      return;
	    }
	    element.getElement(this.options.childSelector).setStyle('display', 'none');
	    element.getElement(this.options.selector).removeClass(this.options.className);
	    return this;
	  }

	});

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Tree View Core
	 * @see https://github.com/cpojer/mootools-tree
	 */
	exports.default = new Class({

	  Implements: [Options, Events, Class.Binds, Class.Single],

	  options: {
	    //onChange: function() {},
	    //onSelect: function(element) {},
	    indicatorOffset: 0,
	    cloneOffset: {
	      x: 16,
	      y: 16
	    },
	    cloneOpacity: 0,
	    checkDrag: Function.from(true),
	    checkDrop: Function.from(true)
	  },

	  initialize: function initialize(element, options) {
	    this.setOptions(options);
	    element = this.element = document.id(element);
	    return this.check(element) || this.setup();
	  },

	  setup: function setup() {
	    this.indicator = new Element('div.treeIndicator');

	    var self = this;
	    this.handler = function (e) {
	      self.mousedown(this, e);
	    };

	    this.handlerDblclick = function (e) {
	      self.dblclick(this, e);
	    };

	    this.handlerMouseup = function (e) {
	      self.mouseup(this, e);
	    };

	    this.handlerClick = function (e) {
	      self.click(this, e);
	    };

	    this.handlerBlur = function (e) {
	      self.blur(this, e);
	    };

	    this.attach();
	  },

	  attach: function attach() {
	    this.element.addEvent('mouseup:relay(ul)', this.handlerMouseup);
	    this.element.addEvent('click:relay(li)', this.handlerClick);
	    this.element.addEvent('dblclick:relay(li)', this.handlerDblclick);
	    this.element.addEvent('click', this.handlerBlur);
	    return this;
	  },

	  detach: function detach() {
	    this.element.removeEvent('click:relay(li)', this.handlerClick);
	    return this;
	  },

	  enableDrag: function enableDrag() {
	    this.detach();
	    this.element.addEvent('mousedown:relay(li)', this.handler);
	  },

	  disableDrag: function disableDrag() {
	    this.element.removeEvent('mousedown:relay(li)', this.handler);
	    this.attach();
	  },

	  mousedown: function mousedown(element, event) {
	    event.preventDefault();

	    if (this.clone) {
	      this.clone.destroy();
	    }
	    this.padding = (this.element.getElement('li ul li') || this.element.getElement('li')).getLeft() - this.element.getLeft() + this.options.indicatorOffset;
	    if (this.collapse === undefined && typeof Collapse != 'undefined') {
	      this.collapse = this.element.getInstanceOf(Collapse);
	    }

	    if (!this.options.checkDrag.call(this, element)) {
	      return;
	    }
	    if (this.collapse && Slick.match(event.target, this.collapse.options.selector)) {
	      return;
	    }
	    if (this.current) {
	      this.current.removeClass('selected');
	    }

	    this.current = element.addClass('selected');
	    this.clone = element.clone().setStyles({
	      left: event.page.x + this.options.cloneOffset.x,
	      top: event.page.y + this.options.cloneOffset.y,
	      opacity: this.options.cloneOpacity
	    }).addClass('drag').inject(document.body);

	    this.clone.makeDraggable({
	      unDraggableTags: ['button', 'input', 'textarea', 'select', 'option'],
	      droppables: this.element.getElements('li span'),
	      onLeave: this.bound('hideIndicator'),
	      onDrag: this.bound('onDrag'),
	      onDrop: this.bound('onDrop')
	    }).start(event);
	  },

	  mouseup: function mouseup() {
	    if (this.clone) {
	      this.clone.destroy();
	    }
	  },

	  click: function click(element, ev) {
	    if (this.clone) {
	      this.clone.destroy();
	    }

	    if (ev.target.hasClass('label')) {
	      if (this.current) {
	        this.current.removeClass('selected');
	      }
	      this.current = element.addClass('selected');
	      this.fireEvent('select', [element]);
	    }

	    var target = ev.target;
	    var id = element.getAttribute('data-id');
	    if (id && target.hasClass('collapse')) {
	      this.fireEvent('collapse', id);
	    } else if (id && target.hasClass('expand')) {
	      this.fireEvent('expand', id);
	    }
	  },

	  dblclick: function dblclick(element, ev) {
	    if (this.clone) {
	      this.clone.destroy();
	    }
	    if (this.current) {
	      this.current.removeClass('selected');
	    }

	    this.current = element;

	    if (ev.target.hasClass('label')) {
	      this.fireEvent('dblclick', [element]);
	    }
	  },

	  blur: function blur(element, ev) {
	    if (element != ev.target) {
	      return;
	    }

	    if (this.current) {
	      this.current.removeClass('selected');
	    }

	    this.fireEvent('blur');
	  },

	  onDrag: function onDrag(el, event) {
	    clearTimeout(this.timer);
	    if (this.previous) {
	      this.previous.fade(1);
	    }
	    this.previous = null;

	    if (!event || !event.target) {
	      return;
	    }

	    var droppable = event.target.get('tag') == 'li' ? event.target : event.target.getParent('li');
	    if (!droppable || this.element == droppable || !this.element.contains(droppable)) {
	      return;
	    }

	    if (this.collapse) {
	      this.expandCollapsed(droppable);
	    }

	    var coords = droppable.getCoordinates();
	    var marginTop = droppable.getStyle('marginTop').toInt();
	    var center = coords.top + marginTop + coords.height / 2;
	    var isSubnode = event.page.x > coords.left + this.padding;
	    var position = {
	      x: coords.left + (isSubnode ? this.padding : 0),
	      y: coords.top
	    };

	    var drop;
	    if ([droppable, droppable.getParent('li')].contains(this.current)) {
	      this.drop = {};
	    } else if (event.page.y >= center) {
	      position.y += coords.height;
	      drop = {
	        target: droppable,
	        where: 'after',
	        isSubnode: isSubnode
	      };
	      if (!this.options.checkDrop.call(this, droppable, drop)) {
	        return;
	      }
	      this.setDropTarget(drop);
	    } else if (event.page.y < center) {
	      position.x = coords.left;
	      drop = {
	        target: droppable,
	        where: 'before'
	      };
	      if (!this.options.checkDrop.call(this, droppable, drop)) {
	        return;
	      }
	      this.setDropTarget(drop);
	    }

	    if (this.drop.target) {
	      this.showIndicator(position);
	    } else {
	      this.hideIndicator();
	    }
	  },

	  onDrop: function onDrop(el) {
	    el.destroy();
	    this.hideIndicator();

	    var drop = this.drop;
	    var current = this.current;
	    if (!drop || !drop.target) {
	      return;
	    }

	    var previous = current.getParent('li');
	    if (drop.isSubnode) {
	      current.inject(drop.target.getElement('ul') || new Element('ul').inject(drop.target), 'bottom');
	    } else {
	      current.inject(drop.target, drop.where || 'after');
	    }

	    if (this.collapse) {
	      if (previous) {
	        this.collapse.updateElement(previous);
	      }
	      this.collapse.updateElement(drop.target);
	    }

	    this.fireEvent('change');
	  },

	  setDropTarget: function setDropTarget(drop) {
	    this.drop = drop;
	  },

	  showIndicator: function showIndicator(position) {
	    this.indicator.setStyles({
	      zIndex: 1000,
	      left: position.x + this.options.indicatorOffset,
	      top: position.y
	    }).inject(document.body);
	  },

	  hideIndicator: function hideIndicator() {
	    this.indicator.dispose();
	  },

	  expandCollapsed: function expandCollapsed(element) {
	    var child = element.getElement('ul');
	    if (!child || !this.collapse.isCollapsed(child)) {
	      return;
	    }

	    element.set('tween', {
	      duration: 150
	    }).fade(0.5);
	    this.previous = element;
	    this.timer = function () {
	      element.fade(1);
	      this.collapse.expand(element);
	    }.delay(300, this);
	  },

	  serialize: function serialize(fn, base) {
	    if (!base) {
	      base = base || this.element.getElement('ul');
	    }
	    if (!fn) {
	      fn = function fn(el) {
	        return el.get('data-id');
	      };
	    }

	    var result = {};
	    base.getChildren('li').each(function (el) {
	      var child = el.getElement('ul');
	      result[fn(el)] = child ? this.serialize(fn, child) : true;
	    }, this);
	    return result;
	  }

	});

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('view-core-tree-collapse');

	exports.default = new Class({

	  /**
	   * Initialize collapse
	   * @return {void}
	   * @private
	   */
	  _setCollapse: function _setCollapse() {
	    _log.debug('_setCollapse');

	    var opts = this.options;

	    if (!opts.collapse) {
	      return;
	    }

	    var ids = opts.collapse;

	    for (var id in ids) {
	      if (ids.hasOwnProperty(id)) {
	        var value = ids[id];
	        var el = this.content.getElement('[data-id=' + id + ']');
	        if (value && el) {
	          this.collapse.toggle(el.getElement('a'));
	        }
	      }
	    }
	  },

	  /**
	   * When the tree expand
	   * @param  {string} id
	   * @return {void}
	   * @private
	   */
	  _treeDidExpand: function _treeDidExpand(id) {
	    this.fireEvent('settings', ['collapse.' + id, true]);

	    var collapse = this.options.collapse;
	    if (collapse) {
	      collapse[id] = true;
	    }
	  },

	  /**
	   * When the tree collapse
	   * @param  {string} id
	   * @return {void}
	   * @private
	   */
	  _treeDidCollapse: function _treeDidCollapse(id) {
	    this.fireEvent('settings', ['collapse.' + id, false]);

	    var collapse = this.options.collapse;
	    if (collapse) {
	      collapse[id] = false;
	    }
	  }

	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _minimalUtils = __webpack_require__(14);

	var _log = __debug('view-core-tree-count').defineLevel();

	exports.default = new Class({

	  /**
	   * Refresh Count
	   * @param {Object} count
	   */
	  refreshCount: function refreshCount(count) {
	    _log.debug('refreshCount', count);

	    if (count && this._validateCount(count)) {
	      this._updateCount(count);
	      this.fireEvent('countUpdated');
	    }
	  },

	  /**
	   * Validate count object
	   * @return {void}
	   * @private
	   */
	  _validateCount: function _validateCount(count) {
	    if ((typeof count === 'undefined' ? 'undefined' : _typeof(count)) !== 'object') {
	      return false;
	    }

	    var id;

	    for (var key in count) {
	      //check null key because some infos have null in nodes
	      //and the count return a count for nul
	      if (key !== 'null' && count.hasOwnProperty(key)) {
	        id = key;
	        break;
	      }
	    }

	    if (id.length > 20) {
	      return true;
	    } else {
	      return false;
	    }
	  },

	  /**
	   * Update Count elements
	   * @param {Object} count Count object
	   * @return {void}
	   * @private
	   */
	  _updateCount: function _updateCount(count) {
	    _log.debug('_updateCount', count);

	    var elements = this.content.getElements('.count');

	    for (var i = 0, len = elements.length; i < len; i++) {
	      var element = elements[i];
	      var elId = element.getParent().getParent().get('data-id');

	      var c = count[elId];
	      var info = _minimalUtils.array.findObjByKey(this.list, '_id', elId);
	      if (info) {
	        info._count = c;
	      }

	      element.set('html', c);
	    }
	  }

	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // base class


	// core modules


	// ui module


	// plugin modules

	//import Nodes from './nodes';


	var _view = __webpack_require__(2);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(53);

	var _component2 = _interopRequireDefault(_component);

	var _event = __webpack_require__(57);

	var _event2 = _interopRequireDefault(_event);

	var _key = __webpack_require__(58);

	var _key2 = _interopRequireDefault(_key);

	var _utils = __webpack_require__(59);

	var _utils2 = _interopRequireDefault(_utils);

	var _dialog = __webpack_require__(60);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _attachments = __webpack_require__(61);

	var _attachments2 = _interopRequireDefault(_attachments);

	var _control = __webpack_require__(62);

	var _control2 = _interopRequireDefault(_control);

	var _charges = __webpack_require__(70);

	var _charges2 = _interopRequireDefault(_charges);

	var _collapse = __webpack_require__(71);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _comments = __webpack_require__(72);

	var _comments2 = _interopRequireDefault(_comments);

	var _contacts = __webpack_require__(73);

	var _contacts2 = _interopRequireDefault(_contacts);

	var _currency = __webpack_require__(74);

	var _currency2 = _interopRequireDefault(_currency);

	var _date = __webpack_require__(76);

	var _date2 = _interopRequireDefault(_date);

	var _file = __webpack_require__(83);

	var _file2 = _interopRequireDefault(_file);

	var _hour = __webpack_require__(84);

	var _hour2 = _interopRequireDefault(_hour);

	var _hours = __webpack_require__(86);

	var _hours2 = _interopRequireDefault(_hours);

	var _iframe = __webpack_require__(87);

	var _iframe2 = _interopRequireDefault(_iframe);

	var _items = __webpack_require__(88);

	var _items2 = _interopRequireDefault(_items);

	var _list = __webpack_require__(89);

	var _list2 = _interopRequireDefault(_list);

	var _logs = __webpack_require__(90);

	var _logs2 = _interopRequireDefault(_logs);

	var _validator = __webpack_require__(91);

	var _validator2 = _interopRequireDefault(_validator);

	var _product = __webpack_require__(92);

	var _product2 = _interopRequireDefault(_product);

	var _reference = __webpack_require__(93);

	var _reference2 = _interopRequireDefault(_reference);

	var _related = __webpack_require__(94);

	var _related2 = _interopRequireDefault(_related);

	var _textarea = __webpack_require__(95);

	var _textarea2 = _interopRequireDefault(_textarea);

	var _unique = __webpack_require__(97);

	var _unique2 = _interopRequireDefault(_unique);

	var _url = __webpack_require__(98);

	var _url2 = _interopRequireDefault(_url);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-form').defineLevel();

	exports.default = new Class({

	  Extends: _view2.default,

	  Implements: [_component2.default, _event2.default, _key2.default, _utils2.default, _attachments2.default, _charges2.default, _collapse2.default, _comments2.default, _contacts2.default, _control2.default, _currency2.default, _date2.default, _file2.default, _hour2.default, _hours2.default, _iframe2.default, _items2.default, _list2.default, _logs2.default,
	  //Nodes,
	  _product2.default, _reference2.default, _related2.default, _textarea2.default, _unique2.default, _url2.default, _validator2.default],

	  options: {
	    clss: 'form',

	    scrollbar: true,
	    useTextAsLabel: false,

	    dateTime: {
	      format: 'lll'
	    },

	    readOnly: false,

	    collapsable: false,
	    isCollapsed: false,

	    confirmCancel: false,

	    title: {
	      key: 'name',
	      capitalize: true
	    },

	    defaultTemplate: {
	      components: ['info'],
	      info: {
	        type: 'fieldset',
	        //text: 'Info',
	        klss: 'inspector-head',
	        field: {
	          _list: ['name', 'description'],
	          name: {
	            text: 'Name',
	            name: 'name'
	          },
	          description: {
	            text: 'Description',
	            name: 'description'
	          }
	        }
	      }
	    },
	    controller: {
	      _list: ['view', 'form'],
	      view: {
	        /*not necessary because the form
	        call the method "new" of the list view*/
	        //'add': 'new',

	        set: ['_focusPrimaryKey', '_hideToolbarDialog'],
	        apply: '_viewDidApply',
	        mode: '_setClassMode',
	        cancel: 'cancel',
	        change: '_viewDidChange',
	        collapse: 'collapse',
	        uncollapse: 'uncollapse'
	      },
	      form: {
	        submit: ['_onSubmit']
	      }
	    }
	  },

	  /**
	   * Initialize View
	   * @return {void}
	   */
	  _initView: function _initView() {
	    //_log.debug('_initView', this.options);

	    //need to remove the options template to have a reference
	    if (this.options.template) {
	      delete this.options.template;
	    }

	    if (this.options.attachInfo) {
	      this.attachInfo = this.options.attachInfo;
	      delete this.options.attachInfo;
	    }

	    // for backward compatibility
	    this.doc = this.info = {};

	    this.parent();

	    this.isFirst = 0;

	    this.field = {};

	    var opts = this.options;

	    if (this._initCollapse) {
	      this._initCollapse();
	    }

	    this._initForm();

	    if (opts.doc) {
	      this.set('info', opts.doc);
	    }
	  },

	  /**
	   * [_onSubmit description]
	   * @return {void}
	   */
	  _onSubmit: function _onSubmit(e) {
	    //_log.debug('onSubmit', e);
	    e.preventDefault();
	  },

	  /**
	   * [_initForm description]
	   * @return {[type]} [description]
	   */
	  _initForm: function _initForm() {
	    _log.debug('_initForm');

	    this.form = new Element('form', {
	      method: 'post'
	    }).addEvent('submit', function (e) {
	      e.stop();
	    }).inject(this.content);

	    return this.form;
	  },

	  /**
	   * Initialize Detail View
	   * @param  {Object} doc   Document
	   * @param  {Object} model
	   * @return {void}
	   */
	  _setForm: function _setForm(doc, model, params) {
	    params = params || {};

	    //_log.debug('_setForm', doc, model, opts);
	    //_log.debug('_setForm', this.readonly);

	    var opts = this.options;

	    if (this.control && this.control.what) {
	      this.control.what.set('text', doc.type);
	    }

	    this.list = {};

	    this.mask = opts.mask;
	    this.type = this.options.type;

	    _log.debug('_initform');

	    if (!params.top) {
	      this.form.setStyles(this.form.getSize());
	    }

	    this.form.empty();

	    if (doc.status) {
	      this.form.set('data-status', doc.status);
	    }

	    //_log.debug('doc', doc);

	    if (!doc) {
	      _log.warn('missing info');
	      return;
	    }

	    //this.readonly = this.readonly || opts.readOnly;

	    this._initComponent(doc, model);
	    this._initStatus();
	    this._initMask();
	  },

	  /**
	   * Get Value for the given key
	   * @deprecated
	   *
	   * @param  {string} name defined in dot notation
	   * @param  {Object} info
	   * @return {Mixin} The Value of the given key
	   */
	  /*get: function(key) {
	    return this.getValueFromKey(key, this.doc);
	  },*/

	  /**
	   * Getter
	   *
	   * @param {string} prop
	   * @param {string} value
	   * @return {Object|void}
	   */
	  get: function get(prop, value) {
	    switch (prop) {
	      case 'key':
	        return this.getValueFromKey(value, this.doc);
	      case 'info':
	        return this.getInfo();
	      case 'unsaved':
	        return this.original;
	      case 'type':
	        return this.type;
	      case 'options':
	        return this.options;
	      default:
	        //default will replace the old method see up
	        return this.getValueFromKey(prop, this.doc);
	      /*case 'model':
	        return this.getSelectedModel();*/
	    }
	  },

	  /**
	   * [add description]
	   * @param {string} type
	   */
	  add: function add(type) {
	    _log.debug('add', type);

	    this._setInfo({
	      type: this.options.type
	    });
	  },

	  /**
	   * Setter
	   * @param {string} prop
	   * @param {string} value
	   * @return {Object|void}
	   */
	  set: function set(prop, value, opts) {
	    switch (prop) {
	      case 'mode':
	        return this._setMode(value);
	      case 'info':
	        return this.setInfo(value, opts);
	      case 'readonly':
	        return this._setReadonly(value);
	      default:
	        //default will replace the old method
	        return this.setInfo(prop, value);
	    }
	  },

	  /**
	   * [_setReadonly description]
	   * @description NOT USED
	   * @param {[type]} val [description]
	   */
	  _setReadonly: function _setReadonly(val) {
	    _log.debug('_setReadonly', val);

	    if (val) {
	      this.readonly = true;
	    } else {
	      this.readonly = false;
	    }
	  },

	  /**
	   * Set Detail view with the given information and model
	   * @param {Object} doc   [description]
	   * @param {Object} opts [description]
	   */
	  setInfo: function setInfo(doc, opts) {
	    _log.debug('setInfo', doc, opts);

	    opts = opts || {};

	    var mask = opts.mask || opts.template;

	    if (this.mode === 'edit') {
	      return;
	    }

	    if (!doc && !mask) {
	      this.clear();
	      return;
	    }

	    if (doc._id === 'new') {
	      delete doc._id;
	      this.setMode('edit');
	    }

	    this.original = doc;
	    this.originalMask = mask;

	    //_log.debug('set');

	    this.destroyCkeInstance();

	    //In test for real time editing
	    if (this.doc) {
	      this.fireEvent('unset', [this.doc._id, this]);
	    }

	    if (this.control && this.control.add && doc && doc._id) {
	      this.control.add.setState(null);
	    }

	    this.readonly = undefined;

	    if (opts.readonly !== undefined) {
	      this.readonly = opts.readonly;
	    }

	    this._setInfo(doc, mask);

	    var id = null;
	    if (doc) {
	      id = doc._id;
	    }
	    this.fireEvent('set', [id, this]);
	    this.fireEvent('infoSet', doc);
	    this.fireEvent('settings', ['infoId', id]);

	    if (!doc._id) {
	      if (this.control.apply) {
	        this.control.apply.setState('active');
	      }
	      if (this.control.cancel) {
	        this.control.cancel.setState('active');
	      }
	      if (this.toolbar.dialog) {
	        this.toolbar.dialog.show();
	      }
	    }

	    return this;
	  },

	  /**
	   * Set Detail view with the given information and model
	   * @param {Object} doc   [description]
	   * @param {Object} mask [description]
	   * @param {Object} opts [description]
	   */
	  _setInfo: function _setInfo(doc, mask, opts) {
	    //_log.debug('_set', doc, mask);

	    doc = this.patch(doc);

	    if (this.form) {
	      this.form.setStyle('display', 'block');
	    }

	    this.datePickers = this.datePickers || [];
	    this.datePickers.each(function (datePicker) {
	      datePicker.destroy();
	    });

	    var title = doc[this.options.title.key] || '';

	    if (this.control && this.control.title) {
	      if (this.options.title.capitalize) {
	        title = title.charAt(0).toUpperCase() + title.slice(1);
	      }
	      this.control.title.set('text', title);
	    }

	    /*if (this.options.container)
	      this.options.container.focus();*/

	    this.doc = null;
	    this.doc = Object.clone(doc);
	    this.relatedListEvents = false;

	    this._setForm(this.doc, mask, opts);

	    if (this.container) {
	      this.container.fireEvent('resize');
	    }
	  },

	  /**
	   * [_setMode description]
	   * @param {[type]} mode [description]
	   */
	  _setMode: function _setMode(mode) {
	    //_log.debug('setMode', mode);

	    if (mode === 'read') {
	      this.readonly = true;
	      this._setInfo(this.doc, this.originalMask);
	    } else if (mode === 'edit') {
	      this.setMode(mode);
	    } else {
	      this.setMode(mode);
	    }
	  },

	  /**
	   * patch
	   * @param  {Object} info
	   * @return {Object}
	   */
	  patch: function patch(info) {
	    _log.debug('patch', info);

	    if (!info || !info.type) {
	      _log.warn('missing info or type');
	      return info;
	    }

	    var process = window.datatype[info.type + '/_process'];
	    if (process && process[info.kind] && process[info.kind].patch) {
	      info = process[info.kind].patch(info);
	    } else if (process && process.patch) {
	      info = process.patch(info);
	    }

	    return info;
	  },

	  /**
	   * [update description]
	   * @param  {Object} info [description]
	   * @return {void}
	   */
	  update: function update(info) {
	    //_log.debug('update', info);

	    if (!info || !this.doc) {
	      return;
	    }

	    if (info._id === this.doc._id) {

	      //remove edit mode when update the current info
	      //because it's not possible to setInfo in edit mode
	      if (info._rev === this.doc._rev) {
	        this.mode = undefined;
	      }

	      this.setInfo(info, {
	        top: false
	      });
	    } else if (!this.doc._rev && this.doc.type === info.type) {
	      this.setInfo(info, {
	        top: false
	      });
	    }
	  },

	  /**
	   * Set view accorrding the given mode
	   * @param {string} mode edit or not
	   */
	  setMode: function setMode(mode) {
	    this.fireEvent('mode', [this, mode]);

	    this.mode = mode;
	  },

	  /**
	   * remove info
	   * @param  {Object} info
	   * @return {void}
	   */
	  remove: function remove(info) {
	    if (this.doc && info._id === this.doc._id) {
	      this.form.empty();
	    }
	  },

	  /**
	   * Actually hide the form of the view
	   * @return {Object} The instance of the Class
	   */
	  clear: function clear(doc) {
	    //_log.debug('clear');

	    if ((typeof doc === 'undefined' ? 'undefined' : _typeof(doc)) === 'object' && this.doc && doc._id && doc._id !== this.doc._id) {
	      return;
	    }

	    if (this.mode === 'edit') {
	      return;
	    }

	    if (this.form) {
	      this.form.setStyle('display', 'none');
	    }

	    if (this.control && this.control.add) {
	      this.control.add.setState(null);
	    }

	    if (this.control && this.control.title) {
	      this.control.title.set('text', '');
	    }

	    this.doc = null;

	    this.fireEvent('clean');
	    this.fireEvent('settings', ['infoId', null]);

	    /*this.destroyCKEditor();
	    if (this.form) this.form.empty();*/
	    return this;
	  },

	  /**
	   * [getType description]
	   * @return {[type]} [description]
	   */
	  getType: function getType() {
	    return this.type;
	  },

	  /**
	   * [getInfo description]
	   * @return {[type]} [description]
	   */
	  getInfo: function getInfo() {
	    return this.doc || null;
	  },

	  /**
	   * apply
	   * @return {void}
	   */
	  apply: function apply() {
	    _log.debug('apply');
	    this._viewDidApply();
	    this.fireEvent('apply', this);
	  },

	  /**
	   * [cancel description]
	   * @return {[type]} [description]
	   */
	  cancel: function cancel() {
	    //_log.debug('cancel', this.mode);
	    var self = this;
	    var opts = this.options;

	    if (!opts.container) {
	      this._cancel();
	      return;
	    }

	    if (opts.confirmCancel) {
	      new _dialog2.default({
	        title: 'Confirm',
	        message: 'You will lose all changes done in this document.'
	      }).addEvents({
	        ok: function ok() {
	          self._cancel();
	        }
	      });
	    } else {
	      this._cancel();
	    }
	  },

	  /**
	   * [_cancel description]
	   * @return {[type]} [description]
	   */
	  _cancel: function _cancel() {
	    //_log.debug('_cancel');

	    this.setMode(null);

	    if (this.toolbar.dialog) {
	      this.toolbar.dialog.hide();
	    }

	    if (this.control.add) {
	      this.control.add.setState(null);
	    }

	    if (this.original && !this.original._id) {
	      this.clear();
	    } else {
	      this._setInfo(this.original, this.originalMask);
	    }

	    this.fireEvent('canceled');
	  },

	  /**
	   * [blur description]
	   * @return {[type]} [description]
	   */
	  blur: function blur() {
	    //_log.debug('blur', this.ckeInstances);

	    //this.destroyCkeInstance();
	  },

	  /**
	   * If do not receive a first param
	   * return if the view is read only
	   * if the first param is a object
	   * check if the view and the field are read only
	   * the field overwrite the view
	   *
	   * @param  {Object} field object with key read
	   * @return {boolean}
	   */
	  isReadOnly: function isReadOnly(field) {
	    //_log.debug('isReadOnly', field);
	    if (field) {
	      var read = false;

	      if (this.readonly !== undefined) {
	        read = this.readonly;
	      }
	      if (field.read !== undefined) {
	        read = field.read;
	      }
	      return read;
	    } else {
	      return this.readonly;
	    }
	  },

	  /**
	   * [render description]
	   * @param  {[type]} doc [description]
	   * @return {[type]}     [description]
	   */
	  render: function render() {
	    //_log.debug('render', this.doc);

	    _log.fatal('render method using deprecated couch. form:1249');

	    if (!this.original || !this.original._id) {
	      return;
	    }

	    var info = couch.doc[this.original._id];
	    this._setInfo(info);
	  }

	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _moment = __webpack_require__(54);

	var _moment2 = _interopRequireDefault(_moment);

	var _iMask = __webpack_require__(55);

	var _iMask2 = _interopRequireDefault(_iMask);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//var settings = require('core/module/settings/settings');

	var _log = __debug('view:form-reference');

	exports.default = new Class({

	  /**
	   * Initialize form model
	   * @return {void}
	   */
	  _initComponent: function _initComponent(doc, template) {
	    _log.debug('_initTemplate', doc, template);

	    if (template) {
	      this._processComponents(template.components, template, template);
	      return;
	    }

	    var tmpl = this.templateFunction(doc);
	    var toolbar = this.toolbarFunction(doc);

	    this._processToolbar(toolbar);
	    this._processComponents(tmpl.components, tmpl, tmpl);

	    this._initLegends();
	  },

	  /**
	   * [_processComponents description]
	   * @param  {[type]} comps [description]
	   * @param  {[type]} spec  [description]
	   * @param  {[type]} defs  [description]
	   * @return {[type]}       [description]
	   */
	  _processComponents: function _processComponents(comps, spec, defs) {
	    _log.debug('_processComponents', comps, spec, defs);

	    if (this.readonly === undefined && spec && spec._mode === 'readonly' || this.readonly || defs._mode === 'readonly') {
	      this.readonly = true;
	    } else {
	      this.readonly = false;
	    }

	    //_log.debug('readonly', this.readonly);

	    for (var i = 0; i < comps.length; i++) {
	      var component = comps[i];

	      //_log.debug(component);
	      var group = spec[component] || defs[component];

	      if (!group) {
	        continue;
	      }

	      if (group.type === 'fieldset') {
	        this._initFieldset(group, this.form);
	      }

	      if (group.type === 'client') {
	        this._initClient(group, this.form);
	      }
	    }

	    this.focuskey = defs.focus;
	  },

	  /**
	   * Initialize form fieldset
	   * @return {void}
	   */
	  _initFieldset: function _initFieldset(fieldset, form) {
	    //_log.debug('_initFieldset', fieldset, form);
	    var legend = null;

	    var element = new Element('div', {
	      'class': 'form-fieldset'

	    }).inject(form);

	    if (fieldset.name) {
	      element.addClass('fieldset-' + fieldset.name);
	    }

	    if (fieldset.klss) {
	      element.addClass(fieldset.klss);
	    }

	    if (fieldset.state === 'closed') {
	      element.addClass('closed');
	    }

	    if (fieldset.text) {
	      legend = new Element('span', {
	        html: ' ' + fieldset.text,
	        'class': 'legend',
	        'data-name': fieldset.text
	      }).inject(element);

	      new Element('span', {
	        'class': 'icon-font mdi_navigation_chevron_right'
	      }).inject(legend, 'top');
	    }

	    if (fieldset.buttons) {
	      // _log.debug(el.button);
	      this._initButtons(fieldset.buttons, this.doc, legend);
	    }

	    if (legend) {
	      element.store('legend', legend);
	    }

	    if (typeOf(fieldset.menu) === 'object') {
	      this._initFieldsetMenu(fieldset.menu, legend);
	    } else if (typeOf(fieldset.menu) === 'array') {
	      for (var i = 0; i < fieldset.menu.length; i++) {
	        var menu = fieldset.menu[i];
	        this._initFieldsetMenu(menu, legend);
	      }
	    }

	    if (fieldset.field) {
	      this._initObjectField(fieldset.field, element);
	    } else if (fieldset.fields) {
	      this._initFields(fieldset.fields, element);
	    }
	  },

	  /**
	   * Initialize legends for groups of fields
	   * @return {void}
	   */
	  _initLegends: function _initLegends() {
	    _log.debug('_initLegends');

	    var legends = this.form.getElements('.legend');

	    if (!legends) {
	      return;
	    }

	    for (var i = 0, len = legends.length; i < len; i++) {
	      var legend = legends[i];

	      if (legend) {
	        this._initLegend(legend);
	      }
	    }

	    this._initCollapse();
	  },

	  /**
	   * Initialize legend for a group of fields
	   * @return {void}
	   */
	  _initLegend: function _initLegend(legend) {
	    _log.debug('_initLegend', legend);

	    var self = this;
	    var opts = this.options;

	    var name = legend.get('data-name').toLowerCase();
	    var fieldset = legend.getParent();

	    //_log.debug('state',  name, state);

	    /*if (opts.collapsable) {
	      var state = settings.get('view.' + opts.name + '.fieldset.' + name);
	       if (state === 'closed') {
	        fieldset.addClass('closed');
	      }
	       legend.addEvent('click', function() {
	        if (fieldset.hasClass('closed')) {
	          self.fireEvent('settings', ['fieldset.' + name, 'open']);
	          fieldset.removeClass('closed');
	        } else {
	          fieldset.addClass('closed');
	          self.fireEvent('settings', ['fieldset.' + name, 'closed']);
	        }
	         self.container.fireEvent('resize');
	      });
	    } else {*/
	    if (this.isCollapsed) {
	      fieldset.addClass('closed');
	    }
	    //}
	  },

	  /**
	   * Initialize form fieldset menu if exists
	   * @return {void}
	   */
	  _initFieldsetMenu: function _initFieldsetMenu(menu, legend) {
	    var self = this;

	    var addBtn = new _button2.default(menu).inject(legend);

	    addBtn.addEvent(menu.emit, function () {
	      //_log.debug(fieldset.menu);
	      self.fireEvent(menu.emit, self);
	    });
	  },

	  /**
	   * [_initFields description]
	   * @param  {[type]} keys    [description]
	   * @param  {[type]} element [description]
	   * @return {[type]}         [description]
	   */
	  _initFields: function _initFields(keys, element) {
	    //_log.debug('_initFields', keys, element);
	    var info = this.doc;

	    var group = this._initGroup(element);

	    for (var i = 0, len = keys.length; i < len; i++) {
	      var key = keys[i];

	      this._initField(key, info, group);

	      if (key.type === 'button' && key.name === 'deleteNode') {
	        this._initDeleteButton(key, info, group);
	      }
	    }
	  },

	  /**
	   * Instanciate group of field
	   * @param  {Element} element
	   * @return {Element} the group element
	   */
	  _initGroup: function _initGroup(element) {
	    //_log.debug('_initGroup', element);
	    var group = new Element('div', {
	      html: element.legend,
	      'class': 'group'
	    }).inject(element);

	    return group;
	  },

	  /**
	   * Process field object
	   * @param  {[type]} object   [description]
	   * @param  {[type]} element [description]
	   * @return {[type]}         [description]
	   */
	  _initObjectField: function _initObjectField(object, element) {
	    // _log.debug('_initObjectField', object, element);
	    var info = this.doc;
	    var list = object._list || [];

	    var group = this._initGroup(element);

	    for (var i = 0; i < list.length; i++) {
	      var name = list[i];
	      var key = object[name];

	      this._initField(key, info, group);
	    }
	  },

	  /**
	   * Initialize Field for the given key according the data and the model
	   * @param  {string} key   [description]
	   * @param  {[type]} info  [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initField: function _initField(key, info, group) {
	    _log.debug('_initField', key, info, group);

	    key = key || {};

	    var type = key.type;
	    var method;

	    type = type || 'input';

	    if (typeof type === 'string') {
	      method = type.capitalize();
	    }

	    //_log.debug('initField', method, this['_init'+method]);

	    if (this['_init' + method]) {
	      this['_init' + method](key, info, group);
	    } else {
	      this._initInput(key, info, group);
	    }
	  },

	  /**
	   * Initialize input
	   * @param  {key} key [description]
	   * @param  {Object} info
	   * @param  {Element} group
	   * @return {void}
	   */
	  _initInput: function _initInput(key, info, group) {
	    var self = this;

	    key = key || {};
	    key.name = key.name || '';

	    //var n = key.name.split(/\./);

	    var value = this.getValueFromKey(key.name, info);

	    if (!value && key.default) {
	      value = key.default;
	      this.updateDocKey(key.name, key.default);
	    }

	    if (typeOf(value) === 'array' || typeOf(value) === 'object') {
	      value = JSON.stringify(value);
	      value = value.replace(/[&\/\\"{}\[\]]/g, '');
	      value = value.replace(/[,]/g, ', ');
	      value = value.replace(/[:]/g, ': ');
	    }

	    var _name = key.name.replace('.', '-');

	    var type = key.type || 'text';

	    var read = this.isReadOnly(key);

	    var input = new _field2.default({
	      'klass': 'field-' + _name,
	      type: type,
	      name: key.name,
	      text: key.text,
	      value: value,
	      read: read,
	      error: true,
	      useTextAsLabel: this.options.useTextAsLabel
	    }).inject(group);

	    if (key.kind) {
	      input.addClass('kind-' + key.kind);
	    }

	    this.field[key.name] = input;

	    if (key.klss) {
	      input.addClass(key.klss);
	    }

	    input.input.addEvents({
	      keyup: function keyup(ev) {
	        self._onInputKeyUp(input, ev);
	      },
	      blur: function blur() {
	        self._onInputBlur(input);
	      }
	    });
	  },

	  /**
	   * [_initMask description]
	   * @return {[type]} [description]
	   */
	  _initMask: function _initMask() {
	    this.mask = new _iMask2.default({
	      scope: this.form
	    });
	  },

	  /**
	   * Initialize status to display creatiion and modification information
	   * @return {void}
	   */
	  _initStatus: function _initStatus() {
	    var doc = this.doc;

	    var created = (0, _moment2.default)(doc.created_date).format('lll');
	    var modified = (0, _moment2.default)(doc.modified_date).format('lll');

	    var status = doc.created_by + ' ' + created;

	    if (doc.modified_by) {
	      status = modified + ' by ' + doc.modified_by;
	    }

	    this.setStatus(status);
	  },

	  /**
	   * [_processToolbar description]
	   * @param  {[type]} toolbar [description]
	   * @return {[type]}         [description]
	   */
	  _processToolbar: function _processToolbar(toolbar) {
	    //_log.debug('_processToolbar', toolbar);

	    if (!toolbar || !toolbar.opts) {
	      return;
	    }

	    var disableds = toolbar.opts.disabled;
	    var enableds = toolbar.opts.enabled;

	    //_log.debug('disableds', disableds);
	    //_log.debug('enableds', enableds);

	    for (var i = 0; i < disableds.length; i++) {
	      var c = disableds[i];
	      if (this.control[c]) {
	        this.control[c].setState('disabled');
	      }
	    }

	    for (var i = 0; i < enableds.length; i++) {
	      var c = enableds[i];
	      if (this.control[c]) {
	        this.control[c].setState('enabled');
	      }
	    }
	  },

	  /**
	   * Init Delete Button for group
	   * @param  {Element} button
	   * @param  {Data} doc    [description]
	   * @param  {[type]} group  [description]
	   * @return {[type]}        [description]
	   */
	  _initDeleteButton: function _initDeleteButton(button, doc, group) {
	    var self = this;

	    var clss = 'ui-delete';
	    var text = button.text || button.name;

	    var btn = new Button({
	      clss: clss,
	      type: 'text',
	      name: button.name,
	      text: button.text,
	      emit: button.name
	    }).inject(group);

	    btn.addEvent(button.name, function () {
	      _log.debug('emit', button.name);
	      self.fireEvent(button.name, doc._id);
	    });
	  }

	});

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["iMask"] = __webpack_require__(56);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 56 */
/***/ function(module, exports) {

	/* ****************************************************************************************
	 * 
	 * This script is now maintained by at https://sourceforge.net/projects/imask/
	 * 
	 *****************************************************************************************/

	/* ************************************************************************************* *\
	 * The MIT License
	 * Copyright (c) 2007 Fabio Zendhi Nagao - http://zend.lojcomm.com.br
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
	 * software and associated documentation files (the "Software"), to deal in the Software
	 * without restriction, including without limitation the rights to use, copy, modify,
	 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to the following
	 * conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in all copies
	 * or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
	 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
	 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 * 
	\* ************************************************************************************* */


	//since $chk is not supported in mootools 1.3+
	var $chk = function(obj){
		return !!(obj || obj === 0);
	};

	var iMask = new Class({
		
		Implements: [Events, Options],

		options: {
			targetClass: ".mask",
			maskEmptyChr: ' ',

			validNumbers: "1234567890",
			validAlphas: "abcdefghijklmnopqrstuvwxyz",
			validAlphaNums: "abcdefghijklmnopqrstuvwxyz1234567890",

			onFocus: function(){},
			onBlur: function(){},
			onValid: function(){},
			onInvalid: function(){},
			onKeyDown: function(){}
		},

		initialize: function(options) {
			this.setOptions(options);

			var scope = this.options.scope || document.body;

			var fields = scope.getElements(this.options.targetClass);

			fields.each(function(obj, i) {
				obj.options = JSON.decode(obj.alt);
				if(obj.options.type == "number") obj.setStyle("text-align", "right");
				obj.addEvent("mousedown", function(event) {
					event.stop();
				});
				obj.addEvent("mouseup", function(event) {
					event.stop();
					this._onMouseUp(event, obj);
				}.bind(this));
				obj.addEvent("click", function(event) {
					event.stop();
				});
				obj.addEvent("keydown", function(event) {
					this._onKeyDown(event, obj);
					this.fireEvent("onKeyDown", obj, 20);
				}.bind(this));
				obj.addEvent("keypress", function(event) {
					this._onKeyPress(event, obj);
				}.bind(this));
				obj.addEvent("focus", function(event) {
					event.stop();
					this._onFocus(event, obj);
					this.fireEvent("onFocus", obj, 20);
				}.bind(this));
				obj.addEvent("blur", function(event) {
					event.stop();
					this._onBlur(event, obj);
					this.fireEvent("onBlur", obj, 20);
				}.bind(this));
			}.bind(this));
		},

		_onMouseUp: function(event, obj) {
			if(obj.options.type == "fixed") {
				var p = this._getSelectionStart(obj);
				this._setSelection(obj, p, (p + 1));
			} else if(obj.options.type == "number") {
				this._setEnd(obj);
			}
		},

		_onKeyDown: function(event, obj) {
			/*if(event.code == 13) { // enter
				obj.blur();
				this._submitForm(obj);
			} else */if(!(event.code == 9)) {
				event.stop();
				if(obj.options.type == "fixed") {
					var p = this._getSelectionStart(obj);
					switch(event.code) {
						case 8: // Backspace
							this._updSelection(obj, p, this.options.maskEmptyChr);
							this._selectPrevious(obj);
							break;
						case 36: // Home
							this._selectFirst(obj);
							break;
						case 35: // End
							this._selectLast(obj);
							break;
						case 37: // Left
						case 38: // Up
							this._selectPrevious(obj);
							break;
						case 39: // Right
						case 40: // Down
							this._selectNext(obj);
							break;
						case 46: // Delete
							this._updSelection(obj, p, this.options.maskEmptyChr);
							this._selectNext(obj);
							break;
						default:
							var chr = this._chrFromEvent(event);
							if(this._isViableInput(obj, p, chr)) {
								if(event.shift)
									{this._updSelection(obj, p, chr.toUpperCase());}
								else
									{this._updSelection(obj, p, chr);}
								this.fireEvent("onValid", [event, obj], 20);
								this._selectNext(obj);
							} else {
								this.fireEvent("onInvalid", [event, obj], 20);
							}
							break;
					}
				} else if(obj.options.type == "number") {
					switch(event.code) {
						case 8: // backspace
						case 46: // delete
							this._popNumber(obj);
							break;
						default:
							var chr = this._chrFromEvent(event);
							if(this.options.validNumbers.indexOf(chr) >= 0) {
								this._pushNumber(obj, chr);
								this.fireEvent("onValid", [event, obj], 20);
							} else {
								this.fireEvent("onInvalid", [event, obj], 20);
							}
							break;
					}
				}
			}
		},

		_onKeyPress: function(event, obj) {
			if(
				   !(event.code == 9) // tab
				&& !(event.shift && event.code == 9) // shift + tab
				&& !(event.code == 13) // enter
				&& !(event.ctrl && event.code == 67) // ctrl + c
				&& !(event.ctrl && event.code == 86) // ctrl + v
				&& !(event.ctrl && event.code == 88) // ctrl + x
			) {
				event.stop();
			}
		},

		_onFocus: function(event, obj) {
			obj.value = this._wearMask(obj, obj.value);
			if(obj.options.type == "fixed")
				{this._selectFirst.delay(20, this, obj);}
			else
				{this._setEnd.delay(20, this, obj);}
		},

		_onBlur: function(event, obj) {
			if(obj.options.stripMask)
				obj.value = this._stripMask(obj);
		},

		_selectAll: function(obj) {
			this._setSelection(obj, 0, obj.value.length);
		},

		_selectFirst: function(obj) {
			for(var i = 0, len = obj.options.mask.length; i < len; i++) {
				if(this._isInputPosition(obj, i)) {
					this._setSelection(obj, i, (i + 1));
					return;
				}
			}
		},

		_selectLast: function(obj) {
			for(var i = (obj.options.mask.length - 1); i >= 0; i--) {
				if(this._isInputPosition(obj, i)) {
					this._setSelection(obj, i, (i + 1));
					return;
				}
			}
		},

		_selectPrevious: function(obj, p) {
			if(!$chk(p))p = this._getSelectionStart(obj);
			if(p <= 0) {
				this._selectFirst(obj);
			} else {
				if(this._isInputPosition(obj, (p - 1))) {
					this._setSelection(obj, (p - 1), p);
				} else {
					this._selectPrevious(obj, (p - 1));
				}
			}
		},

		_selectNext: function(obj, p) {
			if(!$chk(p))p = this._getSelectionEnd(obj);
			if(p >= obj.options.mask.length) {
				this._selectLast(obj);
			} else {
				if(this._isInputPosition(obj, p)) {
					this._setSelection(obj, p, (p + 1));
				} else {
					this._selectNext(obj, (p + 1));
				}
			}
		},

		_setSelection: function(obj, a, b) {
			if(obj.setSelectionRange) {
				obj.focus();
				obj.setSelectionRange(a, b);
			} else if(obj.createTextRange) {
				var r = obj.createTextRange();
				r.collapse();
				r.moveStart("character", a);
				r.moveEnd("character", (b - a));
				r.select();
			}
		},

		_updSelection: function(obj, p, chr) {
			var value = obj.value;
			var output = "";
			output += value.substring(0, p);
			output += chr;
			output += value.substr(p + 1);
			obj.value = output;
			this._setSelection(obj, p, (p + 1));
		},

	 	_setEnd: function(obj) {
			var len = obj.value.length;
			this._setSelection(obj, len, len);
		},

		_getSelectionStart: function(obj) {
			var p = 0;
			if(obj.selectionStart) {
				if(typeOf(obj.selectionStart) == "number") p = obj.selectionStart;
			} else if(document.selection) {
				var r = document.selection.createRange().duplicate();
				r.moveEnd("character", obj.value.length);
				p = obj.value.lastIndexOf(r.text);
				if(r.text == "") p = obj.value.length;
			}
			return p;
		},

		_getSelectionEnd: function(obj) {
			var p = 0;
			if(obj.selectionEnd) {
				if(typeOf(obj.selectionEnd) == "number")
					{p = obj.selectionEnd;}
			} else if(document.selection) {
				var r = document.selection.createRange().duplicate();
				r.moveStart("character", -obj.value.length);
				p = r.text.length;
			}
			return p;
		},

		_isInputPosition: function(obj, p) {
			var mask = obj.options.mask.toLowerCase();
			var chr = mask.charAt(p);
			if("9ax".indexOf(chr) >= 0)
				return true;
			return false;
		},

		_isViableInput: function(obj, p, chr) {
			var mask = obj.options.mask.toLowerCase();
			var chMask = mask.charAt(p);
			switch(chMask) {
				case '9':
					if(this.options.validNumbers.indexOf(chr) >= 0) return true;
					break;
				case 'a':
					if(this.options.validAlphas.indexOf(chr) >= 0) return true;
					break;
				case 'x':
					if(this.options.validAlphaNums.indexOf(chr) >= 0) return true;
					break;
				default:
					return false;
					break;
			}
		},

		_wearMask: function(obj, str) {
	            if(!obj.options.mask){
	                //if no mask is specified, just display the current value
	                return obj.value;
	            }else{
			var mask = obj.options.mask.toLowerCase();
			var output = "";
			for(var i = 0, u = 0, len = mask.length; i < len; i++) {
				switch(mask.charAt(i)) {
					case '9':
						if(this.options.validNumbers.indexOf(str.charAt(u).toLowerCase()) >= 0) {
							if(str.charAt(u) == "") {output += this.options.maskEmptyChr;}
							else {output += str.charAt(u++);}
						} else {
							output += this.options.maskEmptyChr;
						}
						break;
					case 'a':
						if(this.options.validAlphas.indexOf(str.charAt(u).toLowerCase()) >= 0) {
							if(str.charAt(u) == "") {output += this.options.maskEmptyChr;}
							else {output += str.charAt(u++);}
						} else {
							output += this.options.maskEmptyChr;
						}
						break;
					case 'x':
						if(this.options.validAlphaNums.indexOf(str.charAt(u).toLowerCase()) >= 0) {
							if(str.charAt(u) == "") {output += this.options.maskEmptyChr;}
							else {output += str.charAt(u++);}
						} else {
							output += this.options.maskEmptyChr;
						}
						break;
					default:
						output += mask.charAt(i);
						if(str.charAt(u) == mask.charAt(i)){
							u++;
						}
						
						break;
				}
			}
			return output;
	            }
	        },

		_stripMask: function(obj) {
			var value = obj.value;
			if("" == value) return "";
			var output = "";
			if(obj.options.type == "fixed") {
				for(var i = 0, len = value.length; i < len; i++) {
					if((value.charAt(i) != this.options.maskEmptyChr) && (this._isInputPosition(obj, i)))
						{output += value.charAt(i);}
				}
			} else if(obj.options.type == "number") {
				for(var i = 0, len = value.length; i < len; i++) {
					if(this.options.validNumbers.indexOf(value.charAt(i)) >= 0)
						{output += value.charAt(i);}
				}
			}
			return output;
		},

		_chrFromEvent: function(event) {
			var chr = '';
			switch(event.code) {
				case 48: case 96: // 0 and numpad 0
					chr = '0';
					break;
				case 49: case 97: // 1 and numpad 1
					chr = '1';
					break;
				case 50: case 98: // 2 and numpad 2
					chr = '2';
					break;
				case 51: case 99: // 3 and numpad 3
					chr = '3';
					break;
				case 52: case 100: // 4 and numpad 4
					chr = '4';
					break;
				case 53: case 101: // 5 and numpad 5
					chr = '5';
					break;
				case 54: case 102: // 6 and numpad 6
					chr = '6';
					break;
				case 55: case 103: // 7 and numpad 7
					chr = '7';
					break;
				case 56: case 104: // 8 and numpad 8
					chr = '8';
					break;
				case 57: case 105: // 9 and numpad 9
					chr = '9';
					break;
				default:
					chr = event.key; // key pressed as a lowercase string
					break;
			}
			return chr;
		},

		_pushNumber: function(obj, chr) {
			obj.value = obj.value + chr;
			this._formatNumber(obj);
		},

		_popNumber: function(obj) {
			obj.value = obj.value.substring(0, (obj.value.length - 1));
			this._formatNumber(obj);
		},

		_formatNumber: function(obj) {
			// stripLeadingZeros
			var str2 = this._stripMask(obj);
			var str1 = "";
			for(var i = 0, len = str2.length; i < len; i++) {
				if('0' != str2.charAt(i)) {
					str1 = str2.substr(i);
					break;
				}
			}

			// wearLeadingZeros
			str2 = str1;
			str1 = "";
			for(var len = str2.length, i = obj.options.decDigits; len <= i; len++) {
				str1 += "0";
			}
			str1 += str2;

			// decimalSymbol
			str2 = str1.substr(str1.length - obj.options.decDigits)
			str1 = str1.substring(0, (str1.length - obj.options.decDigits))

			// groupSymbols
			var re = new RegExp("(\\d+)(\\d{"+ obj.options.groupDigits +"})");
			while(re.test(str1)) {
				str1 = str1.replace(re, "$1"+ obj.options.groupSymbol +"$2");
			}

			obj.value = str1 + obj.options.decSymbol + str2;
		},

		_getObjForm: function(obj) {
			var parent = obj.parentNode;
	                if(parent){
	                    if(parent.nodeName == "FORM") {
	                            return parent;
	                    } else {
	                            return this._getObjForm(parent);
	                    }
	                }else{
	                    return null;
	                }
		},

		_submitForm: function(obj) {
			var form = this._getObjForm(obj);
	                if(form){
	                    form.submit();
	                }
		}
	});



	/*** EXPORTS FROM exports-loader ***/
	module.exports = iMask;

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _log = __debug('view:form-utils');

	exports.default = new Class({

	  /**
	   * when view apply
	   * remove mode and hide dialog toolbar
	   * @return {void}
	   */
	  _viewDidApply: function _viewDidApply() {
	    _log.debug('_viewDidApply');

	    if (this.toolbar.dialog) {
	      this.toolbar.dialog.hide();
	    }

	    this.setMode(null);
	  },

	  /**
	   * [_viewDidChange description]
	   * @param  {[type]} key [description]
	   * @param  {[type]} val [description]
	   * @return {[type]}     [description]
	   */
	  _viewDidChange: function _viewDidChange(key, val) {
	    var ev = 'change:' + key;

	    //If the ev contains '.' replace this chat by '-',
	    //because our bindings will read all '.' as a property
	    if (ev.indexOf('.') !== -1) {
	      ev = ev.split('.').join('-');
	    }

	    //_log.debug('_viewDidChange', ev, val);

	    this.setMode('edit');

	    this.fireEvent(ev, val);

	    if (this.control.apply) {
	      this.control.apply.setState('active');
	    }

	    if (this.control.cancel) {
	      this.control.cancel.setState('active');
	    }

	    if (this.toolbar.dialog) {
	      this.toolbar.dialog.show();
	    }
	  },

	  /**
	   * Method used to focus the primary fields
	   *
	   * @return {void}
	   */
	  _focusPrimaryKey: function _focusPrimaryKey() {
	    //_log.debug('_focusPrimaryField', this.focuskey);
	    if (!this.doc._id) {
	      var focus = this.focuskey;
	      var field = this.form.getElement('input[name=' + focus + ']');
	      if (!field) {
	        field = this.form.getElement('input[name="name"]');
	      }
	      if (field) {
	        field.focus();
	      }
	    }
	  },

	  /**
	   * Hide dialog toolbar
	   *
	   * @return {void}
	   */
	  _hideToolbarDialog: function _hideToolbarDialog() {
	    //_log.debug('_hideToolbarDialog');

	    if (this.toolbar && this.toolbar.dialog) {
	      this.toolbar.dialog.hide();
	    }
	  },

	  /**
	   * Set the class mode
	   *
	   * @param  {Object} mode
	   * @return {void}
	   */
	  _setClassMode: function _setClassMode(mode, m) {
	    //_log.debug('_setClassMode', mode, m);
	    if ((typeof mode === 'undefined' ? 'undefined' : _typeof(mode)) === 'object') {
	      mode = m;
	    }

	    if ((typeof mode === 'undefined' ? 'undefined' : _typeof(mode)) !== 'object' && this.container.addClass) {
	      this.container.addClass('mode-' + mode);
	    }

	    if (mode === null && this.toolbar.dialog) {
	      this.toolbar.dialog.hide();
	      this.container.removeClass('mode-edit');
	    }
	  },

	  /**
	   * [_onInputKeyUp description]
	   * @param  {[type]} input [description]
	   * @param  {[type]} ev    [description]
	   * @return {[type]}       [description]
	   */
	  _onInputKeyUp: function _onInputKeyUp(input, ev) {
	    _log.debug('_onInputKeyUp');

	    input.setError(null);
	    input = input.input;

	    if (!input.get('readonly')) {
	      var name = input.get('name');
	      var value = input.get('value');
	      //_log.debug('---'+this.get('value')+'/'+self.doc[this.get('name')]+'-');
	      if (value !== this.doc[name]) {
	        this.updateDocKey(name, value);
	        this.fireEvent('change', [name, value]);

	        //In test for real time editing
	        var pos = input.selectionStart;
	        this.fireEvent('keyChange', [this.doc._id, name, ev.key, pos]);

	        this.fireEvent('update', name);
	      }
	    }
	  },

	  /**
	   * [_onInputBlur description]
	   * @param  {[type]} input [description]
	   * @return {[type]}       [description]
	   */
	  _onInputBlur: function _onInputBlur(input) {
	    //_log.debug('_onInputBlur');

	    input = input.input;

	    //var name = input.get('name');
	    var value = input.get('value');

	    var ev = 'blur:' + this.get('name');

	    if (ev.indexOf('.') !== -1) {
	      ev = ev.split('.').join('-');
	    }

	    this.fireEvent(ev, value);
	  }

	});

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('view:form-utils');

	exports.default = new Class({

	  /**
	   * Set a specific key.
	   * @param {string} key   Object key
	   * @param {string} value Value to be set
	   * @param {boolean} quiet Don't fireEvent if true
	   */
	  setKey: function setKey(key, value, quiet) {
	    //_log.debug('setKey', key, value);

	    //var currentVal = this.getValueFromKey(key, this.doc);
	    //_log.debug('--', currentVal, value);
	    /*if (currentVal === value) {
	      return;
	    }*/

	    this.updateDocKey(key, value);

	    if (typeOf(value) === 'object') {
	      this.setKeyObject(key, value);
	    }
	    if (typeOf(value) === 'array') {
	      this.setKeyArray(key, value);
	    } else if (this.field[key]) {
	      this.field[key].set(value);
	    }

	    if (!quiet) {
	      this.fireEvent('change', [key, value]);
	    }
	  },

	  /**
	   * set sub keys if exist
	   * @param {string} key   Object key
	   * @param {Object} obj Value to be set
	   */
	  setKeyObject: function setKeyObject(key, obj) {
	    //_log.debug('setKey', key, obj);

	    for (var sub in obj) {
	      var name = key + '.' + sub;
	      if (this.field[name]) {
	        this.field[name].set(obj[sub]);
	      }
	    }
	  },

	  /**
	   * set sub keys if exist
	   * NOT IN USE
	   * @param {string} key   Object key
	   * @param {Object} obj Value to be set
	   */
	  setKeyArray: function setKeyArray(key, obj) {
	    _log.debug('setKeyArray', key, obj);
	  },

	  /**
	   * IN TEST FOR REAL TIME EDITING
	   */
	  setKeyPos: function setKeyPos(key, value, pos) {
	    _log.debug(value, pos);
	    var lastValue = this.doc[key] || '';
	    var newValue = '';

	    if (value === 'space') {
	      value = ' ';
	    }

	    if (value === 'delete') {
	      newValue = lastValue.substr(0, pos) + lastValue.substr(pos + 1);
	    } else if (value === 'backspace') {
	      _log.debug('***', lastValue.substr(0, pos - 1), lastValue.substr(pos - 1, pos));
	      //newValue = delete lastValue[pos];
	      newValue = lastValue.substr(0, pos) + lastValue.substr(pos + 1, lastValue.length - 1);
	    } else {
	      newValue = lastValue.substr(0, pos) + value + lastValue.substr(pos - 1);
	    }

	    this.doc[key] = newValue;

	    var input = this.form.getElement('[name=' + key + ']');

	    var start = input.selectionStart;
	    var end = input.selectionEnd;

	    input.set('value', newValue);

	    //_log.debug(lastValue.substring(0, start), value.substring(0, start));

	    if (pos < start) {
	      var diff = 1;
	      start += diff;
	      end += diff;
	    }

	    input.selectionStart = start;
	    input.selectionEnd = end;
	  },

	  /**
	   * Update this.doc for the given key name (three levels)
	   * @param  {string} name The name of the key in dot notation
	   * @param  {Mixin} value The related key value
	   * @return {Mixin} Value
	   */
	  updateDocKey: function updateDocKey(name, value) {
	    var keys = name.split(/\./);
	    //_log.debug('updateDocKey', keys, name, value);

	    if (keys.length === 1) {
	      this.doc[keys[0]] = value;
	    }

	    if (keys.length === 2) {
	      if (!this.doc[keys[0]]) {
	        this.doc[keys[0]] = {};
	      }

	      this.doc[keys[0]][keys[1]] = value;
	    }
	    if (keys.length === 3) {
	      if (!this.doc[keys[0]]) {
	        this.doc[keys[0]] = {};
	      }
	      if (!this.doc[keys[0]][keys[1]]) {
	        this.doc[keys[0]][keys[1]] = {};
	      }

	      this.doc[keys[0]][keys[1]][keys[2]] = value;
	    }

	    if (keys.length === 4) {
	      if (!this.doc[keys[0]]) {
	        this.doc[keys[0]] = {};
	      }
	      if (!this.doc[keys[0]][keys[1]]) {
	        this.doc[keys[0]][keys[1]] = {};
	      }
	      if (!this.doc[keys[0]][keys[1]][keys[2]]) {
	        this.doc[keys[0]][keys[1]][keys[2]] = {};
	      }

	      this.doc[keys[0]][keys[1]][keys[2]][keys[3]] = value;
	    }

	    return value;
	  },

	  /**
	   * Get Value for the given key
	   * @param  {string} name defined in dot notation
	   * @param  {Object} info
	   * @return {Mixin} The Value of the given key
	   */
	  getValueFromKey: function getValueFromKey(name, info) {
	    var keys = name.split(/\./);
	    var value = null;

	    if (!name || !info) {
	      return;
	    }

	    //_log.debug('getValueFromKey', name, info);

	    if (keys.length === 1) {
	      value = info[keys[0]];
	    }
	    if (keys.length === 2 && info[keys[0]]) {
	      if (info[keys[0]]) {
	        value = info[keys[0]][keys[1]];
	      }
	    }
	    if (keys.length === 3) {
	      if (info[keys[0]]) {
	        if (info[keys[0]][keys[1]]) {
	          value = info[keys[0]][keys[1]][keys[2]];
	        }
	      }
	    }

	    return value;
	  }

	});

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('view:form-utils');

	exports.default = new Class({

	  /**
	   * Get Value for the given key
	   * @param  {string} name defined in dot notation
	   * @param  {Object} info
	   * @return {Mixin} The Value of the given key
	   */
	  getValueFromKey: function getValueFromKey(name, info) {
	    var keys = name.split(/\./);
	    var value = null;

	    if (!name || !info) {
	      return;
	    }

	    //_log.debug('getValueFromKey', name, info);

	    if (keys.length === 1) {
	      value = info[keys[0]];
	    }
	    if (keys.length === 2 && info[keys[0]]) {
	      if (info[keys[0]]) {
	        value = info[keys[0]][keys[1]];
	      }
	    }
	    if (keys.length === 3) {
	      if (info[keys[0]]) {
	        if (info[keys[0]][keys[1]]) {
	          value = info[keys[0]][keys[1]][keys[2]];
	        }
	      }
	    }

	    return value;
	  }

	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _window = __webpack_require__(21);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-dialog').defineLevel();

	exports.default = new Class({

	  Extends: _window2.default,

	  name: 'dialog',

	  options: {
	    center: true,
	    title: 'Dialog',
	    type: 'dialog',

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

	  /**
	   * init element
	   * @return {void}
	   */
	  _initElement: function _initElement() {
	    this.parent();

	    this._initBody();
	    this._initActions();

	    //this.buildButtons(this.options.action);
	  },

	  /**
	   * init body
	   * @return {void}
	   */
	  _initBody: function _initBody() {
	    _log.debug('_initBody', this.content);

	    var message = this.options.message;

	    this.message = new Element('div', {
	      class: 'container-body',
	      styles: {
	        padding: '16px'
	      },
	      html: message
	    }).inject(this.foot, 'before');
	  },

	  /**
	   * init message
	   * @param  {string} message
	   * @return {void}
	   */
	  _initMessage: function _initMessage(message) {
	    _log.debug('_initMessage', message);
	  },

	  /**
	   * init controls
	   * @return {void}
	   */
	  _initActions: function _initActions() {
	    _log.debug('_initActions', this.foot);

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
	    }
	  },

	  /**
	   * _init action
	   * @param  {string} name
	   * @param  {Object} opts
	   * @param  {Object} toolbar
	   * @return {void}
	   */
	  _initAction: function _initAction(name, opts, toolbar) {
	    _log.debug('_intiAction', name, opts, toolbar);

	    var self = this;

	    var n = name.split('::');

	    name = n[0];

	    var klss = n[1];

	    var action = new _button2.default({
	      name: name,
	      text: name,
	      klss: klss
	    }).addEvent('press', function () {
	      //_log.debug('press', name);
	      self.fireEvent(name);
	      self.close();
	    }).inject(toolbar);

	    this.actions.push(action);
	  }

	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-form-attachments');

	exports.default = new Class({

	  /**
	   * [_initContacts description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initAttachments: function _initAttachments(field, doc, group) {
	    //_log.debug('_initList', field, doc, group);
	    var self = this;

	    group.addClass('group-list');

	    if (field.klss) {
	      element.addClass(field.klss);
	    }

	    var read = this.isReadOnly(field);

	    var name = field.text || field.name;

	    var list = new Element('div', {
	      'class': 'form-list'
	    }).inject(group);

	    if (doc.attachments && typeOf(doc.attachments[field.name]) == 'array') {

	      doc.attachments[field.name].each(function (info, idx) {
	        var item = new Element('div', {
	          'data-id': info._id,
	          'class': 'list-item'
	        }).inject(list);

	        var text = info.name || info.description || info.email || info.address || info;

	        var name = new Element('span', {
	          'class': 'name',
	          html: text
	        }).inject(item);

	        var icon = new Element('span', {
	          'class': 'ui-icon fa fa-file-o'
	        }).inject(item, 'top');

	        if (!read) {
	          var remove = new _button2.default({
	            'clss': 'right',
	            type: 'icon',
	            name: 'deleteItem',
	            icon: 'mdi-action-highlight-remove',
	            emit: 'remove'
	          }).inject(item).addEvent('remove', function () {
	            self._removeAttachmentsItem(idx, field.name);
	            self.fireEvent('attachmentRemoved', info._id);
	          });
	        }

	        if (!read) {
	          item.addEvent('click', function () {
	            list.getChildren().removeClass('item-selected');
	            item.addClass('item-selected');
	          });
	        }
	      });
	    }

	    if (!read) {
	      var addBtn = new _button2.default({
	        icon: 'mdi-content-add mdi-av-playlist-add',
	        name: 'add',
	        type: 'icon-text',
	        klss: 'button-inline',
	        text: 'Ajouter ' + name + '...',
	        emit: 'linkAttachments'
	      }).inject(group).addEvent('linkAttachments', function () {
	        //_log.debug(field);
	        self.fireEvent('linkAttachments', [field.name, field.opts, self]);
	      });

	      addBtn.addClass('button-add');
	    }
	  },

	  /**
	   * [_removeAttachmentsItem description]
	   * @param  {[type]} idx [description]
	   * @param  {[type]} key [description]
	   * @return {[type]}     [description]
	   */
	  _removeAttachmentsItem: function _removeAttachmentsItem(idx, key) {

	    this.doc.attachments = this.doc.attachments || {};

	    var id = this.doc.attachments[key][idx]._id;
	    this.doc.attachments[key].splice(idx, 1);

	    this.doc.attachments._ids = this.doc.attachments._ids || [];

	    var listIdx = this.doc.attachments._ids.indexOf(id);
	    if (listIdx >= 0) {
	      this.doc.attachments._ids.splice(listIdx, 1);
	    }

	    this._setInfo(this.doc);
	    this.fireEvent('change', [key, this.doc.attachments[key]]);
	  }

	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _choice = __webpack_require__(38);

	var _choice2 = _interopRequireDefault(_choice);

	var _steps = __webpack_require__(63);

	var _steps2 = _interopRequireDefault(_steps);

	var _dropdown = __webpack_require__(64);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _multi = __webpack_require__(67);

	var _multi2 = _interopRequireDefault(_multi);

	var _select = __webpack_require__(68);

	var _select2 = _interopRequireDefault(_select);

	var _check = __webpack_require__(69);

	var _check2 = _interopRequireDefault(_check);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-form-control');

	exports.default = new Class({

	  /**
	   * [_initButtons description]
	   * @param  {[type]} list    [description]
	   * @param  {[type]} doc     [description]
	   * @param  {[type]} element [description]
	   * @return {[type]}         [description]
	   */
	  _initButtons: function _initButtons(list, doc, element) {
	    var self = this;
	    var buttons = [];
	    //_log.debug('_initButton', list, doc, element);
	    if (typeOf(list) == 'object') {
	      buttons.push(list);
	    } else {
	      buttons = list;
	    }

	    _log.debug(buttons);
	    buttons.each(function (b) {
	      var btn = new _button2.default({
	        'clss': b.klss,
	        type: 'text',
	        name: b.name,
	        //text: b.text,
	        icon: b.icon,
	        emit: b.emit
	      }).inject(element, 'top');

	      //_log.debug('btn', b, btn);

	      btn.addEvent(b.emit, function () {
	        self.fireEvent(b.emit, doc._id);
	      });
	    });
	  },

	  /**
	   * [_initChoice description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initChoice: function _initChoice(field, doc, group) {
	    var self = this;
	    //_log.debug('----------',field, doc);

	    var value = this.getValueFromKey(field.name, doc);

	    var input = new _choice2.default({
	      name: field.name,
	      text: field.text,
	      value: value,
	      klss: field.klss,
	      list: field.list,
	      read: field.read || this.readonly
	    }).inject(group);

	    if (!field.read) input.addEvent('change', function (val) {

	      self.updateDocKey(field.name, val);

	      self.fireEvent('change', [field.name, val]);
	      self.fireEvent('updated', {
	        key: field.name,
	        value: val
	      });

	      if (field.name == 'kind') self._setForm(self.doc);
	    });

	    this.field[field.name] = input;
	  },

	  /**
	   * [_initSteps description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initSteps: function _initSteps(field, doc, group) {
	    var self = this;
	    //_log.debug('_initSteps',field, field.text);

	    var value = this.getValueFromKey(field.name, doc);

	    var input = new _steps2.default({
	      name: field.name,
	      text: field.text,
	      value: value,
	      klss: field.klss,
	      list: field.list,
	      opts: field.opts,
	      read: field.read || this.readonly
	    }).inject(group);

	    if (!field.read) input.addEvent('step', function (val) {

	      /*var oldVal = self.getValueFromKey(field.name, doc);
	      var idx = field.list.indexOf(oldVal);
	      if (idx + 1 != val - 1) return;
	       //val = field.list[val-1];
	       var text = field.list[idx+1];
	       if (text) {
	        input.set(text);
	      }*/

	      //self.updateDocKey(field.name, val);

	      self.fireEvent('change', [field.name, val]);
	      /*self.fireEvent('updated', {
	        key: field.name,
	        value: val
	      });*/
	    });

	    this.field[field.name] = input;
	  },

	  /**
	   * [_initDropdown description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initDropdown: function _initDropdown(field, doc, group) {
	    var self = this;
	    //_log.debug('_initDropdown', field);

	    var value = this.getValueFromKey(field.name, doc);
	    if (!value && field.default) {
	      value = field.list[field.list.indexOf(field.default)];
	      this.updateDocKey(field.name, value);
	    }

	    var read = this.isReadOnly(field);

	    var input = new _dropdown2.default({
	      name: field.name,
	      text: field.text,
	      value: value,
	      klss: field.klss,
	      list: field.list,
	      read: read
	    }).inject(group);

	    this.field[field.name] = input;

	    if (read) return;

	    input.addEvents({
	      change: function change(val) {
	        input.setError(null);
	        self.updateDocKey(field.name, val);

	        self.fireEvent('change', [field.name, val]);
	        self.fireEvent('updated', {
	          key: field.name,
	          value: val
	        });

	        if (field.name === 'kind') {
	          self._setForm(self.doc);
	        }
	      }
	    });
	  },

	  /**
	   * [_initMulti description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initMulti: function _initMulti(field, doc, group) {
	    var self = this;
	    //_log.debug('--_initMulti--------',field);

	    var value = this.getValueFromKey(field.name, doc);

	    var input = new _multi2.default({
	      name: field.name,
	      text: field.text,
	      value: value,
	      klss: field.klss,
	      list: field.list
	    }).inject(group);

	    input.addEvent('change', function (obj) {

	      self.doc[field.name] = obj.value;
	      self.fireEvent('change', [field.name, obj.value]);
	      self.fireEvent('updated', obj);
	      if (field.name == 'kind') self._setForm(self.doc);
	    });
	  },

	  /**
	   * [_initSelect description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initSelect: function _initSelect(field, doc, group) {
	    var self = this;
	    //_log.debug('----------',field);


	    var select = {
	      text: field.text,
	      type: field.type,
	      name: field.text,
	      klss: field.klss,
	      opts: {
	        name: 'kind',
	        type: 'drop',
	        head: {
	          text: 'kind'
	        },
	        menu: []
	      }
	    };

	    field.list.each(function (value) {
	      select.opts.menu.push({
	        name: value
	      });
	    });

	    select.value = doc[field.name];

	    var input = new _select2.default(select).inject(group);

	    input.addEvent('change', function (value) {
	      //_log.debug('value', doc[field.name], value);

	      self.doc[field.name] = value;
	      self.fireEvent('change', [field.name, value]);

	      if (field.name == 'kind') self._setForm(self.doc);
	    });
	  },

	  /**
	   * [_initCheck description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initCheck: function _initCheck(field, doc, group) {
	    var self = this;
	    //_log.debug('-----_initCheck-----',doc[field.name]);

	    var value = doc[field.name];
	    if (value === undefined) {
	      value = field.value;
	      this.doc[field.name] = value;
	    }

	    field.value = value;

	    var input = new _check2.default(field).inject(group);

	    input.addEvent('change', function (value) {
	      // _log.debug('value', doc[field.name], value);
	      self.doc[field.name] = value;
	      self.fireEvent('change', [field.name, value]);
	    });
	  },

	  /**
	   * [enableControl description]
	   * @param  {[type]} str [description]
	   * @return {[type]}     [description]
	   */
	  enableControl: function enableControl(str) {
	    var control = this.control[str];

	    //_log.debug('enableControl', str, this.control);

	    if (control) {
	      control.setState('enabled');
	    }
	  },

	  /**
	   * [disableControl description]
	   * @param  {[type]} str [description]
	   * @return {[type]}     [description]
	   */
	  disableControl: function disableControl(str) {
	    var control = this.control[str];

	    //_log.debug('disableControl', str, this.control);

	    if (control) {
	      control.setState('disabled');
	    }
	  }

	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _field2.default,

	  options: {
	    name: 'steps'
	  },

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {
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

	    if (!opts.value) {
	      opts.value = 1;
	    }

	    if (opts.value) {
	      this.input.set('value', opts.value);
	    }
	  },

	  /**
	   * [_initList description]
	   * @param  {[type]} list [description]
	   * @return {[type]}      [description]
	   */
	  _initList: function _initList(list) {
	    //_log.debug('_initList', list);

	    this.list = new Element('ul', {
	      'class': 'steps-list'
	    }).inject(this.element);

	    this.itemList = [];

	    if (list && list.length > 0) {
	      for (var i = 0; i < list.length; i++) {
	        this._initItem(list[i], i + 1);
	      }
	    }
	  },

	  /**
	   * [_initItem description]
	   * @param  {[type]} item [description]
	   * @return {[type]}      [description]
	   */
	  _initItem: function _initItem(item, idx) {
	    //_log.debug('_initItem', item);
	    var self = this,
	        opts = this.options;

	    var li = new Element('li', {
	      'data-value': item
	    }).inject(this.list).addEvent('click', function () {
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

	    if (opts.value === item) {
	      li.addClass('selected');
	      self.selected = li;
	    }

	    if (opts.value === item) {
	      li.addClass('selected');
	      self.selected = li;
	    }
	  },

	  /**
	   * override default _initError
	   * @return {[type]} [description]
	   */
	  _initError: function _initError() {},

	  /**
	   * [select description]
	   * @param  {[type]} value [description]
	   * @return {[type]}       [description]
	   */
	  set: function set(value) {
	    //_log.debug('steps set', value, this.item);
	    var item = this.item[value];

	    if (!item) {
	      return;
	    }

	    if (this.selected) {
	      this.selected.removeClass('selected');
	    }

	    item.addClass('selected');
	    this.selected = item;
	  }

	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _minimalUtils = __webpack_require__(14);

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _buttonMenu = __webpack_require__(65);

	var _buttonMenu2 = _interopRequireDefault(_buttonMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-control-dropdown').defineLevel();

	exports.default = new Class({

	  Extends: _field2.default,

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
	  _initElement: function _initElement() {
	    this.parent();

	    this.control = {};

	    this.element.addClass('type-dropdown');

	    //this.input.set('readonly', 'readonly');

	    var opts = this.options;

	    if (this.readonly) {
	      this.options.binding._list = [];
	    } else {
	      this._initMenu(opts);
	      this._initButton();
	      this._initEvents();
	    }
	  },

	  /**
	   * _onKeyDown
	   * @return {void}
	   */
	  _onKeyDown: function _onKeyDown(e) {
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
	  _onKeyUp: function _onKeyUp(e) {
	    _log.debug('_onKeyUp', e);
	  },

	  /**
	   * [_initIcon description]
	   * @return {void} [description]
	   */
	  _initButton: function _initButton() {
	    _log.debug('_initButton');

	    this.button = new _button2.default({
	      'clss': 'right',
	      type: 'icon',
	      name: 'movedown',
	      icon: 'mdi-hardware-keyboard-arrow-down'
	    }).inject(this.element, 'top');
	  },

	  /**
	   * [_onButtonClick description]
	   * @return {void} [description]
	   */
	  _onButtonPress: function _onButtonPress(e) {
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
	  _onMouseDown: function _onMouseDown(e) {
	    this.parent(e);

	    this._onButtonPress(e);
	  },

	  /**
	   * [_initToolbarComp description]
	   * @param {Object} opts
	   * @return {Object}
	   */
	  _initMenu: function _initMenu(opts) {
	    _log.debug('_initMenu', opts);
	    var self = this;
	    //var list = opts.list;
	    var timer = null;

	    opts.list = opts.list || [];

	    this.container = this.element.getParent();

	    var value = self.input.get('value');

	    var menu = this.menu = new Element('ul', {
	      class: 'ui-menu'
	    }).inject(this.element, 'bottom').addEvents({
	      mouseleave: function mouseleave() {
	        clearTimeout(timer);
	        timer = setTimeout(function () {
	          menu.setStyle('display', 'none');
	        }, 500);
	      },
	      mouseenter: function mouseenter() {
	        clearTimeout(timer);
	      },
	      click: function click() {
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
	  _initEvents: function _initEvents() {
	    var self = this;

	    if (this.readonly) {
	      return;
	    }

	    this.addEvents({
	      select: function select(name) {
	        _log.debug('select');
	        self.input.set('value', name);
	        self.fireEvent('change', name);
	      }
	    });
	  },

	  /**
	   * [_onFocus description]
	   * @return {void}
	   */
	  _onFocus: function _onFocus(e) {
	    _log.debug('_onFocus');

	    this._showMenu(e);

	    this.parent(e);
	  },

	  /**
	   * [_onFocus description]
	   * @return {void}
	   */
	  _onBlur: function _onBlur(e) {
	    _log.debug('_onBlur');
	    this.parent(e);
	    this._hideMenu(e);
	  },

	  /**
	   * [_showMenu description]
	   * @return {void}
	   */
	  _showMenu: function _showMenu() {

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
	  _hideMenu: function _hideMenu() {

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
	    (function () {
	      self.menu.setStyle('display', 'none');
	    }).delay(this.options.menuFx.duration);

	    this.fireEvent('hide');
	  },

	  /**
	   * [_initMenuPosition description]
	   * @return {Object}
	   */
	  _initMenuPosition: function _initMenuPosition() {
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
	  _initItem: function _initItem(name, def, element, value) {
	    var self = this;
	    var clss = _button2.default;
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
	        name: name
	      };
	    }

	    //_log.debug(this.options.value, name);

	    if (this.value === name) {
	      opts.klss = 'is-selected';
	    }

	    if (!name) {
	      return;
	    }

	    var Clss = _minimalUtils.api.strToClss(clss);

	    if (clss === _button2.default || clss === _buttonMenu2.default) {
	      opts.text = Locale.get('control.' + name, name) || name;
	    }

	    this.options.control = this.options.control || {};

	    this.control[name] = new Clss(opts).inject(element);

	    if (clss === _button2.default) {
	      this.control[name].addEvents({
	        press: function press() {
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
	  _onClick: function _onClick(e) {
	    //_log.debug('_onElementClick');
	    var opts = this.options;

	    e.stopPropagation();

	    if (!this.menu) {
	      this._initMenu(opts);
	    }

	    this.menuShow(e);
	  }

	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _separator = __webpack_require__(66);

	var _separator2 = _interopRequireDefault(_separator);

	var _scriptjs = __webpack_require__(30);

	var _scriptjs2 = _interopRequireDefault(_scriptjs);

	__webpack_require__(17);

	var _index = __webpack_require__(1);

	var UI = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-control-buttonMenu');

	exports.default = new Class({

	  Extends: _button2.default,

	  name: 'button',

	  options: {
	    name: 'button',
	    type: 'action' },

	  /**
	   * [_initElement description]
	   * @return {void}
	   */
	  _initElement: function _initElement() {
	    this.parent();

	    _log.debug('_initElement');

	    this.control = {};
	  },

	  /**
	   * [_initToolbarComp description]
	   * @param {Object} opts
	   * @return {void}
	   */
	  _initMenu: function _initMenu(opts) {
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
	      mouseleave: function mouseleave() {
	        clearTimeout(timer);
	        timer = setTimeout(function () {
	          menu.setStyle('display', 'none');
	        }, 500);
	      },
	      /**
	       * @ignore
	       */
	      mouseenter: function mouseenter() {
	        clearTimeout(timer);
	      },
	      /**
	       * @ignore
	       */
	      click: function click() {
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
	  _initMenuPosition: function _initMenuPosition() {
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
	  _initItem: function _initItem(name, def, element) {
	    var self = this;
	    var clss = 'ui/button';
	    var opts;

	    def = def || {};

	    // init class
	    var l = name.split(/\:\:/);

	    name = l[0];
	    l.splice(0, 1);

	    //var klss = l.join(' ');

	    if (name === 'separator') {
	      clss = 'ui/separator';
	    }

	    if (def.clss) {
	      clss = def.clss;
	    }

	    var icon = _separator2.default[def.icon || name];

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

	    if (clss === 'ui/button' || clss === 'ui/buttonmenu') {
	      opts.text = def.text || Locale.get('control.' + name, name) || name;
	    }

	    this._requireModule(clss, function (Clss) {

	      self.control[name] = new Clss(opts).inject(element);

	      if (clss === 'ui/button') {
	        self.control[name].addEvents({
	          /**
	           * @ignore
	           */
	          press: function press() {
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
	  _requireModule: function _requireModule(module, cb) {
	    _log.debug('_requireModule', module);

	    if (typeOf(module) === 'class') {
	      cb(module);
	      return;
	    }

	    var Class = UI[module.replace('ui/', '').capitalize()];
	    cb(Class);
	  },

	  /**
	   * [_onElementMouseDown description]
	   * @param  {event} e
	   * @return {void}
	   */
	  _onClick: function _onClick(e) {
	    _log.debug('_onElementClick');

	    var opts = this.options;

	    e.stopPropagation();

	    if (!this.menu) {
	      this._initMenu(opts);
	    }

	    this.menu.setStyle('display', 'block');
	  }

	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _control = __webpack_require__(24);

	var _control2 = _interopRequireDefault(_control);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _control2.default,

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

	  set: function set() {},

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {
	    this.parent();

	    if (this.options.clss) {
	      this.element.addClass(this.options.clss);
	    }
	  },

	  /**
	   * [_initClass description]
	   * @return {[type]} [description]
	   */
	  _initClass: function _initClass() {
	    var opts = this.options;
	    //_log.debug(this.name);

	    if (this.options.klss) {
	      this.element.addClass('button-' + opts.klss);
	    }

	    if (this.options.type) {
	      this.element.addClass('type-' + this.options.type);
	    }

	    this.element.addClass(opts.prefix + this.name);
	  },

	  /**
	   * [_onElementMouseDown description]
	   * @param  {event} e [description]
	   * @return {[type]}   [description]
	   */
	  _onElementMouseDown: function _onElementMouseDown(e) {
	    _log.debug();
	    this.fireEvent('mousedown');
	    e.stop();
	  },

	  /**
	   * [_onElementMouseDown description]
	   * @param  {event} e [description]
	   * @return {[type]}   [description]
	   */
	  _onElementClick: function _onElementClick(e) {
	    var opts = this.options;
	    e.stopPropagation();
	    if (opts.emit && this.state != 'disabled') {
	      this.fireEvent(opts.emit);
	    }
	    this.fireEvent('press', opts.emit);
	    this.fireEvent('pressed', opts.emit);

	    if (opts.call && this.state != 'disabled') {
	      opts.call();
	    }
	  },

	  /**
	   * [_onElementMouseUp description]
	   * @return {[type]} [description]
	   */
	  _onElementMouseUp: function _onElementMouseUp() {
	    if (this.options.type == 'check') {
	      if (this.state == 'checked') {
	        this.setState(null);
	      } else {
	        this.setState('checked');
	      }
	    }
	  }

	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _field2.default,

	  options: {
	    name: 'choice'
	  },

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {
	    this.parent();
	    var opts = this.options;

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

	  /**
	   * [_initList description]
	   * @param  {[type]} list [description]
	   * @return {[type]}      [description]
	   */
	  _initList: function _initList(list) {
	    this.menu = new Element('ul', {
	      'class': 'choice-list'
	    }).inject(this.element);

	    if (list && list.length > 0) {
	      for (var i = 0; i < list.length; i++) {
	        this._initItem(list[i]);
	      }
	    }
	  },

	  /**
	   * [_initItem description]
	   * @param  {[type]} item [description]
	   * @return {[type]}      [description]
	   */
	  _initItem: function _initItem(item) {
	    var self = this,
	        opts = this.options;

	    var li = new Element('li', {
	      html: item
	    }).inject(this.menu).addEvent('click', function () {

	      if (this.hasClass('selected')) {
	        this.removeClass('selected');
	        var idx = self.value.indexOf(item);
	        _log.debug(idx, item);
	        if (idx > -1) {
	          self.value.splice(idx, 1);
	        }
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

	    if (this.value && this.value.indexOf(item) > -1) {
	      li.addClass('selected');
	    }
	  },

	  /**
	   * [toggle description]
	   * @return {[type]} [description]
	   */
	  toggle: function toggle() {
	    _log.debug('toggle_selected', this.element);

	    if (this.selected) {
	      this.selected.removeClass('selected');
	    }

	    if (this.selected && this.selected == this) {
	      this.selected.removeClass('selected');
	      this.selected = null;
	    } else {
	      this.addClass('selected');
	      this.selected = this;
	    }
	  },

	  /**
	   * [_select description]
	   * @param  {[type]} value [description]
	   * @return {[type]}       [description]
	   */
	  _select: function _select(value) {
	    var name = this.options.name;

	    this.input.set('value', value);
	    this.choice.set('html', value);
	    this.element.removeClass('state-open');
	    this.fireEvent('change', value, name);
	  },

	  /**
	   * [_toggle description]
	   * @return {[type]} [description]
	   */
	  _toggle: function _toggle() {
	    if (this.element.hasClass('state-open')) {
	      this.element.removeClass('state-open');
	    } else {
	      this.element.addClass('state-open');
	    }
	  },

	  /**
	   * [_initEvents description]
	   * @return {[type]} [description]
	   */
	  _initEvents: function _initEvents() {
	    this.parent();

	    this.choice.addEvents({
	      click: this._toggle.bind(this, 'default')
	    });
	    /*this.input.addEvents({
	      click: this._toggle.bind(this, 'default'),
	      blur: this.setState.bind(this, 'default'),
	      focus: this.setState.bind(this, 'focus')
	    });*/
	  }

	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _field2.default,

	  options: {
	    name: 'select',
	    opts: {
	      type: 'select',
	      showValue: true
	    }
	  },

	  _initElement: function _initElement() {
	    this.parent();

	    var self = this;

	    this.input.set('type', 'hidden');
	    var opts = this.options.opts;

	    this.menu = new UI.Menu(opts).addEvents({
	      change: function change(value) {
	        self.input.set('value', value);
	        self.fireEvent('change', value);
	        self.setState('close');
	      }
	    }).inject(this.element);

	    if (this.options.value) {
	      self.menu.head.set('html', this.options.value);
	    }
	  }

	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _field2.default,

	  name: 'check',

	  options: {
	    text: null,
	    checked: false,
	    error: false,
	    opts: {
	      type: 'ckeck'

	    }
	  },

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {
	    this.parent();

	    var opts = this.options;

	    this.checked = opts.value;

	    this.input.set('type', 'hidden');

	    this.wrapper = new Element('div', {
	      'class': 'check-wrapper'
	    }).inject(this.element);

	    this._initText(opts);
	    this._initCheck(opts);

	    this._initError();

	    if (this.checked) {
	      this.check.addClass('checked');
	    }
	  },

	  /**
	   * [_initCheck description]
	   * @return {[type]} [description]
	   */
	  _initCheck: function _initCheck() {
	    var self = this;

	    var check = this.check = new Element('span', {
	      'class': 'control-check'
	    }).inject(this.wrapper);

	    if (!this.readonly) {
	      check.addEvents({
	        click: function click() {
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
	  _initText: function _initText(opts) {
	    var self = this;

	    this.text = new Element('span', {
	      'class': 'control-text',
	      html: opts.text
	    }).addEvents({
	      click: function click() {
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

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _moment = __webpack_require__(54);

	var _moment2 = _interopRequireDefault(_moment);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	var _dialog = __webpack_require__(60);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-form-charges');

	exports.default = new Class({

	  _initCharges: function _initCharges(field, doc, group) {
	    _log.debug('_initCharges', field.name);
	    var self = this;

	    var dateFormat = this.options.dateTime.format;

	    group.addClass('group-list');
	    group.addClass('list-charges');

	    //var element = group.getPrevious();
	    //var name = element.get('html');

	    if (doc.status !== 'assigned') new _button2.default({
	      tag: 'button',
	      icon: 'icon-plus',
	      name: 'addCharges',
	      type: 'icon',
	      klss: 'button-inline',
	      text: 'Ajouter charges...',
	      emit: 'linkEvents'
	    }).inject(group, 'bottom').addEvent('linkEvents', function () {
	      //_log.debug(field.name);
	      self.fireEvent('linkEvents', field.name);
	    });

	    var list = new Element('div', {
	      'class': 'ui-list form-list list-charges'
	    }).inject(group, 'top');

	    if (!doc[field.name]) return;

	    //this._initChargesHeader(list);

	    var item, line;
	    var totalTravelTime = 0;
	    var totalWorkTime = 0;
	    var cost = 0;

	    doc[field.name].each(function (info, idx) {
	      var diff = '-';
	      if (info.dates) {
	        var startDate = (0, _moment2.default)(info.dates.start).format(dateFormat);
	        var endDateFormat = 'H:m';
	        if (startDate.toLowerCase().slice(-1) === 'm') endDateFormat = 'h:mm A';
	        var endDate = (0, _moment2.default)(info.dates.end).format(endDateFormat);

	        diff = _moment2.default.utc((0, _moment2.default)(info.dates.end).diff((0, _moment2.default)(info.dates.start))).format("HH:mm");
	      }

	      totalTravelTime += parseInt(info.travel_time, 10);
	      totalWorkTime += _moment2.default.duration(diff).asMinutes();

	      info.amount = info.amount || 0;
	      cost += parseFloat(info.amount);

	      line = new Element('div', {
	        class: 'ui-item list-item'
	      }).inject(list).addEvents({
	        dblclick: function dblclick() {
	          self.fireEvent('editEvent', [idx, info]);
	        }
	      });

	      var date = startDate + ' to ' + endDate;

	      item = new _field2.default({
	        type: 'text',
	        name: 'date',
	        text: date,
	        value: date,
	        read: true,
	        klss: 'item-date'
	      }).inject(line);

	      item = new _field2.default({
	        type: 'text',
	        name: 'Description',
	        value: info.name,
	        read: true,
	        klss: 'item-name'
	      }).inject(line);

	      var text = '';
	      if (info.unit) text = ' ' + info.unit;

	      item = new _field2.default({
	        type: 'text',
	        name: 'Qty',
	        value: info.quantity + text || 0,
	        read: true,
	        klss: 'item-quantity'
	      }).inject(line);

	      item = new _field2.default({
	        type: 'text',
	        name: 'Rate',
	        value: 'CHF ' + parseFloat(info.rate).toFixed(2),
	        read: true,
	        klss: 'item-rate'
	      }).inject(line);

	      item = new _field2.default({
	        type: 'text',
	        name: 'Amount',
	        value: 'CHF ' + parseFloat(info.amount).toFixed(2),
	        read: true,
	        klss: 'item-amount'
	      }).inject(line);

	      var remove = new _button2.default({
	        type: 'icon',
	        name: 'clear',
	        icon: 'delete',
	        emit: 'remove'
	      }).inject(line).addEvent('remove', function () {
	        new _dialog2.default({
	          message: 'Are you sure you want to delete this item?'
	        }).addEvents({
	          ok: function ok() {
	            self._removeItem(idx, field.name);
	            self.fireEvent('chargeRemoved', info._id);
	          }
	        });
	      });

	      item.addEvent('click', function () {
	        list.getChildren().removeClass('item-selected');
	        item.addClass('item-selected');
	      });
	    });

	    this._initChargesFooter(list, 'totalTravelTime', 'totalWorkTime', cost);
	  },

	  /**
	   * [_initChargesHeader description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initChargesHeader: function _initChargesHeader(list) {

	    var line = new Element('div', {
	      class: 'list-head'
	    }).inject(list);

	    new Element('div', {
	      html: 'Date',
	      'class': 'item-date'
	    }).inject(line);

	    new Element('div', {
	      html: 'Description',
	      'class': 'item-name'
	    }).inject(line);

	    new Element('div', {
	      html: 'Qty',
	      'class': 'item-quantity'
	    }).inject(line);

	    new Element('div', {
	      html: 'Rate',
	      'class': 'item-rate'
	    }).inject(line);

	    new Element('div', {
	      html: 'Amount',
	      'class': 'item-amount'
	    }).inject(line);
	  },

	  /**
	   * [_initChargesHeader description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initChargesFooter: function _initChargesFooter(list, travelTime, workTime, cost) {
	    var line = new Element('div', {
	      class: 'ui-item list-item'
	    }).inject(list);

	    var item = new _field2.default({
	      type: 'text',
	      name: 'date',
	      value: 'Total',
	      read: true,
	      klss: 'item-date'
	    }).inject(line);

	    item = new _field2.default({
	      type: 'text',
	      name: 'Description',
	      value: '',
	      read: true,
	      klss: 'item-name'
	    }).inject(line);

	    item = new _field2.default({
	      type: 'text',
	      name: 'Qty',
	      read: true,
	      //value: this.minutesToStr(workTime),
	      klss: 'item-quantity'
	    }).inject(line);

	    item = new _field2.default({
	      type: 'text',
	      name: 'Rate',
	      read: true,
	      klss: 'item-rate'
	    }).inject(line);

	    item = new _field2.default({
	      type: 'text',
	      name: 'Amount',
	      value: 'CHF ' + Math.ceil(parseFloat(cost).toFixed(2)).toFixed(2),
	      read: true,
	      klss: 'item-amount'
	    }).inject(line);

	    new _button2.default({
	      type: 'icon',
	      name: 'clear',
	      icon: 'icon-times-circle',
	      emit: 'remove'
	    }).inject(line);
	  },

	  /**
	   * [minutesToStr description]
	   * @param  {[type]} minutes [description]
	   * @return {[type]}         [description]
	   */
	  minutesToStr: function minutesToStr(minutes) {
	    var hours = this.leftPad(Math.floor(Math.abs(minutes) / 60));
	    var minutes = this.leftPad(Math.abs(minutes) % 60);

	    if (minutes === '00' && hours === '00') return '--:--';

	    return hours + ':' + minutes;
	  },

	  /**
	   * [leftPad description]
	   * @param  {[type]} number [description]
	   * @return {[type]}        [description]
	   */
	  leftPad: function leftPad(number) {
	    return (number < 10 && number >= 0 ? '0' : '') + number;
	  },

	  /**
	   * [_removeItem description]
	   * @param  {[type]} idx [description]
	   * @param  {[type]} key [description]
	   * @return {[type]}     [description]
	   */
	  _removeItem: function _removeItem(idx, key) {
	    this.doc[key].splice(idx, 1);
	    this._setInfo(this.doc);
	    this.fireEvent('change', [key, this.doc[key]]);
	  }

	});

/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('view-collapse').defineLevel();

	exports.default = new Class({

	  /**
	   * init collapse
	   * @return {void}
	   */
	  _initCollapse: function _initCollapse() {
	    //_log.debug('_initCollapse');

	    this._initCollapseControl();

	    var collapsed = this.options.isCollapsed;

	    if (!collapsed) {
	      this.isCollapsed = this.options.isCollapsed;
	    } else {
	      this.isCollapsed = collapsed;
	    }
	  },

	  /**
	   * init collapse control
	   * @return {void}
	   */
	  _initCollapseControl: function _initCollapseControl() {
	    //_log.debug('_initCollapse form');

	    if (!this.control || !this.control.collapse) {
	      return;
	    }

	    if (this.isCollapsed) {
	      //_log.debug('form isCollapsed');
	      if (this.control.collapse) {
	        this.control.collapse.hide();
	        this.control.uncollapse.show();
	      }
	    } else {
	      if (this.control.uncollapse) {
	        this.control.uncollapse.hide();
	        this.control.collapse.show();
	      }
	    }
	  },

	  /**
	   * collapse
	   * @return {void}
	   */
	  collapse: function collapse() {
	    var legends = this.form.getElements('.legend');

	    _log.debug('collapse', legends);

	    this.isCollapsed = true;

	    for (var i = 0; i < legends.length; i++) {
	      var legend = legends[i];
	      var fieldset = legend.getParent();
	      fieldset.addClass('closed');

	      if (this.control.collapse) {
	        this.control.collapse.hide();
	      }

	      if (this.control.uncollapse) {
	        this.control.uncollapse.show();
	      }

	      this.fireEvent('settings', ['isCollapsed', true]);
	    }
	  },

	  /**
	   * uncollapse
	   * @return {void}
	   */
	  uncollapse: function uncollapse() {
	    var legends = this.form.getElements('.legend');

	    _log.debug('uncollapse', legends);

	    this.isCollapsed = false;

	    for (var i = 0; i < legends.length; i++) {
	      var legend = legends[i];
	      var fieldset = legend.getParent();
	      fieldset.removeClass('closed');

	      if (this.control.uncollapse) {
	        this.control.uncollapse.hide();
	      }

	      if (this.control.collapse) {
	        this.control.collapse.show();
	      }

	      this.fireEvent('settings', ['isCollapsed', false]);
	    }
	  }

	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _moment = __webpack_require__(54);

	var _moment2 = _interopRequireDefault(_moment);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view:form-comments');

	exports.default = new Class({

	  /**
	   * [_initComments description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initComments: function _initComments(field, doc, group) {
	    var self = this;

	    if (!doc[field.name]) {
	      doc[field.name] = [];
	    }

	    doc[field.name].each(function (comment, i) {
	      self.injectComment(field, doc, group, comment, i);
	    });

	    var addBtn = new _button2.default({
	      icon: 'fa-plus-circle',
	      name: 'add',
	      type: 'icon-text',
	      text: 'Ajouter comment...',
	      emit: 'addComment',
	      klss: 'inline'
	    }).inject(group).addEvent('addComment', function () {
	      _log.debug(field.name);
	      self.addComment(field, doc, group);
	    });
	  },

	  /**
	   * [injectComment description]
	   * @param  {[type]} field   [description]
	   * @param  {[type]} doc     [description]
	   * @param  {[type]} group   [description]
	   * @param  {[type]} comment [description]
	   * @param  {[type]} i       [description]
	   * @param  {[type]} add     [description]
	   * @return {[type]}         [description]
	   */
	  injectComment: function injectComment(field, doc, group, comment, i, add) {
	    var self = this;

	    var context = {
	      el: group,
	      pos: 'bottom'
	    };

	    if (add) {
	      var elements = group.getChildren();

	      context = {
	        el: elements[elements.length - 1],
	        pos: 'before'
	      };
	    }

	    var line = new Element('div', {
	      'class': 'comment-list',
	      styles: {
	        position: 'relative'
	      }
	    }).inject(context.el, context.pos);

	    var label = new Element('label', {
	      'class': ''
	    }).inject(line);

	    var user = new Element('span', {
	      html: doc[field.name][i].user,
	      'class': 'info-user'
	    }).inject(label);

	    var d = (0, _moment2.default)(doc[field.name][i].date).fromNow();

	    var date = new Element('span', {
	      html: d,
	      'class': 'info-date'
	    }).inject(label);

	    //_log.debug(date);
	    var text = new _field2.default({
	      type: 'text',
	      name: field.name,
	      text: 'text',
	      value: doc[field.name][i]['text'],
	      useTextAsLabel: self.options.useTextAsLabel
	    }).inject(line).addClass();

	    text.input.addEvents({
	      keyup: function keyup(ev) {
	        _log.debug('keyup', i, field.name + '.' + i + '.text', this.get('value'));
	        self.doc[field.name][i]['text'] = this.get('value');

	        self.fireEvent('change', [field.name + '.' + i + '.text', this.get('value')]);
	      }
	    });

	    if (add) {
	      text.input.focus();
	    }

	    /*
	        var removeBtn = new Button({
	          icon: 'icon-remove-sign',
	          name: 'remove',
	          idx: i,
	          type: 'icon',
	          emit: 'removeDate',
	        }).inject(line).addEvent('click', function(){
	          _log.debug(field.name, this.options.idx);
	          self.removeDate(field, doc, group, this.options.idx, line);
	        }).addClass('button-remove');
	    */
	    /*new Picker.Date(end.input, {
	        timePicker: true,
	        positionOffset: {x: 5, y: 0},
	        pickerClass: 'datepicker_dashboard',
	        useFadeInOut: !Browser.ie
	      });
	    */
	  },

	  /**
	   * [addComment description]
	   * @param {[type]} field [description]
	   * @param {[type]} doc   [description]
	   * @param {[type]} group [description]
	   */
	  addComment: function addComment(field, doc, group) {
	    _log.debug('add date', field, doc);

	    var user = this.options.user;

	    var comment,
	        value = this.doc.comments || [],
	        i = 0;

	    if (doc.comments && doc.comments.length > 0) {
	      i = doc.comments.length;
	      comment = {
	        date: new Date().toJSON(),
	        user: user.name,
	        text: ''
	      };
	      value.push(comment);

	      _log.debug(doc);
	    } else {
	      var d = new Date().toJSON();

	      comment = {
	        date: (0, _moment2.default)().toISOString(),
	        user: user.name,
	        text: ''
	      };
	      value.push(comment);
	    }

	    this.doc[field.name] = value;
	    this.fireEvent('change', [field.name, value]);
	    this.injectComment(field, this.doc, group, comment, i, true);
	  },

	  /**
	   * [removeComent description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @param  {[type]} idx   [description]
	   * @param  {[type]} line  [description]
	   * @return {[type]}       [description]
	   */
	  removeComent: function removeComent(field, doc, group, idx, line) {
	    if (idx === null) {
	      return;
	    }
	    //  delete doc.dates[this.session.eventIndex];

	    var i = this.doc.dates.indexOf(this.doc.dates[idx]);
	    //_log.debug('--', i);
	    if (i !== -1) {
	      this.doc.dates.splice(i, 1);
	    }

	    line.destroy();

	    this.doc[field.name] = this.doc.dates;
	    this.fireEvent('change', [field.name, this.doc.dates]);

	    _log.debug(doc);
	  }

	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-core-form-contact').defineLevel();

	exports.default = new Class({

	  /**
	   * [_initContacts description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initContacts: function _initContacts(field, doc, group) {
	    _log.debug('_initContacts', field, doc, group);

	    var self = this;

	    var total = 0;

	    group.addClass('group-list');

	    var element = new Element('div', {
	      'class': 'ui-field field-list'
	    }).inject(group, 'top');

	    if (field.klss) {
	      element.addClass(field.klss);
	    }

	    //_log.debug('_initList', field.name);

	    var name = field.text || field.name;

	    var label = new Element('label', {
	      html: name
	    }).inject(element, 'top');

	    var list = new Element('div', {
	      'class': 'list-content'
	    }).inject(element);

	    var read = this.isReadOnly(field);

	    if (!read) {
	      var addBtn = new _button2.default({
	        type: 'icon-text',
	        name: 'add',
	        text: 'Ajouter ' + name + '...',
	        icon: 'add',
	        klss: 'button-inline',
	        emit: 'linkContacts'
	      }).inject(list, 'top').addEvent('linkContacts', function () {
	        _log.debug(field.name);
	        self.fireEvent('linkContacts', field.name);
	      });

	      addBtn.addClass('button-add');
	    }

	    if (!doc[field.name]) {
	      return;
	    }

	    doc[field.name].each(function (contact, idx) {
	      var item = new Element('div', {
	        'data-id': contact._id,
	        'class': 'list-item'
	      }).inject(list);

	      var text = contact.name || contact.email || contact.address || contact;

	      if (contact.total) {
	        text += ' (' + contact.total + ')';
	      }

	      new Element('span', {
	        'class': 'name',
	        html: text
	      }).inject(item);

	      total = total + contact.total;

	      new Element('span', {
	        'class': 'item-icon fa fa-file-o'
	      }).inject(item, 'top');

	      if (!read) {
	        new _button2.default({
	          type: 'icon',
	          name: 'clear',
	          title: 'remove',
	          icon: 'delete',
	          emit: 'remove'
	        }).inject(item).addEvent('remove', function () {
	          self._removeContactItem(idx, field.name);
	          self.fireEvent('contactRemoved', contact._id);
	        });
	      }

	      item.addEvent('click', function () {
	        list.getChildren().removeClass('item-selected');
	        item.addClass('item-selected');
	      });
	    });

	    if (total > 0) {
	      label.set('html', name + ' (' + total + ')');
	    }
	  },

	  /**
	   * [_removeItem description]
	   * @param  {[type]} idx [description]
	   * @param  {[type]} key [description]
	   * @return {[type]}     [description]
	   */
	  _removeContactItem: function _removeContactItem(idx, key) {
	    this.doc[key].splice(idx, 1);
	    this._setInfo(this.doc);
	    this.fireEvent('change', [key, this.doc[key]]);
	  }

	});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _currency = __webpack_require__(75);

	var _currency2 = _interopRequireDefault(_currency);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-form-currency').defineLevel();

	exports.default = new Class({

	  /**
	   * [_initHour description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initCurrency: function _initCurrency(field, doc, group) {
	    _log.debug('_initCurrency');

	    var self = this;

	    var value = this.getValueFromKey(field.name, doc);

	    var read = this.isReadOnly(field);

	    var input = new _currency2.default({
	      'class': 'txt',
	      type: 'text',
	      name: field.name,
	      text: field.text,
	      value: value,
	      read: read
	    }).inject(group);

	    this.field[field.name] = input;

	    _log.debug('input', input);

	    input.addEvents({
	      change: function change() {
	        var value = this.input.get('value');

	        _log.debug('change', value);

	        /*remove , and . chars from string TODO: will look better in one line*/
	        value = value.replace(/\,/g, '');
	        value = value.replace(/\./g, '');

	        /*string to integer*/
	        value = +value;

	        _log.debug('updateDocKey', value);

	        self.updateDocKey(field.name, value);
	        self.fireEvent('change', [field.name, value]);
	      }
	    });

	    input.input.addEvents({
	      keyup: function keyup() {
	        _log.debug('keyup');

	        input.setError(null);
	      },
	      blur: function blur() {
	        var ev = 'blur:' + field.name;

	        if (ev.indexOf('.') !== -1) {
	          ev = ev.split('.').join('-');
	        }

	        _log.debug('blur will fire', ev);

	        self.fireEvent(ev, this.get('value'));
	      }
	    });

	    if (read) {
	      input.input.set('readonly', 'readonly');
	    }

	    if (field.klss) {
	      input.addClass(field.klss);
	    }

	    if (field.etat === 'readonly' || this.readonly) {
	      input.input.set('readonly', 'readonly');
	    }
	  }

	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _field2.default,

	  options: {
	    name: 'currency',
	    base: 'control'
	  },

	  /**
	   * init element
	   * @return {void}
	   */
	  _initElement: function _initElement() {

	    //create a new div as input element
	    this.parent();

	    //_log.debug(this.element);

	    var alt = '{ "type" : "number", ' + '"groupSymbol": ",", ' + '"groupDigits": 3, ' + '"decSymbol": "", ' + '"decDigits": 0, ' + '"stripMask": false }';

	    this.input.addClass('mask');
	    this.input.set('alt', alt);

	    this.element.addClass('field-currency');
	  }

	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _moment = __webpack_require__(54);

	var _moment2 = _interopRequireDefault(_moment);

	var _date = __webpack_require__(77);

	var _date2 = _interopRequireDefault(_date);

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-form-date').defineLevel();

	exports.default = new Class({

	  /**
	   * [_initDate description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initDate2: function _initDate2(key, doc, group) {
	    _log.debug('_initDate2', key, doc, group);

	    var self = this;
	    var opts = key.opts || {};

	    var format = opts.format || this.options.dateTime.format;

	    var lang = this.options.lang;

	    _moment2.default.lang(lang);
	    //_log.debug(doc[key.name]);

	    this.datePickers = this.datePickers || [];
	    //_log.debug(doc[key.name]);

	    var value = this.getValueFromKey(key.name, doc);

	    /*if (!value) {
	      value = moment().toISOString();
	      this.updateDocKey(key.name, value);
	    }*/

	    //check if end date is not greater that start date
	    if (key.name.indexOf('end') !== -1) {
	      var start = this.getValueFromKey(key.name.replace('end', 'start'), doc);
	      start = (0, _moment2.default)(start).seconds(0).milliseconds(0).toISOString();
	      var end = (0, _moment2.default)(value).seconds(0).milliseconds(0).toISOString();

	      if (start > end) {
	        value = (0, _moment2.default)(start).toISOString();
	      }
	    }

	    var date;

	    if (value) date = (0, _moment2.default)(value).format('YYYY-MM-DD HH:mm');

	    if (value && key.mode === 'dateHour' || key.mode === 'hour') {
	      date = (0, _moment2.default)(value).format('YYYY-MM-DD HH:mm');
	    }

	    var read = this.isReadOnly(key);

	    var field = new _date2.default({
	      'class': key.clss,
	      type: 'text',
	      name: key.name,
	      text: key.text,
	      value: date,
	      useTextAsLabel: this.options.useTextAsLabel,
	      read: read
	    }).addEvent('change', function (value) {
	      _log.debug('change', value);

	      if (!value) return;

	      //check if end date is not greater that start date
	      var start, end, oldDate;

	      if (key.name.indexOf('start') !== -1) {
	        start = (0, _moment2.default)(value).toISOString();
	        oldDate = self.getValueFromKey(key.name, doc);
	        end = self.getValueFromKey(key.name.replace('start', 'end'), doc);
	      }

	      if (key.name.indexOf('end') !== -1) {
	        end = (0, _moment2.default)(value).toISOString();
	        oldDate = self.getValueFromKey(key.name, doc);
	        start = self.getValueFromKey(key.name.replace('end', 'start'), doc);
	      }

	      _log.debug('dates...', start, end, start > end, oldDate);

	      if (start && end && start > end) {
	        if (key.name.indexOf('start') !== -1) {
	          var k = key.name.replace('start', 'end');
	          if (self.field[k]) {
	            self.field[k].set(value);
	          }
	          field.set(value);
	          self.updateDocKey(k, (0, _moment2.default)(value).toISOString());
	        } else {
	          if (oldDate) {
	            field.set(oldDate);
	            self.updateDocKey(key.name, (0, _moment2.default)(oldDate).toISOString());
	          } else {
	            field.empty();
	            self.updateDocKey(key.name, undefined);
	          }
	          return;
	        }
	      }

	      field.set(value);
	      self.updateDocKey(key.name, (0, _moment2.default)(value).toISOString());
	      self.fireEvent('change', [key.name, (0, _moment2.default)(value).toISOString()]);
	    }).inject(group);

	    this.field[key.name] = field;

	    if (read) field.input.set('readonly', 'readonly');

	    if (key.klss) {
	      field.addClass(key.klss);
	    }

	    if (field.etat === 'readonly' || this.readonly) {
	      field.input.set('readonly', 'readonly');
	    }
	  },
	  /**
	   * [_initDate description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initDate: function _initDate(field, doc, group) {
	    _log.debug('_initDate', field, doc, group);
	    var self = this;
	    var opts = field.opts || {};

	    var format = opts.format || this.options.dateTime.format;

	    var lang = this.options.lang;

	    _moment2.default.lang(lang);
	    //_log.debug(doc[field.name]);

	    this.datePickers = this.datePickers || [];
	    //_log.debug(doc[field.name]);

	    var value = this.getValueFromKey(field.name, doc);

	    var date = (0, _moment2.default)(value).format(format);

	    if (field.mode === 'dateHour') {
	      date = (0, _moment2.default)(value).format('YYYY-MM-DD HH:mm');
	    }

	    if (field.mode === 'hour') {
	      date = (0, _moment2.default)(value).format('YYYY-MM-DD HH:mm');
	    }

	    if (!this.getValueFromKey(field.name, doc)) {
	      date = undefined;
	    }

	    //_log.debug(date);

	    var read = this.isReadOnly(field);

	    var input = new _field2.default({
	      'class': field.clss,
	      type: 'text',
	      name: field.name,
	      text: field.text,
	      value: date,
	      useTextAsLabel: this.options.useTextAsLabel
	    }).inject(group);

	    /*make possible to delete a date*/
	    input.input.addEvents({
	      keyup: function keyup(ev) {
	        if (ev.code === 8) {
	          this.set('value', '');
	          self.doc[field.name] = undefined;
	          self.fireEvent('change');
	        }
	      }
	    });

	    if (read) {
	      input.input.set('readonly', 'readonly');
	    }

	    if (field.klss) {
	      input.addClass(field.klss);
	    }

	    if (field.etat === 'readonly' || this.readonly) {
	      input.input.set('readonly', 'readonly');
	    }

	    if (read) {
	      return;
	    }

	    /*input.input.addEvents({
	        keyup: function() {
	          self.doc[this.get('name')] = this.get('value');
	          self.fireEvent('change', [this.get('name'), this.get('value')]);
	        }
	      });
	    */
	    //_log.debug('-|x-', date);

	    var options = {
	      useFadeInOut: false,
	      //inject: this.element,
	      positionOffset: { x: 5, y: 0 },
	      pickerClass: 'datepicker_bootstrap',
	      format: '%Y/%m/%d',
	      onSelect: function onSelect(value) {
	        //_log.debug('--', self.doc, field.name);
	        self.updateDocKey(field.name, value);
	        //self.doc[field.name] = d;
	        self.fireEvent('change', [field.name, value]);
	      },
	      onShow: function onShow() {
	        _log.debug('picker date show');
	      }
	    };

	    if (field.mode === 'dateHour') {
	      options.timePicker = true;
	      options.format = '%Y-%m-%d %H:%M';
	    }

	    if (field.mode === 'hour') {
	      options.timePicker = true;
	      options.pickOnly = 'time';
	      options.format = '%Y-%m-%d %H:%M';
	    }

	    var datePicker = new Picker.Date(input.input, options);

	    this.datePickers.push(datePicker);
	  },

	  /**
	   * [_initDates description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initDates: function _initDates(field, doc, group) {
	    //_log.debug('_initDates', group);
	    var self = this;

	    if (!doc[field.name]) return;

	    doc[field.name].each(function (event, i) {
	      self.injectDate(field, doc, group, event, i);
	    });

	    var addBtn = new _button2.default({
	      icon: 'icon-plus-circle',
	      name: 'add',
	      type: 'icon-text',
	      klss: 'button-inline',
	      text: 'Ajouter ' + name + '...',
	      emit: 'addDate'
	    }).inject(group).addEvent('addDate', function () {
	      //_log.debug(field.name);
	      self.addDate(field, doc, group);
	    });
	  },

	  /**
	   * [injectDate description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @param  {[type]} event [description]
	   * @param  {[type]} i     [description]
	   * @param  {[type]} add   [description]
	   * @return {[type]}       [description]
	   */
	  injectDate: function injectDate(field, doc, group, event, i, add) {
	    var self = this;

	    var context = {
	      el: group,
	      pos: 'bottom'
	    };

	    if (add) {
	      var elements = group.getChildren();

	      context = {
	        el: elements[elements.length - 1],
	        pos: 'before'
	      };
	    }

	    var line = new Element('div', {
	      'class': 'dates',
	      styles: {
	        position: 'relative'
	      }
	    }).inject(context.el, context.pos);
	    //_log.debug(i, event);
	    var date = (0, _moment2.default)(doc[field.name][i].start.dateTime).format("DD/MM/YYYY HH:mm");
	    //_log.debug(date);
	    var start = new _field2.default({
	      'klass': 'half',
	      type: 'text',
	      name: field.name,
	      text: 'start',
	      value: date,
	      useTextAsLabel: self.options.useTextAsLabel
	    }).inject(line).addClass('half');

	    start.input.addEvents({
	      keyup: function keyup(ev) {
	        //_log.debug(i, this.get('value'));

	        self.doc[field.name][i].start.dateTime = (0, _moment2.default)(this.get('value'), "DD/MM/YYYY HH:mm").toISOString();

	        self.fireEvent('change', [field.name + '.' + i + '.start.dateTime', this.get('value')]);
	      }
	    });

	    date = (0, _moment2.default)(doc[field.name][i].end.dateTime).format("DD/MM/YYYY HH:mm");
	    var end = new _field2.default({
	      'klass': 'half',
	      type: 'text',
	      name: field.name,
	      text: 'end',
	      value: date
	    }).inject(line).addClass('half');

	    end.input.addEvents({
	      keyup: function keyup() {
	        //_log.debug(i, this.get('value'));
	        self.doc[field.name][i].end.dateTime = (0, _moment2.default)(this.get('value'), "DD/MM/YYYY HH:mm").toISOString();
	        self.fireEvent('change', [field.name + '.' + i + '.end.dateTime', this.get('value')]);
	      }
	    });

	    var removeBtn = new _button2.default({
	      icon: 'icon-times-circle',
	      name: 'remove',
	      idx: i,
	      type: 'icon',
	      emit: 'removeDate'
	    }).inject(line).addEvent('click', function () {
	      _log.debug(field.name, this.options.idx);
	      self.removeDate(field, doc, group, this.options.idx, line);
	    }).addClass('button-remove');

	    /*new Picker.Date(end.input, {
	        timePicker: true,
	        positionOffset: {x: 5, y: 0},
	        pickerClass: 'datepicker_dashboard',
	        useFadeInOut: !Browser.ie
	      });
	    */
	  },

	  /**
	   * [addDate description]
	   * @param {[type]} field [description]
	   * @param {[type]} doc   [description]
	   * @param {[type]} group [description]
	   */
	  addDate: function addDate(field, doc, group) {
	    //_log.debug('add date', field, doc);

	    var date,
	        value = this.doc.dates || [],
	        i = 0;

	    if (doc.dates && doc.dates.length > 0) {
	      i = doc.dates.length;
	      date = Object.clone(doc.dates[i - 1]);
	      value.push(date);

	      //_log.debug(doc);
	    } else {
	      var d = new Date().toJSON();

	      date = {
	        "start": {
	          "dateTime": d
	        },
	        "end": {
	          "dateTime": d
	        }
	      };
	      value.push(date);
	    }

	    this.doc[field.name] = value;
	    this.fireEvent('change', [field.name, value]);
	    this.injectDate(field, this.doc, group, date, i, true);
	  },

	  /**
	   * [removeDate description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @param  {[type]} idx   [description]
	   * @param  {[type]} line  [description]
	   * @return {[type]}       [description]
	   */
	  removeDate: function removeDate(field, doc, group, idx, line) {
	    var self = this;

	    if (idx === null) return;
	    //  delete doc.dates[this.session.eventIndex];

	    var i = this.doc.dates.indexOf(this.doc.dates[idx]);
	    //_log.debug('--', i);
	    if (i !== -1) {
	      this.doc.dates.splice(i, 1);
	    }

	    line.destroy();

	    this.doc[field.name] = this.doc.dates;
	    this.fireEvent('change', [field.name, this.doc.dates]);

	    //_log.debug(doc);
	  }

	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	var _moment = __webpack_require__(54);

	var _moment2 = _interopRequireDefault(_moment);

	__webpack_require__(78);

	__webpack_require__(79);

	__webpack_require__(81);

	__webpack_require__(82);

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
/* 78 */
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Picker"] = __webpack_require__(80);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 80 */
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
/* 81 */
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
/* 82 */
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


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view:form-file');

	exports.default = new Class({

	  /**
	   * [_initFile description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initFile: function _initFile(field, doc, group) {
	    var self = this;

	    group.addClass('group-list');

	    //_log.debug('_initList', field.name);

	    var element = group.getPrevious();
	    var name = element.get('html');

	    var read = this.isReadOnly(field);

	    if (!read) var addBtn = new _button2.default({
	      icon: 'icon-plus-circle',
	      name: 'add',
	      type: 'icon-text',
	      klss: 'button-inline',
	      text: 'Ajouter ' + name + '...',
	      emit: 'linkFile'
	    }).inject(group, 'bottom').addEvent('linkFile', function () {
	      _log.debug(field.name);
	      self.fireEvent('linkFile', [self, field.name]);
	    });

	    if (!doc[field.name]) return;

	    var list = new Element('div', {
	      'class': 'form-list'
	    }).inject(group, 'top');

	    doc[field.name].each(function (file, idx) {
	      var item = new Element('div', {
	        html: file.name,
	        'data-id': file._id,
	        'class': 'list-item'
	      }).inject(list);

	      var icon = new Element('span', {
	        'class': 'fa fa-file-o'
	      }).inject(item, 'top');

	      if (!read) var remove = new _button2.default({
	        'clss': 'right',
	        type: 'icon',
	        name: 'deleteItem',
	        icon: 'icon-times-circle',
	        emit: 'remove'
	      }).inject(item, 'top').addEvent('remove', function () {
	        self._removeItem(idx, field.name);
	      });

	      if (!read) item.addEvent('click', function () {
	        list.getChildren().removeClass('item-selected');
	        item.addClass('item-selected');
	      });
	    });
	  },

	  /**
	   * [_removeItem description]
	   * @param  {[type]} idx [description]
	   * @param  {[type]} key [description]
	   * @return {[type]}     [description]
	   */
	  _removeItem: function _removeItem(idx, key) {
	    this.doc[key].splice(idx, 1);
	    this._setInfo(this.doc);
	    this.fireEvent('change', [key, this.doc[key]]);
	  }

	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _moment = __webpack_require__(54);

	var _moment2 = _interopRequireDefault(_moment);

	var _date = __webpack_require__(77);

	var _date2 = _interopRequireDefault(_date);

	var _hour = __webpack_require__(85);

	var _hour2 = _interopRequireDefault(_hour);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view:form-hour');

	exports.default = new Class({

	  /**
	   * [_initHour description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initHour: function _initHour(field, doc, group) {
	    _log.debug('_initHour', field.name, field.read, doc);

	    var self = this;

	    var value = this.getValueFromKey(field.name, doc);

	    /*if (!value || value == 'Invalid date') {
	      value = moment().toISOString();
	      if (field.mode != 'dateHour') value = moment().hour(0).minute(0).toISOString();
	      this.updateDocKey(field.name, value);
	    }*/

	    //_log.debug('hour', field.name);

	    //var tmp = field.name;

	    var segment = new Element('div', {
	      class: 'ui-segment field-datehour'
	    }).inject(group);

	    if (field.klss) {
	      segment.addClass(field.klss);
	    }

	    var read = this.isReadOnly(field);

	    if (field.mode === 'dateHour') {
	      //check if end date is not greater that start date
	      if (value && field.name.indexOf('end') !== -1) {
	        var start = this.getValueFromKey(field.name.replace('end', 'start'), doc);
	        start = (0, _moment2.default)(start).seconds(0).milliseconds(0).toISOString();
	        var end = (0, _moment2.default)(value).seconds(0).milliseconds(0).toISOString();

	        if (start > end) {
	          var h = (0, _moment2.default)(end).get('hours');
	          var m = (0, _moment2.default)(end).get('minutes');
	          var d = (0, _moment2.default)(start).set('h', h).set('m', m).toISOString();
	          value = (0, _moment2.default)(d).toISOString();
	        }
	      }

	      var dateControl = new _date2.default({
	        'class': 'txt',
	        klss: 'half',
	        type: 'text',
	        name: field.name,
	        text: field.text,
	        value: value,
	        read: read
	      }).inject(segment);

	      this.field[field.name] = dateControl;
	    }

	    var klss = '';
	    if (field.mode === 'dateHour') {
	      klss = 'half';
	    }

	    var hourControl = new _hour2.default({
	      'class': 'txt',
	      klss: klss,
	      type: 'text',
	      name: field.name,
	      text: field.text,
	      date: value,
	      read: read
	    }).inject(segment);

	    //var original_date = value;

	    //_log.debug('input class', input);

	    hourControl.addEvents({
	      change: function change(date) {
	        var hours = (0, _moment2.default)(date).get('hours');
	        var minutes = (0, _moment2.default)(date).get('minutes');
	        var d = self.getValueFromKey(field.name, doc);
	        var val = (0, _moment2.default)(d).set('h', hours).set('m', minutes).toISOString();

	        self.updateDocKey(field.name, val);
	        self.fireEvent('change', [field.name, date]);
	      }
	    });

	    if (field.mode === 'dateHour') {
	      dateControl.addEvents({
	        change: function change(date) {
	          var oldDate = self.getValueFromKey(field.name, doc);
	          var newDate;

	          if (oldDate) {
	            var hours = (0, _moment2.default)(oldDate).get('hours');
	            var minutes = (0, _moment2.default)(oldDate).get('minutes');
	            newDate = (0, _moment2.default)(date).set('h', hours).set('m', minutes).toISOString();
	          } else {
	            newDate = (0, _moment2.default)(date).toISOString();
	          }

	          //_log.debug('--', newDate);
	          //check if end date is not greater that start date
	          var start, end, oldDate;

	          if (field.name.indexOf('start') !== -1) {
	            start = (0, _moment2.default)(newDate).toISOString();
	            oldDate = self.getValueFromKey(field.name, doc);
	            end = self.getValueFromKey(field.name.replace('start', 'end'), doc);
	          }

	          if (field.name.indexOf('end') !== -1) {
	            end = (0, _moment2.default)(newDate).toISOString();
	            oldDate = self.getValueFromKey(field.name, doc);
	            start = self.getValueFromKey(field.name.replace('end', 'start'), doc);
	          }

	          //_log.debug('dates...', start, end, start >= end, oldDate);

	          if (start && end && start > end) {
	            if (field.name.indexOf('start') !== -1) {
	              var k = field.name.replace('start', 'end');
	              if (self.field[k]) self.field[k].set(newDate);
	              dateControl.set(newDate);
	              self.updateDocKey(k, (0, _moment2.default)(newDate).toISOString());
	            } else {
	              dateControl.set(oldDate);
	              self.updateDocKey(field.name, oldDate);
	              return;
	            }
	          }

	          hourControl.set(newDate);
	          self.updateDocKey(field.name, newDate);
	          self.fireEvent('change', [field.name, newDate]);
	        }
	      });
	    }

	    if (read) {
	      hourControl.input.set('readonly', 'readonly');
	    }

	    if (field.klss) {
	      hourControl.addClass();
	    }

	    if (field.etat === 'readonly' || this.readonly) {
	      hourControl.input.set('readonly', 'readonly');
	    }
	  }

	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _moment = __webpack_require__(54);

	var _moment2 = _interopRequireDefault(_moment);

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _field2.default,

	  options: {
	    name: 'hour',
	    base: 'control'

	  },

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {

	    //create a new div as input element
	    this.parent();

	    //_log.debug(this.element, this.options.read);

	    if (!this.options.read) {
	      this.input.addClass('mask');
	      this.input.set('alt', '{ "type": "fixed", "mask": "99h99" }');
	    }

	    this.element.addClass('field-hour');

	    this.date = this.options.value || this.options.date;

	    var time;
	    if (this.date) {
	      var tmp = new Date(this.date);
	      time = this.convertDateTimeToHour(tmp);
	    }

	    this.input.set('value', time);

	    this.input.set('type', 'text');
	    this.input.addClass('control-hour');

	    var self = this;

	    this.addEvent('injected', function () {
	      self._addControls();
	    });

	    //this._initMenu();
	    //this._initWheel();
	  },

	  /**
	   * [_addControls description]
	   */
	  _addControls: function _addControls() {
	    var self = this;

	    var controls = new Element('span', {
	      'class': 'hour-controls'
	    }).inject(this.input, 'after');

	    this.plus = new Element('span', {
	      'class': 'icon-font mdi-navigation-expand-less icon-more'
	    }).inject(controls);

	    this.plus.addEvent('click', function () {
	      var tmp = new Date(self.date).increment('minute', '15').toJSON();
	      self.date = new Date(self.date).increment('minute', '15');
	      var time = self.convertDateTimeToHour(tmp);
	      self.input.set('value', time);
	      self.fireEvent('change', self.date);
	    });

	    this.minus = new Element('span', {
	      'class': 'icon-font mdi-navigation-expand-more icon-less'
	    }).inject(controls);

	    this.minus.addEvent('click', function () {
	      var tmp = new Date(self.date).decrement('minute', '15').toJSON();
	      self.date = new Date(self.date).decrement('minute', '15');
	      var time = self.convertDateTimeToHour(tmp);
	      self.input.set('value', time);
	      self.fireEvent('change', self.date);
	    });

	    //_log.debug('plus', self.element, self.minus);
	  },

	  /**
	   * [convertDateTimeToHour description]
	   * @param  {[type]} dateTime [description]
	   * @return {[type]}          [description]
	   */
	  convertDateTimeToHour: function convertDateTimeToHour(dateTime) {
	    var date = new Date(dateTime);
	    var h = date.getHours().toString();
	    var m = date.getMinutes().toString();

	    if (h.length === 1) {
	      h = '0' + h;
	    }
	    if (m.length === 1) {
	      m = '0' + m;
	    }

	    return h + 'h' + m;
	  },

	  /**
	   * Set element state
	   * @param {string} state
	   */
	  setState: function setState(state) {
	    this.parent(state);
	  },

	  /**
	   * Set control relative behavior (blur and focus)
	   * @return {void}
	   */
	  _initEvents: function _initEvents() {
	    var self = this;

	    if (this.options.read) {
	      return;
	    }

	    this.input.addEvents({
	      keyup: function keyup() {
	        var hours = this.get('value').split('h');

	        self.date = new Date(self.date);

	        self.date.setHours(hours[0]);
	        self.date.setMinutes(hours[1]);
	        self.date.setSeconds(0);

	        self.fireEvent('change', self.date);
	      },
	      mousedown: function mousedown(e) {
	        //e.stopPropagation();
	        //this.focus();
	      },
	      focus: function focus(e) {
	        if (!this.get('readonly')) {
	          self.setState('focus', e);
	        }
	      },
	      blur: function blur(e) {
	        self.setState(null, e);
	      }
	    });

	    this.addEvents({
	      blur: this.setState.bind(this, 'default'),
	      focus: this.setState.bind(this, 'focus')
	    });
	  },

	  /**
	   * [_onKeyUp description]
	   * @param  {[type]} e [description]
	   * @return {[type]}   [description]
	   */
	  _onKeyUp: function _onKeyUp() {
	    //this.fireEvent('change', this.get('value'));
	  },

	  /**
	   * [set description]
	   * @param {[type]} name  [description]
	   * @param {[type]} value [description]
	   */
	  setOld: function setOld(name, value) {
	    this.element.set(name, value);
	  },

	  /**
	   * [set description]
	   * @param {[type]} date [description]
	   */
	  set: function set(date) {
	    //_log.debug('set', date);

	    this.date = (0, _moment2.default)(date).toISOString();

	    var time = this.convertDateTimeToHour(this.date);

	    this.input.set('value', time);

	    this.fireEvent('change', this.date);
	  }

	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _date = __webpack_require__(77);

	var _date2 = _interopRequireDefault(_date);

	var _hour = __webpack_require__(85);

	var _hour2 = _interopRequireDefault(_hour);

	var _moment = __webpack_require__(54);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-form-hours');

	exports.default = new Class({

	  /**
	   * [_initHours description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initHours: function _initHours(field, doc, group) {
	    _log.debug('_initHours', field);
	    var self = this;

	    var lang = this.options.lang;
	    _moment2.default.lang(lang);
	    //_log.debug(doc[field.name]);

	    this.datePickers = this.datePickers || [];
	    //_log.debug(doc, field.name);

	    var value = this.getValueFromKey(field.name, doc);

	    //var date = moment(value.start).format('YYYY-MM-DD');

	    //_log.debug('date', date);

	    var wrap = new Element('div', {
	      'class': 'ui-hours ui-field'
	    }).inject(group);

	    var dateControl = new _date2.default({
	      klss: 'field-date',
	      type: 'text',
	      name: field.name,
	      text: field.text,
	      value: value.start
	    }).inject(wrap);

	    var startHour = new _hour2.default({
	      type: 'text',
	      name: field.name,
	      text: field.text,
	      value: value.start
	    }).inject(wrap);

	    var endHour = new _hour2.default({
	      'class': 'half',
	      type: 'text',
	      name: field.name,
	      text: field.text,
	      value: value.end
	    }).inject(wrap);

	    dateControl.addEvent('change', function (date) {
	      //_log.debug('date', date);
	      var hour, minutes, d;

	      d = doc[field.name].start;
	      hour = (0, _moment2.default)(d).get('hours');
	      minutes = (0, _moment2.default)(d).get('minutes');
	      doc[field.name].start = (0, _moment2.default)(date).set('h', hour).set('m', minutes).set('s', 0).toISOString();

	      d = doc[field.name].end;
	      hour = (0, _moment2.default)(d).get('hours');
	      minutes = (0, _moment2.default)(d).get('minutes');
	      doc[field.name].end = (0, _moment2.default)(date).set('h', hour).set('m', minutes).set('s', 0).toISOString();
	    });

	    startHour.addEvent('change', function (date) {
	      //_log.debug('startHour', date);
	      var hours = (0, _moment2.default)(date).get('hours');
	      var minutes = (0, _moment2.default)(date).get('minutes');
	      doc[field.name].start = (0, _moment2.default)(doc[field.name].start).set('h', hours).set('m', minutes).toISOString();

	      self.fireEvent('change', [field.name, date]);
	    });

	    endHour.addEvent('change', function (date) {
	      //_log.debug('endHour', date);
	      var hours = (0, _moment2.default)(date).get('hours');
	      var minutes = (0, _moment2.default)(date).get('minutes');
	      doc[field.name].end = (0, _moment2.default)(doc[field.name].end).set('h', hours).set('m', minutes).toISOString();

	      self.fireEvent('change', [field.name, date]);
	    });

	    var read = this.isReadOnly(field);

	    if (read) {
	      dateControl.input.set('readonly', 'readonly');
	    }

	    if (field.klss) {
	      wrap.addClass(field.klss);
	    }

	    if (field.etat == 'readonly' || this.readonly) {
	      dateControl.input.set('readonly', 'readonly');
	    }
	  }

	});

/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('view:form-iframe');

	exports.default = new Class({

	  options: {
	    iframe: {}
	  },

	  /**
	   * [_initIframe description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initIframe: function _initIframe(field, doc, group) {
	    var value = this.getValueFromKey(field.name, doc);

	    var iframe = new IFrame({
	      'class': 'txt',
	      name: field.name,
	      styles: {
	        height: 1000
	      }
	    }).inject(group);

	    var win = iframe.contentWindow,
	        document = win.document;

	    document.open();
	    document.write(value);
	  }

	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view:form-items');

	exports.default = new Class({

	  _initItem: function _initItem(field, doc, group) {
	    var self = this;

	    group.addClass('group-list');

	    //_log.debug('_initList', field.name);

	    if (!doc[field.name]) {
	      doc[field.name] || [];
	    }

	    var element = group.getPrevious();
	    var name = element.get('html');

	    var addBtn = new _button2.default({
	      icon: 'icon-plus-circle',
	      name: 'add',
	      type: 'icon-text',
	      klss: 'button-inline',
	      text: 'Ajouter ' + name + '...',
	      emit: 'linkItems'
	    }).inject(group, 'bottom').addEvent('linkItems', function () {
	      //_log.debug(field.name);
	      self._newLineEditor(group, doc);
	      self.fireEvent('linkItems', [doc[field.name], field.name]);
	      //self.fireEvent('change', 'items');
	    });

	    var list = new Element('div', {
	      'class': 'list-content'
	    }).inject(group, 'top');

	    var date, item, line;

	    doc[field.name].each(function (info, idx) {

	      line = new Element('div', {
	        class: 'list-item'
	      }).inject(list);

	      item = new Element('div', {
	        html: info.name,
	        'class': 'ui-field half'
	      }).inject(line);

	      /*item = new Element('div', {
	        html: '',
	        'class': 'ui-field fourth'
	      }).inject(line);
	       item = new Element('div', {
	        html: '',
	        'class': 'ui-field fourth'
	      }).inject(line);*/

	      var remove = new _button2.default({
	        'clss': 'right',
	        type: 'icon',
	        name: 'deleteItem',
	        icon: 'icon-times-circle',
	        emit: 'remove'
	      }).inject(line, 'top').addEvent('remove', function () {
	        self._removeItem(idx, field.name);
	      });

	      item.addEvent('click', function () {
	        list.getChildren().removeClass('item-selected');
	        item.addClass('item-selected');
	      });
	    });
	  },

	  _newLineEditor: function _newLineEditor(group, doc) {
	    var self = this;

	    var list = new Element('div', {
	      'class': 'list-content'
	    }).inject(group, 'top');

	    var input = new _field2.default({
	      type: 'text'
	    }).inject(list);

	    input.input.addEvents({
	      keydown: function keydown(ev) {
	        if (ev.key == 'enter') {
	          ev.stop();
	          doc.items = doc.items || [];
	          doc.items.unshift({ name: this.value });
	          self._setInfo(doc);
	        }
	      },
	      blur: function blur() {
	        this.destroy();
	      }
	    });

	    input.input.focus();
	  },

	  /**
	   * [_removeItem description]
	   * @param  {[type]} idx [description]
	   * @param  {[type]} key [description]
	   * @return {[type]}     [description]
	   */
	  _removeItem: function _removeItem(idx, key) {
	    this.doc[key].splice(idx, 1);
	    this._setInfo(this.doc);
	    this.fireEvent('change', ['key', this.doc[key]]);
	  }

	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('core-module-dragdrop').defineLevel();

	exports.default = new Class({

	  /**
	   * To display a list of objects
	   *
	    opts: {
	      type: "keys",
	      display: ["name"]
	    }
	     [{
	      "name": "text1",
	    }, {
	      "name": "text2",
	    }]
	   *
	   * To display a list key inside a object
	   *
	    opts: {
	      type: "list",
	      display: ["name"]
	    }
	     {
	      "_list": [
	        "item1",
	        "item2"
	      ],
	      "item1": {
	        "name": "name"
	      },
	      "item2": {
	        "name": "age"
	      }
	    }
	   *
	   * @param  {object} field
	   * @param  {object} info
	   * @param  {DOM element} group
	   * @return {void}
	   */
	  _initList: function _initList(field, info, group) {
	    //_log.debug('_initList', field, info, group);
	    var self = this;

	    group.addClass('group-list');

	    info[field.name] = info[field.name] || [];

	    field.opts = field.opts || {};

	    var list = new Element('div', {
	      'class': 'form-list list-' + field.opts.klss
	    }).inject(group, 'top');

	    var obj = info[field.name];
	    var target;

	    if (field.opts.type === 'list') {
	      var fields = [];

	      for (var i = 0; i < obj.length; i++) {
	        fields.push(info[obj[i]]);
	      }

	      target = fields;
	    } else if (field.opts.type === 'keys') {
	      target = obj;
	    }

	    this._displayLine(target, list, field, info);

	    var read = this.isReadOnly(field);

	    if (!read) {
	      new _button2.default({
	        icon: 'icon-plus-circle',
	        name: 'add',
	        klss: 'button-inline',
	        type: 'icon-text',
	        text: 'add...',
	        emit: 'attachItem'
	      }).inject(group).addEvent('attachItem', function () {
	        if (field.opts.type === 'list') {
	          var name = 'item' + self.doc[field.name].length;

	          self.doc[field.name].push(name);
	          self.doc[name] = {};

	          self._setInfo(self.doc, self.originalMask);
	        } else if (field.opts.type === 'keys') {

	          var display = field.opts.display;
	          var o = {};
	          for (var i = 0; i < display.length; i++) {
	            var d = display[i];

	            o[d] = '';
	          }

	          self.doc[field.name].push(o);

	          self._setInfo(self.doc, self.originalMask);
	        }
	      });
	    }
	  },

	  /**
	   * [_displayLine description]
	   * @param  {[type]} list  [description]
	   * @param  {[type]} el    [description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} info  [description]
	   * @return {[type]}       [description]
	   */
	  _displayLine: function _displayLine(list, el, field, info) {
	    //_log.debug('_displayLine', list);
	    for (var j = 0; j < list.length; j++) {
	      var item = list[j];

	      var line = new Element('div', {
	        class: 'list-item',
	        'data-idx': j
	      }).inject(el);

	      this._displayItems(item, line, field, info);

	      line.addEvent('dblclick', this.fireEvent.bind(this, 'edit' + field.name.capitalize(), item));
	    }
	  },

	  /**
	   * [_displayItems description]
	   * @param  {[type]} item  [description]
	   * @param  {[type]} line  [description]
	   * @param  {[type]} field [description]
	   * @return {[type]}       [description]
	   */
	  _displayItems: function _displayItems(item, line, field, info) {
	    var self = this;
	    var display = field.opts.display;

	    for (var i = 0; i < display.length; i++) {
	      var d = display[i];

	      this._createEl(item, d, field, line);
	    }

	    var read = this.isReadOnly(field);

	    if (!read || field.opts.remove) {

	      new _button2.default({
	        'clss': 'right',
	        type: 'icon',
	        name: 'moveup',
	        icon: 'icon-times-circle',
	        emit: 'remove'
	      }).inject(line, 'top').addEvent('press', function () {
	        //self._moveRelatedItem(type, id, 'up');
	        self.fireEvent('relatedItemRUp', info._id);
	      });

	      new _button2.default({
	        'clss': 'right',
	        type: 'icon',
	        name: 'movedown',
	        icon: 'icon-times-circle',
	        emit: 'remove'
	      }).inject(line, 'top').addEvent('press', function () {
	        //self._moveRelatedItem(type, id, 'down');
	        self.fireEvent('relatedItemRUp', info._id);
	      });

	      new _button2.default({
	        'clss': 'right',
	        type: 'icon',
	        name: 'clear',
	        icon: 'icon-times-circle',
	        emit: 'remove'
	      }).inject(line, 'top').addEvent('remove', function () {
	        self._removeItems(item, field);
	        self.fireEvent('relatedItemRemoved', info._id);
	      });
	    }
	  },

	  /**
	   * [_createEl description]
	   * @param  {[type]} item  [description]
	   * @param  {[type]} d     [description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} line  [description]
	   * @return {[type]}       [description]
	   */
	  _createEl: function _createEl(item, d, field, line) {
	    var self = this;

	    var opts = {
	      value: item[d],
	      'klss': 'item-' + d,
	      type: 'text',
	      name: d,
	      text: d
	    };

	    var read = this.isReadOnly(field);

	    if (!read) {
	      opts.contenteditable = 'true';
	    }

	    var el = new _field2.default(opts).inject(line);

	    //var el = new Element('div', opts).inject(line);

	    el.input.addEvents({
	      keyup: function keyup() {
	        _log.debug('keyup', item, d, this.get('value'));
	        item[d] = this.get('value');

	        self.fireEvent('change', [item[d], this.get('value')]);
	      }
	    });

	    /*el.addEvent("input", function() {
	      _log.debug('................');
	      item[d] = this.get('text');
	    });*/
	  },

	  /**
	   * [_removeItems description]
	   * @param  {[type]} item  [description]
	   * @param  {[type]} field [description]
	   * @return {[type]}       [description]
	   */
	  _removeItems: function _removeItems(item, field) {
	    var list = this.doc[field.name];

	    if (field.opts.type === 'list') {
	      for (var key in this.doc) {
	        if (this.doc[key] === item) {
	          var idx = this.doc[field.name].indexOf(key);
	          this.doc[field.name].splice(idx, 1);
	          delete this.doc[key];
	        }
	      }
	    } else {
	      for (var i = 0; i < list.length; i++) {
	        if (list[i] === item) {
	          list.splice(i, 1);
	        }
	      }
	    }

	    this._setInfo(this.doc, this.originalMask);
	    this.fireEvent('change', []);
	  }

	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _moment = __webpack_require__(54);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view:form-logs');

	exports.default = new Class({

	  /**
	   * [_initLogs description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initLogs: function _initLogs(field, doc, group) {

	    group.addClass('group-list');

	    if (!doc[field.name]) {
	      return;
	    }

	    var list = new Element('div', {
	      'class': 'form-list list-logs'
	    }).inject(group, 'top');

	    var date, item, line;

	    var dateFormat = this.options.dateTime.format;

	    doc[field.name].each(function (log, idx) {
	      date = (0, _moment2.default)(log.date).format(dateFormat);

	      line = new Element('div', {
	        class: 'list-item'
	      }).inject(list);

	      item = new Element('div', {
	        html: date,
	        'data-id': log._id,
	        'class': 'item-date'
	      }).inject(line);

	      /*item = new Element('div', {
	        html: log.username,
	        'data-id': log._id,
	        'class': 'ui-field fourth'
	      }).inject(line);*/

	      item = new Element('div', {
	        html: log.action,
	        'data-id': log._id,
	        'class': 'item-desc'
	      }).inject(line);

	      item.addEvent('click', function () {
	        list.getChildren().removeClass('item-selected');
	        item.addClass('item-selected');
	      });
	    });
	  }

	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dialog = __webpack_require__(60);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-form-validator');

	exports.default = new Class({

	  /**
	   * show errors
	   * @param  {Object} info
	   * @param  {Object} obj
	   * @return {void}
	   */
	  showErrors: function showErrors(info, obj) {
	    'use strict';

	    _log.debug('showErrors', info, obj);

	    if (info._id !== this.doc._id) {
	      return;
	    }

	    var self = this;
	    var error = obj.errors;
	    this.errorEls = this.errorEls || [];

	    for (var i = 0; i < this.errorEls.length; i++) {
	      this.errorEls[i].removeClass('field-error');
	    }

	    this.errorEls = [];

	    var fields = [];
	    var text = '';
	    error.map(function (item) {
	      //_log.debug('error', item, field);

	      //fields.push(item.params.key || item.dataPath.substring(1));
	      var path = item.dataPath.substring(1);
	      path = path.replace('/', '.');
	      var key = item.params.key;
	      var field = key;
	      if (path && key) {
	        field = path + '.' + key;
	      } else if (!key) {
	        field = path;
	      }

	      fields.push(field);

	      var fieldEl = self.field[field];
	      if (fieldEl) {
	        fieldEl.setError(item.message);
	      }

	      text += item.message + '<br>';
	    });

	    //_log.debug('fields', fields);

	    var errorsWithoutEl = [];

	    for (var j = 0; j < fields.length; j++) {
	      var el = this.element.getElement('[for=' + fields[j] + ']');
	      if (el) {
	        this.errorEls.push(el.parentNode);
	        el.parentNode.addClass('field-error');
	      } else {
	        errorsWithoutEl.push(fields[j]);
	      }
	    }

	    if (errorsWithoutEl.length) {
	      new _dialog2.default({
	        message: 'There is a problem with the following fields: ' + errorsWithoutEl.join(' '),
	        alert: true
	      });
	    }
	  }

	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mustache = __webpack_require__(32);

	var _mustache2 = _interopRequireDefault(_mustache);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view:form-product');

	exports.default = new Class({

	  /**
	   * [_initProductList description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initProductList: function _initProductList(field, doc, group) {
	    var self = this;

	    if (!doc[field.name]) {
	      return;
	    }

	    var list = new Element('div', {
	      'class': 'list-content'
	    }).inject(group);

	    var template = '<span class="qty">{{quantity}}</span> ' + '<span class="name">{{name}}</span> ' + '<span class="price">{{price}}</span> ' + '<span class="brut">{{brut}}</span> ' + '<span class="disc_amount">-{{discount.amount}}</span> ' + '<span class="disc_percent">({{discount.percent}}%)</span> ' + '<span class="net">{{net}}</span>';

	    doc[field.name].each(function (link, i) {
	      var html = _mustache2.default.render(template, link);
	      var item = new Element('div', {
	        html: html,
	        'data-id': link._id,
	        'class': 'ui-list-item product-list'
	      }).inject(list);

	      item.addEvent('click', function () {
	        if (self.list[field.name]) {
	          self.list[field.name].removeClass('ui-selected');
	        }

	        item.addClass('ui-selected');
	        self.list[field.name] = i;
	      });
	    });
	  }

	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mustache = __webpack_require__(32);

	var _mustache2 = _interopRequireDefault(_mustache);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view:form-reference');

	exports.default = new Class({

	  /**
	   * Initalize Reference
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initReference: function _initReference(field, doc, group) {
	    var opts = this.options;

	    if (!doc[field.name]) {
	      return;
	    }

	    var reference = new Element('div', {
	      'class': 'list-content'
	    }).inject(group);

	    this.renderItem(reference, doc[field.name], opts.tmpl[field.name]);
	  },

	  /**
	   * [renderItem description]
	   * @param  {[type]} item [description]
	   * @param  {[type]} data [description]
	   * @param  {[type]} tmpl [description]
	   * @return {[type]}      [description]
	   */
	  renderItem: function renderItem(item, data, tmpl) {
	    var opts = this.options;

	    tmpl = tmpl || opts.tmpl;

	    tmpl = tmpl || this.tmpl;
	    data = data || this.docs;

	    var content = _mustache2.default.render(tmpl, data);

	    item.set('html', content);
	  }

	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _moment = __webpack_require__(54);

	var _moment2 = _interopRequireDefault(_moment);

	var _minimalUtils = __webpack_require__(14);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	var _dropdown = __webpack_require__(64);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _check = __webpack_require__(69);

	var _check2 = _interopRequireDefault(_check);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Related information
	 * @description
	 *  Info Structure:
	 *    id: Unique info id
	 *  The options accept:
	 *    unique: If set to true will be possible
	 *            just attach a document in this key
	 */
	var _log = __debug('view:form-related').defineLevel();

	exports.default = new Class({

	  /**
	   * init related
	   * @param  {Object} field
	   * @param  {Object} info
	   * @param  {DOMElement} group
	   * @return {void}
	   */
	  _initRelated: function _initRelated(field, info, group) {
	    _log.debug('_initRelated', field, info, group);

	    group.addClass('group-list');

	    var prop = {
	      name: field.text || field.name,
	      type: field.opts.type,
	      field: field,
	      info: info,
	      group: group
	    };

	    this._initRelatedList(prop);
	    this._initRelatedAddControls(prop);
	  },

	  /**
	   * init related list
	   * @param  {Object} prop
	   * @param  {DOMElement} list
	   * @return {void}
	   */
	  _initRelatedList: function _initRelatedList(prop, list) {
	    var self = this;
	    var fieldName = prop.field.name;

	    _log.debug('_initRelatedList', fieldName, items);

	    list = list || new Element('div', {
	      'class': 'ui-list form-list'
	    }).inject(prop.group);

	    var items = this.getValueFromKey(fieldName, this.doc);
	    if (typeOf(items) !== 'array') {
	      items = [];
	      this.updateDocKey(fieldName, items);
	    }

	    for (var i = 0; i < items.length; i++) {
	      var item = items[i];
	      this._initRelatedItem(prop, item, list);
	    }

	    if (!this.relatedListEvents) {
	      this.relatedListEvents = true;
	      this.addEvent('change:' + fieldName, function () {
	        list.empty();
	        self._initRelatedList(prop, list);
	      });
	    }
	  },

	  /**
	   * init related add controls
	   * @param  {Object} prop
	   * @return {void}
	   */
	  _initRelatedAddControls: function _initRelatedAddControls(prop) {
	    _log.debug('_initRelatedAddControls', prop);

	    var self = this;
	    var type = prop.type;
	    var field = prop.field;
	    var group = prop.group;

	    var read = this.isReadOnly(field);

	    if (!read && prop.field.opts.add !== false) {
	      var addBtn = new _button2.default({
	        icon: 'add',
	        name: 'add',
	        type: 'icon-text',
	        klss: 'button-inline',
	        text: 'Ajouter ' + type + '...'
	      }).inject(group).addEvent('press', function () {
	        if (field.emit) {
	          self.fireEvent(field.emit);
	        } else {
	          self.chooseRelated(field.name, field.opts);
	        }
	      });

	      addBtn.icon.addClass('mdi-av-playlist-add');
	    }
	  },

	  /**
	   * init related item
	   * @param  {Object} prop
	   * @param  {Object} related
	   * @param  {DOMElement} list
	   * @return {void}
	   */
	  _initRelatedItem: function _initRelatedItem(prop, related, list) {
	    _log.debug('_initRelatedItem', prop, related);

	    if (!related) {
	      return;
	    }

	    var field = prop.field;

	    var info = related;

	    if (related.info && typeof related.info !== 'string') {
	      info = related.info;
	    }

	    var item = new Element('div', {
	      'data-id': info._id,
	      'class': 'ui-item list-item'
	    }).inject(list);

	    // new ButtonControl({
	    //  name: field.opts.type,
	    //  icon: mnml.icon.font[field.opts.type],
	    // }).inject(item, 'top');

	    var display = field.opts.keys.display || [];

	    for (var i = 0; i < display.length; i++) {
	      var displayKey = display[i];

	      _log.debug('displayKey', displayKey, field.opts.keys[displayKey]);

	      var key = info[displayKey] || related.relation[displayKey];

	      //if (!key) continue;

	      if (key && field.opts.keys[displayKey] && field.opts.keys[displayKey].type === 'date') {
	        var format = field.opts.keys[displayKey].format || 'YYYY-MM-DD HH:mm';
	        key = (0, _moment2.default)(key).format(format);
	      }

	      field.opts.keys[displayKey] = field.opts.keys[displayKey] || {};

	      var text = field.opts.keys[displayKey].text || displayKey;

	      new _field2.default({
	        type: 'text',
	        name: displayKey,
	        text: text,
	        value: key,
	        read: true
	      }).inject(item);

	      /*new Element('span', {
	        title: key,
	        'class': 'ui-key key-' + displayKey,
	        html: key
	      }).inject(item);*/
	    }

	    this._initRelatedCustomList(item, related, prop);

	    var read = this.isReadOnly(field);

	    if (!read) {
	      this._initRelatedItemControls(item, related, prop);
	    }
	  },

	  /**
	   * [_initRelatedCustomList description]
	   * @param  {DOMElement} item
	   * @param  {Object} related
	   * @param  {Object} prop
	   * @return {void}
	   */
	  _initRelatedCustomList: function _initRelatedCustomList(item, related, prop) {
	    _log.debug('_initRelatedCustomList', item, related, prop);

	    var customs = prop.field.opts.keys.relation;

	    if (!customs) {
	      return;
	    }

	    _log.debug('customs', customs);

	    for (var j = 0; j < customs.length; j++) {
	      var custom = customs[j];
	      this._initRelatedCustomKey(item, custom, related, prop);
	    }
	  },

	  /**
	   * [_initRelatedCustomKey description]
	   * @param  {[type]} item    [description]
	   * @param  {[type]} custom  [description]
	   * @param  {[type]} related [description]
	   * @param  {[type]} prop    [description]
	   * @return {[type]}         [description]
	   */
	  _initRelatedCustomKey: function _initRelatedCustomKey(item, custom, related, prop) {
	    _log.debug('_initRelatedCustomKey', item, custom, related, prop);

	    var self = this;
	    var field = prop.field;

	    var value = this.getValueFromKey(custom, related.relation);

	    var key = field.opts.keys[custom] || {};

	    if (key.type === 'dropdown') {
	      //_log.debug('dropdown', related, related.relation, custom);
	      var dropdown = new _dropdown2.default({
	        name: custom,
	        value: related.relation[custom],
	        list: key.list,
	        read: this.isReadOnly(key)
	      }).inject(item);

	      dropdown.addEvent('change', function (val) {
	        related.relation[custom] = val;
	        self.fireEvent('change', [this.get('name'), val]);
	      });
	    } else if (key.type === 'check') {
	      var check = new _check2.default({
	        name: custom,
	        value: related.relation[custom] || key.default || false,
	        read: this.isReadOnly(key)
	      }).inject(item);

	      check.addEvent('change', function (val) {
	        related.relation[custom] = val;
	        self.fireEvent('change', [related.relation[custom], val]);
	      });
	    } else {
	      var input = new _field2.default({
	        //name: prop.field.name + '.' + related.info._id + '.' + custom,
	        name: custom,
	        text: custom,
	        type: 'text',
	        value: value || '',
	        klss: 'field-custom'
	      }).inject(item);

	      input.input.addEvents('keyup', function () {
	        //if (field.read) return;
	        var val = this.get('value');

	        if (this.get('value') !== value) {
	          related.relation = related.relation || {};
	          related.relation[custom] = val;
	          self.fireEvent('change', [this.get('name'), val]);
	        }
	      });

	      if (this.isReadOnly(key)) {
	        input.input.set('readonly', 'readonly');
	        input.input.set('tabindex', '-1');
	      }
	    }
	  },

	  /**
	   * [_initRelatedItemControls description]
	   * @param  {[type]} item    [description]
	   * @param  {[type]} related [description]
	   * @param  {[type]} prop    [description]
	   * @return {[type]}         [description]
	   */
	  _initRelatedItemControls: function _initRelatedItemControls(item, related, prop) {
	    _log.debug('_initRelatedItemControls', prop.field.opts.keys._controls);

	    if (prop.field.read || this.readonly) {
	      return;
	    }

	    var infoRelated = related.info || related;

	    var self = this;
	    var id = infoRelated._id;
	    var fieldName = prop.field.name;
	    var info = prop.info;

	    var toolbar = new Element('div', {
	      class: 'ui-toolbar'
	    }).inject(item);

	    var controls = prop.field.opts.keys._controls;

	    if (controls) {
	      for (var i = 0; i < controls.length; i++) {
	        var ctr = controls[i];

	        var opts = prop.field.opts.keys[ctr];

	        this._initRelatedListControls(toolbar, opts, related);
	      }
	    }

	    new _button2.default({
	      type: 'icon',
	      name: 'moveup',
	      title: 'moveup',
	      icon: 'moveup',
	      emit: 'moveup'
	    }).inject(toolbar).addEvent('press', function () {
	      self._moveRelatedItem(fieldName, related, 'up');
	      self.fireEvent('relatedItemRUp', info._id);
	    });

	    new _button2.default({
	      type: 'icon',
	      name: 'movedown',
	      title: 'movedown',
	      icon: 'movedown',
	      emit: 'movedown'
	    }).inject(toolbar).addEvent('press', function () {
	      self._moveRelatedItem(fieldName, related, 'down');
	      self.fireEvent('relatedItemRUp', info._id);
	    });

	    new _button2.default({
	      type: 'icon',
	      name: 'clear',
	      title: 'remove',
	      icon: 'clear',
	      emit: 'remove'
	    }).inject(toolbar).addEvent('remove', function () {
	      self._removeRelatedItem(fieldName, id);
	      self.fireEvent('relatedItemRemoved', info._id);
	    });
	  },

	  /**
	   * [_initRelatedListControls description]
	   * @param  {[type]} toolbar [description]
	   * @param  {[type]} opts    [description]
	   * @param  {[type]} related [description]
	   * @return {[type]}         [description]
	   */
	  _initRelatedListControls: function _initRelatedListControls(toolbar, opts, related) {
	    _log.debug('_initRelatedListControls');

	    var self = this;

	    new _button2.default(opts).inject(toolbar).addEvent('press', function () {
	      _log.debug('fireEvent', 'related' + opts.name.capitalize());
	      self.fireEvent('related' + opts.name.capitalize(), related);
	    });
	  },

	  /**
	   * [chooseRelated description]
	   * @param  {[type]} name [description]
	   * @param  {[type]} opts [description]
	   * @return {[type]}      [description]
	   */
	  chooseRelated: function chooseRelated(name, opts) {
	    _log.debug('chooseRelated', name, opts);

	    var self = this;

	    opts = Object.clone(opts);

	    this.attachInfo(opts, function (err, info) {
	      return self._onRelatedSelected(name, opts, info);
	    });
	  },

	  /**
	   * [_onRelatedSelected description]
	   * @param  {[type]} name [description]
	   * @param  {[type]} opts [description]
	   * @param  {[type]} info [description]
	   * @return {[type]}      [description]
	   */
	  _onRelatedSelected: function _onRelatedSelected(name, opts, info) {
	    _log.debug('_onRelatedSelected choose', name, opts, info);

	    if (info._id === this.doc._id) {
	      return;
	    }

	    var relatedField = this.getValueFromKey(name, this.doc);

	    var related = {
	      info: {
	        _id: info._id
	      },
	      relation: {}
	    };
	    // create the import source doc keys
	    if (typeOf(opts.keys.info) === 'array') {
	      var sourceKeys = opts.keys.info;

	      for (var i = 0; i < sourceKeys.length; i++) {
	        var source = sourceKeys[i];
	        var value = info[source];

	        related.info[source] = value;
	      }
	    } else if (opts.keys.info === '*') {
	      related = info;
	    }
	    if (opts.keys.relation === false) {
	      related = related.info;
	    }

	    relatedField.push(related);

	    this._setInfo(this.doc, this.originalMask, false);
	    this.fireEvent('change', [name, related]);

	    return this.doc;
	  },

	  /**
	   * [_removeRelatedItem description]
	   * @param  {[type]} name [description]
	   * @param  {[type]} id   [description]
	   * @return {[type]}      [description]
	   */
	  _removeRelatedItem: function _removeRelatedItem(name, id) {
	    _log.debug('_removeRelatedItem', name, id);

	    var relatedField = this.getValueFromKey(name, this.doc);

	    var idx;
	    for (var i = 0; i < relatedField.length; i++) {
	      var item = relatedField[i];
	      item = item.info || item;
	      if (item._id === id) {
	        idx = i;
	      }
	    }

	    relatedField.splice(idx, 1);

	    this._setInfo(this.doc, this.originalMask, false);
	    this.fireEvent('change', [name, id]);
	  },

	  /**
	   * [_moveRelatedItem description]
	   * @param  {[type]} name      [description]
	   * @param  {[type]} related   [description]
	   * @param  {[type]} direction [description]
	   * @return {[type]}           [description]
	   */
	  _moveRelatedItem: function _moveRelatedItem(name, related, direction) {
	    //_log.debug('_moveRelatedItem', type, related, direction);
	    var relatedField = this.getValueFromKey(name, this.doc);

	    if (direction === 'up') {
	      _minimalUtils.array.moveUp(relatedField, related);
	    } else if (direction === 'down') {
	      _minimalUtils.array.moveDown(relatedField, related);
	    } else {
	      return;
	    }

	    this._setInfo(this.doc, this.originalMask, false);
	    this.fireEvent('change', [name, related]);
	  }

	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _textarea = __webpack_require__(96);

	var _textarea2 = _interopRequireDefault(_textarea);

	var _scriptjs = __webpack_require__(30);

	var _scriptjs2 = _interopRequireDefault(_scriptjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-core-form-textarea').defineLevel();

	exports.default = new Class({

	  options: {
	    codeeditor: {
	      gutter: true,
	      lineNumbers: true,
	      indentWithTabs: true,
	      indentUnit: 4,
	      fixedGutter: true,
	      theme: 'twilight',
	      mode: 'text/html',
	      lineWrapping: true,
	      dragDrop: false
	    },

	    ckeditor: {
	      //customConfig: '/vendor/minimal-ckeditor/minimal.js',
	      allowedContent: 'table; tr; td; th; strong; em; pre; label; form[id]; select[name]; options[value]; input[name,type,value](*); h1; h2; h3; h4; i; p[*](*); div[*](*); span[*](*); a[!href](*); ul(*); li{text-align}(*); img[alt,!src]{width,height}(*)',
	      toolbarGroups: [{
	        name: 'document',
	        groups: ['mode', 'document', 'doctools']
	      }, {
	        name: 'basicstyles',
	        groups: ['basicstyles', 'cleanup']
	      }, {
	        name: 'styles'
	      }, {
	        name: 'colors'
	      }, {
	        name: 'paragraph',
	        groups: ['insertpre', 'list', 'indent', 'blocks', 'align', 'justify']
	      }, {
	        name: 'links'
	      }, {
	        name: 'others'
	      }],
	      autoParagraph: false,
	      startupFocus: false,
	      floatSpaceDockedOffsetY: 10,
	      extraPlugins: 'sharedspace', //image,forms,image,forms,sourcearea,insertpre',
	      removePlugins: 'floatingspace, resize, spellchecker, pastefromword, pastetext, specialchar, scayt, about',
	      removeButtons: 'Templates,NewPage,Anchor,Subscript,Superscript,Strike',
	      sharedSpaces: {
	        top: 'ck-toolbar'
	      }
	    }
	  },

	  /**
	   * Initialie textarea
	   *
	   * @param  {Object} field
	   * @param  {Object} doc
	   * @param  {DOMElement} group
	   * @return {void}
	   */
	  _initTextarea: function _initTextarea(field, doc, group) {
	    _log.debug('_initTextarea', field, doc, group);

	    var self = this;
	    var input;

	    if (field.mode === 'html') {
	      if (!window.CKEDITOR) {
	        this._initCKEDITOR(field, doc, group);
	        return;
	      }

	      input = this._initHTMLInlineInput(field, doc[field.name], group);
	      this.field[field.name] = input;
	      if (!this.readonly) {
	        this._initHTMLInlineField(input);
	      }
	      return;
	    }

	    var value = this.getValueFromKey(field.name, doc);

	    if (!value && field.default) {
	      value = field.default;
	      this.updateDocKey(field.name, value);
	    }

	    var read = this.isReadOnly(field);

	    input = new _textarea2.default({
	      'class': 'txt',
	      name: field.name,
	      text: field.text,
	      value: value,
	      read: read
	    }).inject(group);

	    if (field.klss) {
	      input.addClass(field.klss);
	    }

	    // //if (field.autogrow) {
	    //  this.autogrowField = this.autogrowField || [];
	    //  this.autogrowField.push(input);
	    //  this._initAutogrow(input);
	    // //}

	    this.field[field.name] = input;

	    if (field.mode === 'code') {
	      input.addClass('field-edit');
	      this._initCodeField(field, input.input);
	    } else {
	      input.input.addEvents({
	        focus: function focus() {
	          //self.focus = this;
	          self.fireEvent('focus');
	        },
	        keyup: function keyup() {

	          input.setError(null);

	          self.updateDocKey(this.get('name'), this.get('value'));

	          self.fireEvent('change', [this.get('name'), this.get('value')]);
	        }
	      });
	    }
	    //var myCodeMirror = CodeMirror.fromTextArea(input.input);
	  },

	  _initCKEDITOR: function _initCKEDITOR(field, doc, group) {
	    _log.debug('_initCKEDITOR');
	    var self = this;

	    (0, _scriptjs2.default)(['https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.5.9/ckeditor.js'], function () {
	      self._initTextarea(field, doc, group);
	    });
	  },

	  /*_initHTMLField: function(field, textarea) {
	    var self = this;
	     _log.debug('_initHTMLField', field, textarea);
	     var container = textarea.getParent();
	    var iframe = '';
	     var tev;
	     this.ckeditor = this.ckeditor || {};
	     _log.debug(field.name);
	     var cke = CKEDITOR.replace(textarea, {
	      allowedContent: true,
	      //removePlugins: 'toolbar',
	      customConfig: this.options.ckeditor.customConfig,
	      extraPlugins: 'justify,image,forms',
	      removePlugins: 'floatingspace,resize',
	      width: '100%',
	      //ntentsCss : 'body {overflow:hidden;}',
	      on: {
	        focus: function() {
	          self.cke = textarea;
	          iframe.addClass('cke_iframe_focus');
	        },
	        blur: function() {
	          iframe.removeClass('cke_iframe_focus');
	          //self._updateHTMLField(textarea);
	        },
	        instanceReady: function(ev) {
	          tev = ev.editor;
	          //_log.debug('instanceReady', ev.editor);
	          textarea.store('cke', ev.editor);
	          iframe = container.getElement('iframe');
	          self.ckeditorInstances.push(ev.editor);
	        }
	      }
	    });
	     var editor = CKEDITOR.instances[cke.name];
	     this.ckeditor[field.name] = editor;
	     /*this.ckeInstances = this.ckeInstances ||  [];
	     this.ckeInstances.push(editor);*
	     editor.on('change', function() {
	      self.updateDocKey(field.name, textarea.get('value'));
	       self.fireEvent('change', [textarea.get('name'), textarea.get('value')]);
	      self._updateHTMLField(textarea);
	    });
	  },*/

	  /**
	   * Initialize html field using CKEDITOR.inline
	   * @param  {DOMElement} input
	   * @return {void}
	   */
	  _initHTMLInlineField: function _initHTMLInlineField(input) {
	    _log.debug('_initHTMLInlineField', input);

	    var self = this;
	    var ckeditor = this.options.ckeditor;

	    input.setAttribute('contenteditable', 'true');

	    if (!this.ckeToolbar) {
	      this.ckeToolbar = new Element('div', {
	        id: 'ck-toolbar',
	        class: 'ui-toolbar toolbar-cke'
	      }).inject(this.container.head, 'after');
	    }

	    // Loads the sharedspace plugin from /vendor/sharedspace/
	    CKEDITOR.plugins.addExternal('sharedspace', 'https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.5.9/plugins/sharedspace/plugin.js', 'plugin.js');

	    CKEDITOR.inline(input, {
	      //allowedContent: ckeditor.allowedContent,
	      allowedContent: true,
	      //customConfig: ckeditor.customConfig,
	      extraPlugins: ckeditor.extraPlugins,
	      removePlugins: ckeditor.removePlugins,
	      removeButtons: ckeditor.removeButtons,
	      sharedSpaces: ckeditor.sharedSpaces,
	      magicline_color: '#ccc',
	      //skin: 'minimal',
	      on: {
	        focus: function focus() {
	          self.ckeToolbar.getElement('div').setStyle('display', 'initial');
	        },
	        blur: function blur() {
	          self.ckeToolbar.getElement('div').setStyle('display', 'none');
	        },
	        instanceReady: function instanceReady(ev) {
	          self.cke = ev.editor;
	          self.ckeditorInstances.push(ev.editor);
	          input.store('cke', ev.editor);

	          if (self.ckeToolbar && self.ckeToolbar.getElement('div')) {
	            self.ckeToolbar.getElement('div').setStyle('display', 'none');
	          }
	        },
	        change: function change() {
	          self.fireEvent('change', [input.get('name'), input.get('text')]);
	          self._updateHTMLField(input);
	        }
	      }
	    });
	  },

	  /**
	   * Initialize elements for html field
	   *
	   * @param  {Object} field
	   * @param  {string} value
	   * @param  {DOMElement} group
	   * @return {DOMElement}
	   */
	  _initHTMLInlineInput: function _initHTMLInlineInput(field, value, group) {
	    _log.debug('_initHTMLInlineInput');

	    var fieldEl = new Element('div', {
	      'class': 'field-html ui-field'
	    }).inject(group);

	    new Element('label', {
	      for: 'html',
	      html: field.name
	    }).inject(fieldEl);

	    return new Element('div', {
	      'class': 'txt',
	      'data-key': field.name,
	      name: field.name,
	      html: value
	    }).inject(fieldEl);
	  },

	  /**
	   * Update html field
	   *
	   * @param  {DOMElement} input [description]
	   * @return {void}
	   */
	  _updateHTMLField: function _updateHTMLField(input) {
	    _log.debug('_updateHTMLField', input);

	    var cke = input.retrieve('cke');

	    if (cke.checkDirty()) {
	      input.set('value', cke.getData());
	      this.doc[input.get('name')] = input.get('value');
	      this.fireEvent('change', [input.get('name'), input.get('value')]);
	      this.cke = false;
	    } else {
	      this.cke = false;
	    }
	  },

	  /**
	   * Destroy ckeditor instances
	   *
	   * @return {void}
	   */
	  destroyCkeInstance: function destroyCkeInstance() {
	    this.ckeditorInstances = this.ckeditorInstances || [];

	    _log.debug('destroyInline', this.ckeditorInstances.length);

	    for (var j = 0; j < this.ckeditorInstances.length; j++) {
	      var instance = this.ckeditorInstances[j];
	      //_log.debug('instance', instance);
	      instance.destroy();
	      this.ckeditorInstances.splice(j, 1);
	    }
	  },

	  /**
	   * Initialize code field
	   *
	   * @param  {Object} field
	   * @param  {DOMElement} textarea
	   * @return {void}
	   */
	  _initCodeField: function _initCodeField(field, textarea) {
	    _log.debug('_initCodeField');

	    var opts = this.options;
	    var self = this;

	    if (!window.CodeMirror) {
	      this._initCodeMirror(field, textarea);
	      return;
	    }

	    var container = textarea.getParent();

	    container.setStyle('height', '100%');

	    textarea.addClass('fileeditor-textarea');
	    textarea.setStyle('display', 'none');

	    if (!this.doc[field.name]) {
	      this.doc[field.name] = '';
	    }

	    var value = this.doc[field.name];

	    _log.debug(field);

	    field.opts = field.opts || {};

	    if (field.opts.mode && field.opts.mode.json) {
	      value = JSON.stringify(value, null, 4);
	    }

	    var mode = {
	      name: 'javascript',
	      json: true
	    };

	    if (field.opts.mode) {
	      mode = field.opts.mode;
	    }

	    var codeeditor = {
	      value: value,
	      mode: mode,
	      height: '1000px',
	      onChange: function onChange() {
	        _log.debug('change', [field.name, this.getValue()]);
	      }
	    };

	    var options = Object.merge(opts.codeeditor, codeeditor);

	    var codeMirror = CodeMirror(container, options);

	    codeMirror.on('change', function () {
	      var val = codeMirror.getValue();
	      if (field.opts.mode && field.opts.mode.json) {
	        try {
	          val = JSON.parse(val);
	        } catch (e) {
	          val = val;
	        }
	      }
	      //_log.debug('change', textarea.get('name'), val);
	      self.doc[textarea.get('name')] = val;
	      self.fireEvent('change', [field.name, textarea.get('value')]);
	    });
	  },

	  /**
	   * [_initCodeMirror description]
	   * @param  {Object} field
	   * @param  {DOMElement} textarea
	   * @return {void}
	   */
	  _initCodeMirror: function _initCodeMirror(field, textarea) {
	    _log.debug('_initCodeMirror');
	    var self = this;

	    (0, _scriptjs2.default)(['https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.20.2/codemirror.min.js'], function () {
	      self._initCodeMirrorPlugIn(field, textarea);
	    });
	  },

	  /**
	   * [_initCodeMirrorPlugIn description]
	   * @param  {Object} field
	   * @param  {DOMElement} textarea
	   * @return {void}
	   */
	  _initCodeMirrorPlugIn: function _initCodeMirrorPlugIn(field, textarea) {
	    _log.debug('_initCodeMirrorPlugIn');
	    var self = this;

	    (0, _scriptjs2.default)(['https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.20.2/mode/javascript/javascript.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.20.2/mode/htmlmixed/htmlmixed.min.js'], function () {
	      self._initCodeField(field, textarea);
	    });
	  }

	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('ui-textarea');

	/**
	 * @example
	 * var textarea = new UI.Textarea({
	 *   name : 'myTextarea',
	 *   value : 'Hello world!'
	 * }).inject(document.body);
	 */
	exports.default = new Class({

	  Extends: _field2.default,

	  options: {
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
	        //'button.press': '_onButtonPress'
	      }
	    }
	  },

	  /**
	   * [_initInput description]
	   * @return {[type]} [description]
	   */
	  _initInput: function _initInput() {
	    _log.debug('_initInput');
	    var opts = this.options;

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

	    if (opts.klss) {
	      this.input.addClass(opts.klss);
	    }

	    this._initAutogrow(input);
	  },

	  /**
	   * [_initAutogrow description]
	   * @param  {[type]} input [description]
	   * @return {[type]}       [description]
	   */
	  _initAutogrow: function _initAutogrow(input) {
	    clearTimeout(this.autogrowTimeout);

	    this.autogrowTimeout = setTimeout(function () {
	      var autogrow = new Form.AutoGrow(input, {
	        minHeightFactor: 1
	      });
	      input.store('autogrow', autogrow);

	      input.addEvent('focus', function () {
	        autogrow.resize();
	      });
	    }, 200);
	  },

	  /**
	   * @return {[type]} [description]
	   */
	  _updateInk: function _updateInk(e) {
	    //_log.debug('_updateInk');

	    if (this.readonly) {
	      e.stop();
	      return;
	    }

	    if (this._setInk) {
	      this._setInk(1);
	    }
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
	  }

	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-form-unique').defineLevel();

	/**
	 * @description
	 *  Info Structure:
	 *    id: Unique info id
	 *  The options accept:
	 *    unique: If set to true will be possible just attach a document in this key
	 */
	exports.default = new Class({

	  /**
	   * [_displayUnique description]
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  _initUnique: function _initUnique(field, doc, group) {
	    _log.debug('_displayUnique', field, doc, group);

	    var self = this;
	    //var name = field.text || field.name;
	    var type = field.opts.type;
	    var display = field.opts.keys.display || ['name'];
	    var key = doc[field.name];
	    //_log.debug('key', key);

	    var unique = new Element('div', {
	      'class': 'ui-field type-unique'
	    }).inject(group);

	    new Element('label', {
	      html: field.name
	    }).inject(unique);

	    if (field.klss) {
	      unique.addClass(field.klss);
	    }

	    if (key) {
	      var item = new Element('div', {
	        'class': 'unique-item'
	      }).inject(unique);

	      for (var i = 0; i < display.length; i++) {
	        var sourceKey = display[i];

	        new Element('span', {
	          'class': 'ui-key key-' + sourceKey,
	          html: key[sourceKey]
	        }).inject(item);
	      }

	      // new ButtonControl({
	      //  name: field.opts.type,
	      //  icon: mnml.icon.font[field.opts.type],
	      // }).inject(item, 'top');

	      this._initRelatedUniqueControls(item, field, unique);
	    }

	    var read = this.isReadOnly(field);

	    if (read || key) {
	      unique.addClass('read-only');
	      return;
	    }

	    var addBtn = new _button2.default({
	      icon: 'add',
	      name: 'add',
	      type: 'icon-text',
	      klss: 'button-inline',
	      text: 'Choose ' + type + '...'
	    }).inject(unique).addEvent('press', function () {
	      unique.addClass('state-focus');
	      self.chooseUnique(field.name, field.opts, unique);
	    });

	    addBtn.icon.addClass('mdi-av-playlist-add');
	  },

	  /**
	   * [_initRelatedUniqueControls description]
	   * @param  {[type]} item  [description]
	   * @param  {[type]} field [description]
	   * @return {[type]}       [description]
	   */
	  _initRelatedUniqueControls: function _initRelatedUniqueControls(item, field) {
	    _log.debug('_initRelatedUniqueControls', item, field);

	    var self = this;

	    var read = this.isReadOnly(field);

	    if (read) {
	      return;
	    }

	    var toolbar = new Element('div', {
	      class: 'ui-toolbar right'
	    }).inject(item);

	    new _button2.default({
	      type: 'icon',
	      name: 'edit',
	      icon: 'edit',
	      emit: 'edit'
	    }).inject(toolbar).addEvent('edit', function () {
	      self.chooseUnique(field.name, field.opts);
	    });

	    new _button2.default({
	      type: 'icon',
	      name: 'clear',
	      icon: 'clear',
	      emit: 'remove'
	    }).inject(toolbar).addEvent('remove', function () {
	      self._removeUnique(field.name);
	      //self.fireEvent('relatedItemRemoved', info._id);
	    });
	  },

	  /**
	   * [_removeRelatedItem description]
	   * @param  {[type]} idx [description]
	   * @param  {[type]} key [description]
	   * @return {[type]}     [description]
	   */
	  _removeUnique: function _removeUnique(name) {
	    //_log.debug('_moveRelatedItem', type, idx);
	    var info = this.doc;

	    if (!info[name]) {
	      return;
	    }

	    delete info[name];

	    this._setInfo(info, null, false);
	    this.fireEvent('change', [name, info[name]]);
	  },

	  /**
	   * [chooseUnique description]
	   * @param  {[type]} name [description]
	   * @param  {[type]} opts [description]
	   * @return {[type]}      [description]
	   */
	  chooseUnique: function chooseUnique(name, opts) {
	    _log.debug('chooseUnique', name, opts);
	    var self = this;

	    opts = Object.clone(opts);

	    this.attachInfo(opts, function (err, info) {
	      _log.debug('attachInfo choose', info);
	      if (info._id === self.doc._id) {
	        return;
	      }

	      self.doc[name] = {};

	      if (typeOf(opts.keys.source) === 'array') {
	        var sourceKeys = opts.keys.source;

	        for (var i = 0; i < sourceKeys.length; i++) {
	          var source = sourceKeys[i];
	          var value = info[source];

	          self.doc[name][source] = value;
	        }
	      }

	      self._setInfo(self.doc);
	      self.fireEvent('change', [name, self.doc[name]]);
	    });
	  }

	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _url = __webpack_require__(99);

	var _url2 = _interopRequireDefault(_url);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('view-form-url');

	exports.default = new Class({

	  /**
	   * Initialize URL field
	   * @param  {[type]} field [description]
	   * @param  {[type]} doc   [description]
	   * @param  {[type]} group [description]
	   * @return {[type]}       [description]
	   */
	  __initUrl: function __initUrl(field, doc, group) {
	    var self = this;

	    var n = field.name.split(/\./);

	    var value = this.getValueFromKey(field.name, doc);

	    var input = new _url2.default({
	      'class': field.klss,
	      type: 'text',
	      name: field.name,
	      text: field.text,
	      value: value,
	      useTextAsLabel: this.options.useTextAsLabel
	    }).inject(group);

	    var read = this.isReadOnly(field);

	    if (read) {
	      input.input.set('readonly', 'readonly');
	    }

	    if (field.klss) {
	      input.addClass(field.klss);
	    }

	    if (field.etat == 'readonly' || this.readonly) {
	      input.input.set('readonly', 'readonly');
	    }

	    input.input.addEvents({
	      keyup: function keyup() {
	        self.doc[this.get('name')] = this.get('value');
	        self.fireEvent('change', [this.get('name'), this.get('value')]);
	      }
	    });
	  }

	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _field = __webpack_require__(37);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _field2.default,

	  options: {
	    name: 'URL',
	    base: 'control',
	    tag: 'div',
	    type: 'input',
	    value: null,
	    useTextAsLabel: false
	  },

	  /**
	   * [initialize description]
	   * @param  {[type]} options [description]
	   * @return {[type]}         [description]
	   */
	  initialize: function initialize(options) {
	    this.setOptions(options);

	    var opts = this.options;

	    this.fireEvent('init');

	    this._initOptions(opts);
	    this._initElement();
	    this._initEvents();

	    return this;
	  },

	  /**
	   * Create a div and a hidden input to receive the selected value
	   * @return {void}
	   */
	  _initElement: function _initElement() {
	    //create a new div as input element
	    this.parent();

	    var opts = this.options;

	    this.element.addClass('ui-field');

	    if (opts.klss) {
	      this.element.addClass(opts.klss);
	    }

	    if (opts.label != false) {
	      this._initLabel();
	    }

	    this._initInput();
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
	      html: text
	    }).inject(this.element);
	  },

	  /**
	   * [_initInput description]
	   * @return {[type]} [description]
	   */
	  _initInput: function _initInput() {
	    var self = this;

	    //_log.debug('imput option', this.options);

	    this.input = new Element('input', {
	      name: this.options.name,
	      type: this.options.type,
	      value: this.options.value,
	      placeholder: this.options.text
	    }).inject(this.element);

	    this.input.addEvents({
	      keyup: function keyup() {
	        self.fireEvent('change', this.get('value'));
	      },
	      mousedown: function mousedown(e) {
	        e.stopPropagation();
	        //this.focus();
	      }
	    });
	  }

	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _container = __webpack_require__(4);

	var _container2 = _interopRequireDefault(_container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _log = __debug('container-tab').defineLevel();

	exports.default = new Class({

	  Extends: _container2.default,

	  options: {
	    clss: 'tab',
	    name: 'tab',
	    base: 'container',

	    head: true,
	    content: null,
	    node: [{
	      name: 'one'
	    }, {
	      name: 'two'
	    }],
	    comp: ['body']
	  },

	  /**
	   * initialize
	   * @param  {Object} options
	   * @return {void}
	   */
	  initialize: function initialize(options) {
	    _log.debug('initialize', options);

	    this.list = [];
	    this.components = [];

	    this.parent(options);
	  },

	  /**
	   * Set Content of the current container (tab)
	   * @param {[type]} method  [description]
	   * @param {[type]} source  [description]
	   * @param {[type]} options [description]
	   */
	  setContent: function setContent(method, source, options) {
	    _log.debug('setContent', method, source, options);
	    this.active.setContent(method, source, options);
	  },

	  /**
	   * Create tab and its related container and addEvent
	   * @param {[type]} container [description]
	   * @param {[type]} position  [description]
	   */
	  addTab: function addTab(container, position) {
	    _log.debug('addTab', container, position);

	    var self = this;
	    var opts = container.options;

	    var text = opts.text || opts.title || opts.name;

	    var tab = new _button2.default({
	      type: 'tab',
	      text: text,
	      name: opts.name,
	      onPress: function onPress(e) {
	        self.activate(container);
	      }
	    }).inject(this.bar);

	    container.inject(this.body);

	    this.components.push(container);

	    if (this.components.length === 1) {
	      this.activate(container);
	    } else {
	      container.hide();
	    }

	    container.element.store('tab', tab);

	    if (this.active == container) {
	      self._setActiveTab(tab);
	    }
	  },

	  /**
	   * Set wich tab should be activated
	   * @param {[type]} container [description]
	   * @return {void}
	   */
	  setActive: function setActive(container) {
	    _log.debug('setActive', container);

	    if (typeOf(container) === 'object') {
	      var index = this.list.indexOf(container);

	      if (index >= 0) {
	        this.list[index].setState('active');
	        this.list[num].fireEvent('click');
	      }
	    }
	  },

	  activate: function activate(container) {
	    _log.debug('activate', container);

	    if (typeOf(container) !== 'object') {
	      return;
	    }

	    if (this.active) {
	      this.active.hide();
	    }

	    container.show();
	    container.fireEvent('resize');

	    this._setActiveTab(container.element.retrieve('tab'));

	    this.active = container;
	    container.fireEvent('resize');

	    this.fireEvent('activate', container);

	    return this;
	  },

	  _initElement: function _initElement() {
	    _log.debug('_initElement');

	    this.parent();
	    this._initBar();
	  },

	  /**
	   * Build the split containers
	   * @return {void}
	   */
	  _initComponent: function _initComponent() {
	    _log.debug('_initComponent');

	    var self = this;
	    var opts = this.options;

	    this.components = [];

	    if (opts.node === null) {
	      return;
	    }

	    this.node = [];

	    if (!this.layout) {
	      this.layout = {};
	    }

	    opts.node.each(function (node, i) {
	      if (!node.component) {
	        node.component = 'container';
	      }

	      node.container = self.content;
	      node.main = self.main;

	      var container = new UI[node.component.capitalize()](node);

	      container.addEvent('focus', function () {
	        self.activate(container);
	      });

	      self.components.push(container);

	      self.addEvent('resize', function () {
	        //_log.debug('tab resize,, views', container.name);
	        container.fireEvent('resize');
	      });

	      self.node.push(container);

	      if (i < 1) {
	        self.activate(container);
	      }

	      self.addTab(container);
	      if (i > 0) {
	        container.hide();
	      }

	      self.layout[self.main][container.name] = container;
	      //ui.node[self.main][node.name] = container;
	    });

	    //self._initSplitter();
	    //self._initSize();
	  },

	  _initClass: function _initClass() {
	    this.parent();

	    this.element.addClass('ui-tab');
	  },

	  /**
	   * Create tabbar and add tabs
	   * @return {void}
	   */
	  _initBar: function _initBar() {
	    //var self = this;

	    this.bar = new _component2.default({
	      tag: 'div',
	      klass: 'tab-bar',
	      name: 'bar'
	    }).inject(this.head, 'bottom');

	    this.addEvent('resize', function () {
	      //self.element.setStyle('padding-top', self.head.getSize().y+'px');
	    }.bind(this));
	  },

	  /**
	   * Set some behaviours
	   * @return {void}
	   */
	  _initEvents: function _initEvents() {
	    _log.debug('_initEvents');

	    this.parent();

	    var self = this;

	    this.addEvents({
	      resize: function resize() {
	        self.components.each(function (c) {
	          c.fireEvent('resize');
	        });
	      },
	      injected: function injected() {}
	    });
	  },

	  _setActiveTab: function _setActiveTab(tab) {
	    if (!tab) {
	      return;
	    }

	    if (this.tab) {
	      this.tab.element.removeClass('ui-selected');
	      this.tab.setState('default');
	    }

	    tab.addClass('ui-selected');
	    tab.setState('active');

	    this.tab = tab;
	  }

	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _text = __webpack_require__(102);

	var _text2 = _interopRequireDefault(_text);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _window = __webpack_require__(21);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _window2.default,

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

	  /**
	   * [initialize description]
	   * @param  {[type]} options [description]
	   * @return {[type]}         [description]
	   */
	  initialize: function initialize(options) {
	    this.parent(options);

	    this.message.focus();
	  },

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {
	    this.parent();

	    this._initBody();
	    this._initActions();
	  },

	  /**
	   * [_initHead description]
	   * @param  {[type]} options [description]
	   * @return {[type]}         [description]
	   */
	  _initHead: function _initHead(options) {
	    //_log.debug('_initHead', options);
	    this.parent(options);

	    this.title = new _text2.default({
	      type: 'title',
	      text: this.options.title
	    }).inject(this.head);
	  },

	  /**
	   * [_initBody description]
	   * @return {[type]} [description]
	   */
	  _initBody: function _initBody() {
	    //_log.debug('_initBody', this.content);
	    var self = this;

	    this.message = new Element('textarea', {
	      class: 'ui-prompt'
	    }).inject(this.foot, 'before');

	    this.addEvents({
	      ok: function ok() {
	        var val = self.message.get('value');
	        self.fireEvent('confirm', val);
	      }
	    });
	  },

	  /**
	   * [_initControls description]
	   * @param  {[type]} controls [description]
	   * @return {[type]}          [description]
	   */
	  _initActions: function _initActions() {
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
	  _initAction: function _initAction(name, opts, toolbar) {
	    //_log.debug('_intiAction', name, opts, toolbar);
	    var self = this;

	    var n = name.split('::');

	    name = n[0];

	    var klss = n[1];

	    var action = new _button2.default({
	      name: name,
	      text: name,
	      klss: klss
	    }).addEvent('press', function () {
	      //_log.debug('press', name);
	      self.fireEvent(name);
	      self.close();
	    }).inject(toolbar);

	    this.actions.push(action);
	  }

	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _component2.default,

	  options: {
	    name: 'text',
	    klass: 'ui-text',
	    tag: 'span',
	    text: '&nbsp;',
	    emboss: false,
	    selectable: false
	  },

	  /**
	   * Make a  Text and set the fade Fx
	   * @return {void}
	   */
	  _initElement: function _initElement() {
	    this.parent();

	    if (this.options.text) {
	      this.set(this.options.text);
	    }
	  },

	  /**
	   * Default setter for the class
	   * @param {string} property [description]
	   * @param {mixin} value    [description]
	   */
	  set: function set(property, value) {
	    //_log.debug('set', what, value);

	    // if set has a single params
	    if (value === undefined) {
	      value = property;
	      property = 'text';
	    }

	    if (property == 'text') {
	      this.element.set('html', value);
	    }
	  }

	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _component2.default,

	  options: {
	    name: 'progress',
	    klass: 'ui-progress',

	    tag: 'div'
	  },

	  /**
	   * [set description]
	   * @param {[type]} ratio [description]
	   */
	  set: function set(ratio) {
	    var width = 0;

	    var percentage = ratio[0] * 100 / ratio[1];

	    if (percentage > 0) {
	      width = this.element.getSize().x * percentage / 100;
	    }

	    this.bar.setStyle('width', width.toInt());
	    this.status.set('html', ratio[0] + ' / ' + ratio[1]);

	    return this;
	  },

	  /**
	   * [setStatus description]
	   * @param {[type]} text [description]
	   */
	  setStatus: function setStatus(text) {
	    this.status.set('html', text);

	    return this;
	  },

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {
	    this.parent();

	    this.status = new Element('span', {
	      'class': 'progress-status'
	    }).inject(this.element);

	    this.bar = new Element('div', {
	      'class': 'progress-bar'
	    }).inject(this.element);
	  }

	});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(23);

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

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _choice = __webpack_require__(38);

	var _choice2 = _interopRequireDefault(_choice);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Class({

	  Extends: _choice2.default,

	  options: {
	    name: 'choice'
	  },

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {
	    this.parent();

	    this.element.addClass('choice-color');
	  },

	  /**
	   * [_initItem description]
	   * @param  {[type]} info [description]
	   * @return {[type]}      [description]
	   */
	  _initItem: function _initItem(info) {
	    var self = this,
	        opts = this.options;

	    var item = new Element('li', {
	      'class': info
	    }).inject(this.list).addEvent('click', function () {
	      //_log.debug('jjj');
	      if (self.selected) {
	        self.selected.removeClass('selected');
	      }

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

	    if (opts.value == info) {
	      item.addClass('selected');
	      self.selected = item;
	    }
	  },

	  /**
	   * [set description]
	   * @param {[type]} color [description]
	   */
	  set: function set(color) {
	    //_log.debug(color);
	    var list = this.itemList;

	    for (var i = 0; i < list.length; i++) {
	      var item = list[i];
	      if (item.hasClass(color)) {
	        item.addClass('selected');
	      } else {
	        item.removeClass('selected');
	      }
	    }
	  }

	});

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Class({

	  Implements: [Events, Options],

	  options: {
	    container: document.body,
	    type: 'solid',
	    clss: 'selector-border',
	    zIndex: 2,
	    size: 1,
	    color: '#000',
	    opacity: '1',
	    location: 'outside', // inside or outside
	    effect: {
	      duration: 100,
	      transition: 'expo:out',
	      link: 'cancel'
	    }
	  },

	  /**
	   * [initialize description]
	   * @param  {[type]} container [description]
	   * @param  {[type]} options   [description]
	   * @return {[type]}           [description]
	   */
	  initialize: function initialize(container, options) {
	    this.setOptions(options);

	    //_log.debug('UI.Selector.Border:',container, options);

	    this.container = container;
	    this.lines = [];

	    this._initElement();
	  },

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {
	    var lines = [[], [], [], []];

	    lines.each(function (line) {
	      this.buildBorder();
	    }, this);
	  },

	  /**
	   * [buildBorder description]
	   * @return {[type]} [description]
	   */
	  buildBorder: function buildBorder() {
	    var self = this;

	    var line = new Element('div', {
	      'class': this.options.clss
	    }).addClass('type-' + self.options.type).setStyles({
	      'zIndex': this.options.zIndex,
	      'backgroundColor': this.options.color,
	      'opacity': this.options.opacity
	    }).addEvent('click', function () {
	      self.fireEvent('click');
	    }).inject(this.container, 'top');

	    line.set('morph', this.options.effect);

	    this.lines.push(line);
	  },

	  /**
	   * [reach description]
	   * @param  {[type]} el [description]
	   * @return {[type]}    [description]
	   */
	  reach: function reach(el) {
	    if (!el) {
	      if (this.el) {
	        el = this.el;
	      } else {
	        return;
	      }
	    } else {
	      this.el = el;
	    }

	    var infos = [];
	    var o = [];
	    //_log.debug('boder reach', el);
	    var bs = this.options.size;

	    try {
	      el.getCoordinates();
	    } catch (err) {
	      return;
	    }

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
	      infos = [[c.top, c.left, c.right - c.left - bs, bs], [c.top, c.right - bs, bs, c.bottom - c.top], [c.bottom - bs, c.left + bs, c.right - c.left - 2 * bs, bs], [c.top + bs, c.left, bs, c.bottom - c.top - bs]];
	    } else {
	      infos = [[c.top - bs, c.left - bs, c.right - c.left + 2 * bs, bs], [c.top, c.right, bs, c.bottom - c.top], [c.bottom, c.left - bs, c.right - c.left + 2 * bs, bs], [c.top, c.left - bs, bs, c.bottom - c.top]];
	    }

	    this.lines.each(function (line, i) {
	      this._setLinePosition(line, infos[i]);
	    }, this);

	    this.fireEvent('selected');

	    return this;
	  },

	  /**
	   * [addClass description]
	   * @param {[type]} c [description]
	   */
	  addClass: function addClass(c) {
	    this.lines.each(function (line, i) {
	      line.addClass(c);
	    }, this);
	  },

	  /**
	   * [removeClass description]
	   * @param  {[type]} c [description]
	   * @return {[type]}   [description]
	   */
	  removeClass: function removeClass(c) {
	    this.lines.each(function (line, i) {
	      line.addClass(c);
	    }, this);
	  },

	  /**
	   * [_setLinePosition description]
	   * @param {[type]} line [description]
	   * @param {[type]} info [description]
	   */
	  _setLinePosition: function _setLinePosition(line, info) {

	    if (this.options.usefx) {
	      line.morph({
	        'margin-top': info[0],
	        'margin-left': info[1],
	        'width': info[2],
	        'height': info[3]
	      });
	    } else {
	      line.setStyles({
	        'margin-top': info[0],
	        'margin-left': info[1],
	        'width': info[2],
	        'height': info[3]
	      });
	    }
	  },

	  /**
	   * [set description]
	   * @param {[type]} name  [description]
	   * @param {[type]} value [description]
	   */
	  set: function set(name, value) {
	    if (selector) {
	      self[selector][name](value);
	    } else {
	      this.selectors.each(function (selector) {
	        self[selector][name](value);
	      });
	    }

	    return this;
	  },

	  /**
	   * [setColor description]
	   * @param {[type]} color [description]
	   */
	  setColor: function setColor(color) {
	    this._setStyle('backgroundColor', color);
	  },

	  /**
	   * [setOpacity description]
	   * @param {[type]} opacity [description]
	   */
	  setOpacity: function setOpacity(opacity) {
	    this._setStyle('opacity', opacity);
	  },

	  /**
	   * [_setStyle description]
	   * @param {[type]} name  [description]
	   * @param {[type]} value [description]
	   */
	  _setStyle: function _setStyle(name, value) {
	    this.lines.each(function (line) {
	      line.setStyle(name, value);
	    });

	    return this;
	  },

	  /**
	   * [setStyles description]
	   * @param {[type]} styles [description]
	   */
	  setStyles: function setStyles(styles) {
	    this.lines.each(function (line) {
	      line.setStyles(styles);
	    });

	    return this;
	  },

	  /**
	   * [hide description]
	   * @return {[type]} [description]
	   */
	  hide: function hide() {
	    this._setStyle('display', 'none');

	    return this;
	  },

	  /**
	   * [show description]
	   * @return {[type]} [description]
	   */
	  show: function show() {
	    this._setStyle('display', 'block');

	    return this;
	  },

	  /**
	   * [highlight description]
	   * @param  {[type]} color [description]
	   * @return {[type]}       [description]
	   */
	  highlight: function highlight(color) {
	    this.lines.each(function (line) {
	      line.highlight(color);
	    });

	    return this;
	  },

	  /**
	   * [remove description]
	   * @return {[type]} [description]
	   */
	  remove: function remove() {
	    this.lines.each(function (line) {
	      line.destroy();
	    });

	    return this;
	  }

	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _menu = __webpack_require__(108);

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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(22);

	var _controller2 = _interopRequireDefault(_controller);

	var _container = __webpack_require__(4);

	var _container2 = _interopRequireDefault(_container);

	var _button = __webpack_require__(23);

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

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _options, _ref;

	var _border = __webpack_require__(106);

	var _border2 = _interopRequireDefault(_border);

	var _menu = __webpack_require__(110);

	var _menu2 = _interopRequireDefault(_menu);

	var _resizer = __webpack_require__(111);

	var _resizer2 = _interopRequireDefault(_resizer);

	var _overlay = __webpack_require__(112);

	var _overlay2 = _interopRequireDefault(_overlay);

	var _mask = __webpack_require__(113);

	var _mask2 = _interopRequireDefault(_mask);

	var _status = __webpack_require__(114);

	var _status2 = _interopRequireDefault(_status);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = new Class((_ref = {

	  Implements: [Events, Options],

	  options: (_options = {
	    container: document.body,
	    scope: document.body,
	    target: document.body,
	    trigger: 'click',

	    clss: 'ui-selector',
	    prefix: 'pages',
	    zIndex: 100,
	    wrapper: {
	      tagName: 'div',
	      clss: 'ui-selector'
	    },
	    common: {
	      color: 'orange'
	    },
	    border: {
	      size: 2,
	      opacity: '.8',
	      location: 'inside',
	      color: 'orange'
	    },
	    menu: {
	      location: 'inside',
	      position: 'top right',
	      list: {
	        edit: {
	          text: 'edit'
	        }
	      }
	    },
	    mask: {
	      opacity: '1',
	      color: 'rgba(0,0,0,.6)'
	      //usefx: true
	    },
	    components: [],
	    toolbar: false
	  }, _defineProperty(_options, 'menu', false), _defineProperty(_options, 'border', {
	    size: 1,
	    display: 'none'
	  }), _defineProperty(_options, 'resizer', true), _defineProperty(_options, 'overlay', false), _defineProperty(_options, 'cookie', {
	    duration: 365,
	    path: '/'
	  }), _defineProperty(_options, 'usefx', true), _defineProperty(_options, 'enable', true), _defineProperty(_options, 'timerOnHide', 0), _defineProperty(_options, 'onCatch', {}), _defineProperty(_options, 'onDisable', {}), _defineProperty(_options, 'onEnable', {}), _defineProperty(_options, 'positionning', 'relative'), _options),

	  /**
	   * initialize
	   * @param  {Object} options
	   * @return {void}
	   */
	  initialize: function initialize(options) {
	    //_log.debug('setOptions', options);
	    this.setOptions(options);

	    //_log.debug('options.delegation', this.options.delegation);

	    this.selectors = [];

	    this.container = this.options.container;

	    var scope = this.options.scope || this.container;
	    var target = this.options.target;

	    this.name = this.options.prefix + '-' + this.options.name;
	    this.size = {};

	    this.timer = null;

	    //_log.debug('UI.Selector.init(scope,target)',this.name);

	    this._initElement(this.options.components);
	    this._initEvents(scope, target);

	    //_log.debug('shoud hide this');
	    if (this.options.enable) {
	      this.enable();
	    }
	    this.hideNow();
	  },

	  /**
	   * [update description]
	   * @return {[type]} [description]
	   */
	  update: function update() {

	    var scope = this.options.scope;
	    var target = this.options.target;

	    this._initEvents(scope, target);
	  },

	  /**
	   * [_initEvents description]
	   * @param  {[type]} scope  [description]
	   * @param  {[type]} target [description]
	   * @return {[type]}        [description]
	   */
	  _initEvents: function _initEvents(scope, target) {
	    //_log.debug('_initEvents(scope,target)', typeOf(scope), target);
	    //var delay = 20;
	    var self = this;

	    //_log.debug('UI.Selector._initEvents(scope,target)',typeOf(scope),target);

	    var delegation = self.options.trigger + ':relay(' + target + ')';

	    //_log.debug(delegation, scope);

	    scope.addEvent(delegation, function (ev, target) {
	      //_log.debug('reach', el);
	      self.reach(target);
	    });

	    /*pages.addEvent('resize', function() {
	      self.reach(self.el);
	    });*/
	  },

	  /**
	   * [attachElement description]
	   * @param  {[type]} el [description]
	   * @return {[type]}    [description]
	   */
	  attachElement: function attachElement(el) {
	    //_log.debug('UI.Selector._initEvents(scope,target)',scope,target);
	    //var delay = 20;
	    var self = this;

	    //_log.debug('UI.Selector._setEventsElement',el,self.options.trigger);

	    el.addEvent(self.options.trigger, function () {
	      self.reach(el);
	    });

	    el.addEvents({
	      mouseenter: function mouseenter(e) {
	        //e.stop();
	        clearTimeout(self.timer);
	      },
	      mouseover: function mouseover(e) {
	        //self.reach(el);
	        //e.stop();
	        clearTimeout(self.timer);
	      }
	    });

	    /*pages.addEvent('resize', function() {
	      self.reach(self.el);
	    });*/
	  },

	  /**
	   * [_initElement description]
	   * @param  {[type]} components [description]
	   * @return {[type]}            [description]
	   */
	  _initElement: function _initElement(components) {
	    var self = this;

	    this.wrapper = new Element('div', {
	      'class': this.options.wrapper.clss,
	      zIndex: this.options.zIndex
	    }).set('data-selector', this.options.name).inject(this.options.container, 'top');

	    components.each(function (name) {
	      //_log.debug('Selector _initElement',name);
	      self.options[name].content = self.options.container;
	      var build = 'build' + name.capitalize();
	      if (!self.options[name].usefx) {
	        self.options[name].usefx = self.options.usefx;
	      }

	      self.selectors.push(self[build](self.options[name]));
	    });

	    if (this.isEnable()) {
	      this.enable();
	    } else {
	      this.disable();
	    }

	    return this.wrapper;
	  },

	  /**
	   * [buildComponent description]
	   * @return {[type]} [description]
	   */
	  buildComponent: function buildComponent() {},

	  /**
	   * [buildBorder description]
	   * @param  {[type]} options [description]
	   * @return {[type]}         [description]
	   */
	  buildBorder: function buildBorder(options) {
	    var self = this;
	    //_log.debug();

	    options.positionning = this.options.positionning;

	    this.border = new _border2.default(this.wrapper, options);

	    this.addEvents({
	      show: function show() {
	        self.border.show();
	      },
	      hide: function hide() {
	        self.border.hide();
	      },
	      reach: function reach(el) {
	        self.border.reach(el);
	      },
	      repos: function repos(el) {
	        //_log.debug('reepos', el);
	        self.border.reach(el);
	      },
	      highlight: function highlight(color) {
	        self.border.highlight(color);
	      }
	    });
	  },

	  /**
	   * [buildMask description]
	   * @param  {[type]} opts [description]
	   * @return {[type]}      [description]
	   */
	  buildMask: function buildMask(opts) {
	    var self = this;

	    opts.positionning = this.options.positionning;

	    opts.scope = this.options.scope;

	    this.mask = new _mask2.default(this.wrapper, opts);

	    this.mask.addEvent('click', function (ev) {
	      self.fireEvent('click', ev);
	    });

	    this.addEvents({
	      show: function show() {
	        self.mask.show();
	      },
	      hide: function hide() {
	        self.mask.hide();
	      },
	      reach: function reach(el) {
	        self.mask.reach(el);
	      },
	      repos: function repos(el) {
	        self.mask.reach(el);
	      },
	      highlight: function highlight(color) {
	        self.mask.highlight(color);
	      }
	    });
	  },

	  /**
	   * [buildResizer description]
	   * @param  {[type]} options [description]
	   * @return {[type]}         [description]
	   */
	  buildResizer: function buildResizer(options) {
	    var self = this;

	    this.resizer = new _resizer2.default(this.wrapper, options).addEvents({
	      mouseleave: function mouseleave() {
	        self.hide();
	      },
	      mouseenter: function mouseenter() {
	        clearTimeout(self.timer);
	      }
	    });

	    this.addEvents({
	      show: function show(el) {
	        self.resizer.show();
	      },
	      hide: function hide(el) {
	        self.resizer.hide();
	      },
	      reach: function reach(el) {
	        self.resizer.reach(el);
	      },
	      repos: function repos(el) {
	        self.resizer.reach(el);
	      }
	    });
	  },

	  /**
	   * [buildMenu description]
	   * @param  {[type]} options [description]
	   * @return {[type]}         [description]
	   */
	  buildMenu: function buildMenu(options) {
	    //_log.debug('buildMenu', options);
	    //_log.debug('buildMenu', this.options.name, options);
	    var self = this;
	    //var left = null;
	    //var right = null;

	    // _log.debug( this.wrapper, options);

	    options.positionning = this.options.positionning;

	    this.menu = new _menu2.default(this.wrapper, options).addEvent('click', function (menu) {
	      //_log.debug('menu click', menu);
	      self.fireEvent('menu', menu);
	    });

	    if (this.options.timerOnHide) {
	      this.menu.element.addEvents({
	        mouseleave: function mouseleave() {
	          self.hide();
	        },
	        mouseenter: function mouseenter() {
	          clearTimeout(self.timer);
	        }
	      });
	    }

	    this.addEvents({
	      show: function show() {
	        self.menu.element.show();
	      },
	      hide: function hide() {
	        self.menu.element.hide();
	      },
	      reach: function reach(el) {
	        self.menu.reach(el);
	      },
	      repos: function repos(el) {
	        self.menu.reach(el);
	      },
	      highlight: function highlight(color) {
	        self.menu.element.highlight(color);
	      }
	    });
	  },

	  /**
	   * [buildStatus description]
	   * @param  {[type]} options [description]
	   * @return {[type]}         [description]
	   */
	  buildStatus: function buildStatus(options) {
	    //_log.debug('buildMenu', this.options.name, options);

	    var self = this;
	    //var left = null;
	    //var right = null;

	    //_log.debug( this.wrapper);

	    this.status = new _status2.default(this.wrapper, options);

	    if (this.options.timerOnHide) {
	      this.status.element.addEvents({
	        mouseleave: function mouseleave() {
	          self.hide();
	        },
	        mouseenter: function mouseenter() {
	          clearTimeout(self.timer);
	        }
	      });
	    }

	    this.addEvents({
	      show: function show() {
	        self.status.element.show();
	      },
	      hide: function hide() {
	        self.status.element.hide();
	      },
	      reach: function reach(el) {
	        self.status.reach(el);
	      },
	      repos: function repos(el) {
	        self.status.reach(el);
	      },
	      highlight: function highlight(color) {
	        self.status.element.highlight(color);
	      }
	    });
	  },

	  /**
	   * [_initOverlay description]
	   * @return {[type]} [description]
	   */
	  _initOverlay: function _initOverlay() {
	    var self = this;

	    this.overlay = new _overlay2.default({
	      container: this.options.container
	    }).addEvents({
	      click: function click() {
	        self.fireEvent('click', self.el);
	      },
	      dblclick: function dblclick() {
	        self.fireEvent('dblclick', self.el);
	      }
	    });

	    if (this.options.timerOnHide) {
	      this.overlay.element.addEvents({
	        mouseleave: function mouseleave() {
	          clearTimeout(self.timer);
	          self.hide();
	        },
	        mouseenter: function mouseenter() {
	          //_log.debug('enteroverlay');
	          clearTimeout(self.timer);
	        }

	      });
	    }

	    this.addEvents({
	      show: function show(el) {
	        self.overlay.show();
	      },
	      hide: function hide(el) {
	        self.overlay.hide();
	      },
	      reach: function reach(el) {
	        self.overlay.reach(el);
	      },
	      repos: function repos(el) {
	        self.overlay.reach(el);
	      },
	      highlight: function highlight(color) {
	        self.overlay.highlight(color);
	      }
	    });
	  },

	  /**
	   * [set description]
	   */
	  set: function set() {},

	  /**
	   * [reach description]
	   * @param  {[type]} el [description]
	   * @return {[type]}    [description]
	   */
	  reach: function reach(el) {
	    if (el) {
	      this.el = el;
	    } else if (this.el) {
	      el = this.el;
	    } else {
	      return;
	    }

	    //_log.debug('reach',el);

	    if (this.isEnable) {
	      this.show();
	      this.fireEvent('reach', el);
	    }
	  },

	  /**
	   * [repos description]
	   * @param  {[type]} el [description]
	   * @return {[type]}    [description]
	   */
	  repos: function repos(el) {
	    //_log.debug('repos', el);
	    if (el) {
	      this.el = el;
	    } else if (this.el) {
	      el = this.el;
	    } else {
	      return;
	    }

	    if (this.isEnable) {
	      //_log.debug('repos', el);
	      this.show();
	      this.fireEvent('repos', el);
	    }
	  }

	}, _defineProperty(_ref, 'set', function set(name, value) {
	  //_log.debug(name, value);

	  var self = this;

	  if (name) {
	    this[name][name](value);
	  } else {
	    this.selectors.each(function (name) {
	      self[name][name](value);
	    });
	  }

	  return this;
	}), _defineProperty(_ref, 'add', function add(type) {}), _defineProperty(_ref, 'remove', function remove(type) {}), _defineProperty(_ref, 'hide', function hide() {
	  clearTimeout(this.timer);
	  this.timer = function () {
	    this.fireEvent('hide');
	  }.delay(this.options.timerOnHide, this);
	}), _defineProperty(_ref, 'hideNow', function hideNow() {
	  clearTimeout(this.timer);
	  this.fireEvent('hide');
	}), _defineProperty(_ref, 'show', function show() {
	  clearTimeout(this.timer);
	  if (this.isEnable) {
	    this.fireEvent('show');
	  }
	}), _defineProperty(_ref, 'highlight', function highlight(color) {
	  if (this.isEnable) {
	    this.fireEvent('highlight', color);
	  }
	}), _defineProperty(_ref, 'enable', function enable(selector) {
	  //_log.debug('enable', this.options.name);

	  this.isEnable = true;
	  Cookie.write(this.name, '1', this.options.cookie);
	  //this.show();
	}), _defineProperty(_ref, 'disable', function disable(selector) {
	  //_log.debug('disable', this.options.name);

	  this.isEnable = false;
	  Cookie.write(this.name, '0', this.options.cookie);
	  this.hideNow();
	}), _defineProperty(_ref, 'isEnable', function isEnable() {
	  if (Cookie.read(this.name) === '1') {
	    return true;
	  } else {
	    return false;
	  }
	}), _defineProperty(_ref, 'toggle', function toggle() {
	  if (Cookie.read(this.name) === '1') {
	    this.disable();
	  } else {
	    this.enable();
	  }
	}), _ref));

/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _log = __debug('ui-selector-menu').defineLevel();

	exports.default = new Class({

	  Implements: [Events, Options],

	  options: {
	    container: document.body,
	    //type: 'small',
	    zIndex: 200,
	    //clss: 'selector-menu',
	    position: 'top left',
	    location: 'outside',
	    offset: [1, 1],
	    positionning: 'absolute',
	    effect: {
	      duration: 100,
	      transition: 'expo:out',
	      link: 'cancel'
	    }
	  },

	  initialize: function initialize(container, options) {
	    this.setOptions(options);

	    this.container = container;

	    var offset = this.options.offset;

	    _log.debug('selector-view', this.options);

	    if (typeOf(offset) == 'number') {
	      this.offset = [offset, offset];
	    } else {
	      this.offset = offset;
	    }

	    this.menus = [];

	    this._initElement(container);
	  },

	  _initElement: function _initElement(container) {
	    //_log.debug('_initElement menu', this.options);

	    this.element = new Element('ul', {
	      'class': 'ui-menu type-selector',
	      'zIndex': this.options.zIndex
	    }).inject(container);

	    this.fx = new Fx.Morph(this.element, this.options.effect);

	    this.element.addEvents({
	      mouseenter: function mouseenter(e) {
	        e.stop();
	      },
	      mouseover: function mouseover(e) {
	        e.stop();
	      }

	    });

	    if (this.options.klss) {
	      this.element.addClass(this.options.klss);
	    }

	    this.element.addEvent('click', function (e) {
	      e.stop();
	    });

	    //_log.debug('buildmenu', this.options.list);
	    this.buildMenu();
	  },

	  /**
	   * [buildMenu description]
	   * @return {[type]} [description]
	   */
	  buildMenu: function buildMenu() {
	    var self = this;
	    var list = this.options.list;
	    //_log.debug('buildmenu', typeof list);

	    var size = 0;

	    for (var name in list) {
	      //_log.debug('menu', name);
	      // list.each(function(menu){
	      var menu = list[name];

	      //var item = new Button();

	      var item = new Element('li', {
	        class: 'ui-icon menu-' + name,
	        name: name
	        //html: menu.text
	      }).set(menu.options);

	      if (menu.klss) {
	        item.addClass(menu.klss);
	      }

	      if (menu.type) {
	        item.addClass('type-' + menu.type);
	      }

	      this.menus.push(menu);

	      item.addEvents({
	        click: function click(e) {
	          //_log.debug('clicked', this.get('name'));
	          self.fireEvent('click', this.get('name'));
	        }
	      });

	      item.inject(this.element);

	      size = size + item.getSize().x;
	    }

	    this.element.setStyle('width', size);
	  },

	  /**
	   * [reach description]
	   * @param  {[type]} el [description]
	   * @return {[type]}    [description]
	   */
	  reach: function reach(el) {
	    if (!el) {
	      if (this.el) {
	        el = this.el;
	      } else {
	        return;
	      }
	    } else {
	      this.el = el;
	    }

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

	    if (this.options.usefx) {
	      this.fx.start({
	        top: top,
	        bottom: bottom,
	        left: left,
	        right: right
	      });
	    } else {
	      this.element.setStyles({
	        position: 'absolute',
	        top: top,
	        bottom: bottom,
	        left: left,
	        right: right
	      });
	    }
	  },

	  /**
	   * [getParent description]
	   * @return {[type]} [description]
	   */
	  getParent: function getParent() {
	    return this.parent;
	  },

	  /**
	   * [hide description]
	   * @return {[type]} [description]
	   */
	  hide: function hide() {
	    this.element.hide();
	  },

	  /**
	   * [show description]
	   * @return {[type]} [description]
	   */
	  show: function show() {
	    this.element.show();
	  }

	});

/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Class({

	  Implements: [Events, Options],

	  options: {
	    container: document.body,
	    type: 'border',
	    clss: 'selector-resizer',
	    handler: {
	      size: 3
	    },
	    //['n', 'e', 's', 'w'] or ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']
	    positions: ['n', 'e', 's', 'w'],
	    styles: {
	      display: 'none',
	      zIndex: 1200,
	      border: '1px solid #71aad3',
	      backgroundColor: '#fff',
	      cursor: 'resize',
	      boxSizing: 'content-box'
	    }
	  },

	  /**
	   * [initialize description]
	   * @param  {[type]} container [description]
	   * @param  {[type]} options   [description]
	   * @return {[type]}           [description]
	   */
	  initialize: function initialize(container, options) {
	    this.setOptions(options);

	    this.container = container;

	    //_log.debug('resizer init:',container,options);

	    this.handlers = [];
	    this.container = container;

	    this._initElement();
	  },

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {
	    //var position = 'absolute';
	    //if (el.isFixed()) position = 'fixed';

	    var i = 0;
	    this.options.positions.each(function (position) {
	      this.buildHandler(position);
	      i++;
	    }, this);
	  },

	  /**
	   * [buildHandler description]
	   * @param  {[type]} position [description]
	   * @return {[type]}          [description]
	   */
	  buildHandler: function buildHandler(position) {
	    var self = this;
	    var pos = 'absolute';

	    var handler = new Element("div").setStyles(this.options.styles).setStyle('position', pos).store('position', position).set('class', position).inject(this.container, 'top').addEvents({
	      click: function click(e) {
	        new Event(e).stop();
	        //_log.debug(this.get('class')+':click');
	      },
	      mouseenter: function mouseenter(e) {
	        self.fireEvent('mouseenter', this);
	      },
	      mouseleave: function mouseleave(e) {
	        self.fireEvent('moussleave', this);
	      }
	    });

	    this.handlers.push(handler);
	  },

	  /**
	   * [reach description]
	   * @param  {[type]} el [description]
	   * @return {[type]}    [description]
	   */
	  reach: function reach(el) {
	    if (!el) {
	      return;
	    }
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
	      n: [c.top - offset, c.right - (c.right - c.left) / 2 - offset],
	      ne: [c.top - offset, c.right - offset + 1],
	      e: [c.bottom - (c.bottom - c.top) / 2 - offset, c.right - offset + 1],
	      se: [c.bottom - offset + 1, c.right - offset + 1],
	      s: [c.bottom - offset + 1, c.left + (c.right - c.left) / 2 - offset],
	      sw: [c.bottom - offset + 1, c.left - offset],
	      w: [c.top + (c.bottom - c.top) / 2 - offset, c.left - offset]
	    };

	    this.handlers.each(function (handler) {
	      var coor = infos[handler.retrieve('position')];
	      this.setHandlerPosition(handler, coor);
	    }, this);
	  },

	  /**
	   * [setHandlerPosition description]
	   * @param {[type]} handler [description]
	   * @param {[type]} coor    [description]
	   */
	  setHandlerPosition: function setHandlerPosition(handler, coor) {
	    handler.setStyles({
	      'margin-top': coor[0],
	      'margin-left': coor[1],
	      'width': this.options.handler.size,
	      'height': this.options.handler.size
	    });
	  },

	  /**
	   * [remove description]
	   * @return {[type]} [description]
	   */
	  remove: function remove() {
	    this.handlers.each(function (handler) {
	      handler.destroy();
	    }, this);
	  },

	  /**
	   * [hide description]
	   * @return {[type]} [description]
	   */
	  hide: function hide() {
	    this.handlers.each(function (handler) {
	      handler.setStyle('display', 'none');
	    }, this);
	  },

	  /**
	   * [show description]
	   * @return {[type]} [description]
	   */
	  show: function show() {
	    this.handlers.each(function (handler) {
	      handler.setStyle('display', 'block');
	    }, this);
	  }

	});

/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Class({

	  Implements: [Events, Options],

	  options: {
	    container: document.body,
	    clss: 'selector-overlay',
	    offset: '0',
	    styles: {
	      position: 'absolute',
	      zIndex: '1000'
	      //background: 'rgba(0,0,0,.2)'
	    }
	  },

	  /**
	   * [initialize description]
	   * @param  {[type]} options [description]
	   * @return {[type]}         [description]
	   */
	  initialize: function initialize(options) {
	    this.setOptions(options);
	    this._initElement();
	  },

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {
	    var self = this;
	    var position = 'absolute';
	    //if (element.isFixed()) position = 'fixed';
	    var timer;
	    this.element = new Element('div', {
	      'class': this.options.clss
	    }).setStyles(this.options.styles).setStyle('position', position).addEvents({
	      'mouseover': function mouseover(e) {},
	      'click': function click(e) {
	        e.stop();
	        clearTimeout(timer);
	        timer = function () {
	          self.fireEvent('click', self.el);
	          self.hide();
	        }.delay(200, this);
	      },
	      dblclick: function dblclick() {
	        clearTimeout(timer);
	        self.fireEvent('dblclick');
	      }
	    }).inject(this.options.container, 'top');
	  },

	  /**
	   * [reach description]
	   * @param  {[type]} el [description]
	   * @return {[type]}    [description]
	   */
	  reach: function reach(el) {
	    this.el = el;
	    var offset = this.options.offset;
	    var c = el.getCoordinates();

	    this.element.setStyles({
	      'margin-top': c.top - offset,
	      'margin-left': c.left - offset,
	      'width': c.right - c.left + 2 * offset,
	      'height': c.bottom - c.top + 2 * offset
	    });
	  },

	  /**
	   * [remove description]
	   * @return {[type]} [description]
	   */
	  remove: function remove() {
	    this.element.destroy();
	  },

	  /**
	   * [hide description]
	   * @return {[type]} [description]
	   */
	  hide: function hide() {
	    this.element.hide();
	  },

	  /**
	   * [show description]
	   * @return {[type]} [description]
	   */
	  show: function show() {
	    this.element.show();
	  },

	  /**
	   * [highlight description]
	   * @param  {[type]} color [description]
	   * @return {[type]}       [description]
	   */
	  highlight: function highlight(color) {
	    this.element.highlight(color);
	  }

	});

/***/ },
/* 113 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Class({

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

	  /**
	   * [initialize description]
	   * @param  {[type]} container [description]
	   * @param  {[type]} options   [description]
	   * @return {[type]}           [description]
	   */
	  initialize: function initialize(container, options) {
	    this.setOptions(options);

	    this.container = container;
	    this.masks = [];

	    this._initElement();
	  },

	  /**
	   * [_initElement description]
	   * @return {[type]} [description]
	   */
	  _initElement: function _initElement() {
	    var masks = [[], [], [], []];

	    masks.each(function (mask) {
	      this.buildMask();
	    }, this);
	  },

	  /**
	   * [buildMask description]
	   * @return {[type]} [description]
	   */
	  buildMask: function buildMask() {
	    var self = this;

	    var mask = new Element("div", {
	      'class': this.options.clss
	    }).addClass('type-' + self.options.type).setStyles({
	      'zIndex': this.options.zIndex,
	      'backgroundColor': this.options.color,
	      'opacity': this.options.opacity
	    }).addEvent('click', function () {
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

	  /**
	   * [reach description]
	   * @param  {[type]} el [description]
	   * @return {[type]}    [description]
	   */
	  reach: function reach(el) {
	    if (!el) {
	      return;
	    }
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

	    infos = [[0, 0, c.left - offset, content.y], [0, c.left - offset, c.width + offset * 2, c.top - offset], [0, c.right + offset, content.x - c.right, content.y], [c.top + c.height + offset, c.left - offset, c.width + offset * 2, content.y - c.bottom]];

	    this.masks.each(function (mask, i) {
	      this._setMaskPosition(mask, infos[i]);
	    }, this);

	    this.fireEvent('selected');

	    return this;
	  },

	  /**
	   * [addClass description]
	   * @param {[type]} c [description]
	   */
	  addClass: function addClass(c) {
	    this.masks.each(function (mask, i) {
	      mask.addClass(c);
	    }, this);
	  },

	  /**
	   * [removeClass description]
	   * @param  {[type]} c [description]
	   * @return {[type]}   [description]
	   */
	  removeClass: function removeClass(c) {
	    this.masks.each(function (mask, i) {
	      mask.addClass(c);
	    }, this);
	  },

	  /**
	   * [_setMaskPosition description]
	   * @param {[type]} mask [description]
	   * @param {[type]} info [description]
	   */
	  _setMaskPosition: function _setMaskPosition(mask, info) {

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

	  /**
	   * [set description]
	   * @param {[type]} name  [description]
	   * @param {[type]} value [description]
	   */
	  set: function set(name, value) {
	    if (selector) {
	      self[selector][name](value);
	    } else {
	      this.selectors.each(function (selector) {
	        self[selector][name](value);
	      });
	    }

	    return this;
	  },

	  /**
	   * [setColor description]
	   * @param {[type]} color [description]
	   */
	  setColor: function setColor(color) {
	    this._setStyle('backgroundColor', color);
	  },

	  /**
	   * [_setStyle description]
	   * @param {[type]} name  [description]
	   * @param {[type]} value [description]
	   */
	  _setStyle: function _setStyle(name, value) {
	    var self = this;
	    this.masks.each(function (mask) {
	      if (self.options.usefx) {
	        mask.tween(name, value);
	      } else {
	        mask.setStyle(name, value);
	      }
	    });

	    return this;
	  },

	  /**
	   * [setStyles description]
	   * @param {[type]} styles [description]
	   */
	  setStyles: function setStyles(styles) {
	    var self = this;

	    this.masks.each(function (mask) {
	      if (self.options.usefx) {
	        mask.morph(styles);
	      } else {
	        mask.setStyles(styles);
	      }
	    });

	    return this;
	  },

	  /**
	   * [hide description]
	   * @return {[type]} [description]
	   */
	  hide: function hide() {
	    this.masks.each(function (mask) {
	      mask.setStyle('display', 'none');
	    });

	    return this;
	  },

	  /**
	   * [show description]
	   * @return {[type]} [description]
	   */
	  show: function show() {
	    this.masks.each(function (mask) {
	      mask.setStyle('display', 'block');
	    });

	    return this;
	  },

	  /**
	   * [highlight description]
	   * @param  {[type]} color [description]
	   * @return {[type]}       [description]
	   */
	  highlight: function highlight(color) {
	    this.masks.each(function (mask) {
	      mask.highlight(color);
	    });

	    return this;
	  },

	  /**
	   * [remove description]
	   * @return {[type]} [description]
	   */
	  remove: function remove() {
	    this.masks.each(function (mask) {
	      mask.destroy();
	    });

	    return this;
	  }

	});

/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Class({

	  Implements: [Events, Options],

	  options: {
	    container: document.body,
	    type: 'status',
	    zIndex: 3,
	    clss: 'selector-status',
	    position: 'top left',
	    location: 'outside',
	    offset: [1, 1],
	    effect: {
	      duration: 100,
	      transition: 'expo:out',
	      link: 'cancel'
	    }
	  },

	  /**
	   * [initialize description]
	   * @param  {[type]} container [description]
	   * @param  {[type]} options   [description]
	   * @return {[type]}           [description]
	   */
	  initialize: function initialize(container, options) {
	    this.setOptions(options);

	    var offset = this.options.offset;
	    //_log.debug(typeOf(offset));

	    if (typeOf(offset) == 'number') {
	      this.offset = [offset, offset];
	    } else {
	      this.offset = offset;
	    }

	    this._initElement(container);
	  },

	  /**
	   * [_initElement description]
	   * @param  {[type]} container [description]
	   * @return {[type]}           [description]
	   */
	  _initElement: function _initElement(container) {
	    //_log.debug('_initElement menu', this.options);

	    this.element = new Element('span', {
	      'class': this.options.clss,
	      'zIndex': this.options.zIndex,
	      html: 'status'
	    }).inject(container);

	    this.fx = new Fx.Morph(this.element, this.options.effect);
	  },

	  /**
	   * [setStatus description]
	   * @param {[type]} status [description]
	   */
	  setStatus: function setStatus(status) {
	    //_log.debug('setStatus', status );
	    this.element.set('html', status);
	  },

	  /**
	   * [getStatus description]
	   * @param  {[type]} el [description]
	   * @return {[type]}    [description]
	   */
	  getStatus: function getStatus(el) {
	    var opts = this.options,
	        status = '';

	    if (opts.dataset) {
	      var dataset = el.dataset[opts.dataset];
	      var ds = dataset.split('.');
	      if (ds.length > 1) {
	        status += status + ds[1];
	      } else {
	        status += status + ds;
	      }
	    }

	    if (opts.attr) {
	      status += el.get(opts.attr);
	    }

	    return status;
	  },

	  /**
	   * [reach description]
	   * @param  {[type]} el [description]
	   * @return {[type]}    [description]
	   */
	  reach: function reach(el) {
	    if (!el) {
	      if (this.el) {
	        el = this.el;
	      } else {
	        return;
	      }
	    } else {
	      this.el = el;
	    }

	    var opts = this.options;

	    //this.setStatus(this.getStatus(el));
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

	    if (this.options.usefx) {
	      this.fx.start({
	        top: top,
	        bottom: bottom,
	        left: left,
	        right: right
	      });
	    } else {
	      this.element.setStyles({
	        position: 'absolute',
	        top: top,
	        bottom: bottom,
	        left: left,
	        right: right
	      });
	    }
	  },

	  /**
	   * [getParent description]
	   * @return {[type]} [description]
	   */
	  getParent: function getParent() {
	    return this.parent;
	  },

	  /**
	   * [hide description]
	   * @return {[type]} [description]
	   */
	  hide: function hide() {
	    this.element.hide();
	  },

	  /**
	   * [show description]
	   * @return {[type]} [description]
	   */
	  show: function show() {
	    this.element.show();
	  }

	});

/***/ },
/* 115 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * map app name with ui-icon-
	 */
	exports.default = {
	  template: 'mdi-app-template',
	  news: 'mdi-app-news',
	  files: 'mdi-app-files',
	  cases: 'minimal-icon-folder-open',
	  customers: 'mdi-social-people',
	  course: 'mdi-social-school',
	  sessions: 'mdi-social-group-add',
	  jobs: 'minimal-icon-briefcase',
	  datatype: 'minimal-icon-cubes',
	  export: 'mdi-file-file-download',
	  hds_accounts: 'mdi-social-domain',
	  accounts: 'mdi-social-domain',
	  website: 'mdi-action-explore',
	  content: 'mdi-action-description',
	  inventory: 'mdi-action-description',
	  items: 'mdi-action-description',
	  mail: 'mdi-maps-local-post-office',
	  lists: 'mdi-action-list',
	  messages: 'mdi-communication-message',
	  tracker: 'mdi-action-track-changes',
	  contacts: 'mdi-communication-contacts',
	  participants: 'mdi-communication-contacts',
	  directory: 'mdi-action-bookmark',
	  mailing: 'mdi-content-send',
	  invoices: 'mdi-action-receipt',
	  sprints: 'mdi-action-run',
	  quotes: 'mdi-action-receipt',
	  orders: 'mdi-action-receipt',
	  changes: 'mdi-action-assignment-turned-in',
	  resources: 'mdi-social-people',
	  activity: 'mdi-maps-traffic',
	  places: 'mdi-maps-place',
	  agenda: 'mdi-action-event',
	  backup: 'mdi-action-dns',
	  inbox: 'mdi-content-inbox',
	  desktop: 'mdi-action-open-in-browser',
	  logs: 'mdi-action-list',
	  ticket: 'mdi-action-input',
	  trash: 'mdi-action-delete',
	  shares: 'mdi-social-share',
	  users: 'mdi-action-account-box',
	  roles: 'mdi-action-assignment-ind',
	  document: 'mdi-action-description'
	};

/***/ }
/******/ ])
});
;