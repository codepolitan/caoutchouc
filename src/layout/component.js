import { api } from 'minimal-utils';

const _log = __debug('ui-layout-component').defineLevel();

export default new Class({

  options: {
    resizer: {
      modifier: {
        row: {
          size: 'width',
          from: 'left',
          mode: {
            y: false
          }
        },
        column: {
          size: 'height',
          from: 'top',
          mode: {
            x: false
          }
        }
      }
    }
  },

  /**
   * Instanciate the given object comp
   * @param  {Object} comp list component
   * @return {void}
   */
  _initComponent: function(comp) {
    _log.debug('_initComponent', comp.opts.name, comp);

    // shortcuts
    comp.opts.flex = comp.opts.flex || comp.flex;
    comp.opts.hide = comp.opts.hide || comp.hide;
    comp.opts.theme = comp.opts.theme || comp.theme;

    _log.debug('comp', comp.clss);

    var name = comp.opts.name;
    var clss = api.strToClss(comp.clss);

    //comp.opts.container = comp.container;
    var component = this.component[name] = this[name] = new clss(comp.opts);

    _log.debug('component', comp);

    // register component
    this._componentRegister(name, component);

    //settings
    this._initComponentSettings(component);

    // styles and size
    this._setComponentStyles(component);
    this._setComponentDisplay(component);
    this._attachComponentEvents(component);

    return component;
  },

  /**
   * [_componentRegister description]
   * @param  {[type]} name      [description]
   * @param  {[type]} component [description]
   * @return {[type]}           [description]
   */
  _componentRegister: function(name, component) {
    //_log.debug('_componentRegister', name, component);

    this.components = this.components || [];
    this.components.push(component);
  },

  /**
   * [_initComponentSettings description]
   * @param  {Object} component
   * @return {void}
   */
  _initComponentSettings: function(component) {
    _log.debug('_initcompSettings', component);

    //var name = component.getName();
    //var element = component.element;
  },

  /**
   * initComponentSettings
   * @param  {Object} component
   * @return {void}
   */
  _setComponentStyles: function(component) {
    _log.debug('_setComponentStyles', component);

    if (component.options.flex) {
      //component.element.setStyle('flex', component.options.flex);
      component.element.addClass('flex-' + component.options.flex);
    }

    if (component.options.theme) {
      component.element.addClass('theme' + '-' + component.options.theme);
    }
  },

  /**
   * initSize
   * @param  {Object} component
   * @return {void}
   */
  _setComponentDisplay: function(component) {
    //_log.debug('comp opts', component.options);
    var display = 'normalized';

    if (component.options.hide || component.options.state === 'minimized') {
      component.minimize(1);
      display = 'minimized';
    }

    var name = component.getName();
    var element = component.element;

    var settings = this.settings[name];
    if (settings && settings.display) {
      display = settings.display;
    }

    component.setDisplay(display, 'width');

    if (!component.options.flex) {
      if (settings && component.options.axis === 'x') {
        //element.setStyle('flex', 'none');
        element.addClass('flex-none');

        if (display === 'minimized') {
          element.setStyle('width', 0);
        } else {
          if (settings.width < 32) {
            settings.width = 32;
          }

          element.setStyle('width', settings.width || null);
        }

        component.width = settings.width || 260;
        component._modifier = 'width';
      } else if (settings && component.options.axis === 'y') {
        element.setStyle('flex', 'none');
        element.setStyle('height', settings.height || null);
        component.height = settings.height || 260;
        component._modifier = 'height';
      }

      this._initResizer(component);
    }
  },

  /**
   * _attachComponentEvents
   * @param {Object} component
   * @return {void}
   */
  _attachComponentEvents: function(component) {
    _log.debug('_attachComponentEvents', component);

    var self = this;
    var name = component.getName();

    component.addEvents({
      toggled: function() {
        _log.debug('toggled');
        self.fireEvent('resize');
      },
      resizing: function() {
        _log.debug('toggled');
        self.fireEvent('resize');
      },
      display: function(state) {
        _log.debug('display', name, state);
        self.fireEvent('display', [name, state]);
      }
    });

    this.addEvents({
      resize: function() {
        _log.debug('resize');
        component.fireEvent('resize');
      },
      drag: function() {
        _log.debug('drag');
        component.fireEvent('resize');
      },
      normalize: function() {
        _log.debug('normalize');
        component.fireEvent('resize');
      },
      maximize: function() {
        _log.debug('maximize');
        component.fireEvent('resize');
      },
      minimize: function() {
        _log.debug('minimize');
        component.fireEvent('resize');
      },
      device: function(device) {
        _log.debug('device', device);
        component.fireEvent('device', device);
      }
    });
  }

});
