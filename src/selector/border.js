export default new Class({

  Implements: [Events, Options],

  options: {
    container: document.body,
    type: 'solid',
    clss: 'selector-border',
    zIndex: 2,
    size: 1,
    color: '#000',
    opacity: '1',
    location: 'outside', // inside or outside
    effect: {
      duration: 100,
      transition: 'expo:out',
      link: 'cancel'
    }
  },

  /**
   * [initialize description]
   * @param  {[type]} container [description]
   * @param  {[type]} options   [description]
   * @return {[type]}           [description]
   */
  initialize: function(container, options) {
    this.setOptions(options);

    //_log.debug('UI.Selector.Border:',container, options);

    this.container = container;
    this.lines = [];

    this._initElement();
  },

  /**
   * [_initElement description]
   * @return {[type]} [description]
   */
  _initElement: function() {
    var lines = [
      [],
      [],
      [],
      []
    ];

    lines.each(function(line) {
      this.buildBorder();
    }, this);
  },

  /**
   * [buildBorder description]
   * @return {[type]} [description]
   */
  buildBorder: function() {
    var self = this;

    var line = new Element('div', {
      'class': this.options.clss
    }).addClass('type-' + self.options.type).setStyles({
      'zIndex': this.options.zIndex,
      'backgroundColor': this.options.color,
      'opacity': this.options.opacity
    }).addEvent('click', function() {
      self.fireEvent('click');
    }).inject(this.container, 'top');

    line.set('morph', this.options.effect);


    this.lines.push(line);
  },

  /**
   * [reach description]
   * @param  {[type]} el [description]
   * @return {[type]}    [description]
   */
  reach: function(el) {
    if (!el) {
      if (this.el) {
        el = this.el;
      } else {
        return;
      }
    } else {
      this.el = el;
    }

    var infos = [];
    var o = [];
    //_log.debug('boder reach', el);
    var bs = this.options.size;

    try {
      el.getCoordinates();
    } catch (err) {
      return;
    }

    var c = el.getCoordinates();

    if (this.options.positionning == 'relative') {
      var pos = el.getPosition(this.container);
      c.left = pos.x;
      c.right = pos.x + c.width;
      c.top = pos.y;
      c.bottom = pos.y + c.height;
    }

    //_log.debug('coord',c,pos);

    if (this.options.location == 'inside') {
      infos = [
        [c.top, c.left, c.right - c.left - bs, bs],
        [c.top, c.right - bs, bs, c.bottom - c.top],
        [c.bottom - bs, c.left + bs, c.right - c.left - (2 * bs), bs],
        [c.top + bs, c.left, bs, c.bottom - c.top - bs]
      ];
    } else {
      infos = [
        [c.top - bs, c.left - bs, c.right - c.left + (2 * bs), bs],
        [c.top, c.right, bs, c.bottom - c.top],
        [c.bottom, c.left - bs, c.right - c.left + (2 * bs), bs],
        [c.top, c.left - bs, bs, c.bottom - c.top]
      ];
    }

    this.lines.each(function(line, i) {
      this._setLinePosition(line, infos[i]);
    }, this);

    this.fireEvent('selected');

    return this;
  },

  /**
   * [addClass description]
   * @param {[type]} c [description]
   */
  addClass: function(c) {
    this.lines.each(function(line, i) {
      line.addClass(c);
    }, this);
  },

  /**
   * [removeClass description]
   * @param  {[type]} c [description]
   * @return {[type]}   [description]
   */
  removeClass: function(c) {
    this.lines.each(function(line, i) {
      line.addClass(c);
    }, this);
  },

  /**
   * [_setLinePosition description]
   * @param {[type]} line [description]
   * @param {[type]} info [description]
   */
  _setLinePosition: function(line, info) {

    if (this.options.usefx) {
      line.morph({
        'margin-top': info[0],
        'margin-left': info[1],
        'width': info[2],
        'height': info[3]
      });
    } else {
      line.setStyles({
        'margin-top': info[0],
        'margin-left': info[1],
        'width': info[2],
        'height': info[3]
      });
    }
  },

  /**
   * [set description]
   * @param {[type]} name  [description]
   * @param {[type]} value [description]
   */
  set: function(name, value) {
    if (selector) {
      self[selector][name](value);
    } else {
      this.selectors.each(function(selector) {
        self[selector][name](value);
      });
    }

    return this;
  },

  /**
   * [setColor description]
   * @param {[type]} color [description]
   */
  setColor: function(color) {
    this._setStyle('backgroundColor', color);
  },

  /**
   * [setOpacity description]
   * @param {[type]} opacity [description]
   */
  setOpacity: function(opacity) {
    this._setStyle('opacity', opacity);
  },

  /**
   * [_setStyle description]
   * @param {[type]} name  [description]
   * @param {[type]} value [description]
   */
  _setStyle: function(name, value) {
    this.lines.each(function(line) {
      line.setStyle(name, value);
    });

    return this;
  },

  /**
   * [setStyles description]
   * @param {[type]} styles [description]
   */
  setStyles: function(styles) {
    this.lines.each(function(line) {
      line.setStyles(styles);
    });

    return this;
  },

  /**
   * [hide description]
   * @return {[type]} [description]
   */
  hide: function() {
    this._setStyle('display', 'none');

    return this;
  },

  /**
   * [show description]
   * @return {[type]} [description]
   */
  show: function() {
    this._setStyle('display', 'block');

    return this;
  },

  /**
   * [highlight description]
   * @param  {[type]} color [description]
   * @return {[type]}       [description]
   */
  highlight: function(color) {
    this.lines.each(function(line) {
      line.highlight(color);
    });

    return this;
  },

  /**
   * [remove description]
   * @return {[type]} [description]
   */
  remove: function() {
    this.lines.each(function(line) {
      line.destroy();
    });

    return this;
  }

});
