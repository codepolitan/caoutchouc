import moment from 'moment';
import iMask from 'iMask';
import ButtonControl from '../../control/button';
import FieldControl from '../../control/field';
//var settings = require('core/module/settings/settings');

const _log = __debug('view:form-reference');

export default new Class({

  /**
   * Initialize form model
   * @return {void}
   */
  _initComponent: function(doc, template) {
    _log.debug('_initTemplate', doc, template);

    if (template) {
      this._processComponents(template.components, template, template);
      return;
    }

    var tmpl = this.templateFunction(doc);
    var toolbar = this.toolbarFunction(doc);

    this._processToolbar(toolbar);
    this._processComponents(tmpl.components, tmpl, tmpl);

    this._initLegends();
  },

  /**
   * [_processComponents description]
   * @param  {[type]} comps [description]
   * @param  {[type]} spec  [description]
   * @param  {[type]} defs  [description]
   * @return {[type]}       [description]
   */
  _processComponents: function(comps, spec, defs) {
    _log.debug('_processComponents', comps, spec, defs);

    if (this.readonly === undefined &&
      spec &&
      spec._mode === 'readonly' ||
      this.readonly ||
      defs._mode === 'readonly'
    ) {
      this.readonly = true;
    } else {
      this.readonly = false;
    }

    //_log.debug('readonly', this.readonly);

    for (var i = 0; i < comps.length; i++) {
      var component = comps[i];

      //_log.debug(component);
      var group = spec[component] || defs[component];

      if (!group) {
        continue;
      }

      if (group.type === 'fieldset') {
        this._initFieldset(group, this.form);
      }

      if (group.type === 'client') {
        this._initClient(group, this.form);
      }
    }

    this.focuskey = defs.focus;
  },


  /**
   * Initialize form fieldset
   * @return {void}
   */
  _initFieldset: function(fieldset, form) {
    //_log.debug('_initFieldset', fieldset, form);
    var legend = null;

    var element = new Element('div', {
      'class': 'form-fieldset',

    }).inject(form);

    if (fieldset.name) {
      element.addClass('fieldset-' + fieldset.name);
    }

    if (fieldset.klss) {
      element.addClass(fieldset.klss);
    }

    if (fieldset.state === 'closed') {
      element.addClass('closed');
    }

    if (fieldset.text) {
      legend = new Element('span', {
        html: ' ' + fieldset.text,
        'class': 'legend',
        'data-name': fieldset.text
      }).inject(element);

      new Element('span', {
        'class': 'icon-font mdi_navigation_chevron_right'
      }).inject(legend, 'top');
    }

    if (fieldset.buttons) {
      // _log.debug(el.button);
      this._initButtons(fieldset.buttons, this.doc, legend);
    }

    if (legend) {
      element.store('legend', legend);
    }

    if (typeOf(fieldset.menu) === 'object') {
      this._initFieldsetMenu(fieldset.menu, legend);
    } else if (typeOf(fieldset.menu) === 'array') {
      for (var i = 0; i < fieldset.menu.length; i++) {
        var menu = fieldset.menu[i];
        this._initFieldsetMenu(menu, legend);
      }
    }

    if (fieldset.field) {
      this._initObjectField(fieldset.field, element);
    } else if (fieldset.fields) {
      this._initFields(fieldset.fields, element);
    }
  },


  /**
   * Initialize legends for groups of fields
   * @return {void}
   */
  _initLegends: function() {
    _log.debug('_initLegends');

    var legends = this.form.getElements('.legend');

    if (!legends) {
      return;
    }

    for (var i = 0, len = legends.length; i < len; i++) {
      var legend = legends[i];

      if (legend) {
        this._initLegend(legend);
      }

    }

    this._initCollapse();
  },

  /**
   * Initialize legend for a group of fields
   * @return {void}
   */
  _initLegend: function(legend) {
    _log.debug('_initLegend', legend);

    var self = this;
    var opts = this.options;

    var name = legend.get('data-name').toLowerCase();
    var fieldset = legend.getParent();

    //_log.debug('state',  name, state);

    /*if (opts.collapsable) {
      var state = settings.get('view.' + opts.name + '.fieldset.' + name);

      if (state === 'closed') {
        fieldset.addClass('closed');
      }

      legend.addEvent('click', function() {
        if (fieldset.hasClass('closed')) {
          self.fireEvent('settings', ['fieldset.' + name, 'open']);
          fieldset.removeClass('closed');
        } else {
          fieldset.addClass('closed');
          self.fireEvent('settings', ['fieldset.' + name, 'closed']);
        }

        self.container.fireEvent('resize');
      });
    } else {*/
    if (this.isCollapsed) {
      fieldset.addClass('closed');
    }
    //}
  },

  /**
   * Initialize form fieldset menu if exists
   * @return {void}
   */
  _initFieldsetMenu: function(menu, legend) {
    var self = this;

    var addBtn = new ButtonControl(menu)
      .inject(legend);

    addBtn.addEvent(menu.emit, function() {
      //_log.debug(fieldset.menu);
      self.fireEvent(menu.emit, self);
    });
  },


  /**
   * [_initFields description]
   * @param  {[type]} keys    [description]
   * @param  {[type]} element [description]
   * @return {[type]}         [description]
   */
  _initFields: function(keys, element) {
    //_log.debug('_initFields', keys, element);
    var info = this.doc;

    var group = this._initGroup(element);

    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];

      this._initField(key, info, group);

      if (key.type === 'button' && key.name === 'deleteNode') {
        this._initDeleteButton(key, info, group);
      }
    }
  },


  /**
   * Instanciate group of field
   * @param  {Element} element
   * @return {Element} the group element
   */
  _initGroup: function(element) {
    //_log.debug('_initGroup', element);
    var group = new Element('div', {
      html: element.legend,
      'class': 'group'
    }).inject(element);

    return group;
  },

  /**
   * Process field object
   * @param  {[type]} object   [description]
   * @param  {[type]} element [description]
   * @return {[type]}         [description]
   */
  _initObjectField: function(object, element) {
    // _log.debug('_initObjectField', object, element);
    var info = this.doc;
    var list = object._list || [];

    var group = this._initGroup(element);

    for (var i = 0; i < list.length; i++) {
      var name = list[i];
      var key = object[name];

      this._initField(key, info, group);
    }
  },

  /**
   * Initialize Field for the given key according the data and the model
   * @param  {string} key   [description]
   * @param  {[type]} info  [description]
   * @param  {[type]} group [description]
   * @return {[type]}       [description]
   */
  _initField: function(key, info, group) {
    _log.debug('_initField', key, info, group);

    key = key || {};

    var type = key.type;
    var method;

    type = type || 'input';

    if (typeof type === 'string') {
      method = type.capitalize();
    }

    //_log.debug('initField', method, this['_init'+method]);

    if (this['_init' + method]) {
      this['_init' + method](key, info, group);
    } else {
      this._initInput(key, info, group);
    }
  },

  /**
   * Initialize input
   * @param  {key} key [description]
   * @param  {Object} info
   * @param  {Element} group
   * @return {void}
   */
  _initInput: function(key, info, group) {
    var self = this;

    key = key || {};
    key.name = key.name || '';

    //var n = key.name.split(/\./);

    var value = this.getValueFromKey(key.name, info);

    if (!value && key.default) {
      value = key.default;
      this.updateDocKey(key.name, key.default);
    }

    if (typeOf(value) === 'array' || typeOf(value) === 'object') {
      value = JSON.stringify(value);
      value = value.replace(/[&\/\\"{}\[\]]/g, '');
      value = value.replace(/[,]/g, ', ');
      value = value.replace(/[:]/g, ': ');
    }

    var _name = key.name.replace('.', '-');

    var type = key.type || 'text';

    var read = this.isReadOnly(key);

    var input = new FieldControl({
      'klass': 'field-' + _name,
      type: type,
      name: key.name,
      text: key.text,
      value: value,
      read: read,
      error: true,
      useTextAsLabel: this.options.useTextAsLabel
    }).inject(group);

    if (key.kind) {
      input.addClass('kind-' + key.kind);
    }


    this.field[key.name] = input;

    if (key.klss) {
      input.addClass(key.klss);
    }

    input.input.addEvents({
      keyup: function(ev) {
        self._onInputKeyUp(input, ev);
      },
      blur: function() {
        self._onInputBlur(input);
      }
    });
  },


  /**
   * [_initMask description]
   * @return {[type]} [description]
   */
  _initMask: function() {
    this.mask = new iMask({
      scope: this.form
    });
  },

  /**
   * Initialize status to display creatiion and modification information
   * @return {void}
   */
  _initStatus: function() {
    var doc = this.doc;

    var created = moment(doc.created_date).format('lll');
    var modified = moment(doc.modified_date).format('lll');

    var status = doc.created_by + ' ' + created;

    if (doc.modified_by) {
      status = modified + ' by ' + doc.modified_by;
    }

    this.setStatus(status);
  },


  /**
   * [_processToolbar description]
   * @param  {[type]} toolbar [description]
   * @return {[type]}         [description]
   */
  _processToolbar: function(toolbar) {
    //_log.debug('_processToolbar', toolbar);

    if (!toolbar || !toolbar.opts) {
      return;
    }

    var disableds = toolbar.opts.disabled;
    var enableds = toolbar.opts.enabled;

    //_log.debug('disableds', disableds);
    //_log.debug('enableds', enableds);

    for (var i = 0; i < disableds.length; i++) {
      var c = disableds[i];
      if (this.control[c]) {
        this.control[c].setState('disabled');
      }
    }

    for (var i = 0; i < enableds.length; i++) {
      var c = enableds[i];
      if (this.control[c]) {
        this.control[c].setState('enabled');
      }
    }
  },

  /**
   * Init Delete Button for group
   * @param  {Element} button
   * @param  {Data} doc    [description]
   * @param  {[type]} group  [description]
   * @return {[type]}        [description]
   */
  _initDeleteButton: function(button, doc, group) {
    var self = this;

    var clss = 'ui-delete';
    var text = button.text || button.name;

    var btn = new Button({
      clss: clss,
      type: 'text',
      name: button.name,
      text: button.text,
      emit: button.name
    }).inject(group);

    btn.addEvent(button.name, function() {
      _log.debug('emit', button.name);
      self.fireEvent(button.name, doc._id);
    });
  }

});
