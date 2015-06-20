
/*
	Object: ui.controller.window
		Window controller. It handles windows cascading position, minimize position, focusing, ...

	Arguments:
		options - (object)

	Options:
		zBase - (integer)
		zStep - (integer)
		cascade - (object)
		stack - (object)

	Requires:
		<UI.Window>


	Implied global:
		ui,
		window

	Discussion:
		Stacks should be better implemented

*/

var ui = ui || {};

define([

], function(

) {
	var exports = {
		options: {
			version: '0.1',
			zBase: 1000,
			zStep: 2,
			container: document.body,
			cascade: {
				start: {
					x: 51,
					y: 101
				},
				step: {
					x: 20,
					y: 20
				},
				offset : [170,50]
			},
			stack: {
				offset: {
					x: 16,
					y: 16
				}
			},
			underlay: {

			},
			minimized: {
				coord: {
					width: 160,
					height: 50,
					bottom: -10,
					left: 32,
					offset: {
						x: 16
					}
				}
			},
			maximized: {
				coord: {
					width: 960,
					height: 760,
					top: 'auto',
					left: 'auto'
				}
			},
			normalized: {
				coord: {
					width: 220,
					height: 360,
					bottom: 10,
					top: 'auto',
					left: ''
				}
			}
		},

		/*
		Constructor: initialize
			Construtor

		Arguments:
			options - (object) options

		Returns:
			(void)
		*/

		init: function(container){
			_log('init');
			this.container = container;
			this.list = [];
			this.zIndex = this.options.zBase;
			this.group = {};

			//this.buildunderlay();

			window.addEvent('resize', function(){ this.resizeMaximizedWindow(); }.bind(this));
		},

		/*
		Function: register
			Add passing window to the manage list

		Arguments:
			win - (object) the window class instance to register

		Returns:
			(void)
		*/

		register: function(win, group) {
			//_log('register', win);
			this.list.push(win);

			if (group) {
				if (this.group[group])
					this.group[group] = [];

				this.group[group].push(win);
			}

			if (win.options.zIndex === 'auto') {
				win.element.setStyle('zIndex', this.zIndex);
				win.altitude = this.zIndex;
			}
			else {
				win.element.setStyle('zIndex', win.options.zIndex);
			}
			this.zIndex += this.options.zStep;
		},

		/*
		Function: close
			Destroy the provided window and focus to next one

		Arguments:
			win - (object) the window class instance to close and destroy

		Returns:
			(void)
		*/

		close: function(win) {
			win = win || this.active;
			win.hide();
			win.fireEvent('onClose');
			for (var i = this.list.length - 1; i >= 0; i--) {
				if (this.list[i] == win) {
					win.destroy();
					delete this.list[i];
					this.list = this.list.clean();
				}
			}
			this.focus();
		},

		/*
		Function: focus
			Increment max z-index and focus provided window

		Arguments:
			win - (object) the window class instance to focus

		Returns:
			(void)
		*/
		focus: function(win) {
			//_log('focus', win);
			if (win === null) {
				//make next highest window focus
				var zIndex = 0;
				for (var i = this.list.length - 1; i >= 0; i--) {
					var windowZIndex = this.list[i].element.getStyle('zIndex');
					if (windowZIndex >= zIndex && !this.list[i].minimized) {
						win = this.list[i];
						zIndex = windowZIndex;
					}
				}

				if (win) {
					win.focus();
				}

				return;
			} else if (win && this.active !== win) {
				if (this.active && !this.active.minimized) {
					this.blur(this.active);
				}

				this.zIndex += this.options.zStep;
				win.element.style.zIndex = this.zIndex;
				win.element.style.zoom = '1';

				this.active = win;
				win.fireEvent('focus');

				//_log('focus', win, win.grid, win.coord);
				if (win.grid) {
					this.list.each(function(w){
						win.setStyles(coord);
					});
				}

				return;
			}
		},

		/*
		Function: blur
			Blur active window

		Arguments:
			win - (object) the window class instance to blur

		Returns:
			(void)
		*/
		blur: function(win) {
			if ((win !== null) && !win.minimized) {
				win.setState('inactive');
				win.fireEvent('onBlur');
			} else if (this.active) {
				this.blur(this.active);
			}
		},

		minimize: function(win) {
			var w = win || this.active;
			w.minimize();
		},

		/*
		Function: getMinimizedLocation
			Return the position of next minimized window

		Returns:
			location - (array) Array containing left and top position
		 */
		getcoord: function(etat) {
			var opts = this.options;
			var x = 0;
			//_log('getcoord:', opts[etat]);
			var coord = opts[etat].coord;
			x += coord.left;

			this.list.each(function(w, i) {
				if (w.state === etat) {

					//_log('getStackCoord:', i, x, coord.width,coord.offset);

					x += (coord.width) + coord.offset.x;
				}
			});

		//	coord.offset = null;

		//	coord.left = x;

			return {
				width: coord.width,
				height: coord.height,
				bottom: coord.bottom,
				top: 'auto',
				left: x
			};
		},

		/*
		Function: resetMinimizedLocation
			Replace minimized windows

		Returns:
			(void)
		*/
		resetMinimized : function(){
			var etat = 'minimized',
				opts = ui.window.options,
				coord = opts[etat].coord;

			var x = 0;
			var y = coord.bottom;

			this.list.each(function(win, i) {
				if (win.state === 'minimized') {
					x += coord.width + coord.offset.x;
					win.setLocation(x, y);
				}
			});
		},

		/*
		Function: resizeMaximizedWindow
			Set new maximized size for all mamimized window

		Returns:
			(void)
		*/
		resizeMaximizedWindow: function(){
			//_log('resizeMaximizedWindow');

			this.list.each(function(win) {
				if (win.state === 'maximized') {
					win.setSize({
						height: window.getHeight()-32,
						width: window.getWidth()
					});
				}
			});
		},

		/*
		Function: getCascadeLocation
			Calculate the location of the window in the cascade

		Arguments:
			win - (object) the window class instance to get location

		Returns:
			location - (object) location coordinates { left : 100, top : 100 }
		*/
		getCascadeLocation: function(win){
			var location = {
				left : 71,
				top : 121
			};

			this.list.each(function(w, i) {
				if (w.state != 'minimized' && w.options.location == 'cascade') {
					location.left += this.options.cascade.step.x;
					location.top += this.options.cascade.step.y;
				}
			},this);
			return location;
		},

		/*
		Function: cascade
			Move every windows to its position in the cascade

		Returns:
			(void)
		*/
		cascade: function(group){
			var start = [51,101];
			var offset = [20,20];
			var zIndex = this.zIndex;
			var last;
			var list = [];

			if (group)
				list = this.group;
			else list = this.list;

			list.each(function(win){
				if (win.state === 'minimized')
					return;

				win.element.style.zIndex = zIndex++;

				start[0] += offset[0];
				start[1] += offset[1];

				win.element.morph({
					'left': start[0],
					'top': start[1]
				});

				win.location = 'cascade';
				last = win;
			});

			this.zIndex = zIndex;
		},

		/*
		Function: circle
			Move every windows to its position in the cascade

		Returns:
			(void)
		*/
		circle: function(group){
			//should be define in the skin sheet
			var center = [200,300];
			var offset = [];
			var radius = 200;
			var zIndex = this.zIndex;

			var i = 1;
			var length = (this.list.length);

			this.list.each(function(win){
				//if (win.state = 'minimized') return;

				win.element.style.zIndex = zIndex++;
				win.element.style.zoom = '1';

				var ratio = i/length*2;

				offset[0] = Math.cos(ratio*Math.PI);
				offset[1] = Math.sin(ratio*Math.PI);

				var left = center[0] + offset[0] * radius;
				var top = center[1] + offset[1] * radius;

				i++;

				win.element.morph({
					top: top,
					left: left
				});

				win.adaptLocation();
				win.location = 'circle';
			});

			this.zIndex = zIndex;
		},


		grid: function(group){
			//should be define in the skin sheet
			var size = [160,240],
				start = [100,100],
				offset = [20,20],
				zIndex = this.zIndex,
				row = 0,
				column = 0,
				coord= {};

			var length = (this.list.length);

			this.list.each(function(win, i){
				//if (win.state = 'minimized') return;

				win.element.style.zIndex = zIndex++;
				win.coord = win.getCoordinates();

				coord.left = start[0] + (offset[0] + size[0]) * column;

				//_log(column);

				if (coord.left > 1000) {
					coord.left = start[0];
					row++;
					column = 0;
				}

				coord.top = start[1] + (offset[1] + size[1]) * row;
				coord.width = size[0];
				coord.height = size[1];

				win.element.morph(coord);
				column++;
				win.adaptLocation();
				win.location = 'grid';

			});

			this.zIndex = zIndex;
		},

		closeall: function(){
			this.list.each(function(win){
				this.close(win);
			},this);
		},

		/*
		Function: buildunderlay
			_initElement an overlay for windows

		Arguments:

		Returns:
			(void)
		*/
		buildunderlay: function(container) {
			var opts = this.options.underlay;

			// should use ui.builder

			this.underlay = new Element('div', {
				'class': 'ui-underlay'
			}).inject(this.container);

			this.underlay.hide();
		},

		/*
		Function: buildunderlay
			_initElement an overlay for windows

		Arguments:

		Returns:
			(void)
		*/
		showunderlay: function(win) {
			this.underlay.setStyles({
				display: 'block',
				'zIndex': win.altitude
			});
		}
	};

	// window.addEvent('domready', function() {
	//     ui.window.init(document.body);
	// });

	return exports;

});

