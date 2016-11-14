import Button from './button';

const _log = __debug('ui-control-upload').defineLevel();

export default new Class({

  Extends: Button,

  name: 'button',

  options: {
    name: 'upload',
    type: null, // push, file
    ink: false,
    element: {
      tag: 'button',
      class: 'type-action'
    }
  },

  /**
   * init element
   * @return {void}
   */
  _initElement: function() {
    _log.debug('_initElement');

    this.parent();
    this._initFile();
  },

  /**
   * init file
   * @return {void}
   */
  _initFile: function() {
    var self = this;

    var file = new Element('input', {
      type: 'file',
      name: 'upload',
      id: 'upload',
      multiple: 'multiple'
    }).inject(this.element);

    file.addEvent('change', function(info) {
      _log.debug('change', info);
    });

    /**
     * @ignore
     */
    file.onchange = function(info) {
      _log.debug('onchage', info, this.files);

      var files = this.files;

      if (files) {
        _log.debug('fireEvent uploadFile', files);
        self.fireEvent('uploadFile', [files]);
      }
    };

    /*this.addEvent('injected', function() {
      var coord = self.icon.getCoordinates();

      coord.top = '0';
      coord.left = '0';

      file.setStyles(coord);
    });*/
  }

});
