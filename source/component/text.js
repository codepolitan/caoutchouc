/**
 * UI Component Text
 * @class UI.Text
 * @extends {UI.Component}
 * @author Bruno Santos, Jerome Vial
 */
define([
  "UI/Component/Component",
], function(
  Component
) {

  var exports = new Class({

    Extends: Component,

    options: {
      name: 'text',
      klass: 'ui-text',
      tag: 'span',
      text: '&nbsp;',
      emboss: false,
      selectable: false
    },

    /*
    	Method: _initElement
    		private method

    	Make a  Text and set the fade Fx

    	Return:
    	(void)

    	See also:
    	<UI.Component::_initElement>
    */
    _initElement: function() {
      this.parent();

      if (this.options.text)
        this.set(this.options.text);
    },

    /**
     * Default setter for the class
     * @param {string} property [description]
     * @param {mixin} value    [description]
     */
    set: function(property, value) {
      //_log.debug('set', what, value);

      // if set has a single params
      if (value === undefined) {
        value = property;
        property = 'text';
      }

      if (property == 'text')
        this.element.set('html', value);
    }
  });

  return exports;
});
