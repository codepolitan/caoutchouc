/**
* 
* Filter View Class
*
* @class View.Filter
* @author Jerome Vial, Bruno Santos
*/

define([
	'UI/Layout/Layout'
], function (
	Layout
) {

	var _log = __debug('view:core-layout');

	var exports = new Class({

		/**
		 * [_initLayout description]
		 * @return {[type]} [description]
		 */
		_initLayout: function(options) {
			_log.debug('_initLayout');

			var opts = options || this.options;
			var self = this;

			this.device = opts.device;
			//_log.debug('_initLayout', opts.layout, opts.container);
			if (!opts.layout) return;
			//_log.debug('--', opts.layout, opts.container);
			var settings = opts.settings.layout;

			var layout = this.layout = new Layout({
				theme: opts.theme,
				container: opts.container,
				node: opts.layout,
				settings: settings
			}).addEvents({
				resizer: function(name, prop, value) {
					self.setSettings('layout.' + name + '.' + prop, value);
				},
				display: function(name, state) {
					//_log.debug('display container ' + name + ' state ', state);

					self.setSettings('layout.' + name + '.display', state);
				}
			});
		
			this.container = this.layout.container;
			this.container.addClass('app-' + this.options.name);
		}
	});

	return exports;
});
