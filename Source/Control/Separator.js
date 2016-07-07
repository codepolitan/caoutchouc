/**
 * UI Control Separator
 * @class UI.Control.Separator
 * @extends {UI.Control}
 * @type {Class}
 */
define([
  "UI/Control/Control"
], function(
  Control
) {

  var exports = new Class({

    Extends: Control,

    name: 'separator',

    options: {
      name: 'separator',
      type: null, // push, file
      element: {
        tag: 'span'
      },
      binding: {
        _list: ['element'],
        element: {
          'element.mousedown': '_onElementMouseDown',
          'element.click': '_onElementClick',
          'element.dblclick': '_onElementClick'
        }
      }
    },

    set: function() {},

    /**
     * [_initElement description]
     * @return {[type]} [description]
     */
    _initElement: function() {
      this.parent();
      var opts = this.options,
        type = opts.type;

      if (this.options.clss)
        this.element.addClass(this.options.clss);
    },


    /**
     * [_initClass description]
     * @return {[type]} [description]
     */
    _initClass: function() {
      var opts = this.options;
      //_log.debug(this.name);

      if (this.options.klss)
        this.element.addClass('button-' + opts.klss);

      if (this.options.type)
        this.element.addClass('type-' + this.options.type);

      this.element.addClass(opts.prefix + this.name);
    },

    /**
     * [_onElementMouseDown description]
     * @param  {event} e [description]
     * @return {[type]}   [description]
     */
    _onElementMouseDown: function(e) {
      _log.debug();
      this.fireEvent('mousedown');
      e.stop();
    },

    /**
     * [_onElementMouseDown description]
     * @param  {event} e [description]
     * @return {[type]}   [description]
     */
    _onElementClick: function(e) {
      var opts = this.options;
      e.stopPropagation();
      if (opts.emit && this.state != 'disabled')
        this.fireEvent(opts.emit);
      this.fireEvent('press', opts.emit);
      this.fireEvent('pressed', opts.emit);

      if (opts.call && this.state != 'disabled')
        opts.call();
    },

    /**
     * [_onElementMouseUp description]
     * @return {[type]} [description]
     */
    _onElementMouseUp: function() {
      var opts = this.options;
      if (this.options.type == 'check') {
        if (this.state == 'checked')
          this.setState(null);
        else this.setState('checked');
      }
    }
  });

  return exports;
});
