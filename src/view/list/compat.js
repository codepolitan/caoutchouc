//const _log = __debug('view-core-listV2-compat').defineLevel();

export default new Class({

  /**
   * for compatibility
   */
  _initCompat: function() {

    //var self = this;

    this.addEvents({
      /**
       * @ignore
       */
      render: function() {
        //self._scroll();
      }
    });
  },

  /**
   * for compatibility
   */
  cancel: function() {
    this.remove('new');
  },

  /**
   * for compatibility
   */
  insert: function(info) {
    this.set(info);
  },

  /**
   * for compatibility
   */
  updateItem: function(info) {
    this.set(info);
  }

});
