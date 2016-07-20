/**
 * The UI.Container class defines objects manage the content of the container
 * that manage containers use by several object like windows, menus.
 * @class  UI.Container
 * @extends {UI.Component}
 * @author Bruno Santos, Jerome Vial
 */
define(function(require, exports, module) {

  var Component = require('ui/component/component');
  var Display = require('ui/container/display');

  var _log = __debug('ui-container');

  var Container = new Class({

    Extends: Component,

    Implements: [Options, Events, Display],

    name: 'container',

    options: {
      name: 'container',

      node: null,

      tag: 'div',
      /*resizable: false,
      resizeBorders: ['top','right','bottom','left']*/
    },

    /**
     * [initialize description]
     * @param  {Object} options [description]
     * @return {Object}         [description]
     */
    initialize: function(options) {
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
    _initElement: function() {
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
      this.addEvent('injected', function() {
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
    _initComponent: function() {
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
    _initComp: function(comp) {
      _log.debug('_initComp', comp);
      var self = this;

      if (typeOf(comp) === 'string') {
        this.addComp(comp);
      } else if (typeOf(comp) === 'object') {
        _log.debug('object');
      } else if (typeOf(comp) === 'array') {
        comp.each(function(name) {
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
    addComp: function(name, position, element) {
      _log.debug('addComp', name, position, element);
      position = position || 'bottom';
      element = element || this.element;

      if (!element) {
        _log.warn('container is', element);
        return;
      }

      var comp = this[name] = new Element('div')
        .addClass('container-' + name)
        .inject(element, position);

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
    _initClass: function() {
      this.parent();

      this.element.addClass('ui-container');
    },

    /**
     * create an overlay displayed when container is disabled (when moved or resized)
     * @return {void}
     */
    _initHead: function() {
      var self = this;

      this.head = new Element('div')
        .addClass('container-head')
        .inject(this.element, 'top')
        .addEvent('dblclick', function() {
          self.fireEvent('max');
        });
    },

    /**
     * [setTitle description]
     * @param {string} title
     */
    setTitle: function(title) {
      if (this.title && this.head) {
        return this.title.set('text', title);
      }
    },

    /**
     * [setTitle description]
     * @return {string}
     */
    getTitle: function() {
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
    _initFoot: function( /*options*/ ) {

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
    _initStatus: function(component /*, context*/ ) {

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
    _initOverlay: function() {
      var self = this;

      this.overlay = new Element('div', {
        'class': 'container-overlay'
      }).inject(this.element);

      this.addEvent('onLoadComplete', function() {
        this.overlay.hide();
      });

      this.overlay.hide();

      this.addEvents({
        onBlur: function() {
          //_log.debug('blur');
          self.overlay.show();
        },
        onDragComplete: function() {
          //_log.debug('darg com', ui.window.underlay);
          self.overlay.hide();
        },
        onDragStart: function() {
          //_log.debug('darg start', this);
          self.overlay.show();
        },
        onResizeComplete: function() {
          self.overlay.hide();
          this.coord = this.element.getCoordinates();
        },
        onResizeStart: function() {
          self.overlay.show();
        },
        resizeStart: function() {
          //_log.debug('darg start', this);
          self.overlay.show();
        },
        resizeStop: function() {
          //_log.debug('darg start', this);
          self.overlay.hide();
        },

      });
    },

    /**
     * [_initUnderlay description]
     * @return {void}
     */
    _initUnderlay: function() {
      //_log.debug('_initUnderlay', this.device);
      var self = this;

      this.underlay = new Element('div', {
        'class': 'dialog-underlay',
        styles: {
          zIndex: 10,
          //display: 'none'
        }
      }).inject(this.element, 'before');


      this.underlay.addEvent('click', function() {
        _log.debug('click underlay');
        self.minimize();
      });

      this.addEvent('close', function() {
        self.underlay.destroy();
      });
    },

    /**
     * [focus description]
     * @return {void}
     */
    focus: function() {
      this.setState('focus');
    }

  });

  module.exports = Container;

});
