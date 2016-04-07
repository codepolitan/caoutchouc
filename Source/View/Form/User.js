
/**
 * Related information
 *
 * @extends {Minimal.Form}
 * @author Jerome Vial, Bruno Santos
 * @description
 *  Info Structure:
 *  	id: Unique info id
 * 	The options accept:
 * 		unique: If set to true will be possible just attach a document in this key
 */

define([

], function(

) {

	var _log = __debug('view:form-user');

    var exports = new Class({

		/**
		 * [_initContacts description]
		 * @param  {[type]} field [description]
		 * @param  {[type]} doc   [description]
		 * @param  {[type]} group [description]
		 * @return {[type]}       [description]
		 */
		_initUser: function(field, doc, group) {
			//_log.debug('_initUser', field, doc, group);

			group.addClass('group');

			var info = this.getValueFromKey(field.name, this.doc);

			if (!info) {
				this._getUser(field, function(user) {
					this._displayUser(field, doc, group);
				});
			} else {
				this._displayUser(field, doc, group);
			}
		},

		/**
		 * [_displayUser description]
		 * @param  {[type]} field [description]
		 * @param  {[type]} doc   [description]
		 * @param  {[type]} group [description]
		 * @return {[type]}       [description]
		 */
		_displayUser: function(field, doc, group) {
			//_log.debug('_displayUser', field, doc, group);

			var self = this;
			var type = 'User';
			var source = field.opts.keys.source;
			var display = field.opts.keys.display || [];
			var key = doc[field.name];

			var list = new Element('div', {
				'class': 'ui-field type-unique'
			}).inject(group);

			new Element('label', {
				html: field.name
			}).inject(list);

			if (field.klss) {
				list.addClass(field.klss);
			}

			if (key) {
				var item = new Element('div', {
					'class': 'unique-item'
				}).inject(list);

				if (source) {
					for (var i = 0; i < source.length; i++) {
						var sourceKey = source[i];

						if (sourceKey === '_id' || display.indexOf(sourceKey) == -1) continue;

						new Element('span', {
							'class': 'ui-key key-' + sourceKey,
							html: key[sourceKey]
						}).inject(item);
					}
				}
			}
		},

		/**
		 * [_getUser description]
		 * @param  {[type]} name [description]
		 * @param  {[type]} opts [description]
		 * @return {[type]}      [description]
		 */
		_getUser: function(field, cb) {
			//_log.debug('_getUser', field);
			var self = this;

			this.sandbox.getUserContact(function(info) {
				if (!info || !self.doc) {
					_log.debug('Missing info');
					return;
				}

				if (info._id && info._id === self.doc._id) {
					_log.debug('Invalid contact');
					return;
				}

				self.doc[field.name] = {};

				if (typeOf(field.opts.keys.source) === 'array') {
					var sourceKeys = field.opts.keys.source;

					for (var i = 0; i < sourceKeys.length; i++) {
						var source = sourceKeys[i],
							value = info[source];

						self.doc[field.name][source] = value;
					}
				}

				self._setInfo(self.doc, null, false);
				//self.fireEvent('change', [name, self.doc[name]]);
			});
		}
    });

    return exports;

});
