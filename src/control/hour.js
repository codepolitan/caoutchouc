import moment from 'moment';
import Field from './field';

export default new Class({

  Extends: Field,

  options: {
    name: 'hour',
    base: 'control'

  },

  /**
   * [_initElement description]
   * @return {[type]} [description]
   */
  _initElement: function() {

    //create a new div as input element
    this.parent();

    //_log.debug(this.element, this.options.read);

    if (!this.options.read) {
      this.input.addClass('mask');
      this.input.set('alt', '{ "type": "fixed", "mask": "99h99" }');
    }

    this.element.addClass('field-hour');

    this.date = this.options.value || this.options.date;

    var time;
    if (this.date) {
      var tmp = new Date(this.date);
      time = this.convertDateTimeToHour(tmp);
    }

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
   * [_addControls description]
   */
  _addControls: function() {
    var self = this;

    var controls = new Element('span', {
      'class': 'hour-controls'
    }).inject(this.input, 'after');

    this.plus = new Element('span', {
      'class': 'icon-font mdi-navigation-expand-less icon-more'
    }).inject(controls);

    this.plus.addEvent('click', function() {
      var tmp = new Date(self.date).increment('minute', '15').toJSON();
      self.date = new Date(self.date).increment('minute', '15');
      var time = self.convertDateTimeToHour(tmp);
      self.input.set('value', time);
      self.fireEvent('change', self.date);

    });


    this.minus = new Element('span', {
      'class': 'icon-font mdi-navigation-expand-more icon-less'
    }).inject(controls);

    this.minus.addEvent('click', function() {
      var tmp = new Date(self.date).decrement('minute', '15').toJSON();
      self.date = new Date(self.date).decrement('minute', '15');
      var time = self.convertDateTimeToHour(tmp);
      self.input.set('value', time);
      self.fireEvent('change', self.date);

    });

    //_log.debug('plus', self.element, self.minus);
  },

  /**
   * [convertDateTimeToHour description]
   * @param  {[type]} dateTime [description]
   * @return {[type]}          [description]
   */
  convertDateTimeToHour: function(dateTime) {
    var date = new Date(dateTime);
    var h = date.getHours().toString();
    var m = date.getMinutes().toString();

    if (h.length === 1) {
      h = '0' + h;
    }
    if (m.length === 1) {
      m = '0' + m;
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
    var self = this;

    if (this.options.read) {
      return;
    }

    this.input.addEvents({
      keyup: function() {
        var hours = this.get('value').split('h');

        self.date = new Date(self.date);

        self.date.setHours(hours[0]);
        self.date.setMinutes(hours[1]);
        self.date.setSeconds(0);

        self.fireEvent('change', self.date);

      },
      mousedown: function(e) {
        //e.stopPropagation();
        //this.focus();
      },
      focus: function(e) {
        if (!this.get('readonly')) {
          self.setState('focus', e);
        }
      },
      blur: function(e) {
        self.setState(null, e);
      }
    });

    this.addEvents({
      blur: this.setState.bind(this, 'default'),
      focus: this.setState.bind(this, 'focus')
    });
  },

  /**
   * [_onKeyUp description]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  _onKeyUp: function() {
    //this.fireEvent('change', this.get('value'));
  },

  /**
   * [set description]
   * @param {[type]} name  [description]
   * @param {[type]} value [description]
   */
  setOld: function(name, value) {
    this.element.set(name, value);

  },

  /**
   * [set description]
   * @param {[type]} date [description]
   */
  set: function(date) {
    //_log.debug('set', date);

    this.date = moment(date).toISOString();

    var time = this.convertDateTimeToHour(this.date);

    this.input.set('value', time);

    this.fireEvent('change', this.date);
  }

});
