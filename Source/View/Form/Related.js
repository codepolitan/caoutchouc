/**
 * Related information
 * @author Jerome Vial, Bruno Santos
 * @description
 *  Info Structure:
 *  	id: Unique info id
 * 	The options accept:
 * 		unique: If set to true will be possible
 * 						just attach a document in this key
 */
define(function(require, exports, module) {

  var moment = require('moment');
  var array = require('utils/array');
  var ButtonControl = require('UI/Control/Button');
  var FieldControl = require('UI/Control/Field');
  var DropdownControl = require('UI/Control/Dropdown');
  var CheckControl = require('UI/Control/Check');

  var _log = __debug('view:form-related').defineLevel();

  var Related = new Class({

    /**
     * init related
     * @param  {Object} field
     * @param  {Object} info
     * @param  {DOMElement} group
     * @return {void}
     */
    _initRelated: function(field, info, group) {
      _log.debug('_initRelated', field, info, group);

      group.addClass('group-list');

      var prop = {
        name: field.text || field.name,
        type: field.opts.type,
        field: field,
        info: info,
        group: group
      };

      this._initRelatedList(prop);
      this._initRelatedAddControls(prop);
    },

    /**
     * init related list
     * @param  {Object} prop
     * @param  {DOMElement} list
     * @return {void}
     */
    _initRelatedList: function(prop, list) {
      var self = this;
      var fieldName = prop.field.name;

      _log.debug('_initRelatedList', fieldName, items);

      list = list || new Element('div', {
        'class': 'ui-list form-list'
      }).inject(prop.group);

      var items = this.getValueFromKey(fieldName, this.doc);
      if (typeOf(items) !== 'array') {
        items = [];
        this.updateDocKey(fieldName, items);
      }

      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        this._initRelatedItem(prop, item, list);
      }

      if (!this.relatedListEvents) {
        this.relatedListEvents = true;
        this.addEvent('change:' + fieldName, function() {
          list.empty();
          self._initRelatedList(prop, list);
        });
      }
    },

    /**
     * init related add controls
     * @param  {Object} prop
     * @return {void}
     */
    _initRelatedAddControls: function(prop) {
      _log.debug('_initRelatedAddControls', prop);

      var self = this;
      var type = prop.type;
      var field = prop.field;
      var group = prop.group;

      var read = this.isReadOnly(field);

      if (!read && prop.field.opts.add !== false) {
        var addBtn = new ButtonControl({
          icon: 'add',
          name: 'add',
          type: 'icon-text',
          klss: 'button-inline',
          text: 'Ajouter ' + type + '...',
        }).inject(group).addEvent('press', function() {
          if (field.emit) {
            self.fireEvent(field.emit);
          } else {
            self.chooseRelated(field.name, field.opts);
          }
        });

        addBtn.icon.addClass('mdi-av-playlist-add');
      }
    },

    /**
     * init related item
     * @param  {Object} prop
     * @param  {Object} related
     * @param  {DOMElement} list
     * @return {void}
     */
    _initRelatedItem: function(prop, related, list) {
      _log.debug('_initRelatedItem', prop, related);

      if (!related) {
        return;
      }

      var field = prop.field;

      var info = related;

      if (related.info && typeof related.info !== 'string') {
        info = related.info;
      }

      var item = new Element('div', {
        'data-id': info._id,
        'class': 'ui-item list-item',
      }).inject(list);

      // new ButtonControl({
      // 	name: field.opts.type,
      // 	icon: mnml.icon.font[field.opts.type],
      // }).inject(item, 'top');

      var display = field.opts.keys.display || [];

      for (var i = 0; i < display.length; i++) {
        var displayKey = display[i];

        _log.debug('displayKey', displayKey, field.opts.keys[displayKey]);

        var key = info[displayKey] || related.relation[displayKey];

        //if (!key) continue;

        if (key && field.opts.keys[displayKey] && field.opts.keys[displayKey].type === 'date') {
          var format = field.opts.keys[displayKey].format || 'YYYY-MM-DD HH:mm';
          key = moment(key).format(format);
        }

        field.opts.keys[displayKey] = field.opts.keys[displayKey] || {};

        var text = field.opts.keys[displayKey].text || displayKey;

        new FieldControl({
          type: 'text',
          name: displayKey,
          text: text,
          value: key,
          read: true
        }).inject(item);

        /*new Element('span', {
        	title: key,
        	'class': 'ui-key key-' + displayKey,
        	html: key
        }).inject(item);*/
      }

      this._initRelatedCustomList(item, related, prop);

      var read = this.isReadOnly(field);

      if (!read) {
        this._initRelatedItemControls(item, related, prop);
      }
    },

    /**
     * [_initRelatedCustomList description]
     * @param  {DOMElement} item
     * @param  {Object} related
     * @param  {Object} prop
     * @return {void}
     */
    _initRelatedCustomList: function(item, related, prop) {
      _log.debug('_initRelatedCustomList', item, related, prop);

      var customs = prop.field.opts.keys.relation;

      if (!customs) {
        return;
      }

      _log.debug('customs', customs);

      for (var j = 0; j < customs.length; j++) {
        var custom = customs[j];
        this._initRelatedCustomKey(item, custom, related, prop);
      }
    },

    /**
     * [_initRelatedCustomKey description]
     * @param  {[type]} item    [description]
     * @param  {[type]} custom  [description]
     * @param  {[type]} related [description]
     * @param  {[type]} prop    [description]
     * @return {[type]}         [description]
     */
    _initRelatedCustomKey: function(item, custom, related, prop) {
      _log.debug('_initRelatedCustomKey', item, custom, related, prop);

      var self = this;
      var field = prop.field;

      var value = this.getValueFromKey(custom, related.relation);

      var key = field.opts.keys[custom] || {};

      if (key.type === 'dropdown') {
        //_log.debug('dropdown', related, related.relation, custom);
        var dropdown = new DropdownControl({
          name: custom,
          value: related.relation[custom],
          list: key.list,
          read: this.isReadOnly(key)
        }).inject(item);

        dropdown.addEvent('change', function(val) {
          related.relation[custom] = val;
          self.fireEvent('change', [this.get('name'), val]);
        });
      } else if (key.type === 'check') {
        var check = new CheckControl({
          name: custom,
          value: related.relation[custom] || key.default || false,
          read: this.isReadOnly(key)
        }).inject(item);

        check.addEvent('change', function(val) {
          related.relation[custom] = val;
          self.fireEvent('change', [related.relation[custom], val]);
        });
      } else {
        var input = new FieldControl({
          //name: prop.field.name + '.' + related.info._id + '.' + custom,
          name: custom,
          text: custom,
          type: 'text',
          value: value || '',
          klss: 'field-custom'
        }).inject(item);

        input.input.addEvents('keyup', function() {
          //if (field.read) return;
          var val = this.get('value');

          if (this.get('value') !== value) {
            related.relation = related.relation || {};
            related.relation[custom] = val;
            self.fireEvent('change', [this.get('name'), val]);
          }
        });

        if (this.isReadOnly(key)) {
          input.input.set('readonly', 'readonly');
          input.input.set('tabindex', '-1');
        }
      }
    },

    /**
     * [_initRelatedItemControls description]
     * @param  {[type]} item    [description]
     * @param  {[type]} related [description]
     * @param  {[type]} prop    [description]
     * @return {[type]}         [description]
     */
    _initRelatedItemControls: function(item, related, prop) {
      _log.debug('_initRelatedItemControls', prop.field.opts.keys._controls);

      if (prop.field.read || this.readonly) {
        return;
      }

      var infoRelated = related.info || related;

      var self = this;
      var id = infoRelated._id;
      var fieldName = prop.field.name;
      var info = prop.info;

      var toolbar = new Element('div', {
        class: 'ui-toolbar'
      }).inject(item);

      var controls = prop.field.opts.keys._controls;

      if (controls) {
        for (var i = 0; i < controls.length; i++) {
          var ctr = controls[i];

          var opts = prop.field.opts.keys[ctr];

          this._initRelatedListControls(toolbar, opts, related);
        }
      }

      new ButtonControl({
        type: 'icon',
        name: 'moveup',
        title: 'moveup',
        icon: 'moveup',
        emit: 'moveup'
      }).inject(toolbar).addEvent('press', function() {
        self._moveRelatedItem(fieldName, related, 'up');
        self.fireEvent('relatedItemRUp', info._id);
      });

      new ButtonControl({
        type: 'icon',
        name: 'movedown',
        title: 'movedown',
        icon: 'movedown',
        emit: 'movedown'
      }).inject(toolbar).addEvent('press', function() {
        self._moveRelatedItem(fieldName, related, 'down');
        self.fireEvent('relatedItemRUp', info._id);
      });

      new ButtonControl({
        type: 'icon',
        name: 'clear',
        title: 'remove',
        icon: 'clear',
        emit: 'remove'
      }).inject(toolbar).addEvent('remove', function() {
        self._removeRelatedItem(fieldName, id);
        self.fireEvent('relatedItemRemoved', info._id);
      });
    },

    /**
     * [_initRelatedListControls description]
     * @param  {[type]} toolbar [description]
     * @param  {[type]} opts    [description]
     * @param  {[type]} related [description]
     * @return {[type]}         [description]
     */
    _initRelatedListControls: function(toolbar, opts, related) {
      _log.debug('_initRelatedListControls');

      var self = this;

      new ButtonControl(opts).inject(toolbar).addEvent('press', function() {
        _log.debug('fireEvent', 'related' + opts.name.capitalize());
        self.fireEvent('related' + opts.name.capitalize(), related);
      });
    },

    /**
     * [chooseRelated description]
     * @param  {[type]} name [description]
     * @param  {[type]} opts [description]
     * @return {[type]}      [description]
     */
    chooseRelated: function(name, opts) {
      _log.debug('chooseRelated', name, opts);

      var self = this;

      opts = Object.clone(opts);

      this.attachInfo(opts, function(info) {

        //if receive the view instead of the info take the info from the view
        if (!info._id) {
          info = info.get('info');
        }

        return self._onRelatedSelected(name, opts, info);
      });
    },

    /**
     * [_onRelatedSelected description]
     * @param  {[type]} name [description]
     * @param  {[type]} opts [description]
     * @param  {[type]} info [description]
     * @return {[type]}      [description]
     */
    _onRelatedSelected: function(name, opts, info) {
      _log.debug('_onRelatedSelected choose', name, opts, info);

      if (info._id === this.doc._id) {
        return;
      }

      var relatedField = this.getValueFromKey(name, this.doc);

      var related = {
        info: {
          _id: info._id
        },
        relation: {}
      };
      // create the import source doc keys
      if (typeOf(opts.keys.info) === 'array') {
        var sourceKeys = opts.keys.info;

        for (var i = 0; i < sourceKeys.length; i++) {
          var source = sourceKeys[i];
          var value = info[source];

          related.info[source] = value;
        }
      } else if (opts.keys.info === '*') {
        related = info;
      }
      if (opts.keys.relation === false) {
        related = related.info;
      }

      relatedField.push(related);

      this._setInfo(this.doc, this.originalMask, false);
      this.fireEvent('change', [name, related]);

      return this.doc;
    },

    /**
     * [_removeRelatedItem description]
     * @param  {[type]} name [description]
     * @param  {[type]} id   [description]
     * @return {[type]}      [description]
     */
    _removeRelatedItem: function(name, id) {
      _log.debug('_removeRelatedItem', name, id);

      var relatedField = this.getValueFromKey(name, this.doc);

      var idx;
      for (var i = 0; i < relatedField.length; i++) {
        var item = relatedField[i];
        item = item.info || item;
        if (item._id === id) {
          idx = i;
        }
      }

      relatedField.splice(idx, 1);

      this._setInfo(this.doc, this.originalMask, false);
      this.fireEvent('change', [name, id]);
    },

    /**
     * [_moveRelatedItem description]
     * @param  {[type]} name      [description]
     * @param  {[type]} related   [description]
     * @param  {[type]} direction [description]
     * @return {[type]}           [description]
     */
    _moveRelatedItem: function(name, related, direction) {
      //_log.debug('_moveRelatedItem', type, related, direction);
      var relatedField = this.getValueFromKey(name, this.doc);

      if (direction === 'up') {
        array.moveUp(relatedField, related);
      } else if (direction === 'down') {
        array.moveDown(relatedField, related);
      } else {
        return;
      }

      this._setInfo(this.doc, this.originalMask, false);
      this.fireEvent('change', [name, related]);
    }

  });

  module.exports = Related;

});
