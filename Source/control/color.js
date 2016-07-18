/**
 * UI Control Color Class
 * @class  UI.Control.Color
 * @extends {UI.Control}
 */


/**
 * @class UI.Control.Button
 * @extends {UI.Control}
 * @type {Class}
 */
define([
  "UI/Control/Choice"
], function(
  Choice
) {

  var exports = new Class({

    Extends: Choice,

    options: {
      name: 'choice'
    },

    /**
     * [_initElement description]
     * @return {[type]} [description]
     */
    _initElement: function() {
      this.parent();


      this.element.addClass('choice-color');
    },

    /**
     * [_initItem description]
     * @param  {[type]} info [description]
     * @return {[type]}      [description]
     */
    _initItem: function(info) {
      var self = this,
        opts = this.options;

      var item = new Element('li', {
        'class': info
      }).inject(this.list).addEvent('click', function() {
        //_log.debug('jjj');
        if (self.selected)
          self.selected.removeClass('selected');

        if (self.selected && self.selected == this) {
          self.selected.removeClass('selected');
          self.selected = null;
          self.select(null);
        } else {
          this.addClass('selected');
          self.selected = this;
          self.select(info);
        }
      });

      var color = new Element('span', {
        html: '&nbsp;'
      }).inject(item);

      this.itemList.push(item);

      if (opts.value == info) {
        item.addClass('selected');
        self.selected = item;
      }
    },

    /**
     * [set description]
     * @param {[type]} color [description]
     */
    set: function(color) {
      //_log.debug(color);
      var list = this.itemList;

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        if (item.hasClass(color))
          item.addClass('selected');
        else item.removeClass('selected');
      }
    }
  });

  return exports;
});
