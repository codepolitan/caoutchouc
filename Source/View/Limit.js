
/**
 * View Limit
 * @since 0.1.9.1
 * @description Comes from Minimal View
 * @return {[type]} [description]
 */

define(function() {

    var exports = new Class({

	/**
	 * Calculate the limits
	 *
	 * @method getLimit
	 * @return {limit}
	 * @private
	 */
	getLimit: function(){
		var limit = [[0, 0], [0, 0]],
			element = this.element;

		limit[0][0] = 0;
		limit[0][1] = limit[0][0] - element.clientWidth;
		limit[1][0] = 0;
		limit[1][1] = limit[1][0] - element.clientHeight;

		return limit;
	},

	/**
	 * Apply the limits to the x and y values
	 *
	 * @method limit
	 * @param {x}
	 * @param {y} node_id, type
	 * @return {[x,y]}
	 * @private
	 */
	limit: function(x, y){
		var limit = this.getLimit();
		return [
			x.limit(limit[0][0], limit[0][1]),
			y.limit(limit[1][0], limit[1][1])
		];
	}

    });

    return exports;

});
