
var UI = UI || {};
var Class = Class || function() {};

/**
 * [_initElement description]
 */
UI.Hour = new Class({

	Extends: UI.Field,

	options: {
		name: 'hour',
		base: 'control'

	},

	/**
	 * [_initElement description]
	 * @return {[type]} [description]
	 */
	_initElement: function(){

		//create a new div as input element
		this.parent();

		//_log(this.element, this.options.read);

		if (!this.options.read) {
			this.input.addClass('mask');
			this.input.set('alt', "{ type: 'fixed', mask: '99h99' }");
		}

		this.element.addClass('field-hour');

		this.date = this.options.value  || this.options.date;

		var tmp = new Date(this.date);
		var time = this.convertDateTimeToHour(tmp);

		this.input.set('value', time);

		this.input.set('type', 'text');
		this.input.addClass('control-hour');

		var self = this;

		this.addEvent('injected', function(){
			self._addControls();
		});

		//this._initMenu();
		//this._initWheel();
	},

	/**
	 * [_addControls description]
	 */
	_addControls: function() {
		var self = this;

		var controls = new Element('span', {
			'class': 'hour-controls'
		}).inject(this.input, 'after');

		this.plus = new Element('span', {
			'class': 'fa fa-plus-square'
		}).inject(controls);

		this.plus.addEvent('click', function() {
			tmp = new Date(self.date).increment('minute', '15').toJSON();
			self.date = new Date(self.date).increment('minute', '15');
			var time = self.convertDateTimeToHour(tmp);
			self.input.set('value', time);
			self.fireEvent('change', self.date);

		});


		this.minus = new Element('span', {
			'class': 'fa fa-minus-square'
		}).inject(controls);

		this.minus.addEvent('click', function() {
			tmp = new Date(self.date).decrement('minute', '15').toJSON();
			self.date = new Date(self.date).decrement('minute', '15');
			var time = self.convertDateTimeToHour(tmp);
			self.input.set('value', time);
			self.fireEvent('change', self.date);

		});

		//_log('plus', self.element, self.minus);
	},

	convertDateTimeToHour: function(dateTime) {
		var date = new Date(dateTime);
		var h = date.getHours().toString();
		var m = date.getMinutes().toString();

		if (h.length === 1) h = '0' + h;
		if (m.length === 1) m = '0' + m;

		return h + 'h' + m;
	},


	/*
	Function: setState
		Set element state

	Arguments:
		state - (string) State name

	Return:
		(void)

	See also:
		<UI.Component::setState>
	*/

	setState: function(state){
		this.parent(state);
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

		this.input.addEvents({
			keyup: function() {
				var hours = this.get('value').split('h');

				self.date = new Date(self.date);

				self.date.setHours(hours[0]);
				self.date.setMinutes(hours[1]);
				self.date.setSeconds(0);

				self.fireEvent('change', self.date);

			},
			mousedown: function(e) {
				//e.stopPropagation();
				//this.focus();
			},
			focus: function(e) {
				if (!this.get('readonly'))
					self.setState('focus', e);
			},
			blur: function(e) {
				self.setState(null, e);
			}
		});

		this.addEvents({
			blur: this.setState.bind(this, 'default'),
			focus: this.setState.bind(this, 'focus')
		});
	},

	/**
	 * [set description]
	 * @param {[type]} name  [description]
	 * @param {[type]} value [description]
	 */
	set: function(name, value) {
		this.element.set(name, value);

	}

});
