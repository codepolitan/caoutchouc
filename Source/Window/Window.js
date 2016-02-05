/**
 * UI Window Class
 * @class UI.Window
 * @extends {UI.Container}
 * @type {Class}
 */
define(function(require, exports, module) {

	var controller = require('UI/Window/controller');
	var Container = require('UI/Container/Container');
	var ButtonControl = require('UI/Control/Button');

	var _log = __debug('ui-window');

	var Win = new Class({

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

			hideOnDrag: true,

			// Resize options
			resizable: true,
			resizeLimitX: [160, screen.width],
			resizeLimitY: [260, screen.height],
			resizeOnDragIfMaximized: false,
			resizeBorders: ['top', 'right', 'bottom', 'left']
		},

		/**
		 * initialize
		 * @param  {Object} options
		 * @return {void}
		 */
		initialize: function(options) {
			this._initController();
			this.parent(options);


			this._initLocation();
			this.adaptLocation();

			if (this.options.position == 'fixed') {
				this.element.setStyle('position', 'fixed');
			}

			ui.window.register(this);

			if (this.options.focus) {
				ui.window.focus(this);
			}

			window.onresize = function(event) {
				ui.window.resetMinimized();
			};

			this.inject(this.options.container);
		},

		/**
		 * init controller
		 * @return {void}
		 */
		_initController: function() {
			if (!ui.window) {
				this.controller = ui.window = controller;

				ui.window.init();
			}

		},

		/**
		 * init element
		 * @return {void}
		 */
		_initElement: function() {
			this.parent();

			//this._initContent();

			//this._initShim();

			this._initControl(this.options.controls);
		},

		/**
		 * init Shim
		 * @return {void}
		 */
		_initShim: function() {
			this.shim = new Element('iframe', {
				src: 'javascript:false;document.write("");',
				scrolling: 'no',
				frameborder: 0,
				styles: {
					top: 0,
					left: 0,
					zIndex: '1',
					position: 'absolute',
					border: 'none',
					filter: 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)'
				},
				'class': 'iframeShim'
			}).inject(this.element, 'top').store('IframeShim', this);
		},

		/**
		 * Create a new head element, set class and styles and inject
		 * @param  {Object} options
		 * @return {void}
		 */
		_initHead: function(options) {
			this.parent(options);
			this.dragHandlers.push(this.head);

			// this.title = new UI.Text({
			// 	type: 'title',
			// 	text: this.options.title
			// }).inject(this.head);
		},

		/**
		 * Create window controls that allow window close, maximize and minimize
		 * @return {void}
		 */
		_initControl: function() {
			return;

			var opts = this.options;

			if (!this.head) {
				return;
			}

			//_log.debug('buildControls');

			if (!this.options.controls) {
				return;
			}

			var self = this;

			this.controls = new Element('div', {
					'class': opts.name + '-control'
				}).addEvent('click', function(e) {
					e.stop();
				})
				.inject(this.head);

			opts.controls.each(function(action) {
				new ButtonControl({
					icon: action,
					text: action,
					klss: 'button-' + action
				}).addEvent('press', function(ev) {
					_log.debug('press', ev);
					self.control(action);
				}).inject(self.controls);
			});

			this.addEvents({
				'minimize': function() {
					this.controls.hide();
				},
				'normalize': function() {
					this.controls.show();
				}
			});

			this.dragHandlers.push(this.controls);

			//this.fireEvent('resize');
		},

		/**
		 * initBody
		 * @param  {Object} options
		 * @return {void}
		 */
		_initBody: function(options) {
			this.fireEvent('resize');

			this.body = new Element('div')
				.addClass('container-body')
				.inject(this.element);

			this.addEvents({
				'minimize': function() {
					this.body.hide();
				},
				'normalize': function() {
					this.body.show();
				}
			});
		},

		/**
		 * initFoot
		 * @param  {Object} options
		 * @return {void}
		 */
		_initFoot: function(options) {
			this.parent(options);
			this.dragHandlers.push(this.foot);

			this.addEvents({
				minimize: function() {
					this.body.hide();
				},
				normalize: function() {
					this.body.show();
				}
			});
		},

		/**
		 * set title html
		 * @param {string} title html formatted title
		 */
		setTitle: function(title) {
			return;

			if (this.title && this.head) {
				return this.title.set('text', title);
			}
		},

		/**
		 * _initClass container related class
		 * @return {void}
		 */
		_initClass: function() {
			this.parent();

			this.element.addClass('ui-window');
		},

		/**
		 * [_initEvents description]
		 * @return {void}
		 */
		_initEvents: function() {
			this.parent();

			var self = this;

			this.addEvents({
				onFocus: function() {
					//_log.debug('OnFocus');
				},
				injected: function() {
					self.adaptLocation();
				},
				onResizeStart: function() {

				},
				onResizeComplete: function() {
					this.coord = this.element.getCoordinates();
				},
				onDragStart: function() {
					//_log.debug('darg start', this);
				},
				'onDragComplete': function() {
					//_log.debug('darg com', ui.window.underlay);
					this.coord = this.element.getCoordinates();
				},
				resizeComplete: function() {
					self.maximized = false;
					this.coord = this.element.getCoordinates();
				}
			});


			this.element.addEvents({
				mousedown: function() {
					self.focus();
				}
			});

			if (this.resizeHandlers) {
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
			}
		},

		/**
		 * init Underlay
		 * @return {void}
		 */
		_initUnderlay: function() {
			//_log.debug('_initUnderlay', this.options.container);

			var self = this;

			var container = this.options.container || $(document.body);

			//_log.debug(container);

			this.underlay = new Element('div', {
				'class': 'dialog-underlay',
				styles: {
					zIndex: 900
				}
			}).inject(container);

			this.underlay.addEvents({
				mousedown: function() {
					//_log.debug('click underlay');
					//_log.debug(self.editForm.control.apply);
					self.element.addClass('reveal-window');
				},
				mouseup: function() {
					//_log.debug('click underlay');
					//_log.debug(self.editForm.control.apply);
					self.element.removeClass('reveal-window');
				},

			});

			this.underlay.show();

			this.addEvent('close', function() {
				self.underlay.destroy();
			});
		},

		/**
		 * focus
		 * @return {void}
		 */
		focus: function() {
			if (this.minimized) {
				this.normalize();
				ui.window.resetMinimized();
			} else
			if (this.maximized && this.options.resizeOnDragIfMaximized) {
				this.normalize();
			} else {
				ui.window.focus(this);
			}

			if (this.state != 'default') {
				this.setState('default');
			}
		},

		/**
		 * handle window controls' actions
		 * @param  {string} action minimize,maximize,close
		 * @return {Object}
		 */
		control: function(action) {
			this[action]();
			return this;
		},

		/**
		 * This action method displays the minimized window
		 * @return {void}
		 */
		minimize: function() {

			this.fireEvent('minimize');
			this.disableDrag();

			this.coord = this.element.getCoordinates();

			this.maximized = false;
			this.minimized = true;

			this.setState('minimized');

			var coord = ui.window.getcoord('minimized');

			// _log.debug('--',coord);

			this.element.setStyles(coord);

			ui.window.focus();
		},

		/**
		 * This action method set the size to fit the window container
		 * @return {Object}
		 */
		maximize: function() {
			if (this.maximized) {
				this.normalize();
			} else {

				this.coord = this.element.getCoordinates();
				this.max = this.container.getCoordinates();

				//_log.debug(this.coord);

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

		/**
		 * Normalize window
		 * @return {void}
		 */
		normalize: function() {
			var self = this;

			this.fireEvent('normalize');
			this.element.setStyles(this.coord);
			this.setState('default');

			this.maximized = false;
			this.minimized = false;

			// c'est moche
			// this.fireEvent('onResizeDrag');

			(function() {
				self.enableDrag();
			}).delay(1000);

			return this;
		},

		/**
		 * [storeCoordinates description]
		 * @return {void}
		 */
		storeCoordinates: function() {
			this.coord = this.element.getCoordinates();
		},

		/**
		 * Close window
		 * @return {void}
		 */
		close: function() {
			//_log.debug('close');
			ui.window.close(this);
			this.fireEvent('closed');

			return this;
		}

	});

	module.exports = Win;

});
