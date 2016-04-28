/**
 * Search List.V2 View Class
 * @class View.List.V2.Search
 * @author Jerome Vial, Bruno Santos
 */
define(function(require, exports, module) {

	var SearchControl = require('UI/Control/Search');
	var searchUtil = require('utils/search');

	var _log = __debug('view-core-listV2-search').defineLevel();

	var Search = new Class({

		/**
		 * Initialize Search
		 * @private
		 */
		_initSearch: function() {
			if (!this.control.search) {
				return;
			}

			_log.debug('_initSearch');

			this.search = new SearchControl().inject(this.container.head, 'after');

			this.search.addClass('container-search');

			this._initSearchEvents();
		},

		/**
		 * init search events
		 * @return {void}
		 */
		_initSearchEvents: function() {
			this.search.addEvents({
				search: this._searchDidChange.bind(this),
				hide: this.processInfos.bind(this),
				//reset: this.fireEvent.bind(this, 'searchEmpty')
			});
		},

		/**
		 * search did change
		 * @return {void}
		 */
		_searchDidChange: function() {
			clearTimeout(this.searchTimeout);
			this.searchTimeout = setTimeout(this.processInfos.bind(this), 300);
		},

		/**
		 * applySearch
		 * @param  {Array} infos
		 * @return {void}
		 */
		applySearch: function(infos, cb) {
			var str = this.search.getValue();

			_log.debug('applySearch', infos.length, str);

			//handle same search value
			if (this.lastSearch === str) {
				return;
			} else {
				this.lastSearch = str;
			}

			if (this.options.search.type === 'event') {
				this.fireEvent('searchStr', [this, str, infos, cb.bind(this)]);
			} else {
				cb(searchUtil.search(str, infos, this.options.search));
			}
		},

		/**
		 * Toggle Search
		 * @return {void}
		 */
		toggleSearch: function() {
			_log.debug('toggleSearch', search);

			var search = this.control.search;

			if (!search) {
				return;
			}

			if (search.isActive()) {
				this.hideSearch();
			} else {
				this.showSearch();
			}

			this.fireEvent('toggleSearch');
		},

		/**
		 * Hide Search
		 * @return {void}
		 */
		hideSearch: function() {
			var search = this.control.search;

			search.setState(null);
			this.search.empty();
			this.search.hide();
		},

		/**
		 * Show Search
		 * @return {void}
		 */
		showSearch: function() {
			var search = this.control.search;

			search.setState('active');
			this.search.show();
			this.search.focus();
		},

		/**
		 * search a string
		 * @param  {string} str
		 * @return {void}
		 */
		setSearch: function(str) {
			_log.debug('setSearch', str);

			var search = this.control.search;

			if (!search) {
				return;
			}

			this.showSearch();
			this.search.setValue(str);
			this.processInfos();
		},

	});

	module.exports = Search;

});
