
/**
* Minimalistic Class for Minimal.Template Management
*
* @class View.Browser
* @extends {View}
* @author Jerome Vial
*/

define(function(require, exports, module) {

	var View = require('UI/View/View');

    var exports = new Class({

		Extends: View,

		name: 'browser',

		options: {
			clss: 'browser',
			name: 'page',
			url: '/docs'
		},

		/*
			Method: intialise
				Initalisation of the loaded page to enable edition
				and also execute site.start to enable usual page behavior

			Arguments:
				content: (DOM)
				window: (DOM)

			Return this

		*/
		_initView: function() {
			var self = this;

			this.history = [];
			this.pageid = 0;

			//this._initMenu();
			this._initIframe();

			this.list = [];

			var	url = this.options.url;

			//this.setMode(this.mode);

			this.iframe.set('src',url).addEvents({
				load: function() {
					self._initPage();
					//_log.debug('page loaded', self.body);
					self.fireEvent('loaded');
					self.container.fireEvent('resize');
					self.fireEvent('resize');

					/*couch.db.getList('content').addEvent('ok', function(list) {
						_log.debug('content loaded', list);
						//_log.debug('-----', self.pageView );
						self.setElement(list);
					});*/


				},
				loadfail: function() {
					alert('Can\'t load '+ url);
				}
			});
		},

		_initIframe: function() {
			//_log.debug(this.content, this.element);

			// if (this.content == this.element)
			// 	this.content = new Element('div')
			// 	.addClass('container-content')
			// 	.addClass('view-hidden')
			// 	.inject(this.element);

			this.iframe = new IFrame({
				width: '100%',
				height: '100%'
			}).inject(this.content);
		},

		/**
		 * [_initPage description]
		 * @return {[type]} [description]
		 */
		_initPage: function() {
			this.fireEvent('resize');

			this._initDocument();

			// and a eventshoould be attach to initAll module

			//this.initContextMenu();
			//this.initSortables();
		},

		_initDocument: function() {
			//this.iframe = this.container.iframe;

			this.window = this.iframe.contentWindow;
			this.document = this.window.document;
			this.body = this.document.body;

			// history should start

			// this.initHistory
		},



		reload: function() {
			this.pageid++;
			_log.debug(this.window);
			this.window.location.reload();
		},

		back: function() {

			_log.debug(this.window);
			this.window.history.back();
			this.pageid--;
		},

		next: function() {
			this.pageid++;
			this.window.history.next();
		}

    });

    return exports;

});
