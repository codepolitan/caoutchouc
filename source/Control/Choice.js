
/**
 * Create <select> like element
 * @class UI.Choice
 * @extends {UI.Control}
 * @type {Class}
 */
UI.Choice = new Class({

	Extends: UI.Field,

	options: {
		name: 'choice'
	},

	/**
	 * [_initElement description]
	 * @return {[type]} [description]
	 */
	_initElement: function() {
		this.parent();

		this.item = {};

		var self = this,
			opts = this.options;

		//_log(opts);
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

	/**
	 * [_initList description]
	 * @param  {[type]} list [description]
	 * @return {[type]}      [description]
	 */
	_initList: function(list) {

		var self = this;
		this.list = new Element('ul', {
			'class': 'choice-list'
		}).inject(this.element);

		this.itemList = [];

		if (list && list.length > 0)
		for(var i = 0; i < list.length; i++) {
			this._initItem(list[i]);
		}
	},

	/**
	 * [_initItem description]
	 * @param  {[type]} item [description]
	 * @return {[type]}      [description]
	 */
	_initItem: function(item) {
		var self = this,
			opts = this.options;

		var li = new Element('li', {
			html: item,
			'data-value': item
		}).inject(this.list).addEvent('click', function(){
			//_log('click', this);
			if (self.selected)
				self.selected.removeClass('selected');

			if (self.selected && self.selected == this) {
				self.selected.removeClass('selected');
				self.selected = null;

				if (opts.type == 'push')
					self.select();
			} else {
				this.addClass('selected');
				self.selected = this;
				self.select(item);
			}
		});

		this.item[item] = li;

		this.itemList.push(item);

		if (opts.value == item ) {
			li.addClass('selected');
			self.selected = li;
		}
	},

	/**
	 * [toggle_selected description]
	 * @return {[type]} [description]
	 */
	toggle_selected: function() {
		//_log('toggle_selected', this.element);

		if (this.selected)
			this.selected.removeClass('selected');

		if (this.selected && this.selected == this) {
			this.selected.removeClass('selected');
			this.selected = null;
		} else {
			this.addClass('selected');
			this.selected = this;
		}
	},

	/**
	 * [select description]
	 * @param  {[type]} value [description]
	 * @return {[type]}       [description]
	 */
	select: function(value) {
		var name = this.options.name;

		this.input.set('value', value);
		this.choice.set('html', value);
		this.element.removeClass('state-open');
		this.fireEvent('change', value, name);
	},

	/**
	 * [select description]
	 * @param  {[type]} value [description]
	 * @return {[type]}       [description]
	 */
	set: function(value) {
		//_log('choice set', value, this.item);
		var item = this.item[value];

		if (!item) return;

		if (this.selected)
			this.selected.removeClass('selected');

		item.addClass('selected');
		this.selected = item;
	},

	/**
	 * [_toggle description]
	 * @return {[type]} [description]
	 */
	_toggle: function() {
		if (this.element.hasClass('state-open'))
			this.element.removeClass('state-open');
		else this.element.addClass('state-open');
	},

	/**
	 * [_initEvents description]
	 * @return {[type]} [description]
	 */
	_initEvents: function() {
		this.parent();
		var self = this;

		/*this.choice.addEvents({
			click: this._toggle.bind(this, 'default')
		});*/
		/*this.input.addEvents({
			click: this._toggle.bind(this, 'default'),
			blur: this.setState.bind(this, 'default'),
			focus: this.setState.bind(this, 'focus')
		});*/
	}

});
