/*
	Class: UI.Choice
		Create <select> like element

	Extends:
		<UI.Field>

	Require:
		<UI.Control>
		<UI.Menu>

	Arguments:
		options


*/


UI.Color = new Class({

	Extends: UI.Choice,

	options: {
		name: 'choice'
	},

	_initItem: function(info) {
		var self = this,
			opts = this.options;

		var item = new Element('li', {
			html: ' ',
			'class': info
		}).inject(this.list).addEvent('click', function(){
			console.log('jjj');
			if (self.selected)
				self.selected.removeClass('selected');

			if (self.selected && self.selected == this) {
				self.selected.removeClass('selected');
				self.selected = null;
				self.select(null);
			} else {
				this.addClass('selected');
				self.selected = this;
				self.select(info);
			}
		});

		var color = new Element('span').inject(item);

		if (opts.value == info ) {
			item.addClass('selected');
			self.selected = item;
		}
	}
});
