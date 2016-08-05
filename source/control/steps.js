/**
 * UI Control Steps Class
 * @class UI.Control.Steps
 * @extends {UI.Control}
 * @type {Class}
 */
define(function(require, exports, module) {

  var Field = require('ui/control/field');

  module.exports = new Class({

    Extends: Field,

    options: {
      name: 'steps'
    },

    /**
     * [_initElement description]
     * @return {[type]} [description]
     */
    _initElement: function() {
      //_log.debug('_initElement');
      this.parent();

      this.item = {};

      var opts = this.options;

      //_log.debug(opts);
      this.input.set('type', 'text');
      this.input.addClass(opts.klss);
      this.element.addClass('ui-steps');

      this.wrapper = new Element('div', {
        'class': 'steps-wrapper'
      }).inject(this.element);

      this.steps = new Element('span', {
        'class': 'steps-text',
        html: opts.value
      }).inject(this.wrapper);

      this._initList(opts.list);

      //_log.debug(opts.value);

      if (!opts.value) {
        opts.value = 1;
      }

      if (opts.value) {
        this.input.set('value', opts.value);
      }

    },

    /**
     * [_initList description]
     * @param  {[type]} list [description]
     * @return {[type]}      [description]
     */
    _initList: function(list) {
      //_log.debug('_initList', list);

      this.list = new Element('ul', {
        'class': 'steps-list'
      }).inject(this.element);

      this.itemList = [];

      if (list && list.length > 0)
        for (var i = 0; i < list.length; i++) {
          this._initItem(list[i], i + 1);
        }
    },

    /**
     * [_initItem description]
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
    _initItem: function(item, idx) {
      //_log.debug('_initItem', item);
      var self = this,
        opts = this.options;

      var li = new Element('li', {
          'data-value': item
        }).inject(this.list)
        .addEvent('click', function() {
          //_log.debug('step emit', idx, item, name);
          self.fireEvent('step', idx);
          self.fireEvent(item);
        });

      new Element('span', {
        html: idx,
        'class': 'step-index'
      }).inject(li);

      this.options.opts = this.options.opts || {};
      var map = this.options.opts.text || {};
      var text = map[item] || item;

      new Element('span', {
        html: text,
        'class': 'step-label'
      }).inject(li);

      this.item[item] = li;

      this.itemList.push(item);

      if (opts.value === item) {
        li.addClass('selected');
        self.selected = li;
      }

      if (opts.value === item) {
        li.addClass('selected');
        self.selected = li;
      }
    },

    /**
     * override default _initError
     * @return {[type]} [description]
     */
    _initError: function() {

    },

    /**
     * [select description]
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    set: function(value) {
      //_log.debug('steps set', value, this.item);
      var item = this.item[value];

      if (!item) {
        return;
      }

      if (this.selected) {
        this.selected.removeClass('selected');
      }

      item.addClass('selected');
      this.selected = item;
    }

  });

});
