
/**
* Minimalistic ContextMenu Class
*
* @class UI.Context
* @Extends UI.Menu
* @Require Mootools
* @param {object} json
* @param {parent} container
* @return {parent} Class
* @example (start code)	new UI.Context(object); (end)
* @author Jerome Vial
* @copyright © 1999-2014 - Jerome D. Vial. All Rights reserved.
*/

UI.Context = new Class({

	Extends: UI.Menu,

	name: 'context',

	options:{
		name: 'context',
		scope: $(document.body),
		container: $(document.body),
		trigger: 'contextmenu',
		zIndex: 20,
		underlay: false
	},

	/*
	Constructor: initialize
		Construtor

	Arguments:
		options - (object) options

	See also:
		<UI.Menu::initialize>
		<UI.Element::initialize>
	*/

	/**
	 * [initialize description]
	 * @param  {[type]} options
	 * @return {[type]}
	 */
	initialize: function(options){
		this.parent(options);
		var opts = this.options;
		if (opts.underlay)
			this._initUnderlay();

		this.element.inject(opts.container);
		this._initContext();

		return this;
	},

	/*
	Function: _initElement
		private function

		
	Return:
		(void)

	See also:
		<UI.Component::_initElement>
	*/

	/**
	 * Call UI.Component _initElement, then create a menu wrapper
	 * @return {[type]}
	 */
	_initElement: function(){
		var self = this,
			opts = this.options;

		//console.log('UI.MEnu._initElement()', opts);

		this.element = new Element('div', {
			'class': 'ui-context',
			styles: {
				zIndex: opts.zIndex + 10
			}
		}).addEvents({
			mousediown: function(e){
				self.fireEvent('mousedown');
				e.stop();
			}
		});

		this.element.addClass('context-'+opts.name);

		if (opts.klss)
			this.element.addClass(opts.klss);

		if (opts.type)
			this.element.addClass('type-'+opts.type);

		this._initHead(opts.head);

		this.content = new Element('ul', {
			'class': 'menu-list'
		}).inject(this.element);

		this.addEvents({
			show: function() {
				self.content.getStyle('display', 'block');
			},
			hide: function() {
				self.content.getStyle('display', 'none');
			}
		});

		this.element.addEvent('click', function(e){
			e.stop();
		});

		this.element.hide();
	},


	/*
	Method: addContexts
		Attach context to elements (provided by contexts.target)

	Arguments:
		contexts - (array) an array containing contexts definition. See above in class' options for more details

	Return:
		this
	*/
	/**
	 * [_initContext description]
	 * @return {[type]}
	 */
	_initContext: function(){
		var self = this;
			opts = this.options;
			scope = opts.scope || opts.container;

		scope.getElements(opts.target).each(function(el) {
			//console.log(el);
			self.addTarget(el);
		});

		// self.element.addEvent('contextmenu', function(e){
		// 	e.stop();
		// });

		return this;
	},


	_initUnderlay: function() {
		var self = this,
			opts = this.options;


		var underlay = this.underlay = new Element('div', {
			'class': 'context-underlay',
			styles: {
				zIndex: opts.zIndex
			}
		}).addEvents({
			click: function(){
				underlay.setStyle('display', 'none');
				self.element.hide();
			}
		}).inject(opts.container);

		this.addEvents({
			show: function() {
				underlay.setStyle('display', 'block');
			}
		})
	},

	addList: function() {

	},

	addTarget: function(el) {
		var self = this;

		el.addEvent(self.options.trigger, function(e){
			e.stop();
			e.preventDefault();

			self.target = e.target;

			//console.log(e.target);

			//.hide(0);
			//self.buildMenu(context.menu);
			self.show(e);
		});
	},

	removeList: function() {

	},

	_initEvents: function() {
		this.parent();

		this.addEvents({
			show: function(){
				ui.menu.hideAll();
			}
		});
	},

	/*
	Method: removeContexts
		Remove context to elements (defined by target)

	Arguments:
		target - (string) target defining elements where context will be detached

	Return:
		this
	*/

	removeContexts: function(){
		//console.log('removeContext',this.options.scope);
		this.els.each(function(el) {
			el.removeEvents('contextmenu');
		});

		/*this.options.contexts.each(function(context){
			this.options.scope.getElements(context.target).each(function(el){
				//console.log(context.target,el);
				el.removeEvents('contextmenu');
			},this);
		},this);*/

		return this;
	},

	/*
	Method: setPosition
		private function

		Overwrite the setPosition method of UI.Menu to use mouse coordinates to set menu location

	Arguments:
		x - (integer) X mouse's coordinates
		y - (integer) Y mouse's coordinates

	Return:
		(void)

	See also:
		<UI.Menu::setPosition>

	*/

	setPosition: function(x,y){
		var opts = this.options,
			container = opts.container;

		if ((x === null) || (y === null)) {
			return;
		}

		var ctop = container.getPosition().y;

		var coor = this.element.getCoordinates();
		var top = y - ctop;
		var left = x + container.getScrollLeft();

		if ((x + coor.width) > container.getWidth()) { left =  left - coor.width; }
		if ((y + coor.height) > container.getHeight()) {
			//console.log('top', top);
			top = top - coor.height;
		}

		this.element.setStyles({
			'top' : top,
			'left' : left
		});
	},

	/*
		Method: show
			private function

			Hide 

		Arguments:
			e - (event) Event who provide cursor's position

		Return:
			this

		See also:
			<UI.Menu::show>
			<UI.Element::show>
	*/
/**
 * [hide description]
 * @return {[type]}
 */
	hide: function(){
		clearTimeout(this.timer);
		this.timer = (function() {
			this.close();
		}).delay(this.options.timerOnHide, this);
	},


	hideNow: function() {
		this.element.hide();
	},

	/*
		Method: show
			private function

			Overwrite the show method of UI.Menu to use mouse coordinates

		Arguments:
			e - (event) Event who provide cursor's position

		Return:
			this

		See also:
			<UI.Menu::show>
			<UI.Element::show>
	*/

	/**
	 * [show description]
	 * @param  {[type]} e
	 * @return {[type]}
	 */
	show: function(e){
		this.fireEvent('show', e.target);

		this.element.show();
		var coord = this.content.getCoordinates();
		//this.setSize(coord.width, coord.height);
		this.setPosition(e.client.x,e.client.y);

		return this;
	}
});
