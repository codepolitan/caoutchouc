/**
 * UI Control Input Class
 * @class UI.Control.Input
 * @extends {UI.Control}
 * @type {Class}
 */
var Control = require('control/control');

module.exports = new Class({

  Extends: Control,

  options: {

    // default options
    name: 'ui-input',
    value: ''
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


    _log.debug('_initElement', this);
    //create input
    this.setInput('text');
    this.input.setStyle('width', this.props.width - this.input.getStyle('paddingLeft').toInt() - this.input.getStyle('paddingRight').toInt());


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
    if (this.skin[state]) this.input.set(this.skin[state].components.input.styles);
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
  }

});
