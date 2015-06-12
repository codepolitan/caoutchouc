
/**
 * UI Control Class
 * @class  UI.Control
 * @extends {UI.Component}
 * @author Jerome Vial
 */

/**
 * [initialize description]
 * @class  UI.Container
 * @extends {UI.Component}
 * @author Jerome Vial
 */
define([
	"UI/Component/Component"
], function(
	Component
) {

	var exports = new Class({

		Extends: Component,

		options: {
			//disabled: false
			error: false
		},

		/**
		 * [isEnable description]
		 * @return {Boolean} [description]
		 */
		isEnable: function() {
			//_log(this.state)
			if (this.state === 'disabled')
				return false;
			else return true;
		},

		/**
		 * [isActive description]
		 * @return {Boolean} [description]
		 */
		isActive: function() {
			if (this.state === 'active')
				return true;
			else return false;
		},


		/**
		 * [_initOptions description]
		 * @return {[type]} [description]
		 */
		_initOptions: function() {
			this.parent();

			var opts = this.options;

			this.value = opts.value;
			this.readonly = opts.read;
		},

		/**
		 * [_initEvents description]
		 * @return {[type]} [description]
		 */
		_initEvents: function(){
			var self = this;

			//this.element.set('tabindex', 0);

			this.element.addEvents({
				click: function(e){
					//e.stopPropagation();
					self.fireEvent('click');
				},
				mouseup: function(){
					self.fireEvent('mouseup');
				}
			});
		}
	});

	return exports;
});
