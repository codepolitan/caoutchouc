import Component from '../component/component';

export default new Class({

  Extends: Component,

  options: {
    name: 'dates',
    base: 'control'
  },

  /**
   * Create a div and a hidden input to receive the selected value
   * @return {void}
   */
  _initElement: function() {

    //create a new div as input element
    this.parent();
    this.date = this.options.date;

    var tmp = new Date(this.date);
    var time = this.convertDateTimeToHour(tmp);

    this.input.set('value', time);

    this.input.set('type', 'text');
    this.input.addClass('control-hour');

    var self = this;

    this.addEvent('injected', function() {
      self._addControls();
    });

    //this._initMenu();
    //this._initWheel();
  },

  /**
   * add controls
   */
  _addControls: function() {
    var self = this;

    var controls = new Element('span', {
      'class': 'hour-controls'
    }).inject(this.input, 'after');

    this.plus = new Element('span', {
      'class': 'icon-plus'
    }).inject(controls);


    this.plus.addEvent('click', function() {
      tmp = new Date(self.date).increment('minute', '15').toJSON();
      self.date = new Date(self.date).increment('minute', '15');
      var time = self.convertDateTimeToHour(tmp);
      self.input.set('value', time);
      self.fireEvent('change', self.date);

    });


    this.minus = new Element('span', {
      'class': 'icon-minus'
    }).inject(controls);

    this.minus.addEvent('click', function() {
      tmp = new Date(self.date).decrement('minute', '15').toJSON();
      self.date = new Date(self.date).decrement('minute', '15');
      var time = self.convertDateTimeToHour(tmp);
      self.input.set('value', time);
      self.fireEvent('change', self.date);

    });

    //_log.debug('plus', self.element, self.minus);
  },

  convertDateTimeToHour: function(dateTime) {
    var date = new Date(dateTime);
    var h = date.getHours().toString();
    var m = date.getMinutes().toString();

    if (h.length == 1) {
      h = '0' + h;
    }
    if (m.length == 1) {
      m = m + '0';
    }

    return h + 'h' + m;
  },

  /**
   * Set element state
   * @param {string} state
   */
  setState: function(state) {
    this.parent(state);
  },

  /**
   * Set control relative behavior (blur and focus)
   * @return {void}
   */
  _initEvents: function() {
    this.parent();
    this.addEvents({
      blur: this.setState.bind(this, 'default'),
      focus: this.setState.bind(this, 'focus')
    });
  },

  /**
   * set
   * @param {[type]} name  [description]
   * @param {[type]} value [description]
   */
  set: function(name, value) {
    this.element.set(name, value);

  }

});
