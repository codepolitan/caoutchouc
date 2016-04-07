/**
* Minimalistic Implement for Minimal.Form Class
*
* @implement Minimal.Form
* @author Jerome Vial, Bruno Santos
*/

define([
	'UI/Control/Button',
	'UI/Control/Field'
], function(
	Button,
	Field
) {

	var _log = __debug('view:form-items');

    var exports = new Class({

		_initItem: function(field, doc, group) {
			var self = this;

			group.addClass('group-list');

			//_log.debug('_initList', field.name);

			if (!doc[field.name]) doc[field.name] || [];

			var element = group.getPrevious();
			var name = element.get('html');

			var addBtn = new Button({
				icon: 'icon-plus-circle',
				name: 'add',
				type: 'icon-text',
				klss: 'button-inline',
				text: 'Ajouter ' +name+ '...',
				emit: 'linkItems',
			}).inject(group, 'bottom').addEvent('linkItems', function(){
				//_log.debug(field.name);
				self._newLineEditor(group, doc);
				self.fireEvent('linkItems', [doc[field.name], field.name]);
				//self.fireEvent('change', 'items');
			});

			var list = new Element('div', {
				'class': 'list-content'
			}).inject(group, 'top');

			var date, item, line;

			doc[field.name].each( function(info , idx) {

				line = new Element('div', {
					class: 'list-item'
				}).inject(list);

				item = new Element('div', {
					html: info.name,
					'class': 'ui-field half'
				}).inject(line);

				/*item = new Element('div', {
					html: '',
					'class': 'ui-field fourth'
				}).inject(line);

				item = new Element('div', {
					html: '',
					'class': 'ui-field fourth'
				}).inject(line);*/

				var remove = new Button({
					'clss':'right',
					type: 'icon',
					name: 'deleteItem',
					icon: 'icon-times-circle',
					emit: 'remove'
				}).inject(line, 'top').addEvent('remove', function() {
					self._removeItem(idx, field.name);
				});

				item.addEvent('click', function() {
					list.getChildren().removeClass('item-selected');
					item.addClass('item-selected');
				});
			});
		},

		_newLineEditor: function(group, doc) {
			var self = this;

			var list = new Element('div', {
				'class': 'list-content'
			}).inject(group, 'top');

			var input = new Field({
				type: 'text',
			}).inject(list);

			input.input.addEvents({
				keydown: function(ev) {
					if (ev.key == 'enter') {
						ev.stop();
						doc.items = doc.items || [];
						doc.items.unshift({name: this.value});
						self._setInfo(doc);
					}
				},
				blur: function() {
					this.destroy();
				}
			});

			input.input.focus();
		},

		/**
		 * [_removeItem description]
		 * @param  {[type]} idx [description]
		 * @param  {[type]} key [description]
		 * @return {[type]}     [description]
		 */
		_removeItem: function(idx, key) {
			this.doc[key].splice(idx, 1);
			this._setInfo(this.doc);
			this.fireEvent('change', ['key', this.doc[key]]);
		}

    });

    return exports;

});
