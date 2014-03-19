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
		var self = this,
			opts = this.options;

		var li = new Element('li', {
			html: item
		}).inject(this.menu).addEvent('click', function(){
			if (self.selected)
				self.selected.removeClass('selected');

			if (self.selected && self.selected == this) {
				self.selected.removeClass('selected');
				self.selected = null;
				if (opts.type == 'push')
					self._select();
			} else {
				this.addClass('selected');
				self.selected = this;
				self._select(item);
			}
		});

		if (opts.value == item ) {
			li.addClass('selected');
			self.selected = li;
		}
	},

	_select: function(value) {
		var name = this.options.name;

		this.input.set('value', value);
		this.choice.set('html', value);
		this.element.removeClass('state-open');
		this.fireEvent('change', value, name);
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
