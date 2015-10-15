/*
	Class: UI.Context
		Create a context menu

	Extends:
		<UI.Menu>

	Arguments:
		options

	Options:
		contexts - (array) An array containing contexts definition. A context definition is an object composed of following keys :
			a name key, who is the context name,
			a target key, who define on wich elements the context menu will be attached. It could be a CSS3 target as well.
			a menu key, who is a menu list as defined in <UI.Menu>.

	Discussion:
		We must still add methods to set dynamically new contexts, ...

	Example:
		(start code)
		var context = new UI.Context({
			contexts : [
				{
					name : 'workspace',
					target	: '.app-workspace',
					menu		: [
						{ text: 'Workspace menu'},
						{ text		: 'separator' },
						{
							text: 'Hello world...',
							action	: function(){ alert('Hello world!') }
						}
						{ text		: 'viewSource'},
						{ text		: 'separator' },
						{ text		: 'deleteCategory'}
					]
				},
				{
					name: 'pageinfo',
					target: '[id^=pageinfo]',
					menu: [
						{
							text: 'editCategory',
							action: function(){ this.test('dorpdown') }.bind(this)
						},
						{ text: 'editCategoryApparence'}
					]
				}
			]
		});
		(end)

	Implied global:
		UI,ui,
		$,
		Class,Event,	Window,
		document

*/

UI.ContextTool = new Class({

	Extends: UI.Menu,

	name: 'context',

	options:{
		name: 'context',
		scope: $(document.body),
		container: $(document.body),
		trigger: 'contextmenu'
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

	initialize: function(options){
		this.parent(options);

		_log.debug(this.options.container, this.element);

		this.element.inject(this.options.container);

		this._initContext();
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
		var self = this,
			opts = this.options;

		_log.debug('UI.MEnu._initElement()', opts);

		this.element = new Element('div', {
			'class': 'ui-context',
			zIndex: opts.zIndex,
			display: 'none'
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

	_initContext: function(){
		var self = this;
			opts = this.options;
			scope = opts.scope || $(document.body);

		_log.debug(scope, scope.getElements(opts.target));

		var delegation = self.options.trigger+':relay('+opts.target+')';

		_log.debug(delegation);

		scope.addEvent(delegation, function(ev) {
			ev.stop();
			ev.preventDefault();
			ev.stopPropagation();

			self.target = ev.target;

			self.show(ev);
		});


		return this;
	},

	addList: function() {

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
		//_log.debug('removeContext',this.options.scope);
		this.els.each(function(el) {
			el.removeEvents('contextmenu');
		});

		/*this.options.contexts.each(function(context){
			this.options.scope.getElements(context.target).each(function(el){
				//_log.debug(context.target,el);
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

	setPosition: function(x, y){
		var self = this;
			opts = this.options;
			container = opts.container;

		

		if ((x === null) || (y === null)) {
			return;
		}

		var pos = container.getPosition();

		_log.debug(pos, x, y);
		var y = y - pos.y;

		var coor = this.element.getCoordinates(container);
		var top = y;
		var left = x + this.options.container.getScrollLeft();

		if ((x + coor.width) > this.options.container.getWidth()) { left =  left - coor.width; }
		if ((y + coor.height) > this.options.container.getHeight()) {
			//_log.debug('top', top);
			top =  top; // - coor.height;
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
	hide: function(){
		clearTimeout(this.timer);
		this.timer = (function() {
			this.close();
		}).delay(this.options.timerOnHide,this);
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

	show: function(e){
		this.fireEvent('show', e.target);

		this.element.show();
		var coord = this.content.getCoordinates();
		//this.setSize(coord.width, coord.height);
		this.setPosition(e.client.x,e.client.y);

		return this;
	}
});
