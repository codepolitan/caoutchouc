/**
 * View
 * @class View
 * @since 0.0.1
 * @author Jerome Vial, Bruno Santos
 */
require('debug');
var UIContainer = require('container/container');
var Layout = require('layout/layout');
var Toolbar = require('toolbar/toolbar');
var Binding = require('component/binding');
var Container = require('view/container');
var Dragging = require('view/dragging');
var Limit = require('view/limit');
var Loader = require('view/loader');
var Scroll = require('view/scroll');
var Zoom = require('view/zoom');
var scriptjs = require('scriptjs');

var _log = __debug('view').defineLevel();

var View = new Class({

  Implements: [
    Events,
    Options,
    Binding,
    Toolbar,

    Container,
    Dragging,
    Limit,
    Loader,
    Scroll,
    Zoom
  ],

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
  initialize: function(options) {
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
  _init: function(opts) {
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
  _initView: function() {
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
  _initContent: function() {
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
  focus: function() {
    _log.debug('focus');

    this.fireEvent('focus');
    this.fireEvent('render');
  },

  /**
   * initialize the user interface
   * @return {void}
   * @private
   */
  _initLayout: function(layout) {
    _log.debug('_initLayout', layout);

    var opts = this.options;

    this.container = new UIContainer({
      container: opts.container,
      name: opts.name,
      node: opts.layout || opts.node
    });

    this.layout = new Layout({
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
  _initModules: function(modules, callback) {
    //_log.debug('initModule');

    scriptjs(modules, function() {
      callback();
    });
  },

  /**
   * initialize events
   * @return {void}
   * @private
   */
  _initEvents: function() {
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
  _initClass: function() {
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
  remove: function(element) {
    if (element.destroy) {
      element.destroy();
    }
  },

  /**
   * set title
   * @param {string} text
   * @return {Object}
   */
  setTitle: function(text) {
    _log.debug('setTitle', text);

    var self = this;

    (function() {
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
  getTitle: function() {
    //_log.debug('getTitle', this.container.getTitle());

    return this.container.getTitle();
  },

  /**
   * set status
   * @param {string} text
   */
  setStatus: function(text) {
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
  isVisible: function() {
    return this.visible;
  },

  /**
   * clear the content of the view
   * @return {void}
   */
  clear: function() {
    if (this.content && this.content.empty) {
      this.content.empty();
    }
  },

  /**
   * close
   * @return {Object}
   */
  close: function() {
    this.container.close();

    return this;
  },

  /**
   * initialize status
   * @return {void}
   * @private
   */
  _initStatus: function() {

  },

  /**
   * hide
   * @return {void}
   */
  hide: function() {
    _log.debug('hide');

    this.container.hide();
    this.visible = false;
  },

  /**
   * show
   * @return {void}
   */
  show: function() {
    _log.debug('show');

    this.container.setStyle('display', null);
    this.visible = true;
  }

});

module.exports = View;
