/**
 * Expand List.V2 View Class
 *
 * @class View.List.V2.Expand
 * @author Bruno Santos, Jerome Vial
 */
define(function(require, exports, module) {

  var _log = __debug('view-core-listV2-expand').defineLevel();

  var Expand = new Class({

    /**
     * Initialize Expand
     * @private
     */
    _initExpand: function() {

      if (!this.options.expand.enable) {
        return;
      }

      this.expandList = {};

      _log.debug('_initExpand', this.options.expand);

    },

    /**
     * toggle expand
     * @param  {DOMElement} el
     * @return {void}
     */
    _toggleExpand: function(el) {
      _log.debug('_toggleExpand', el);

      if (!this.options.expand.enable) {
        _log.debug('expand is not enabled');
        return;
      }

      if (this.expandList[el.get('data-id')]) {
        this._collapse(el);
      } else {
        this._expand(el);
      }
    },

    /**
     * expand el
     * @param  {DOMElement} el
     * @return {void}
     */
    _expand: function(el) {
      _log.debug('_expand', el);

      var id = el.get('data-id');
      var info = this.get('infoById', id);

      /*for (var i in this.expandList) {
      	this.expandList[i].destroy();
      }*/

      this.expandList[id] = new Element('div', {
        'class': 'ui-expand',
      }).inject(el, 'after');

      this.fireEvent('expand', [this.expandList[id], info]);
    },

    /**
     * collapse
     * @param  {DOMElement} el
     * @return {void}
     */
    _collapse: function(el) {
      _log.debug('_collapse', el);

      this.expandList[el.get('data-id')].destroy();

      delete this.expandList[el.get('data-id')];

      this.fireEvent('collapse');
    }

  });

  module.exports = Expand;

});
