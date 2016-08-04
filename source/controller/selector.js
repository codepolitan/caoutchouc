
/*
	Object: ui.controller.container
		Window controller.
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

ui.controller.selector = {
	options: {
		version: '0.1',
		zBase: 3000,
		zStep: 2,
		container: document.body,
	},

	/*
	Function: register
		Add the selector object to 

	Arguments:
		selector - (object) the window class instance to register

	Returns:
		(void)
	*/
	_register: function(selector) {
		this.list.push(selector);
	}
};

ui.controller.container.init();

