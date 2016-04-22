/**
 * Settings List.V2 View Class
 * @class View.List.V2.Settings
 * @author Bruno Santos, Jerome Vial
 */
define(function(require, exports, module) {

	var _log = __debug('view-core-listV2-settings').defineLevel();

	var Settings = new Class({

		/**
		 * when the view request settings
		 * @return {void}
		 */
		onSettings: function() {
			this.set('settings', this.options.save);
		},

		/**
		 * define settings
		 * @return {void}
		 */
		_defineSettings: function(settings) {
			_log.debug('_defineSettings', settings);

			var self = this;

			settings = settings || {};

			if (settings.ranges) {
				for (var i = 0; i < settings.ranges.length; i++) {
					var range = settings.ranges[i];
					this._fetchRange(range);
				}
			}

			if (settings.scrollTop) {
				this.element.scrollTop = settings.scrollTop;
			}

			if (settings.selectedId) {
				/*timer used because the ranges are not all
				loaded when we pass here should listen a
				event when all the ranges are ready*/
				setTimeout(function() {
					self.select(settings.selectedId, false);
				}, 100);
			}

			//handle search
			/*setTimeout(function() {
				if (settings.search) {
					if (settings.search.open) {
						self.showSearch();
					}

					if (settings.search.value) {
						self.search.set(settings.search.value);
					}
				}
			}, 100);*/

			this.settingsReady = true;
		},

		/**
		 * save settings
		 * @return {void}
		 */
		_saveSettings: function() {
			_log.debug('_saveSettings');

			var save = {
				scrollTop: this.content.parentNode.scrollTop,
				ranges: this.renderedRanges,
				selectedId: this.selectedId,
				filter: {
					open: false,
					values: undefined
				},
				search: {
					open: false,
					value: undefined
				}
			};

			//handle search
			if (this.search && this.search.state === 'focus') {
				save.search.open = true;

				var value = this.search.getValue();
				if (value) {
					save.search.value = value;
				}
			}

			//handle filter
			if (this.control.filter && this.control.filter.isActive()) {
				save.filter.open = true;

				/*var value = this.filter.getValue();
				if (value) {
					save.filter.value = value;
				}*/
			}

			this.fireEvent('settings', ['save', save]);
		}

	});

	module.exports = Settings;

});
