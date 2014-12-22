/*
---
description: UI.Text is used to make text element with css skin

authors: [moolego,r2d2]

requires:
- core:1.2.1: '*'

...
*/
/*
	Class: UI.Text
		UI.Text is used to make text element with css skin

	Extends:
		<UI.Component>

	Arguments:
		options

	Options:
		- tag - (string) element tag, by default 'span'
		- html - (string) text text, by default Text
		- emboss - (boolean) duplicate the text to create an emboss effect
		- selectable - (boolean) Define if the text is selectable or not

	Returns:
		Image element

	Example:
		(start code)
		var text = new UI.Text({
			html	: 'Hello world!',
		}).inject(this.element);
		(end)

	Implied global:
		- MooLego - UI
		- MooTools - Class, Element

	Members:
		Element, Extends, Text, bind, _initElement, buildImage, name,
		components, element, emboss, events, fireEvent, html, image, inject,
		load, options, parent, props, selectable, src, tag

	Discussion:

*/

UI.Text = new Class({

	Extends: UI.Component,

	options: {
		name: 'text',
		klass: 'ui-text',
		tag: 'span',
		text: '',
		emboss: false,
		selectable: false
	},

	/*
		Method: _initElement
			private method

		Make a  Text and set the fade Fx

		Return:
		(void)

		See also:
		<UI.Component::_initElement>
	*/
	_initElement: function(){
		this.parent();

		this.element.set('html', this.options.text);
	},

	set: function(what, value) {
		_log('set', what, value);

		if (what == 'text')
			this.element.set('html', value);
	}
});

