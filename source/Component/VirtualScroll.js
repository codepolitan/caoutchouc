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
		//autoHide: 1000,
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
	},

	update: function(){
		var opts = this.options,
			containerSize = opts.virtual.containerSize;

		this.element.setStyle('height', containerSize + 'px');

		this.containerSize = containerSize;

		this.thumbSize = opts.virtual.separatorSize + ( opts.virtual.listSize * opts.virtual.elSize );
		this.thumbSize = containerSize / this.thumbSize;
		this.thumbSize = parseInt(this.thumbSize * containerSize, 10);

		this.thumbPos = this.index * opts.virtual.elSize * containerSize;
		this.thumbPos = this.thumbPos / (opts.virtual.listSize * opts.virtual.elSize);

		if (this.thumbSize < opts.minThumbSize)
			this.thumbSize = opts.minThumbSize;

		if (this.thumbSize < containerSize) {
			this.thumb.setSize(opts.width, this.thumbSize);
			this.thumb.element.setStyle('visibility', 'visible');
		}
		else
			this.thumb.element.setStyle('visibility', 'hidden');

		this.thumb.element.setStyle('top', this.thumbPos.limit(0, containerSize - this.thumbSize) + 'px');

	},

	attachEvent: function(){
		this.thumb.element.addEvent('mousedown', this.bound.start);

		if (this.options.wheel) {
			this.options.container.addEvent('mousewheel', this.bound.wheel);
		}
		this.element.addEvent('mouseup', this.bound.page);
	},

	wheel: function(event){
		var opts = this.options.virtual,
			thumbSize = this.thumb.getSize().y,
			thumbPos = (this.index * opts.elSize * this.containerSize) / (opts.listSize * opts.elSize),
			countLoad = opts.countLoad;

		if (this.index < 0)
			this.index = 0;

		if (event.wheel > 0) {
			if(event.target.getPrevious('[data-id]'))
				event.target.getPrevious('[data-id]').fireEvent('mouseenter');

			for (var i = 1; i <= opts.sensibility; i++) {
				this.index--;

				if (this.index + countLoad < opts.listSize - countLoad && this.index + 1 > countLoad)
					this.fireEvent('scrolling', {ev: event, index: this.index});
				else
					this.container.scrollTop -= opts.elSize;
			}
		}
		else if (this.index < opts.listSize) {
			if(event.target.getNext('[data-id]'))
				event.target.getNext('[data-id]').fireEvent('mouseenter');

			for (var j = 1; j <= opts.sensibility; j++) {
				this.index++;

				if (this.index > countLoad && this.index < opts.listSize - (countLoad * 2))
					this.fireEvent('scrolling', {ev: event, index: this.index});
				else
					this.container.scrollTop += opts.elSize;
			}
		}

		this.thumb.element.setStyle('top', thumbPos.limit(0, this.container.getSize().y - this.thumbSize) + 'px');
		
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

	toBottom: function(){
		var opts = this.options.virtual,
			countLoad = opts.countLoad;
			
		this.container.scrollTop = (countLoad * 3) * opts.elSize;
	},

	drag: function(event){
		var opts = this.options.virtual,
			thumbSize = this.thumb.getSize().y,
			countLoad = opts.countLoad,
			evPos = event.page.y - this.container.getPosition().y,
			newIndex = evPos * (opts.listSize * opts.elSize);
		
		this.index = parseInt( (newIndex / this.content.getSize().y) / opts.elSize, 10 );
		
		if (evPos + thumbSize >= this.container.getSize().y) // bottom limit
			this.index = opts.listSize;
		else if (evPos <= 0 || this.index <= countLoad) // top limit
			this.index = 0;

		this.thumb.element.setStyle('top', evPos.limit(0, this.container.getSize().y - thumbSize) + 'px');

		this.fireEvent('drag', this.index);

		event.stop();
	}

});