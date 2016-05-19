/**
 * Implement count
 * @class View.Tree.Count
 */
define([

], function(

) {

	var _log = __debug('view:core-tree-count').defineLevel();

	var exports = new Class({

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

			if (count && this._validateCount(count)) {
				this._updateCount(count);
			} else {
				clearTimeout(this.timerCount);
				this.timerCount = setTimeout(function() {
					self.collection.updateCount(countType, function(count) {
						self._updateCount(count);
					});
				}, 1000);
			}
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

	return exports;

});
