import { array } from 'minimal-utils';
import controlIcon from '../icon/control';
import langControlsConfigEn from 'minimal-languages/control/en';
import langControlsConfigFr from 'minimal-languages/control/fr';
import * as UI from '../index';

const _log = __debug('core-module-toolbar').defineLevel();

export default new Class({

  options: {
    lang: 'en',
    toolbar: {
      role: 'admin'
    }
  },

  /**
   * initialize toolbar
   * @param {Object} obj
   */
  _initToolbar: function(obj) {
    _log.debug('_initToolbar', obj);

    this.langControl = {
      en: langControlsConfigEn,
      fr: langControlsConfigFr
    };

    this.toolbar = {};
    this.control = {};

    if (!obj.list) {
      _log.warn('missing list field');
      return;
    }

    // more needs to be instantiated first
    // because other controls depend on it
    var moreIdx = obj.list.indexOf('more');
    if (moreIdx > 0) {
      array.move(obj.list, moreIdx, 0);
    }

    this._initToolbarReady(obj);

    for (var i = 0; obj.list.length > i; i++) {
      var name = obj.list[i];
      var bar = obj[name];

      if (!bar) {
        continue;
      }

      //continue if container is not defined
      if (!bar.container) {
        continue;
      }

      //init container if doesn't exist
      if (!this.container[bar.container]) {
        this.container['_init' + bar.container.capitalize()]();
      }

      var element = this._initToolbarEl(name, bar);

      this._initToolbarComp(bar, element);
    }

    this.container.fireEvent('resize');
  },

  /**
   * init toolbar element
   * @param  {string} name
   * @param  {Object} bar
   * @return {DOMElement}
   */
  _initToolbarEl: function(name, bar) {
    var element = this.toolbar[name] = new Element('div', {
      'class': 'ui-toolbar'
    }).addEvents({

    }).inject(this.container[bar.container]);

    if (bar.klss) {
      element.addClass(bar.klss);
    }

    element.addClass('toolbar-' + name);

    return element;
  },

  /**
   * init toolbar eeady
   * @return {void}
   */
  _initToolbarReady: function(obj) {
    var self = this;
    this.ready = 0;
    this.isReady = 0;

    Object.map(obj, function(map) {
      if (map.list) {
        self.ready = self.ready + map.list.length;
      }
    });

    this.addEvent('isReady', function(isReady) {
      //_log.debug('isready', isReady);
      if (isReady >= this.ready) {
        //_log.debug('toolbarReady');
        self.fireEvent('toolbarReady', isReady);
      }
    });
  },

  /**
   * init toolbar comp
   * @param {Object} bar
   * @param {DOMElement} element
   */
  _initToolbarComp: function(bar, element) {
    _log.debug('_initToolbarComp', bar, element);

    bar.list = bar.list || [];

    for (var i = 0; i < bar.list.length; i++) {
      var name = bar.list[i];
      var def = bar[name] || {};
      this._instanciateComp(name, def, element);
    }
  },

  /**
   * [_instanciateComp description]
   * @param  {string} name    [description]
   * @param  {Object} def     [description]
   * @param  {HTMLElement} element [description]
   * @return {void}
   */
  _instanciateComp: function(name, def, element) {
    _log.debug('_instanciateComp', name, def, element);

    var self = this;
    var clss = def.clss || 'ui/button';

    //process name and klss for components with ::
    var temp = name.split(/\:\:/);
    name = temp[0];
    temp.splice(0, 1);
    var klss = temp.join(' ');

    if (!name) {
      _log.warn('missing name');
      return;
    }

    //handle separator
    if (name === 'separator') {
      clss = 'ui/separator';
    }

    var icon = def.icon || name;
    var opts = {
      name: name,
      icon: controlIcon[icon] || 'mdi-action-help',
      type: 'action',
      klss: klss
    };

    if (def.opts) {
      opts = def.opts;
      opts.text = Locale.get('control.' + name, name) || name;
      opts.icon = controlIcon[icon] || 'mdi-action-help';
    }

    var lang = this.options.lang;

    if (!this.langControl[lang]) {
      lang = 'en';
    }

    var text = '';
    if (def.text) {
      text = this.langControl[lang][name] || def.text;
    }

    if (clss === 'ui/button' || clss === 'ui/buttonmenu') {
      opts.text = this.langControl[lang][name] || Locale.get('control.' + name, name) || text || name;
    }

    var isAllow = this._isAllow(name);

    if (isAllow) {
      this._requireModule(clss, function(Clss) {
        self._initToolbarControl(Clss, name, clss, opts, element);
      });

      self.isReady++;
      self.fireEvent('isReady', self.isReady);
    }
  },

  /**
   * check role for control
   * @return {boolean}
   */
  _isAllow: function(name) {
    var isAllow = true;
    var role = this.options.toolbar.role;

    this.options.control = this.options.control || {};

    var ctrRole = this.options.control[role];

    if (!ctrRole || !ctrRole.disallowed) {
      return isAllow;
    }

    if (ctrRole.disallowed.indexOf(name) !== -1) {
      isAllow = false;
    }

    return isAllow;
  },

  /**
   * _initToolbarControl
   */
  _initToolbarControl: function(Clss, name, clss, opts, element) {
    //_log.debug('Clss', typeOf(Clss));

    var self = this;

    if (!Clss) {
      _log.warn('not found, should require?', name, opts);
      return;
    }

    this.control[name] = new Clss(opts).inject(element);

    // init more toolbar menu
    if (name === 'more') {
      this._initMore();
      return;
    }

    self.control[name].addEvents({
      /**
       * @ignore
       */
      change: function(value) {
        if (this.isEnable()) {
          self.fireEvent(name, value);
        }
      }
    });

    if (clss === 'ui/button') {
      self.control[name].addEvents({
        /**
         * @ignore
         */
        press: function() {
          self.fireEvent('control::pressed');
          if (this.isEnable()) {
            self.fireEvent('control::' + name, this);
            self.fireEvent(name, [self]);
          }
        }
      });
    }

    if (clss === 'ui/upload') {
      self.control[name].addEvents({
        /**
         * @ignore
         */
        uploadFile: function(files) {
          if (this.isEnable()) {
            self.fireEvent(name, [files]);
          }
        }
      });
    }

    if (clss === 'ui/field') {
      self.control[name].addEvents({
        /**
         * @ignore
         */
        change: function() {
          self.fireEvent('control::pressed');
          if (this.isEnable()) {
            self.fireEvent('control::' + name, this);
            self.fireEvent(name, [self]);
          }
        }
      });
    }

    if (clss === 'ui/buttonmenu') {
      self.control[name].addEvents({
        /**
         * @ignore
         */
        press: function(name) {
          self.fireEvent('control::pressed');
          if (this.isEnable()) {
            self.fireEvent('control::' + name, this);
            self.fireEvent(name, [self]);
          }
        }
      });
    }
  },

  /**
   * [_initMore description]
   * @return {void}
   */
  _initMore: function() {
    _log.debug('_initMore', this.toolbar.more);

    if (!this.control || !this.toolbar) {
      _log.warn('missing control or toolbar');
      return null;
    }

    var timer = null;

    var toolbar = this.toolbar.more;
    var control = this.control.more;

    if (!control || !toolbar) {
      _log.warn('missing control or toolbar', control, toolbar);
      return;
    }

    control.addEvent('press', function(ev) {
      _log.debug('-- press', ev);
      //var coord = control.getCoordinates();
      toolbar.setStyles({
        display: 'inline-block'
      });

      return true;
    });

    this.addEvent('control::pressed', function() {
      toolbar.setStyle('display', 'none');
    });

    toolbar.addEvents({
      /**
       * @ignore
       */
      mouseleave: function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
          toolbar.setStyle('display', 'none');
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
        toolbar.setStyle('display', 'none');
      }
    });
  },

  /**
   * [_requireView description]
   * @return {void}
   */
  _requireModule: function(module, cb) {
    _log.debug('_requireModule', module);
    if (typeOf(module) === 'class') {
      cb(module);
      return;
    }

    var Class = UI[module.replace('ui/', '').capitalize()];
    cb(Class);
  }

});
