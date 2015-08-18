
/**
 * UI COntrol ButtonMenu Class
 * @class UI.Control.ButtonMenu
 * @extends {UI.Control}
 * @type {Class}
 */
define([
	'UI/Control/Button',
	'UI/Control/Separator'
], function(
	Button
) {

	var exports = new Class({

		Extends: Button,

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

			_log.debug();

			this.control = {};
		},

		/**
		 * [_initToolbarComp description]
		 * @type {[type]}
		 */
		_initMenu: function(opts) {
			_log.debug('_initMenu');
			var self = this,
				list = opts.list,
				timer = null;
			//_log.debug(opts.list, this.element);

			opts.list = opts.list || [];
			//_log.debug(this.element);
			this.container = $(this.element).getParent();
			//_log.debug(this.container);

			

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
			//_log.debug(size);

			this.menu.setStyles({
				top: coord.top,
				right: coord.right

			});

			_log.debug(this.menu);
		},

		/**
		 * [_initMenuPosition description]
		 * @return {[type]} [description]
		 */
		_initMenuPosition: function() {
			//_log.debug('_initMenuPosition');
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
				clss = 'UI/Control/Button',
				comp,
				opts;


			// init class
			var l = name.split(/\:\:/);

			name = l[0];
			l.splice(0,1);

			var klss = l.join(' ');


			if (name === 'separator')
				clss = 'UI/Control/Separator';

			if (def && def.clss)
				clss = def.clss;

			if (def && def.opts) {
				opts = def.opts;
				_log.debug('--', name, def.opts);
				opts.text = Locale.get('control.'+name, name) || name;
				opts.icon = mnml.icon.font[name] || 'mdi-action-help';
				opts.tag = 'span';
			} else {
				opts = {
					name: name,
					icon: mnml.icon.font[name] || 'mdi-action-help'
				};
			}

			if (!name) return;

			if (clss === 'UI/Control/Button' || clss === 'UI/Control/ButtonMenu') {
				opts.text = Locale.get('control.'+name, name) || name;
			}


			this._requireModule(clss, function(Clss) {

				//_log.debug('----', name, opts);
				self.control[name] = new Clss(opts).inject(element);
				
				if (clss === 'UI/Control/Button') {
					self.control[name].addEvents({
						press: function() {
							var name =  this.options.name;
							_log.debug('press', name, this.isEnable());
							if (this.isEnable()) {
								//self.fireEvent('control::'+name, this);
								self.fireEvent('press', name);
								
							}
							self.menu.hide();
						}
					});
				}
			});
		},

		/**
		 * [_requireView description]
		 * @return {[type]} [description]
		 */
		_requireModule: function(module, cb) {
			//_log.debug('_requireModule', module);
			if (typeOf(module) === 'class') {
				cb(module);
				return;
			}

			require([module], function(Class) {
				cb(Class);
			}, function(err) {
				//_log.debug('ERROR', err);
				cb();
			});
		},

		/**
		 * [_onElementMouseDown description]
		 * @param  {event} e [description]
		 * @return {[type]}   [description]
		 */
		_onClick: function(e) {
			_log.debug('_onElementClick');
			var opts = this.options;
			e.stopPropagation();
			
			if (!this.menu) this._initMenu(opts);

			this.menu.setStyle('display', 'block');
		}
	});

	return exports;
});
