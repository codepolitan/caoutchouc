
/**
 * UI Selector Overlay Class
 * @class UI.Selector.Overlay
 * @extends {UI.Selector}
 * @type {Class}
 */
UI.Overlay = new Class({
	Implements: [Events, Options],

	options: {
		container: document.body,
		clss: 'selector-overlay',
		offset: '0',
		styles: {
			position: 'absolute',
			zIndex:'1000'
			//background: 'rgba(0,0,0,.2)'
		}
	},

	initialize: function(options){
		this.setOptions(options);
		this._initElement();
	},

	_initElement: function(){
		var self = this;
		var position = 'absolute';
		//if (element.isFixed()) position = 'fixed';
		var timer;
		this.element = new Element("div", {
			'class': this.options.clss
		}).setStyles(this.options.styles)
		.setStyle('position',position)
		.addEvents({
			'mouseover': function(e){

			},
			'click': function(e){
				e.stop();
				clearTimeout(timer);
					timer = (function(){
					self.fireEvent('click', self.el);
					self.hide();
				}).delay(200, this);
			},
			dblclick: function() {
				clearTimeout(timer);
				self.fireEvent('dblclick');
			}
		}).inject(this.options.container, 'top');
	},

	reach: function(el){
		this.el = el;
		var offset = this.options.offset;
		var c = el.getCoordinates();

		this.element.setStyles({
			'margin-top': c.top - offset,
			'margin-left': c.left - offset,
			'width': c.right - c.left +  (2 * offset),
			'height': c.bottom - c.top +  (2 * offset)
		});
	},

	remove: function(){
		this.element.destroy();
	},

	hide: function(){
		this.element.hide();
	},

	show: function(){
		this.element.show();
	},

	highlight: function(color){
		this.element.highlight(color);
	}
});
