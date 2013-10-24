/*
	Class: UI.Window
		The UI.Window class defines objects that manage and coordinate
		the windows an application displays on the screen.

	Require:
		<UI.Component>
		<UI.Skin>
		<UI.Button>
		<UI.Control>
		<UI.Container>

	Extends:
		<UI.Component>

	Arguments:
		Options

	Example:
		(start code)
		var win = new UI.Window({
			width: 760,
			height: 600,
			title: 'a moolego window',
		}).setContent('iframe','http://ui.moolego.org');
		(end)


	Implied global:
		- Moolego - UI
		- Mootools - $, Class, Element, Window
		- Javascript - document

	Discussion:
		Effects still need to be implemented as option
*/

UI.Window = new Class({

	Extends: UI.Container,

	name: 'window',

	options: {
		name: 'window',
		title: 'Window',

		container: $(document.body),

		maxsize: {
			width: 800,
			height: 600
		},

		content: true,
		// Size options
		width: 220,
		height: 360,
		//'min-height': 200,

		// location options
		location: 'cascade',
		position: 'fixed',



		zIndex: 'auto', // to get zIndex from skin or an Int as zIndex
		tag: 'div',

		// Components Options
		head: true,
		view: {},
		foot: {
			'class': 'ui-foot'
		},

		controls: ['minimize', 'maximize', 'close'],



		// Not Implemented should be able to enable/disable effects
		useEffects: false,

		focus: true,

		// Drag options
		draggable: true,
		dragLimitX: [-1000, window.getWidth() + 1000],
		dragLimitY: [26, window.getHeight() + 1000],
		dragHandlers: ['head', 'foot'],
		//hideContentOnDrag: true,


		useUnderlay: true,
		useOverlay: true,

		hideOnDrag : true,

		// Resize options
		resizable: true,
		resizeLimitX: [160, screen.width],
		resizeLimitY: [160, screen.height],
		resizeOnDragIfMaximized: false,
		resizeBorders: ['top','right','bottom','left']
		/*
		minimize: function(){},
		maximize: function(){},
		normalize: function(){},
		onLoad: function(){},
		onBlur: function(){},
		onFocus: function(){},
		onClose: function(){}
		*/
	},

	initialize: function(options) {
		this.parent(options);

		var location = this.getInitialLocation();
		this.options.top = location.top;
		this.options.left = location.left;
		this.element.setStyles(location);
		this.adaptLocation();


		if (this.options.position == 'fixed'){
			this.element.setStyle('position', 'fixed');
		}

		ui.window.register(this);

		if (this.options.focus)
			ui.window.focus(this);

		window.onresize = function(event){
			ui.window.resetMinimized();
		};

		this.inject($(document.body));
	},

	_initElement: function() {
		this.parent();

		//this._initContent();

		this.buildControls(this.options.controls);
	},



	/*
	Function: _initHead
		private function

		Create a new head element, set class and styles and inject

	Returns:
		(void)
	*/
	_initHead: function(options){
		this.parent(options);
		this.dragHandlers.push(this.head);

		this.title = new UI.Text({
			type: 'title',
			text: this.options.title
		}).inject(this.head);
	},

	/*
	Function: buildControls
		private function

		Create window controls that allow window close, maximize and minimize

	Returns:
		(void)
	*/
	buildControls: function(){
		//console.log('buildControls');
		if (!this.options.controls) { return; }
		var self = this;

		this.controls = new Element('div',{'class': 'ui-controls'})
		.addEvent('click',function(e) { e.stop(); })
		.inject(this.element);

		this.options.controls.each(function(action){
			new Element('div',{
				'class': 'ui-'+action
			}).addEvent('click', function() {
				self.control(action);
			}).inject(self.controls);
		});

		this.addEvents({
			'minimize': function() { this.controls.hide(); },
			'normalize': function() { this.controls.show(); }
		});

		//this.fireEvent('resize');
	},

	_initContent: function(options) {
		this.fireEvent('resize');

		this.content = new Element('div')
			.addClass('container-content')
			.inject(this.element,'top');

		this.addEvents({
			'minimize': function() { this.content.hide(); },
			'normalize': function() { this.content.show(); }
		});
	},

	/*
	Function: _initElement Foot
		private function

		Create a new head element, set class and styles and inject

	Returns:
		(void)
	*/
	_initFoot: function(options){
		this.parent(options);
		this.dragHandlers.push(this.foot);

		this.addEvents({
			minimize: function() { this.content.hide(); },
			normalize: function() { this.content.show(); }
		});
	},

	/*
	Function: setTitle
		set title html

	Arguments:
		html - (string) html formatted title

	Returns:
		this
	*/
	setTitle: function(title){
		if (this.title && this.head)
			return this.title.set('text', title);
	},


	/*
	Function: _initEvents


	Arguments:
		html - (string) html formatted title

	Returns:
		this
	*/
	_initEvents: function(){
		this.parent();

		var self = this;

		//console.log('UI.Window._initEvents()',self.overlay);

		// c'est moche!

		this.element.addEvents({
			onBlur: function() {
				self.overlay.show();
			},
			onFocus: function() {
				self.overlay.hide();
			},
			onResizeStart: function() {
				ui.window.showunderlay(this);
				self.overlay.show();
			},
			onResizeComplete: function() {
				//ui.window.underlay.hide();
				self.overlay.hide();
				this.coord = this.element.getCoordinates();
			},
			onDragStart: function(){
				//console.log('darg start', ui.window.underlay);
				//ui.window.showunderlay(this);
				//self.overlay.show();
			},
			'onDragComplete': function() {
				//console.log('darg com', ui.window.underlay);
				//ui.window.underlay.hide();
				//self.overlay.hide();
				this.coord = this.element.getCoordinates();
			},
			mousedown: function() {
				self.focus();
			},
			resizeComplete: function(){
				self.maximized = false;
				this.coord = this.element.getCoordinates();
			},
			injected: function() {
				self.adaptLocation();
			}
		});

		if (this.resizeHandlers)
		this.resizeHandlers.each(function(handler) {
			handler.addEvents({
				'mousedown': function() {
					//ui.window.showunderlay(self);
				},
				'mouseup': function() {
					//ui.window.underlay.hide();
				}
			});
		});
	},

	/*
	Function: focus
		If minimize normalize and fireEvent OnFocus

	Returns:
		(void)
	*/
	focus: function(){
		if (this.minimized){
			this.normalize();
			ui.window.resetMinimized();
		} else
			if (this.maximized && this.options.resizeOnDragIfMaximized)
			this.normalize();
		else
			ui.window.focus(this);

		if (this.state != 'default')
			this.setState('default');
	},


	/*
	Function: control
		handle window controls' actions

	Arguments:
		actions - (string) minimize,maximize,close

	Returns:
		this
	*/
	control: function(action){
		this[action]();
		return this;
	},

	/*
	Function: minimize
		This action method displays the minimized window

	Returns:
		(void)
	*/
	minimize : function() {

		this.fireEvent('minimize');
		this.disableDrag();

		this.coord = this.element.getCoordinates();

		this.maximized = false;
		this.minimized = true;

		this.setState('minimized');

		var coord = ui.window.getcoord('minimized');

		// console.log('--',coord);

		this.element.setStyles(coord);

		ui.window.focus();
	},

	/*
	Function: maximize
		private function

		This action method set the size to fit the window container

	Returns:
		(void)
	*/
	maximize: function(){
		if (this.maximized) this.normalize();
		else {

			this.coord = this.element.getCoordinates();
			this.max = this.container.getCoordinates();

			console.log(this.coord);

			this.setStyles(this.max);

			this.minimized = false;
			this.maximized = true;
			this.fireEvent('maximize');
			this.fireEvent('resize');
		}

		return this;
	},

	/*
	Function: normalize
		Normalize window

	Returns:
		(void)
	*/
	normalize: function(){
		var self = this;

		this.fireEvent('normalize');
		this.element.setStyles(this.coord);
		this.setState('default');

		this.maximized = false;
		this.minimized = false;

		// c'est moche
		// this.fireEvent('onResizeDrag');

		(function(){ self.enableDrag(); }).delay(1000);

		return this;
	},

	storeCoordinates: function() {
		this.coord = this.element.getCoordinates();
	},

	/*
	Function: close
		Close window

	Returns:
		(void)
	*/
	close: function(){
		this.fireEvent('close');
		ui.window.close(this);
		this.fireEvent('closed');

		return this;
	}
});

