/**
 * Form Management
 * @class View.Form
 * @extends {View}
 * @author Jerome Vial
 */
define(function(require, exports, module) {

	var moment = require('moment');
	var View = require('UI/View/View');
	var settings = require('Core/Module/Settings/Settings');
	var Attachments = require('UI/View/Form/Attachments');
	var Charges = require('UI/View/Form/Charges');
	var Collapse = require('UI/View/Form/Collapse');
	var Comments = require('UI/View/Form/Comments');
	var Contact = require('UI/View/Form/Contacts');
	var Control = require('UI/View/Form/Control');
	var Currency = require('UI/View/Form/Currency');
	var Date = require('UI/View/Form/Date');
	var Fieldset = require('UI/View/Form/Fieldset');
	var File = require('UI/View/Form/File');
	var Hour = require('UI/View/Form/Hour');
	var Hours = require('UI/View/Form/Hours');
	var Iframe = require('UI/View/Form/Iframe');
	var Items = require('UI/View/Form/Items');
	var List = require('UI/View/Form/List');
	var Logs = require('UI/View/Form/Logs');
	//var Nodes = require('UI/View/Form/Nodes');
	var Product = require('UI/View/Form/Product');
	var Reference = require('UI/View/Form/Reference');
	var Related = require('UI/View/Form/Related');
	var Textarea = require('UI/View/Form/Textarea');
	var Unique = require('UI/View/Form/Unique');
	var Url = require('UI/View/Form/Url');
	var User = require('UI/View/Form/User');
	var Validator = require('UI/View/Form/Validator');
	var ButtonControl = require('UI/Control/Button');
	var FieldControl = require('UI/Control/Field');
	var DialogWindow = require('UI/Window/Dialog');

	var _log = __debug('view-form').defineLevel();

	var FormView = new Class({

		Extends: View,

		Implements: [
			Attachments,
			Charges,
			Collapse,
			Comments,
			Contact,
			Control,
			Currency,
			Date,
			Fieldset,
			File,
			Hour,
			Hours,
			Iframe,
			Items,
			List,
			Logs,
			//Nodes,
			Product,
			Reference,
			Related,
			Textarea,
			Unique,
			Url,
			User,
			Validator
		],

		options: {
			clss: 'form',

			scrollbar: true,
			useTextAsLabel: false,

			dateTime: {
				format: 'lll'
			},

			readOnly: false,

			collapsable: false,
			isCollapsed: false,

			confirmCancel: false,

			title: {
				key: 'name',
				capitalize: true
			},

			defaultTemplate: {
				components: ['info'],
				info: {
					type: 'fieldset',
					//text: 'Info',
					klss: 'inspector-head',
					field: {
						_list: ['name', 'description'],
						name: {
							text: 'Name',
							name: 'name'
						},
						description: {
							text: 'Description',
							name: 'description'
						}
					}
				}
			},
			controller: {
				_list: ['view', 'form'],
				view: {
					/*not necessary because the form
					call the method "new" of the list view*/
					//'add': 'new',

					'set': ['_focusPrimaryKey', '_hideToolbarDialog'],
					'mode': '_setClassMode',
					'trash': '_viewDidTrash',
					//'dataReady': '_set',
					'apply': 'apply',
					'cancel': 'cancel',
					'change': '_viewDidChange',
					'collapse': 'collapse',
					'uncollapse': 'uncollapse',
				},
				form: {
					'submit': ['_onSubmit']
				}
			},
		},

		/**
		 * Initialize View
		 * @return {void}
		 */
		_initView: function() {
			//_log.debug('_initView', this.options);

			//need to remove the options template to have a reference
			if (this.options.template) {
				delete this.options.template;
			}

			// for backward compatibility
			this.doc = this.info = {};

			this.parent();

			this.isFirst = 0;

			this.field = {};

			var opts = this.options;

			if (this._initCollapse) {
				this._initCollapse();
			}

			this._initForm();

			if (opts.doc) {
				this.set('info', opts.doc);
			}
		},

		/**
		 * [_onSubmit description]
		 * @return {void}
		 */
		_onSubmit: function(e) {
			//_log.debug('onSubmit', e);
			e.preventDefault();
		},

		/**
		 * [_initForm description]
		 * @return {[type]} [description]
		 */
		_initForm: function() {
			_log.debug('_initForm');

			this.form = new Element('form', {
				method: 'post'
			}).addEvent('submit', function(e) {
				e.stop();
			}).inject(this.content);

			return this.form;
		},

		/**
		 * Initialize Detail View
		 * @param  {Object} doc   Document
		 * @param  {Object} model
		 * @return {void}
		 */
		_setForm: function(doc, model, params) {
			params = params || {};

			//_log.debug('_setForm', doc, model, opts);
			//_log.debug('_setForm', this.readonly);

			var opts = this.options;

			if (this.control && this.control.what) {
				this.control.what.set('text', doc.type);
			}

			this.list = {};

			this.mask = opts.mask;
			this.type = this.options.type;

			_log.debug('_initform');

			if (!params.top) {
				this.form.setStyles(this.form.getSize());
			}

			this.form.empty();

			if (doc.status) {
				this.form.set('data-status', doc.status);
			}

			//_log.debug('doc', doc);

			if (!doc) {
				_log.warn('missing info');
				return;
			}

			//this.readonly = this.readonly || opts.readOnly;

			this._initTemplate(doc, model);
			this._initLegends();
			this._initStatus();
			this._initMask();
		},

		/**
		 * [_initMask description]
		 * @return {[type]} [description]
		 */
		_initMask: function() {
			this.mask = new iMask({
				scope: this.form
			});
		},

		/**
		 * Initialize legends for groups of fields
		 * @return {void}
		 */
		_initLegends: function() {
			_log.debug('_initLegends');

			var legends = this.form.getElements('.legend');

			if (!legends) {
				return;
			}

			for (var i = 0, len = legends.length; i < len; i++) {
				var legend = legends[i];

				if (legend) {
					this._initLegend(legend);
				}

			}

			this._initCollapse();
		},

		/**
		 * Initialize legend for a group of fields
		 * @return {void}
		 */
		_initLegend: function(legend) {
			_log.debug('_initLegend', legend);

			var self = this;
			var opts = this.options;

			var name = legend.get('data-name').toLowerCase();
			var fieldset = legend.getParent();

			//_log.debug('state',  name, state);


			if (opts.collapsable) {
				var state = settings.get('view.' + opts.name + '.fieldset.' + name);

				if (state === 'closed') {
					fieldset.addClass('closed');
				}

				legend.addEvent('click', function() {
					if (fieldset.hasClass('closed')) {
						self.fireEvent('settings', ['fieldset.' + name, 'open']);
						fieldset.removeClass('closed');
					} else {
						fieldset.addClass('closed');
						self.fireEvent('settings', ['fieldset.' + name, 'closed']);
					}

					self.container.fireEvent('resize');
				});
			} else {
				if (this.isCollapsed) {
					fieldset.addClass('closed');
				}
			}
		},

		/**
		 * Initialize status to display creatiion and modification information
		 * @return {void}
		 */
		_initStatus: function() {
			var doc = this.doc;

			var created = moment(doc.created_date).format('lll');
			var modified = moment(doc.modified_date).format('lll');

			var status = doc.created_by + ' ' + created;

			if (doc.modified_by) {
				status = modified + ' by ' + doc.modified_by;
			}

			this.setStatus(status);
		},

		/**
		 * Initialize form model
		 * @return {void}
		 */
		_initTemplate: function(doc, template) {
			_log.debug('_initTemplate', doc, template);

			if (template) {
				this._processComponents(template.components, template, template);
				return;
			}

			var result = this.templateFunction(doc);

			this._processToolbar(result.toolbar);
			this._processComponents(result.tmpl.components, result.tmpl, result.tmpl);

			/*var opts = this.options;
			var comps = {};
			var spec = {};
			var defs = {};

			template = template || opts.template;

			mnml.data = mnml.data || {};

			var dataType = Object.clone(mnml.data.type);
			//opts.template = opts.template || mnml.data.type;

			if (dataType && !dataType[doc.type]) {
				dataType[doc.type] = opts.defaultTemplate;
			}

			if (dataType && dataType[doc.type] && dataType[doc.type].default && dataType[doc.type].default.form) {
				defs = dataType[doc.type].default.form.template;
			}

			if (template && template.components) {
				//_log.debug('_initTemplate', doc, template);

				//clone the array
				comps = template.components.slice();
				defs = template;
				spec = template;

				this._processComponents(comps, spec, defs);
			} else if (doc.kind && dataType[doc.type][doc.kind] && dataType[doc.type][doc.kind].form) {
				this._defineModelKind(doc, defs);
			} else if (dataType && dataType[doc.type] && dataType[doc.type].default && dataType[doc.type].default.form) {
				this._defineModelKeys(doc, defs);
			} else {
				_log.warn('missing config');
			}*/
		},

		/**
		 * Define model by kind
		 * @param  {Object} doc
		 * @param  {Object} defs
		 * @return {void}
		 */
		/*_defineModelKind: function(doc, defs) {
			_log.debug('_defineModelKind');

			var type = doc.type;

			var dataType = Object.clone(mnml.data.type);

			var comps = dataType[type][doc.kind].form.template.components.slice();
			//detail = Object.merge(dataType[type].default, dataType[type][doc.kind]);
			//_log.debug(type, doc.kind, doc);
			var spec = dataType[type][doc.kind].form.template;

			var keyValues = dataType[type][doc.kind].form.template._keyValues || [];

			for (var i = 0, len = keyValues.length; i < len; i++) {
				var key = keyValues[i];

				if (doc[key] && dataType[type][key + ':' + doc[key]]) {

					if (dataType[type][key + ':' + doc[key]].form &&
						dataType[type][key + ':' + doc[key]].form.template.components) {
						comps = dataType[type][key + ':' + doc[key]].form.template.components.slice();
					}

					var clone = Object.clone(dataType[type][doc.kind].form.template);
					spec = Object.merge(clone, spec);
					spec = Object.merge(spec, dataType[type][key + ':' + doc[key]].form.template);
					//spec = Object.merge(clone, dataType[type][key + ':' + doc[key]].form.template);
				}
			}

			this._processComponents(comps, spec, defs);
		},*/

		/**
		 * Define model by keys
		 * @param  {Object} doc
		 * @param  {Object} defs
		 * @return {void}
		 */
		/*_defineModelKeys: function(doc, defs) {
			_log.debug('defineModelKeys', defs);

			var type = doc.type;

			var dataType = Object.clone(mnml.data.type);

			var o = dataType[type].default.form;

			var comps = o.template.components.slice();
			var spec = {};
			var toolbar = {};
			var keyValues = o._keyValues || [];

			//_log.debug('keyValues', keyValues);

			for (var i = 0, len = keyValues.length; i < len; i++) {
				var key = keyValues[i];

				if (doc[key] && dataType[type][key + ':' + doc[key]]) {

					if (dataType[type][key + ':' + doc[key]].form &&
						dataType[type][key + ':' + doc[key]].form.template.components) {
						comps = dataType[type][key + ':' + doc[key]].form.template.components.slice();
					}

					toolbar = Object.clone(dataType[type].default.form.toolbar);
					if (dataType[type][key + ':' + doc[key]].form) {
						toolbar = Object.merge(toolbar, dataType[type][key + ':' + doc[key]].form.toolbar);
					}

					var clone = Object.clone(dataType[type].default.form.template);
					spec = Object.merge(clone, spec);
					if (dataType[type][key + ':' + doc[key]].form) {
						spec = Object.merge(spec, dataType[type][key + ':' + doc[key]].form.template);
					}
					//spec = Object.merge(clone, dataType[type][key + ':' + doc[key]].form.template);
				}
			}

			this._processToolbar(toolbar);
			this._processComponents(comps, spec, defs);
		},*/

		/**
		 * [_processComponents description]
		 * @param  {[type]} comps [description]
		 * @param  {[type]} spec  [description]
		 * @param  {[type]} defs  [description]
		 * @return {[type]}       [description]
		 */
		_processComponents: function(comps, spec, defs) {
			_log.debug('_processComponents', comps, spec, defs);

			if (this.readonly === undefined &&
				spec &&
				spec._mode === 'readonly' ||
				this.readonly ||
				defs._mode === 'readonly'
			) {
				this.readonly = true;
			} else {
				this.readonly = false;
			}

			//_log.debug('readonly', this.readonly);

			for (var i = 0; i < comps.length; i++) {
				var component = comps[i];

				//_log.debug(component);
				var group = spec[component] || defs[component];

				if (!group) {
					continue;
				}

				if (group.type === 'fieldset') {
					this._initFieldset(group, this.form);
				}

				if (group.type === 'client') {
					this._initClient(group, this.form);
				}
			}

			this.focuskey = defs.focus;
		},

		/**
		 * [_initFields description]
		 * @param  {[type]} keys    [description]
		 * @param  {[type]} element [description]
		 * @return {[type]}         [description]
		 */
		_initFields: function(keys, element) {
			//_log.debug('_initFields', keys, element);
			var info = this.doc;

			var group = this._initGroup(element);

			for (var i = 0, len = keys.length; i < len; i++) {
				var key = keys[i];

				this._initField(key, info, group);

				if (key.type === 'button' && key.name === 'deleteNode') {
					this._initDeleteButton(key, doc, group);
				}
			}
		},

		/**
		 * Process field object
		 * @param  {[type]} object   [description]
		 * @param  {[type]} element [description]
		 * @return {[type]}         [description]
		 */
		_initObjectField: function(object, element) {
			// _log.debug('_initObjectField', object, element);
			var info = this.doc;
			var list = object._list || [];

			var group = this._initGroup(element);

			for (var i = 0; i < list.length; i++) {
				var name = list[i];
				var key = object[name];

				this._initField(key, info, group);
			}
		},

		/**
		 * Instanciate group of field
		 * @param  {Element} element
		 * @return {Element} the group element
		 */
		_initGroup: function(element) {
			//_log.debug('_initGroup', element);
			var group = new Element('div', {
				html: element.legend,
				'class': 'group'
			}).inject(element);

			return group;
		},

		/**
		 * Initialize Field for the given key according the data and the model
		 * @param  {string} key   [description]
		 * @param  {[type]} info  [description]
		 * @param  {[type]} group [description]
		 * @return {[type]}       [description]
		 */
		_initField: function(key, info, group) {
			_log.debug('_initField', key, info, group);

			key = key || {};

			var type = key.type;
			var method;

			type = type || 'input';

			if (typeof type === 'string') {
				method = type.capitalize();
			}

			//_log.debug('initField', method, this['_init'+method]);

			if (this['_init' + method]) {
				this['_init' + method](key, info, group);
			} else {
				this._initInput(key, info, group);
			}
		},

		/**
		 * [_processToolbar description]
		 * @param  {[type]} toolbar [description]
		 * @return {[type]}         [description]
		 */
		_processToolbar: function(toolbar) {
			//_log.debug('_processToolbar', toolbar);

			if (!toolbar || !toolbar.opts) {
				return;
			}

			var disableds = toolbar.opts.disabled;
			var enableds = toolbar.opts.enabled;

			//_log.debug('disableds', disableds);
			//_log.debug('enableds', enableds);

			for (var i = 0; i < disableds.length; i++) {
				var c = disableds[i];
				if (this.control[c]) {
					this.control[c].setState('disabled');
				}
			}

			for (var i = 0; i < enableds.length; i++) {
				var c = enableds[i];
				if (this.control[c]) {
					this.control[c].setState('enabled');
				}
			}
		},

		/**
		 * [enableControl description]
		 * @param  {[type]} str [description]
		 * @return {[type]}     [description]
		 */
		enableControl: function(str) {
			var control = this.control[str];

			//_log.debug('enableControl', str, this.control);

			if (control) {
				control.setState('enabled');
			}
		},

		/**
		 * [disableControl description]
		 * @param  {[type]} str [description]
		 * @return {[type]}     [description]
		 */
		disableControl: function(str) {
			var control = this.control[str];

			//_log.debug('disableControl', str, this.control);

			if (control) {
				control.setState('disabled');
			}
		},

		/**
		 * Init Delete Button for group
		 * @param  {Element} button
		 * @param  {Data} doc    [description]
		 * @param  {[type]} group  [description]
		 * @return {[type]}        [description]
		 */
		_initDeleteButton: function(button, doc, group) {
			var self = this;

			var clss = 'ui-delete';
			var text = button.text || button.name;

			var btn = new Button({
				clss: clss,
				type: 'text',
				name: button.name,
				text: button.text,
				emit: button.name
			}).inject(group);

			btn.addEvent(button.name, function() {
				_log.debug('emit', button.name);
				self.fireEvent(button.name, doc._id);
			});
		},

		/**
		 * Initialize input
		 * @param  {key} key [description]
		 * @param  {Object} info
		 * @param  {Element} group
		 * @return {void}
		 */
		_initInput: function(key, info, group) {
			var self = this;

			key = key || {};
			key.name = key.name || '';

			//var n = key.name.split(/\./);

			var value = this.getValueFromKey(key.name, info);

			if (!value && key.default) {
				value = key.default;
				this.updateDocKey(key.name, key.default);
			}

			if (typeOf(value) === 'array' || typeOf(value) === 'object') {
				value = JSON.stringify(value);
				value = value.replace(/[&\/\\"{}\[\]]/g, '');
				value = value.replace(/[,]/g, ', ');
				value = value.replace(/[:]/g, ': ');
			}

			var _name = key.name.replace('.', '-');

			var type = key.type || 'text';

			var read = this.isReadOnly(key);

			var input = new FieldControl({
				'klass': 'field-' + _name,
				type: type,
				name: key.name,
				text: key.text,
				value: value,
				read: read,
				error: true,
				useTextAsLabel: this.options.useTextAsLabel
			}).inject(group);

			if (key.kind) {
				input.addClass('kind-' + key.kind);
			}


			this.field[key.name] = input;

			if (key.klss) {
				input.addClass(key.klss);
			}

			input.input.addEvents({
				keyup: function(ev) {
					self._onInputKeyUp(input, ev);
				},
				blur: function() {
					self._onInputBlur(input);
				}
			});
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
		},

		/**
		 * Update this.doc for the given key name (three levels)
		 * @param  {string} name The name of the key in dot notation
		 * @param  {Mixin} value The related key value
		 * @return {Mixin} Value
		 */
		updateDocKey: function(name, value) {
			var keys = name.split(/\./);
			//_log.debug('updateDocKey', keys, name, value);

			if (keys.length === 1) {
				this.doc[keys[0]] = value;
			}

			if (keys.length === 2) {
				if (!this.doc[keys[0]]) {
					this.doc[keys[0]] = {};
				}

				this.doc[keys[0]][keys[1]] = value;
			}
			if (keys.length === 3) {
				if (!this.doc[keys[0]]) {
					this.doc[keys[0]] = {};
				}
				if (!this.doc[keys[0]][keys[1]]) {
					this.doc[keys[0]][keys[1]] = {};
				}

				this.doc[keys[0]][keys[1]][keys[2]] = value;
			}

			if (keys.length === 4) {
				if (!this.doc[keys[0]]) {
					this.doc[keys[0]] = {};
				}
				if (!this.doc[keys[0]][keys[1]]) {
					this.doc[keys[0]][keys[1]] = {};
				}
				if (!this.doc[keys[0]][keys[1]][keys[2]]) {
					this.doc[keys[0]][keys[1]][keys[2]] = {};
				}

				this.doc[keys[0]][keys[1]][keys[2]][keys[3]] = value;
			}

			return value;
		},

		/**
		 * Get Value for the given key
		 * @param  {string} name defined in dot notation
		 * @param  {Object} info
		 * @return {Mixin} The Value of the given key
		 */
		getValueFromKey: function(name, info) {
			var keys = name.split(/\./);
			var value = null;

			if (!name || !info) {
				return;
			}

			//_log.debug('getValueFromKey', name, info);

			if (keys.length === 1) {
				value = info[keys[0]];
			}
			if (keys.length === 2 && info[keys[0]]) {
				if (info[keys[0]]) {
					value = info[keys[0]][keys[1]];
				}
			}
			if (keys.length === 3) {
				if (info[keys[0]]) {
					if (info[keys[0]][keys[1]]) {
						value = info[keys[0]][keys[1]][keys[2]];
					}
				}
			}

			return value;
		},

		/**
		 * Get Value for the given key
		 * @deprecated
		 *
		 * @param  {string} name defined in dot notation
		 * @param  {Object} info
		 * @return {Mixin} The Value of the given key
		 */
		/*get: function(key) {
			return this.getValueFromKey(key, this.doc);
		},*/

		/**
		 * Getter
		 *
		 * @param {string} prop
		 * @param {string} value
		 * @return {Object|void}
		 */
		get: function(prop, value) {
			switch (prop) {
				case 'key':
					return this.getValueFromKey(value, this.doc);
				case 'info':
					return this.getInfo();
				case 'unsaved':
					return this.original;
				case 'type':
					return this.type;
				case 'options':
					return this.options;
				default: //default will replace the old method see up
					return this.getValueFromKey(prop, this.doc);
					/*case 'model':
						return this.getSelectedModel();*/
			}
		},

		/**
		 * [add description]
		 * @param {string} type
		 */
		add: function(type) {
			_log.debug('add', type);

			this._setInfo({
				type: this.options.type
			});
		},

		/**
		 * Use to create a new document
		 *
		 * @param {string} type Info type
		 * @param {string} kind Info kind
		 * @return {void}
		 */
		new: function(type, kind) {
			//_log.debug('new', type, kind);
			var self = this;
			var opts = this.options;
			var info = {};

			if (typeof type === 'object' && type.type) {
				info = type;
			}

			if (!type || typeof type !== 'string') {
				type = opts.type;
				kind = opts.kind;
			}

			info.type = type;

			if (kind) {
				info.kind = kind;
			}


			//_log.debug('type', type);

			this.sandbox.getDataType(type, 'form', function() {

				var process = require('mnml/data/type/' + type + '/_process');
				if (process && process.new) {
					info = process.new(info);
				}

				self.readonly = undefined;

				self.setInfo(info);
			});

		},

		/**
		 * Setter
		 *
		 * @param {string} prop
		 * @param {string} value
		 * @return {Object|void}
		 */
		set: function(prop, value, opts) {
			switch (prop) {
				case 'mode':
					return this._setMode(value);
				case 'info':
					return this.setInfo(value, opts);
				case 'readonly':
					return this._setReadonly(value);
				default: //default will replace the old method
					return this.setInfo(prop, value);
			}
		},

		/**
		 * [_setReadonly description]
		 * @description NOT USED
		 * @param {[type]} val [description]
		 */
		_setReadonly: function(val) {
			_log.debug('_setReadonly', val);

			if (val) {
				this.readonly = true;
			} else {
				this.readonly = false;
			}
		},

		/**
		 * Set Detail view with the given information and model
		 * @param {Object} doc   [description]
		 * @param {Object} opts [description]
		 */
		setInfo: function(doc, opts) {
			_log.debug('setInfo', doc, opts);

			opts = opts || {};

			var mask = opts.mask || opts.template;

			if (this.mode === 'edit') {
				return;
			}

			if (!doc && !mask) {
				this.clear();
				return;
			}

			if (doc._id === 'new') {
				delete doc._id;
			}

			this.original = doc;
			this.originalMask = mask;

			//_log.debug('set');

			this.destroyCkeInstance();

			//In test for real time editing
			if (this.doc) {
				this.fireEvent('unset', [this.doc._id, this]);
			}

			if (this.control && this.control.add && doc && doc._id) {
				this.control.add.setState(null);
			}

			this.readonly = undefined;

			if (opts.readonly !== undefined) {
				this.readonly = opts.readonly;
			}

			this._setInfo(doc, mask);

			var id = null;
			if (doc) {
				id = doc._id;
			}
			this.fireEvent('set', [id, this]);
			this.fireEvent('infoSet', doc);
			this.fireEvent('settings', ['infoId', id]);

			//mnml.view.ctrl.focus(this);

			return this;
		},

		/**
		 * Set Detail view with the given information and model
		 * @param {Object} doc   [description]
		 * @param {Object} mask [description]
		 * @param {Object} opts [description]
		 */
		_setInfo: function(doc, mask, opts) {
			//_log.debug('_set', doc, mask);

			doc = this.patch(doc);

			if (this.form) {
				this.form.setStyle('display', 'block');
			}

			this.datePickers = this.datePickers || [];
			this.datePickers.each(function(datePicker) {
				datePicker.destroy();
			});

			var title = doc[this.options.title.key] || '';

			if (this.control && this.control.title) {
				if (this.options.title.capitalize) {
					title = title.charAt(0).toUpperCase() + title.slice(1);
				}
				this.control.title.set('text', title);
			}

			/*if (this.options.container)
				this.options.container.focus();*/

			this.doc = null;
			this.doc = Object.clone(doc);
			this.relatedListEvents = false;

			this._setForm(this.doc, mask, opts);


			if (this.container) {
				this.container.fireEvent('resize');
			}
		},

		/**
		 * [_setMode description]
		 * @param {[type]} mode [description]
		 */
		_setMode: function(mode) {
			//_log.debug('setMode', mode);

			if (mode === 'read') {
				this.readonly = true;
				this._setInfo(this.doc, this.originalMask);
			} else if (mode === 'edit') {
				this.setMode(mode);
			} else {
				this.setMode(mode);
			}
		},

		/**
		 * [patch description]
		 * @param  {[type]} doc [description]
		 * @return {[type]}     [description]
		 */
		patch: function(doc) {
			//_log.debug('patch', doc);
			// horrible but ...
			// the mnml dot notation will disapear

			if (!doc || !doc.type) {
				_log.warn('missing info or type');
				return doc;
			}

			var process = require('mnml/data/type/' + doc.type + '/_process');
			if (process[doc.kind] && process[doc.kind].patch) {
				doc = process[doc.kind].patch(doc);
			} else if (process.patch) {
					doc = process.patch(doc);
			}

			return doc;
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
		 * [update description]
		 * @param  {Object} info [description]
		 * @return {void}
		 */
		update: function(info) {
			//_log.debug('update', info);

			if (!info || !this.doc) {
				return;
			}

			if (info._id === this.doc._id) {

				//remove edit mode when update the current info
				//because it's not possible to setInfo in edit mode
				if (info._rev === this.doc._rev) {
					this.mode = undefined;
				}

				this.setInfo(info, {
					top: false
				});
			} else if (!this.doc._rev && this.doc.type === info.type) {
				this.setInfo(info, {
					top: false
				});
			}
		},

		/**
		 * [render description]
		 * @param  {[type]} doc [description]
		 * @return {[type]}     [description]
		 */
		render: function() {
			//_log.debug('render', this.doc);

			_log.fatal('render method using deprecated couch. form:1249');

			if (!this.original || !this.original._id) {
				return;
			}

			var doc = couch.doc[this.original._id];
			this._setInfo(doc);
		},

		/**
		 * IN TEST FOR REAL TIME EDITING
		 */
		setKeyPos: function(key, value, pos) {
			_log.debug(value, pos);
			var lastValue = this.doc[key] || '';
			var newValue = '';

			if (value === 'space') {
				value = ' ';
			}

			if (value === 'delete') {
				newValue = lastValue.substr(0, pos) + lastValue.substr(pos + 1);
			} else if (value === 'backspace') {
				_log.debug('***', lastValue.substr(0, pos - 1), lastValue.substr(pos - 1, pos));
				//newValue = delete lastValue[pos];
				newValue = lastValue.substr(0, pos) + lastValue.substr(pos + 1, lastValue.length - 1);
			} else {
				newValue = lastValue.substr(0, pos) + value + lastValue.substr(pos - 1);
			}

			this.doc[key] = newValue;

			var input = this.form.getElement('[name=' + key + ']');

			var start = input.selectionStart;
			var end = input.selectionEnd;

			input.set('value', newValue);

			//_log.debug(lastValue.substring(0, start), value.substring(0, start));

			if (pos < start) {
				var diff = 1;
				start += diff;
				end += diff;
			}

			input.selectionStart = start;
			input.selectionEnd = end;
		},

		/**
		 * Set a specific key.
		 * @param {string} key   Object key
		 * @param {string} value Value to be set
		 * @param {boolean} quiet Don't fireEvent if true
		 */
		setKey: function(key, value, quiet) {
			//_log.debug('setKey', key, value);

			//var currentVal = this.getValueFromKey(key, this.doc);
			//_log.debug('--', currentVal, value);
			/*if (currentVal === value) {
				return;
			}*/

			this.updateDocKey(key, value);

			if (typeOf(value) === 'object') {
				this.setKeyObject(key, value);
			}
			if (typeOf(value) === 'array') {
				this.setKeyArray(key, value);
			} else if (this.field[key]) {
				this.field[key].set(value);
			}

			if (!quiet) {
				this.fireEvent('change', [key, value]);
			}
		},

		/**
		 * set sub keys if exist
		 * @param {string} key   Object key
		 * @param {Object} obj Value to be set
		 */
		setKeyObject: function(key, obj) {
			//_log.debug('setKey', key, obj);

			for (var sub in obj) {
				var name = key + '.' + sub;
				if (this.field[name]) {
					this.field[name].set(obj[sub]);
				}
			}
		},

		/**
		 * set sub keys if exist
		 * NOT IN USE
		 * @param {string} key   Object key
		 * @param {Object} obj Value to be set
		 */
		setKeyArray: function(key, obj) {
			_log.debug('setKeyArray', key, obj);


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
		 * When the trash control is pressed
		 *
		 * @return {void}
		 */
		_viewDidTrash: function() {
			//_log.debug('_viewDidTrash');
			this.fireEvent('deleteItem', this.doc._id);
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
		 * Set view accorrding the given mode
		 * @param {string} mode edit or not
		 */
		setMode: function(mode) {
			this.fireEvent('mode', [this, mode]);

			this.mode = mode;
		},



		/**
		 * Actually hide the form of the view
		 * @return {Object} The instance of the Class
		 */
		clear: function(doc) {
			//_log.debug('clear');

			if (typeof doc === 'object' && this.doc && doc._id && doc._id !== this.doc._id) {
				return;
			}

			if (this.mode === 'edit') {
				return;
			}

			if (this.form) {
				this.form.setStyle('display', 'none');
			}

			if (this.control && this.control.add) {
				this.control.add.setState(null);
			}

			if (this.control && this.control.title) {
				this.control.title.set('text', '');
			}

			this.doc = null;

			this.fireEvent('clean');
			this.fireEvent('settings', ['infoId', null]);

			/*this.destroyCKEditor();
			if (this.form) this.form.empty();*/
			return this;
		},

		/**
		 * [getType description]
		 * @return {[type]} [description]
		 */
		getType: function() {
			return this.type;
		},

		/**
		 * [getInfo description]
		 * @return {[type]} [description]
		 */
		getInfo: function() {
			return this.doc || null;
		},

		/**
		 * [apply description]
		 * @return {[type]} [description]
		 */
		apply: function(value) {
			//_log.debug('form apply', value);

			/*if (this.cke)
				this._updateHTMLField(this.cke);*/

			if (this.toolbar.dialog) {
				this.toolbar.dialog.hide();
			}

			this.fireEvent('save', this.doc);
			this.setMode(null);
		},

		/**
		 * [cancel description]
		 * @return {[type]} [description]
		 */
		cancel: function() {
			//_log.debug('cancel', this.mode);
			var self = this;
			var opts = this.options;

			if (!opts.container) {
				this._cancel();
				return;
			}

			if (opts.confirmCancel) {
				var dialog = new DialogWindow({
					title: 'Confirm',
					message: 'You will lose all changes done in this document.'
				}).addEvents({
					ok: function() {
						self._cancel();
					}
				});
			} else {
				this._cancel();
			}
		},

		/**
		 * [_cancel description]
		 * @return {[type]} [description]
		 */
		_cancel: function() {
			//_log.debug('_cancel');

			this.setMode(null);

			if (this.toolbar.dialog) {
				this.toolbar.dialog.hide();
			}

			if (this.control.add) {
				this.control.add.setState(null);
			}

			this._setInfo(this.original, this.originalMask);

			this.fireEvent('canceled');
		},

		/**
		 * [blur description]
		 * @return {[type]} [description]
		 */
		blur: function() {
			//_log.debug('blur', this.ckeInstances);

			//this.destroyCkeInstance();
		},

		/**
		 * If do not receive a first param
		 * return if the view is read only
		 * if the first param is a object
		 * check if the view and the field are read only
		 * the field overwrite the view
		 *
		 * @param  {Object} field object with key read
		 * @return {boolean}
		 */
		isReadOnly: function(field) {
			//_log.debug('isReadOnly', field);
			if (field) {
				var read = false;

				if (this.readonly !== undefined) {
					read = this.readonly;
				}
				if (field.read !== undefined) {
					read = field.read;
				}
				return read;
			} else {
				return this.readonly;
			}
		}

	});

	module.exports = FormView;

});
