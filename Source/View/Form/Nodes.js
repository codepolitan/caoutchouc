/**
* Minimalistic Implement for Minimal.Form Class
*
* @implement Minimal.Form
* @author Jerome Vial, Bruno Santos
*/

define([
	'UI/Control/Button'
], function(
	ButtonControl
) {

	var _log = __debug('view:form-nodes');

    var exports = new Class({

		/**
		 * [_initContacts description]
		 * @param  {[type]} field [description]
		 * @param  {[type]} doc   [description]
		 * @param  {[type]} group [description]
		 * @return {[type]}       [description]
		 */
		_initNodes: function(field, doc, group) {
			//_log.debug('_initContacts', field, doc, group);
			var self = this;

			var total = 0;

			group.addClass('group-list');

			var element = new Element('div', {
				'class': 'ui-field field-list'
			}).inject(group, 'top');

			if (field.klss)
				element.addClass(field.klss);

			//_log.debug('_initList', field.name);

			var name = field.text || field.name;

			var label = new Element('label', {
				html: name
			}).inject(element, 'top');

			var list = new Element('div', {
				'class': 'list-content'
			}).inject(element);

			var read = this.isReadOnly(field);

			if (!read) {
				var addBtn = new ButtonControl({
					icon: 'icon-plus-circle',
					name: 'add',
					type: 'icon-text',
					klss: 'button-inline',
					text: 'Ajouter ' +name+ '...',
					emit: 'linkContacts',
				}).inject(list, 'top').addEvent('linkContacts', function(){
					_log.debug(field.name);
					self.fireEvent('linkContacts', field.name);
				});

				addBtn.addClass('button-add');
			}

			if (!doc[field.name]) return;

			doc[field.name].each( function(contact , idx) {
				var item = new Element('div', {
					'data-id': contact._id,
					'class': 'list-item'
				}).inject(list);

				var text = contact.name || contact.email || contact.address || contact;
				if (contact.total)
					text += ' ('+contact.total+')';

				var name = new Element('span', {
					'class': 'name',
					html: text
				}).inject(item);

				total = total + contact.total;

				var icon = new Element('span', {
					'class': 'ui-icon fa fa-file-o'
				}).inject(item, 'top');

				if (!read)
					var remove = new ButtonControl({
						'clss':'right',
						type: 'icon',
						name: 'deleteItem',
						icon: 'icon-times-circle',
						emit: 'remove'
					}).inject(item).addEvent('remove', function() {
						self._removeContactItem(idx, field.name);
						self.fireEvent('contactRemoved', contact._id);
					});

				item.addEvent('click', function() {
					list.getChildren().removeClass('item-selected');
					item.addClass('item-selected');
				});
			});

			if (total > 0 )
				label.set('html', name + ' (' + total + ')');
		},

		/**
		 * [_removeItem description]
		 * @param  {[type]} idx [description]
		 * @param  {[type]} key [description]
		 * @return {[type]}     [description]
		 */
		_removeNodes: function(idx, key) {
			this.doc[key].splice(idx, 1);
			this._setInfo(this.doc);
			this.fireEvent('change', [key, this.doc[key]]);
		}

    });

    return exports;

});
