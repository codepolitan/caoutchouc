
/**
 * UI Window Class
 * 
 * @class UI.Window
 * @extends {UI.Container}
 * @type {Class}
 */
define([
	'UI/Window/controller',
	'UI/Container/Container',
	'UI/Control/Button'
], function(
	controller,
	Container,
	ButtonControl
) {

	var exports = new Class({

		Extends: Container,

		name: 'window',

		/**
		 * options
		 * @type {Object}
		 */
		options: {
			name: 'window',
			title: 'Window',

			container: $(document.body),
			context: 'top',

			content: true,
			// Size options
			width: 220,
			height: 360,

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
			/*dragLimitX: [-1000, window.getWidth() + 1000],
			dragLimitY: [26, window.getHeight() + 1000],*/
			dragHandlers: ['head', 'foot'],
			//hideContentOnDrag: true,


			useUnderlay: true,
			useOverlay: true,

			hideOnDrag : true,

			// Resize options
			resizable: true,
			resizeLimitX: [160, screen.width],
			resizeLimitY: [260, screen.height],
			resizeOnDragIfMaximized: false,
			resizeBorders: ['top','right','bottom','left']
		},

		/**
		 * [initialize description]
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		initialize: function(options) {
			this._initController();
			this.parent(options);


			this._initLocation();
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

			this.inject(this.options.container);
		},

		/**
		 * [_initController description]
		 * @return {[type]} [description]
		 */
		_initController: function() {
			if (!ui.window) {
				this.controller = ui.window = controller;

				ui.window.init();
			}

		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function() {
			this.parent();

			//this._initContent();

			//this._initShim();




			this._initControl(this.options.controls);
		},

		_initShim: function() {
			this.shim = new Element('iframe', {
				src: 'javascript:false;document.write("");',
				scrolling: 'no',
				frameborder: 0,
				styles: {
					top:0,
					left:0,
					zIndex: '1',
					position: 'absolute',
					border: 'none',
					filter: 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)'
				},
				'class': 'iframeShim'
			}).inject(this.element, 'top').store('IframeShim', this);
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

			// this.title = new UI.Text({
			// 	type: 'title',
			// 	text: this.options.title
			// }).inject(this.head);
		},

		/*
		Function: buildControls
			private function

			Create window controls that allow window close, maximize and minimize

		Returns:
			(void)
		*/
		_initControl: function(){
			return;
			var opts = this.options;

			if (!this.head) return;

			//_log('buildControls');
			if (!this.options.controls) { return; }
			var self = this;

			this.controls = new Element('div', {
				'class': opts.name+'-control'
			}).addEvent('click',function(e) { e.stop(); })
			.inject(this.head);

			opts.controls.each(function(action){
				new ButtonControl({
					icon: action,
					text: action,
					klss: 'button-'+action
				}).addEvent('press', function(ev) {
					//_log('press', ev);
					self.control(action);
				}).inject(self.controls);
			});

			this.addEvents({
				'minimize': function() { this.controls.hide(); },
				'normalize': function() { this.controls.show(); }
			});

			this.dragHandlers.push(this.controls);

			//this.fireEvent('resize');
		},

		_initBody: function(options) {
			this.fireEvent('resize');

			this.body = new Element('div')
				.addClass('container-body')
				.inject(this.element);

			this.addEvents({
				'minimize': function() { this.body.hide(); },
				'normalize': function() { this.body.show(); }
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
				minimize: function() { this.body.hide(); },
				normalize: function() { this.body.show(); }
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
			return;
			if (this.title && this.head)
				return this.title.set('text', title);
		},

		/*
		Method: _initClass
			private function

			_initClass container related class

		Returns:
			(void)
		*/
		_initClass: function(){
			this.parent();

			this.element.addClass('ui-window');
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

			this.addEvents({
				onFocus: function() {
					//_log('OnFocus');
				},
				injected: function() {
					self.adaptLocation();
				},
				onResizeStart: function() {

				},
				onResizeComplete: function() {
					this.coord = this.element.getCoordinates();
				},
				onDragStart: function(){
					//_log('darg start', this);
				},
				'onDragComplete': function() {
					//_log('darg com', ui.window.underlay);
					this.coord = this.element.getCoordinates();
				},
				resizeComplete: function(){
					self.maximized = false;
					this.coord = this.element.getCoordinates();
				}
			});


			this.element.addEvents({
				mousedown: function() {
					self.focus();
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

		_initUnderlay: function() {
			//_log('_initUnderlay', this.options.container);
			var self = this;

			var container = this.options.container || $(document.body)

			//_log(container);

			this.underlay = new Element('div', {
				'class': 'dialog-underlay',
				styles: {
					zIndex: 900
				}
			}).inject(container);

			this.underlay.addEvents({
				mousedown: function() {
					//_log('click underlay');
					//_log(self.editForm.control.apply);
					self.element.addClass('reveal-window');
				},
				mouseup: function() {
					//_log('click underlay');
					//_log(self.editForm.control.apply);
					self.element.removeClass('reveal-window');
				},

			});


			this.underlay.show();

	 		this.addEvent('close', function(){
				self.underlay.destroy();
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

			// _log('--',coord);

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

				//_log(this.coord);

				this.setState('maximized');

				//this.setStyles(this.max);
				//
				this.setStyles({
					position: 'absolute',
					width: '100%',
					height: '100%',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0
				});

				this.minimized = false;
				this.maximized = true;
				//this.fireEvent('maximize');
				//this.fireEvent('resize');
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
			//_log('close');
			ui.window.close(this);
			this.fireEvent('closed');

			return this;
		}
	});

	return exports;
});
