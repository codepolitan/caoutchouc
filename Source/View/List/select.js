/**
 * Select List.V2 View Class
 * @class View.List.V2.Select
 * @author Bruno Santos, Jerome Vial
 */
define(function(require, exports, module) {

	var _log = __debug('view-core-listV2-select').defineLevel();

	var Select = new Class({

		/**
		 * select by element
		 * @param  {element} element DOM element
		 * @return {void}
		 */
		_selectByElement: function(element) {
			if (!element) {
				_log.warn('missing element');
				return;
			}

			var id = element.get('data-id');

			if (this.options.multipleSelect) {
				this.selectMultiple(id);
			} else {
				this.select(id);
			}
		},

		/**
		 * select element by id
		 * @param  {string} id
		 * @param  {boolean} quiet
		 * @return {void}
		 */
		select: function(id, quiet) {
			_log.debug('select', id, quiet);

			var el = this.content.getElement('[data-id="' + id + '"]');

			if (!el) {
				this.selectedId = undefined;
				_log.warn('missing el', el, id);
				return;
			}

			var info = this.get('infoById', id);

			/*remove new info when select another one*/
			if (id !== 'new') {
				this.remove('new');
			}

			this.removeSelected();

			el.addClass('item-selected');

			this.selectedEl = el;
			this.selectedInfo = info;
			this.selectedId = id;

			if (!quiet) {
				this.fireEvent('elSelect', el);
				this.fireEvent('select', info);
				this.fireEvent('userSelect');
			}

			this._saveSettings();
		},

		/**
		 * select multiple
		 * @param  {string} id
		 * @return {void}
		 */
		selectMultiple: function(id) {
			_log.debug('select', id);

			var el = this.content.getElement('[data-id="' + id + '"]');

			if (!el) {
				_log.warn('missing el');
				return;
			}

			var idx;
			if (el.hasClass('is-selected')) {
				if (this.options.template._type === 'check') {
					el.removeClass('is-selected');
					el.removeClass('is-checked');
				} else {
					el.removeClass('item-selected');
				}

				idx = this.multipleSelect.indexOf(id);
				if (idx !== -1) {
					this.multipleSelect.splice(idx, 1);
				}
			} else {
				if (this.options.template._type === 'check') {
					el.addClass('is-selected');
					el.addClass('is-checked');
				} else {
					el.addClass('item-selected');
				}

				idx = this.multipleSelect.indexOf(id);
				if (idx === -1) {
					this.multipleSelect.push(id);
				}
			}

			var info = this.get('infoById', id);

			this.fireEvent('elSelect', el);
			this.fireEvent('select', info);
			this.fireEvent('userSelect');
		},

		/**
		 * get selected ids
		 * @return {Array}
		 */
		_getIdsSelected: function() {
			_log.debug('_getIdsSelected');

			var els = this.content.getElements('div[class*=is-checked]');
			var ids = [];

			for (var i = 0; i < els.length; i++) {
				var el = els[i];
				var id = el.get('data-id');

				if (ids.indexOf(id) === -1) {
					ids.push(id);
				}
			}

			return ids;
		},

		/**
		 * remove selected element
		 * @return {void}
		 */
		removeSelected: function() {
			_log.debug('removeSelected');

			var el = this.selectedEl;

			if (el) {
				el.removeClass('item-selected');
				this.selectedId = undefined;
				this.fireEvent('unselect');
			}

			this._saveSettings();
		},

	});

	module.exports = Select;

});
