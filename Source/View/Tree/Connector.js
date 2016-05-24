/**
 * Implement connector
 * @class View.Tree.Connector
 */
define([

], function(

) {

	var _log = __debug('view:core-tree-connector');

	var exports = new Class({

		/**
		 * Initialize Connector
		 *
		 * @return {void}
		 * @private
		 */
		_initConnector: function() {
			_log.debug('_initConnector');
			var opts = this.options;

			var params = {
				type: opts.data.type,
				kind: opts.data.kind,
				count: opts.data.count
			};

			this.connector.get('nodes', params, function(data) {
				self.fireEvent('dataReady', data);
			});
		}

	});

	return exports;

});