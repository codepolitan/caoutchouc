
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

		/**
		 * [enableDrag description]
		 * @return {[type]} [description]
		 */
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

		/**
		 * [enableElementDrag description]
		 * @param  {[type]} element [description]
		 * @return {[type]}         [description]
		 */
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

		/**
		 * [disableDrag description]
		 * @return {[type]} [description]
		 */
		disableDrag: function(){
			if (this.dragHandler)
				this.dragHandler.detach();

			return this;
		}
	});

	return exports;
});
