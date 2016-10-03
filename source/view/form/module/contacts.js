/**
 * Minimalistic Implement for Minimal.Form Class
 * @implement Minimal.Form
 * @author Jerome Vial, Bruno Santos
 */
var Button = require('control/button');

var _log = __debug('view-core-form-contact').defineLevel();

var Contacts = new Class({

  /**
   * [_initContacts description]
   * @param  {[type]} field [description]
   * @param  {[type]} doc   [description]
   * @param  {[type]} group [description]
   * @return {[type]}       [description]
   */
  _initContacts: function(field, doc, group) {
    _log.debug('_initContacts', field, doc, group);

    var self = this;

    var total = 0;

    group.addClass('group-list');

    var element = new Element('div', {
      'class': 'ui-field field-list'
    }).inject(group, 'top');

    if (field.klss) {
      element.addClass(field.klss);
    }

    //_log.debug('_initList', field.name);

    var name = field.text || field.name;

    var label = new Element('label', {
      html: name
    }).inject(element, 'top');

    var list = new Element('div', {
      'class': 'list-content'
    }).inject(element);

    var read = this.isReadOnly(field);

    if (!read) {
      var addBtn = new Button({
        type: 'icon-text',
        name: 'add',
        text: 'Ajouter ' + name + '...',
        icon: 'add',
        klss: 'button-inline',
        emit: 'linkContacts',
      }).inject(list, 'top').addEvent('linkContacts', function() {
        _log.debug(field.name);
        self.fireEvent('linkContacts', field.name);
      });

      addBtn.addClass('button-add');

    }

    if (!doc[field.name]) {
      return;
    }

    doc[field.name].each(function(contact, idx) {
      var item = new Element('div', {
        'data-id': contact._id,
        'class': 'list-item'
      }).inject(list);

      var text = contact.name || contact.email || contact.address || contact;

      if (contact.total) {
        text += ' (' + contact.total + ')';
      }

      new Element('span', {
        'class': 'name',
        html: text
      }).inject(item);

      total = total + contact.total;

      new Element('span', {
        'class': 'item-icon fa fa-file-o'
      }).inject(item, 'top');

      if (!read) {
        new Button({
          type: 'icon',
          name: 'clear',
          title: 'remove',
          icon: 'delete',
          emit: 'remove'
        }).inject(item).addEvent('remove', function() {
          self._removeContactItem(idx, field.name);
          self.fireEvent('contactRemoved', contact._id);
        });
      }

      item.addEvent('click', function() {
        list.getChildren().removeClass('item-selected');
        item.addClass('item-selected');
      });
    });

    if (total > 0) {
      label.set('html', name + ' (' + total + ')');
    }
  },

  /**
   * [_removeItem description]
   * @param  {[type]} idx [description]
   * @param  {[type]} key [description]
   * @return {[type]}     [description]
   */
  _removeContactItem: function(idx, key) {
    this.doc[key].splice(idx, 1);
    this._setInfo(this.doc);
    this.fireEvent('change', [key, this.doc[key]]);
  }

});

module.exports = Contacts;
