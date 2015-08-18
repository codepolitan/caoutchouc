
/**
 * UI Control Upload
 * @class UI.Control.Upload
 * @extends {UI.Control}
 * @type {Class}
 */
define([
	"UI/Control/Button"
], function(
	Button
) {

	var exports = UI.Upload = new Class({

		Extends: Button,

		name: 'button',

		options: {
			name: 'upload',
			type: null, // push, file
			ink: false,
			element: {
				tag: 'button',
				class: 'type-action'
			}
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement: function(){
			this.parent();
			var opts = this.options;

			this._initFile(type);
		},

		/**
		 * [_initFile description]
		 * @param  {[type]} type [description]
		 * @return {[type]}      [description]
		 */
		_initFile: function(type) {
			var self = this;

			var file = new Element('input', {
				type: 'file',
				name: 'upload',
				id: 'upload',
				multiple: 'multiple'
			}).inject(this.element);

			file.addEvent('change', function(info) {
				_log.debug('change', info);
			});

			file.onchange = function(info) {
				var files = this.files;
				_log.debug(files);
				if (files)
				self.fireEvent('uploadFile', [files]);
			};


			this.addEvent('injected', function() {
				/*var coord = self.icon.getCoordinates();

				coord.top = '0';
				coord.left = '0';

				file.setStyles(coord);*/
			});
		}

	});

	return exports;
});
