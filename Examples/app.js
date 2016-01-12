/**
 * Demo App
 *
 * @class App.Demo
 * @extends {App.Demo}
 * @author Jerome Vial
 */
define(function(require, exports, module) {


	var Binding = require('UI/Component/Binding');
	var Toolbar = require('UI/Toolbar/Toolbar');
	var Container = require('UI/Container/Container');
	var Layout = require('UI/Layout/Layout');
	var View = require('UI/View/View');
	var Browser = require('./Browser');

	console.log('View', View);


	var App = new Class({

		Implements: [Options, Events, Binding, Toolbar],

		name: 'contacts',

		options: {
			container: $(document.body),
			toolbar: {
				list: ['view', 'info', 'desk'],
				view: {
					container: 'head',
					section: 'top',
					list: ['navi']
				},
				info: {
					container: 'head',
					section: 'top',
					list: ['title'],
					title: {
						clss: 'UI/Component/Text'
					}
				},
				desk: {
					container: 'head',
					section: 'top',
					list: [/*'talk',*/ 'notification', /*'desktop', 'favorite',*/ 'apps', /*'settings',*/ 'user']
				}
			},
			layout: {
				_name: 'standard',
				_list: ['navi', 'main', 'side'],
				main: {
					flex: '1'
				},
				navi: {
					theme: 'dark'
				}
			},
			binding: {
				'control.navi': 'test'
			}
		},

		test: function() {
			
			console.log('test');
		},

		/**
		 * Contructor
		 * @return {Object} The Class instance
		 */
		initialize: function(options) {
			this.setOptions(options);

			this.build();

			this._initBinding();

			console.log(this);

			return this;
		},

		/**
		 * [build description]
		 * @return {[type]} [description]
		 */
		build: function() {
			console.log('build app');

			this.container = new Container({
				klass: 'container-desk',
				comp: ['head', 'body']
			}).inject(this.options.container);

			this.layout = new Layout({
				theme: 'dark',
				container: this.container.body,
				node: this.options.layout
			});

			this.browser = new Browser({
				container: this.layout.main,
				klass: 'browser'
			});

			this._initToolbar(this.options.toolbar);
		}
	});

	module.exports = App;

});
