import Field from 'control/field';

const _log = __debug('control-choice').defineLevel();

export default new Class({

  Extends: Field,

  options: {
    name: 'choice',
    //error: false,
  },

  /**
   * init element
   * @return {void}
   */
  _initElement: function() {
    _log.debug('_initElement');

    this.parent();

    this.item = {};

    var opts = this.options;

    this.input.set('type', 'text');
    this.input.addClass(opts.klss);
    this.element.addClass('ui-choice');

    this.wrapper = new Element('div', {
      'class': 'choice-wrapper'
    }).inject(this.label, 'after');

    this.choice = new Element('span', {
      'class': 'choice-text',
      html: opts.value
    }).inject(this.wrapper);

    this._initList(opts.list);

    if (opts.value) {
      this.input.set('value', opts.value);
    }
  },

  /**
   * init list
   * @param  {Array} list
   * @return {void}
   */
  _initList: function(list) {
    _log.debug('_initList');

    this.list = new Element('ul', {
      'class': 'choice-list'
    }).inject(this.label, 'after');

    this.itemList = [];

    if (list && list.length > 0) {
      for (var i = 0; i < list.length; i++) {
        this._initItem(list[i]);
      }
    }
  },

  /**
   * init item
   * @param  {string} item
   * @return {void}
   */
  _initItem: function(item) {
    _log.debug('_initItem');

    var li = new Element('li', {
      html: item,
      'data-value': item
    }).inject(this.list);

    li.addEvent('click', this._itemDidClick.bind(this, li, item));

    this.item[item] = li;

    this.itemList.push(item);

    if (this.options.value === item) {
      li.addClass('selected');
      this.selected = li;
    }
  },

  /**
   * item did click
   * @param  {DOMElement} el
   * @param  {string} item
   * @return {void}
   */
  _itemDidClick: function(el, item) {
    _log.debug('_itemDidClick');

    var opts = this.options;

    if (opts.read) {
      return;
    }

    if (this.selected) {
      this.selected.removeClass('selected');
    }

    if (this.selected && this.selected === el) {
      this.selected.removeClass('selected');
      this.selected = null;

      this.select();
    } else {
      el.addClass('selected');
      this.selected = el;
      this.select(item);
    }
  },

  /**
   * toggle selected
   * @return {void}
   */
  toggle_selected: function() {
    _log.debug('toggle_selected', this.element);

    if (this.selected) {
      this.selected.removeClass('selected');
    }

    if (this.selected && this.selected === this) {
      this.selected.removeClass('selected');
      this.selected = null;
    } else {
      this.addClass('selected');
      this.selected = this;
    }
  },

  /**
   * select
   * @param  {string} value
   * @return {void}
   */
  select: function(value) {
    _log.debug('select', value);

    var name = this.options.name;

    this.input.set('value', value);
    this.choice.set('html', value);
    this.element.removeClass('state-open');
    this.fireEvent('change', value, name);
  },

  /**
   * set
   * @param  {string} value
   * @return {void}
   */
  set: function(value) {
    _log.debug('set', value, this.item);

    var item = this.item[value];

    if (!item) {
      return;
    }

    if (this.selected) {
      this.selected.removeClass('selected');
    }

    item.addClass('selected');
    this.selected = item;
  },

  /**
   * _toggle
   * @return {void}
   */
  _toggle: function() {
    _log.debug('_toggle');

    if (this.element.hasClass('state-open')) {
      this.element.removeClass('state-open');
    } else {
      this.element.addClass('state-open');
    }
  }

});
