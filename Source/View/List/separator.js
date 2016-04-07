/**
 * Separator List.V2 View Class
 *
 * @class View.List.V2.Separator
 * @author Jerome Vial, Bruno Santos
 */
define(function(require, exports, module) {

	var ScrollSpy = require('vendor/ScrollSpy/Source/ScrollSpy');

	var _log = __debug('view-core-listV2-separator').defineLevel('debug');

	var Separator = new Class({


		_initSeparator: function() {

			_log.debug('_initSeparator', this.options.separator.enable);

			if (!this.options.separator.enable) {
				return;
			}

			this.separatorCalc = {};
			this.separators = [];

			this.separatorBar = new Element('div', {
				'class': 'separator-separator',
				styles: {
					height: '40px',
					'background-color': 'rgb(224, 224, 224)'
				}
			}).inject(this.container.head, 'after');


			var self = this;

			this.addEvent('viewportRendered', function() {
				self.setSeparator();
			});
		},

		setSeparator: function() {
			//_log.debug('setSeparator', content, list);

			if (this.separatorDone) {
				return;
			}

			//this.cleanSeparator();

			//list = FLOOR.array.sort(list, opts.key);

			//if (opts.type == 'alpha') {
			this._byAlpha(this.list);
			//}
		},

		cleanSeparator: function() {
			if (typeOf(this.contentS) === 'object') {
				for (var key in this.contentS) {
					var el = this.contentS[key].getElements('[class*=list-separator]');
					if (el) {
						el.destroy();
					}
				}
			}
		},

		_byAlpha: function(list) {
			//_log.debug('_byAlpha', list);

			var letter;
			var count = 0;
			var before;

			for (var i = 0; i < list.length; i++) {
				var info = list[i];

				if (!info) {
					continue;
				}

				count++;

				var c = info[this.options.separator.key].charAt(0).toLowerCase() || letter;

				if (letter !== c) {
					this._renderSeparator(letter, before, count);
					letter = undefined;
					count = 0;
				}

				if (!letter) {
					before = info._id;
					letter = c;
				}
			}

			this.separatorDone = true;
		},

		_renderSeparator: function(separator, id, count) {

			//_log.debug('_renderSeparator', separator, id, count);

			var el = this._getEll(id);

			this._calcHeight(id, el);

			if (!el) {
				_log.warn('missing el', separator, id, count);
				return;
			}

			var item = new Element('div', {
				//html: separator,
				'class': 'list-separator'
			}).inject(this.separatorBar);

			item.addClass('item-separator');

			new Element('div', {
				html: count,
				'class': 'count'
			}).inject(item, 'top');

			new Element('div', {
				html: separator,
				'class': 'value'
			}).inject(item, 'top');

			//_log.debug('el', el);

			var self = this;
			this.element.addEvent('scroll', function() {

				var scrollTop = self.content.parentNode.scrollTop;

				if (self.separatorCalc[id] >= 0 && self.separatorCalc[id] <= scrollTop) {

					for (var i = 0; i < self.separators.length; i++) {
						self.separators[i].setStyle('display', 'none');
					}

					item.setStyle('display', 'inline');
				}

				//_log.debug('scrollTop', self.separatorCalc[id], scrollTop);

			});

			this.separators.push(item);

			item.setStyle('display', 'none');
			//_log.debug('_renderSeparator', separator, id, count, item);
		},

		_getEll: function(id) {

			for (var range in this.rangeEl) {
				var rangeEl = this.rangeEl[range];
				var el = rangeEl.getElement('[data-id="' + id + '"]');

				if (el) {
					return el;
				}
			}
		},

		_calcHeight: function(id, el) {

			if (!el) {
				return;
			}

			var rangeEl = el.parentNode;
			var range = rangeEl.get('data-range');

			var h = 0;
			for (var i = 1; i < range; i++) {
				h += this.rangesHeight[i];
			}

			var pos = el.getPosition(rangeEl);


			var m = rangeEl.getChildren('div.ui-item').indexOf(el);

			this.separatorCalc[id] = h + (m * 74);

			//_log.debug('_calcHeight', id, h + (m * 74), range, el.getPosition(this.content).y, m * 74, el);

		},


	});

	module.exports = Separator;

});
