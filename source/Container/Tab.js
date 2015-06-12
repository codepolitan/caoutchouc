/*
	Class: UI.TabView
		Creates a tabbar that let you manage inner container.

	Extends:
	<UI.Container>

	Need refactor
*/
/**
 * [initialize description]
 * @class  UI.Container
 * @extends {UI.Component}
 * @author Jerome Vial
 */
define([
	"UI/Container/Container"
], function(
	Container
) {

	var exports = UI.Tab = new Class({

		Extends: Container,

		options: {
			clss: 'tab',
			name: 'tab',
			base: 'container',

			head: true,
			content: null,
			node:[{
				name: 'one'
	        }, {
				name: 'two'
	        }],
	        comp: ['body']
		},
		/**
		 * [initialize description]
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		initialize: function(options){
			this.list = [];
			this.components = [];

			this.parent(options);

			
		},
		/*
		Function: setContent

		Set Content of the current container (tab)
		*/
		setContent: function(method, source, options){
			this.active.setContent(method, source, options);
		},

		/*
			Function: add

				Create tab and its related container and addEvent
		 */
		addTab: function(container, position){
			//_log('AddTab', this, container);
			var self = this,
				opts = container.options;

			var text = opts.text || opts.name;

			var tab = new UI.Button({
				type: 'tab',
				text: text,
				name: opts.name,
				onPress: function(e){
					self.activate(container);
				}
			}).inject(this.bar);

			container.inject(this.body);

			this.components.push(container);

			if (this.components.length == 1) {
				this.activate(container);
			} else {
				container.hide();
			}

			container.element.store('tab', tab);

			if (this.active == container)
				self._setActiveTab(tab);
		},

		/*
		Function: setActive

		Set wich tab should be activated
		*/
		setActive: function(container){

			if (typeOf(container) == 'object') {
				var index = this.list.indexOf(container);

				if (index >= 0) {
					this.list[index].setState('active');
					this.list[num].fireEvent('click');
				}
			}
		},

		activate: function(container) {
			if (typeOf(container) != 'object') return;

			if (this.active)
				this.active.hide();

			container.show();
			container.fireEvent('resize');

			this._setActiveTab(container.element.retrieve('tab'));

			this.active = container;
			container.fireEvent('resize');

			return this;
		},

		_initElement: function() {
			this.parent();

			this._initBar();
		},

		/*
			function : _initContainer

				Build the split containers

		*/
		_initComponent: function() {
			var self = this,
				opts = this.options;

			this.components = [];

			if (opts.node === null) return;

			this.node = [];


			if (!this.layout)
				this.layout = {};

			opts.node.each(function(node,i){
				if (!node.component)
					node.component = 'container';

				node.container = self.content;
				node.main = self.main;

				var container = new UI[node.component.capitalize()](node);

				container.addEvent('focus', function() {
					self.activate(container);
				});

				self.components.push(container);

				self.addEvent('resize', function() {
					//_log('tab resize,, views', container.name);
					container.fireEvent('resize');
				});

				self.node.push(container);

				if (i < 1) {
					self.activate(container);
				}

				self.addTab(container);
				if (i > 0 )	container.hide();


				self.layout[self.main][container.name] = container;
				ui.node[self.main][node.name] = container;

			});

			//self._initSplitter();
			//self._initSize();
		},

		_initClass: function(){
			this.parent();

			this.element.addClass('ui-tab');
		},

		/*
		Function: add

		Create tabbar and add tabs
		*/
		_initBar: function(){
			var self = this;
			this.bar = new UI.Component({
				tag: 'div',
				klass: 'tab-bar',
				name: 'bar'
			}).inject(this.head, 'bottom');

			this.addEvent('resize', function() {
				//self.element.setStyle('padding-top', self.head.getSize().y+'px');
			}.bind(this));
		},


		/*
		Function: _initEvents

		Set some behaviours
		*/
		_initEvents: function(){
			this.parent();
			var self = this;

			this.addEvents({
				resize: function() {
					self.components.each( function(c){
						c.fireEvent('resize');
					});
				},
				injected: function(){

				}
			});
		},

		_setActiveTab: function(tab) {
			if (!tab) return;

			if (this.tab) {
				this.tab.element.removeClass('ui-selected');
				this.tab.setState('default');
			}

			tab.addClass('ui-selected');
			tab.setState('active');

			this.tab = tab;
		}
	});

	return exports;
});
