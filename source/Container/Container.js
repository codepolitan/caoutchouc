/*
	Class: UI.Container
		The UI.Container class defines objects manage the content of the container
		that manage containers use by several object like windows, menus.


	Extends:
		<UI.Component>

	Require:
		<UI>
		<UI.Component>
		<UI.Scroll>

	Arguments:
		options

	Options:
		- width - (integer/string) Width of the container wrapper in px or percent
		- height - (integer/string) Height  of the container wrapper in px or percent
		- scroll - (string) hidden, scrollbar or menu
		- tag - (string) Element's tag
		- contentTag - (string) Content's tag

		- content - (object) Object containing content element's options
		- onLoadComplete - (function) Function to fire on list load complete

	Returns:
		Container object.

	Example:
		(start code)
		var container = new UI.Container({
			width			: 260,
			height			: 400,
			scroll			: true
		}).setContent('content','content container');
		(end)


	Implied global:
		UI,
		Class,Element,Request,Scroller

*/
UI.Container = new Class({

	Extends: UI.Component,

	name: 'container',

	options: {
		name: 'container',

		node: null,
		head: null,
		content: null,
		foot: null,

		tag: 'div',
	},


	initialize: function(options){
		this.parent(options);

		this._initComponent();

		return this;
	},

	/*
	Method: _initElement
		private function

		Creates html structure and inject it to the dom. The container is _initElement with two elements: the wrapper and the content.
		If the option scroll is set to true, it will also add the scrollbar object

	Returns:
		(void)

	See also:
		<UI.Component::_initElement>
	*/
	_initElement: function() {
		this.parent();

		var opts = this.options;
		this.menu = {};

		if ( opts.head ) this._initHead( opts.head );
		if ( opts.menu ) this.setMenu( opts.menu );
		if ( this.name == 'window' ) this._initContent();
		if ( opts.useOverlay ) this._initOverlay();

		if ( opts.foot ) this._initFoot( opts.foot );
	},

	/*
		function : _initContainer

			Build the split containers

	*/
	_initComponent: function() {
		var self = this,
			opts = this.options;

		if (opts.node === null) return;

		this.node = [];

		if (typeOf(opts.node) == 'array') {
			opts.node.each(function(node,i){
				self.addComponent(node);
			});

		} else if (typeOf(opts.node) == 'object') {
			var node = opts.node;

			this.addComponent(node);
		}

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

		this.element.addClass('ui-container');
	},

	/*
	Method: _initEvents
		private function

		_initEvents container related events

	Returns:
		(void)
	*/
	_initEvents: function() {
		this.parent();
		var self = this;
	/*	this.addEvents({
			resize: function() {
				console.log('resize');
			}
		});
*/
	},

	/*
	Method: _initHead
		private function

		create an overlay displayed when container is disabled (when moved or resized)

	Returns:
		(void)
	 */
	_initHead: function() {
		var self = this;

		this.head = new Element('div')
			.addClass('container-head')
			.inject(this.element,'top');

		this.addEvents({
			resize: function() {
				//console.log('resize from head', this, this.head.getSize().y+'px');
				this.element.setStyle('padding-top', this.head.getSize().y+'px');
			}
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
	Method: setMenu
		inject a menu in da head



	Returns:
		(void)
	 */
	setMenu: function(opts, comp) {

		var self = this;
		comp = comp || 'head';

		if (!this.head)
			this._initHead();

		var menu = new UI.Menu(opts);

		this.menu[opts.name] = menu;

		// console.log('setMenu', opts.name, menu);

		menu.addEvents({
			'toggle': function() {
				self.fireEvent('resize');
			},
			'change': function(value) {
				//console.log('container menu', value);
				self.fireEvent('menuChange', value);
			}
		}).inject(this.head);

		this.addEvents({
			onMinimize: function() {
				//console.log(menu);
				menu.hide();
			},
			onNormalize: function() {
				menu.show();
			}
		});

		//  need to find an event driven solution
		this.element.setStyle('padding-top', self.head.getSize().y+'px');

		return menu;
	},

	/*
	Method: _initFoot
		private function

		inject a container, add it to the bottom

	Returns:
		(void)
	 */
	_initFoot: function(options) {
		var self = this;

		this.foot = new Element('div')
			.addClass('container-foot')
			.inject(this.element,'bottom');

		this.addEvents({
			resize: function(){
				//console.log('resize from foot', this.foot.getSize().y+'px');
				this.element.setStyle('padding-bottom', this.foot.getSize().y+'px');
			}
		});
		return this;
	},

	focus: function(){
		this.fireEvent('focus');
	},

	/*
	Method: _initOverlay
		private function

		create an overlay displayed when container is disabled (when moved or resized)

	Returns:
		(void)
	 */
	_initOverlay: function() {
		this.overlay = new Element('div', {
			'class': 'ui-overlay',
			style: {
				display: 'none'
			}
		}).inject(this.element);

		this.addEvent('onLoadComplete', function() {
			this.overlay.hide();
		});

		this.overlay.hide();
	},

	close: function() {

	}
});
