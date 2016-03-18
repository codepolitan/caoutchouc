/**
 * Loader Module
 * @author Jerome Vial, Bruno Santos
 */
define(function(require, exports, module) {

	var _log = __debug('view-core-loader').defineLevel();

	var Loader = new Class({

		options: {
			loader: {
				text: {
					default: 'Loading...',
					statusBar: 'Loading ',
				},
				delay: 200
			}
		},

		/**
		 * init loader
		 * @return {void}
		 */
		_initLoader: function() {
			_log.debug('_initLoader');

			this.statusBarText = this.options.loader.text.statusBar;

			this.addEvents({
				getData: this.showLoader.bind(this),
				noData: this.hideLoader.bind(this),
				setList: this.hideLoader.bind(this),
				progress: this.setLoaderText.bind(this)
			});
		},

		/**
		 * Show Loader
		 * @return {void}
		 */
		showLoader: function() {
			_log.debug('showLoader');

			var self = this;
			var opts = this.options.loader;

			this.setStatus(this.statusBarText);

			if (!this.loader) {
				this._createLoader();
			}

			/*display loader after 200ms*/
			clearTimeout(this.loaderTimeout);
			this.loaderTimeout = setTimeout(function() {
				self.loader.setStyle('display', 'initial');
			}, opts.delay);
		},

		/**
		 * Hide Loader
		 * @return {void}
		 */
		hideLoader: function() {
			_log.debug('hideLoader', this.loader);

			if (!this.loader) {
				return;
			}

			clearTimeout(this.loaderTimeout);
			this.loader.destroy();
			this.loader = undefined;
			this.loaderText = undefined;
		},

		/**
		 * create loader element
		 * @return {void}
		 */
		_createLoader: function() {
			_log.debug('_createLoader', this.element);

			if (!this.element) {
				return;
			}

			var opts = this.options.loader;

			var loader = this.loader = new Element('div', {
				class: 'ui-loader',
				styles: {
					display: 'none'
				}
			}).inject(this.element);

			this.loaderText = new Element('span', {
				html: opts.text.default,
				class: 'loader-text'
			}).inject(loader, 'top');

			new Element('div', {
				class: 'loader-bar'
			}).inject(loader, 'bottom');
		},

		/**
		 * set loader text
		 * @return {void}
		 */
		setLoaderText: function(text) {
			//_log.debug('setLoaderText', this.loaderText, text);

			if (this.loaderText) {
				this.loaderText.set('html', text);
			} else if (text) {
				this.setStatus(this.statusBarText + text);
			}
		}

	});

	module.exports = Loader;

});
