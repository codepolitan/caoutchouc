
/**
 * UI Component Drag
 * @class UI.Component.Drag
 * @author Jerome D. Vial
 */
define([
	
], function(

) {

	var exports = new Class({

		/**
		 * Display options for container
		 * @type {Object} options
		 */
		options: {
			display: {
				fx: {
					default: {
						duration: 160,
					    transition: 'sine:out',
					    link: 'cancel'
					},
					minimize: {
						duration: 160,
					    transition: 'sine:out',
					    link: 'cancel'
					}
				}
			}
		},

		/**
		 * [_initDisplay description]
		 * @return {[type]} [description]
		 */
		_initDisplay: function() {
	 		//_log.debug('_initDisplay', this.element);

	 		this._modifier = 'width';

	 		var direction = this.container.getStyle('flex-direction');

			if (direction === 'column') {
				this._modifier = 'height';
			}

			//_log.debug('direction', direction, this._modifier);

			var self = this;
			var	opts = this.options.display;
			var	fx = opts.fx.default;
			var	modifier = this._modifier;

			if (!this[modifier]) {
				this[modifier] = this.options.size || 260;
			}

			this.device = this.device || 'desktop';
			//this.underlay.hide();
			this.display = {};

			fx.property = modifier;

			this.display.fx = new Fx.Tween(this.element, fx)
			.addEvent('complete', function() {
				self.fireEvent('toggled');
			});

			return this.display;
		},

		/**
		 * [getDisplay description]
		 * @return {[type]} [description]
		 */
		getDisplay: function() {

			return this._display;
		},

		/**
		 * [getDisplay description]
		 * @return {[type]} [description]
		 */
		setDisplay: function(display) {

			this._display = display;

			return this;
		},

		/**
		 * [toggle description]
		 * @return {[type]} [description]
		 */
		toggle: function() {
			console.log('toggle', this._display);
			//_log.debug('__toggle click, display', this._display);

			if (this._display === 'normalized'){
				this.minimize();
			} else {
				this.normalize();
			}

			return this._display;
		},

		close: function() {
			this.minimize();
		},

		/**
		 * [minimize description]
		 * @return {[type]} [description]
		 */
		minimize: function(quiet) {
			//_log.debug('------start minimalization', this.device);
			var self = this;	
			if (!this.display) {
				this._initDisplay();
			}

			this.fireEvent('minimize');

			if (quiet) {
				this.element.setStyle(this._modifier, 0);
			} else {
				this.display.fx.start(0);
			}

			this._display = 'minimized';
			console.log('display', this._display);

			if (this.underlay && this.device != 'desktop') {
				this.underlay.fade(0);
			}

			this.fireEvent('display', 'minimized');
		},

		/**
		 * [normalize description]
		 * @return {[type]} [description]
		 */
		normalize: function() {
			console.log('normalize');
			if (!this.display) {
				this._initDisplay();
			}
			
			this.fireEvent('normalize');
			// this.setStyle('display', 'initial');
			// this.element.setStyle('display', 'initial');

			var size = this[this._modifier] || this.options.size;

			var w = window;
			var d = document;
			var e = d.documentElement;
			var g = d.getElementsByTagName('body')[0];
			var x = w.innerWidth || e.clientWidth || g.clientWidth;

		    if (x < 640) {
		    	size = x;
		    }

			//console.log('size', size);

			if (this.display.fx) {
				this.display.fx.start(size);
			} else {
				this.element.setStyle(this._modifier, size);
			}
			if (this.underlay && this.device != 'desktop') {
				//_log.debug('---', this.device);
				this.underlay.show();
				this.underlay.fade(1);
			}
			this._display = 'normalized';

			this.fireEvent('display', 'normalized');
		},

		/**
		 * [normalize description]
		 * @return {[type]} [description]
		 */
		maximize: function() {
			//_log.debug('maximize', size);

			return;
			this.toggleFx.start(size);

			this.element.setStyle('display', null);
			this.element.addClass('state-focus');

			this.isOpen = true;

			this.fireEvent('maximized', this);


		}
	});

	return exports;
});
