define(function(require, exports, module) {

  var ctrl = {

    list: [],

    /**
     * register
     * @param  {Object} view
     * @param  {Object} app
     * @return {void}
     */
    register: function(view, app) {
      //_log.debug('register', view, app);
      this.list.push(view);

      return;
    },

    /**
     * focus
     * @param  {Object} view
     * @param  {Object} app
     * @return {void}
     */
    focus: function(view, app) {
      //_log.debug('focus', view, app);
      if (view === null) {
        return;
      }

      if (this.active !== view) {
        if (this.active) {
          this.blur(this.active);
        }

        this.active = view;
        view.fireEvent('focus');
      }

      return;
    },

    /**
     * blur
     * @param  {Object} view
     * @return {void}
     */
    blur: function(view) {
      //_log.debug('blur');
      view.fireEvent('blur', view);

      return;
    }

  };

  module.exports = ctrl;

});
