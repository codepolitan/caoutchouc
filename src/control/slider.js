/**
 * UI Control Slider Class
 * @class UI.Control.Slider
 * @extends {UI.Control}
 * @type {Class}
 */
module.exports = new Class({

  Extends: UI.Component,

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

  /*
  Constructor: initialize
    Construtor

  Arguments:
    options - (object) options
  */

  initialize: function(options) {
    this.parent(options);
  },

  /*
  Function: _initElement
    private function

    Call parent method and create a skinned knob element

  Return:
    (void)
  */

  _initElement: function() {
    this.parent();

    this.handler = new UI.Component({
      skin: this.options.skin,
      name: 'slider',
      type: 'knob'
    }).inject(this.element);
  },

  /*
  Function: inject
    Create the slider and inject it

  Arguments:
    target - (mix) See mootools doc
    position - (string) See mootools doc

  Return:
    this
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

  /*
  Function: _initEvents
    private function

    Set behavior relative to slider (complete)

  Return:
    (void)
  */

  _initEvents: function() {
    this.parent();
    this.addEvent('complete', function(step) {
      this.value = step;
    });
  },

  /*
  Function: set
    Set the slider value

  Arguments:
    value - (integer) The value to set

  Return:
    this
  */

  set: function(value) {
    return this.slider.set(value);
  }

});
