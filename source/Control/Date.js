
/**
 * UI Control Date
 * @class UI.Control.Date
 * @extends {UI.Control}
 * @type {Class}
 */
define([
	'moment',
	"UI/Control/Field"
], function(
	moment,
	Field
) {

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
			var self = this,
				opts = this.options;

			//_log('input option', opts.read, opts.name);

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
			var self = this,
				opts = this.options;


			var options =  opts.picker;

			//comment this because we already handle the select in the method down '_initEvents'

			/*options.onSelect = function(d){
				_log('onSelect', d);
				self.fireEvent('change', [d, opts.name]);
			};*/

			options.onShow = function(d){
				//_log('-show-', d);
			};

			options.onHide = function(d){
				//_log('-hide-', d);

			};

			this.picker = new Picker.Date(this.input, options);

			//_log('pickcer', this.picker);
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
					//_log('select', date);
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
			//_log('set', date);
			var opts = this.options;
			var text;

			if (date) {
				date = moment(date).format(opts.format);
				text = moment(date).toISOString();

				//the window was trigger 'chnage' because self was not define
				//I just comment this (bsantos)
				//self.fireEvent('change', text);
			}

			this.input.set('value', date);
			this.input.set('placeholder', opts.text);
			this.text.set('value', text);
		}

	});

	return exports;
});
