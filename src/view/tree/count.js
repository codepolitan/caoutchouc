import { array } from 'minimal-utils';

const _log = __debug('view-core-tree-count').defineLevel();

export default new Class({

  /**
   * Refresh Count
   * @param {Object} count
   */
  refreshCount: function(count) {
    _log.debug('refreshCount', count);

    if (count && this._validateCount(count)) {
      this._updateCount(count);
      this.fireEvent('countUpdated');
    }
  },

  /**
   * Validate count object
   * @return {void}
   * @private
   */
  _validateCount: function(count) {
    if (typeof count !== 'object') {
      return false;
    }

    var id;

    for (var key in count) {
      //check null key because some infos have null in nodes
      //and the count return a count for nul
      if (key !== 'null' && count.hasOwnProperty(key)) {
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
      var info = array.findObjByKey(this.list, '_id', elId);
      if (info) {
        info._count = c;
      }

      element.set('html', c);
    }
  }

});
