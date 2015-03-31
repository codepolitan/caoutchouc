
/**
 * [options description]
 * @type {Object}
 */
UI.Layout.implement({
	options: {
		resizer: {
			modifier: {
				row: {
					size: 'width',
					from: 'left',
					mode: {
						y: false
					}
				},
				column: {
					size: 'height',
					from: 'top',
					mode: {
						x: false
					}
				}
			}
		}
	},

	/**
	 * Instanciate the given object comp
	 * @param  {object]} comp list component
	 * @return {[type]}      [description]
	 */
	_initComponent: function(comp) {
		//_log('_initComponent', comp.opts.name, comp);
		comp.opts.flex = comp.flex;

		var name = comp.opts.name;
		var clss = mnml.strToClss(comp.clss);

		//comp.opts.container = comp.container;
		var component = this.component[name] = this[name] = new clss(comp.opts);
		
		// register component
		this._componentRegister(name, component);

		//settings
		this._initComponentSettings(component);

		// styles and size
		this._setComponentStyles(component);
		this._setComponentDisplay(component);
		this._attachComponentEvents(component);

		// 
		
		return component;
	},

	/**
	 * [_componentRegister description]
	 * @param  {[type]} name      [description]
	 * @param  {[type]} component [description]
	 * @return {[type]}           [description]
	 */
	_componentRegister: function(name, component) {
		//_log('_componentRegister', name, component);

		this.components = this.components || [];
		this.components.push(component);
	},

	/**
	 * [_initComponentSettings description]
	 * @param  {object} name   [description]
	 * @param  {[type]} object [description]
	 * @return {[type]}        [description]
	 */
	_initComponentSettings: function(component) {
		//_log('_initcompSettings', component);

		var name = component.getName();
		var element = component.element;
	
	},

	/**
	 * [_initComponentSettings description]
	 * @param  {object} name   [description]
	 * @param  {[type]} object [description]
	 * @return {[type]}        [description]
	 */
	_setComponentStyles: function(component) {
		//_log('_setComponentStyles', component);

		if (component.options.flex) {
			component.element.setStyle('flex', component.options.flex);
		}
	},

	/**
	 * [_initSize description]
	 * @param  {[type]} name   [description]
	 * @param  {[type]} object [description]
	 * @return {[type]}        [description]
	 */
	_setComponentDisplay: function(component) {
		//_log('comp opts', component.options);
		var display = 'normalized';


		if (this.settings[name] && this.settings[name].display) {
			display = this.settings[name].display;
		};
		
		
		
		console.log('--- ', component, display);

		component.setDisplay(display, 'width');

		var name = component.getName();
		var element = component.element;

		if (component.options.flex) {
			//console.log('---flex', component.options);
		} else {
			if (this.settings[name] && this.settings[name].height) {
				element.setStyle('flex', 'none');
				element.setStyle('height', this.settings[name].height);
				component.height = this.settings[name].height;
				component._modifier = 'height';
			}

			if (this.settings[name] && this.settings[name].width) {

				//_log('settings', name, this.settings[name].width);
				element.setStyle('flex', 'none');
				if (display == 'minimized') {
					copnsole.log('isMinimized');
					element.setStyle('width', 0);
					element.hide();
				} else {
					element.setStyle('width', this.settings[name].width || 200);
				}

				component.width = this.settings[name].width || 200;
				component.size =  component.width;
				component._modifier = 'width';
			}

			this._initResizer(component);
		}
	},

	/**
	 * [_attachComponentEvents description]
	 * @param  {[type]} object [description]
	 * @return {[type]}        [description]
	 */
	_attachComponentEvents: function(object) {
		var self = this;
		object.addEvents({
			toggled:  function() {
				//console.log('toggled');
				self.fireEvent('resize');
			}
		});

		this.addEvents({
			resize: function() {
				object.fireEvent('resize');
			},
			drag: function() {
				object.fireEvent('resize');
			},
			normalize: function() {
				object.fireEvent('resize');
			},
			maximize: function() {
				object.fireEvent('resize');
			},
			minimize: function() {
				object.fireEvent('resize');
			}
		});
	}
});
