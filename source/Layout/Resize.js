
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
	 * [_initResizeBorder description]
	 * @param  {[type]} component [description]
	 * @param  {[type]} border    [description]
	 * @return {[type]}           [description]
	 */
	_initResizer: function(component) {
		//_log('_initResizer', component.options.name);

		var self = this,
			name = component.options.name,
			element = component.element,
			container = component.container,
			last = component.options.last;

		if (!container) return;

		var direction = container.getStyle('flex-direction');
		
		if (!direction)	return;

		var modifier = this.options.resizer.modifier[direction];

		if (!modifier) return;

		//console.log('direction', direction, modifier);

		//_log(element, coord);
		var resizer = this.resizer[name] = new Element('div', {
			'class': 'ui-resizer',
			'data-name': component.options.name
		}).addEvents({
			click: function(e){
				e.stop();
			},
			mousedown: function(e) {
				e.stop();
			}
		}).inject(container);

		if (modifier.size) {
			resizer.addClass('resizer-'+ modifier.size);
		}

		if (last) {
			//_log('------last' );
			//resizer.addClass('resizer-last');
		}

		this._initResizerDrag(resizer, modifier, component);
		this._initResizerEvent(component, resizer, modifier);

		this.fireEvent('drag');
	},

	/**
	 * [_initDrag description]
	 * @param  {[type]} resizer  [description]
	 * @param  {[type]} modifier [description]
	 * @return {[type]}          [description]
	 */
	_initResizerDrag: function(resizer, modifier, component) {
		var self = this;
		//_log('initResizerDrag', resizer, modifier);

		var element = component.element,
			container = component.container,
			last = component.options.last;

		var drag = new Drag.Move(resizer, {
			modifiers: modifier.mode,
		    onStart: function(el){
				//_log('onStart', el);
				//self.fireEvent('resizeStart', el);
			},
			onDrag: function(el, ev){
				//_log('onDrag', el);
				var coord = element.getCoordinates(container);
				var coordc = container.getCoordinates();
				var c = resizer.getCoordinates(container);
				//element.setStyle('flex','none');
				//element.setStyle(modifier.size, c[modifier.from] - coord[modifier.from]);
				if (last){
					//_log(modifier.size, coordc[modifier.size], c[modifier.from]);
					element.setStyle(modifier.size, coordc[modifier.size] - c[modifier.from]);
				}
				else {
					element.setStyle(modifier.size, c[modifier.from] - coord[modifier.from]);
				}

				self.fireEvent('drag');
			},
			onComplete: function(el){
				//_log('onComplete', component.main, modifier.size, size);
				//_log('onComplete', modifier.size, element.getCoordinates(container)[modifier.size]);
				var coord = element.getCoordinates(container);
				var size = element.getCoordinates(container)[modifier.size];
				self.fireEvent('resizer', [component.main, modifier.size, size]);
				component.fireEvent('resizeComplete', [modifier.size, size]);
				//_log(component.main, size);
				component.width = size;
			}
		});

		return drag;
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
		//_log('_initResizerEvent', component.options.name, component.options.last);

		var container = component.container;
		var element = component.element;

		this.addEvents({
			drag: function() {
				//_log('drag');
				var coord = element.getCoordinates(container);
				//_log('coord',  coord[modifier.from]);
				if (component.options.last) {
					resizer.setStyle(modifier.from, coord[modifier.from] -3);
				}
				else { 
					resizer.setStyle(modifier.from, coord[modifier.from] + coord[modifier.size] -3);
				}
			},
			maximize: function() {
				//_log(direction);
				var coord = element.getCoordinates(container);
				if (component.options.last) {
					resizer.setStyle(modifier.from, coord[modifier.from] -3);
				}
				else { 
					resizer.setStyle(modifier.from, coord[modifier.from] + coord[modifier.size] -3);
				}
			},
			normalize: function() {
				//_log(direction);
				var coord = element.getCoordinates(container);
				if (component.options.last) {
					resizer.setStyle(modifier.from, coord[modifier.from] -3);
				}
				else { 
					resizer.setStyle(modifier.from, coord[modifier.from] + coord[modifier.size] -3);
				}
			},
			resize: function() {
				//_log('resize', component.element, resizer);
				
				var coord = element.getCoordinates(container);

				if (component.options.last) {
					resizer.setStyle(modifier.from, coord[modifier.from] -3);
				}
				else { 
					resizer.setStyle(modifier.from, coord[modifier.from] + coord[modifier.size] -3);
				}
			}
		});
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

				self.fireEvent('resize', component);
			}
		});
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

			if (component.options.noResizer) {
				//console.log('--', component.main);
				continue;
			}

			this._initResizer(component);
			this._initMaximize(component);
		}
	},

});
