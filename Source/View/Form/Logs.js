/**
* Minimalistic Implement for Minimal.Form Class
*
* @implement Minimal.Form
* @author Jerome Vial, Bruno Santos
*/

define([
	'moment'
], function(
	moment
) {

	var _log = __debug('view:form-logs');

    var exports = new Class({

		/**
		 * [_initLogs description]
		 * @param  {[type]} field [description]
		 * @param  {[type]} doc   [description]
		 * @param  {[type]} group [description]
		 * @return {[type]}       [description]
		 */
		_initLogs: function(field, doc, group) {
			var self = this;

			group.addClass('group-list');

			if (!doc[field.name]) return;

			var list = new Element('div', {
				'class': 'form-list list-logs'
			}).inject(group, 'top');

			var date, item, line;

			var dateFormat = this.options.dateTime.format;

			doc[field.name].each( function(log , idx) {
				date = moment(log.date).format(dateFormat);

				line = new Element('div', {
					class: 'list-item'
				}).inject(list);

				item = new Element('div', {
					html: date,
					'data-id': log._id,
					'class': 'item-date'
				}).inject(line);

				/*item = new Element('div', {
					html: log.username,
					'data-id': log._id,
					'class': 'ui-field fourth'
				}).inject(line);*/

				item = new Element('div', {
					html: log.action,
					'data-id': log._id,
					'class': 'item-desc'
				}).inject(line);

				item.addEvent('click', function() {
					list.getChildren().removeClass('item-selected');
					item.addClass('item-selected');
				});
			});
		}

    });

    return exports;

});
