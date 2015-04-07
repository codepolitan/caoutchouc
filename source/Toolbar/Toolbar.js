
/**
* Minimalistic Implement for Minimal.View Class
*
* @implement Minimal.View
* @author Jerome Vial, Bruno Santos
*/
var UI = UI || {};

UI.Toolbar = new Class({

	/*	Implements: [Events, Options, Minimal.Binding],*/

	/**
	 * Initialize Toolbar
	 *
	 * @method _initToolbar
	 * @param {obj}
	 * @api private
	 */
	_initToolbar: function(obj) {
		//_log('_initToolbar', obj);
		this.toolbar = {};
		this.control = {};

		if (!obj.list) return;

		for (var i = 0; obj.list.length > i; i++) {
			var name = obj.list[i];
			var bar = obj[name];
			if (!bar)  continue;
			//_log(name, bar.container);

			if (!this.container[bar.container]) {
				if (!bar.container) continue;
				this.container['_init'+bar.container.capitalize()]();
			}

			var element = this.toolbar[name] = new Element('div', {
				'class': 'ui-toolbar'
			}).addEvents({
				
			}).inject(this.container[bar.container]);

			if (bar.klss)
				element.addClass(bar.klss);

			element.addClass('toolbar-' + name);

			this._initToolbarComp(bar, element);
		}

		this._initMore();

		this.container.fireEvent('resize');
		this.fireEvent('toolbarReady');

	},

	/**
	 * [_initMore description]
	 * @type {[type]}
	 */
	_initMore: function() {
		//_log('_initMore', this.container, this.control.more, this.toolbar.more);
		if (!this.control || !this.toolbar) return null;

		var timer = null;

		var toolbar = this.toolbar.more;
		var control = this.control.more;

		if (control && toolbar) {

			control.addEvent('press', function(ev) {
				var coord = control.getCoordinates();
				toolbar.setStyles({
					display: 'inline-block'
				});

				return true;
			});

			this.addEvent('control::pressed', function() {
				toolbar.setStyle('display', 'none');
			});

			toolbar.addEvents({
				mouseleave: function() {
					clearTimeout(timer);
					timer = setTimeout(function() {
						toolbar.setStyle('display', 'none');
					}, 500);
				},
				mouseenter: function() {
					clearTimeout(timer);
				},
				click: function() {
					toolbar.setStyle('display', 'none');
				}
			});
		}
	},

	/**
	 * [_initToolbarComp description]
	 * @type {[type]}
	 */
	_initToolbarComp: function(bar, element) {
		var self = this;

		//_log(bar, element);

		bar.list = bar.list || [];

		for (var i= 0; i < bar.list.length; i++) {
			var name = bar.list[i];
			var def = bar[name];
			this._instanciateComp(name, def, element);
		}
	},

	/**
	 * [_instanciateComp description]
	 * @param  {[type]} name    [description]
	 * @param  {[type]} def     [description]
	 * @param  {[type]} element [description]
	 * @return {[type]}         [description]
	 */
	_instanciateComp: function(name, def, element){
		//_log('_instanciateComp',name, def/*, element*/);

		var self = this,
			clss = 'UI.Button',
			opts;

			var l = name.split(/\:\:/);

			name = l[0];
			l.splice(0,1);

			var klss = l.join(' ')

			comps = name.split(/\./);

		// get properties


		if (comps.length > 1) {
			clss = 'UI.'+comps[0].capitalize();
			name = comps[1];
		}

		if (name == 'separator')
			clss = 'UI.Separator';

		if (def && def.clss)
			clss = def.clss;

		if (name == 'add')
			_log('----', klss);

		if (def && def.opts) {
			if (name == 'add')
			_log('----1');
			opts = def.opts;
			opts.text = Locale.get('control.'+name, name) || name;

			opts.icon = mnml.icon.mdi[name] || mnml.icon.font[name] || 'mdi-action-help';
		} else {
			if (name == 'add')
			_log('----2');
			opts = {
				name: name,
				icon: mnml.icon.font[name] || 'mdi-action-help',
				type: 'action',
				klss: klss
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

			this.control[name].addEvents({
				change: function(value) {
					//var name =  this.options.name;
					//_log('change', this);
					if (this.isEnable())
						self.fireEvent(name, value);
				}
			});

			if (clss == 'UI.Button') {
				this.control[name].addEvents({
					press: function() {
						self.fireEvent('control::pressed');
						//var name =  this.options.name;
						//_log('press', name, this.isEnable());
						if (this.isEnable()) {
							self.fireEvent('control::'+name, this);
							self.fireEvent(name, [self]);
						}
					}
				});
			}

			if (clss == 'UI.Field') {
				this.control[name].addEvents({
					change: function() {
						//_log('change', name, this.isEnable());
						self.fireEvent('control::pressed');
						//var name =  this.options.name;
						//_log('press', name, this.isEnable());
						if (this.isEnable()) {
							self.fireEvent('control::'+name, this);
							self.fireEvent(name, [self]);
						}
					}
				});
			}


			if (clss == 'UI.ButtonMenu') {
				this.control[name].addEvents({
					press: function(name) {
						self.fireEvent('control::pressed');
						//var name =  this.options.name;
						_log('ButtonMenu press', name, this.isEnable());
						if (this.isEnable()) {
							self.fireEvent('control::'+name, this);
							self.fireEvent(name, [self]);
						}
					}
				});
			}
		}
	},

	/**
	 * Add Toolbar
	 *
	 * @method addToolbar
	 * @param {toolbar}
	 * @param {context}
	 * @api public
	 */
	addToolbar: function(toolbar, context) {
		//_log('initToolbar', toolbar, this.container);
		new UI.Toolbar({
			item: item
		}).inject(self.container[toolbar.container]);
	}
});
