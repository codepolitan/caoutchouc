/**
 * Key management function
 * @param  {[type]} field  [description]
 * @param  {[type]} doc    [description]
 * @param  {[type]} group) {    var       self [description]
 * @return {[type]}        [description]
 */
define(function(require, exports, module) {

  var _log = __debug('view:form-utils');

  module.exports = new Class({
    /**
     * Set a specific key.
     * @param {string} key   Object key
     * @param {string} value Value to be set
     * @param {boolean} quiet Don't fireEvent if true
     */
    setKey: function(key, value, quiet) {
      //_log.debug('setKey', key, value);

      //var currentVal = this.getValueFromKey(key, this.doc);
      //_log.debug('--', currentVal, value);
      /*if (currentVal === value) {
        return;
      }*/

      this.updateDocKey(key, value);

      if (typeOf(value) === 'object') {
        this.setKeyObject(key, value);
      }
      if (typeOf(value) === 'array') {
        this.setKeyArray(key, value);
      } else if (this.field[key]) {
        this.field[key].set(value);
      }

      if (!quiet) {
        this.fireEvent('change', [key, value]);
      }
    },

    /**
     * set sub keys if exist
     * @param {string} key   Object key
     * @param {Object} obj Value to be set
     */
    setKeyObject: function(key, obj) {
      //_log.debug('setKey', key, obj);

      for (var sub in obj) {
        var name = key + '.' + sub;
        if (this.field[name]) {
          this.field[name].set(obj[sub]);
        }
      }
    },

    /**
     * set sub keys if exist
     * NOT IN USE
     * @param {string} key   Object key
     * @param {Object} obj Value to be set
     */
    setKeyArray: function(key, obj) {
      _log.debug('setKeyArray', key, obj);


    },


    /**
     * IN TEST FOR REAL TIME EDITING
     */
    setKeyPos: function(key, value, pos) {
      _log.debug(value, pos);
      var lastValue = this.doc[key] || '';
      var newValue = '';

      if (value === 'space') {
        value = ' ';
      }

      if (value === 'delete') {
        newValue = lastValue.substr(0, pos) + lastValue.substr(pos + 1);
      } else if (value === 'backspace') {
        _log.debug('***', lastValue.substr(0, pos - 1), lastValue.substr(pos - 1, pos));
        //newValue = delete lastValue[pos];
        newValue = lastValue.substr(0, pos) + lastValue.substr(pos + 1, lastValue.length - 1);
      } else {
        newValue = lastValue.substr(0, pos) + value + lastValue.substr(pos - 1);
      }

      this.doc[key] = newValue;

      var input = this.form.getElement('[name=' + key + ']');

      var start = input.selectionStart;
      var end = input.selectionEnd;

      input.set('value', newValue);

      //_log.debug(lastValue.substring(0, start), value.substring(0, start));

      if (pos < start) {
        var diff = 1;
        start += diff;
        end += diff;
      }

      input.selectionStart = start;
      input.selectionEnd = end;
    },


    /**
     * Update this.doc for the given key name (three levels)
     * @param  {string} name The name of the key in dot notation
     * @param  {Mixin} value The related key value
     * @return {Mixin} Value
     */
    updateDocKey: function(name, value) {
      var keys = name.split(/\./);
      //_log.debug('updateDocKey', keys, name, value);

      if (keys.length === 1) {
        this.doc[keys[0]] = value;
      }

      if (keys.length === 2) {
        if (!this.doc[keys[0]]) {
          this.doc[keys[0]] = {};
        }

        this.doc[keys[0]][keys[1]] = value;
      }
      if (keys.length === 3) {
        if (!this.doc[keys[0]]) {
          this.doc[keys[0]] = {};
        }
        if (!this.doc[keys[0]][keys[1]]) {
          this.doc[keys[0]][keys[1]] = {};
        }

        this.doc[keys[0]][keys[1]][keys[2]] = value;
      }

      if (keys.length === 4) {
        if (!this.doc[keys[0]]) {
          this.doc[keys[0]] = {};
        }
        if (!this.doc[keys[0]][keys[1]]) {
          this.doc[keys[0]][keys[1]] = {};
        }
        if (!this.doc[keys[0]][keys[1]][keys[2]]) {
          this.doc[keys[0]][keys[1]][keys[2]] = {};
        }

        this.doc[keys[0]][keys[1]][keys[2]][keys[3]] = value;
      }

      return value;
    },
  });
});
