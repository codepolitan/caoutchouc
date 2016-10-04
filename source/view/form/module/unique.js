/**
 * Related information
 * @extends {Minimal.Form}
 * @author Jerome Vial, Bruno Santos
 * @description
 *  Info Structure:
 *    id: Unique info id
 *  The options accept:
 *    unique: If set to true will be possible just attach a document in this key
 */
var ButtonControl = require('control/button');

var _log = __debug('view-form-unique').defineLevel();

var Unique = new Class({

  /**
   * [_displayUnique description]
   * @param  {[type]} field [description]
   * @param  {[type]} doc   [description]
   * @param  {[type]} group [description]
   * @return {[type]}       [description]
   */
  _initUnique: function(field, doc, group) {
    _log.debug('_displayUnique', field, doc, group);

    var self = this;
    //var name = field.text || field.name;
    var type = field.opts.type;
    var display = field.opts.keys.display || ['name'];
    var key = doc[field.name];
    //_log.debug('key', key);

    var unique = new Element('div', {
      'class': 'ui-field type-unique'
    }).inject(group);

    new Element('label', {
      html: field.name
    }).inject(unique);

    if (field.klss) {
      unique.addClass(field.klss);
    }

    if (key) {
      var item = new Element('div', {
        'class': 'unique-item'
      }).inject(unique);


      for (var i = 0; i < display.length; i++) {
        var sourceKey = display[i];

        new Element('span', {
          'class': 'ui-key key-' + sourceKey,
          html: key[sourceKey]
        }).inject(item);
      }


      // new ButtonControl({
      //  name: field.opts.type,
      //  icon: mnml.icon.font[field.opts.type],
      // }).inject(item, 'top');

      this._initRelatedUniqueControls(item, field, unique);
    }

    var read = this.isReadOnly(field);

    if (read || key) {
      unique.addClass('read-only');
      return;
    }

    var addBtn = new ButtonControl({
      icon: 'add',
      name: 'add',
      type: 'icon-text',
      klss: 'button-inline',
      text: 'Choose ' + type + '...',
    }).inject(unique).addEvent('press', function() {
      unique.addClass('state-focus');
      self.chooseUnique(field.name, field.opts, unique);
    });

    addBtn.icon.addClass('mdi-av-playlist-add');

  },

  /**
   * [_initRelatedUniqueControls description]
   * @param  {[type]} item  [description]
   * @param  {[type]} field [description]
   * @return {[type]}       [description]
   */
  _initRelatedUniqueControls: function(item, field) {
    _log.debug('_initRelatedUniqueControls', item, field);

    var self = this;

    var read = this.isReadOnly(field);

    if (read) {
      return;
    }

    var toolbar = new Element('div', {
      class: 'ui-toolbar right'
    }).inject(item);

    new ButtonControl({
      type: 'icon',
      name: 'edit',
      icon: 'edit',
      emit: 'edit'
    }).inject(toolbar).addEvent('edit', function() {
      self.chooseUnique(field.name, field.opts);
    });

    new ButtonControl({
      type: 'icon',
      name: 'clear',
      icon: 'clear',
      emit: 'remove'
    }).inject(toolbar).addEvent('remove', function() {
      self._removeUnique(field.name);
      //self.fireEvent('relatedItemRemoved', info._id);
    });
  },

  /**
   * [_removeRelatedItem description]
   * @param  {[type]} idx [description]
   * @param  {[type]} key [description]
   * @return {[type]}     [description]
   */
  _removeUnique: function(name) {
    //_log.debug('_moveRelatedItem', type, idx);
    var info = this.doc;

    if (!info[name]) {
      return;
    }

    delete info[name];

    this._setInfo(info, null, false);
    this.fireEvent('change', [name, info[name]]);
  },

  /**
   * [chooseUnique description]
   * @param  {[type]} name [description]
   * @param  {[type]} opts [description]
   * @return {[type]}      [description]
   */
  chooseUnique: function(name, opts) {
    _log.debug('chooseUnique', name, opts);
    var self = this;

    opts = Object.clone(opts);

    this.attachInfo(opts, function(err, info) {
      _log.debug('attachInfo choose', info);
      if (info._id === self.doc._id) {
        return;
      }

      self.doc[name] = {};

      if (typeOf(opts.keys.source) === 'array') {
        var sourceKeys = opts.keys.source;

        for (var i = 0; i < sourceKeys.length; i++) {
          var source = sourceKeys[i];
          var value = info[source];

          self.doc[name][source] = value;
        }
      }

      self._setInfo(self.doc);
      self.fireEvent('change', [name, self.doc[name]]);
    });
  }

});

module.exports = Unique;
