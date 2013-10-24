/*
---
description: UI.Progress

requires:
- core:1.2.6: '*'

...
*/
/*

*/

UI.Progress = new Class({
	Extends: UI.Component,

	//options
	options: {
		name: 'progress',
		tag: 'div',

		width: 200,
		height: 18,

		speed: 2000,
		fx: Fx.Transitions.Quad.easeOut
	},

	_initElement: function() {
		this.parent();
		this.progress = new UI.Component({
			name: 'progressbar',
			height: this.options.height,
			width:1,
			type: this.options.type,
			state: 'progress'
		}).inject(this.element);

		//this.progress.show();
	},

	reach: function(percentage) {
		this.progress.show();
		var zero = 0;

		if (percentage == 0) {
			zero = 1;
			percentage = 1;
		}
		var width = this.element.getSize().x * percentage / 100;
		var that = this;

		this.progress.set('morph',{
			duration: this.options.speed,
			transition: this.options.fx,
			onComplete: function() {
				if (zero) {
					that.progress.hide();
				}
				else {
					that.progress.setSize(width.toInt(),this.options.height);
				}
			}
		}).morph({
			width: width.toInt()
		});

		return this;
	}
});