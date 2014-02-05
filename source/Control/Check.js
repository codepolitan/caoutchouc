/*
	Class: UI.Checkbox
		Creates checkbox control

	Extends:
		<UI.Control>

	Arguments:
		options

	Options:
		text - (string) checkbox text
		name - (string) input element name
		value - (string) checkbox's value
		checked - (boolean) set to true to check on initialize

	Example:
		(start code)
			var checkbox = new UI.Checkbox({
				name		: 'myCheckbox'
				value		: 'check',
				text		: 'Hello world!'
			}).inject(document.body);
		(end)


	Implied global:
		Class - 27
		Event - 118
		UI - 27 29 61
*/

UI.Check = new Class({

	Extends: UI.Field,

	name: 'check',

	options: {
		text: null,
		checked: false,
		opts: {
			type: 'ckeck',
			
		}
	},


	_initElement: function() {
		this.parent();




		var self = this,
			opts = this.options;

		this.checked = opts.value;

		//console.log('init ckeck----', this.checked);

		this.input.set('type', 'hidden');
		
		var options = opts.opts;

		this.wrapper = new Element('div', {
			'class': 'check-wrapper'
		}).inject(this.element);

		this.check = new Element('span', {
			'class': 'control-check',
		}).addEvents({
			click: function() {
				//console.log(self.checked);
				if (self.checked) {
					self.checked = false;
					this.removeClass('checked');
				} else {
					self.checked = true;
					this.addClass('checked');
				}
				self.fireEvent('change', self.checked);

			}
		}).inject(this.wrapper);

		if (this.checked) this.check.addClass('checked');

		this.on = new Element('span', {
			'class': 'check-text check-on',
			'html': 'oui'
		}).inject(this.check);

		this.knob = new Element('span', {
			'class': 'ckeck-knob',
			html: '&nbsp;'
		}).inject(this.check);

		this.off = new Element('span', {
			'class': 'check-text check-off',
			'html': 'non'
		}).inject(this.check);

	}
});