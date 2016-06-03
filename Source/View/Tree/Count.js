/**
 * Implement count
 * @class View.Tree.Count
 */
define(function(require, exports, module) {

  var _log = __debug('view:core-tree-count').defineLevel();

  module.exports = new Class({

    /**
     * Refresh Count
     *
     * @param {Object} count
     */
    refreshCount: function(count) {
      _log.debug('refreshCount', count);

      var self = this;
      var opts = this.options;
      var countType = opts.data.count || opts.data.type;

      clearTimeout(this.timerCount);
      this.timerCount = setTimeout(function() {
        if (count && self._validateCount(count)) {
          self._updateCount(count);
          self.fireEvent('countUpdated');
        } else {
          self.collection.updateCount(countType, function(count) {
            self._updateCount(count);
            self.fireEvent('countUpdated');
          });
        }
      }, 1000);
    },

    /**
     * Validate count object
     *
     * @return {void}
     * @private
     */
    _validateCount: function(count) {
      if (typeof count !== 'object') {
        return false;
      }

      var id;

      for (var key in count) {
        if (count.hasOwnProperty(key)) {
          id = key;
          break;
        }
      }

      if (id.length > 20) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Update Count elements
     *
     * @param {Object} count Count object
     * @return {void}
     * @private
     */
    _updateCount: function(count) {
      _log.debug('_updateCount', count);

      var elements = this.content.getElements('.count');

      for (var i = 0, len = elements.length; i < len; i++) {
        var element = elements[i];
        var elId = element.getParent().getParent().get('data-id');

        var c = count[elId];
        var model = this.collection.getModelById(elId);
        if (model) {
          model.set('_count', c);
        }

        element.set('html', c);
      }
    }

  });

});
