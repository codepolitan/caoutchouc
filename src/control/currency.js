import Field from './field';

export default new Class({

  Extends: Field,

  options: {
    name: 'currency',
    base: 'control'
  },

  /**
   * init element
   * @return {void}
   */
  _initElement: function() {

    //create a new div as input element
    this.parent();

    //_log.debug(this.element);

    var alt = '{ "type" : "number", ' +
      '"groupSymbol": ",", ' +
      '"groupDigits": 3, ' +
      '"decSymbol": "", ' +
      '"decDigits": 0, ' +
      '"stripMask": false }';

    this.input.addClass('mask');
    this.input.set('alt', alt);

    this.element.addClass('field-currency');
  }

});
