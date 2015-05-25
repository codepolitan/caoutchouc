
/**
 * UI COntrol ButtonMenu Class
 * @class UI.Control.ButtonMenu
 * @extends {UI.Control}
 * @type {Class}
 */
UI.ButtonMenu = new Class({

	Extends: UI.Button,

	name: 'button',

	options: {
		name: 'button',
		type: 'action', // push, file
	},

	/**
	 * [_initElement description]
	 * @return {[type]} [description]
	 */
	_initElement: function(){
		this.parent();

		this.control = {};
	},

	/**
	 * [_initToolbarComp description]
	 * @type {[type]}
	 */
	_initMenu: function(opts) {
		//_log('_initMenu');
		var self = this,
			list = opts.list,
			timer = null;
		//_log(opts.list, this.element);

		opts.list = opts.list || [];
		//console.log(this.element);
		this.container = $(this.element).getParent();
		//console.log(this.container);

		

		var menu = this.menu = new Element('ul', {
			class: 'button-menu'
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
		}).inject(this.container, 'bottom');


		for (var i= 0; i < opts.list.length; i++) {
			var name = opts.list[i];
			var def = opts.list[name];
			this._initItem(name, def, this.menu);
		}

		var coord = this._initMenuPosition();
		var size = this.menu.getSize();
		//_log(size);

		this.menu.setStyles({
			top: coord.top,
			right: coord.right

		});

		_log(this.menu);
	},

	_initMenuPosition: function() {
		//_log('_initMenuPosition');
		var container = this.container.getParent().getCoordinates();
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
	_initItem: function(name, def, element){
		var self = this,
			clss = 'UI.Button',
			comp,
			opts,
			comps = name.split(/\./);

		if (comps.length > 1) {
			clss = 'UI.'+comps[0].capitalize();
			name = comps[1];
		} 

		if (name == 'separator')
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

		if (typeof name == 'string')

		if (!name) return;

		var	Clss = mnml.strToClss(clss);

		if (clss == 'UI.Button' || clss == 'UI.ButtonMenu')
			opts.text = Locale.get('control.'+name, name) || name;

		//_log('n', n, opts);
		var role = floor.controller.session.role;
		var inject = true;

		this.options.control = this.options.control || {};

		if (!this.options.control[role]) {
			inject = true;
		} else {
			if (!this.options.control[role].disallowed) {
				inject = true;
			} else if (this.options.control[role].disallowed.indexOf(name) > -1) {
				inject = false;
			}
		}

		if (inject) {
			//console.log('----', name, opts);
			this.control[name] = new Clss(opts).inject(element);
			
			if (clss == 'UI.Button')
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
		}
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
