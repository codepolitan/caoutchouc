
var UI = UI || {},
	Class = Class || function() {},
	Locale = Locale || {},
	mnml = mnml || {},
	floor = floor || {};

/**
 * @class UI.Button
 * @extends {UI.Control}
 * @type {Class}
 */
UI.Dropdown = new Class({

	Extends: UI.Field,

	name: 'dropdown',

	options: {
		name: 'dropdown',
		type: 'text', // push, file
	},

	/**
	 * [_initElement description]
	 * @return {[type]} [description]
	 */
	_initElement: function(){
		this.parent();

		this.control = {};

		this.element.addClass('type-dropdown');

		var opts = this.options;

		this.readonly = opts.read;

		if (!this.readonly) {
			this._initMenu(opts);
			this._initEvents();
		} else {
			this.input.set('readonly','readonly');
		}

		this._initIcon();
	},

	/**
	 * [_initIcon description]
	 * @return {[type]} [description]
	 */
	_initIcon: function() {
		var self = this;

		new UI.Button({
			'clss': 'right',
			type: 'icon',
			name: 'movedown',
			icon: 'icon-times-circle',
		}).inject(this.element, 'top').addEvent('press', function() {
			self.menu.setStyle('display', 'block');
		});
	},

	/**
	 * [_initEvents description]
	 * @return {[type]} [description]
	 */
	_initEvents: function() {
		var self = this;

		if (this.readonly) return;

		this.addEvents({
			press: function(name) {
				self.input.set('value', name);
				self.fireEvent('change', name);
			}
		});

		this.input.addEvents({
			mousedown: function() {
				self.menu.setStyle('display', 'block');
			}
		});
	},

	/**
	 * [_initToolbarComp description]
	 * @type {[type]}
	 */
	_initMenu: function(opts) {
		//_log('_initMenu', opts);
		var self = this,
			//list = opts.list,
			timer = null;

		opts.list = opts.list || [];

		this.container = this.element.getParent();

		var value = self.input.get('value');

		var menu = this.menu = new Element('ul', {
			class: 'ui-menu',
			styles: {
				display: 'none'
			}
		}).addEvents({
			mouseleave: function() {
				clearTimeout(timer);
				timer = setTimeout(function() {
					menu.setStyle('display', 'none');
				}, 500);
			},
			mouseenter: function() {
				clearTimeout(timer);
			},
			click: function() {
				menu.setStyle('display', 'none');
			}
		}).inject(this.element, 'bottom');


		for (var i= 0; i < opts.list.length; i++) {
			var name = opts.list[i];
			var def = opts.list[name];
			this._initItem(name, def, this.menu, value);
		}


		//_log('menu coord', menu.getCoordinates());
		//menu.setStyle('display', 'none');

		return menu;
	},

	/**
	 * [_initMenuPosition description]
	 * @return {[type]} [description]
	 */
	_initMenuPosition: function() {
		//_log('_initMenuPosition');
		//var container = this.container.getParent().getCoordinates();
		var coord = this.element.getCoordinates(this.container);

		return coord;
	},

	/**
	 * [_initItem description]
	 * @param  {[type]} name    [description]
	 * @param  {[type]} def     [description]
	 * @param  {[type]} element [description]
	 * @return {[type]}         [description]
	 */
	_initItem: function(name, def, element, value){
		var self = this,
			clss = 'UI.Button',
			comp,
			opts,
			comps = name.split(/\./);

		if (comps.length > 1) {
			clss = 'UI.'+comps[0].capitalize();
			name = comps[1];
		} 

		if (name === 'separator')
			clss = 'UI.Separator';

		if (def && def.clss)
			clss = def.clss;

		if (def && def.opts) {
			opts = def.opts;
			console.log('--', name, def.opts);
			opts.text = Locale.get('control.'+name, name) || name;
			opts.icon = mnml.icon.font[name] || 'mdi-action-help';
			opts.tag = 'span';
		} else {
			opts = {
				name: name,
				icon: mnml.icon.font[name] || 'mdi-action-help'
			};
		}

		if (typeof name === 'string')

		if (!name) return;

		var	Clss = mnml.strToClss(clss);

		if (clss === 'UI.Button' || clss === 'UI.ButtonMenu')
			opts.text = Locale.get('control.'+name, name) || name;

		//_log('n', n, opts);
		var role = floor.controller.session.role;

		this.options.control = this.options.control || {};

		//console.log('----', name, opts);
		this.control[name] = new Clss(opts).inject(element);

		if (clss === 'UI.Button')
		this.control[name].addEvents({
			press: function() {
				var name =  this.options.name;
				//_log('press', name, this.isEnable());
				if (this.isEnable()) {
					//self.fireEvent('control::'+name, this);
					self.fireEvent('press', name);
				}
				self.menu.hide();
			}
		});
	},

	/**
	 * [_onElementMouseDown description]
	 * @param  {event} e [description]
	 * @return {[type]}   [description]
	 */
	_onClick: function(e) {
		//_log('_onElementClick');
		var opts = this.options;
		e.stopPropagation();

		if (!this.menu) this._initMenu(opts);

		this.menu.setStyle('display', 'block');
	}

});
