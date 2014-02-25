/*
	Class: UI.Menu
		Creates a new menu, manages submenus and positionning as well

	Extends:
		<UI.Component>

	Arguments:
		options

	Options:
		- node
		- _parent - component
		- context -


		- name - (string) name of the compnent, it is automatically add to the css class
		- base - (string) base component, if define the name of it will be add the the css class

		- tag - (string) Tag name for menu elements

		- position - (string) Specify where the new menu must be positionned.
			It could be normal (element will be positionned on parent's side),
			over (element will be positionned over the parent element, used for <UI.Select>),
			bottom (element will be positionned on bottom of parent element, used for <UI.Toolbar>)

		- scrollToSelected - (boolean) Determine if a menu (specifically a <UI.Select>) should remember last item selected
		- scrollMargin - (integer) Determine remaining margin on top and bottom when a menu is too large to feet in window
		- menu - (array) Array containing menu definition

	Example:
		(start code)
		var submenu = new UI.Menu({
			container : this.container.element,
			underlay : this.options.underlay,
			zIndex : 1
		});
		(end)

	Implied global:
		- MooLego - UI,ui,
		- MooTools - Class, Element, Event, Fx, Window
		- Javascript - document

	Discussion
		Should use listView

*/


UI.Toolbar = new Class({

	Extends: UI.Component,

	name: 'toolbar',

	options: {
		base: 'component',
		name: 'toolbar'
	},

	/*
	Function: _initElement
		private function

		Call UI.Component _initElement, then create a menu wrapper

	Return:
		(void)

	See also:
		<UI.Component::_initElement>
	*/
	_initElement: function(){
		this.parent();

		this._initComponent();
	},

	/*
	Function: _initComponent
		private function

		Process the node object and inject the initialized component in the content of the container.

	Return:
		(void)

	Note:
		Override UI.Component._initComponent

	See also:
		<UI.Component::_initHead>
	*/
	_initComponent: function() {
		var self = this,
			opts = this.options,
			element = this.element;

		this.control = {};

		if (opts.comp.klss)
			element.addClass(opts.comp.klss);

		element.addClass('toolbar-' + opts.comp.name);

		opts.comp.list.each(function(n) {
			console.log('---', n, mnml.control);
			var comp = mnml.control[n];

			if (comp) {
				var clss = comp.clss || UI.Button;
				var opts = comp.opts || {};
				self.control[n] = new clss(opts).inject(element).addEvents({
					click: function() {
						if (self.control[n].isEnable())
							self.fireEvent('emit', n);
					}
				});
			}
		});
	}
});
