/**
 * Minimalistic Class for UI.Component Management
 *
 * @class UI.Component
 * @author Jerome Vial
 * @copyright © 1999-2014 - Jerome D. Vial. All Rights reserved.
 */
define([

], function(

) {

	UI.Component.implement({

		/**
		 * Set Ajax Content
		 *
		 * @param {string} source url
		 * @return {this}
		 */
		setAjaxContent: function(source) {
			if (this.iframe) {
				this.iframe.dispose();
			}

			var request = new Request.HTML({
				url: source,
				update: this.content,
				method: 'get',
				onComplete: function() {
					this.fireEvent('loadComplete');
					this.fireEvent('resize');
				}.bind(this)
			}).send();

			return this;
		},

		/**
		 * Set JSON content
		 *
		 * @param {string} source url
		 * @return {this}
		 */
		setJsonContent: function(source) {
			var request = new Request.JSON({
				url: source,
				onComplete: function(response) {
					this.fireEvent('loadComplete', new Array(response));
					this.fireEvent('resize');
				}.bind(this)
			}).get();

			return this;
		},

		/**
		 * Set ajax content
		 *
		 * @param {string} source url
		 * @return {this}
		 */
		setIFrameContent: function(source) {
			//var self = this;

			//_log.debug('---setIFrameContent', this.content);

			if (!this.iframe) {
				//_log.debug('---',this.options.name);
				this.iframe = new IFrame({
					width: '100%',
					height: '100%'
				}).inject(this.content);
			}

			//self.iframe.setStyle('opacity',0);

			this.iframe.set('src', source)
				.addEvent('load', function() {
					//self.iframe.fade(1);
					this.fireEvent('loadComplete');
					this.fireEvent('loaded');
					this.fireEvent('resize');
				}.bind(this));

			return this;
		},

		/**
		 * Set ajax content
		 *
		 * @param {string} source url
		 * @return {this}
		 */
		/*setIFrameContent: function(source) {
			//var self = this;

			//_log.debug('---setIFrameContent', this.element, this.options);

			if (!this.iframe) {
				//_log.debug('---',this.options.component);
				if (this.content === this.element) {
					this.content = new Element(this.options.contentTag)
						.addClass('container-content')
						.addClass('view-hidden')
						.inject(this.element);
				}

				this.iframe = new IFrame({
					width: '100%',
					height: '100%'
				}).inject(this.content);
			}

			//self.iframe.setStyle('opacity',0);


			this.iframe.set('src', source)
				.addEvent('load', function() {
					//self.iframe.fade(1);
					this.fireEvent('loadComplete');
					this.fireEvent('loaded');
					this.fireEvent('resize');
				}.bind(this));

			return this;
		}*/

	});

});
