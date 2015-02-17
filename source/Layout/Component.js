
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

		this._setComponentStyles(component);
		this._setComponentSettings(component);
		this._attachComponentEvents(component);

		this.components.push(component);

		return this[name];
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
	 * [_initComponentSettings description]
	 * @param  {object} name   [description]
	 * @param  {[type]} object [description]
	 * @return {[type]}        [description]
	 */
	_setComponentSettings: function(component) {
		//_log('_initcompSettings', component);

		var name = component.getName();
		var element = component.element;
		if (this.settings[name] && this.settings[name].hidden) {
			//_log('hide', name, this.settings[name], this.settings[name].visible);
			element.setStyle('display', 'none');
			component.isOpen = false;
		} else {
			component.isOpen = true;
		}

		component._modifier = 'width';

		this._initComponentSize(component);
	},

	/**
	 * [_initSize description]
	 * @param  {[type]} name   [description]
	 * @param  {[type]} object [description]
	 * @return {[type]}        [description]
	 */
	_initComponentSize: function(component) {
		//_log('_initCompSize', name, component);
		//_log('comp opts', component.options);

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
				if (component.isOpen)
					element.setStyle('width', this.settings[name].width);
				else
					element.setStyle('width', 0);

				component.width = this.settings[name].width;
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
			}
		});
	}
});
