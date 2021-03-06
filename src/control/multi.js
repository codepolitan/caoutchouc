import Field from './field';

export default new Class({

  Extends: Field,

  options: {
    name: 'choice'
  },

  /**
   * [_initElement description]
   * @return {[type]} [description]
   */
  _initElement: function() {
    this.parent();
    var opts = this.options;

    this.value = opts.value || [];

    //_log.debug(opts);
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

    /*if (opts.value)
      this.input.set('value', opts.value);*/
  },

  /**
   * [_initList description]
   * @param  {[type]} list [description]
   * @return {[type]}      [description]
   */
  _initList: function(list) {
    this.menu = new Element('ul', {
      'class': 'choice-list'
    }).inject(this.element);

    if (list && list.length > 0) {
      for (var i = 0; i < list.length; i++) {
        this._initItem(list[i]);
      }
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
      html: item
    }).inject(this.menu).addEvent('click', function() {

      if (this.hasClass('selected')) {
        this.removeClass('selected');
        var idx = self.value.indexOf(item);
        _log.debug(idx, item);
        if (idx > -1) {
          self.value.splice(idx, 1);
        }
      } else {
        this.addClass('selected');
        self.value.push(item);
      }

      _log.debug(self.value);

      self.fireEvent('change', {
        value: self.value,
        key: opts.name
      });
    });

    if (this.value && this.value.indexOf(item) > -1) {
      li.addClass('selected');
    }
  },

  /**
   * [toggle description]
   * @return {[type]} [description]
   */
  toggle: function() {
    _log.debug('toggle_selected', this.element);

    if (this.selected) {
      this.selected.removeClass('selected');
    }

    if (this.selected && this.selected == this) {
      this.selected.removeClass('selected');
      this.selected = null;
    } else {
      this.addClass('selected');
      this.selected = this;
    }
  },

  /**
   * [_select description]
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  _select: function(value) {
    var name = this.options.name;

    this.input.set('value', value);
    this.choice.set('html', value);
    this.element.removeClass('state-open');
    this.fireEvent('change', value, name);
  },

  /**
   * [_toggle description]
   * @return {[type]} [description]
   */
  _toggle: function() {
    if (this.element.hasClass('state-open')) {
      this.element.removeClass('state-open');
    } else {
      this.element.addClass('state-open');
    }
  },

  /**
   * [_initEvents description]
   * @return {[type]} [description]
   */
  _initEvents: function() {
    this.parent();

    this.choice.addEvents({
      click: this._toggle.bind(this, 'default')
    });
    /*this.input.addEvents({
      click: this._toggle.bind(this, 'default'),
      blur: this.setState.bind(this, 'default'),
      focus: this.setState.bind(this, 'focus')
    });*/
  }

});
