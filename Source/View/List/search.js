/**
 * Search List.V2 View Class
 * @class View.List.V2.Search
 * @author Jerome Vial, Bruno Santos
 */
define(function(require, exports, module) {

	var SearchControl = require('UI/Control/Search');
	var string = require('utils/string');

	var _log = __debug('view-core-listV2-search').defineLevel();

	var Search = new Class({

		/**
		 * search a string
		 * @param  {string} str
		 * @return {void}
		 */
		searchStr: function(str, cb) {
			_log.debug('search', str);

			var search = this.control.search;

			if (!search) {
				return;
			}

			this.showSearch();
			this.search.setValue(str);
			this.search.fireEvent('search', [str, cb]);
		},

		/**
		 * Initialize Search
		 * @private
		 */
		_initSearch: function() {
			var search = this.control.search;

			_log.debug('_initSearch', search);

			if (!search) {
				return;
			}

			this.search = new SearchControl().inject(this.container.head, 'after');

			this.search.addEvents({
				reset: function() {
					self.fireEvent('searchEmpty');
				}
			});

			this.search.addClass('container-search');

			var self = this;

			this.search.addEvent('search', function(str, cb) {
				_log.debug('search', str);

				/*if nothing change return*/
				if (self.lastSearch === str) {
					return;
				}

				if (self.options.search.type === 'integrated') {
					return self.find(str);
				}

				/*save search value*/
				self.lastSearch = str;

				if (!str) {
					self.fireEvent('searchEmpty');
					return;
				}

				str = self._processQuery(str);

				var opts = {
					query: str
				};

				//str = '*' + str + '*';

				if (self.data.type) {
					opts.type = self.data.type;
				}

				if (self.data.id) {
					opts.id = self.data.id;
				}

				self.empty();

				self.fireEvent('query', [opts, function(err, data) {
					self.set('list', data);
					if (typeof cb === 'function') {
						cb();
					}
				}]);
			});

			//this.container.fireEvent('resize');
		},

		/**
		 * process query string
		 * @param  {string} str
		 * @return {string}
		 */
		_processQuery: function(str) {

			str = str.replace('*', '');
			str = str.replace('AND', '');
			str = str.replace('OR', '');
			str = str.replace(/\s\s+/g, ' ');

			var result;
			var operator = 'OR';
			var words = str.split(' ');

			for (var i = 0; i < words.length; i++) {
				var word = words[i];

				if (!result) {
					result = '*' + word + '*';
				} else {
					result += ' ' + operator + ' *' + word + '*';
				}
			}

			_log.debug('_processQuery result', words, result);

			return result;
		},

		/**
		 * Toggle Search
		 */
		toggleSearch: function() {
			var search = this.control.search;

			_log.debug('toggleSearch', search);

			if (!search) {
				return;
			}

			if (search.isActive()) {
				this.hideSearch();
			} else {
				this.showSearch();
			}

			this.fireEvent('toggleSearch');
			//this.container.fireEvent('resize');
		},

		/**
		 * Hide Search
		 */
		hideSearch: function() {
			var search = this.control.search;

			if (!search) {
				return;
			}

			search.setState(null);
			this.search.empty();
			this.search.hide();
		},

		/**
		 * Show Search
		 */
		showSearch: function() {
			var search = this.control.search;

			if (!search) {
				return;
			}

			search.setState('active');
			this.search.show();
			this.search.focus();
		},

		/**
		 * Search By Keyword
		 * @param {string} keyword
		 * @param {Array} infos
		 * @return {Array}
		 */
		searchByKeyword: function(keyword, infos) {
			_log.debug('searchByKeyword');

			if (!keyword) {
				return;
			}

			var words = keyword.split(' ');

			if (!words[words.length - 1]) {
				words.pop();
			}

			for (var i = 0; i < words.length; i++) {
				words[i] = string.removeAccents(words[i]);
			}

			return this.searchKeys(words, infos);
		},

		/**
		 * Search Keys
		 * @param {Array} words
		 * @param {infos} infos
		 * @return {infos}
		 */
		searchKeys: function(words, infos) {

			var searchKeys = this.options.search.keys;
			var result = [];

			if (!searchKeys) {
				_log.warn('missing searchKeys');
				return;
			}

			this.options.dates = this.options.dates || [];

			for (var i = 0, len = infos.length; i < len; i++) {
				var value = '';
				var info = infos[i];

				for (var j = 0; j < searchKeys.length; j++) {
					var key = searchKeys[j];

					if (this.options.dates.indexOf(key) !== -1 && info[key]) {
						value += ' ' + mnml.Date.toText(info[key]);
					} else {
						var keys = key.split(/\./);
						var v = '';

						if (keys.length === 1) {
							v = info[keys[0]];
						}
						if (keys.length === 2) {
							if (info[keys[0]]) {
								v = info[keys[0]][keys[1]];
							}
						}

						value += ' ' + v;
					}
				}

				value = string.removeAccents(value);
				var r = this.searchValue(value, words, info);
				if (r) {
					result.push(r);
				}
			}

			return result;
		},

		/**
		 * Search Value
		 * @param {Array} value
		 * @param {Array} words
		 * @param {Object} info
		 */
		searchValue: function(value, words, info) {
			var operator = this.options.operator || 'AND';

			for (var i = 0; i < words.length; i++) {
				if (operator === 'AND' && value.indexOf(words[i]) === -1) {
					return;
				} else if (operator === 'OR' && value.indexOf(words[i]) !== -1) {
					return info;
				}
			}

			if (operator === 'AND') {
				return info;
			}
		},



		/**
		 * find
		 * @param  {string} str
		 * @return {void}
		 */
		find: function(str) {
			_log.debug('find', str);

			var self = this;

			this._searchTmpList = this._searchTmpList || [];

			clearTimeout(this.searchTimeout);

			if (!str) {
				if (this._searchTmpList.length) {
					this.empty();
					this.set('list', this._searchTmpList);

					this._searchTmpList = [];
				}
				return;
			} else {
				this.searchTimeout = setTimeout(function() {

					if (!self._searchTmpList.length) {
						self._searchTmpList = self.get('list').slice(0);
					}

					var result = self.searchByKeyword(str, self._searchTmpList) || [];

					self.empty();
					self.set('list', result);

					self._searching = true;
				}, 50);
			}
		},

		/**
		 * set search value
		 * @param {string} value
		 */
		_setSearchValue: function(value) {
			_log.debug('_setSearchValue', value);

			this.showSearch();
			this.search.setValue(value);
			/*need a better solution instead of fire the input*/
			this.search.input.fireEvent('keyup');
		},

	});

	module.exports = Search;

});
