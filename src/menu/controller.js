export default {

  options: {
    version: '0.1',
    zBase: 300,
    zStep: 2
  },

  list: [],
  zIndex: 300,

  /**
   * Add passing menu to list of menus
   * @param  {Object} menu
   * @return {void}
   */
  register: function(menu) {
    this.list.push(menu);
    if (menu.options.zIndex == 'auto') {
      menu.element.setStyle('zIndex', this.zIndex);
    } else {
      menu.element.setStyle('zIndex', menu.options.zIndex);
    }
    this.zIndex += this.options.zStep;
  },

  /**
   * Destroy the provided window and focus to next one
   * @param  {Object} menu
   * @return {void}
   */
  close: function(menu) {
    //_log.debug('close...');
    menu = menu || this.active;
    menu.hide();
    menu.fireEvent('onClose');
    for (var i = this.list.length - 1; i >= 0; i--) {
      if (this.list[i] == menu) {
        menu.destroy();
        delete this.list[i];
        this.list = this.list.clean();
      }
    }
    this.focus();
  },

  /**
   * [focus description]
   * @param  {[type]} win [description]
   * @return {[type]}     [description]
   */
  focus: function(win) {},

  /**
   * [closeall description]
   * @return {[type]} [description]
   */
  closeall: function() {
    this.list.each(function(menu) {
      //menu.hideNow();
    }, this);
  },

  /**
   * [hideAll description]
   * @return {[type]} [description]
   */
  hideAll: function() {
    this.list.each(function(menu) {
      menu.hideNow();
    }, this);
  }

};
