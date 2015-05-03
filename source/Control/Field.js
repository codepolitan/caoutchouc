
/**
 * UI.Field
 */

UI.Field = new Class({

	Extends: UI.Control,

	options: {
		name: 'field',
		base: 'control',
		tag: 'div',
		type: 'input',
		value: null,
		useTextAsLabel: false,
		inkFx: {
		    duration: 200,
		    link: 'chain',
		    transition: Fx.Transitions.Quart.easeOut
		},
		binding: {
			_list: ['input'],
			input: {
				'input.keyup': '_onKeyUp',
				'input.mousedown': '_onMouseDown',
				'input.focus': '_onFocus',
				'input.blur': '_onBlur'
			}
		}
	},

	/**
	 * [_initElement description]
	 * @return {[type]} [description]
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
	},

	/**
	 * [_initLabel description]
	 * @return {[type]} [description]
	 */
	_initLabel: function()  {
		var text = this.options.name;

		if (this.options.useTextAsLabel)
			text = this.options.text;

		this.label = new Element('label', {
			html: text,
			'for': this.options.name
		}).inject(this.element);
	},

	/**
	 * [_initInput description]
	 * @return {[type]} [description]
	 */
	_initInput: function()  {
		var self = this;

		//_log('imput option', this.options);

		this.input = new Element('input', {
			name: this.options.name,
			type: this.options.type,
			value: this.options.value,
			placeholder: this.options.text
		}).inject(this.element);

		this._initError();

	},

	/**
	 * [_initInk description]
	 * @return {[type]} [description]
	 */
	_initInk: function() {
		var opts = this.options;

		this.ink = new Element('span', {
			class: 'field-ink'
		}).inject(this.element);

		this.inkFx = new Fx.Morph(this.ink, opts.inkFx);
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
		
		this.addEvents({
			blur: this.setState.bind(this, 'default'),
			focus: this.setState.bind(this, 'focus')
		});
	},

	/**
	 * [_onKeyUp description]
	 * @return {[type]} [description]
	 */
	_onKeyUp: function() {
		this.fireEvent('change', this.get('value'));
	},

	/**
	 * [_onMouseDown description]
	 * @return {[type]} [description]
	 */
	_onMouseDown: function(e) {
		//_log('mousedown');
		if (this._focus) return;

		if (!this.get('readonly')) {
			this._focus = true;
			this.setState('focus');
			this._inputFocus(e);
			//e.stopPropagation();
			//this.focus();
			//this._inputFocus(e);
		}
	},

	/**
	 * [_onFocus description]
	 * @return {[type]} [description]
	 */
	_onFocus: function(e) {
		//_log('focus');
		if (this._focus) return;
		if (!this.get('readonly')) {
			this._focus = true;
			this.setState('focus');
			this._inputFocus(e);
		}
	},

	/**
	 * [_onBlur description]
	 * @return {[type]} [description]
	 */
	_onBlur: function(e) {
		this.setState(null);
		this._hideInk();
		this._focus = false;
	},

	/**
	 * [_inputFocus description]
	 * @param  {event} e [description]
	 * @return {[type]}   [description]
	 */
	_inputFocus: function(e) {
		//_log('_inputFocus', e);

		if (this.ink) return;

		var x = e.event.offsetX || 0;
		var y = e.event.offsetY || 0;

		coord = this.input.getCoordinates(this.element);

		this._showInk(this.ink, x, y, coord);

		this.fireEvent('mousedown');

		this._focus = true;
	},

	/**
	 * [_initEffect description]
	 * @param  {[type]} inner [description]
	 * @param  {[type]} x     [description]
	 * @param  {[type]} y     [description]
	 * @return {[type]}       [description]
	 */
	_showInk: function(inner, x, y, coord) {
		var size = coord.width,
			top = 0;

		if (!this.ink)
			this._initInk();

		this.ink.setStyles({
			left: x
		});

		this.inkFx.start({
		    width: size,
		    left:coord.left,
		    opacity: 1
		});
	},

	/**
	 * [_initEffect description]
	 * @param  {[type]} inner [description]
	 * @param  {[type]} x     [description]
	 * @param  {[type]} y     [description]
	 * @return {[type]}       [description]
	 */
	_hideInk: function() {
		var self= this;
		var coord = this.input.getCoordinates(this.element);
		var size = coord.width / 2;

		if (!this.inkFx) {
			console.log('errorrrrrrr');
			return;
		}

		this.inkFx.start({
		    width: 0,
		    left:size,
			opacity: 0
		});

		(function() {
			if (self.ink) {
				self.ink.destroy();
				self.ink = null;
			}
		}).delay(100);
	},

	/**
	 * [_initError description]
	 * @return {[type]} [description]
	 */
	_initError: function() {
		this.error = new Element('span', {
			class: 'error-message'
		}).inject(this.element);
	},

	/**
	 * [set description]
	 * @param {[type]} name  [description]
	 * @param {[type]} value [description]
	 */
	set: function(prop, value) {
		//_log('set', value);

		var opts = this.options;

		this.input.set('value', value);

		this.fireEvent('change', value);
	},

	/**
	 * [setError description]
	 * @param {[type]} error [description]
	 */
	setError: function(error) {

		if (error) {
			this.element.addClass('field-error');
			this.error.set('html', error);
		} else {
			this.element.removeClass('field-error');
			this.error.set('html', '');
		}

	}

});

