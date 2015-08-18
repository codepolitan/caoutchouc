
/**
 * UI Window Dialog Class
 * @class UI.Window.Dialog
 * @extends {UI.Container}
 * @type {Class}
 */

define([
	'UI/Control/Button',
	'UI/Window/Window'
], function(
	ButtonControl,
	Window
) {

	var exports = new Class({

		Extends: Window,

		name: 'dialog',

		/**
		 * options
		 * @type {Object}
		 */
		options: {
			center: true,
			title: 'Dialog',
			type:'dialog',

			alert: false,

			// Default size
			width: 480,
			height: 200,
			location: 'center',
			zIndex: 6000,
			modal: true,

			foot: {
				'class': 'ui-foot'
			},

			controls: ['minimize', 'maximize', 'close'],

			control: {
				_list: ['cancel', 'ok::is-primary']
			},
			useOverlay: false
			// Components Options
			/*head: true,
			controls: ['close'],
			container: {},
			foot: true,
			overflow: 'scrollbar',

			resizable: false,

			action: {
				list: ['cancel'],
				cancel: {
					text: 'Cancel',
					fire: 'close'
				},
				confirm: {
					clss: 'confirm',
					text: 'Apply'
				}
			}*/
		},

		initialize: function(options) {
			this.parent(options);
		},

		/**
		 * [_initElement description]
		 * @return {[type]} [description]
		 */
		_initElement:function(){
			this.parent();

			this._initBody();
			this._initActions();

			/*
			this.buildButtons(this.options.action);
			*/
		},

		/**
		 * [_initBody description]
		 * @return {[type]} [description]
		 */
		_initBody: function() {
			//_log.debug('_initBody', this.content);

			var message = this.options.message;

			this.message = new Element('div', {
				class: 'container-body', 
				styles : { padding:'16px' },
				html: message
			}).inject(this.foot, 'before');
		},


		/**
		 * [_initMessage description]
		 * @param  {[type]} message [description]
		 * @return {[type]}         [description]
		 */
		_initMessage: function(message) {

			
		},

		/**
		 * [_initControls description]
		 * @param  {[type]} controls [description]
		 * @return {[type]}          [description]
		 */
		_initActions: function() {
			//_log.debug('_initActions', this.foot);
			var self = this;

			this.actions = this.actions || [];

			var toolbar = new Element('div', {
				'class': 'ui-toolbar toolbar-action'
			}).inject(this.foot);

			if (this.options.alert) {
				var list = this.options.control._list;
				var idx = list.indexOf('cancel');
				if (idx > -1) {
				    list.splice(idx, 1);
				}
			}

			var control = this.options.control || {};
			var list = control._list || [];

			for (var i = 0; i < list.length; i++) {
				//_log.debug('for..loop', i);
				var name = list[i];
				var opts = control[name];

				self._initAction(name, opts, toolbar);
			};
		},

		/**
		 * [_intiControl description]
		 * @param  {[type]} name      [description]
		 * @param  {[type]} opts      [description]
		 * @param  {[type]} container [description]
		 * @return {[type]}           [description]
		 */
		_initAction: function(name, opts, toolbar) {
			//_log.debug('_intiAction', name, opts, toolbar);
			var self = this;

			var n = name.split('::');
			var name = n[0];

			var klss = n[1];

			var action = new ButtonControl({
				name: name,
				text: name,
				klss: klss
			}).addEvent('press', function(e){ 
				//_log.debug('press', name);
				self.fireEvent(name);
				self.close();
			}).inject(toolbar);

			this.actions.push(action);
		}

	});
	
	return exports;
});
