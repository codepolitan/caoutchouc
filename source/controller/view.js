
/*
	Object: ui.controller.container
		container controller.
		It handles focus, altitude, list, position, state...

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
		to be continued....

*/

ui.controller.container = {
	options: {
		version: '0.1',
		zBase: 100,
		zStep: 2,
		container: document.body,
		underlay: {
			tag: 'div',
			altitude: 99,
			klass: 'window-underlay'
		},
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
			offsetWidth: 4,
			offsetHeight: 4
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

	init: function(){
		this.list = [];
		this.zIndex = this.options.zBase;

		if (this.options.underlay.enable)
			this.buildunderlay();
	},

	/*
	Function: register
		Add passing window to the manage list

	Arguments:
		win - (object) the window class instance to register

	Returns:
		(void)
	*/


	register: function(container) {
		this.list.push(container);

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
		if (!$defined(win)) {
			//make next highest window focus
			var zIndex = 0;
			var window;
			for (var i = this.list.length - 1; i >= 0; i--) {
				var windowZIndex = this.list[i].element.getStyle('zIndex');
				if (windowZIndex >= zIndex && !this.list[i].minimized) {
					window = this.list[i];
					zIndex = windowZIndex;
				}
			}

			if (window) {
				window.focus();
			}

			return;
		} else if (win && this.active != win) {
			if (this.active && !this.active.minimized) {
				this.blur(this.active);
			}

			this.zIndex += this.options.zStep;
			win.element.style.zIndex = this.zIndex;

			this.active = win;
			win.fireEvent('focus');
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
		if ($defined(win) && !win.minimized) {
			win.setState('inactive');
			win.fireEvent('onBlur');
		} else if (this.active) {
			this.blur(this.active);
		}
	},

	minimize: function() {
		this.active.minimize();
	},

	/*
	Function: getMinimizedLocation
		Return the position of next minimized window

	Returns:
		location - (array) Array containing left and top position
	 */
	getMinimizedLocation: function() {
		var x = -100;
		var y = window.getHeight()-55;

		this.list.each(function(w,i) {
			if (w.state == 'minimized') {
				x += w.element.getComputedSize().totalWidth + 8;
			}
		});

		return [x, y];
	},

	/*
	Function: resetMinimizedLocation
		Replace minimized windows

	Returns:
		(void)
	*/
	resetMinimizedLocation : function(){
		var x = -150;
		var y = window.getHeight()-35;
		this.list.each(function(win) {
			if (win.state == 'minimized') {
				x += win.element.getComputedSize().totalWidth + 8;
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
		this.list.each(function(win) {
			if (win.state == 'maximized') {
				win.setSize({
					height: window.getHeight()-32,
					width: window.getWidth()
				});
			}
		});
	},

	closeAll: function(){
		this.list.each(function(view){
			this.close(view);
		},this);
	}
};

ui.controller.container.init();

