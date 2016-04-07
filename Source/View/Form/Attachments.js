/**
 * Minimalistic Implement for Minimal.Form Class
 *
 * @implement Minimal.Form
 * @author Jerome Vial, Bruno Santos
 */

define([
	'UI/Control/Button'
], function(
	Button
) {

	var _log = __debug('view:form-attachments');

    var exports = new Class({

		/**
		 * [_initContacts description]
		 * @param  {[type]} field [description]
		 * @param  {[type]} doc   [description]
		 * @param  {[type]} group [description]
		 * @return {[type]}       [description]
		 */
		_initAttachments: function(field, doc, group) {
			//_log.debug('_initList', field, doc, group);
			var self = this;

			group.addClass('group-list');


			if (field.klss) {
				element.addClass(field.klss);
			}

			var read = this.isReadOnly(field);

			var name = field.text || field.name;

			var list = new Element('div', {
				'class': 'form-list'
			}).inject(group);


			if (doc.attachments && typeOf(doc.attachments[field.name]) == 'array') {

				doc.attachments[field.name].each(function(info, idx) {
					var item = new Element('div', {
						'data-id': info._id,
						'class': 'list-item'
					}).inject(list);

					var text = info.name || info.description || info.email || info.address || info;

					var name = new Element('span', {
						'class': 'name',
						html: text
					}).inject(item);

					var icon = new Element('span', {
						'class': 'ui-icon fa fa-file-o'
					}).inject(item, 'top');

					if (!read) {
						var remove = new Button({
							'clss': 'right',
							type: 'icon',
							name: 'deleteItem',
							icon: 'icon-times-circle',
							emit: 'remove'
						}).inject(item).addEvent('remove', function() {
							self._removeAttachmentsItem(idx, field.name);
							self.fireEvent('attachmentRemoved', info._id);
						});
					}

					if (!read) {
						item.addEvent('click', function() {
							list.getChildren().removeClass('item-selected');
							item.addClass('item-selected');
						});
					}
				});

			}

			if (!read) {
				var addBtn = new Button({
					icon: 'icon-plus-circle',
					name: 'add',
					type: 'icon-text',
					klss: 'button-inline',
					text: 'Ajouter ' + name + '...',
					emit: 'linkAttachments',
				}).inject(group).addEvent('linkAttachments', function() {
					//_log.debug(field);
					self.fireEvent('linkAttachments', [field.name, field.opts, self]);
				});

				addBtn.addClass('button-add');
			}
		},

		/**
		 * [_removeAttachmentsItem description]
		 * @param  {[type]} idx [description]
		 * @param  {[type]} key [description]
		 * @return {[type]}     [description]
		 */
		_removeAttachmentsItem: function(idx, key) {

			this.doc.attachments = this.doc.attachments || {};

			var id = this.doc.attachments[key][idx]._id;
			this.doc.attachments[key].splice(idx, 1);

			this.doc.attachments._ids = this.doc.attachments._ids || [];

			var listIdx = this.doc.attachments._ids.indexOf(id);
			if (listIdx >= 0) this.doc.attachments._ids.splice(listIdx, 1);

			this._setInfo(this.doc);
			this.fireEvent('change', [key, this.doc.attachments[key]]);
		}








		/*_initAttachments: function(field, doc, group) {
			// _log.debug('_initAttachments', field, doc, group);

			this._initAttachmentList(field, doc, group);
		},

		_initAttachmentList: function(field, doc, group) {
			var self = this;

			group.addClass('group-list');

			if (doc[field.name])
				doc[field.name].each(function(attachment, i) {
					self.injectAttachment(field, doc, group, attachment, i);
				});

			var addBtn = new Button({
				icon: 'icon-plus-circle',
				name: 'add',
				klss: 'button-inline',
				type: 'icon-text',
				text: 'Ajouter attachment...',
				emit: 'addAttachment',
			}).inject(group).addEvent('addAttachment', function() {
				couch.db.allNode().addEvent('ok', function() {
					self.selectAttachment(field, doc, group);
				});
			});
		},

		injectAttachment: function(field, doc, group, attachment, i, add) {
			//_log.debug('injectAttachment', field, doc, group, attachment, i, add);
			var self = this;

			var context = {
				el: group,
				pos: 'bottom'
			};

			if (add) {
				var elements = group.getChildren();

				context = {
					el: elements[elements.length - 1],
					pos: 'before'
				};
			}


			var line = new Element('div', {
				'class': 'list-item',
				styles: {
					position: 'relative'
				}
			}).inject(context.el, context.pos);
			//_log.debug(i, event);
			//var date = mnml.Date.toTextWithTime(doc[field.name][i]['start']['dateTime']);



			var name = new Element('span', {
				html: doc[field.name][i].name,
				'class': 'item-name'
			}).inject(line);

			var icon = new Element('span', {
				'class': 'icon icon-file-o'
			}).inject(name, 'top');

			var type = new Element('span', {
				html: doc[field.name][i].type,
				'class': 'item-type'
			}).inject(line);

			var removeBtn = new Button({
				icon: 'icon-remove-sign',
				name: 'remove',
				idx: i,
				type: 'icon',
				emit: 'removeAttachment',
			}).inject(line).addEvent('click', function() {
				_log.debug(field.name, this.options.idx);
				self.removeAttachment(field, doc, group, this.options.idx, line);
			}).addClass('button-remove');
		},

		addAttachment: function(field, doc, group, attachment) {
			var self = this;

			//_log.debug('add attachment', field, attachment);

			var value = this.doc.attachments || [],
				i = value.length;

			value.push(attachment);
			//_log.debug(doc);

			this.doc[field.name] = value;
			this.fireEvent('change', [field.name, value]);
			this.injectAttachment(field, this.doc, group, attachment, i, true);
		},

		selectAttachment: function(field, doc, group) {
			var self = this,
				nodes = couch.nodes.all;

			var nodeview = new Minimal.Node({
				nodeList: nodes,
				toolbar: {
					list: ['action', 'view', ],
					action: {
						container: 'head',
						list: ['back', 'next']
					},
					view: {
						container: 'head',
						list: ['cancel', 'choose']
					}
				},
				window: {
					title: 'Contacts',
					width: 260,
					height: 360,
					location: 'center',
					underlay: true,
					controls: []
				}
			}).addEvents({
				select: function(doc) {

				},
				choose: function() {
					// _log.debug('choose', this.doc);
					if (this.doc)
						self.addAttachment(field, doc, group, this.doc);

					this.container.close();
				},
				cancel: function() {
					this.container.close();
				},
				getList: function(params) {


					_log.debug(params.type, params.id);
					couch.db.docs_by_type(params.type, params.id, {}).addEvent('ok', function(ids, total_rows) {

						var complete = params.list.concat(ids);
						//_log.debug('docs', type, ids.length, complete.length);
						nodeview.listView.setList(complete, params.type);
					});
				}
			});
		},

		removeAttachment: function(field, doc, group, idx, line) {
			var self = this;


			if (idx === null) return;
			//  delete doc.dates[this.session.eventIndex];

			var i = this.doc.attachments.indexOf(this.doc.attachments[idx]);
			//_log.debug('--', i);
			if (i != -1) {
				this.doc.attachments.splice(i, 1);
			}

			line.destroy();

			this.doc[field.name] = this.doc.attachments;
			this.fireEvent('change', [field.name, this.doc.attachments]);

			// _log.debug(doc);

		}*/

    });

    return exports;

});
