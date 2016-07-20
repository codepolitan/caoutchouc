/**
 * Manage errors
 * @author Bruno Santos, Jerome Vial
 */
define(function(require, exports, module) {

  var Dialog = require('ui/window/dialog');

  var _log = __debug('view-form-validator');

  var Validator = new Class({

    /**
     * show errors
     * @param  {Object} info
     * @param  {Object} obj
     * @return {void}
     */
    showErrors: function(info, obj) {
      'use strict';
      _log.debug('showErrors', info, obj);

      if (info._id !== this.doc._id) {
        return;
      }

      var self = this;
      var error = obj.errors;
      this.errorEls = this.errorEls || [];

      for (var i = 0; i < this.errorEls.length; i++) {
        this.errorEls[i].removeClass('field-error');
      }

      this.errorEls = [];

      var fields = [];
      var text = '';
      error.map(function(item) {
        //_log.debug('error', item, field);

        //fields.push(item.params.key || item.dataPath.substring(1));
        var path = item.dataPath.substring(1);
        path = path.replace('/', '.');
        var key = item.params.key;
        var field = key;
        if (path && key) {
          field = path + '.' + key;
        } else if (!key) {
          field = path;
        }

        fields.push(field);

        var fieldEl = self.field[field];
        if (fieldEl) {
          fieldEl.setError(item.message);
        }

        text += item.message + '<br>';
      });

      //_log.debug('fields', fields);

      var errorsWithoutEl = [];

      for (var j = 0; j < fields.length; j++) {
        var el = this.element.getElement('[for=' + fields[j] + ']');
        if (el) {
          this.errorEls.push(el.parentNode);
          el.parentNode.addClass('field-error');
        } else {
          errorsWithoutEl.push(fields[j]);
        }
      }

      if (errorsWithoutEl.length) {
        new Dialog({
          message: 'There is a problem with the following fields: ' + errorsWithoutEl.join(' '),
          alert: true
        });
      }
    }

  });

  module.exports = Validator;

});
