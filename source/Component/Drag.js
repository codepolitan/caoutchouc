

UI.Component.implement({

	options: {
		// Drag options
		draggable: false,
		dragLimitX: false,
		dragLimitY: false,

		dragHandlers: [],
		fx: {
			adaptLocation: {
				duration: 200,
				wait: true
			}
		}
	},

	enableDrag: function(){
		var self = this;

		if (this.dragHandlers.length === 0)
			this.dragHandlers = [];

		this.dragHandler = new Drag(this.element, {
			handle: this.dragHandlers,
			snap: 3,
			limit: {
				x: this.options.dragLimitX,
				y: this.options.dragLimitY
			},
			onStart: this.fireEvent.bind(this, 'onDragStart'),
			onDrag: this.fireEvent.bind(this, 'onDrag'),
			onComplete: this.fireEvent.bind(this, 'onDragComplete')
		});

		this.addEvent('onDragComplete', function(){
			self.adaptLocation();
		});

		return this;
	},

	enableElementDrag: function(element){
		if (element === null) return;

		this.dragHandler = new Drag(this.element, {
			handle: element,
			snap: 3,
			limit: {
				x: this.options.dragLimitX,
				y: this.options.dragLimitY
			},
			onStart: this.fireEvent.bind(this, 'onDragStart'),
			onDrag: this.fireEvent.bind(this, 'onDrag'),
			onComplete: this.fireEvent.bind(this, 'onDragComplete')
		});

		this.addEvent('onDragComplete', this.adaptLocation.bind(this));

		return this;
	},

	disableDrag: function(){
		if (this.dragHandler)
			this.dragHandler.detach();

		return this;
	}
});

