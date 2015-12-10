/**
 * UI Menu Class
 * @class UI.Menu
 * @extends {UI.Component}
 */
define([
	'UI/Window/controller',
	'UI/Container/Container',
	'UI/Control/Button'
], function(
	controller,
	Container,
	ButtonControl
) {

	var _log = __debug('ui-menu').defineLevel();

	var exports = new Class({

		Extends: Container,

		Implements: [Options, Events],

		name: 'menu',

		options: {
			base: 'component',
			name: 'menu',

			content: true,

			type: null, // drop
			menu: {
				tag: 'ul'
			},
			item: {
				component: 'button',
				options: {
					tag: 'li',
					klass: 'list-item'
				}
			},
			trigger: 'click',
			timerOnHide: 500,
			hideOnCall: true
		},

		/**
		 * initialize
		 * @param  {Object} options
		 * @return {Object}
		 */
		initialize: function(options) {
			_log.debug('menu init', options);

			this.setOptions(options);

			this.timer = null;

			if (this.options.type === 'drop') {
				this.state = 'close';
			} else {
				this.state = 'open';
			}

			this.item = {};
			this.menus = [];

			this._initElement();
			this._initComponent();
			this._initEvents();

			//ui.menu.register(this);

			return this;
		},

		/**
		 * init controller
		 * @return {void}
		 */
		_initController: function() {
			if (!ui.menu) {
				this.controller = ui.menu = controller;
			}
		},

		/**
		 * Call UI.Component _initElement,
		 * then create a menu wrapper
		 * @return {void}
		 */
		_initElement: function() {
			_log.debug('_initElement', opts);

			var self = this;
			var opts = this.options;

			this.element = new Element('div', {
				'class': 'ui-menu',
				'zIndex': opts.zIndex
			});

			this.element.addClass('menu-' + opts.name);

			if (opts.klss) {
				this.element.addClass(opts.klss);
			}

			if (opts.type) {
				this.element.addClass('type-' + opts.type);
			}

			this._initHead(opts.head);

			this.content = new Element('ul', {
				'class': 'menu-list'
			}).inject(this.element);

			this.addEvents({
				show: function() {
					_log.debug('show');
					self.content.getStyle('display', 'block');
				},
				hide: function() {
					_log.debug('hide');
					self.content.getStyle('display', 'none');
				}
			});

			if (opts.open) {
				this.display = this.content.getStyle('display', 'block');
			}

			this.element.addEvent('click', function(e) {
				e.stop();
			});
		},

		/**
		 * Call UI.Component _initHead,
		 * then create a menu wrapper
		 * @return {void}
		 */
		_initHead: function() {
			var self = this;
			var opts = this.options;
			var trigger = opts.trigger;

			if (!opts.head) {
				_log.warn('missing opts.head', opts);
				return;
			}

			var head = new Element('div', {
				'class': 'menu-head',
				html: opts.head.text
			}).inject(this);

			head.addEvent(trigger, function() {
				self.toggle();
			});

			this.addEvents({
				show: function() {
					_log.debug('show');
					this.head.addClass('open');
				},
				hide: function() {
					_log.debug('hide');
					this.head.removeClass('open');
				},
				change: function(value) {
					_log.debug('change', value);
					if (opts.showValue && self.head) {
						self.head.set('html', value);
					}
				}
			});

			if (opts.head.klss) {
				head.addClass(opts.head.klss);
			}

			this.head = head;
		},

		/**
		 * Process the node object and inject the initialized
		 * component in the content of the container
		 * @return {void}
		 */
		_initComponent: function() {
			var self = this;
			var opts = this.options;
			var node = opts.menu;
			//var container = this.content;

			_log.debug('_initComponent', node);

			node.each(function(comp) {
				if (!comp.text) {
					comp.text = null; // comp.name;
					//comp.text = comp.name;
				}

				var component = opts.item.component.capitalize();

				var itemopts = comp;
				//var itemopts = Object.merge(opts.item.options, comp);

				_log.debug('_initComponent component', component);

				// instantiate de menu component
				var item = new ButtonControl(itemopts);

				self.item[comp.name] = item;

				if (comp.klss) {
					item.element.addClass(comp.klss);
				}

				if (comp.type) {
					item.addClass('type-' + comp.type);
				}

				if (comp.state) {
					item.setState(comp.state);
				}

				this.menus.push(comp);
				//this.item[comp.name]

				if (comp.selected) {
					self.select(item);
				}

				if (comp.call) {
					item.element.addEvents({
						click: function(e) {
							_log.debug('click event menu', opts.type);
							//e.stop();
							self.fireEvent('change', this.get('data-name'));
							self.fireEvent('select', this);
							if (opts.type === 'drop' && opts.hideOnCall) {
								self.hideNow();
							}

							if (self.name === 'context') {
								self.hideNow();
							}
						}
					});
				} else if (comp.emit) {
					item.element.addEvents({
						click: function(e) {
							_log.debug('click');
							e.stop();
							self.fireEvent(comp.emit);
						}
					});
				} else {
					item.element.addEvents({
						click: function(e) {
							_log.debug('click event menu');
							e.stop();
							if (self.state === 'disabled') {
								return;
							}
							_log.debug('click', opts.type);
							self.value = this.get('data-name');
							self.fireEvent('change', this.get('data-name'));
							self.fireEvent('selectItem', comp);

							if (opts.type === 'push') {
								_log.debug('select', this);
								self.fireEvent('select', this);
							} else if (opts.type === 'drop') {
								self.hideNow();
							}
						}
					});
				}

				item.inject(this.content);

			}, this);
		},

		/**
		 * [_initEvents description]
		 * @return {[type]} [description]
		 */
		_initEvents: function() {
			_log.debug('_initEvents', this.options.name);

			var self = this;
			var opts = this.options;

			if (opts.type === 'drop') {
				if (opts.timerOnHide) {
					this.element.addEvents({
						mouseleave: function() {
							self.hide();
						},
						mouseenter: function() {
							clearTimeout(self.timer);
						}
					});
				}
			}

			if (opts.type === 'push') {
				this.addEvents({
					select: function(menu) {
						_log.debug('select', menu.get('data-name'));
						self.select(menu.get('data-name'));
					}
				});
			}
		},

		/**
		 * select
		 * @param  {[type]} menu [description]
		 * @return {[type]}      [description]
		 */
		select: function(menu) {
			_log.debug('select', menu);

			if (menu === false || menu === null) {
				if (this.selected) {
					//_log.debug('selected');
					this.selected.removeClass('state-active');
					this.selected.removeClass('state-checked');
				}
				return;
			}

			if (typeOf(menu) === 'string') {
				menu = this.element.getElement('[data-name="' + menu + '"]');
			}

			if (!menu) {
				return;
			}

			if (this.selected) {
				this.selected.removeClass('state-active');
			}

			menu.addClass('state-active');
			this.selected = menu;
		},

		/**
		 * [unselect description]
		 * @param  {[type]} menu [description]
		 * @return {[type]}      [description]
		 */
		unselect: function(menu) {
			_log.debug('unselect');

			var self = this;

			if (typeOf(menu) === 'string') {
				menu = this.element.getElement('[name="' + menu + '"]');
			}

			if (!menu) {
				return;
			}

			if (self.selected) {
				self.selected = null;
			}

			menu.removeClass('state-active');
			menu.removeClass('state-checked');
		},

		/**
		 * [deselect description]
		 * @return {[type]} [description]
		 */
		deselect: function() {
			_log.debug('deselect');

			if (!this.selected) {
				return;
			}

			this.selected.removeClass('state-active');
			this.selected.removeClass('state-checked');
		},

		getSelected: function() {

		},

		/**
		 * [toggle description]
		 * @return {[type]} [description]
		 */
		toggle: function() {
			_log.debug('toggle');

			if (this.state === 'open') {
				this.setState('close');
			} else {
				this.setState('open');
			}

			this.fireEvent('toggle');
		},

		/**
		 * [toggleFold description]
		 * @return {[type]} [description]
		 */
		toggleFold: function() {
			_log.debug('toggleFold');

			if (this.state === 'folded') {
				this.setState('unfolded');
			} else {
				this.setState('floded');
			}

			this.fireEvent('toggle');
		},

		/**
		 * [hide description]
		 * @return {[type]} [description]
		 */
		hide: function() {
			_log.debug('hide');

			clearTimeout(this.timer);
			this.timer = (function() {
				this.close();
			}).delay(this.options.timerOnHide, this);
		},

		/**
		 * [hideNow description]
		 * @return {[type]} [description]
		 */
		hideNow: function() {
			_log.debug('hideNow');

			this.close();
		},

		/**
		 * [shut description]
		 * @return {[type]} [description]
		 */
		shut: function() {
			_log.debug('shut');

			this.setState('close');

			this.fireEvent('closed');
		},

		/**
		 * [close description]
		 * @return {[type]} [description]
		 */
		close: function() {
			_log.debug('close');

			this.setState('close');

			this.element.setStyle('display', 'none');

			this.fireEvent('closed');
		},

		/**
		 * [open description]
		 * @return {[type]} [description]
		 */
		open: function() {
			_log.debug('open');

			this.setState('open');

			this.fireEvent('opened');
		}

	});

	return exports;

});
