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

		//maxThumbSize: 8,
		minThumbSize: 8,
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

		this.index = 0;
		this.dragEvPos = null;
	},

	update: function(search){
		//console.log('update');
		var self = this,
			opts = this.options;

		this.containerSize = this.container.getSize().y;
		this.containerPos = this.container.getPosition().y;

		this.thumbSize = this.containerSize / (opts.listLength * opts.elSize);
		this.thumbSize = parseInt(this.thumbSize * this.containerSize, 10);

		this.thumbPos = this.index * opts.elSize * this.containerSize;
		this.thumbPos = this.thumbPos / (opts.listLength * opts.elSize);

		this.element.setStyle('height', this.containerSize + 'px');

		if (this.thumbSize < opts.minThumbSize)
			this.thumbSize = opts.minThumbSize;

		if (this.thumbSize < this.containerSize) {
			this.thumb.setSize(opts.width, this.thumbSize);
			this.thumb.element.setStyle('visibility', 'visible');
		}
		else
			this.thumb.element.setStyle('visibility', 'hidden');

		this.thumb.element.setStyle('top', this.thumbPos.limit(0, this.containerSize - this.thumbSize) + 'px');

		if(search)
			this.toTop();

		/*if (this.options.autoHide)
		this.timer = (function() {
			self.element.fade(0);
		}).delay(this.options.autoHide);*/

	},

	attachEvent: function(){
		this.thumb.element.addEvent('mousedown', this.bound.start);

		if (this.options.wheel) {
			this.options.container.addEvent('mousewheel', this.bound.wheel);
		}
		this.element.addEvent('mouseup', this.bound.page);
	},

	wheel: function(event){
		/*clearTimeout(this.timer);
		this.element.setStyle('visibility','visible');*/

		var self = this,
			opts = this.options,
			thumbSize = this.thumbSize,
			thumbPos = null,
			countLoad = opts.countLoad;

		if (this.index < 0)
			this.index = 0;

		if(this.index > opts.listLength)
			this.index = opts.listLength;

		if (event.wheel > 0) {
			if (event.target.getPrevious())
				event.target.getPrevious().fireEvent('mouseenter');

			for (var i = 1; i <= opts.sensibility; i++) {
				this.index--;

				this.container.scrollTop -= opts.scrollSensibility;

				if (this.index + countLoad < opts.listLength - countLoad && this.index + 1 > countLoad)
					this.fireEvent('scrolling', {ev: event, index: this.index});
			}
		
			thumbPos = (opts.elSize * this.containerSize * this.index) / (opts.listLength * opts.elSize);
		
		}
		else {
			if (event.target.getNext())
				event.target.getNext().fireEvent('mouseenter');

			for (var j = 1; j <= opts.sensibility; j++) {
				this.index++;

				this.container.scrollTop += opts.scrollSensibility;

				if (this.index > countLoad && this.index < opts.listLength - (countLoad * 2))
					this.fireEvent('scrolling', {ev: event, index: this.index});
			}
			
			thumbPos = (opts.elSize * this.containerSize * this.index) / (opts.listLength * opts.elSize);
		
		}


		this.thumb.element.setStyle('top', thumbPos.limit(0, this.container.getSize().y - this.thumbSize) + 'px');

		this.dragBefore = false;

		/*if (this.options.autoHide)
		this.timer = (function() {
			self.element.fade(0);
		}).delay(this.options.autoHide);*/
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
		this.fireEvent('dragCompplete', this.index);
		event.stop();
	},

	toTop: function(){
		this.index = 0;
		this.thumb.element.setStyle('top', 0);
		this.container.scrollTop = 0;
	},

	toBottom: function(){
		var opts = this.options,
			countLoad = opts.countLoad;

		this.container.scrollTop = (countLoad * 3) * opts.elSize;
	},

	drag: function(event){
		//console.log('drag', this.container.getSize().y, this.containerSize);
		//console.log('drag', this.container.getPosition().y, this.containerPos);
		var opts = this.options,
			thumbSize = this.thumbSize,
			containerSize = this.container.getSize().y,
			countLoad = opts.countLoad,
			evPos = event.page.y - this.container.getPosition().y,
			newIndex = evPos * (opts.listLength * opts.elSize);

		this.index = parseInt( (newIndex / this.content.getSize().y) / opts.elSize, 10 );

		if (evPos + thumbSize >= containerSize){ // bottom limit
			this.index = opts.listLength;
			this.toBottom();
		}
		else if (evPos <= 0){ // top limit
			this.index = 0;
			this.toTop();
		}

		this.thumb.element.setStyle('top', evPos.limit(0, containerSize - thumbSize) + 'px');

		this.fireEvent('drag', this.index);

		if(evPos < 0)
			return;

		if(evPos < this.dragEvPos)
			this.container.scrollTop -= opts.scrollSensibility;
		else
			this.container.scrollTop += opts.scrollSensibility;

		this.dragEvPos = evPos;

		event.stop();
	}

});