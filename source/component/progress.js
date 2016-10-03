/**
 * UI Component Progress
 * @class UI.Component.Progress
 * @author Bruno Santos, Jerome Vial
 */
var Component = require('component/component');

module.exports = new Class({

  Extends: Component,

  options: {
    name: 'progress',
    klass: 'ui-progress',

    tag: 'div',
  },

  /**
   * [set description]
   * @param {[type]} ratio [description]
   */
  set: function(ratio) {
    var width = 0;

    var percentage = (ratio[0] * 100) / ratio[1];

    if (percentage > 0)
      width = this.element.getSize().x * percentage / 100;

    this.bar.setStyle('width', width.toInt());
    this.status.set('html', ratio[0] + ' / ' + ratio[1]);

    return this;
  },

  /**
   * [setStatus description]
   * @param {[type]} text [description]
   */
  setStatus: function(text) {
    this.status.set('html', text);

    return this;
  },

  /**
   * [_initElement description]
   * @return {[type]} [description]
   */
  _initElement: function() {
    this.parent();

    this.status = new Element('span', {
      'class': 'progress-status'
    }).inject(this.element);

    this.bar = new Element('div', {
      'class': 'progress-bar'
    }).inject(this.element);
  }

});
