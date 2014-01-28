/*
	Class: UI.Select
		Create <select> like element

	Extends:
		<UI.Field>

	Require:
		<UI.Control>
		<UI.Menu>

	Arguments:
		options


*/


UI.Choice = new Class({

	Extends: UI.Field,

	options: {
		name: 'choice'
	},

	_initElement: function() {
		this.parent();

		var self = this,
			opts = this.options;

		//console.log(opts);
		this.input.set('type', 'text');
		this.input.addClass(opts.klss);
		this.element.addClass('ui-choice');

		this.wrapper = new Element('div', {
			'class': 'choice-wrapper'
		}).inject(this.element);

		this.choice = new Element('span', {
			'class': 'choice-text',
			html: opts.value
		}).inject(this.wrapper);

		this._initList(opts.list);

		//console.log(opts.value);

		if (opts.value)
			this.input.set('value', opts.value);

	},


	_initList: function(list) {
		var self = this;
		this.menu = new Element('ul', {
			'class': 'choice-list'
		}).inject(this.element);

		for(var i = 0; i < list.length; i++) {
			this._initItem(list[i]);
		}
	},

	_initItem: function(item) {
		var self = this;

		new Element('li', {
			html: item
		}).inject(this.menu).addEvent('click', function(){
			self._select(item);
		});
	},

	_select: function(value) {
		this.input.set('value', value);
		this.choice.set('html', value);
		this.menu.removeClass('list-open');
		this.fireEvent('change', value);
	},

	_toggle: function() {
		if (this.element.hasClass('state-open'))
			this.element.removeClass('state-open');
		else this.element.addClass('state-open');
	},

	_initEvents: function() {
		this.parent();
		var self = this;

		this.choice.addEvents({
			click: this._toggle.bind(this, 'default')
		});
		/*this.input.addEvents({
			click: this._toggle.bind(this, 'default'),
			blur: this.setState.bind(this, 'default'),
			focus: this.setState.bind(this, 'focus')
		});*/
	},

});
