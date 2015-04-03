

var UI = UI || {};

/**
 * Display
 */
UI.Display = new Class({

	/**
	 * Display options for container
	 * @type {Object} options
	 */
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
 		_log('_initDisplay', this.element);

 		this._modifier = 'width';

		var self = this,
			opts = this.options.display,
			fx = opts.fx.default,
			modifier = this._modifier;

		this.display = {};

		fx.property = modifier;

		this.display.fx = new Fx.Tween(this.element, fx).addEvent('complete', function() {
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
		//_log('__toggle click, display', this._display);

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
		//_log('--------------------------------------------------start minimalization');
		//_log('actual _display', this._display);
		//_log('size', this['_modifier'], this[this['_modifier']]);

		if (!this.display)
			this._initDisplay();

		this.fireEvent('minimize');

		this.display.fx.start(this[this['_modifier']], 0);

		this.element.removeClass('state-focus');
		this._display = 'minimized';

		this.fireEvent('minimized', this);
		this.fireEvent('display', [this.options.name, 'minimized']);
	},

	/**
	 * [normalize description]
	 * @return {[type]} [description]
	 */
	normalize: function() {
		// _log('normalize');

		if (!this.display)
			this._initDisplay();
		
		this.fireEvent('normalize');

		var fx = this.display.fx.start(0, this[this['_modifier']]);

		this._display = 'normalized';
		this.element.removeClass('state-focus');

		this.fireEvent('normalized', this);
		this.fireEvent('display', [this.options.name, 'normalized']);
	},

	/**
	 * [normalize description]
	 * @return {[type]} [description]
	 */
	maximize: function() {
		//_log('maximize', size);

		this.toggleFx.start(size);

		this.element.setStyle('display', null);
		this.element.addClass('state-focus');

		this.isOpen = true;

		this.fireEvent('maximized', this);


	}
});
