/**
 * UI Menu Context Class
 * @class UI.Menu.Context
 * @extends {UI.Menu}
 * @author Bruno Santos, Jerome Vial
 */
define([
  'UI/Menu/Menu'
], function(
  Menu
) {

  var _log = __debug('ui-menu-context').defineLevel();

  var exports = new Class({

    Extends: Menu,

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
    initialize: function(options) {
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
    _initElement: function() {
      _log.debug('_initElement');

      var self = this;
      var opts = this.options;

      this.element = new Element('div', {
        'class': 'ui-context',
        styles: {
          zIndex: opts.zIndex + 10
        }
      }).addEvents({
        mousediown: function(e) {
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
        show: function() {
          _log.debug('show');
          self.content.getStyle('display', 'block');
        },
        hide: function() {
          _log.debug('hide');
          self.content.getStyle('display', 'none');
        }
      });

      this.element.addEvent('click', function(e) {
        e.stop();
      });

      this.element.hide();
    },

    /**
     * init context
     * @return {Object}
     */
    _initContext: function() {
      var self = this;
      var opts = this.options;
      var scope = opts.scope || opts.container;

      scope.getElements(opts.target).each(function(el) {
        //_log.debug(el);
        self.addTarget(el);
      });

      // self.element.addEvent('contextmenu', function(e){
      // 	e.stop();
      // });

      return this;
    },

    /**
     * init underlay
     * @return {void}
     */
    _initUnderlay: function() {
      var self = this;
      var opts = this.options;

      var underlay = this.underlay = new Element('div', {
        'class': 'context-underlay',
        styles: {
          zIndex: opts.zIndex
        }
      }).addEvents({
        click: function() {
          _log.debug('click');
          underlay.setStyle('display', 'none');
          self.element.hide();
        }
      }).inject(opts.container);

      this.addEvents({
        show: function() {
          _log.debug('show');
          underlay.setStyle('display', 'block');
        }
      });
    },

    /**
     * @ignore
     */
    addList: function() {

    },

    /**
     * add target
     * @param {DOMElement} el
     */
    addTarget: function(el) {
      var self = this;

      el.addEvent(self.options.trigger, function(e) {
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
    removeList: function() {

    },

    /**
     * init events
     * @return {void}
     */
    _initEvents: function() {
      this.parent();

      this.addEvents({
        show: function() {
          _log.debug('show');
          //ui.menu.hideAll();
        },
        hide: function() {
          _log.debug('hide');
        }
      });
    },

    /**
     * Remove context to elements (defined by target)
     * @return {Object}
     */
    removeContexts: function() {
      //_log.debug('removeContext',this.options.scope);
      this.els.each(function(el) {
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
    setPosition: function(x, y) {
      var opts = this.options;
      var container = opts.container;

      if ((x === null) || (y === null)) {
        return;
      }

      var ctop = container.getPosition().y;

      var coor = this.element.getCoordinates();
      var top = y - ctop;
      var left = x - container.getPosition().x;

      if ((x + coor.width) > container.getWidth()) {
        left = left - coor.width;
      }
      if ((y + coor.height) > container.getHeight()) {
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
    hide: function() {
      _log.debug('hide');

      clearTimeout(this.timer);
      this.timer = (function() {
        this.close();
      }).delay(this.options.timerOnHide, this);
    },


    /**
     * hideNow function
     * @return {void}
     */
    hideNow: function() {
      this.element.hide();
    },

    /**
     * Overwrite the show method of UI.Menu to use mouse coordinates
     * @param  {Object} e
     * @return {Object}
     */
    show: function(e) {
      _log.debug('show', this);

      this.fireEvent('show', e.target);

      this.element.show();

      //var coord = this.content.getCoordinates();
      //this.setSize(coord.width, coord.height);
      this.setPosition(e.client.x, e.client.y);

      return this;
    }

  });

  return exports;

});
