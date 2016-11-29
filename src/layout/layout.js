import Container from '../container/container';
import Component from './component';
import Resize from './resize';

const _log = __debug('ui-layout').defineLevel();

export default new Class({

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
   * initialize
   * @param  {Object} options
   * @return {Object}
   */
  initialize: function(options) {
    this.setOptions(options);

    this._initLayout(this.options);

    return this;
  },

  /**
   * init layout
   * @param {Object} opts
   * @return {void}
   */
  _initLayout: function(opts) {
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
  _initEvents: function() {
    var self = this;

    window.addEvent('resize', function() {
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

    (function() {
      self.fireEvent('drag');
    }).delay(1000);
  },

  /**
   * init container
   * @param {Object} opts
   * @return {void}
   */
  _initContainer: function(opts) {

    this.container = new Container({
      resizable: false,
      'class': 'ui-layout layout-' + opts.node._name
    }).inject(opts.container);

    this.mask = new Element('div', {
      'class': 'layout-mask',
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
  _processComponents: function(node, type, level) {
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
  _initFlexDirection: function(container, axis) {
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
  setDevice: function(device) {
    _log.debug('setDevice');

    this.device = device;

    this.fireEvent('device', device);
  },

  /**
   * destroy
   * @return {void}
   */
  destroy: function() {
    this.container.destroy();
  }

});
