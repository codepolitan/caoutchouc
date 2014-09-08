/*
	Class: UI.Split
		Minimalistic Split Container

	Extends:
		<UI.Container>

	Require:
		<UI.Component>
		<UI.Container>
		<UI.Scroll>

	Arguments:
		options

	Options:

	Returns:
		split object.

	Example:
		(start code)
		var container = new UI.Split(node).inject(document.body);

		container.node[0].setContent('ajax','side.php');
		container.node[1].setContent('ajax','content.php');

		(end)
	*/

UI.Split = new Class({

	Extends: UI.Container,

	name: 'split',

	options: {
		name: 'split',
		type: 'vertical',

		content: null,

		node:[{
			name: 'main'
        }, {
			name: 'side',
			width:'250px'
        }],
        foot: null,
        head:null,
        wireframe: false,
		splitter: true,
		modifier: {
			vertical: 'width',
			horizontal: 'height'
		}
	},

	/*
		function : initialize

			see : UI.Component._initClass()

	*/
	initialize: function(options){
		this.parent(options);

	},

	/*
		function : _initClass

			see : UI.Component._initClass()

	*/
	_initClass: function(){
		this.parent();

		this.element.addClass('ui-split');
	},

	/*
		function : _initComponent

			see : UI.Component._initComponent()

	*/
	_initComponent: function() {
		this.parent();

		var self = this;

		this._initFixed();
		this._initSplitter();
		this._initSize();

		this.addEvent('resize', function() {
			//_log('split resize');
			self._render();
			self.node.each(function(n) {
				n.fireEvent('resize');
			});
		});
	},

	/*
		function : _initComponent

			see : UI.Component._initComponent()

	*/
	_initSize: function() {
		var self = this,
			opts = this.options,
			node = opts.node;

		var size = this.element.getSize();
		var n = this.node;

		var offset = 3;

		// will be improved

		if (this.options.type == 'vertical') {
			n[0].setStyle('margin-right', offset);

			if (this.fixed > 0)
				n[0].setStyle('width', size.x - n[1].element.getSize().x - offset);
			else
				n[1].setStyles({
					width: size.x - n[0].element.getSize().x - offset,
					left: n[0].element.getStyle('width') - this.element.getCoordinates().left + offset
				});


			this.splitter.setStyle('left', this.node[0].element.getStyle('width'));
			this.splitter.setStyle('padding-top', this.element.getStyle('padding-top'));
		} else {
			n[0].setStyle('margin-bottom', offset);

			if (this.fixed > 0)
				n[0].setStyle('height', size.y - n[1].element.getSize().y - offset);
			else
				n[1].setStyle('height', size.y - n[0].element.getSize().y - offset);

			this.splitter.setStyle('top', this.node[0].element.getStyle('height'));
		}

		this.size = size;
	},

	_initFixed: function() {
		var self = this,
			opts = this.options,
			node = opts.node;

		if (node[0][opts.modifier[opts.type]]) {
			this.fixed = 0;
			this.fluid = 1;
		} else if (node[1][opts.modifier[opts.type]]) {
			this.fixed = 1;
			this.fluid = 0;
		} else this.fixed = null;


		/*if (this.fixed !== null) {
			if (this.node[this.fluid].head)
				this.node[this.fluid].head.addEvent('click', function(){
					self.toggleSide();
				});
		}*/



		/*this.node[this.fluid].setMenu({
			name: 'toggle',
			klss: 'right small',
			drag: true,
			menu: [{
				text: 'Side',
				call: function(){
					self.toggleSide();
				}
			}]
		});*/
	},

	/*
		function : buildSplitter

			Build splitter element depending on skin def

	 */
	_initSplitter: function() {
		var self = this,
			opts = this.options;

		var min = 66;

		this.splitter = new Element('div',{
			'class': 'ui-splitter'
		}).inject(this.node[0],'after');

		// Will be handled differently and optionnally
		if (this.options.type == 'vertical') {
			this.draglimit = {
				x: [min,this.element.getSize().x - min],
				y: [0,0]
			};
		} else {
			this.draglimit = {
				x: [0,0],
				y: [min,this.element.getSize().y - min]
			};
		}

		var dragMove = new Drag.Move(this.splitter, {
			limit: this.draglimit,
			snap: 4,
			onStart: function() {
				self.fireEvent('resizeStart');
				self.splitter.addClass('ui-active');
			},
			onDrag: function() {
				if (!opts.wireframe) {
					self._render();
					self.fireEvent('resize');
				}
			},
			onComplete: function() {
				self.splitter.removeClass('ui-active');
				self._render();
				self.fireEvent('resize');
			}
		});

		this.addEvents({
			resize: function() {
				if (self.options.type == 'vertical') {
					dragMove.limit = {
						x: [min,self.element.getSize().x - min],
						y: [0,0]
					};
				} else {
					dragMove.limit = {
						x: [0,0],
						y: [min,self.element.getSize().y - min]
					};
				}
			}
		});

		return;
	},

	/*
		function : _initEvents

			_initEvents
	*/
	_initEvents: function(){
		this.parent();

		var self = this;

		this.addEvents({
			resize: function() {
				//_log('split resize', self.options.name, self.options.type);
				self._initSize();

			},
			onInjected: function() {
				self._initSize();
				//self._render();
			}
		});
	},

	toggleSide: function() {
		//_log('toggle');
		//_log(this.node[this.fixed].element,this.node[this.fixed].element.getStyle('width'));
		var modifier = 'width';

		if (this.options.type == 'horizontal')
			modifier = 'height';

		var content = this.node[this.fixed].content;
		var element = this.node[this.fixed].element;

		if (element.getStyle(modifier).toInt() < 20) {
			element.setStyle(modifier, this.options[modifier]);
			content.setStyle('display','block');
		}
		else  {
			this.options[modifier] = element.getStyle(modifier);
			element.setStyle(modifier, '23px');
			content.setStyle('display','none');
		}

		this._initSize();
		this.fireEvent('resize');
	},

	/*
		function : render

			render
	*/
	_render: function() {
		//_log('split view _remndre');
		var opts = this.options,
			node = this.node;

		var size = this.element.getSize();

		var splittercoord = this.splitter.getCoordinates();
		var space = splittercoord[opts.modifier[opts.type]];

		if (this.options.type == 'vertical') {
			//_log('---');
			this.splitter.setStyle('top', this.element.getStyle('padding-top'));
			node[0].setStyle('width', splittercoord.left - this.element.getCoordinates().left);
			node[1].setStyles({
				width: size.x - node[0].element.getSize().x - space,
				left: splittercoord.left - this.element.getCoordinates().left + 3
			});
		} else {
			node[0].setStyle('height', splittercoord.top - this.element.getCoordinates().top);
			node[1].setStyles({
				height: size.y - node[0].element.getSize().y - space,
				top: node[0].element.getSize().y + space
			});
		}
	}
});
