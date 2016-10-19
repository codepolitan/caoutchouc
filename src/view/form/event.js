/**
 * Fill the form using the given schema(template)]
 * @param  {[type]} field  [description]
 * @param  {[type]} doc    [description]
 * @param  {[type]} group) {    var       self [description]
 * @return {[type]}        [description]
 */
var _log = __debug('view:form-utils');

module.exports = new Class({

  /**
   * when view apply
   * remove mode and hide dialog toolbar
   * @return {void}
   */
  _viewDidApply: function() {
    _log.debug('_viewDidApply');

    if (this.toolbar.dialog) {
      this.toolbar.dialog.hide();
    }

    this.setMode(null);
  },

  /**
   * [_viewDidChange description]
   * @param  {[type]} key [description]
   * @param  {[type]} val [description]
   * @return {[type]}     [description]
   */
  _viewDidChange: function(key, val) {
    var ev = 'change:' + key;

    //If the ev contains '.' replace this chat by '-',
    //because our bindings will read all '.' as a property
    if (ev.indexOf('.') !== -1) {
      ev = ev.split('.').join('-');
    }

    //_log.debug('_viewDidChange', ev, val);

    this.setMode('edit');

    this.fireEvent(ev, val);

    if (this.control.apply) {
      this.control.apply.setState('active');
    }

    if (this.control.cancel) {
      this.control.cancel.setState('active');
    }

    if (this.toolbar.dialog) {
      this.toolbar.dialog.show();
    }
  },

  /**
   * Method used to focus the primary fields
   *
   * @return {void}
   */
  _focusPrimaryKey: function() {
    //_log.debug('_focusPrimaryField', this.focuskey);
    if (!this.doc._id) {
      var focus = this.focuskey;
      var field = this.form.getElement('input[name=' + focus + ']');
      if (!field) {
        field = this.form.getElement('input[name="name"]');
      }
      if (field) {
        field.focus();
      }
    }
  },

  /**
   * Hide dialog toolbar
   *
   * @return {void}
   */
  _hideToolbarDialog: function() {
    //_log.debug('_hideToolbarDialog');

    if (this.toolbar && this.toolbar.dialog) {
      this.toolbar.dialog.hide();
    }
  },

  /**
   * Set the class mode
   *
   * @param  {Object} mode
   * @return {void}
   */
  _setClassMode: function(mode, m) {
    //_log.debug('_setClassMode', mode, m);
    if (typeof mode === 'object') {
      mode = m;
    }

    if (typeof mode !== 'object' && this.container.addClass) {
      this.container.addClass('mode-' + mode);
    }

    if (mode === null && this.toolbar.dialog) {
      this.toolbar.dialog.hide();
      this.container.removeClass('mode-edit');
    }
  },


  /**
   * [_onInputKeyUp description]
   * @param  {[type]} input [description]
   * @param  {[type]} ev    [description]
   * @return {[type]}       [description]
   */
  _onInputKeyUp: function(input, ev) {
    _log.debug('_onInputKeyUp');

    input.setError(null);
    input = input.input;

    if (!input.get('readonly')) {
      var name = input.get('name');
      var value = input.get('value');
      //_log.debug('---'+this.get('value')+'/'+self.doc[this.get('name')]+'-');
      if (value !== this.doc[name]) {
        this.updateDocKey(name, value);
        this.fireEvent('change', [name, value]);

        //In test for real time editing
        var pos = input.selectionStart;
        this.fireEvent('keyChange', [this.doc._id, name, ev.key, pos]);

        this.fireEvent('update', name);
      }
    }
  },

  /**
   * [_onInputBlur description]
   * @param  {[type]} input [description]
   * @return {[type]}       [description]
   */
  _onInputBlur: function(input) {
    //_log.debug('_onInputBlur');

    input = input.input;

    //var name = input.get('name');
    var value = input.get('value');

    var ev = 'blur:' + this.get('name');

    if (ev.indexOf('.') !== -1) {
      ev = ev.split('.').join('-');
    }

    this.fireEvent(ev, value);
  }

});
