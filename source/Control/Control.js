/*
	Class: UI.Control
		UI.Control is the base class of most control compoenents.
		It provides mainly functions for accessibilty

	Extends:
		<UI.Component>

	Arguments:
		options

	Returns:
		object.

	Implied global:
		Class, Element, UI

	Discussion:

*/

UI.Control = new Class({

	Extends: UI.Component,

	options: {
		//disabled: false
	},


	isEnable: function() {
		//console.log(this.state)
		if (this.state == 'disabled')
			return false;
		else return true;
	},

	isActive: function() {
		if (this.state == 'active')
			return true;
		else return false;
	},

	/*
		function : _initEvents

			Build the split containers

	*/
	_initEvents: function(){
		var self = this;

		//this.element.set('tabindex', 0);

		this.element.addEvents({
			click: function(e){
				//e.stopPropagation();
				self.fireEvent('click');
			},
			mouseup: function(){
				self.fireEvent('mouseup');
			}
		});
	}
});

