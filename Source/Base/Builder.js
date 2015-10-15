
/**
 * UI.Builder Class
 *
 * @class UI.Builder
 * @Extends UI.Builder
 * @Require Mootools
 * @param {object} json
 * @param {parent} container
 * @return {parent} the dom structure
 * @example (start code)	new UI.Builder(object); (end)
 * @author Jerome Vial
 * @copyright © 1999-2014 - Jerome D. Vial. All Rights reserved.
 */

define(function() {


	var exports = new Class({

		Implements: [Events, Options],

		options: {

		},

		initialize: function(object, container) {
			this._initElement(object, container);

	//		object.level++;

		},

		/*
		Method: _initElement
			private function

			Creates html structure and inject it to the dom.

		Returns:
			(void)

		*/

		_initElement: function(object, container) {
			//_log.debug('builder._initElement container ',object.level,object.name);

			var container = {};

			if (typeOf(object) == 'object') {
				if (!object.container)
					object.container = 'container';

				container = new UI[object.container.capitalize()](object)
				.inject(container);

				// shoub define ui.controller.container.register
				if (!ui.controller.workspace)
					ui.controller.workspace = {};

				ui.controller.workspace[object.name] = container;

				//_log.debug(ui.controller.workspace);

			}

			//_log.debug('UI.Builder._initElement()', container.views);

			if (object.views) {
				object.views.each( function(sub, i) {
					new UI.Builder(sub, container.views[i]);
				});
			}

			return ui.controller.workspace;
		}
	});

	return exports;
});
