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

UI.Pane = new Class({

	Extends: UI.Container,

	options: {
		name: 'pane',
		properties: {},
		styles: {
			width: '100%',
			height: '100%',
			overflow:'hidden'
		},
		overflow:'scrollbar',
		direction: 'horizontal',
		transitionType: 'scroll',
		transitionFx: {
			transition: Fx.Transitions.Quad.easeOut,
			duration: 100,
			wait: false
		},
		pane: {
			width:260,
			type: 'pane'
		},
		paneResize: true,
		onTransition: function(){}
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

		Add pane(subview), intect it in the container, resize container and return it

	*/

	_initEvents : function(){
		this.parent();
		this.transitionFx = new Fx.Scroll(this.element, this.options.transitionFx);
	},

	/* 
    Function: add

		Add pane(subview), intect it in the container, resize container and return it

	*/

	add: function(where){
		var self = this;
		console.log(this, where);
		where = where || 'bottom';

		var pane = new UI.Container(this.options.pane)
		.inject(this,where);

		if (this.options.paneResize)
			this.makePaneResizable(pane);

		pane.element.addEvent('click', function(ev){
			this.removeAllNext(pane);
		}.bind(this));

		this.list.push(pane);

		this.addEvent('resize',function(){
			//pane.scrollbar.update();
		});

		this.resize();
		return pane;
	},

	/*
    Function: add

		Add pane(subview) resizable capabilities

	*/

	makePaneResizable: function(pane) {
		var self = this;
		var separator = new Element('div',{
			'class': 'ui-pane-separator'
		}).inject(pane.element)
		.addEvent('click',function(e) { e.stop(); });

		pane.element.makeResizable({
            handle: separator,
            limit: {
                x: [100,1600],
                y: ['100%','100%']
            },
            onDrag: function(){
				pane.element.setStyle('height','100%');
                self.resize();
            } ,
            onComplete: function(){
				self.options.pane.width = pane.element.getStyle('width').toInt();
				//self.options.pane.styles.width = pane.element.getStyle('width');
				pane.element.setStyle('height','100%');
                self.resize();
            }.bind(this)
		});
	},

	/*
    Function: applyTransition

		Set the given pane as active and move to it

	*/

	applyTransition: function(pane){
		this.pane = pane;

		if (this.element.getSize().x < this.content.getSize().x) {
			this.transitionFx.toElement(pane);
		} else {
			//this.transitionFx.toElement(pane);
			//if (pane.element.getPrevious())
			//	this.transitionFx.toElement(pane.element.getPrevious());
		}
	},

	/*
    Function: next

		Find the next pane from the list and move to it if exist

	*/

	next: function(){
		var next = this.list.indexOf(this.pane)+1;

		if (this.list[next]) {
			this.applyTransition(this.list[next]);
		}
	},

	/*
    Function: previous

		Find the previous pane from the list and move to it if exist

	*/

	back: function(){
		var prev = this.list.indexOf(this.pane)-1;
		if (this.list[prev]) {
			//console.log(prev);
			this.applyTransition(this.list[prev]);
		}
	},

	/*
    Function: resize

		Resize main container content to fit its components (to enbable slide)

    Note: maybe can be accomplish using css but dont know how yet

	*/

	resize: function(){
		this.parent();
		var size = 0;

		this.list.each(function(pane,index) {
			size = size + pane.element.getSize().x;
		});

		this.content.setStyle('width',size+'px');
	},

	/*
    Function: inject

		Inject the main container element into its container



	inject: function(container) {
		this.element.inject(container);
		return this;
	},
*/

	/*
    Function: remove

		Destroy the main element container

	*/

	remove: function(element){
		element.destroy();
	},

	/*
    Function: removePane

		Destroy the given wrapper pane

    Note: it seems that the pop function that remove the pane from the list doesn't work

	*/

	removeAllNext: function(pane) {
		var last = this.list.getLast();
		while (last != pane) {
			this.list.erase(last);
			last.destroy();
			last = this.list.getLast();
		}
	}
});

