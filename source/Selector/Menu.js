
/**
 * UI Selector Menu Class
 * @class UI.Selector.Menu
 * @extends {UI.Selector}
 * @type {Class}
 */
define([

], function(

) {

	var exports = new Class({

		Implements: [Events, Options],

		options: {
			container: document.body,
			//type: 'small',
			zIndex: 200,
			//clss: 'selector-menu',
			position: 'top left',
			location: 'outside',
			offset: [1,1],
			positionning: 'absolute'
		},

		initialize: function(container,options){
			this.setOptions(options);

			this.container = container;

			var offset = this.options.offset;

			_log.debug('selector-view', this.options);

			if (typeOf(offset) == 'number') {
				this.offset = [offset,offset];
			} else {
				this.offset = offset;
			}

			this.menus = [];

			this._initElement(container);
		},

		_initElement: function(container){
			//_log.debug('_initElement menu', this.options);

			this.element = new Element('ul', {
				'class': 'ui-menu type-selector',
				'zIndex': this.options.zIndex
			}).inject(container);

			this.fx = new Fx.Morph(this.element, {
				link: 'cancel',
				duration: 250,
				transition: 'expo:out',
			});


			this.element.addEvents({
				mouseenter: function(e) {
					e.stop();
				},
				mouseover: function(e) {
					e.stop();
				}

			});

			if (this.options.klss)
				this.element.addClass(this.options.klss);

			this.element.addEvent('click', function(e){
				e.stop();
			});


			this.buildMenu(this.options.list);
		},

		buildMenu: function(list){

			list.each(function(menu){

				item = new Element('li', {
					html: menu.text
				}).set(menu.options);

				if (menu.klss)
					item.addClass(menu.klss);

				if (menu.type)
					item.addClass('type-'+menu.type);

				this.menus.push(menu);

				if (menu.action) {
					item.addEvents({
						click: function(e) {
							e.stop();
							//_log.debug(menu.action);
							menu.action();

							//(function() { menu.action() });
						}
					});
				}

				item.inject(this.element);

			},this);
		},

		reach: function(el) {
			if (!el)
				if (this.el) el = this.el;
				else return;
			else this.el = el;

			//_log.debug(this.options.content, this.options.content.scrollWidth);

			var opts = this.options;
			var size = this.element.getCoordinates();
			var c = el.getCoordinates();
			

			if (opts.positionning == 'relative') {
				var pos = el.getPosition(this.options.content);
				c.left = pos.x;
				c.right = pos.x + c.width;
				c.top = pos.y;
				c.bottom = pos.y + c.height;
			}

			//_log.debug('reach',pos.x, pos.y);
			var top = 'auto',
				left = 'auto',
				bottom = 'auto',
				right = 'auto';

			if (opts.position.indexOf('left') > -1) {
				left = c.left + this.offset[0];
			}

			if (opts.position.indexOf('right') > -1) {
				//_log.debug('sdfasdfasdfasdfasdfa');
				left = c.left + c.width - size.width + this.offset[0];
			}

			if (opts.position.indexOf('top') > -1) {
				top = c.top;
				//top = pos.y;
			}

			if (opts.position.indexOf('bottom') > -1) {
				top = c.top + c.height;
			}

			if (opts.location == 'outside') {
				top = top - size.height - this.offset[1];
			}

			if (opts.location == 'inside') {
				top = top + this.offset[1];
			}

			if (this.options.usefx)
				this.fx.start({
					top: top,
					bottom: bottom,
					left: left,
					right: right
				});
			else
				this.element.setStyles({
					position: 'absolute',
					top: top,
					bottom: bottom,
					left: left,
					right: right
				});
		},

		getParent: function() {
			return this.parent;
		},

		hide: function(){
			this.element.hide();
		},

		show: function(){
			this.element.show();
		}
	});

	return exports;
});
