/*
---
description: Default element debugger.

authors: [moolego,legoman,r2d2]

requires:
- core:1.2.1: '*'
- mooCanvas

provides: [ui.debug]
 
...
*/
/*
Class: ui.debugger
	Singleton object containing useful functions for debugging skin process
	
Discussion
*/

ui.debug = {
	start: function() {
		//_log('start debugger');
	},
	
	trace: function(properties){
		for (var id in properties) {
			if (properties[id] == 'NaN') {
				return;
			}
			if (typeOf(properties[id]) == 'array' || typeOf(properties[id]) == 'object') {
				for (var val in properties[id]) {
					if (properties[id][val] == 'NaN') {
						_log(this.options.element,  ": ",
						val + ' , Nan', "(" + this.options.skin + "=>" + this.options.name + "=>" + this.options.type + "=>" + this.options.state + ")");
						return;
					}
				}
			}
		}
		if (properties.size && !properties.size[0] && !properties.size[1]) {
			_log(			//this.options.element,  ": ",
			key + ' , size is null', "(" + this.options.skin + "=>" + this.options.name + "=>" + this.options.type + "=>" + this.options.state + ")");
			return;
		}
	}
}

ui.debug.start();