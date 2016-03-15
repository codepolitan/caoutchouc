/**
 * UI Control Search Class
 * @class UI.Control.Search
 * @extends {UI.Control}
 * @type {Class}
 */
define([
	'UI/Control/Field',
	'UI/Control/Button',
	'UI/Component/Method',
	'mnml/icon/font',
], function(
	Field,
	Button,
	Method,
	fontIconConfig
) {

	var exports = new Class({

		Extends: Field,

		Implements: [Options, Events, Method],

		options: {
			name: 'search',
			error: false,
			label: false,
			timer: 150
		},

		/**
		 * initialize
		 * @param  {Object} options
		 * @return {Object}
		 */
		initialize: function(options) {
			this.setOptions(options);
			var opts = this.options;

			this.fireEvent('init');

			this._initOptions(opts);
			this._initElement();
			this._initEvents();

			return this;
		},

		/**
		 * init element
		 * @return {void}
		 */
		_initElement: function() {
			//create a new div as input element
			this.parent();

			this.element.addClass('ui-search');

			this._initReset();
		},

		/**
		 * initInput
		 * @return {void}
		 */
		_initInput: function() {
			//_log.debug('_initInput', this.options);
			this.parent();

			this.input.set('autocomplete', 'off');
		},

		/**
		 * init reset
		 * @return {void}
		 */
		_initReset: function() {
			var self = this;
			var icon = fontIconConfig.clear || 'mdi-action-help';

			this.reset = new Button({
				name: 'clear',
				icon: icon,
			}).inject(this.element).addEvent('press', function() {
				self.empty();
			});
		},

		/**
		 * init events
		 * @return {void}
		 */
		_initEvents: function() {
			this.parent();

			var self = this;
			var opts = this.options;
			var timer;

			this.input.addEvents({
				keyup: function() {
					clearTimeout(timer);
					timer = setTimeout(function() {
						self.fireEvent('search', self.input.get('value'));
					}, opts.timer);
				},
				mousedown: function(e) {
					e.stopPropagation();
				}
			});
		},

		/**
		 * focus
		 * @return {Object}
		 */
		focus: function() {
			this.input.focus();
			this.fireEvent('focus');

			return this;
		},

		/**
		 * empty
		 * @return {Object}
		 */
		empty: function() {
			this.input.set('value', '');
			this.fireEvent('reset');

			return this;
		}

	});

	return exports;

});
