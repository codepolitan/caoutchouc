/**
 * [_initReference description]
 * @param  {[type]} field  [description]
 * @param  {[type]} doc    [description]
 * @param  {[type]} group) {    var       self [description]
 * @return {[type]}        [description]
 */
var mustache = require('mustache');

var _log = __debug('view:form-reference');

module.exports = new Class({

  /**
   * Initalize Reference
   * @param  {[type]} field [description]
   * @param  {[type]} doc   [description]
   * @param  {[type]} group [description]
   * @return {[type]}       [description]
   */
  _initReference: function(field, doc, group) {
    var self = this,
      opts = this.options;

    if (!doc[field.name]) return;

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
    var self = this,
      opts = this.options;

    tmpl = tmpl || opts.tmpl;

    tmpl = tmpl || this.tmpl;
    data = data || this.docs;

    var content = mustache.render(tmpl, data);

    item.set('html', content);
  }

});
