const _log = __debug('view-collapse').defineLevel();

export default new Class({

  /**
   * init collapse
   * @return {void}
   */
  _initCollapse: function() {
    //_log.debug('_initCollapse');

    this._initCollapseControl();

    var collapsed = this.options.isCollapsed;

    if (!collapsed) {
      this.isCollapsed = this.options.isCollapsed;
    } else {
      this.isCollapsed = collapsed;
    }
  },

  /**
   * init collapse control
   * @return {void}
   */
  _initCollapseControl: function() {
    //_log.debug('_initCollapse form');

    if (!this.control || !this.control.collapse) {
      return;
    }

    if (this.isCollapsed) {
      //_log.debug('form isCollapsed');
      if (this.control.collapse) {
        this.control.collapse.hide();
        this.control.uncollapse.show();
      }
    } else {
      if (this.control.uncollapse) {
        this.control.uncollapse.hide();
        this.control.collapse.show();
      }
    }
  },

  /**
   * collapse
   * @return {void}
   */
  collapse: function() {
    var legends = this.form.getElements('.legend');

    _log.debug('collapse', legends);

    this.isCollapsed = true;

    for (var i = 0; i < legends.length; i++) {
      var legend = legends[i];
      var fieldset = legend.getParent();
      fieldset.addClass('closed');

      if (this.control.collapse) {
        this.control.collapse.hide();
      }

      if (this.control.uncollapse) {
        this.control.uncollapse.show();
      }

      this.fireEvent('settings', ['isCollapsed', true]);
    }
  },

  /**
   * uncollapse
   * @return {void}
   */
  uncollapse: function() {
    var legends = this.form.getElements('.legend');

    _log.debug('uncollapse', legends);

    this.isCollapsed = false;

    for (var i = 0; i < legends.length; i++) {
      var legend = legends[i];
      var fieldset = legend.getParent();
      fieldset.removeClass('closed');

      if (this.control.uncollapse) {
        this.control.uncollapse.hide();
      }

      if (this.control.collapse) {
        this.control.collapse.show();
      }

      this.fireEvent('settings', ['isCollapsed', false]);
    }
  }

});
