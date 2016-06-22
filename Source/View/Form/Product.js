/**
 * Minimalistic Implement for Minimal.Form Class
 * @implement Minimal.Form
 * @author Jerome Vial, Bruno Santos
 */
define([
  'Mustache'
], function(
  Mustache
) {

  var _log = __debug('view:form-product');

  var exports = new Class({

    /**
     * [_initProductList description]
     * @param  {[type]} field [description]
     * @param  {[type]} doc   [description]
     * @param  {[type]} group [description]
     * @return {[type]}       [description]
     */
    _initProductList: function(field, doc, group) {
      var self = this;

      if (!doc[field.name]) return;

      var list = new Element('div', {
        'class': 'list-content'
      }).inject(group);

      var template =
        '<span class="qty">{{quantity}}</span> ' +
        '<span class="name">{{name}}</span> ' +
        '<span class="price">{{price}}</span> ' +
        '<span class="brut">{{brut}}</span> ' +
        '<span class="disc_amount">-{{discount.amount}}</span> ' +
        '<span class="disc_percent">({{discount.percent}}%)</span> ' +
        '<span class="net">{{net}}</span>';

      doc[field.name].each(function(link, i) {
        var html = Mustache.render(template, link);
        var item = new Element('div', {
          html: html,
          'data-id': link._id,
          'class': 'ui-list-item product-list'
        }).inject(list);

        item.addEvent('click', function() {
          if (self.list[field.name])
            self.list[field.name].removeClass('ui-selected');

          item.addClass('ui-selected');
          self.list[field.name] = i;
        });
      });
    }

  });

  return exports;

});
