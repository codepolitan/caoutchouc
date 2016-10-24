import mustache from 'mustache';

const _log = __debug('view:form-reference');

export default new Class({

  /**
   * Initalize Reference
   * @param  {[type]} field [description]
   * @param  {[type]} doc   [description]
   * @param  {[type]} group [description]
   * @return {[type]}       [description]
   */
  _initReference: function(field, doc, group) {
    var opts = this.options;

    if (!doc[field.name]) {
      return;
    }

    var reference = new Element('div', {
      'class': 'list-content'
    }).inject(group);

    this.renderItem(reference, doc[field.name], opts.tmpl[field.name]);
  },

  /**
   * [renderItem description]
   * @param  {[type]} item [description]
   * @param  {[type]} data [description]
   * @param  {[type]} tmpl [description]
   * @return {[type]}      [description]
   */
  renderItem: function(item, data, tmpl) {
    var opts = this.options;

    tmpl = tmpl || opts.tmpl;

    tmpl = tmpl || this.tmpl;
    data = data || this.docs;

    var content = mustache.render(tmpl, data);

    item.set('html', content);
  }

});
