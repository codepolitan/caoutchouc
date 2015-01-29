
/**
 * 
 * @param  {[type]} options){		this.setOptions(options);		var opts          = this.options;		this.fireEvent('init');		this._initOptions(opts);		this._initElement();		this._initEvents( [description]
 * @return {[type]}                                            [description]
 */
UI.Field = new Class({

	Extends: UI.Control,

	options: {
		name: 'field',
		base: 'control',
		tag: 'div',
		type: 'input',
		value: null,
		useTextAsLabel: false
	},

	/**
	 * [initialize description]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
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
		<UI.Control::_initElement>
		<UI.Component::_initElement>
	*/

	_initElement: function(){
		//create a new div as input element
		this.parent();

		var opts = this.options;

		this.element.addClass('ui-field');

		if (opts.klss)
			this.element.addClass(opts.klss);

		if (opts.label !== false)
			this._initLabel();

		this._initInput();

/*		this._initValue();
		this._initName();*/

	},

	_initLabel: function()  {
		var text = this.options.name;

		if (this.options.useTextAsLabel)
			text = this.options.text;

		this.label = new Element('label', {
			html: text,
			'for': this.options.name
		}).inject(this.element);
	},

	_initInput: function()  {
		var self = this;

		//_log('imput option', this.options);

		this.input = new Element('input', {
			name: this.options.name,
			type: this.options.type,
			value: this.options.value,
			placeholder: this.options.text
		}).inject(this.element);
	},

	/**
	 * [_initName description]
	 * @param  {[type]} name [description]
	 * @return {[type]}      [description]
	 */
	_initName: function(name) {
		var opts = this.options;

		if (opts.name) {
			this.label.set('html', name);
			this.input.set('name', name);
		}
	},

	/**
	 * [_initValue description]
	 * @return {[type]} [description]
	 */
	_initValue: function(){
		var opts = this.options;

		//create a new div as input element
		if (opts.value)
			this.setValue(opts.value);
	},


	/**
	 * [getValue description]
	 * @return {[type]} [description]
	 */
	getValue: function(){
		return this.input.get('value');
	},

	/**
	 * [setValue description]
	 * @param {[type]} value [description]
	 */
	setValue: function(value){
		this.input.set('value', value);
		this.value = value;
		this.fireEvent('change' , value);
	},

	/**
	 * [setState description]
	 * @param {[type]} state [description]
	 */
	setState: function(state){
		this.parent(state);
	},

	/**
	 * [_initEvents description]
	 * @return {[type]} [description]
	 */
	_initEvents: function() {
		this.parent();
		var self = this;
		this.input.addEvents({
			keyup: function() {
				self.fireEvent('change', this.get('value'));
			},
			mousedown: function(e) {
				//e.stopPropagation();
				//this.focus();
				self._onElementMouseDown(e);
			},
			focus: function(e) {
				if (!this.get('readonly'))
					self.setState('focus');
				self._onElementMouseDown(e);
			},
			blur: function(e) {
				self.setState(null);
				self._hideReaction();
				
			}
		});

		this.addEvents({
			blur: this.setState.bind(this, 'default'),
			focus: this.setState.bind(this, 'focus')
		});
	},

	/**
	 * [_onElementMouseDown description]
	 * @param  {event} e [description]
	 * @return {[type]}   [description]
	 */
	_onElementMouseDown: function(e) {
		if (this.underline) return;
		//e.stop();
		
		var x = e.event.layerX;
		var y = e.event.layerY;
		console.log('mousedown', x, y);

		coord = this.input.getCoordinates(this.element);

		this.underline = new Element('span', {
			class: 'field-reaction',
			styles: {
				left: x

			}
		}).inject(this.element, 'top');

		this._initReaction(this.underline, x, y, coord);

		this.fireEvent('mousedown');
	},

	/**
	 * [_initEffect description]
	 * @param  {[type]} inner [description]
	 * @param  {[type]} x     [description]
	 * @param  {[type]} y     [description]
	 * @return {[type]}       [description]
	 */
	_initReaction: function(inner, x, y, coord) {
		var size = coord.width,
			top = 0;


		var fx = new Fx.Morph(inner, {
		    duration: 300,
		    link: 'chain',
		    transition: Fx.Transitions.Quart.easeOut
		});

		fx.start({
		    width: size,
		    left:coord.left
			//opacity: 0
		});
	},


	/**
	 * [_initEffect description]
	 * @param  {[type]} inner [description]
	 * @param  {[type]} x     [description]
	 * @param  {[type]} y     [description]
	 * @return {[type]}       [description]
	 */
	_hideReaction: function() {
		var self= this;
		var coord = this.input.getCoordinates(this.element);
		var size = coord.width / 2;


		var fx = new Fx.Morph(this.underline, {
		    duration: 300,
		    link: 'chain',
		    transition: Fx.Transitions.Quart.easeOut
		});

		fx.start({
		    width: 0,
		    left:size
			//opacity: 0
		});

		(function() {
			self.underline.destroy();
			self.underline = null;
		}).delay(1000);
	},
	/**
	 * [set description]
	 * @param {[type]} name  [description]
	 * @param {[type]} value [description]
	 */
	set: function(value) {
		var opts = this.options;
		console.log('setvalue', value);
		this.input.set('value', value);
		this.fireEvent('change', value);
	}

});
