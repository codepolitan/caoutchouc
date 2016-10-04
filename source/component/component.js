/**
 * Component Class
 * The base class for all ui components
 * @class UI.Component
 * @extends {UI}
 * @return {parent} Class
 * @example (start code)  new UI.Context(object); (end)
 * @author [moolego,r2d2]
 * @copyright © 1999-2015 - Jerome D. Vial. All Rights reserved.
 */
var Binding = require('component/binding');
var Method = require('component/method');
var Location = require('component/location');
var Drag = require('component/drag');
var Resize = require('component/resize');

var _log = __debug('ui-component');

module.exports = new Class({

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
    //ui.node[this.main][node.name] = container;
  },

  /**
   * [_initOptions description]
   * @return {void}
   */
  _initOptions: function() {
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
  _initState: function() {
    if (this.options.state) {
      this.setState(this.options.state);
    }
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
