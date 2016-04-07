/**
 * Insert List.V2 View Class
 *
 * @class View.List.V2.Insert
 * @author Bruno Santos, Jerome Vial
 */
define(function(require, exports, module) {

	var _log = __debug('view-core-listV2-insert').defineLevel();

	var Insert = new Class({

		/**
		 * new info
		 * @return {void}
		 */
		_newInfo: function() {

			_log.debug('_newInfo', this.data);

			var newInfo = {
				_id: 'new',
				type: this.data.type,
				nodes: []
			};

			if (this.data && this.data._id) {
				newInfo.nodes.push(this.data._id);
			}

			this.remove('new');
			this._setInfo(newInfo);

			this.select('new');
		},

		/**
		 * set info
		 * @param {Object} info
		 */
		_setInfo: function(info) {
			_log.debug('_setInfo', info);

			if (typeof info !== 'object' || this.virtualSize === undefined) {
				_log.warn('invalid info type', info);
				return;
			}

			//check if the id is in the list
			var exist = this._getInfoById(info._id);
			if (exist) {
				this.updateInfo(info);
				this.select(this.selectedId);
				return;
			}

			if (this.options.verifyBeforeInsert === true) {
				var data = this.data || {};

				/*check type*/
				if (data.type !== info.type) {
					return;
				}

				/*check if the info is a node*/
				if (!info.nodes) {
					return;
				}

				/*check if the info is inside the node*/
				if (data._id && info.nodes.indexOf(data._id) === -1) {
					return;
				}
			}

			this.remove('new');

			this.virtualSize ++;

			this.virtualList.unshift(info);

			this.renderInfo(info, 1, 'top');

			this.element.scrollTop = 0;
			this._scroll();
		},

		/**
		 * update info
		 * @param  {Object} info
		 * @return {void}
		 */
		updateInfo: function(info) {
			_log.debug('updateInfo', info);

			/*update element*/
			var oldEl = this._getElById(info._id);
			var newEl = this._createEl(info);
			newEl.replaces(oldEl);

			/*update virtualList*/
			for (var i = 0; i < this.virtualList.length; i++) {
				var oldInfo = this.virtualList[i];

				if (oldInfo && oldInfo._id === info._id) {
					this.virtualList[i] = info;
					break;
				}
			}
		},

	});

	module.exports = Insert;

});
