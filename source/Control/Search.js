/*
	Class: UI.Search
		Create a skinnable search input element with reset button

	Extends:
		<UI.Field>

	Arguments:
		options

	Options:
		name - (string) name for the input element
		value - (string) value
		name - (string) name name

	Example:
		(start code)
		var searchInput = new UI.Search({
			name: 'myInput',
			value: 'Hello world'
		}).inject(document.body);
		(end)


*/

UI.Search = new Class({

	Extends: UI.Field,

	options: {
		name: 'search',
		label: false,
		timer: 100
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

	/*
	Function: _initReset
		private function

		Reset the value



	*/
	_initReset: function() {
		var self = this;
		var icon = mnml.icon.font.clear || 'mdi-action-help';
		this.reset = new UI.Button({
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
