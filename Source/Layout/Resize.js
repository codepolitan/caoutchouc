/**
 * Resize Layout
 * @class UI.Layout.Resize
 * @author Jerome D. Vial
 */
define(function(require, exports, module) {

  var _log = __debug('ui-layout-resize').defineLevel();

  var Resize = new Class({
    options: {
      resizer: {
        modifier: {
          row: {
            size: 'width',
            from: 'left',
            mode: {
              y: false
            }
          },
          column: {
            size: 'height',
            from: 'top',
            mode: {
              x: false
            }
          }
        }
      }
    },

    /**
     * init resize border
     * @param  {Object} component
     * @return {void}
     */
    _initResizer: function(component) {
      _log.debug('_initResizer', component);

      var self = this;

      var name = component.options.name;
      var container = component.container;
      var last = component.options.last;

      this._initMaximize(component);

      if (!container) {
        return;
      }

      var direction = container.getStyle('flex-direction');

      if (!direction) {
        return;
      }

      var modifier = this.options.resizer.modifier[direction];

      if (!modifier) {
        return;
      }

      var resizer = this.resizer[name] = new Element('div', {
        'class': 'ui-resizer',
        'data-name': component.options.name
      }).addEvents({
        click: function(e) {
          e.stop();
        },
        mousedown: function(e) {
          e.stop();
          self.mask.setStyle('display', 'block');
        },
        mouseup: function(e) {
          //e.stop();
          self.mask.setStyle('display', 'none');
        }
      }).inject(container);

      if (modifier.size) {
        resizer.addClass('resizer-' + modifier.size);
      }

      if (last) {
        _log.debug('------last');
        //resizer.addClass('resizer-last');
      }

      this._initResizerDrag(resizer, modifier, component);
      this._initResizerEvent(component, resizer, modifier);

      this.fireEvent('drag');
    },

    /**
     * [_initDrag description]
     * @param  {[type]} resizer  [description]
     * @param  {[type]} modifier [description]
     * @return {[type]}          [description]
     */
    _initResizerDrag: function(resizer, modifier, component) {
      var self = this;
      //_log.debug('initResizerDrag', resizer, modifier);

      var element = component.element;
      var container = component.container;
      var last = component.options.last;

      var drag = new Drag.Move(resizer, {
        modifiers: modifier.mode,
        onStart: function(el) {
          //_log.debug('onStart', el);
          //self.fireEvent('resizeStart', el);
          self.mask.setStyle('display', 'block');
        },
        onDrag: function(el, ev) {
          //_log.debug('onDrag', el);
          self.mask.setStyle('display', 'block');
          var coord = element.getCoordinates(container);
          var coordc = container.getCoordinates();
          var c = resizer.getCoordinates(container);

          //element.setStyle('flex','none');
          //element.setStyle(modifier.size, c[modifier.from] - coord[modifier.from]);
          if (last) {
            //_log.debug(modifier.size, coordc[modifier.size], c[modifier.from]);
            element.setStyle(modifier.size, coordc[modifier.size] - c[modifier.from]);
          } else {
            element.setStyle(modifier.size, c[modifier.from] - coord[modifier.from]);
          }

          self.fireEvent('drag');
        },
        onComplete: function(el) {
          self.mask.setStyle('display', 'none');
          //_log.debug('onComplete', component.main, modifier.size, size);
          //_log.debug('onComplete', modifier.size, element.getCoordinates(container)[modifier.size]);
          var coord = element.getCoordinates(container);
          var size = element.getCoordinates(container)[modifier.size];
          self.fireEvent('resizer', [component.main, modifier.size, size]);
          component.fireEvent('resizeComplete', [modifier.size, size]);

          //_log.debug('size', modifier, size);

          component[modifier.size] = size;

        }
      });

      return drag;
    },

    /**
     * [_initResizerEvent description]
     * @param  {[type]} component [description]
     * @param  {[type]} resizer   [description]
     * @param  {[type]} modifier  [description]
     * @return {[type]}           [description]
     */
    // will definitly use a controller for that
    _initResizerEvent: function(component, resizer, modifier) {
      //_log.debug('_initResizerEvent', component.options.name, component.options.last);
      var self = this;

      this.addEvents({
        drag: function(e) {
          //_log.debug('drag', e);
          self._updateSize(component, resizer, modifier);
        },
        maximize: function() {
          //_log.debug(direction);
          self._updateSize(component, resizer, modifier);
        },
        normalize: function() {
          //_log.debug(direction);
          self._updateSize(component, resizer, modifier);
        },
        resize: function() {
          //_log.debug('resize', component.element, resizer);
          self._updateSize(component, resizer, modifier);
        }
      });
    },

    /**
     * [_updateSize description]
     * @param  {[type]} component [description]
     * @param  {[type]} resizer   [description]
     * @param  {[type]} modifier  [description]
     * @return {[type]}           [description]
     */
    _updateSize: function(component, resizer, modifier) {
      //_log.debug('_updazeSize');
      var container = component.container;
      var element = component.element;

      var coord = element.getCoordinates(container);
      //_log.debug('coord',  coord[modifier.from]);
      //
      // the last container doesnt need resizedr
      if (component.options.last) {
        resizer.setStyle(modifier.from, coord[modifier.from] - 3);
      } else {
        resizer.setStyle(modifier.from, coord[modifier.from] + coord[modifier.size] - 3);
      }

      this.fireEvent('size');
    },

    /**
     * Init maximisation. dblclick trigger the toggle
     * @param  {[type]} component [description]
     * @return {[type]}           [description]
     */
    _initMaximize: function(component) {
      //_log.debug('_initMaximize', component);
      var self = this;
      var element = component.element;
      var container = component.container;

      if (!container) {
        return;
      }

      component.addEvent('max', function() {
        var name = component.options.name;

        _log.debug('max', component);
        if (element.hasClass('container-max')) {
          element.removeClass('container-max');
          container.getChildren('.ui-container').each(function(c) {
            c.setStyle('display', c.retrieve('display'));
          });

          element.setStyle('width', element.retrieve('width'));
          element.setStyle('height', element.retrieve('height'));

          self.fireEvent('normalize', component);
        } else {
          element.addClass('container-max');
          element.store('width', element.getStyle('width'));
          element.store('height', element.getStyle('height'));
          element.setStyle('width', 'initial');
          element.setStyle('height', 'initial');
          container.getChildren('.ui-container').each(function(c) {
            if (!c.hasClass('container-' + name)) {
              c.store('display', c.getStyle('display'));
              c.hide();
            }
          });

          self.fireEvent('resize', component);
        }
      });
    },


    /**
     * [_initResize description]
     * @return {[type]} [description]
     */
    _initResizers: function(components) {
      //_log.debug('_initResizers');
      var len = components.length;

      // add resize Border on the right or on the bottom
      // execpt for the last one
      for (var i = 0; i < len; i++) {
        var component = components[i];

        if (component.options.noResizer) {
          continue;
        }

        this._initResizer(component);
      }
    }

  });

  module.exports = Resize;

});
