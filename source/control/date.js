/**
 * UI Control Date
 * @class UI.Control.Date
 */
var moment = require('moment');
var Field = require('control/field');
require('DatePicker/Locale.en-US.DatePicker');
require('DatePicker/Picker.Date');

var _log = __debug('ui-control-date').defineLevel();

var DateControl = new Class({

  Extends: Field,

  options: {
    name: 'date',
    base: 'control',
    tag: 'div',
    type: 'input',
    format: 'ddd, MMM D YYYY',
    value: null,
    useTextAsLabel: false,
    picker: {
      //timePicker: true,
      useFadeInOut: false,
      //inject: this.element,
      //showOnInit: true,
      draggable: false,
      columns: 1,
      positionOffset: {
        x: 0,
        y: 5
      },
      pickerClass: 'datepicker_bootstrap',
      format: 'b'
    }
  },

  /**
   * _initInput
   * @return {void}
   */
  _initInput: function() {
    var opts = this.options;

    _log.debug('input option', opts.read, opts.name);

    this.element.addClass('field-date');
    this.element.addClass('icon-text');

    this.input = new Element('input', {
      //readonly: 'readonly',
      name: opts.name,
      type: 'text',
      class: 'date-input'
    }).inject(this.element);

    this.input.set('placeholder', opts.text);

    if (opts.read) {
      this.input.set('readonly', 'readonly');
    }

    /*this.icon = new Element('span', {
      'class': 'fa fa-calendar'
    }).inject(this.element);*/

    if (!opts.read) {
      this._initPicker();
    }

    //this.picker.detach(this.input);

    this.text = new Element('input', {
      'class': 'date-text',
      type: 'text'
    }).inject(this.element);

    if (opts.value) {
      this.set(opts.value);
    }
  },

  /**
   * _initPicker
   * @return {void}
   */
  _initPicker: function() {

    var self = this;
    var opts = this.options;
    var options = opts.picker;

    options.pickOnly = this.options.pickOnly || false;

    /**
     * @ignore
     */
    options.onShow = function() {
      _log.debug('picker date show');

      /*when the picker open,
      set the last selected date
      to open the picker in the right date*/
      var val = self.text.get('value');
      self.input.setStyle('visibility', 'hidden');
      self.input.set('value', val);
      setTimeout(function() {
        self.set(val);
        self.input.setStyle('visibility', 'initial');
      }, 0);

    };

    /**
     * @ignore
     */
    options.onHide = function() {
      _log.debug('picker date hide');
    };

    this.picker = new Picker.Date(this.input, options);

    //_log.debug('pickcer', this.picker);
  },

  /**
   * Set control relative behavior (blur and focus)
   * @return {void}
   */
  _initEvents: function() {
    if (this.options.read) {
      return;
    }

    var self = this;

    this.picker.addEvents({
      select: function(date) {
        self.set(date);
        self.fireEvent('change', date);
      }
    });
  },

  /**
   * set
   * @param {string} d
   */
  set: function(d) {
    _log.debug('set', d);

    if (!d) {
      _log.warn('missing date value', d);
      return;
    }

    var opts = this.options;
    var text = moment(d).format(opts.format);
    var date = moment(d).toISOString();

    if (this.picker && this.picker.options.pickOnly === 'months') {
      text = moment(d).format('MMMM YYYY');
    }

    _log.debug('text:', text, 'date:', date);

    this.input.set('value', text);
    this.input.set('placeholder', opts.text);
    this.text.set('value', date);
  },

  /**
   * empty
   * @return {Object}
   */
  empty: function() {
    this.input.set('value', '');
    this.input.set('placeholder', this.options.text);
    this.text.set('value', '');

    return this;
  }

});

module.exports = DateControl;
