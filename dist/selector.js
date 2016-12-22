(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("selector", [], factory);
	else if(typeof exports === 'object')
		exports["selector"] = factory();
	else
		root["caoutchouc"] = root["caoutchouc"] || {}, root["caoutchouc"]["selector"] = factory();
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

	module.exports = __webpack_require__(110);


/***/ },

/***/ 2:
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

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _options, _ref;

	var _border = __webpack_require__(2);

	var _border2 = _interopRequireDefault(_border);

	var _menu = __webpack_require__(111);

	var _menu2 = _interopRequireDefault(_menu);

	var _resizer = __webpack_require__(112);

	var _resizer2 = _interopRequireDefault(_resizer);

	var _overlay = __webpack_require__(113);

	var _overlay2 = _interopRequireDefault(_overlay);

	var _mask = __webpack_require__(114);

	var _mask2 = _interopRequireDefault(_mask);

	var _status = __webpack_require__(115);

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

/***/ 111:
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

/***/ 112:
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

/***/ 113:
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

/***/ 114:
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

/***/ 115:
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

/***/ }

/******/ })
});
;