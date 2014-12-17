
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
	 * [_initResize description]
	 * @return {[type]} [description]
	 */
	_initResizers: function(components) {
		var len = components.length;

		// add resize Border on the right or on the bottom
		// execpt for the last one
		for (var i = 0; i < len; i++) {
			var component = components[i];
			this._initResizer(component);
			this._initMaximize(component);
		}
	},

	/**
	 * Init maximisation. dblclick trigger the toggle
	 * @param  {[type]} component [description]
	 * @return {[type]}           [description]
	 */
	_initMaximize: function(component) {
		//_log('_initMaximize', component);
		var element = component.element;
		var container = component.container;

		if (!container) return;

		component.addEvent('max', function() {
			var name = component.options.name;
			//_log('max', component);
			if (element.hasClass('container-max')) {
				element.removeClass('container-max');
				container.getChildren('.ui-container').each(function(c) {
					c.setStyle('display', c.retrieve('display'));
				});

				element.setStyle('width', element.retrieve('width'));
				element.setStyle('height', element.retrieve('height'));

				self.fireEvent('normalize', component);
			} else{
				element.addClass('container-max');
				element.store('width', element.getStyle('width'));
				element.store('height', element.getStyle('height'));
				element.setStyle('width', null);
				element.setStyle('height', null);
				container.getChildren('.ui-container').each(function(c) {
					if (!c.hasClass('container-'+name)) {
						c.store('display', c.getStyle('display'));
						c.hide();
					}
				});

				self.fireEvent('maximize', component);
			}
		});
	},

	/**
	 * [_initResizeBorder description]
	 * @param  {[type]} component [description]
	 * @param  {[type]} border    [description]
	 * @return {[type]}           [description]
	 */
	_initResizer: function(component) {
		var self = this;
		var element = component.element;
		var container = component.container;

		if (component.options.noResizer) return;
		//_log('_initResizeBorder', element.getNext());
		if (!element.getNext()) return;

		if (!container) return;

		var direction = container.getStyle('flex-direction');

		if (!direction)
			direction = container.getStyle('-webkit-flex-direction');

		var modifier = this.options.resizer.modifier[direction];

		//_log(element, coord);
		var resizer = new Element('div', {
			'class': 'ui-resizer-'+modifier.size,
			'data-name': component.options.name
		}).addEvents({
			click: function(e){
				e.stop();
			},
			mousedown: function(e) {
				e.stop();
			}
		}).inject(container, 'top');

		new Drag.Move(resizer, {
			modifiers: modifier.mode,
		    onStart: function(el){
				//_log('onStart', el);
				//self.fireEvent('resizeStart', el);
			},
			onDrag: function(el, ev){
				//_log('onDrag', el, ev.client.x);
				var coord = element.getCoordinates(container);
				var c = resizer.getCoordinates(container);
				element.setStyle('flex','none');
				element.setStyle(modifier.size, c[modifier.from] - coord[modifier.from]);

				self.fireEvent('drag');
			},
			onComplete: function(el){
				//_log(component.main);
				//_log('onComplete', modifier.size, element.getCoordinates(container)[modifier.size]);
				var coord = element.getCoordinates(container);
				var size = element.getCoordinates(container)[modifier.size];
				self.fireEvent('resizer', [component.main, modifier.size, size]);
			}
		});

		this._initResizerEvent(component, resizer, modifier);
		this.fireEvent('drag');
	},

	/**
	 * [_initResizerEvent description]
	 * @param  {[type]} component [description]
	 * @param  {[type]} resizer   [description]
	 * @param  {[type]} modifier  [description]
	 * @return {[type]}           [description]
	 */
	// will definitly use a controller for that
	_initResizerEvent: function(component, resizer, modifier) {
		var container = component.container;
		var element = component.element;

		this.addEvents({
			drag: function() {
				//_log(direction);
				var coord = element.getCoordinates(container);
				resizer.setStyle(modifier.from, coord[modifier.from] + coord[modifier.size] - 3);
			},
			maximize: function() {
				//_log(direction);
				var coord = element.getCoordinates(container);
				resizer.setStyle(modifier.from, coord[modifier.from] + coord[modifier.size] - 3);
			},
			normalize: function() {
				//_log(direction);
				var coord = element.getCoordinates(container);
				resizer.setStyle(modifier.from, coord[modifier.from] + coord[modifier.size] - 3);
			},
			resize: function() {
				//_log('resize', direction);
				var coord = element.getCoordinates(container);
				resizer.setStyle(modifier.from, coord[modifier.from] + coord[modifier.size] -3);
			}
		});
	}
});
