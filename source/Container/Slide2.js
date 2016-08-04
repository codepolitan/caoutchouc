/*
	Class: UI.PaneView
		Creates a paneView Object that let you browse inner views(panes)

	Extends:
		<UI.Container>

	Arguments:
		options

	Options:
		see <UI.Container>

	Returns:
		Paneview object.

	Example:
		(start code)
		new UI.PaneView({
			url				: 'data.php?id=42',
			width			: 260,
			height			: 400,
		}).inject(this.content);
		(end)

	Discussion:
		Need to make some more cleaning in this class

	Implied global:
		UI,
		Class,Fx


	*/

UI.Slide2 = new Class({

	Extends: UI.Container,

	name: 'slide',

	options: {
		name: 'slide',
		content: true,
		type: 'horizontal',
		transitionFx: {
			transition: Fx.Transitions.Quad.easeOut,
			duration: 100,
			wait: false
		},
		slide: {
			width:260,
			type: 'slide',
			content: true,
			scroll: 'scrollbar',
		},
		slideResize: true
	},

	/*
	Method: _initElement
		private function

		Overwrite <UI.Container::_initElement>. Create mainview

	Returns:
		(void)
	*/

	_initElement: function () {
		this.list = [];
		this.parent();
	},
	/*
    Function: _initEvents

		Add slide(subview), intect it in the container, resize container and return it

	*/

	_initEvents : function(){
		var self = this;
		this.parent();
		this.transitionFx = new Fx.Scroll(this.element, this.options.transitionFx);

		this.addEvents({
			resize: function() {
				self.updateSize();
			},
		})
	},

	/*
    Function: add

		Add Slide(subview), intect it in the container, resize container and return it

	*/

	addView: function(where){
		var self = this;
		//_log.debug(this, where);
		where = where || 'bottom';

		var slide = new UI.Container(this.options.slide)
		.inject(this.content,where);



		if (this.list.length === 0)
			this.index = 0;

		slide.addClass('slide'+this.index);

		this.slide = slide;

		this.list[this.index] = slide;

		this.fireEvent('added', slide);

		if (this.options.slideResize)
			this.setResizable(slide);

		/*slide.element.addEvent('click', function(ev){
			this.removeAllNext(slide);
		}.bind(this));*/

		this.updateSize();
		return slide;
	},

	/*
    Function: add

		Add slide(subview) resizable capabilities

	*/

	setResizable: function(slide) {
		var self = this;
		var separator = new Element('div',{
			'class': 'ui-slide-separator'
		}).inject(slide.element)
		.addEvent('click',function(e) { e.stop(); });

		slide.element.makeResizable({
            handle: separator,
            limit: {
                x: [100,1600],
                y: ['100%','100%']
            },
            onDrag: function(){
				slide.element.setStyle('height','100%');
                //self.resize();
            } ,
            onComplete: function(){
				self.options.slide.width = slide.element.getStyle('width').toInt();
				//self.options.slide.styles.width = slide.element.getStyle('width');
				slide.element.setStyle('height','100%');
                //self.resize();
            }.bind(this)
		});
	},

	/*
    Function: reach

		Set the given slide as active and move to it

	*/
	reach: function(slide){

		this.transitionFx.toElement(slide);

	},

	/*
    Function: next

		Find the next slide from the list and move to it if exist

	*/
	next: function(){
		this.list[this.index]

		this.index++;
		var slide = false;

		if (this.slide)
		this.slide.removeClass('selected');

		if (!this.list[this.index]) {
			slide = this.add('bottom');
		}

		this.list[this.index].addClass('selected');

		this.reach(this.list[this.index]);

		//_log.debug('next',slide, this.index);

		return slide;
	},

	/*
    Function: previous

		Find the previous slide from the list and move to it if exist

	*/
	back: function(){
		this.index = this.index - 1;
		var slide = false;

		this.slide.removeClass('selected');

		if (!this.list[this.index]) {
			slide = this.add('top');
		}

		this.list[this.index].addClass('selected');

		this.reach(this.list[this.index]);

		//_log.debug('back',slide, this.index);

		return slide;
	},


	/*
    Function: resize

		Resize main container content to fit its components (to enbable slide)

    Note: maybe can be accomplish using css but dont know how yet

	*/

	updateSize: function(){
		var self = this;

		var size = 0;

		//_log.debug('update', this.element.getSize().x);

		var width = this.element.getSize().x;

		if (!this.list[1] && this.list[-1] && this.list[0]) return;

		for(var i in this.list){
			if (this.list[i].element)
				this.list[i].element.setStyle('width', width);
			size = size + width;

			this.content.setStyle('width',size+'px');
		}

		this.reach(this.slide);
	},

	/*
    Function: remove

		Destroy the main element container

	*/

	remove: function(element){
		element.destroy();
	}
});

