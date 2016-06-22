/**
 * Minimalistic Implement for Minimal.Form Class
 * @implement Minimal.Form
 * @author Jerome Vial, Bruno Santos
 */
define([
  'UI/Control/Button'
], function(
  Button
) {

  var _log = __debug('view:form-attachments');

  var exports = new Class({

    /**
     * [_initContacts description]
     * @param  {[type]} field [description]
     * @param  {[type]} doc   [description]
     * @param  {[type]} group [description]
     * @return {[type]}       [description]
     */
    _initAttachments: function(field, doc, group) {
      //_log.debug('_initList', field, doc, group);
      var self = this;

      group.addClass('group-list');


      if (field.klss) {
        element.addClass(field.klss);
      }

      var read = this.isReadOnly(field);

      var name = field.text || field.name;

      var list = new Element('div', {
        'class': 'form-list'
      }).inject(group);


      if (doc.attachments && typeOf(doc.attachments[field.name]) == 'array') {

        doc.attachments[field.name].each(function(info, idx) {
          var item = new Element('div', {
            'data-id': info._id,
            'class': 'list-item'
          }).inject(list);

          var text = info.name || info.description || info.email || info.address || info;

          var name = new Element('span', {
            'class': 'name',
            html: text
          }).inject(item);

          var icon = new Element('span', {
            'class': 'ui-icon fa fa-file-o'
          }).inject(item, 'top');

          if (!read) {
            var remove = new Button({
              'clss': 'right',
              type: 'icon',
              name: 'deleteItem',
              icon: 'mdi-action-highlight-remove',
              emit: 'remove'
            }).inject(item).addEvent('remove', function() {
              self._removeAttachmentsItem(idx, field.name);
              self.fireEvent('attachmentRemoved', info._id);
            });
          }

          if (!read) {
            item.addEvent('click', function() {
              list.getChildren().removeClass('item-selected');
              item.addClass('item-selected');
            });
          }
        });

      }

      if (!read) {
        var addBtn = new Button({
          icon: 'mdi-content-add mdi-av-playlist-add',
          name: 'add',
          type: 'icon-text',
          klss: 'button-inline',
          text: 'Ajouter ' + name + '...',
          emit: 'linkAttachments',
        }).inject(group).addEvent('linkAttachments', function() {
          //_log.debug(field);
          self.fireEvent('linkAttachments', [field.name, field.opts, self]);
        });

        addBtn.addClass('button-add');
      }
    },

    /**
     * [_removeAttachmentsItem description]
     * @param  {[type]} idx [description]
     * @param  {[type]} key [description]
     * @return {[type]}     [description]
     */
    _removeAttachmentsItem: function(idx, key) {

      this.doc.attachments = this.doc.attachments || {};

      var id = this.doc.attachments[key][idx]._id;
      this.doc.attachments[key].splice(idx, 1);

      this.doc.attachments._ids = this.doc.attachments._ids || [];

      var listIdx = this.doc.attachments._ids.indexOf(id);
      if (listIdx >= 0) this.doc.attachments._ids.splice(listIdx, 1);

      this._setInfo(this.doc);
      this.fireEvent('change', [key, this.doc.attachments[key]]);
    }

  });

  return exports;

});
