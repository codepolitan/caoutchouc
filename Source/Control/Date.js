/**
 * UI Control Date
 * @class UI.Control.Date
 */
define(function(require, exports, module) {

	var moment = require('moment');
	var Field = require('UI/Control/Field');
	require('DatePicker/Locale.en-US.DatePicker');
	require('DatePicker/Picker.Date');

	var _log = __debug('ui-control-date').defineLevel('debug');

	var DateControl = new Class({

		Extends: Field,

		options: {
			name: 'date',
			base: 'control',
			tag: 'div',
			type: 'input',
			format: 'ddd, MMM D YYYY',
			value: null,
			useTextAsLabel: false,
			picker: {
				//timePicker: true,
				useFadeInOut: false,
				//inject: this.element,
				//showOnInit: true,
				draggable: false,
				columns: 1,
				positionOffset: {
					x: 0,
					y: 5
				},
				pickerClass: 'datepicker_bootstrap',
				format: 'b'
			}
		},

		/**
		 * _initInput
		 * @return {void}
		 */
		_initInput: function() {
			var opts = this.options;

			_log.debug('input option', opts.read, opts.name);

			this.element.addClass('field-date');
			this.element.addClass('icon-text');

			this.input = new Element('input', {
				//readonly: 'readonly',
				name: opts.name,
				type: 'text',
				class: 'date-input'
			}).inject(this.element);

			if (opts.read) {
				this.input.set('readonly', 'readonly');
			}

			/*this.icon = new Element('span', {
				'class': 'fa fa-calendar'
			}).inject(this.element);*/

			if (!opts.read) {
				this._initPicker();
			}

			//this.picker.detach(this.input);

			this.text = new Element('input', {
				'class': 'date-text',
				type: 'text'
			}).inject(this.element);

			this.set(opts.value);
		},

		/**
		 * _initPicker
		 * @return {void}
		 */
		_initPicker: function() {

			var opts = this.options;
			var options = opts.picker;

			options.pickOnly = this.options.pickOnly || false;

			/**
			 * @ignore
			 */
			options.onShow = function() {
				_log.debug('picker date show');
			};

			/**
			 * @ignore
			 */
			options.onHide = function() {
				_log.debug('picker date hide');
			};

			this.picker = new Picker.Date(this.input, options);

			//_log.debug('pickcer', this.picker);
		},

		/**
		 * Set control relative behavior (blur and focus)
		 * @return {void}
		 */
		_initEvents: function() {
			if (this.options.read) {
				return;
			}

			var self = this;

			this.picker.addEvents({
				/**
				 * @ignore
				 */
				select: function(date) {
					self.set(date);
					self.fireEvent('change', date);
				}
			});
		},

		/**
		 * set
		 * @param {string} date
		 */
		set: function(date) {
			_log.debug('set', date);

			var opts = this.options;
			var text;
			var d;

			if (date) {
				d = moment(date).format(opts.format);
				text = moment(date).toISOString();
			}

			if (this.picker.options.pickOnly === 'months') {
				d = moment(date).format('MMMM');
			}

			this.input.set('value', d);
			this.input.set('placeholder', opts.text);
			this.text.set('value', text);
		}

	});

	module.exports = DateControl;

});
