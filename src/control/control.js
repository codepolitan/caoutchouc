import Component from '../component/component';

const _log = __debug('ui:control');

export default new Class({

  Extends: Component,

  options: {
    //disabled: false
    error: false
  },

  /**
   * [isEnable description]
   * @return {boolean}
   */
  isEnable: function() {
    //_log.debug('isEnable', this);
    if (this.state === 'disabled') {
      return false;
    } else {
      return true;
    }
  },

  /**
   * [isActive description]
   * @return {boolean} [description]
   */
  isActive: function() {
    if (this.state === 'active') {
      return true;
    } else {
      return false;
    }
  },

  /**
   * [_initOptions description]
   * @return {void} [description]
   */
  _initOptions: function() {
    this.parent();

    var opts = this.options;

    this.value = opts.value;
    this.readonly = opts.read;
  },

  /**
   * [_initEvents description]
   * @return {void} [description]
   */
  _initEvents: function() {
    var self = this;

    //this.element.set('tabindex', 0);

    this.element.addEvents({
      /**
       * @ignore
       */
      click: function(e) {
        _log.debug('click', e);
        //e.stopPropagation();
        self.fireEvent('click');
      },
      /**
       * @ignore
       */
      mouseup: function() {
        self.fireEvent('mouseup');
      }
    });
  }

});
