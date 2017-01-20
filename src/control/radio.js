import Control from './control';

export default new Class({

  Extends: Control,

  options: {
    // default options
    name: 'radio'
  },

  /**
   * initialize
   * @param  {Object} options
   * @return {Object}
   */
  initialize: function(options) {
    this.parent(options);

    this.radios = [];
    this.selectedRadio = false;

    return this;
  },

  /**
   * Create a new radio element and return it
   * @param  {Object} opt
   * @return {DOMElement}
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

  /**
   * Add event to radio
   * @param {DOMElement} radio [description]
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

  /**
   * set the state for the radio
   * @param {DOMElement} radio
   * @param {string} state
   */
  setState: function(radio, state) {
    radio.paint.draw(this.skin[state]);
  }

});
