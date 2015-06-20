
/**
 * UI Menu Class
 * @class UI.Menu
 * @extends {UI.Component}
 * @type {Class}
 */
define([
	"UI/Container/Container"
], function(
	Container
) {

	var exports = UI.Menu = new Class({

		Extends: Container,


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

		initialize: function(options){
			//console.log('meni init');
			this.setOptions(options);

			this.timer = null;

			if (this.options.type == 'drop')
				this.state = 'close';
			else this.state = 'open';

			this.item = {};
			this.menus = [];

			this._initElement();
			this._initComponent();
			this._initEvents();

			ui.menu.register(this);

			return this;
		},

		/*
		Function: _initElement
			private function

			Call UI.Component _initElement, then create a menu wrapper

		Return:
			(void)

		See also:
			<UI.Component::_initElement>
		*/
		_initElement: function(){
			var self = this,
				opts = this.options;

			//_log('UI.MEnu._initElement()', opts);

			this.element = new Element('div', {
				'class': 'ui-menu',
				'zIndex': opts.zIndex
			});

			this.element.addClass('menu-'+opts.name);

			if (opts.klss)
				this.element.addClass(opts.klss);

			if (opts.type)
				this.element.addClass('type-'+opts.type);

			this._initHead(opts.head);

			this.content = new Element('ul', {
				'class': 'menu-list'
			}).inject(this.element);

			this.addEvents({
				show: function() {
					self.content.getStyle('display', 'block');
				},
				hide: function() {
					self.content.getStyle('display', 'none');
				}
			});

			if (opts.open)
				this.display = this.content.getStyle('display', 'block');

			this.element.addEvent('click', function(e){
				e.stop();
			});
		},

		/*
		Function: _initHead
			private function

			Call UI.Component _initHead, then create a menu wrapper

		Return:
			(void)

		See also:
			<UI.Component::_initHead>
		*/
		_initHead: function() {
			var self = this,
				opts = this.options;
				trigger = opts.trigger;

			if (!opts.head) return;

			head = new Element('div', {
				'class': 'menu-head',
				html: opts.head.text
			}).inject(this);

			head.addEvent(trigger , function() {
				self.toggle();
			});

			this.addEvents({
				show: function() {
					this.head.addClass('open');
				},
				hide: function() {
					this.head.removeClass('open');
				},
				change: function(value) {
					//_log('change',value);
					if (opts.showValue && self.head)
						self.head.set('html', value);
				}
			});

			if (opts.head.klss)
				head.addClass(opts.head.klss);

			this.head = head;
		},

		/*
		Function: _initComponent
			private function

			Process the node object and inject the initialized component in the content of the container.

		Return:
			(void)

		Note:
			Override UI.Component._initComponent

		See also:
			<UI.Component::_initHead>
		*/
		_initComponent: function() {
			var self = this,
				opts = this.options,
				node = opts.menu,
				container = this.content;

			//_log(node);

			node.each(function(comp, i){
				if (!comp.text)
					comp.text = null; // comp.name;
					//comp.text = comp.name;

				var component = opts.item.component.capitalize();

				//_log('---',comp);
				var itemopts = comp;
				//var itemopts = Object.merge(opts.item.options, comp);
				_log('---',itemopts);
				// instantiate de menu component

				var item = new UI[component](itemopts);

				self.item[comp.name] = item;

				if (comp.klss)
					item.element.addClass(comp.klss);

				if (comp.type)
					item.addClass('type-'+comp.type);

				if (comp.state)
					item.setState(comp.state);

				this.menus.push(comp);
				//this.item[comp.name]

				if (comp.selected)
					self.select(item);

				if (comp.call) {
					item.element.addEvents({
						click: function(e) {
							//_log('click event menu', opts.hideOnCall, opts.type);
							//e.stop();
							self.fireEvent('change', this.get('data-name'));
							self.fireEvent('select', this);
							if (opts.type === 'drop' && opts.hideOnCall)
								self.hideNow();

							if (self.name === 'context')
								self.hideNow();
						}
					});
				} else if (comp.emit) {
					item.element.addEvents({
						click: function(e) {
							e.stop();
							self.fireEvent(comp.emit);
						}
					});
				} else {
					item.element.addEvents({
						click: function(e) {
							e.stop();
							if (self.state === 'disabled') return;
							//_log('---',opts.type);
							self.value = this.get('data-name');
							self.fireEvent('change', this.get('data-name'));
							self.fireEvent('selectItem', comp);

							if (opts.type === 'push') {
								_log('select', this);
								self.fireEvent('select', this);
							}
							else if (opts.type === 'drop')
								self.hideNow();
						}
					});
				}

				item.inject(this.content);

			},this);
		},

		_initEvents: function() {

			//_log('_initEvents',this.options.name);
			var self = this,
				opts = this.options;

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
				//_log('push',this);
				this.addEvents({
					'select': function(menu) {
						_log('mmm', menu.get('data-name'));
						self.select(menu.get('data-name'));
					}
				});
			}
		},

		select: function(menu) {
			//console.log('select', menu);
			if (menu === false || menu === null) {
				if (this.selected) {
					//_log('selected');
					this.selected.removeClass('state-active');
					this.selected.removeClass('state-checked');
				}
				return;
			}

			if (typeOf(menu) === 'string') {
				menu = this.element.getElement('[data-name="'+ menu +'"]');
			}

			if (!menu) return;

			if (this.selected) 
				this.selected.removeClass('state-active');

			menu.addClass('state-active');
			this.selected = menu;
		},

		unselect: function(menu) {

			var self = this;
			//_log(typeOf(menu));

			if (typeOf(menu) === 'string') {
				menu = this.element.getElement('[name="'+ menu +'"]');
			}

			if (!menu) return;

			if (self.selected)
				self.selected = null;

			menu.removeClass('state-active');
			menu.removeClass('state-checked');
		},

		deselect: function() {
			if (!this.selected) return;

			this.selected.removeClass('state-active');
			this.selected.removeClass('state-checked');
		},

		getSelected : function() {

		},

		toggle: function() {
			if (this.state === 'open') {
				this.setState('close');
			} else {
				this.setState('open');
			}

			this.fireEvent('toggle');
		},

		toggleFold: function() {
			if (this.state === 'folded') {
				this.setState('unfolded');
			} else {
				this.setState('floded');
			}

			this.fireEvent('toggle');
		},


		hide: function(){
			clearTimeout(this.timer);
			this.timer = (function() {
				this.close();
			}).delay(this.options.timerOnHide,this);
		},

		hideNow: function(){
			this.close();
		},

		shut: function() {
			this.setState('close');

			this.fireEvent('closed');
		},

		close: function() {
			this.setState('close');

			this.fireEvent('closed');
		},

		open: function() {
			this.setState('open');

			this.fireEvent('opened');
		}
	});

	return exports;
});
