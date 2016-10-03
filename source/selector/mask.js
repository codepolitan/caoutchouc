/**
 * UI Selector Maks Class
 * @class UI.Selector.Mask
 * @extends {UI.Selector}
 * @type {Class}
 */
module.exports = new Class({

  Implements: [Events, Options],

  options: {
    container: document.body,
    clss: 'selector-mask',
    type: 'solid',
    zIndex: 1,
    offset: 0,
    color: 'rgba(255,255,255,.8)',
    opacity: '1',
    location: 'outside' // inside or outside
  },

  initialize: function(container, options) {
    this.setOptions(options);

    this.container = container;
    this.masks = [];

    this._initElement();
  },

  _initElement: function() {
    var masks = [
      [],
      [],
      [],
      []
    ];

    masks.each(function(mask) {
      this.buildMask();
    }, this);
  },

  buildMask: function() {
    var self = this;

    var mask = new Element("div", {
      'class': this.options.clss
    }).addClass('type-' + self.options.type).setStyles({
      'zIndex': this.options.zIndex,
      'backgroundColor': this.options.color,
      'opacity': this.options.opacity
    }).addEvent('click', function() {
      self.fireEvent('click');
    }).inject(this.container, 'top');

    mask.set('morph', {
      duration: 250,
      transition: 'expo:out',
      link: 'cancel'
    });

    mask.set('tween', {
      duration: 250,
      transition: 'expo:out',
      link: 'cancel'
    });

    this.masks.push(mask);
  },

  reach: function(el) {
    if (!el) return;
    this.el = el;
    var infos = [];
    var o = [];

    //_log.debug('maskreac',this.options.scope,el);

    var content = this.options.scope.getScrollSize();

    var offset = this.options.offset;
    var c = el.getCoordinates();

    if (this.options.positionning == 'relative') {
      var pos = el.getPosition(this.container);
      c.left = pos.x;
      c.right = pos.x + c.width;
      c.top = pos.y;
      c.bottom = pos.y + c.height;
    }

    infos = [
      [0, 0, c.left - offset, content.y],
      [0, c.left - offset, c.width + (offset * 2), c.top - offset],
      [0, c.right + offset, content.x - c.right, content.y],
      [c.top + c.height + offset, c.left - offset, c.width + (offset * 2), content.y - c.bottom]
    ];

    this.masks.each(function(mask, i) {
      this._setMaskPosition(mask, infos[i]);
    }, this);

    this.fireEvent('selected');

    return this;
  },

  addClass: function(c) {
    this.masks.each(function(mask, i) {
      mask.addClass(c);
    }, this);
  },

  removeClass: function(c) {
    this.masks.each(function(mask, i) {
      mask.addClass(c);
    }, this);
  },

  _setMaskPosition: function(mask, info) {

    /*if (this.options.usefx)
      mask.morph({
        'top': info[0],
        'left': info[1],
        'width': info[2],
        'height': info[3]
      });
    else*/
    mask.setStyles({
      'top': info[0],
      'left': info[1],
      'width': info[2],
      'height': info[3]
    });

  },

  set: function(name, value) {
    if (selector)
      self[selector][name](value);
    else
      this.selectors.each(function(selector) {
        self[selector][name](value);
      });

    return this;
  },


  setColor: function(color) {
    this._setStyle('backgroundColor', color);
  },

  _setStyle: function(name, value) {
    var self = this;
    this.masks.each(function(mask) {
      if (self.options.usefx)
        mask.tween(name, value);
      else
        mask.setStyle(name, value);
    });

    return this;
  },

  setStyles: function(styles) {
    var self = this;

    this.masks.each(function(mask) {
      if (self.options.usefx)
        mask.morph(styles);
      else
        mask.setStyles(styles);
    });

    return this;
  },

  hide: function() {
    var self = this;

    this.masks.each(function(mask) {
      mask.setStyle('display', 'none');
    });

    return this;

  },

  show: function() {
    var self = this;

    this.masks.each(function(mask) {
      mask.setStyle('display', 'block');
    });

    return this;

  },

  highlight: function(color) {
    this.masks.each(function(mask) {
      mask.highlight(color);
    });

    return this;
  },

  remove: function() {
    this.masks.each(function(mask) {
      mask.destroy();
    });

    return this;
  }

});
