/*
	Class: UI.Select
		Create <select> like element

	Extends:
		<UI.Field>

	Require:
		<UI.Control>
		<UI.Menu>

	Arguments:
		options


*/


UI.Select = new Class({

	Extends: UI.Field,

	options: {
		name: 'select',
		opts: {
			type: 'select',
			showValue: true
		}
	},

	_initElement: function() {
		this.parent();

		var self = this;

		this.input.set('type', 'hidden');
		var opts = this.options.opts;

		this.menu = new UI.Menu(opts)
		.addEvents({
			change: function(value){
				self.input.set('value', value);
				self.fireEvent('change', value);
				self.setState('close');
			}
		}).inject(this.element);

		if (this.options.value)
			self.menu.head.set('html', this.options.value);

	}
});
