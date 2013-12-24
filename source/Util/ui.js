
minimal.ui = {

	/*
	Method: process
		private function

		Creates html structure and inject it to the dom.

	Returns:
		(void)

	*/
	process: function(name, node, container) {
		container = container || document.body;

		//console.log('ui.process()',name, typeOf(node), node);

		if (typeOf(node) == 'object') {
			if (!node.component)
				node.component = 'container';

			//console.log('New UI.'+node.component.capitalize()+'().inject()',container,node.name);

			object = new UI[node.component.capitalize()](node)
			.inject(container);

			if (!minimal.ui[name])
				minimal.ui[name] = {};

			minimal.ui[name][node.name] = object;
		}

		//console.log('node.node',node.node,object.node);
		if (object.node) {
			//console.log('--node.node',node.node);
			node.node.each( function(sub, i) {
				//console.log('-----',name, sub, object.node[i]);
				this.process(name, sub, object.node[i]);
			},this);
		}

		return object;
	}
};
