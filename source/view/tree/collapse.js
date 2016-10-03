/**
 * Implement collapse
 * @class View.Tree.Collapse
 */
var _log = __debug('view-core-tree-collapse');

module.exports = new Class({

  /**
   * Initialize collapse
   *
   * @return {void}
   * @private
   */
  _setCollapse: function() {
    _log.debug('_setCollapse');

    var opts = this.options;

    if (!opts.collapse) {
      return;
    }

    var ids = opts.collapse;

    for (var id in ids) {
      if (ids.hasOwnProperty(id)) {
        var value = ids[id];
        var el = this.content.getElement('[data-id=' + id + ']');
        if (value && el) {
          this.collapse.toggle(el.getElement('a'));
        }
      }
    }
  },

  /**
   * When the tree expand
   *
   * @param  {string} id
   * @return {void}
   * @private
   */
  _treeDidExpand: function(id) {
    this.fireEvent('settings', ['collapse.' + id, true]);

    var collapse = this.options.collapse;
    if (collapse) {
      collapse[id] = true;
    }
  },

  /**
   * When the tree collapse
   *
   * @param  {string} id
   * @return {void}
   * @private
   */
  _treeDidCollapse: function(id) {
    this.fireEvent('settings', ['collapse.' + id, false]);

    var collapse = this.options.collapse;
    if (collapse) {
      collapse[id] = false;
    }
  }

});
