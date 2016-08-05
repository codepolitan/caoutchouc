/**
 * View Limit
 * @since 0.1.9.1
 * @description Comes from Minimal View
 * @author Jerome Vial, Bruno Santos
 */
define(function(require, exports, module) {

  var Limit = new Class({

    /**
     * Calculate the limits
     * @method getLimit
     * @return {Array}
     * @private
     */
    getLimit: function() {
      var limit = [
        [0, 0],
        [0, 0]
      ];
      var element = this.element;

      limit[0][0] = 0;
      limit[0][1] = limit[0][0] - element.clientWidth;
      limit[1][0] = 0;
      limit[1][1] = limit[1][0] - element.clientHeight;

      return limit;
    },

    /**
     * Apply the limits to the x and y values
     * @method limit
     * @param {x} x
     * @param {y} y
     * @return {Array}
     * @private
     */
    limit: function(x, y) {
      var limit = this.getLimit();
      return [
        x.limit(limit[0][0], limit[0][1]),
        y.limit(limit[1][0], limit[1][1])
      ];
    }

  });

  module.exports = Limit;

});
