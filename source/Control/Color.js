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


UI.Color = new Class({

	Extends: UI.Choice,

	options: {
		name: 'choice'
	},

	_initItem: function(item) {
		var self = this,
			opts = this.options;

		var li = new Element('li', {
			html: ' ',
			'class': item
		}).inject(this.menu).addEvent('click', function(){
		
			if (self.selected)
				self.selected.removeClass('selected');

			if (self.selected && self.selected == this) {
				self.selected.removeClass('selected');
				self.selected = null;
				if (opts.type == 'push')
					self._select();
			} else {
				this.addClass('selected');
				self.selected = this;
				self._select(item);
			}
		});

		if (opts.value == item ) {
			li.addClass('selected');
			self.selected = li;
		}
	}
});
