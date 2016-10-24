import { Container } from '../container/container';

export default new Class({

  Extends: Container,

  name: 'tool',

  options: {
    base: 'component',
    name: 'tool',

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
   * [initialize description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  initialize: function(options) {
    this.setOptions(options);

    this.timer = null;

    if (this.options.type == 'drop') {
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
   * Call UI.Component _initElement, then create a menu wrapper
   * @return {[type]} [description]
   */
  _initElement: function() {
    var self = this,
      opts = this.options;

    //_log.debug('UI.MEnu._initElement()', opts);

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
      show: function() {
        self.content.getStyle('display', 'block');
      },
      hide: function() {
        self.content.getStyle('display', 'none');
      }
    });

    if (opts.open) {
      this.display = this.content.getStyle('display', 'block');
    }

    this.element.addEvent('click', function(e) {
      e.stop();
    });
  },

  /**
   * Call UI.Component _initHead, then create a menu wrapper
   * @return {[type]} [description]
   */
  _initHead: function() {
    var self = this;
    var opts = this.options;
    var trigger = opts.trigger;

    if (!opts.head) {
      return;
    }

    var head = new Element('div', {
      'class': 'menu-head',
      html: opts.head.text
    }).inject(this);

    head.addEvent(trigger, function() {
      self.toggle();
    });

    this.addEvents({
      show: function() {
        this.head.addClass('open');
      },
      hide: function() {
        this.head.removeClass('open');
      },
      change: function(value) {
        //_log.debug('change',value);
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
   * Process the node object and inject the
   * initialized component in the content of the container.
   * @return {[type]} [description]
   */
  _initComponent: function() {
    var self = this;
    var opts = this.options;
    var node = opts.menu;
    var container = this.content;

    //_log.debug(node);

    node.each(function(comp, i) {
      if (!comp.text) {
        comp.text = null; // comp.name;
      }
      //comp.text = comp.name;

      var component = opts.item.component.capitalize();

      var itemopts = Object.merge(opts.item.options, comp);
      // _log.debug('---',itemopts);
      // instantiate de menu component

      var item = new UI[component](itemopts);

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
          click: function(e) {
            //_log.debug('click event menu', opts.hideOnCall, opts.type);
            //e.stop();

            self.fireEvent('change', this.get('name'));
            self.fireEvent('select', this);
            if (opts.type == 'drop' && opts.hideOnCall) {
              self.hideNow();
            }

            if (self.name == 'context') {
              self.hideNow();
            }
          }
        });
      } else if (comp.emit) {
        item.element.addEvents({
          click: function(e) {
            e.stop();
            self.fireEvent(comp.emit);
          }
        });
      } else {
        item.element.addEvents({
          click: function(e) {
            e.stop();
            if (self.state == 'disabled') {
              return;
            }
            //_log.debug('---',opts.type);
            self.value = this.get('name');
            self.fireEvent('change', this.get('name'));
            self.fireEvent('selectItem', comp);



            if (opts.type == 'push') {
              self.fireEvent('select', this);
            } else if (opts.type == 'drop') {
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
  _initEvents: function() {

    //_log.debug('_initEvents',this.options.name);
    var self = this;
    var opts = this.options;

    if (opts.type == 'drop') {
      if (opts.timerOnHide) {
        this.element.addEvents({
          mouseleave: function() {
            self.hide();
          },
          mouseenter: function() {
            clearTimeout(self.timer);
          }
        });
      }
    }


    if (opts.type == 'push') {
      //_log.debug('push',this);
      this.addEvents({
        'select': function(menu) {
          //_log.debug('mmm', menu.get('name'));
          self.select(menu.get('name'));
        }
      });
    }
  },

  /**
   * [select description]
   * @param  {[type]} menu [description]
   * @return {[type]}      [description]
   */
  select: function(menu) {

    if (menu === false || menu === null) {
      if (this.selected) {
        //_log.debug('selected');
        this.selected.removeClass('state-active');
        this.selected.removeClass('state-checked');
      }
      return;
    }

    if (typeOf(menu) == 'string') {
      menu = this.element.getElement('[name="' + menu + '"]');
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
  unselect: function(menu) {

    var self = this;
    //_log.debug(typeOf(menu));

    if (typeOf(menu) == 'string') {
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
  deselect: function() {
    if (!this.selected) {
      return;
    }

    this.selected.removeClass('state-active');
    this.selected.removeClass('state-checked');
  },

  /**
   * [getSelected description]
   * @return {[type]} [description]
   */
  getSelected: function() {

  },

  /**
   * [toggle description]
   * @return {[type]} [description]
   */
  toggle: function() {
    if (this.state == 'open') {
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
  toggleFold: function() {
    if (this.state == 'folded') {
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
    this.close();
  },

  /**
   * [shut description]
   * @return {[type]} [description]
   */
  shut: function() {
    this.setState('close');

    this.fireEvent('closed');
  },

  /**
   * [close description]
   * @return {[type]} [description]
   */
  close: function() {
    this.setState('close');

    this.fireEvent('closed');
  },

  /**
   * [open description]
   * @return {[type]} [description]
   */
  open: function() {
    this.setState('open');

    this.fireEvent('opened');
  }

});
