export default new Class({

  Implements: [Events, Options],

  options: {
    container: document.body,
    type: 'border',
    clss: 'selector-resizer',
    handler: {
      size: 3
    },
    //['n', 'e', 's', 'w'] or ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']
    positions: ['n', 'e', 's', 'w'],
    styles: {
      display: 'none',
      zIndex: 1200,
      border: '1px solid #71aad3',
      backgroundColor: '#fff',
      cursor: 'resize',
      boxSizing: 'content-box'
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

    this.container = container;

    //_log.debug('resizer init:',container,options);

    this.handlers = [];
    this.container = container;

    this._initElement();
  },

  /**
   * [_initElement description]
   * @return {[type]} [description]
   */
  _initElement: function() {
    //var position = 'absolute';
    //if (el.isFixed()) position = 'fixed';

    var i = 0;
    this.options.positions.each(function(position) {
      this.buildHandler(position);
      i++;
    }, this);
  },

  /**
   * [buildHandler description]
   * @param  {[type]} position [description]
   * @return {[type]}          [description]
   */
  buildHandler: function(position) {
    var self = this;
    var pos = 'absolute';

    var handler = new Element("div")
      .setStyles(this.options.styles)
      .setStyle('position', pos)
      .store('position', position)
      .set('class', position)
      .inject(this.container, 'top')
      .addEvents({
        click: function(e) {
          new Event(e).stop();
          //_log.debug(this.get('class')+':click');
        },
        mouseenter: function(e) {
          self.fireEvent('mouseenter', this);
        },
        mouseleave: function(e) {
          self.fireEvent('moussleave', this);
        }
      });

    this.handlers.push(handler);
  },

  /**
   * [reach description]
   * @param  {[type]} el [description]
   * @return {[type]}    [description]
   */
  reach: function(el) {
    if (!el) {
      return;
    }
    this.el = el;

    var c = el.getCoordinates();
    var pos = el.getPosition(this.container);
    c.top = pos.y;
    c.bottom = pos.y + c.height;

    var offset = this.options.handler.size;

    var pos = el.getPosition(this.container);

    c.left = pos.x;
    c.right = pos.x + c.width;
    c.top = pos.y;
    c.bottom = pos.y + c.height;

    var infos = {
      nw: [c.top - offset, c.left - offset],
      n: [c.top - offset, c.right - ((c.right - c.left) / 2) - offset],
      ne: [c.top - offset, c.right - offset + 1],
      e: [c.bottom - ((c.bottom - c.top) / 2) - offset, c.right - offset + 1],
      se: [c.bottom - offset + 1, c.right - offset + 1],
      s: [c.bottom - offset + 1, c.left + ((c.right - c.left) / 2) - offset],
      sw: [c.bottom - offset + 1, c.left - offset],
      w: [c.top + ((c.bottom - c.top) / 2) - offset, c.left - offset]
    };

    this.handlers.each(function(handler) {
      var coor = infos[handler.retrieve('position')];
      this.setHandlerPosition(handler, coor);
    }, this);
  },

  /**
   * [setHandlerPosition description]
   * @param {[type]} handler [description]
   * @param {[type]} coor    [description]
   */
  setHandlerPosition: function(handler, coor) {
    handler.setStyles({
      'margin-top': coor[0],
      'margin-left': coor[1],
      'width': this.options.handler.size,
      'height': this.options.handler.size
    });
  },

  /**
   * [remove description]
   * @return {[type]} [description]
   */
  remove: function() {
    this.handlers.each(function(handler) {
      handler.destroy();
    }, this);
  },

  /**
   * [hide description]
   * @return {[type]} [description]
   */
  hide: function() {
    this.handlers.each(function(handler) {
      handler.setStyle('display', 'none');
    }, this);
  },

  /**
   * [show description]
   * @return {[type]} [description]
   */
  show: function() {
    this.handlers.each(function(handler) {
      handler.setStyle('display', 'block');
    }, this);
  }

});
