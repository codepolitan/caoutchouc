

UI.Container.implement({

	options: {
		display: {
			fx: {
				default: {
					duration: 260,
				    transition: 'sine:out',
				    link: 'cancel'
				},
				minimize: {
					duration: 260,
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
 		_log('_initDisplay', this.element, this.options.display);

		var self = this,
			opts = this.options.display,

			fx = opts.fx.default,
			modifier = 'width';

		_log('fx.options', fx);

		this.display = this.display = {};

		fx.property = modifier;

		this.display.fx = this.display.fx || 
		new Fx.Tween(this.element, fx).addEvent('complete', function() {
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

		if (this._display == 'normalized')
			this.minimize();
		else this.normalize();

		return this._display;
	},

	/**
	 * [minimize description]
	 * @return {[type]} [description]
	 */
	minimize: function() {
		_log('minimize');

		if (!this.display)
			this._initDisplay();

		this.display.fx.start(0);

		this.element.removeClass('state-focus');
		this._display = 'minimized';

		minimal.settings.set('layout.' + this.main + '.display', 'minimized');

		minimal.settings.save();

		this.fireEvent('display', 'minimized');
	},

	/**
	 * [normalize description]
	 * @return {[type]} [description]
	 */
	normalize: function(size) {
		_log('normalize');

		var size = size || this.options.width || 280;
		if (this._display == 'normalized') return;

		if (!this.display)
			this._initDisplay();

		this.fireEvent('normalize', this);
		this.display.fx.start(size);

		this._display = 'normalized';
		this.element.removeClass('state-focus');

		minimal.settings.set('layout.' + this.main + '.display', 'normalized');
		minimal.settings.save();

		this.fireEvent('display', 'normalized');

	},

	/**
	 * [normalize description]
	 * @return {[type]} [description]
	 */
	maximize: function() {
		_log('maximize', size);

		return;
		this.toggleFx.start(size);

		this.element.setStyle('display', null);
		this.element.addClass('state-focus');

		this.isOpen = true;

		minimal.settings.set('layout.' + this.main + '.display', 'maximized');
		minimal.settings.save();

		this.fireEvent('maximized', this);


	}
});
