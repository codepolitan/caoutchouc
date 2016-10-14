/**
 * Implement Hour methods for Minimal.Form
 * @implement Minimal.Form
 * @author Jerome Vial
 */
var CurrencyControl = require('control/currency');

var _log = __debug('view-form-currency').defineLevel();

module.exports = new Class({

  /**
   * [_initHour description]
   * @param  {[type]} field [description]
   * @param  {[type]} doc   [description]
   * @param  {[type]} group [description]
   * @return {[type]}       [description]
   */
  _initCurrency: function(field, doc, group) {
    _log.debug('_initCurrency');

    var self = this;

    var value = this.getValueFromKey(field.name, doc);

    var read = this.isReadOnly(field);

    var input = new CurrencyControl({
      'class': 'txt',
      type: 'text',
      name: field.name,
      text: field.text,
      value: value,
      read: read
    }).inject(group);

    this.field[field.name] = input;

    _log.debug('input', input);

    input.addEvents({
      change: function() {
        var value = this.input.get('value');

        _log.debug('change', value);

        /*remove , and . chars from string TODO: will look better in one line*/
        value = value.replace(/\,/g, '');
        value = value.replace(/\./g, '');

        /*string to integer*/
        value = +value;

        _log.debug('updateDocKey', value);

        self.updateDocKey(field.name, value);
        self.fireEvent('change', [field.name, value]);
      },
    });

    input.input.addEvents({
      keyup: function() {
        _log.debug('keyup');

        input.setError(null);
      },
      blur: function() {
        var ev = 'blur:' + field.name;

        if (ev.indexOf('.') !== -1) {
          ev = ev.split('.').join('-');
        }

        _log.debug('blur will fire', ev);

        self.fireEvent(ev, this.get('value'));
      }
    });


    if (read) {
      input.input.set('readonly', 'readonly');
    }

    if (field.klss) {
      input.addClass(field.klss);
    }

    if (field.etat === 'readonly' || this.readonly) {
      input.input.set('readonly', 'readonly');
    }
  }

});
