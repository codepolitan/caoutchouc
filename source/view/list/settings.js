/**
 * Settings List.V2 View Class
 * @class View.List.V2.Settings
 * @author Bruno Santos, Jerome Vial
 */
var _log = __debug('view-core-list-settings').defineLevel();

var Settings = new Class({

  /**
   * when the view request settings
   * @return {void}
   */
  onSettings: function() {
    this.set('settings', this.options.save);
  },

  /**
   * define settings
   * @return {void}
   */
  _defineSettings: function(settings) {
    _log.debug('_defineSettings', settings);

    var self = this;

    settings = settings || {};

    if (settings.ranges) {
      for (var i = 0; i < settings.ranges.length; i++) {
        var range = settings.ranges[i];
        this.getRange(range);
      }
    }

    if (settings.scrollTop) {
      this.element.scrollTop = settings.scrollTop;
    }

    if (settings.selectedId) {
      /*timer used because the ranges are not all
      loaded when we pass here should listen a
      event when all the ranges are ready*/
      setTimeout(function() {
        self.select(settings.selectedId, false);
      }, 100);
    }

    this.settingsReady = true;
  },

  /**
   * save settings
   * @return {void}
   */
  _saveSettings: function() {
    _log.debug('_saveSettings');

    var save = {
      scrollTop: this.content.parentNode.scrollTop,
      ranges: this.renderedRanges,
      selectedId: this.selectedId
    };

    this.fireEvent('settings', ['save', save]);
  }

});

module.exports = Settings;
