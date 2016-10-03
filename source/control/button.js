/**
 * @class UI.Control.Button
 * @extends {UI.Control}
 * @type {Class}
 */
var Control = require('control/control');
var controlIcon = require('icon/control');

var _log = __debug('ui:control-button');

module.exports = new Class({

  Extends: Control,

  name: 'button',

  options: {
    name: 'button',
    type: null, // push, file
    ink: true,
    element: {
      tag: 'span'
    },
    binding: {
      _list: ['element'],
      element: {
        'sensor.click': '_onClick',
        'sensor.dblclick': '_onDblClick',
        'sensor.mousedown': '_onMouseDown',
        'sensor.mouseup': '_onMouseUp',
        'sensor.mouseleave': '_onMouseLeave'
      }
    }
  },

  /**
   * [set description]
   */
  set: function() {},

  /**
   * [_initElement description]
   * @return {void}
   */
  _initElement: function() {
    this.parent();

    var opts = this.options;
    var type = opts.type;

    opts.text = opts.text || opts.n;

    if (type === null) {
      type = 'icon-text';
    }

    /*if (opts.text && type != 'icon') {
      this.element.set('html', opts.text);
    }*/
    //var text = opts.type.match(/text/g);

    if (opts.name) {
      this.element.set('data-name', opts.name);
    }

    _log.debug('title', this.element, opts.text);

    this.element.set('title', opts.text);

    if (opts.icon) {
      this._initIcon(type, opts.icon || opts.name);
    }

    if (opts.text) {
      this._initText(type);
    }

    if (opts.ink) {
      this._initSensor();
    } else {
      this.sensor = this.element;
    }
  },


  /**
   * [_initIcon description]
   * @param  {string} type
   * @return {string}
   */
  _initIcon: function(type, name) {
    _log.debug('_initIcon', type, name);

    var tag = 'span';
    var code = name;
    var klss = null;

    var prop = {
      'class': 'ui-icon'
    };

    this.icon = new Element(tag, prop).inject(this.element);

    if (controlIcon[name]) {
      _log.debug('icon font name', name);
      klss = 'icon-font';
      code = controlIcon[name];
    }

    if (klss) {
      this.icon.addClass(klss);
    }

    if (code) {
      this.icon.addClass(code);
    }
  },

  /**
   * [_initText description]
   * @param  {string} type
   * @return {void}
   */
  _initText: function(type) {
    var opts = this.options;

    var tag = 'span';

    var pos = 'bottom';
    if (type === 'text-icon') {
      pos = 'top';
    }

    this.text = new Element(tag, {
      'class': 'ui-text',
      'html': opts.text
    }).inject(this.element, pos);
  },

  /**
   * [_initClass description]
   * @return {void}
   */
  _initClass: function() {
    var opts = this.options;
    //_log.debug(this.name);

    if (this.options.isPrimary) {
      this.element.addClass('is-primary');
    }

    if (this.options.klss) {
      this.element.addClass(opts.klss);
    }

    if (this.options.type) {
      this.element.addClass('type-' + this.options.type);
    }

    this.element.addClass(opts.prefix + this.name);

    if (this.options.clss) {
      this.element.addClass(this.options.clss);
    }
  },

  /**
   * [_initText description]
   * @return {void}
   */
  _initSensor: function() {
    _log.debug('_initSensor');

    var tag = 'div';

    this.sensor = new Element(tag, {
      'class': 'ui-sensor',
    }).inject(this.element);
  },

  /**
   * [_initEffect description]
   * @param  {string} ink
   * @param  {string} x
   * @param  {string} y
   * @param  {Object} coord
   * @return {void}
   */
  _touchInk: function(ink, x, y, coord) {
    var size = coord.height;
    var top = 0;
    var duration = 1000;

    this.ink = ink;

    if (coord.width > size) {
      size = coord.width;
      top = (coord.height - coord.width) / 2;
    }

    var fx = new Fx.Morph(ink, {
      duration: duration,
      link: 'chain',
      transition: Fx.Transitions.Quart.easeOut
    });

    fx.start({
      height: size,
      width: size,
      left: 0,
      top: top,
      opacity: 0
    });

    (function() {
      ink.destroy();
    }).delay(duration);
  },

  /**
   * [_onElementMouseDown description]
   * @param  {event} e
   * @return {void}
   */
  _onClick: function(e) {
    _log.debug('_onElementClick', e);

    var opts = this.options;

    e.stopPropagation();

    if (opts.emit && this.state !== 'disabled') {
      this.fireEvent(opts.emit);
    }
    this.fireEvent('press', opts.emit);
    this.fireEvent('pressed', opts.emit);

    if (opts.call && this.state !== 'disabled') {
      opts.call();
    }
  },

  /**
   * [_onElementMouseDown description]
   * @param  {event} e
   * @return {void}
   */
  _onDblClick: function(e) {
    var opts = this.options;

    e.stop();

    if (opts.emit && this.state !== 'disabled') {
      this.fireEvent('dblpress', opts.emit);
    }

    this.fireEvent('dblpressed', opts.emit);
  },

  /**
   * [_onElementMouseDown description]
   * @param  {event} e
   * @return {Object}
   */
  _onMouseDown: function(e) {
    //_log.debug('_onElementMouseDown', e);

    e.stop();

    if (this.state === 'disabled') {
      return;
    }

    var x = e.event.offsetX;
    var y = e.event.offsetY;

    var coord = this.element.getCoordinates(this.element);

    var ink = this.ink = new Element('span', {
      class: 'ui-ink',
      styles: {
        left: x,
        top: y
      }
    }).inject(this.element, 'top');

    this._touchInk(ink, x, y, coord);

    this.fireEvent('mousedown');
  },

  /**
   * [_onElementMouseDown description]
   * @param  {event} e
   * @return {void}
   */
  _onMouseLeave: function(e) {
    _log.debug('_onMouseLeave', e);


  },

  /**
   * [_onElementMouseDown description]
   * @param  {event} e
   * @return {void}
   */
  _onMouseEnter: function(e) {
    _log.debug('_onElementMouseDown', e);


  },

  /**
   * [_onElementMouseUp description]
   * @return {void}
   */
  _onMouseUp: function(e) {
    _log.debug('_onElementMouseUp', e);

    if (this.options.type === 'check') {
      if (this.state === 'checked') {
        this.setState(null);
      } else {
        this.setState('checked');
      }
    }

    //this.react.destroy();
  }

});
