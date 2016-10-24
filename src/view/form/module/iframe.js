const _log = __debug('view:form-iframe');

export default new Class({

  options: {
    iframe: {}
  },

  /**
   * [_initIframe description]
   * @param  {[type]} field [description]
   * @param  {[type]} doc   [description]
   * @param  {[type]} group [description]
   * @return {[type]}       [description]
   */
  _initIframe: function(field, doc, group) {
    var value = this.getValueFromKey(field.name, doc);

    var iframe = new IFrame({
      'class': 'txt',
      name: field.name,
      styles: {
        height: 1000
      }
    }).inject(group);

    var win = iframe.contentWindow,
      document = win.document;

    document.open();
    document.write(value);

  }

});
