export default new Class({

  Implements: [Events, Options],

  options: {
    container: document.body,
    type: 'status',
    zIndex: 3,
    clss: 'selector-status',
    position: 'top left',
    location: 'outside',
    offset: [1, 1],
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

    var offset = this.options.offset;
    //_log.debug(typeOf(offset));

    if (typeOf(offset) == 'number') {
      this.offset = [offset, offset];
    } else {
      this.offset = offset;
    }

    this._initElement(container);
  },

  /**
   * [_initElement description]
   * @param  {[type]} container [description]
   * @return {[type]}           [description]
   */
  _initElement: function(container) {
    //_log.debug('_initElement menu', this.options);

    this.element = new Element('span', {
      'class': this.options.clss,
      'zIndex': this.options.zIndex,
      html: 'status'
    }).inject(container);

    this.fx = new Fx.Morph(this.element, this.options.effect);
  },

  /**
   * [setStatus description]
   * @param {[type]} status [description]
   */
  setStatus: function(status) {
    //_log.debug('setStatus', status );
    this.element.set('html', status);
  },

  /**
   * [getStatus description]
   * @param  {[type]} el [description]
   * @return {[type]}    [description]
   */
  getStatus: function(el) {
    var opts = this.options,
      status = '';

    if (opts.dataset) {
      var dataset = el.dataset[opts.dataset];
      var ds = dataset.split('.');
      if (ds.length > 1) {
        status += status + ds[1];
      } else {
        status += status + ds;
      }
    }

    if (opts.attr) {
      status += el.get(opts.attr);
    }

    return status;
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

    var opts = this.options;

    //this.setStatus(this.getStatus(el));
    this.show();
    var size = this.element.getCoordinates();
    var coord = el.getCoordinates();

    var top = 'auto',
      left = 'auto',
      bottom = 'auto',
      right = 'auto';

    if (opts.position.indexOf('left') > -1) {
      left = coord.left + this.offset[0];
    }

    if (opts.position.indexOf('right') > -1) {
      //_log.debug('sdfasdfasdfasdfasdfa');
      left = coord.left + coord.width - size.width + this.offset[0];
    }

    if (opts.position.indexOf('top') > -1) {
      top = coord.top;
    }

    if (opts.position.indexOf('bottom') > -1) {
      top = coord.top + coord.height;
    }

    if (opts.location == 'outside') {
      top = top - size.height - this.offset[1];
    }

    if (opts.location == 'inside') {
      top = top + this.offset[1];
    }

    if (this.options.usefx) {
      this.fx.start({
        top: top,
        bottom: bottom,
        left: left,
        right: right
      });
    } else {
      this.element.setStyles({
        position: 'absolute',
        top: top,
        bottom: bottom,
        left: left,
        right: right
      });
    }
  },

  /**
   * [getParent description]
   * @return {[type]} [description]
   */
  getParent: function() {
    return this.parent;
  },

  /**
   * [hide description]
   * @return {[type]} [description]
   */
  hide: function() {
    this.element.hide();
  },

  /**
   * [show description]
   * @return {[type]} [description]
   */
  show: function() {
    this.element.show();
  }

});
