(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("border", [], factory);
	else if(typeof exports === 'object')
		exports["border"] = factory();
	else
		root["caoutchouc"] = root["caoutchouc"] || {}, root["caoutchouc"]["border"] = factory();
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

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
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

/***/ }
/******/ ])
});
;