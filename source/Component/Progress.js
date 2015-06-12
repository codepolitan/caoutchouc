
/**
 * UI Component Location
 * @class UI.Component.Location
 * @author Jerome D. Vial
 */
define([
	"UI/Component/Component"
], function(
	Component
) {

	console.log('UI.Progress' , Component);

	var exports = UI.Progress = new Class({

		Extends: Component,

		options: {
			name: 'progress',
			klass: 'ui-progress',

			tag: 'div',
		},

		// public API

		set: function(ratio) {
			var width = 0;

			var percentage = (ratio[0] * 100) / ratio[1];

			if (percentage > 0)
				width = this.element.getSize().x * percentage / 100;

			this.bar.setStyle('width', width.toInt());
			this.status.set('html', ratio[0] + ' / '+ ratio[1]);

			return this;
		},

		setStatus: function(text) {
			this.status.set('html', text);

			return this;
		},

		// pivate API

		_initElement: function() {
			this.parent();

			this.status = new Element('span', {
				'class': 'progress-status'
			}).inject(this.element);

			this.bar = new Element('div', {
				'class': 'progress-bar'
			}).inject(this.element);
		}
	});

	return exports;
});
