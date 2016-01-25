
/**
 * UI Control Date
 * @class UI.Control.Date
 * @extends {UI.Control}
 * @type {Class}
 */
define([
	'moment',
	'UI/Control/Field',
	'DatePicker/Locale.en-US.DatePicker',
	'DatePicker/Picker.Date'
], function(
	moment,
	Field
) {

	var _log = __debug('ui:control-date');

	var exports = new Class({

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
				positionOffset: { x: 0, y: 5 },
				pickerClass: 'datepicker_bootstrap',
				format: "b"
			}
		},

		_initInput: function()  {
			var opts = this.options;

			//_log.debug('input option', opts.read, opts.name);

			this.element.addClass('field-date');
			this.element.addClass('icon-text');

			this.input = new Element('input', {
				//readonly: 'readonly',
				name: opts.name,
				type: 'text',
				class: 'date-input'
			}).inject(this.element);

			if (opts.read)
				this.input.set('readonly', 'readonly');

			/*this.icon = new Element('span', {
				'class': 'fa fa-calendar'
			}).inject(this.element);*/

			if (!opts.read)
				this._initPicker();

			//this.picker.detach(this.input);

			this.text = new Element('input', {
				'class': 'date-text',
				type: 'text'
			}).inject(this.element);

			this.set(opts.value);

		},

		_initPicker: function() {

			var opts = this.options;
			var options = opts.picker;

			options.pickOnly = this.options.pickOnly || false;

			//comment this because we already handle the select in the method down '_initEvents'

			/*options.onSelect = function(d){
				_log.debug('onSelect', d);
				self.fireEvent('change', [d, opts.name]);
			};*/

			options.onShow = function() {
				_log.debug('picker date show');
			};

			options.onHide = function() {
				_log.debug('picker date hide');
			};

			this.picker = new Picker.Date(this.input, options);

			//_log.debug('pickcer', this.picker);
		},

		/*
		Function: _initEvents
			private function

			Set control relative behavior (blur and focus)

		Return:
			(void)

		See also:
			<UI.Control::_initEvents>
			<UI.Component::_initEvents>
		*/

		_initEvents: function() {
			var self = this;

			if (this.options.read) return;

			this.picker.addEvents({
				select: function(date){
					//_log.debug('select', date);
					self.set(date);
					self.fireEvent('change', date);
				}
			});
		},

		/**
		 * [set description]
		 * @param {[type]} d [description]
		 */
		set: function(date) {
			//_log.debug('set', date);
			var opts = this.options;
			var text;
			var d;

			if (date) {
				d = moment(date).format(opts.format);
				text = moment(date).toISOString();

				//the window was trigger 'change' because self was not define
				//I just comment this (bsantos)
				//self.fireEvent('change', text);
			}

			if (this.picker.options.pickOnly === 'months') {
				d = moment(date).format('MMMM');
			}

			this.input.set('value', d);
			this.input.set('placeholder', opts.text);
			this.text.set('value', text);
		}

	});

	return exports;
});
