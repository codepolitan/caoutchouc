
/**
 * @class UI.Button
 * @extends {UI.Control}
 * @type {Class}
 */
UI.ButtonMenu = new Class({

	Extends: UI.Button,

	name: 'button',

	options: {
		name: 'button',
		type: null, // push, file
		element: {
			tag: 'button'
		},
		binding: {
			_list: ['element'],
			element: {
				'element.click': '_onElementClick',
				'element.dblclick': '_onElementClick',
				'element.mousedown': '_onElementMouseDown',
				'element.mouseup': '_onElementMouseUp'
			}
		}
	},

	set: function() {},

	/**
	 * [_initElement description]
	 * @return {[type]} [description]
	 */
	_initElement: function(){
		this.parent();


		this._initMenu(this.options);

	},


	/**
	 * [_initToolbarComp description]
	 * @type {[type]}
	 */
	_initMenu: function(opts) {
		var self = this;

		_log(opts.list, this.element);

		opts.list = opts.list || [];

		for (var i= 0; i < opts.list.length; i++) {
			var name = opts.list[i];
			var def = opts.list[name];
			this._instanciateComp(name, def, this.element);
		}
	},

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
			opts.icon = mnml.control.button[name] || 'mdi-action-help';
		} else {
			opts = {
				name: name,
				icon: mnml.control.button[name] || 'mdi-action-help',
				type: 'action'
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
			console.log('----', name, opts);
			this.control[name] = new Clss(opts).inject(element);
			
			 this.control[name].addEvents({
				change: function(value) {
					//var name =  this.options.name;
					_log('change', this);
					if (this.isEnable())
						self.fireEvent(name, value);
				}
			});

			if (clss == 'UI.Button')
			this.control[name].addEvents({
				press: function() {
					//var name =  this.options.name;
					_log('press', name, this.isEnable());
					if (this.isEnable()) {
						self.fireEvent('control::'+name, this);
						self.fireEvent(name, [self]);
					}
				}
			});
		}
	},


	/**
	 * [_onElementMouseDown description]
	 * @param  {event} e [description]
	 * @return {[type]}   [description]
	 */
	_onElementMouseDown: function(e) {
		
		e.stop();
		
		var x = e.event.layerX;
		var y = e.event.layerY;
		//console.log('mousedown', x, y);

		coord = this.element.getCoordinates(this.element);

		var inner = new Element('span', {
			class: 'button-reaction',
			styles: {
				left: x,
				top: y,

			}
		}).inject(this.element, 'top');

		this._initReaction(inner, x, y, coord);

		this.fireEvent('mousedown');
	},


	/**
	 * [_onElementMouseDown description]
	 * @param  {event} e [description]
	 * @return {[type]}   [description]
	 */
	_onElementClick: function(e) {
		var opts = this.options;
		e.stopPropagation();
		if (opts.emit && this.state != 'disabled')
			this.fireEvent(opts.emit);
			this.fireEvent('press', opts.emit);
			this.fireEvent('pressed', opts.emit);

		if (opts.call && this.state != 'disabled')
			opts.call();
	}
});
