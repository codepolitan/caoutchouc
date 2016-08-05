/*
	Object: ui.controller.menu
		Window controller. It handles altitude, list, position and state

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
//var ui = ui || {};

define([

], function(

) {
	var exports = {
		options: {
			version: '0.1',
			zBase: 300,
			zStep: 2
		},

		list: [],
		zIndex: 300,

		/*
		Function: register
			Add passing menu to list of menus

		Arguments:
			win - (object) the window class instance to register

		Returns:
			(void)
		*/

		register: function(menu) {
			this.list.push(menu);
			if (menu.options.zIndex == 'auto') {
				menu.element.setStyle('zIndex', this.zIndex);
			} else {
				menu.element.setStyle('zIndex', menu.options.zIndex);
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

		close: function(menu) {
			//_log.debug('close...');
			menu = menu || this.active;
			menu.hide();
			menu.fireEvent('onClose');
			for (var i = this.list.length - 1; i >= 0; i--) {
				if (this.list[i] == menu) {
					menu.destroy();
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
			menu - (object) the menu class instance to focus

		Returns:
			(void)
		*/
		focus: function(win) {},

		closeall: function() {
			this.list.each(function(menu) {
				//menu.hideNow();
			}, this);
		},

		hideAll: function() {
			this.list.each(function(menu) {
				menu.hideNow();
			}, this);
		}
	};

	return exports;
});
