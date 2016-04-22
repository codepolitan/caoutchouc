/**
 * Filter List.V2 View Class
 * @class View.List.V2.Filter
 * @author Jerome Vial, Bruno Santos
 */
define(function(require, exports, module) {

	var api = require('utils/api');
	var Choice = require('UI/Control/Choice');

	var _log = __debug('view-core-listV2-filter').defineLevel();

	var Filter = new Class({

		/**
		 * initialize filter
		 * @private
		 */
		_initFilter: function() {
			var filter = this.control.filter;

			_log.debug('_initFilter', filter);

			if (!filter) {
				return;
			}

			this.filters = [];
			this.filterControl = {};
			this.filterEnable = false;

			if (this.options.filter.enable === false) {
				this.control.filter.setState('disabled');
			}

			if (!this.container.head) {
				_log.warn('missing container head');
				//this.container._initHead();
			}

			this.filterBar = new Element('div', {
				class: 'head-filter',
				styles: {
					display: 'none'
				}
			}).inject(this.container.head, 'after');

			this.removeEvent('filter', this.toggleFilter);
			this.addEvent('filter', this.toggleFilter);

			_log.debug('this.filterBar', this.filterBar);

			this._initFilterControls();

			//this.container.fireEvent('resize');
		},

		/**
		 * init filter controls
		 * @return {void}
		 */
		_initFilterControls: function() {
			var opts = this.options;
			var filters = opts.filters || {};
			var filter = opts.filter;
			var list = filter.list || [];

			_log.debug('_initFilterControls', filter);

			for (var i = 0; list.length > i; i++) {
				var name = list[i];
				var f = filter[name];

				var values = f.text;
				values = values || f.values;

				var value = null;
				if (filters && filters[name]) {
					value = filters[name].keyword;
				}

				var choice = this._initChoice(name, values, value);

				this.filterControl[name] = choice;
			}
		},

		/**
		 * init choice
		 * @param  {string} name
		 * @param  {Array} values
		 * @param  {string} value
		 * @return {Object}
		 */
		_initChoice: function(name, values, value) {
			_log.debug('_initChoice', name, values, value);

			/*handle text*/
			var list = [];
			var f = this.options.filter[name];
			if (f.valuesText) {
				list = f.valuesText;
			} else {
				list = values;
			}

			var choice = new Choice({
				name: name,
				type: 'push',
				error: false,
				list: list,
				value: value
			}).inject(this.filterBar).addEvents({
				change: this._choiceDidChange.bind(this, name, values)
			});

			return choice;
		},

		/**
		 * choice did change
		 * @param  {string} name
		 * @param  {Array} values
		 * @param  {string} value
		 * @return {void}
		 */
		_choiceDidChange: function(name, values, value) {
			_log.debug('_choiceDidChange', name, values, value);

			/*handle text*/
			var f = this.options.filter[name];
			if (f.valuesText) {
				value = values[f.valuesText.indexOf(value)];
			}

			var filter = this.options.filter;

			if (value !== undefined) {
				this.changeFilter({
					key: filter[name].key,
					keyword: value,
					type: filter[name].type
				});
			} else {
				this.removeFilter(filter[name].key);
			}

			var self = this;

			if (this.options.filter.type === 'event') {

				if (!this.filters.length) {
					this.fireEvent('searchEmpty');
					return;
				}

				var opts = {
					query: ''
				};

				for (var i = 0; i < this.filters.length; i++) {
					var filt = this.filters[this.filters[i]];

					if (opts.query.length) {
						opts.query += ' AND';
					}

					opts.query += ' (' + filt.key + ':' + filt.keyword + ')';
				}

				if (self.data.type) {
					opts.type = self.data.type;
				}

				if (self.data.id) {
					opts.id = self.data.id;
				}

				self.fireEvent('query', [opts, function(err, data) {
					self.set('list', data);
				}]);
			}

			var infos = this.applyFilters();

			_log.debug('infos', infos);

			/*set list*/
			this._filterTmpList = this._filterTmpList || [];

			if (!this.filters.length && this._filterTmpList.length) {
				this.empty();
				this.set('list', this._filterTmpList);

				this._filterTmpList = [];
			} else {
				/*save list documents*/
				if (!this._filterTmpList.length) {
					this._filterTmpList = this.get('list').slice(0);
				}

				this.empty();
				this.set('list', infos);
			}
		},

		/**
		 * set filter
		 * @param {Object} filter
		 */
		setFilter: function(filter) {
			_log.debug('setFilter', filter);

			this.options.filter = filter;

			if (this.filterBar) {
				this.filterBar.empty();
			}

			this._initFilter(filter);
		},

		/**
		 * change filter
		 * @param {Object} filter
		 */
		changeFilter: function(filter) {
			_log.debug('changeFilter', filter);

			if (this.filters.indexOf(filter.key) === -1) {
				this.filters.push(filter.key);
				this.filters[filter.key] = filter;
			} else {
				this.filters[filter.key] = filter;
			}

			/*need a better name (not sure what it is)*/
			if (this.options.filter.enableDisable === true) {
				this.filterEnable = true;
			}
		},

		/**
		 * apply filters
		 * @return {Array}
		 */
		applyFilters: function() {
			var docs = this.get('list').slice(0);

			_log.debug('applyFilters', docs, this.filters);

			var filter;
			for (var i = 0, leng = this.filters.length; i < leng; i++) {
				filter = this.filters[this.filters[i]];

				if (filter) {
					docs = this.processFilter(filter, docs);
				}
			}

			return docs;
		},

		/**
		 * process filter
		 * @param {Object} filter
		 * @param {Array} docs
		 * @return {Array}
		 */
		processFilter: function(filter, docs) {
			_log.debug('processFilter', filter, docs);

			var result = [];
			var doc;
			var keyValue;

			for (var j = 0; j < docs.length; j++) {
				doc = docs[j];

				keyValue = api.deref(doc, filter.key);

				//_log.debug('keyValue', keyValue);

				if (!keyValue) {
					if (filter.type === 'boolean') {
						keyValue = false;
					} else {
						continue;
					}
				}

				var processDoc = this.processKey(filter, doc, keyValue);
				if (processDoc) {
					result.push(doc);
				}
			}

			return result;
		},

		/**
		 * process key
		 * @param {Object} filter
		 * @param {Object} info
		 * @param {Array|boolean|Object} keyValue
		 * @return {boolean}
		 */
		processKey: function(filter, info, keyValue) {
			//_log.debug('processKey', filter, info, keyValue);

			switch (typeOf(keyValue)) {
				case 'boolean':
					if (keyValue === filter.keyword) {
						return info;
					}
					break;
				case 'array':
					if (keyValue.indexOf(filter.keyword) > -1) {
						return info;
					}
					break;
				default:
					/*allow to filter string fields using true*/
					if (filter.keyword === true && keyValue) {
						return info;
					}

					var regexp = new RegExp(filter.keyword, 'g');
					if (keyValue.match(regexp)) {
						return info;
					}
			}

			return false;
		},

		/**
		 * remove filter
		 * @param {string} key
		 */
		removeFilter: function(key) {
			_log.debug('removeFilter', key);

			var idx = this.filters.indexOf(key);

			if (idx > -1) {
				this.filters.splice(idx, 1);
				delete this.filters[key];
			}

			if (this.filters.length === 0) {
				this.filterEnable = false;
			}
		},

		/**
		 * toggle filter
		 */
		toggleFilter: function() {
			_log.debug('toggleFilter');

			var filter = this.control.filter;

			if (filter.isActive()) {
				this.disableFilter(filter);
			} else {
				this.enableFilter(filter);
			}

			this.fireEvent('toggleFilter');
			//this.container.fireEvent('resize');
		},

		/**
		 * disable filter
		 * @param  {Object} filter
		 * @return {Object}
		 */
		disableFilter: function(filter) {
			_log.debug('disableFilter', filter);

			var filters = this.filters;
			var opts = this.options;
			filter.setState(null);

			if (this.filterBar) {
				this.filterBar.setStyle('display', 'none');
			}

			for (var i = 0; i < filters.length; i++) {
				if (opts.filter.enableDisable !== true) {
					delete this.filters[filters[i]];
				}
				this.filterControl[filters[i]].toggle_selected();
			}
			if (opts.filter.enableDisable !== true) {
				this.filters.length = 0;
			}

			this.filterEnable = false;

			return this;
		},

		/**
		 * enable filter
		 * @return {Object}
		 */
		enableFilter: function(filter) {
			_log.debug('enableFilter', filter);

			var filters = this.filters;
			var opts = this.options;

			filter.setState('active');

			if (this.filterBar) {
				this.filterBar.setStyle('display', 'block');
			}

			for (var j = 0; j < filters.length; j++) {
				var f = filters[j];
				this.filterControl[f].toggle_selected();
			}

			if (opts.filter.enableDisable === true) {
				this.filterEnable = true;
			}

			return this;
		},

		/**
		 * select filter
		 * @param  {string} key
		 * @param  {string} value
		 * @return {Object}
		 */
		selectFilter: function(key, value) {
			_log.debug('selectFilter', key, value, this.filterControl);

			if (this.filterControl && this.filterControl[key]) {
				this.filterControl[key].select(value);
				//this.filterControl[key].setState('active');
			}

			return this;
		},

	});

	module.exports = Filter;

});
