/**
 * View.Form.File
 * @class View.Form.File
 * @extends {Minimal.View.Form}
 * @author Jerome Vial
 */

define([
  'UI/Control/Button'
], function(
  ButtonControl
) {

  var _log = __debug('view:form-file');

  var exports = new Class({

    /**
     * [_initFile description]
     * @param  {[type]} field [description]
     * @param  {[type]} doc   [description]
     * @param  {[type]} group [description]
     * @return {[type]}       [description]
     */
    _initFile: function(field, doc, group) {
      var self = this;

      group.addClass('group-list');

      //_log.debug('_initList', field.name);

      var element = group.getPrevious();
      var name = element.get('html');

      var read = this.isReadOnly(field);

      if (!read)
        var addBtn = new ButtonControl({
          icon: 'icon-plus-circle',
          name: 'add',
          type: 'icon-text',
          klss: 'button-inline',
          text: 'Ajouter ' + name + '...',
          emit: 'linkFile',
        }).inject(group, 'bottom').addEvent('linkFile', function() {
          _log.debug(field.name);
          self.fireEvent('linkFile', [self, field.name]);
        });

      if (!doc[field.name]) return;

      var list = new Element('div', {
        'class': 'form-list'
      }).inject(group, 'top');

      doc[field.name].each(function(file, idx) {
        var item = new Element('div', {
          html: file.name,
          'data-id': file._id,
          'class': 'list-item'
        }).inject(list);

        var icon = new Element('span', {
          'class': 'fa fa-file-o'
        }).inject(item, 'top');

        if (!read)
          var remove = new ButtonControl({
            'clss': 'right',
            type: 'icon',
            name: 'deleteItem',
            icon: 'icon-times-circle',
            emit: 'remove'
          }).inject(item, 'top').addEvent('remove', function() {
            self._removeItem(idx, field.name);
          });

        if (!read)
          item.addEvent('click', function() {
            list.getChildren().removeClass('item-selected');
            item.addClass('item-selected');
          });
      });
    },

    /**
     * [_removeItem description]
     * @param  {[type]} idx [description]
     * @param  {[type]} key [description]
     * @return {[type]}     [description]
     */
    _removeItem: function(idx, key) {
      this.doc[key].splice(idx, 1);
      this._setInfo(this.doc);
      this.fireEvent('change', [key, this.doc[key]]);
    }

  });

  return exports;

});
