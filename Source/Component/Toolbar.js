
/**
 * UI Component Location
 * @class UI.Component.Location
 * @author Jerome D. Vial
 */
define([
	"UI/Component/Component",
	'UI/Control/Button'
], function(
	Component
) { 

	var exports = UI.Toolbar = new Class({

		Extends: Component,

		name: 'toolbar',

		options: {
			base: 'component',
			name: 'toolbar'
		},

		/*
		Function: _initElement
			private function

			Call UI.Component _initElement, then create a menu wrapper

		Return:
			(void)

		See also:
			<UI.Component::_initElement>
		*/
		_initElement: function(){
			this.parent();

			this._initComponent();
		},

		/*
		Function: _initComponent
			private function

			Process the node object and inject the initialized component in the content of the container.

		Return:
			(void)

		Note:
			Override UI.Component._initComponent

		See also:
			<UI.Component::_initHead>
		*/
		_initComponent: function() {
			var self = this,
				opts = this.options,
				element = this.element;

			this.control = {};

			if (opts.comp.klss)
				element.addClass(opts.comp.klss);

			element.addClass('toolbar-' + opts.comp.name);

			opts.comp.list.each(function(n) {
				_log.debug('---', n, mnml.control);
				var comp = mnml.control[n];

				if (comp) {
					var clss = comp.clss || Button;
					var opts = comp.opts || {};
					self.control[n] = new clss(opts).inject(element).addEvents({
						click: function() {
							if (self.control[n].isEnable())
								self.fireEvent('emit', n);
						}
					});
				}
			});
		}
	});
	
	return exports;
});
