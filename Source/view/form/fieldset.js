/**
 * [_initFieldset description]
 * @param  {[type]} fieldset [description]
 * @param  {[type]} form)    {		var       self [description]
 * @return {[type]}          [description]
 */
define([
  'UI/Control/Button'
], function(
  ButtonControl
) {

  var _log = __debug('view:form-fieldset');

  var exports = new Class({

    /**
     * Initialize form fieldset
     * @return {void}
     */
    _initFieldset: function(fieldset, form) {
      var self = this;
      //_log.debug('_initFieldset', fieldset, form);
      var legend = null;

      var element = new Element('div', {
        'class': 'form-fieldset',

      }).inject(form);

      if (fieldset.name)
        element.addClass('fieldset-' + fieldset.name);

      if (fieldset.klss)
        element.addClass(fieldset.klss);

      if (fieldset.state == 'closed')
        element.addClass('closed');

      if (fieldset.text) {
        legend = new Element('span', {
          html: ' ' + fieldset.text,
          'class': 'legend',
          'data-name': fieldset.text
        }).inject(element);

        var caret = new Element('span', {
          'class': 'icon-font mdi_navigation_chevron_right'
        }).inject(legend, 'top');
      }

      if (fieldset.buttons) {
        // _log.debug(el.button);
        this._initButtons(fieldset.buttons, this.doc, legend);
      }

      if (legend)
        element.store('legend', legend);

      if (typeOf(fieldset.menu) == 'object') {
        this._initFieldsetMenu(fieldset.menu, legend);
      } else if (typeOf(fieldset.menu) == 'array') {
        for (var i = 0; i < fieldset.menu.length; i++) {
          var menu = fieldset.menu[i];
          this._initFieldsetMenu(menu, legend);
        }
      }

      if (fieldset.field) {
        this._initObjectField(fieldset.field, element);
      } else if (fieldset.fields) {
        this._initFields(fieldset.fields, element);
      }
    },

    /**
     * Initialize form fieldset menu if exists
     * @return {void}
     */
    _initFieldsetMenu: function(menu, legend) {
      var self = this;

      var addBtn = new ButtonControl(menu)
        .inject(legend);

      addBtn.addEvent(menu.emit, function() {
        //_log.debug(fieldset.menu);
        self.fireEvent(menu.emit, self);
      });


    }

  });

  return exports;

});
