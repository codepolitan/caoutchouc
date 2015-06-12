
/**
 * UI Component Drag
 * @class UI.Component.Drag
 * @author Jerome D. Vial
 */
define([
	
], function(

) {

	var exports = new Class({
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

			// shortcuts
			comp.opts.flex = comp.opts.flex || comp.flex;
			comp.opts.hide = comp.opts.hide || comp.hide;
			comp.opts.theme = comp.opts.theme || comp.theme;

			_log('comp', comp.clss);

			var name = comp.opts.name;
			var clss = mnml.strToClss(comp.clss);

			//comp.opts.container = comp.container;
			var component = this.component[name] = this[name] = new clss(comp.opts);
			
			//_log(component.container);

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
				//component.element.setStyle('flex', component.options.flex);
				component.element.addClass('flex-'+component.options.flex);
			}

			if (component.options.hide) {
				component.element.setStyle('display', 'none');

			}

			if (component.options.theme) {
				component.element.addClass('theme' + '-' + component.options.theme);

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

			
			var name = component.getName();
			var element = component.element;

			if (this.settings[name] && this.settings[name].display) {
				display = this.settings[name].display;
			}

			component.setDisplay(display, 'width');

			if (component.options.flex) {
				//console.log('---flex', name, component.options);
			} else {
				
				if (this.settings[name] && this.settings[name].width) {
					//_log('settings', name, display);
					//element.setStyle('flex', 'none');
					element.addClass('flex-none');
					if (display === 'minimized') {
					
						element.setStyle('width', 0);
					} else {
						
						if (this.settings[name].width < 32)
							this.settings[name].width = 32;

						
						//console.log('----', name, element);
						element.setStyle('width', this.settings[name].width || 160);
					}

					component.width = this.settings[name].width || 200;
					component._modifier = 'width';
				} else if (this.settings[name] && this.settings[name].height) {
					element.setStyle('flex', 'none');
					element.setStyle('height', this.settings[name].height);
					component.height = this.settings[name].height || 160;
					component._modifier = 'height';
				}

				this._initResizer(component);
			}
		},

		/**
		 * [_attachComponentEvents description]
		 * @param  {[type]} object [description]
		 * @return {[type]}        [description]
		 */
		_attachComponentEvents: function(component) {
			var self = this;
			var name = component.getName();

			component.addEvents({
				toggled:  function() {
					//console.log('toggled');
					self.fireEvent('resize');
				},
				display: function(state) {
					//_log('display', name, state);
					self.fireEvent('display', [name, state]);
				}
			});

			this.addEvents({
				resize: function() {
					component.fireEvent('resize');
				},
				drag: function() {
					component.fireEvent('resize');
				},
				normalize: function() {
					component.fireEvent('resize');
				},
				maximize: function() {
					component.fireEvent('resize');
				},
				minimize: function() {
					component.fireEvent('resize');
				},
				device: function(device) {
					//_log('device', device);
					component.fireEvent('device', device);
				}
			});
		}
	});

	return exports;
});
