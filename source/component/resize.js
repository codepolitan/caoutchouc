/**
 * Resize Component Class
 * @class UI.Component.Resize
 * @author Bruno Santos, Jerome Vial
 */
define(function(require, exports, module) {

  module.exports = new Class({

    options: {
      // Resize options
      resizer: {
        'class': 'ui-resizer'
      },
      resizable: false,
      resizeLimitX: [100, screen.width],
      resizeLimitY: [100, screen.height]
    },

    /**
     * [_initResizer description]
     * @return {[type]}
     */
    _initResizer: function() {
      //_log.debug('_initResizer', this.options.resizable);
      this.resizeHandlers = [];

      var wrapper = new Element('div', {
        'class': 'layer-resizer'
      }).inject(this.element, 'bottom');

      this.resizer = new Element('div', this.options.resizer)
        .addEvents({
          click: function(e) {
            e.stop();
          },
          mousedown: function(e) {
            e.stop();
          }
        }).inject(wrapper, 'bottom');

      this.resizeHandlers.push(this.resizer);

      this.enableResize(0);

      if (this.options.resizeBorders) {
        this.options.resizeBorders.each(function(border, i) {
          this.resizeHandlers.push(new Element('div', {
              style: border + ": 0",
              'class': 'ui-resizer-' + border
            })
            .addEvents({
              click: function(e) {
                e.stop();
              },
              mousedown: function(e) {
                e.stop();
              }
            }).inject(wrapper, 'top'));

          this.enableResize(i + 1);
        }, this);
      }
    },

    /**
     * [enableResize description]
     * @param  {[type]}
     * @return {[type]}
     */
    enableResize: function(i) {
      var self = this;
      var options = {
        handle: this.resizeHandlers[i],
        limit: {
          x: self.options.resizeLimitX,
          y: self.options.resizeLimitY
        },
        modifiers: {
          'x': 'width',
          'y': 'height'
        },
        onStart: function(el) {
          self.fireEvent('resizeStart', el);
        },
        onDrag: function(el, ev) {
          self.fireEvent('resizeDrag', [el, ev]);
          self.fireEvent('resize', el);
        },
        onComplete: function(el) {
          self.fireEvent('resizeComplete', el);
        }
      };

      if (i === 1 || i === 3) options.modifiers.x = false;
      if (i === 2 || i === 4) options.modifiers.y = false;

      if (i === 1 || i === 4) {
        this.dragHandlers.push(this.resizeHandlers[i]);
        options.invert = true;
      }

      this.element.makeResizable(options);

      return this;
    }

  });

});
