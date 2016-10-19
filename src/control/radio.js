/**
 * UI Control RadiosGroup Class
 * @class UI.Control.RadiosGroup
 * @extends {UI.Control}
 * @type {Class}
 */
module.exports = new Class({

  Extends: UI.Control,

  options: {
    // default options
    name: 'radiosgroup',
    name: 'radio'
  },

  /*
  Constructor: initialize
    Constructor

  Arguments:
    options - (object) options

  Returns:
    this

  See also:
    <UI.Component::initialize>
  */

  initialize: function(options) {
    this.parent(options);

    this.radios = [];
    this.selectedRadio = false;

    return this;
  },

  /*
  Function: newRadio
    Create a new radio element and return it

  Arguments:
    opt - (object) options, see above

  Return:
    (element) radio element

  Discussion:
    this method shoul no longer exist.
  */

  newRadio: function(opt) {
    var radio = new Element('span', {
      'class': 'ui-radio',
      styles: Object.merge({}, {
        position: 'relative',
        display: 'inline-block',
        height: 15,
        zIndex: this.radios.length + 1
      }, opt.styles)
    }).store('value', opt.value);

    this.radios.push(radio);
    if (!this.radios[1]) {
      this.control = radio;
      this.setInput();
    }

    if (opt.text) {
      var text = new UI.Text({
        skin: this.options.skin,
        'for': this.options.name,
        html: opt.text
      }).inject(radio);

      //set width to element
      radio.setStyle('width', 100);
    } else {
      //radio.setStyle('width', this.props.width);
    }

    if (opt.selected && !this.selectedRadio) {
      this.selectedRadio = radio;
      this.input.value = radio.retrieve('value');
      this.setState(radio, 'selected');
    }
    this.addRadioAction(radio);

    return radio;
  },

  /*
  Function: newRadio
    private function

    Add event to radio

  Arguments:
    radio - (element) the radio element where event will be _setEventsed

  Return:
    (void)
  */

  addRadioAction: function(radio) {
    radio.addEvents({
      'click': function() {
        if (this.selectedRadio) {
          this.setState(this.selectedRadio, 'default');
        }
        this.setState(radio, 'selected');
        this.selectedRadio = radio;
        this.input.value = radio.retrieve('value');
      }.bind(this)
    });
  },


  /*
  Function: setState
    private function

    set the state for the radio

  Arguments:
    radio - (element) the radio element
    state - (string) state

  Return:
    (void)
  */

  setState: function(radio, state) {
    radio.paint.draw(this.skin[state]);
  }

});
