/**
* Minimalistic Class for UI.Component Management
*
* @class UI.Component
* @author Jerome Vial
* @copyright © 1999-2014 - Jerome D. Vial. All Rights reserved.
*/

UI.Component.implement({

	/**
	 * Set Ajax Content
	 *
	 * @method setAjaxContent
	 * @param {source} source's url
	 * @return {this}
	 * @api public
	 */
	setAjaxContent: function(source){
		if (this.iframe)
			this.iframe.dispose();

		var request = new Request.HTML({
			url: source,
			update: this.content,
			method: 'get',
			onComplete: function(){
				this.fireEvent('loadComplete');
				this.fireEvent('resize');
			}.bind(this)
		}).send();

		return this;
	},

	/**
	 * Set JSON content
	 *
	 * @method setJsonContent
	 * @param {source} source's url
	 * @return {this}
	 * @api public
	 */
	setJsonContent: function(source) {
		var request = new Request.JSON({
			url: source,
			onComplete : function(response){
				this.fireEvent('loadComplete',new Array(response));
				this.fireEvent('resize');
			}.bind(this)
		}).get();

		return this;
	},

	/**
	 * Set ajax content
	 *
	 * @method setIFrameContent
	 * @param {source} iFrame's url
	 * @return {this}
	 * @api public
	 */
	setIFrameContent: function(source) {
		var self = this;

		//console.log('---setIFrameContent', this.content);

		if (!this.iframe) {
			//console.log('---',this.options.name);
			this.iframe = new IFrame({
				width: '100%',
				height: '100%'
			}).inject(this.content);
		}

		//self.iframe.setStyle('opacity',0);


		this.iframe.set('src',source)
		.addEvent('load',function(){
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
	 * @method setIFrameContent
	 * @param {source} iFrame's url
	 * @return {this}
	 * @api public
	 */
	setIFrameContent: function(source) {
		var self = this;

		//console.log('---setIFrameContent', this.element, this.options);

		if (!this.iframe) {
			//console.log('---',this.options.component);
			if (this.content == this.element)
			this.content = new Element(this.options.contentTag)
			.addClass('container-content')
			.addClass('view-hidden')
			.inject(this.element);

			this.iframe = new IFrame({
				width: '100%',
				height: '100%'
			}).inject(this.content);
		}

		//self.iframe.setStyle('opacity',0);


		this.iframe.set('src',source)
		.addEvent('load',function(){
			//self.iframe.fade(1);
			this.fireEvent('loadComplete');
			this.fireEvent('loaded');
			this.fireEvent('resize');
		}.bind(this));

		return this;
	}
});
