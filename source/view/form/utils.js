/**
 * Fill the form using the given schema(template)]
 * @param  {[type]} field  [description]
 * @param  {[type]} doc    [description]
 * @param  {[type]} group) {    var       self [description]
 * @return {[type]}        [description]
 */
var _log = __debug('view:form-utils');

module.exports = new Class({

  /**
   * Get Value for the given key
   * @param  {string} name defined in dot notation
   * @param  {Object} info
   * @return {Mixin} The Value of the given key
   */
  getValueFromKey: function(name, info) {
    var keys = name.split(/\./);
    var value = null;

    if (!name || !info) {
      return;
    }

    //_log.debug('getValueFromKey', name, info);

    if (keys.length === 1) {
      value = info[keys[0]];
    }
    if (keys.length === 2 && info[keys[0]]) {
      if (info[keys[0]]) {
        value = info[keys[0]][keys[1]];
      }
    }
    if (keys.length === 3) {
      if (info[keys[0]]) {
        if (info[keys[0]][keys[1]]) {
          value = info[keys[0]][keys[1]][keys[2]];
        }
      }
    }

    return value;
  }

});
