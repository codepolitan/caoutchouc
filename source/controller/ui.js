
var ui = ui || {};
ui.node = ui.node || {};

ui.process = function(name, node, container) {
	container = container || document.body;

	var object = {};

	if (typeOf(node) == 'object') {
		if (!node.component)
			node.component = 'container';

		if (typeOf(container) == 'element') {
			container = new UI.Container().inject(container);
		}
		node.container = container;
		object = new UI[node.component.capitalize()](node);

		if (!ui.node[name])
			ui.node[name] = {};

			ui.node[name][node.name] = object;
	} else if (typeOf(node) == 'array') {
		node.each( function(sub, i) {
			//console.log('-----',name, sub, object.node[i]);
			//this.process(sub.name, sub, container);
		},this);
	}

	//console.log('node.node',node.node,object.node);
	if (typeOf(node.node) == 'array') {
	//console.log('node.node',node.node);
		node.node.each( function(sub, i) {
			console.log('-----',name, sub, object.node[i]);
			this.process(name, sub, object.node[i]);
		},this);
	}
	else if (typeOf(node.node) == 'object') {
		this.process(name, node, object);
	}


	return object;
};

