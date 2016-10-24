import Button from './button';
import fontIconConfig from './separator';
import scriptjs from 'scriptjs';
import 'icon/control';

const _log = __debug('ui-control-buttonMenu');

export default new Class({

  Extends: Button,

  name: 'button',

  options: {
    name: 'button',
    type: 'action', // push, file
  },

  /**
   * [_initElement description]
   * @return {void}
   */
  _initElement: function() {
    this.parent();

    _log.debug('_initElement');

    this.control = {};
  },

  /**
   * [_initToolbarComp description]
   * @param {Object} opts
   * @return {void}
   */
  _initMenu: function(opts) {
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
      mouseleave: function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
          menu.setStyle('display', 'none');
        }, 500);
      },
      /**
       * @ignore
       */
      mouseenter: function() {
        clearTimeout(timer);
      },
      /**
       * @ignore
       */
      click: function() {
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
  _initMenuPosition: function() {
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
  _initItem: function(name, def, element) {
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

    var icon = fontIconConfig[def.icon || name];

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

    if (clss === 'ui/button' || clss === 'ui/button-menu') {
      opts.text = def.text || Locale.get('control.' + name, name) || name;
    }

    this._requireModule(clss, function(Clss) {

      self.control[name] = new Clss(opts).inject(element);

      if (clss === 'ui/button') {
        self.control[name].addEvents({
          /**
           * @ignore
           */
          press: function() {
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
  _requireModule: function(module, cb) {
    _log.debug('_requireModule', module);

    if (typeOf(module) === 'class') {
      cb(module);
      return;
    }

    scriptjs([module], function(Class) {
      cb(Class);
    });
  },

  /**
   * [_onElementMouseDown description]
   * @param  {event} e
   * @return {void}
   */
  _onClick: function(e) {
    _log.debug('_onElementClick');

    var opts = this.options;

    e.stopPropagation();

    if (!this.menu) {
      this._initMenu(opts);
    }

    this.menu.setStyle('display', 'block');
  }

});
