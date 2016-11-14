export default new Class({

  Implements: [Events, Options],

  options: {
    container: document.body,
    clss: 'selector-overlay',
    offset: '0',
    styles: {
      position: 'absolute',
      zIndex: '1000'
        //background: 'rgba(0,0,0,.2)'
    }
  },

  /**
   * [initialize description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  initialize: function(options) {
    this.setOptions(options);
    this._initElement();
  },

  /**
   * [_initElement description]
   * @return {[type]} [description]
   */
  _initElement: function() {
    var self = this;
    var position = 'absolute';
    //if (element.isFixed()) position = 'fixed';
    var timer;
    this.element = new Element('div', {
        'class': this.options.clss
      }).setStyles(this.options.styles)
      .setStyle('position', position)
      .addEvents({
        'mouseover': function(e) {

        },
        'click': function(e) {
          e.stop();
          clearTimeout(timer);
          timer = (function() {
            self.fireEvent('click', self.el);
            self.hide();
          }).delay(200, this);
        },
        dblclick: function() {
          clearTimeout(timer);
          self.fireEvent('dblclick');
        }
      }).inject(this.options.container, 'top');
  },

  /**
   * [reach description]
   * @param  {[type]} el [description]
   * @return {[type]}    [description]
   */
  reach: function(el) {
    this.el = el;
    var offset = this.options.offset;
    var c = el.getCoordinates();

    this.element.setStyles({
      'margin-top': c.top - offset,
      'margin-left': c.left - offset,
      'width': c.right - c.left + (2 * offset),
      'height': c.bottom - c.top + (2 * offset)
    });
  },

  /**
   * [remove description]
   * @return {[type]} [description]
   */
  remove: function() {
    this.element.destroy();
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
  },

  /**
   * [highlight description]
   * @param  {[type]} color [description]
   * @return {[type]}       [description]
   */
  highlight: function(color) {
    this.element.highlight(color);
  }

});
