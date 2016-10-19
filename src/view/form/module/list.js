/**
 * Minimalistic Implement for Minimal.Form Class
 * @implement Minimal.Form
 * @author Jerome Vial, Bruno Santos
 */
var Button = require('control/button');
var Field = require('control/field');

var _log = __debug('core-module-dragdrop').defineLevel();

var List = new Class({

  /**
   * To display a list of objects
   *
    opts: {
      type: "keys",
      display: ["name"]
    }

    [{
      "name": "text1",
    }, {
      "name": "text2",
    }]
   *
   * To display a list key inside a object
   *
    opts: {
      type: "list",
      display: ["name"]
    }

    {
      "_list": [
        "item1",
        "item2"
      ],
      "item1": {
        "name": "name"
      },
      "item2": {
        "name": "age"
      }
    }
   *
   * @param  {object} field
   * @param  {object} info
   * @param  {DOM element} group
   * @return {void}
   */
  _initList: function(field, info, group) {
    //_log.debug('_initList', field, info, group);
    var self = this;

    group.addClass('group-list');

    info[field.name] = info[field.name] || [];

    field.opts = field.opts || {};

    var list = new Element('div', {
      'class': 'form-list list-' + field.opts.klss
    }).inject(group, 'top');

    var obj = info[field.name];
    var target;

    if (field.opts.type === 'list') {
      var fields = [];

      for (var i = 0; i < obj.length; i++) {
        fields.push(info[obj[i]]);
      }

      target = fields;
    } else if (field.opts.type === 'keys') {
      target = obj;
    }

    this._displayLine(target, list, field, info);

    var read = this.isReadOnly(field);

    if (!read) {
      new Button({
        icon: 'icon-plus-circle',
        name: 'add',
        klss: 'button-inline',
        type: 'icon-text',
        text: 'add...',
        emit: 'attachItem',
      }).inject(group).addEvent('attachItem', function() {
        if (field.opts.type === 'list') {
          var name = 'item' + self.doc[field.name].length;


          self.doc[field.name].push(name);
          self.doc[name] = {};

          self._setInfo(self.doc, self.originalMask);
        } else if (field.opts.type === 'keys') {

          var display = field.opts.display;
          var o = {};
          for (var i = 0; i < display.length; i++) {
            var d = display[i];

            o[d] = '';
          }

          self.doc[field.name].push(o);

          self._setInfo(self.doc, self.originalMask);
        }
      });
    }
  },

  /**
   * [_displayLine description]
   * @param  {[type]} list  [description]
   * @param  {[type]} el    [description]
   * @param  {[type]} field [description]
   * @param  {[type]} info  [description]
   * @return {[type]}       [description]
   */
  _displayLine: function(list, el, field, info) {
    //_log.debug('_displayLine', list);
    for (var j = 0; j < list.length; j++) {
      var item = list[j];

      var line = new Element('div', {
        class: 'list-item',
        'data-idx': j,
      }).inject(el);

      this._displayItems(item, line, field, info);

      line.addEvent('dblclick', this.fireEvent.bind(this, 'edit' + field.name.capitalize(), item));
    }
  },

  /**
   * [_displayItems description]
   * @param  {[type]} item  [description]
   * @param  {[type]} line  [description]
   * @param  {[type]} field [description]
   * @return {[type]}       [description]
   */
  _displayItems: function(item, line, field, info) {
    var self = this;
    var display = field.opts.display;

    for (var i = 0; i < display.length; i++) {
      var d = display[i];

      this._createEl(item, d, field, line);
    }

    var read = this.isReadOnly(field);

    if (!read || field.opts.remove) {

      new Button({
        'clss': 'right',
        type: 'icon',
        name: 'moveup',
        icon: 'icon-times-circle',
        emit: 'remove'
      }).inject(line, 'top').addEvent('press', function() {
        //self._moveRelatedItem(type, id, 'up');
        self.fireEvent('relatedItemRUp', info._id);
      });

      new Button({
        'clss': 'right',
        type: 'icon',
        name: 'movedown',
        icon: 'icon-times-circle',
        emit: 'remove'
      }).inject(line, 'top').addEvent('press', function() {
        //self._moveRelatedItem(type, id, 'down');
        self.fireEvent('relatedItemRUp', info._id);
      });

      new Button({
        'clss': 'right',
        type: 'icon',
        name: 'clear',
        icon: 'icon-times-circle',
        emit: 'remove'
      }).inject(line, 'top').addEvent('remove', function() {
        self._removeItems(item, field);
        self.fireEvent('relatedItemRemoved', info._id);
      });
    }
  },

  /**
   * [_createEl description]
   * @param  {[type]} item  [description]
   * @param  {[type]} d     [description]
   * @param  {[type]} field [description]
   * @param  {[type]} line  [description]
   * @return {[type]}       [description]
   */
  _createEl: function(item, d, field, line) {
    var self = this;

    var opts = {
      value: item[d],
      'klss': 'item-' + d,
      type: 'text',
      name: d,
      text: d
    };

    var read = this.isReadOnly(field);

    if (!read) {
      opts.contenteditable = 'true';
    }

    var el = new Field(opts).inject(line);

    //var el = new Element('div', opts).inject(line);

    el.input.addEvents({
      keyup: function() {
        _log.debug('keyup', item, d, this.get('value'));
        item[d] = this.get('value');

        self.fireEvent('change', [item[d], this.get('value')]);
      }
    });

    /*el.addEvent("input", function() {
      _log.debug('................');
      item[d] = this.get('text');
    });*/
  },

  /**
   * [_removeItems description]
   * @param  {[type]} item  [description]
   * @param  {[type]} field [description]
   * @return {[type]}       [description]
   */
  _removeItems: function(item, field) {
    var list = this.doc[field.name];

    if (field.opts.type === 'list') {
      for (var key in this.doc) {
        if (this.doc[key] === item) {
          var idx = this.doc[field.name].indexOf(key);
          this.doc[field.name].splice(idx, 1);
          delete this.doc[key];
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        if (list[i] === item) {
          list.splice(i, 1);
        }
      }
    }

    this._setInfo(this.doc, this.originalMask);
    this.fireEvent('change', []);
  }

});

module.exports = List;
