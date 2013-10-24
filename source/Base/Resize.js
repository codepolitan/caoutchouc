





UI.Component.implement({
	options: {
		// Resize options
		resizer: {
			'class': 'ui-resizer'
		},
		resizable: false,
		resizeLimitX: [100, screen.width],
		resizeLimitY: [100, screen.height]
	},

	_initResizer: function(){
		this.resizeHandlers = [];

		this.resizer = new Element('div', this.options.resizer)
		.addEvent('click', function(e){ e.stop(); })
		.inject(this.element, 'bottom');

		this.resizeHandlers.push(this.resizer);

		this.enableResize(0);

		if (this.options.resizeBorders) {
			this.options.resizeBorders.each(function(border,i){
				this.resizeHandlers.push(new Element('div', {
					style: border+": 0",
					'class': 'ui-resizer-'+border
				})
				.addEvent('click', function(e){ e.stop(); })
				.inject(this.element, 'bottom'));

				this.enableResize(i+1);
			},this);
		}
	},

	enableResize: function(i){
		var self = this;
		var options = {
			handle: this.resizeHandlers[i],
			limit: {
				x: self.options.resizeLimitX,
				y: self.options.resizeLimitY
			},
			modifiers: {
				'x': 'width',
				'y': 'height'
			},
			onStart: function(){
				self.fireEvent('resizeStart');
			},
			onDrag: function(){
				self.fireEvent('resizeDrag');
				self.fireEvent('resize');
			},
			onComplete: function(){
				self.fireEvent('resizeComplete');
			}
		};

		if (i == 1 || i == 3) options.modifiers.x = false;
		if (i == 2 || i == 4) options.modifiers.y = false;

		if (i == 1 || i == 4) {
			this.dragHandlers.push(this.resizeHandlers[i]);
			options.invert = true;
		}

		this.element.makeResizable(options);

		return this;
	}
});
