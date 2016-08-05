/**
 * URL related method for Insp
 */
define(function(require, exports, module) {

  var URL = require('ui/control/url');

  var _log = __debug('view-form-url');

  module.exports = new Class({

    /**
     * Initialize URL field
     * @param  {[type]} field [description]
     * @param  {[type]} doc   [description]
     * @param  {[type]} group [description]
     * @return {[type]}       [description]
     */
    __initUrl: function(field, doc, group) {
      var self = this;

      var n = field.name.split(/\./);

      var value = this.getValueFromKey(field.name, doc);

      var input = new URL({
        'class': field.klss,
        type: 'text',
        name: field.name,
        text: field.text,
        value: value,
        useTextAsLabel: this.options.useTextAsLabel
      }).inject(group);

      var read = this.isReadOnly(field);

      if (read) {
        input.input.set('readonly', 'readonly');
      }

      if (field.klss) {
        input.addClass(field.klss);
      }

      if (field.etat == 'readonly' || this.readonly) {
        input.input.set('readonly', 'readonly');
      }

      input.input.addEvents({
        keyup: function() {
          self.doc[this.get('name')] = this.get('value');
          self.fireEvent('change', [this.get('name'), this.get('value')]);
        }
      });
    }

  });

});
