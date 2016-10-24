import Control from './control';

export default new Class({

  Extends: Control,

  options: {

    // default options
    name: 'ui-input',
    value: ''
  },

  /**
   * Create a div and a hidden input to receive the selected value
   * @return {void}
   */
  _initElement: function() {
    //create a new div as input element
    this.parent();

    _log.debug('_initElement', this);
    //create input
    this.setInput('text');
    this.input.setStyle('width', this.props.width - this.input.getStyle('paddingLeft').toInt() - this.input.getStyle('paddingRight').toInt());
  },

  /**
   * Set element state
   * @param {void} state
   */
  setState: function(state) {
    this.parent(state);
    if (this.skin[state]) {
      this.input.set(this.skin[state].components.input.styles);
    }
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
  }

});
