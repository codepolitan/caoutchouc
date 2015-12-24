/**
* Toolbar Core Module
* @class Core.Module.Toolbar
* @author Jerome Vial, Bruno Santos
*/
define(function(require, exports, module) {

	var appIconConfig = require('mnml/icon/app');
	var fontIconConfig = require('mnml/icon/font');
	var mdiIconConfig = require('mnml/icon/mdi');
	var langControlsConfigEn = require('mnml/sys/lang/control/en');
	var langControlsConfigFr = require('mnml/sys/lang/control/fr');

	   var _log = __debug('core:module-toolbar').defineLevel();

    var Toolbar = new Class({

		/**
		 * Initialize Toolbar
		 *
		 * @param {Object} obj
		 */
		_initToolbar: function(obj) {
			_log.debug('_initToolbar', obj);

			this.langControl = {
				en: langControlsConfigEn,
				fr: langControlsConfigFr
			};

			this.toolbar = {};
			this.control = {};

			if (!obj.list) {
				_log.warn('missing list field');
				return;
			}

			for (var i = 0; obj.list.length > i; i++) {
				var name = obj.list[i];
				var bar = obj[name];

				if (!bar) {
					continue;
				}

				//_log.debug(name, bar.container);

				if (!this.container[bar.container]) {
					if (!bar.container) {
						continue;
					}

					this.container['_init'+bar.container.capitalize()]();
				}

				var element = this.toolbar[name] = new Element('div', {
					'class': 'ui-toolbar'
				}).addEvents({

				}).inject(this.container[bar.container]);

				if (bar.klss) {
					element.addClass(bar.klss);
				}

				element.addClass('toolbar-' + name);

				this._initToolbarComp(bar, element);
			}

			//this._initMore();

			this.container.fireEvent('resize');
			this.fireEvent('toolbarReady');

		},

		/**
		 * [_initMore description]
		 * @return {void}
		 */
		_initMore: function() {
			_log.debug('_initMore', this.container, this.control.more, this.toolbar.more);

			if (!this.control || !this.toolbar) {
				_log.warn('missing control or toolbar');
				return null;
			}

			var timer = null;

			var toolbar = this.toolbar.more;
			var control = this.control.more;

			if (!control || !toolbar) {
				_log.warn('missing control or toolbar', control, toolbar);
				return;
			}

			control.addEvent('press', function(ev) {
				_log.debug('-- press', ev);
				//var coord = control.getCoordinates();
				toolbar.setStyles({
					display: 'inline-block'
				});

				return true;
			});

			this.addEvent('control::pressed', function() {
				toolbar.setStyle('display', 'none');
			});

			toolbar.addEvents({
				/**
				 * @ignore
				 */
				mouseleave: function() {
					clearTimeout(timer);
					timer = setTimeout(function() {
						toolbar.setStyle('display', 'none');
					}, 500);
				},
				/**
				 * @ignore
				 */
				mouseenter: function() {
					clearTimeout(timer);
				},
				/**
				 * @ignore
				 */
				click: function() {
					toolbar.setStyle('display', 'none');
				}
			});
		},

		/**
		 * [_initToolbarComp description]
		 * @param {Object} bar
		 */
		_initToolbarComp: function(bar, element) {
			_log.debug('_initToolbarComp', bar, element);

			bar.list = bar.list || [];

			for (var i= 0; i < bar.list.length; i++) {
				var name = bar.list[i];
				var def = bar[name];
				this._instanciateComp(name, def, element);
			}
		},

		/**
		 * [_instanciateComp description]
		 * @param  {string} name    [description]
		 * @param  {Object} def     [description]
		 * @param  {HTMLElement} element [description]
		 * @return {void}
		 */
		_instanciateComp: function(name, def, element){
			_log.debug('_instanciateComp',name, def, element);

			var self = this;
			var clss = 'UI/Control/Button';
			var opts;

			def = def || {};

			// init class
			var l = name.split(/\:\:/);

			name = l[0];
			l.splice(0,1);

			var klss = l.join(' ');


			if (name === 'separator') {
				clss = 'UI/Control/Separator';
			}

			if (def.clss) {
				clss = def.clss;
			}

			if (def.opts) {
				opts = def.opts;
				opts.text = Locale.get('control.'+name, name) || name;

				opts.icon = mdiIconConfig[def.icon || name] || fontIconConfig[def.icon || name] || 'mdi-action-help';
			} else {
				opts = {
					name: name,
					icon: fontIconConfig[def.icon || name] || 'mdi-action-help',
					type: 'action',
					klss: klss
				};
			}

			if (!name) {
				_log.warn('missing name');
				return;
			}

			//var	Clss = api.strToClss(clss);

			var lang;

			if (minimal.settings) {
				lang = minimal.settings.getLang() || 'en';
			} else {
				lang = 'en';
			}

			if (!this.langControl[lang]) {
				lang = 'en';
			}

			var text;
			if (def.text) {
				text = this.langControl[lang][name] || def.text;
			}

			if (clss === 'UI/Control/Button' || clss === 'UI/Control/ButtonMenu') {
				opts.text = this.langControl[lang][name] || Locale.get('control.'+name, name) || text || name;
			}

			var role = null;

			if (!this.sandbox) {
				_log.warn('no sandbox');
			} else {
				var user = this.sandbox.getCurrentUser();
				if (user && user.role) {
					role = user.role;
				}
			}

			var isAllow = true;

			this.options.control = this.options.control || {};

			if (!this.options.control[role]) {
				isAllow = true;
			} else {
				if (!this.options.control[role].disallowed) {
					isAllow = true;
				} else if (this.options.control[role].disallowed.indexOf(name) > -1) {
					isAllow = false;
				}
			}

			if (isAllow) {
				_log.debug('require module', name, clss, opts);
				this._requireModule(clss, function(Clss) {
					//_log.debug('Clss', typeOf(Clss));

					if (!Clss) {
						_log.warn('not found, should require?', name, opts);
						return;
					}

					self.control[name] = new Clss(opts).inject(element);

					// init more toolbar menu
					if (name === 'more') {
						self._initMore();
						return;
					}

					self.control[name].addEvents({
						/**
						 * @ignore
						 */
						change: function(value) {
							//var name =  this.options.name;
							//_log.debug('change', this);
							if (this.isEnable()) {
								self.fireEvent(name, value);
							}
						}
					});

					if (clss === 'UI/Control/Button') {
						self.control[name].addEvents({
							/**
							 * @ignore
							 */
							press: function() {
								_log.debug('press', name);
								self.fireEvent('control::pressed');
								//var name =  this.options.name;
								//_log.debug('press', name, this.isEnable());
								if (this.isEnable()) {
									self.fireEvent('control::'+name, this);
									self.fireEvent(name, [self]);
								}
							}
						});
					}

					if (clss === 'UI/Control/Upload') {
						self.control[name].addEvents({
							/**
							 * @ignore
							 */
							uploadFile: function(files) {
								_log.debug('uploadFile', files);
								if (this.isEnable()) {
									//self.fireEvent('control::'+name, this);
									self.fireEvent(name, [files]);
								}
							}
						});
					}

					if (clss === 'UI/Control/Field') {
						self.control[name].addEvents({
							/**
							 * @ignore
							 */
							change: function() {
								//_log.debug('change', name, this.isEnable());
								self.fireEvent('control::pressed');
								//var name =  this.options.name;
								//_log.debug('press', name, this.isEnable());
								if (this.isEnable()) {
									self.fireEvent('control::'+name, this);
									self.fireEvent(name, [self]);
								}
							}
						});
					}

					if (clss === 'UI/Control/ButtonMenu') {
						self.control[name].addEvents({
							/**
							 * @ignore
							 */
							press: function(name) {
								self.fireEvent('control::pressed');
								//var name =  this.options.name;
								_log.debug('ButtonMenu press', name, this.isEnable());
								if (this.isEnable()) {
									self.fireEvent('control::'+name, this);
									self.fireEvent(name, [self]);
								}
							}
						});
					}

				});
			}
		},

		/**
		 * [_requireView description]
		 * @return {void}
		 */
		_requireModule: function(module, cb) {
			_log.debug('_requireModule', module);
			if (typeOf(module) === 'class') {
				cb(module);
				return;
			}

			require([module], function(Class) {
				cb(Class);
			}, function(err) {
				_log.error(module, err);
				cb();
			});
		}

	});

	module.exports = Toolbar;

});
