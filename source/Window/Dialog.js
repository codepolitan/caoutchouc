/*
	Class: UI.Dialog
		The UI.Dialog class defines objects that manage and coordinate the dialog an application displays on the screen.

	Arguments
		options

	Options:
			width
			height

	Example:
		(start code)
		var dialog = new UI.Dialog({
			width': '260',
			height': '400',
		});
		(end)

	Discussion:
		Still we need this class? yes

	Implied global:
		UI,
		$,
		Class, Element,
		document

	Members
		Button, Dialog, Extends, Window, addEvent, backgroundColor,
		bind, content, _initElement, buildButtons, buildMessage, buildUnderlay, buttons,
		center, components, content, control, controls, destroy, each, element,
		foot, head, height, inject, left, location, log, message, opacity,
		options, padding, parent, position, props, resizable, scrollbar, set,
		setStyle, setStyles, styles, title, top, type, underlay, container, width,
		zIndex

*/

UI.Dialog = new Class({

	Extends: UI.Window,

	name: 'dialog',

	options: {
		center: true,
		title: 'Dialog',
		type:'dialog',

		// Default size
		width: 480,
		height: 200,
		location: 'center',
		zIndex: 6000,
		modal: true
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

	initialize: function(options){
		this.parent(options);
	},

	_initElement:function(){
		this.parent();

		if (this.options.modal)
			this._initUnderlay();
		/*
		this.buildButtons(this.options.action);
		*/
	},

	buildMessage: function(message) {
		this.message = new Element('div', {
			styles : { padding:'10px' },
			html: message
		}).inject(this.content);
	},

	buildButtons: function(options) {
		var self = this;

		var container = new Element('div', {
			'class': 'ui-inner'
		}).inject(this.foot);

		var action = new Hash(options);

		action.list.each(function(name) {
			new UI.Button(action[name])
			.addEvent('click', function(){ self.fireEvent(name); })
			.inject(container);
		});
	}

});
