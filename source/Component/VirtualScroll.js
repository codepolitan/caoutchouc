/*
	---
	description: Scrollbar element
	authors: [moolego,r2d2]
	requires:
	- core:1.2.1: '*'


	...
 */
/*
	Class: UI.Scroll
	Manage scrolls for views.

	Extend:
	<UI.Component>

	Arguments:
	options

	Options:
	- width - (integer) The scollbar track width
	- maxThumbSize - (integer)
	- wheel - (integer) The scroll increment

	Example:
	(start code)
	var scrollbar = new UI.Scroll({
	container	: this.content
	});
	(end)

	Implied global:
	- MooLego - UI
	- MooTools -Class
	- Javascript - document

	Credits:
	based on Valerio's Mootools scrollbar plugin.
	found in upload folder of mootools website
*/
UI.VirtualScroll = new Class({

	Extends: UI.Component,

	options: {
		name: 'scrollbar',
		klass: 'ui-scrollbar',
		type: 'track',

		maxThumbSize: 8,
		wheel: 16,
		autoHide: 1000,
		size: 8
	},
	/*
		Constructor: initialize
			Construtor

		Arguments:
			options - (object) options

		See also:
			<UI.Component::initialize>
	 */
	initialize: function(options){

		this.parent(options);

		this.bound = {
			start: this.start.bind(this),
			end: this.end.bind(this),
			drag: this.drag.bind(this),
			wheel: this.wheel.bind(this),
			//page: this.page.bind(this)
		};

		//console.log('initalize',this.options.container,'before');

		this.container = this.options.container;
		this.position = {};
		this.mouse = {};
		this.update();
		this.attachEvent();
	},
	/*
		Method: _initElement
			private method

			Make a  Text and set the fade Fx

		Return:
			(void)

		See also:
			<UI.Component::_initElement>
	 */
	_initElement: function(){
		if (!this.options.container)
			return;

		this.options.width = this.options.size;

		this.parent();

		this.element.inject(this.options.container,'before');

		this.thumb = new UI.Component({
			name: 'thumb',
			klass: 'ui-thumb'
		}).inject(this.element);
	},

	update: function(){
		//thumbSize = this.element.getSize().y / (this.list.length * 40);

		this.containerSize = this.options.container.getSize().y;

		this.thumbSize = this.containerSize / ( this.options.listSize * this.options.elSize );

		this.thumbSize = parseInt(this.thumbSize * this.containerSize, 10);

		//console.debug('thumbSize', this.thumbSize);
		
		if(this.thumbSize < 8)
			this.thumbSize = 8;

		if(this.thumbSize < this.containerSize)
			this.thumb.setSize(this.options.width, this.thumbSize);

	},

	attachEvent: function(){
		this.thumb.element.addEvent('mousedown', this.bound.start);

		if (this.options.wheel) {
			this.options.container.addEvent('mousewheel', this.bound.wheel);
		}
		this.element.addEvent('mouseup', this.bound.page);
	},

	wheel: function(event){

		this.fireEvent('scrolling', event);

		event.stop();
	},

	start: function(event){
		this.mouse.start = event.page.y;
		this.position.start = this.thumb.element.getStyle('top').toInt();

		document.addEvent('mousemove', this.bound.drag);
		document.addEvent('mouseup', this.bound.end);
		this.thumb.element.addEvent('mouseup', this.bound.end);

		event.stop();
	},

	end: function(event){
		document.removeEvent('mousemove', this.bound.drag);
		document.removeEvent('mouseup', this.bound.end);
		this.thumb.element.removeEvent('mouseup', this.bound.end);
		this.fireEvent('dragCompplete', event);
		event.stop();
	},

	drag: function(event){
		var dragThumbSize = this.thumb.getSize().y;
			dragThumbPos = event.page.y - this.container.getPosition().y;

		if (dragThumbPos < 0)// top limit
			this.thumb.element.setStyle('top', 0 + 'px');
		else if (dragThumbPos + dragThumbSize >= this.container.getSize().y)// bottom limit
			this.thumb.element.setStyle('top', (this.container.getSize().y - this.thumb.getSize().y) + 'px');
		else
			this.thumb.element.setStyle('top', dragThumbPos + 'px');

		this.fireEvent('drag', event);

		event.stop();
	},
});
