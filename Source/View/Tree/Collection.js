/**
 * Implement collection
 * @class View.Tree.Collection
 */
define([

], function(

) {

	var _log = __debug('view:core-tree-collection');

	var exports = new Class({

		/**
		 * Initialize Collection
		 *
		 * @return {void}
		 * @private
		 */
		_initCollection: function() {
			_log.debug('_initCollection');
			var opts = this.options;

			var params = {
				type: opts.data.type,
				kind: opts.data.kind,
				count: opts.data.count
			};

			if (!this.collection.toJSON().length) {
				this.collection.fetch(true, params);
			} else {
				this.collection.fetch(false, params);
			}
		},

		/**
		 * When the collection update
		 * @param  {Object} model
		 * @return {void}
		 * @private
		 */
		_collectionDidUpdate: function(model) {
			_log.debug('_collectionDidUpdate', model.propertiesChanged);

			//If a new model has been inserted
			if (model && model.propertiesChanged.indexOf('id') !== -1) {
				var info = model.toJSON();
				this.select(info.id);
			}
		}

	});

	return exports;

});
