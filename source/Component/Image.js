/*
---
description: UI.Image is used to make a skinnable image container

authors: [moolego,r2d2]

requires:
- core:1.2.1: '*'

provides: [UI.Image]

...
*/
/*
	Class: UI.Image
		UI.Image is used to make a skinnable image container

	Arguments:
		options

	Options:
		- tag - (string) element tag, by default 'span'
		- html - (string) text text, by default Text
		- src - (string) path to the image
	Returns:
		Box element

	Example:
		(start code)
		var image = new UI.Image({
			src	: 'http://ui.moolego.org/img/head/moolego.png',
		}).inject(this.element);
		(end)

	Discussion:

*/

UI.Image = new Class({

	Extends: UI.Component,

	options: {
		name: 'image',

		tag: 'div',
		html: 'div',

		selectable: false
	},

	/*
		Function: _initElement
		private function

		Call UI.Component _initElement
	*/
	_initElement: function(options){
		this.parent(options);
	}

});

