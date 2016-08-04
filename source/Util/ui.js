
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

		//_log.debug('ui.process()',name, typeOf(node), node);

		if (typeOf(node) == 'object') {
			if (!node.component)
				node.component = 'container';

			//_log.debug('New UI.'+node.component.capitalize()+'().inject()',container,node.name);

			object = new UI[node.component.capitalize()](node)
			.inject(container);

			if (!minimal.ui[name])
				minimal.ui[name] = {};

			minimal.ui[name][node.name] = object;
		}

		//_log.debug('node.node',node.node,object.node);
		if (object.node) {
			//_log.debug('--node.node',node.node);
			node.node.each( function(sub, i) {
				//_log.debug('-----',name, sub, object.node[i]);
				this.process(name, sub, object.node[i]);
			},this);
		}

		return object;
	}
};
