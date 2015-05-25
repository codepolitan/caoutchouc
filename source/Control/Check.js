
/**
 * UI Control Check
 * @class UI.Control.Check
 * @extends {UI.Control}
 * @type {Class}
 */

UI.Check = new Class({

	Extends: UI.Field,

	name: 'check',

	options: {
		text: null,
		checked: false,
		opts: {
			type: 'ckeck',
			
		}
	},

	/**
	 * [_initElement description]
	 * @return {[type]} [description]
	 */
	_initElement: function() {
		this.parent();

		var self = this,
			opts = this.options;

		this.checked = opts.value;

		this.input.set('type', 'hidden');

		var options = opts.opts;

		this.wrapper = new Element('div', {
			'class': 'check-wrapper'
		}).inject(this.element);

		this._initText(opts);
		this._initCheck(opts);


		if (this.checked) this.check.addClass('checked');

		
	},

	/**
	 * [_initCheck description]
	 * @return {[type]} [description]
	 */
	_initCheck: function() {
		var self = this;

		this.check = new Element('span', {
			'class': 'control-check',
		}).addEvents({
			click: function() {
				//_log(self.checked);
				if (self.checked) {
					self.checked = false;
					this.removeClass('checked');
				} else {
					self.checked = true;
					this.addClass('checked');
				}

				self.fireEvent('change', self.checked);
			}
		}).inject(this.wrapper);

		this.on = new Element('span', {
			'class': 'check-text check-on',
			'html': 'oui'
		}).inject(this.check);

		this.knob = new Element('span', {
			'class': 'ckeck-knob',
			html: '&nbsp;'
		}).inject(this.check);

		this.off = new Element('span', {
			'class': 'check-text check-off',
			'html': 'non'
		}).inject(this.check);
	},

	/**
	 * [_initText description]
	 * @param  {[type]} opts [description]
	 * @return {[type]}      [description]
	 */
	_initText: function(opts) {
		var self = this;

		this.text = new Element('span', {
			'class': 'control-text',
			html: opts.text
		}).addEvents({
			click: function() {
				//_log(self.checked);
				if (self.checked) {
					self.checked = false;
					this.removeClass('checked');
				} else {
					self.checked = true;
					this.addClass('checked');
				}
				self.fireEvent('change', self.checked);

			}
		}).inject(this.wrapper);
	}

});