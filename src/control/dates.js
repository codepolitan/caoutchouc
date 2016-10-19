/**
 * UI Control Dates
 * @extends {UI.Control}
 * @type {Class}
 */
var Component = require('component/component');

module.exports = new Class({

  Extends: Component,

  options: {
    name: 'dates',
    base: 'control'
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

    if (h.length == 1) h = '0' + h;
    if (m.length == 1) m = m + '0';

    return h + 'h' + m;
  },


  /*
  Function: setState
    Set element state

  Arguments:
    state - (string) State name

  Return:
    (void)

  See also:
    <UI.Component::setState>
  */

  setState: function(state) {
    this.parent(state);
  },

  /*
  Function: _initEvents
    private function

    Set control relative behavior (blur and focus)

  Return:
    (void)

  See also:
    <UI.Control::_initEvents>
    <UI.Component::_initEvents>
  */

  _initEvents: function() {
    this.parent();
    this.addEvents({
      blur: this.setState.bind(this, 'default'),
      focus: this.setState.bind(this, 'focus')
    });
  },

  set: function(name, value) {
    this.element.set(name, value);

  }

});
