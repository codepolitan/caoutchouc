define(function(require, exports, module) {

  var _log = __debug('core-view-ctrl').defineLevel('debug');

  var ctrl = {

    list: [],

    /**
     * register
     * @param  {Object} view
     * @return {void}
     */
    register: function(view) {
      _log.debug('register', view);

      view.element.getParent().addEvent('click', this.focus.bind(this, view));

      this.list.push(view);
    },

    /**
     * focus
     * @param  {Object} view
     * @return {void}
     */
    focus: function(view) {
      // if try to focus the focused view
      if (this.active === view) {
        return;
      }

      // blur active view
      if (this.active) {
        this.blur(this.active);
      }

      _log.debug('focus', view);

      this.active = view;
      view.fireEvent('focus');
    },

    /**
     * blur
     * @param  {Object} view
     * @return {void}
     */
    blur: function(view) {
      _log.debug('blur', view);

      this.active = undefined;
      view.fireEvent('blur');
    }

  };

  module.exports = ctrl;

});
