/**
 * UI Selector Class
 * @class UI.Selector
 */
define([
	'UI/Selector/Border',
	'UI/Selector/Menu',
	'UI/Selector/Resizer',
	'UI/Selector/Overlay',
	'UI/Selector/Mask'
], function(
	Border,
	Menu,
	Resizer,
	Overlay,
	Mask
) {

	var exports = new Class({

		Implements: [Events, Options],

		options: {
			container: document.body,
			scope: document.body,
			target: document.body,
			trigger: 'click',

			clss: 'ui-selector',
			prefix: 'pages',
			zIndex: 1100,
			wrapper: {
				tagName: 'div',
				clss: 'ui-selector'
			},

			components: [],
			toolbar: false,
			menu: false,
			border: {
				size: 1,
				display: 'none'
			},
			resizer: true,
			overlay: false,
			cookie: {
				duration: 365,
				path: '/'
			},
			usefx: false,
			enable: true,
			timerOnHide: 0,
			onCatch: {},
			onDisable: {},
			onEnable: {},
			positionning: 'relative'
		},

		/**
		 * initialize
		 * @param  {Object} options
		 * @return {void}
		 */
		initialize: function(options) {
			//_log.debug('UI.Selector.initilize()');
			this.setOptions(options);

			this.selectors = [];

			this.container = this.options.container;

			var scope = this.options.scope || this.container;
			var target = this.options.target;

			this.name = this.options.prefix + '-' + this.options.name;
			this.size = {};

			this.timer = null;

			//_log.debug('UI.Selector.init(scope,target)',this.name);

			this._initElement(this.options.components);
			this._initEvents(scope, target);

			//_log.debug('shoud hide this');

			this.hideNow();
		},

		update: function() {

			var scope = this.options.scope;
			var target = this.options.target;

			this._initEvents(scope, target);
		},

		_initEvents: function(scope, target) {
			//_log.debug('UI.Selector._initEvents(scope,target)',typeOf(scope),target);
			//var delay = 20;
			var self = this;

			//_log.debug('UI.Selector._initEvents(scope,target)',typeOf(scope),target);

			var delegation = self.options.trigger + ':relay(' + target + ')';

			scope.addEvent(delegation, function(ev, el) {
				self.reach(el);
			});

			/*var list = scope.querySelectorAll( target );

			//_log.debug(list);

			new Array()

			Array.each(list, function(el) {
				//_log.debug('UI.Selector.target',el,self.options.trigger);
				el.store('selector', self);
				el.addEvent(self.options.trigger, function(){
					self.reach(el);
				});

				el.addEvents({
					mouseenter: function(e) {
						//e.stop();
						clearTimeout(self.timer);
					},
					mouseover: function(e) {
						//self.reach(el);
						//e.stop();
						clearTimeout(self.timer);
					}
				});
			});*/

			/*pages.addEvent('resize', function() {
				self.reach(self.el);
			});*/
		},

		attachElement: function(el) {
			//_log.debug('UI.Selector._initEvents(scope,target)',scope,target);
			//var delay = 20;
			var self = this;


			//_log.debug('UI.Selector._setEventsElement',el,self.options.trigger);

			el.addEvent(self.options.trigger, function() {
				self.reach(el);
			});

			el.addEvents({
				mouseenter: function(e) {
					//e.stop();
					clearTimeout(self.timer);
				},
				mouseover: function(e) {
					//self.reach(el);
					//e.stop();
					clearTimeout(self.timer);
				}
			});

			/*pages.addEvent('resize', function() {
				self.reach(self.el);
			});*/
		},


		_initElement: function(components) {
			var self = this;

			this.wrapper = new Element('div', {
					'class': this.options.wrapper.clss,
					zIndex: this.options.zIndex
				}).set('data-selector', this.options.name)
				.inject(this.options.container, 'top');

			components.each(function(name) {
				//_log.debug('Selector _initElement',name);
				self.options[name].content = self.options.container;
				var build = 'build' + name.capitalize();
				if (!self.options[name].usefx) {
					self.options[name].usefx = self.options.usefx;
				}

				self.selectors.push(self[build](self.options[name]));
			});

			if (this.isEnable()) {
				this.enable();
			} else {
				this.disable();
			}

			return this.wrapper;
		},

		buildComponent: function() {


		},

		buildBorder: function(options) {
			var self = this;
			//_log.debug();

			options.positionning = this.options.positionning;

			this.border = new Border(this.wrapper, options);

			this.addEvents({
				show: function() {
					self.border.show();
				},
				hide: function() {
					self.border.hide();
				},
				reach: function(el) {
					self.border.reach(el);
				},
				repos: function(el) {
					self.border.reach(el);
				},
				highlight: function(color) {
					self.border.highlight(color);
				}
			});
		},

		buildMask: function(opts) {
			var self = this;

			opts.positionning = this.options.positionning;

			opts.scope = this.options.scope;

			this.mask = new Mask(this.wrapper, opts);


			this.mask.addEvent('click', function(ev) {
				self.fireEvent('click', ev);
			});

			this.addEvents({
				show: function() {
					self.mask.show();
				},
				hide: function() {
					self.mask.hide();
				},
				reach: function(el) {
					self.mask.reach(el);
				},
				repos: function(el) {
					self.mask.reach(el);
				},
				highlight: function(color) {
					self.mask.highlight(color);
				}
			});
		},

		buildResizer: function(options) {
			var self = this;

			this.resizer = new Resizer(this.wrapper, options).addEvents({
				mouseleave: function() {
					self.hide();
				},
				mouseenter: function() {
					clearTimeout(self.timer);
				}
			});

			this.addEvents({
				show: function(el) {
					self.resizer.show();
				},
				hide: function(el) {
					self.resizer.hide();
				},
				reach: function(el) {
					self.resizer.reach(el);
				},
				repos: function(el) {
					self.resizer.reach(el);
				}
			});
		},

		buildMenu: function(options) {
			//_log.debug('buildMenu', this.options.name, options);

			var self = this;
			//var left = null;
			//var right = null;

			// _log.debug( this.wrapper, options);

			options.positionning = this.options.positionning;

			this.menu = new Menu(this.wrapper, options);

			if (this.options.timerOnHide) {
				this.menu.element.addEvents({
					mouseleave: function() {
						self.hide();
					},
					mouseenter: function() {
						clearTimeout(self.timer);
					}
				});
			}

			this.addEvents({
				show: function() {
					self.menu.element.show();
				},
				hide: function() {
					self.menu.element.hide();
				},
				reach: function(el) {
					self.menu.reach(el);
				},
				repos: function(el) {
					self.menu.reach(el);
				},
				highlight: function(color) {
					self.menu.element.highlight(color);
				}
			});
		},


		buildStatus: function(options) {
			//_log.debug('buildMenu', this.options.name, options);

			var self = this;
			//var left = null;
			//var right = null;

			//_log.debug( this.wrapper);

			this.status = new Status(this.wrapper, options);

			if (this.options.timerOnHide) {
				this.status.element.addEvents({
					mouseleave: function() {
						self.hide();
					},
					mouseenter: function() {
						clearTimeout(self.timer);
					}
				});
			}

			this.addEvents({
				show: function() {
					self.status.element.show();
				},
				hide: function() {
					self.status.element.hide();
				},
				reach: function(el) {
					self.status.reach(el);
				},
				repos: function(el) {
					self.status.reach(el);
				},
				highlight: function(color) {
					self.status.element.highlight(color);
				}
			});
		},

		_initOverlay: function() {
			var self = this;

			this.overlay = new Overlay({
				container: this.options.container
			}).addEvents({
				click: function() {
					self.fireEvent('click', self.el);
				},
				dblclick: function() {
					self.fireEvent('dblclick', self.el);
				}
			});

			if (this.options.timerOnHide) {
				this.overlay.element.addEvents({
					mouseleave: function() {
						clearTimeout(self.timer);
						self.hide();
					},
					mouseenter: function() {
						//_log.debug('enteroverlay');
						clearTimeout(self.timer);
					}

				});
			}

			this.addEvents({
				show: function(el) {
					self.overlay.show();
				},
				hide: function(el) {
					self.overlay.hide();
				},
				reach: function(el) {
					self.overlay.reach(el);
				},
				repos: function(el) {
					self.overlay.reach(el);
				},
				highlight: function(color) {
					self.overlay.highlight(color);
				}
			});
		},

		reach: function(el) {
			if (el) {
				this.el = el;
			} else if (this.el) {
				el = this.el;
			} else {
				return;
			}

			//_log.debug('reach',el);

			if (this.isEnable) {
				this.show();
				this.fireEvent('reach', el);
			}
		},

		repos: function(el) {
			if (el) {
				this.el = el;
			} else if (this.el) {
				el = this.el;
			} else {
				return;
			}

			if (this.isEnable) {
				this.show();
				this.fireEvent('repos', el);
			}
		},

		set: function(name, value, name) {
			//_log.debug(name, value, name);

			var self = this;

			if (name) {
				this[name][name](value);
			} else {
				this.selectors.each(function(name) {
					self[name][name](value);
				});
			}

			return this;
		},

		/*

				Note: Should be cool if we can also add and remove selectors

		*/
		add: function(type) {

		},

		remove: function(type) {

		},

		hide: function() {
			clearTimeout(this.timer);
			this.timer = (function() {
				this.fireEvent('hide');
			}).delay(this.options.timerOnHide, this);
		},

		hideNow: function() {
			clearTimeout(this.timer);
			this.fireEvent('hide');
		},

		show: function() {
			clearTimeout(this.timer);
			if (this.isEnable) {
				this.fireEvent('show');
			}
		},

		highlight: function(color) {
			if (this.isEnable) {
				this.fireEvent('highlight', color);
			}
		},

		enable: function(selector) {
			//_log.debug('enable', this.options.name);

			this.isEnable = true;
			Cookie.write(this.name, '1', this.options.cookie);
			//this.show();
		},

		disable: function(selector) {
			//_log.debug('disable', this.options.name);

			this.isEnable = false;
			Cookie.write(this.name, '0', this.options.cookie);
			this.hideNow();
		},

		isEnable: function() {
			if (Cookie.read(this.name) === '1') {
				return true;
			} else {
				return false;
			}
		},

		toggle: function() {
			if (Cookie.read(this.name) === '1') {
				this.disable();
			} else {
				this.enable();
			}
		}

	});

	return exports;

});
