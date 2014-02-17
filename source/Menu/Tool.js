/*
	Class: UI.Menu
		Creates a new menu, manages submenus and positionning as well

	Extends:
		<UI.Component>

	Arguments:
		options

	Options:
		- node
		- _parent - component
		- context -


		- name - (string) name of the compnent, it is automatically add to the css class
		- base - (string) base component, if define the name of it will be add the the css class

		- tag - (string) Tag name for menu elements

		- position - (string) Specify where the new menu must be positionned.
			It could be normal (element will be positionned on parent's side),
			over (element will be positionned over the parent element, used for <UI.Select>),
			bottom (element will be positionned on bottom of parent element, used for <UI.Toolbar>)

		- scrollToSelected - (boolean) Determine if a menu (specifically a <UI.Select>) should remember last item selected
		- scrollMargin - (integer) Determine remaining margin on top and bottom when a menu is too large to feet in window
		- menu - (array) Array containing menu definition

	Example:
		(start code)
		var submenu = new UI.Menu({
			container : this.container.element,
			underlay : this.options.underlay,
			zIndex : 1
		});
		(end)

	Implied global:
		- MooLego - UI,ui,
		- MooTools - Class, Element, Event, Fx, Window
		- Javascript - document

	Discussion
		Should use listView

*/


UI.Tool = new Class({

	Extends: UI.Container,

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

		//console.log('UI.MEnu._initElement()', opts);

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
				//console.log('change',value);
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

		//console.log(node);

		node.each(function(comp,i){
			if (!comp.text)
				comp.text = null; // comp.name;
				//comp.text = comp.name;

			var component = opts.item.component.capitalize();

			var itemopts = Object.merge(opts.item.options,comp);
			// console.log('---',itemopts);
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
						//console.log('click event menu', opts.hideOnCall, opts.type);
						//e.stop();

						self.fireEvent('change', this.get('name'));
						self.fireEvent('select', this);
						if (opts.type == 'drop' && opts.hideOnCall)
							self.hideNow();

						if (self.name == 'context')
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
						if (self.state == 'disabled') return;
						//console.log('---',opts.type);
						self.value = this.get('name');
						self.fireEvent('change', this.get('name'));
						self.fireEvent('selectItem', comp);

						

						if (opts.type == 'push')
							self.fireEvent('select', this);
						else if (opts.type == 'drop')
							self.hideNow();
					}
				});
			}

			item.inject(this.content);

		},this);
	},

	_initEvents: function() {

		//console.log('_initEvents',this.options.name);
		var self = this,
			opts = this.options;

		if (opts.type == 'drop') {
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


		if (opts.type == 'push') {
			//console.log('push',this);
			this.addEvents({
				'select': function(menu) {
					//console.log('mmm', menu.get('name'));
					self.select(menu.get('name'));
				}
			});
		}
	},

	select: function(menu) {

		if (menu === false || menu === null) {
			if (this.selected) {
				//console.log('selected');
				this.selected.removeClass('state-active');
				this.selected.removeClass('state-checked');
			}
			return;
		}

		if (typeOf(menu) == 'string') {
			menu = this.element.getElement('[name="'+ menu +'"]');
		}

		if (!menu) return;

		if (this.selected) 
			this.selected.removeClass('state-active');

		menu.addClass('state-active');
		this.selected = menu;
	},

	unselect: function(menu) {

		var self = this;
		//console.log(typeOf(menu));

		if (typeOf(menu) == 'string') {
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
		if (this.state == 'open') {
			this.setState('close');
		} else {
			this.setState('open');
		}

		this.fireEvent('toggle');
	},

	toggleFold: function() {
		if (this.state == 'folded') {
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
