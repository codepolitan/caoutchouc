import Field from './field';

export default new Class({

  Extends: Field,

  options: {
    name: 'URL',
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
  initialize: function(options) {
    this.setOptions(options);

    var opts = this.options;

    this.fireEvent('init');

    this._initOptions(opts);
    this._initElement();
    this._initEvents();

    return this;
  },

  /**
   * Create a div and a hidden input to receive the selected value
   * @return {void}
   */
  _initElement: function() {
    //create a new div as input element
    this.parent();

    var opts = this.options;

    this.element.addClass('ui-field');

    if (opts.klss) {
      this.element.addClass(opts.klss);
    }

    if (opts.label != false) {
      this._initLabel();
    }

    this._initInput();
  },

  /**
   * [_initLabel description]
   * @return {[type]} [description]
   */
  _initLabel: function() {
    var text = this.options.name;

    if (this.options.useTextAsLabel) {
      text = this.options.text;
    }

    this.label = new Element('label', {
      html: text
    }).inject(this.element);
  },

  /**
   * [_initInput description]
   * @return {[type]} [description]
   */
  _initInput: function() {
    var self = this;

    //_log.debug('imput option', this.options);

    this.input = new Element('input', {
      name: this.options.name,
      type: this.options.type,
      value: this.options.value,
      placeholder: this.options.text
    }).inject(this.element);

    this.input.addEvents({
      keyup: function() {
        self.fireEvent('change', this.get('value'));
      },
      mousedown: function(e) {
        e.stopPropagation();
        //this.focus();
      }
    });
  }

});
