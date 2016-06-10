/**
 * Filter View Class
 * @class View.Filter
 * @author Jerome Vial, Bruno Santos
 */
define(function(require, exports, module) {

  var Layout = require('UI/Layout/Layout');

  var _log = __debug('view:core-layout');

  module.exports = new Class({

    /**
     * init layout
     * @return {void}
     */
    _initLayout: function(options) {
      _log.debug('_initLayout');

      var opts = options || this.options;
      var self = this;

      this.device = opts.device;

      _log.debug('_initLayout', opts.layout, opts.container);

      if (!opts.layout) {
        return;
      }

      var settings = opts.settings.layout;

      var layout = this.layout = new Layout({
        theme: opts.theme,
        container: opts.container,
        node: opts.layout,
        settings: settings
      }).addEvents({
        resizer: function(name, prop, value) {
          self.setSettings('layout.' + name + '.' + prop, value);
        },
        display: function(name, state) {
          self.setSettings('layout.' + name + '.display', state);
        }
      });

      this.container = this.layout.container;
      this.container.addClass('app-' + this.options.name);
    }

  });

});
