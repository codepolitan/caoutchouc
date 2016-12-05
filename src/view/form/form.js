// base class
import View from '../view';

// core modules
import component from './component';
import event from './event';
import key from './key';
import utils from './utils';

// ui module
import DialogWindow from '../../window/dialog';

// plugin modules
import Attachments from './module/attachments';
import Control from './module/control';
import Charges from './module/charges';
import Collapse from './module/collapse';
import Comments from './module/comments';
import Contact from './module/contacts';
import Currency from './module/currency';
import Date from './module/date';
import File from './module/file';
import Hour from './module/hour';
import Hours from './module/hours';
import Iframe from './module/iframe';
import Items from './module/items';
import List from './module/list';
import Logs from './module/logs';
import Validator from './module/validator';
//import Nodes from './nodes';
import Product from './module/product';
import Reference from './module/reference';
import Related from './module/related';
import Textarea from './module/textarea';
import Unique from './module/unique';
import Url from './module/url';

const _log = __debug('view-form').defineLevel();

export default new Class({

  Extends: View,

  Implements: [
    component,
    event,
    key,
    utils,
    Attachments,
    Charges,
    Collapse,
    Comments,
    Contact,
    Control,
    Currency,
    Date,
    File,
    Hour,
    Hours,
    Iframe,
    Items,
    List,
    Logs,
    //Nodes,
    Product,
    Reference,
    Related,
    Textarea,
    Unique,
    Url,
    Validator
  ],

  options: {
    clss: 'form',

    scrollbar: true,
    useTextAsLabel: false,

    dateTime: {
      format: 'lll'
    },

    readOnly: false,

    collapsable: false,
    isCollapsed: false,

    confirmCancel: false,

    title: {
      key: 'name',
      capitalize: true
    },

    defaultTemplate: {
      components: ['info'],
      info: {
        type: 'fieldset',
        //text: 'Info',
        klss: 'inspector-head',
        field: {
          _list: ['name', 'description'],
          name: {
            text: 'Name',
            name: 'name'
          },
          description: {
            text: 'Description',
            name: 'description'
          }
        }
      }
    },
    controller: {
      _list: ['view', 'form'],
      view: {
        /*not necessary because the form
        call the method "new" of the list view*/
        //'add': 'new',

        set: ['_focusPrimaryKey', '_hideToolbarDialog'],
        apply: '_viewDidApply',
        mode: '_setClassMode',
        cancel: 'cancel',
        change: '_viewDidChange',
        collapse: 'collapse',
        uncollapse: 'uncollapse',
      },
      form: {
        submit: ['_onSubmit']
      }
    },
  },

  /**
   * Initialize View
   * @return {void}
   */
  _initView: function() {
    //_log.debug('_initView', this.options);

    //need to remove the options template to have a reference
    if (this.options.template) {
      delete this.options.template;
    }

    if (this.options.attachInfo) {
      this.attachInfo = this.options.attachInfo;
      delete this.options.attachInfo;
    }

    // for backward compatibility
    this.doc = this.info = {};

    this.parent();

    this.isFirst = 0;

    this.field = {};

    var opts = this.options;

    if (this._initCollapse) {
      this._initCollapse();
    }

    this._initForm();

    if (opts.doc) {
      this.set('info', opts.doc);
    }
  },

  /**
   * [_onSubmit description]
   * @return {void}
   */
  _onSubmit: function(e) {
    //_log.debug('onSubmit', e);
    e.preventDefault();
  },

  /**
   * [_initForm description]
   * @return {[type]} [description]
   */
  _initForm: function() {
    _log.debug('_initForm');

    this.form = new Element('form', {
      method: 'post'
    }).addEvent('submit', function(e) {
      e.stop();
    }).inject(this.content);

    return this.form;
  },

  /**
   * Initialize Detail View
   * @param  {Object} doc   Document
   * @param  {Object} model
   * @return {void}
   */
  _setForm: function(doc, model, params) {
    params = params || {};

    //_log.debug('_setForm', doc, model, opts);
    //_log.debug('_setForm', this.readonly);

    var opts = this.options;

    if (this.control && this.control.what) {
      this.control.what.set('text', doc.type);
    }

    this.list = {};

    this.mask = opts.mask;
    this.type = this.options.type;

    _log.debug('_initform');

    if (!params.top) {
      this.form.setStyles(this.form.getSize());
    }

    this.form.empty();

    if (doc.status) {
      this.form.set('data-status', doc.status);
    }

    //_log.debug('doc', doc);

    if (!doc) {
      _log.warn('missing info');
      return;
    }

    //this.readonly = this.readonly || opts.readOnly;

    this._initComponent(doc, model);
    this._initStatus();
    this._initMask();
  },

  /**
   * Get Value for the given key
   * @deprecated
   *
   * @param  {string} name defined in dot notation
   * @param  {Object} info
   * @return {Mixin} The Value of the given key
   */
  /*get: function(key) {
    return this.getValueFromKey(key, this.doc);
  },*/

  /**
   * Getter
   *
   * @param {string} prop
   * @param {string} value
   * @return {Object|void}
   */
  get: function(prop, value) {
    switch (prop) {
      case 'key':
        return this.getValueFromKey(value, this.doc);
      case 'info':
        return this.getInfo();
      case 'unsaved':
        return this.original;
      case 'type':
        return this.type;
      case 'options':
        return this.options;
      default: //default will replace the old method see up
        return this.getValueFromKey(prop, this.doc);
        /*case 'model':
          return this.getSelectedModel();*/
    }
  },

  /**
   * [add description]
   * @param {string} type
   */
  add: function(type) {
    _log.debug('add', type);

    this._setInfo({
      type: this.options.type
    });
  },

  /**
   * Setter
   * @param {string} prop
   * @param {string} value
   * @return {Object|void}
   */
  set: function(prop, value, opts) {
    switch (prop) {
      case 'mode':
        return this._setMode(value);
      case 'info':
        return this.setInfo(value, opts);
      case 'readonly':
        return this._setReadonly(value);
      default: //default will replace the old method
        return this.setInfo(prop, value);
    }
  },

  /**
   * [_setReadonly description]
   * @description NOT USED
   * @param {[type]} val [description]
   */
  _setReadonly: function(val) {
    _log.debug('_setReadonly', val);

    if (val) {
      this.readonly = true;
    } else {
      this.readonly = false;
    }
  },

  /**
   * Set Detail view with the given information and model
   * @param {Object} doc   [description]
   * @param {Object} opts [description]
   */
  setInfo: function(doc, opts) {
    _log.debug('setInfo', doc, opts);

    opts = opts || {};

    var mask = opts.mask || opts.template;

    if (this.mode === 'edit') {
      return;
    }

    if (!doc && !mask) {
      this.clear();
      return;
    }

    if (doc._id === 'new') {
      delete doc._id;
      this.setMode('edit');
    }

    this.original = doc;
    this.originalMask = mask;

    //_log.debug('set');

    this.destroyCkeInstance();

    //In test for real time editing
    if (this.doc) {
      this.fireEvent('unset', [this.doc._id, this]);
    }

    if (this.control && this.control.add && doc && doc._id) {
      this.control.add.setState(null);
    }

    this.readonly = undefined;

    if (opts.readonly !== undefined) {
      this.readonly = opts.readonly;
    }

    this._setInfo(doc, mask);

    var id = null;
    if (doc) {
      id = doc._id;
    }
    this.fireEvent('set', [id, this]);
    this.fireEvent('infoSet', doc);
    this.fireEvent('settings', ['infoId', id]);

    if (!doc._id) {
      if (this.control.apply) {
        this.control.apply.setState('active');
      }
      if (this.control.cancel) {
        this.control.cancel.setState('active');
      }
      if (this.toolbar.dialog) {
        this.toolbar.dialog.show();
      }
    }

    return this;
  },

  /**
   * Set Detail view with the given information and model
   * @param {Object} doc   [description]
   * @param {Object} mask [description]
   * @param {Object} opts [description]
   */
  _setInfo: function(doc, mask, opts) {
    //_log.debug('_set', doc, mask);

    doc = this.patch(doc);

    if (this.form) {
      this.form.setStyle('display', 'block');
    }

    this.datePickers = this.datePickers || [];
    this.datePickers.each(function(datePicker) {
      datePicker.destroy();
    });

    var title = doc[this.options.title.key] || '';

    if (this.control && this.control.title) {
      if (this.options.title.capitalize) {
        title = title.charAt(0).toUpperCase() + title.slice(1);
      }
      this.control.title.set('text', title);
    }

    /*if (this.options.container)
      this.options.container.focus();*/

    this.doc = null;
    this.doc = Object.clone(doc);
    this.relatedListEvents = false;

    this._setForm(this.doc, mask, opts);


    if (this.container) {
      this.container.fireEvent('resize');
    }
  },

  /**
   * [_setMode description]
   * @param {[type]} mode [description]
   */
  _setMode: function(mode) {
    //_log.debug('setMode', mode);

    if (mode === 'read') {
      this.readonly = true;
      this._setInfo(this.doc, this.originalMask);
    } else if (mode === 'edit') {
      this.setMode(mode);
    } else {
      this.setMode(mode);
    }
  },

  /**
   * patch
   * @param  {Object} info
   * @return {Object}
   */
  patch: function(info) {
    _log.debug('patch', info);

    if (!info || !info.type) {
      _log.warn('missing info or type');
      return info;
    }

    var process = window.datatype[info.type + '/_process'];
    if (process && process[info.kind] && process[info.kind].patch) {
      info = process[info.kind].patch(info);
    } else if (process && process.patch) {
      info = process.patch(info);
    }

    return info;
  },

  /**
   * [update description]
   * @param  {Object} info [description]
   * @return {void}
   */
  update: function(info) {
    //_log.debug('update', info);

    if (!info || !this.doc) {
      return;
    }

    if (info._id === this.doc._id) {

      //remove edit mode when update the current info
      //because it's not possible to setInfo in edit mode
      if (info._rev === this.doc._rev) {
        this.mode = undefined;
      }

      this.setInfo(info, {
        top: false
      });
    } else if (!this.doc._rev && this.doc.type === info.type) {
      this.setInfo(info, {
        top: false
      });
    }
  },

  /**
   * Set view accorrding the given mode
   * @param {string} mode edit or not
   */
  setMode: function(mode) {
    this.fireEvent('mode', [this, mode]);

    this.mode = mode;
  },

  /**
   * remove info
   * @param  {Object} info
   * @return {void}
   */
  remove: function(info) {
    if (this.doc && info._id === this.doc._id) {
      this.form.empty();
    }
  },

  /**
   * Actually hide the form of the view
   * @return {Object} The instance of the Class
   */
  clear: function(doc) {
    //_log.debug('clear');

    if (typeof doc === 'object' && this.doc && doc._id && doc._id !== this.doc._id) {
      return;
    }

    if (this.mode === 'edit') {
      return;
    }

    if (this.form) {
      this.form.setStyle('display', 'none');
    }

    if (this.control && this.control.add) {
      this.control.add.setState(null);
    }

    if (this.control && this.control.title) {
      this.control.title.set('text', '');
    }

    this.doc = null;

    this.fireEvent('clean');
    this.fireEvent('settings', ['infoId', null]);

    /*this.destroyCKEditor();
    if (this.form) this.form.empty();*/
    return this;
  },

  /**
   * [getType description]
   * @return {[type]} [description]
   */
  getType: function() {
    return this.type;
  },

  /**
   * [getInfo description]
   * @return {[type]} [description]
   */
  getInfo: function() {
    return this.doc || null;
  },

  /**
   * apply
   * @return {void}
   */
  apply: function() {
    _log.debug('apply');
    this._viewDidApply();
    this.fireEvent('apply', this);
  },


  /**
   * [cancel description]
   * @return {[type]} [description]
   */
  cancel: function() {
    //_log.debug('cancel', this.mode);
    var self = this;
    var opts = this.options;

    if (!opts.container) {
      this._cancel();
      return;
    }

    if (opts.confirmCancel) {
      new DialogWindow({
        title: 'Confirm',
        message: 'You will lose all changes done in this document.'
      }).addEvents({
        ok: function() {
          self._cancel();
        }
      });
    } else {
      this._cancel();
    }
  },

  /**
   * [_cancel description]
   * @return {[type]} [description]
   */
  _cancel: function() {
    //_log.debug('_cancel');

    this.setMode(null);

    if (this.toolbar.dialog) {
      this.toolbar.dialog.hide();
    }

    if (this.control.add) {
      this.control.add.setState(null);
    }

    if (this.original && !this.original._id) {
      this.clear();
    } else {
      this._setInfo(this.original, this.originalMask);
    }

    this.fireEvent('canceled');
  },

  /**
   * [blur description]
   * @return {[type]} [description]
   */
  blur: function() {
    //_log.debug('blur', this.ckeInstances);

    //this.destroyCkeInstance();
  },

  /**
   * If do not receive a first param
   * return if the view is read only
   * if the first param is a object
   * check if the view and the field are read only
   * the field overwrite the view
   *
   * @param  {Object} field object with key read
   * @return {boolean}
   */
  isReadOnly: function(field) {
    //_log.debug('isReadOnly', field);
    if (field) {
      var read = false;

      if (this.readonly !== undefined) {
        read = this.readonly;
      }
      if (field.read !== undefined) {
        read = field.read;
      }
      return read;
    } else {
      return this.readonly;
    }
  },

  /**
   * [render description]
   * @param  {[type]} doc [description]
   * @return {[type]}     [description]
   */
  render: function() {
    //_log.debug('render', this.doc);

    _log.fatal('render method using deprecated couch. form:1249');

    if (!this.original || !this.original._id) {
      return;
    }

    var info = couch.doc[this.original._id];
    this._setInfo(info);
  }

});
