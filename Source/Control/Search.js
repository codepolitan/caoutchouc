
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

		initialize: function(options){
			this.setOptions(options);
			var opts = this.options;

			this.fireEvent('init');

			this._initOptions(opts);
			this._initElement();
			this._initEvents();

			return this;
		},
		/*
		Function: _initElement
			private function

			Create a div and a hidden input to receive the selected value

		Return:
			(void)

		See also:
			<UI.Field::_initElement>
			<UI.Control::_initElement>
			<UI.Component::_initElement>
		*/

		_initElement: function(){
			//create a new div as input element
			this.parent();
			var opts = this.options;

			this.element.addClass('ui-search');

			this._initReset();
		},

		/**
		 * [_initInput description]
		 * @return {[type]} [description]
		 */
		_initInput: function()  {
			//_log.debug('_initInput', this.options);
			this.parent();

			this.input.set('autocomplete', 'off');
		},

		/*
		Function: _initReset
			private function

			Reset the value



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

		_initEvents: function() {
			this.parent();

			var self = this,
				opts = this.options,
				timer;

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


		/*
		Function: focus

			Focus

		Return:
			this

		*/

		focus: function() {
			this.input.focus();
			this.fireEvent('focus');

			return this;
		},

		/*
		Function: empty

			Create a div and a hidden input to receive the selected value

		Return:
			this

		*/

		empty: function() {
			this.input.set('value', '');
			this.fireEvent('reset');

			return this;
		}
	});

	return exports;
});
