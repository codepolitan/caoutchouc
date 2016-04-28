/**
 * Filter List.V2 View Class
 * @class View.List.V2.Filter
 * @author Jerome Vial, Bruno Santos
 */
define(function(require, exports, module) {

	var filterUtil = require('utils/filter');
	var FilterControl = require('UI/Control/Filter');

	var _log = __debug('view-core-listV2-filter').defineLevel();

	var Filter = new Class({

		/**
		 * initialize filter
		 * @private
		 */
		_initFilter: function() {
			if (!this.control.filter) {
				return;
			}

			_log.debug('_initFilter');

			this.filter = new FilterControl({
				filter: this.options.filter
			}).inject(this.container.head, 'after');

			this._initFilterEvents();
		},

		/**
		 * init filter events
		 * @return {void}
		 */
		_initFilterEvents: function() {
			this.filter.addEvents({
				change: this.processInfos.bind(this),
				hide: this.processInfos.bind(this),
			});
		},

		/**
		 * apply filters
		 * @return {Array}
		 */
		applyFilters: function(infos, cb) {
			var filters = this.filter.get('filters');

			_log.debug('applyFilters', infos.length, filters);

			if (this.options.filter.type === 'event') {
				this.fireEvent('filterObj', [this, filters, infos, cb.bind(this)]);
			} else {
				cb(filterUtil.filter(filters, infos));
			}
		},

		/**
		 * toggle filter
		 * @return {void}
		 */
		toggleFilter: function() {
			_log.debug('toggleFilter');

			var filter = this.control.filter;

			if (!filter) {
				return;
			}

			if (filter.isActive()) {
				this.hideFilter();
			} else {
				this.showFilter();
			}

			this.fireEvent('toggleFilter');
		},

		/**
		 * hide filter
		 * @return {void}
		 */
		hideFilter: function() {
			var filter = this.control.filter;

			filter.setState(null);
			this.filter.empty();
			this.filter.hide();
		},

		/**
		 * show filter
		 * @return {void}
		 */
		showFilter: function() {
			var filter = this.control.filter;

			filter.setState('active');
			this.filter.show();
		},

		/**
		 * set filter
		 * @param {Object} filter
		 */
		setFilter: function(filter) {
			_log.debug('setFilter', filter);

			this.options.filter = filter;

			if (this.filter) {
				this.filter.destroy();
				this.control.filter.setState(null);
			}

			this._initFilter();
		},

	});

	module.exports = Filter;

});
