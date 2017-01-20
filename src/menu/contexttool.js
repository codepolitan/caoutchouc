import Menu from './menu';

/**
 * Create a context menu
 * @description
 *  contexts - (array) An array containing contexts definition. A context definition is an object composed of following keys :
      a name key, who is the context name,
      a target key, who define on wich elements the context menu will be attached. It could be a CSS3 target as well.
      a menu key, who is a menu list as defined in <UI.Menu>.
 * @example
 *     var context = new UI.Context({
      contexts : [
        {
          name : 'workspace',
          target  : '.app-workspace',
          menu    : [
            { text: 'Workspace menu'},
            { text    : 'separator' },
            {
              text: 'Hello world...',
              action  : function(){ alert('Hello world!') }
            }
            { text    : 'viewSource'},
            { text    : 'separator' },
            { text    : 'deleteCategory'}
          ]
        },
        {
          name: 'pageinfo',
          target: '[id^=pageinfo]',
          menu: [
            {
              text: 'editCategory',
              action: function(){ this.test('dorpdown') }.bind(this)
            },
            { text: 'editCategoryApparence'}
          ]
        }
      ]
    });
 */
export default new Class({

  Extends: Menu,

  name: 'context',

  options: {
    name: 'context',
    scope: $(document.body),
    container: $(document.body),
    trigger: 'contextmenu'
  },

  /**
   * initialize
   * @param  {Object} options
   * @return {void}
   */
  initialize: function(options) {
    this.parent(options);

    _log.debug(this.options.container, this.element);

    this.element.inject(this.options.container);

    this._initContext();
  },

  /**
   * Call UI.Component _initElement, then create a menu wrapper
   * @return {[type]} [description]
   */
  _initElement: function() {
    var self = this,
      opts = this.options;

    _log.debug('UI.MEnu._initElement()', opts);

    this.element = new Element('div', {
      'class': 'ui-context',
      zIndex: opts.zIndex,
      display: 'none'
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
        self.content.getStyle('display', 'block');
      },
      hide: function() {
        self.content.getStyle('display', 'none');
      }
    });

    this.element.addEvent('click', function(e) {
      e.stop();
    });

    this.element.hide();
  },

  /**
   * Attach context to elements (provided by contexts.target)
   * @return {[type]} [description]
   */
  _initContext: function() {
    var self = this;
    var opts = this.options;
    var scope = opts.scope || $(document.body);

    _log.debug(scope, scope.getElements(opts.target));

    var delegation = self.options.trigger + ':relay(' + opts.target + ')';

    _log.debug(delegation);

    scope.addEvent(delegation, function(ev) {
      ev.stop();
      ev.preventDefault();
      ev.stopPropagation();

      self.target = ev.target;

      self.show(ev);
    });

    return this;
  },

  /**
   * [addList description]
   */
  addList: function() {

  },

  /**
   * [removeList description]
   * @return {[type]} [description]
   */
  removeList: function() {

  },

  /**
   * [_initEvents description]
   * @return {[type]} [description]
   */
  _initEvents: function() {
    this.parent();

    this.addEvents({
      show: function() {
        ui.menu.hideAll();
      }
    });
  },

  /**
   * Remove context to elements (defined by target)
   * @return {[type]} [description]
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
   * Overwrite the setPosition method of
   * UI.Menu to use mouse coordinates to set menu location
   * @param {[type]} x [description]
   * @param {[type]} y [description]
   */
  setPosition: function(x, y) {
    var opts = this.options;
    var container = opts.container;

    if ((x === null) || (y === null)) {
      return;
    }

    var pos = container.getPosition();

    _log.debug(pos, x, y);
    var y = y - pos.y;

    var coor = this.element.getCoordinates(container);
    var top = y;
    var left = x + this.options.container.getScrollLeft();

    if ((x + coor.width) > this.options.container.getWidth()) {
      left = left - coor.width;
    }
    if ((y + coor.height) > this.options.container.getHeight()) {
      //_log.debug('top', top);
      top = top; // - coor.height;
    }

    this.element.setStyles({
      'top': top,
      'left': left
    });
  },

  /**
   * [hide description]
   * @return {[type]} [description]
   */
  hide: function() {
    clearTimeout(this.timer);
    this.timer = (function() {
      this.close();
    }).delay(this.options.timerOnHide, this);
  },

  /**
   * [hideNow description]
   * @return {[type]} [description]
   */
  hideNow: function() {
    this.element.hide();
  },

  /**
   * Overwrite the show method of UI.Menu to use mouse coordinates
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  show: function(e) {
    this.fireEvent('show', e.target);

    this.element.show();
    //var coord = this.content.getCoordinates();
    //this.setSize(coord.width, coord.height);
    this.setPosition(e.client.x, e.client.y);

    return this;
  }

});
