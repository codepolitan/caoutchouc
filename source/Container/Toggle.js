
/**
 * Minimal.View Limit
 * @since 0.1.9.1
 * @description Comes from Minimal View
 * @return {[type]} [description]
 */
UI.Container.implement({
	options: {
		toggleFx: {
			duration: 300,
		    transition: 'quart:out',
		    link: 'cancel'
		}
	},

	/**
	 * [_initToggle description]
	 * @return {[type]} [description]
	 */
	_initToggle: function() {
		 //_log('_initToggle', this.isOpen, this._modifier, this.element);

		var opts = this.options,
			self = this,
			modifier = 'width';

		var size = this.element[modifier];
		opts.toggleFx.property = modifier;
		this.toggleFx = this.toggleFx || new Fx.Tween(this.element, opts.toggleFx).addEvents({
			complete: function(ev) {
				//_log('toggle complete', ev);
				self.fireEvent('toggled');
			}
		});
	},

	/**
	 * Remove or Inject the Application Container in the DOM
	 * @return {[type]} [description]
	 */
	toggle: function() {
		//console.log('toggle', this.isOpen);

		var self = this,
			opts = this.options,
			modifier = 'width';

		var size = this[modifier] || 160;
		//_log('size', size || 100);
		//_log('--- isOpen', this.isOpen);
		if (this.isOpen === true) {
			//_log('--- close', this.isOpen);
			this.toggleClose();
		} else {
			//_log('--- open', this.isOpen);
			this.toggleOpen(size);
		}

		//return this.isOpen;
	},

	/**
	 * [toggleClose description]
	 * @return {[type]} [description]
	 */
	toggleClose: function() {
		//_log('toggleOpen');

		this.toggleFx.start(0);

		//console.log('close');
		this.element.removeClass('state-focus');

		/*(function() {
			self.container.setStyle('display', 'none');	
		}).delay(250);*/

		minimal.settings.set('layout.' + this.main + '.hidden', true);
		minimal.settings.save();

		this.isOpen = false;

		//view.container.addClass('state-focus');
	},

	/**
	 * [toggleOpen description]
	 * @param  {[type]} size [description]
	 * @return {[type]}      [description]
	 */
	toggleOpen: function(size) {
		//_log('toggleOpen', size);

		this.toggleFx.start(size);

		this.element.setStyle('display', null);
		this.element.addClass('state-focus');

		minimal.settings.set('layout.' + this.main + '.hidden', false);
		minimal.settings.save();

		//view.container.removeClass('state-focus');
		this.isOpen = true;
	}

});
