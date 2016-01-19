/**
 * UI Component Drag
 * @class UI.Component.Drag
 * @author Jerome D. Vial
 */
define([
	'utils/api',
], function(
	api
) {

	var _log = __debug('ui:layout').defineLevel();

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
		 * @param  {Object} comp list component
		 * @return {void}
		 */
		_initComponent: function(comp) {
			_log.debug('_initComponent', comp.opts.name, comp);

			// shortcuts
			comp.opts.flex = comp.opts.flex || comp.flex;
			comp.opts.hide = comp.opts.hide || comp.hide;
			comp.opts.theme = comp.opts.theme || comp.theme;

			//_log.debug('comp', comp.clss);

			var name = comp.opts.name;
			var clss = api.strToClss(comp.clss);

			//comp.opts.container = comp.container;
			var component = this.component[name] = this[name] = new clss(comp.opts);

			//_log.debug(component.container);

			// register component
			this._componentRegister(name, component);

			//settings
			this._initComponentSettings(component);

			// styles and size
			this._setComponentStyles(component);
			this._setComponentDisplay(component);
			this._attachComponentEvents(component);

			return component;
		},

		/**
		 * [_componentRegister description]
		 * @param  {[type]} name      [description]
		 * @param  {[type]} component [description]
		 * @return {[type]}           [description]
		 */
		_componentRegister: function(name, component) {
			//_log.debug('_componentRegister', name, component);

			this.components = this.components || [];
			this.components.push(component);
		},

		/**
		 * [_initComponentSettings description]
		 * @param  {Object} component
		 * @return {void}
		 */
		_initComponentSettings: function(component) {
			_log.debug('_initcompSettings', component);

			//var name = component.getName();
			//var element = component.element;
		},

		/**
		 * initComponentSettings
		 * @param  {Object} component
		 * @return {void}
		 */
		_setComponentStyles: function(component) {
			_log.debug('_setComponentStyles', component);

			if (component.options.flex) {
				//component.element.setStyle('flex', component.options.flex);
				component.element.addClass('flex-' + component.options.flex);
			}

			if (component.options.hide) {
				component.element.setStyle('display', 'none');
			}

			if (component.options.theme) {
				component.element.addClass('theme' + '-' + component.options.theme);
			}
		},

		/**
		 * initSize
		 * @param  {Object} component
		 * @return {void}
		 */
		_setComponentDisplay: function(component) {
			_log.debug('comp opts', component.options);

			var name = component.getName();
			var element = component.element;
			var settings = this.settings[name];

			var display = 'normalized';
			if (settings && settings.display) {
				display = settings.display;
			}

			component.setDisplay(display, 'width');

			if (!component.options.flex) {
				if (settings && component.options.axis === 'x') {
					//element.setStyle('flex', 'none');
					element.addClass('flex-none');

					if (display === 'minimized') {
						element.setStyle('width', 0);
					} else {
						if (settings.width < 32) {
							settings.width = 32;
						}

						element.setStyle('width', settings.width || null);
					}

					component.width = settings.width || 260;
					component._modifier = 'width';
				} else if (settings && component.options.axis === 'y') {
					element.setStyle('flex', 'none');
					element.setStyle('height', settings.height || null);
					component.height = settings.height || 260;
					component._modifier = 'height';
				}

				this._initResizer(component);
			}
		},

		/**
		 * _attachComponentEvents
		 * @param {Object} component
		 * @return {void}
		 */
		_attachComponentEvents: function(component) {
			var self = this;
			var name = component.getName();

			component.addEvents({
				toggled: function() {
					//_log.debug('toggled');
					self.fireEvent('resize');
				},
				resizing: function() {
					//_log.debug('toggled');
					self.fireEvent('resize');
				},
				display: function(state) {
					//_log.debug('display', name, state);
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
					component.fireEvent('device', device);
				}
			});

		}

	});

	return exports;

});
