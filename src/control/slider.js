import { Component } from '../component/component';

export default new Class({

  Extends: Component,

  options: {

    // default options
    name: 'slider',
    type: 'horizontal',

    // implemented events
    onStart: function() {},
    onChange: function() {},
    onComplete: function() {},
    onTick: function() {},

    // mootools slider default settings
    snap: false,
    offset: 0,
    range: false,
    wheel: false,
    steps: 100
  },

  /**
   * initialize
   * @param  {Object} options
   * @return {void}
   */
  initialize: function(options) {
    this.parent(options);
  },

  /**
   * initElement
   * @return {void}
   */
  _initElement: function() {
    this.parent();

    this.handler = new Component({
      skin: this.options.skin,
      name: 'slider',
      type: 'knob'
    }).inject(this.element);
  },

  /**
   * inject
   * @param  {[type]} target
   * @param  {[type]} position
   * @return {Object}
   */
  inject: function(target, position) {
    this.fireEvent('inject');

    var self = this;

    this.element.inject(target, position);
    this.element.setStyle('visibility', 'visible');
    this.setSize();
    this.setCanvas();
    //ui.controller.element.register(this);

    this.slider = new Slider(this.paint.canvas, this.handler.element, {
      snap: this.options.snap,
      offset: this.options.offset,
      range: this.options.range,
      wheel: this.options.wheel,
      steps: this.options.steps,
      mode: this.options.type,

      onStart: function(step) {
        self.fireEvent('start', step);
      },
      onTick: function(position) {
        if (this.options.snap) {
          position = this.toPosition(this.step);
        }
        this.knob.setStyle(this.property, position);
      },
      onChange: function(step) {
        self.fireEvent('change', step);
      },
      onComplete: function(step) {
        self.fireEvent('complete', step);
      }
    });
    this.fireEvent('injected');

    return this;
  },

  /**
   * _initEvents
   * @return {void}
   */
  _initEvents: function() {
    this.parent();
    this.addEvent('complete', function(step) {
      this.value = step;
    });
  },

  /**
   * set
   * @param {integer} value
   */
  set: function(value) {
    return this.slider.set(value);
  }

});
