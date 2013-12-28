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

	Members:
		Control, Element, Extends, addEvents, bind, blur, _initElement,
	    components, control, element, fireEvent, focus, get, getForm, getParent,
	    getProperty, getSize, height, inject, input, text, name, options,
	    parent, props, set, _initEvents, setInput, setSize, type, value, width,
	    x, y

	Discussion:

*/

UI.Control = new Class({

	Extends: UI.Component,

	options: {
		//disabled: false
	},

	isEnable: function() {
		return true;
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
				e.stopPropagation();
				self.fireEvent('click');
			},
			mouseup: function(){
				self.fireEvent('mouseup');
			}
		});
	}
});