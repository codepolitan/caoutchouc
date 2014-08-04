
/*
	Object: ui.controller.window
		Window controller. It handles windows cascading position, minimize position, focusing, ...

	Arguments:
		options - (object)

	Options:
		zBase - (integer)
		zStep - (integer)
		cascade - (object)
		stack - (object)

	Requires:
		<UI.Window>


	Implied global:
		ui,
		window

	Discussion:
		Stacks should be better implemented

*/


var ui = ui || {};

ui.controller = {
	version: '0.1',
	list: ['element','container','builder','config']

	// maybe controller doesnt need to init
	// a controller is just there
/*
	init: function() {
		this.list.each( function(controller) {
			if (ui.controller[controller]) {
				ui.controller[controller].init();


			}
		});
	}*/
};

/*
window.onbeforeunload = confirmExit;

function confirmExit() {
	return "Closing Minimal?";
}
*/


ui.builder = {
	/*
	Method: _initElement
		private function

		Creates html structure and inject it into the DOM.

	Returns:
		(void)

	Examples

		tmpl for element fieldset

		{
			name: 'title',
			clss: 'ui.input',
			data: {
				field: language.title,
				editor: html
			},
			node: {

			}
		},{
			name: 'content',
			obj: 'ui.text',
			data: {
				field: language.title
			}
		}];


		{
			name: space
			type: 'ui',
			clss: 'split',
			data: {
				field: language.title
			},
			node: [{
				name: 'menu',
				clss: 'ui.menu',
				node: [{
					clss: 'ui.button',
					name: 'save',
					text: 'apply',
					emit: 'save'
				}, {
					clss: 'ui.button',
					name: 'cancel',
					text: 'cancel',
					emit: 'save'
				}]
			},{
				name: 'side',
				clss: 'ui.split',
				node: [{
					name: 'list',


				},{}]

				]
			},{
				name: 'main',
				type: 'container'
				clss: 'page',
				etat:
			}
		};
			head: {
				node:
				clss: 'ui.text',
				opts: {
					txt: 'Container'
				}
			}
		},
	*/
	/*process: function(object, container) {
		//_log('ui.builder.process()', object.name, container);

		var container = {};

		if (typeOf(object) == 'object') {
			if (!object.container)
				container = new UI.Container(object).inject(container);
			else {
				container = new UI.Container[object.container.capitalize()](object)
				.inject(container);
			}

			this.object[object.name] = container;
		}

		if (object.views) {
			object.views.each( function(sub, i) {
				this._initElement(sub, container.views[i]);
			},this);
		}
	},
*/

	opts: {
		clss: {
			// class to use if not define in node object
			define: 'Element',
			name: {
				// if name need to uppercase to match the class name
				upper : ['ui']

			}
		}
	},

	/*
	Method: _initElement
		private function

		Creates html structure and inject it to the dom.

	Returns:
		(void)

	*/



	// old buildfrom UI.Builder
	// with winth new instanciation of the UI.Builder
	// We do it now by recalling the function recursively
	// should be faster

	process: function(name, node, container) {
		ui.dom = {};
		// node - object

		var opts = this.opts,
			obj = null;

		//_log('ui.builder._initElement()', name, typeOf(node), opts);

		if (typeOf(node) == 'object') {
			//_log('starting building',node);
			// define class to intaciate

			//_log(ui.builder.opts.clss.define);
			if (!node.clss) node.clss = ui.builder.opts.clss.define;

			var clss = node.clss.split('.');

			if (clss.length > 1) {

			} else {
				//_log('_initElement', clss);
				obj = new window[clss](node.tag, node.opts)
				.inject(container);

				// should define ui.controller.container.register
				if (!ui.dom[name])
					ui.dom[name] = {};

				ui.dom[name][node.name] = obj;

				//_log('builded', obj);

				//_log('builded ', node.name, node.node, obj);

				if (node.node)
					this.process(node.name, node.node, obj);
			}

		} else if (typeOf(node) == 'array') {
			node.each(function(sub, i) {
				//_log('that is a list', name, sub, container);
				this.process(name, sub, container);
			},this);
		}
/*
		if (node.node) {
			if (typeOf(node.node) == 'array') {
				node.node.each( function(sub, i) {
					this.process(name, sub, obj);
				},this);
			} else if (typeOf(node.node) == 'array') {
				this.process(name, node.node, obj);
			}
		}*/

		return obj;
	},




	// old buildfrom UI.Builder
	// with winth new instanciation of the UI.Builder
	// We do it now by recalling the function recursively
	// should be faster

	form: function(name, node, container) {
		ui.dom = {};
		//_log(node, typeOf(node));// node - object

		var opts = this.opts,
			obj = null;

		//_log('ui.builder._initElement()', name, typeOf(node), opts);

		if (typeOf(node) == 'object') {
			//_log('starting building',node);
			// define class to intaciate

			//_log(ui.builder.opts.clss.define);
			if (!node.clss) node.clss = ui.builder.opts.clss.define;

			var clss = node.clss.split('.');

			if (clss.length > 1) {

			} else {
				//_log('_initElement', clss);
				obj = new window[clss](node.tag, node.opts)
				.inject(container);

				// should define ui.controller.container.register
				if (!ui.dom[name])
					ui.dom[name] = {};

				ui.dom[name][node.name] = obj;

				//_log('builded', obj);

				//_log('builded ', node.name, node.node, obj);

				if (node.node)
					this.process(node.name, node.node, obj);
			}

		} else if (typeOf(node) == 'array') {
			node.each(function(sub, i) {
				//_log('that is a list', name, sub, container);
				this.process(name, sub, container);
			},this);
		}
/*
		if (node.node) {
			if (typeOf(node.node) == 'array') {
				node.node.each( function(sub, i) {
					this.process(name, sub, obj);
				},this);
			} else if (typeOf(node.node) == 'array') {
				this.process(name, node.node, obj);
			}
		}*/

		return obj;
	},


/*
	var json_string = '[
		table,
		{
			class : "mytable"
		},
		["tr", { class : "row1" },["td",{ class : "col1" },"bonjour","td",{ class : "col2" }]],["tr", { class : "row2" },["td",{ class : "col1"},"td",{ class : "col2" }]],["tr", { class : "row3" },["td",{ class : "col1"},"td",{ class : "col2" }]]]'
*/

	dombuild: function(object,container){
		var dom, tag, func, next = '';

		typeOf(object) == "string" ? this.object = JSON.decode(object) : this.object = object;

		object.each( function(o,i) {
			if (typeOf(o) == "string") {
				(typeOf(object[i+1]) == "object") ? tag = o : dom.set("html",o);
			} else if (typeOf(o) == "object") {
				dom = new Element(tag, o);
				container ? dom.inject(container) : this.dom = dom;
			} else if (typeOf(o) == "array") {
				this.dombuild(o, dom);
			} else if (typeOf(o) == "function") {
				this.dom.addEvent('click',function() { o(); });
			}
		},this);
	},

	inject: function() {

	}
};

// ui.request();

	// Need to implement exceptions

ui.request = {

	get: function(url) {
		// _log('ui.request.get()', url);
		return new Request({
			url: url,
			onComplete: function(json, text) {
				//_log('ui.request.get() ...ok', json, text);
				this.fireEvent('ok', json, text);
			},
			onError: function(text, error) {
				//_log('ui.request.get() ...error', text);
				this.fireEvent('error', json, text);
			},
			onFailure: function(xhr) {
				//_log('ui.request.get() ...fail', xhr);
				this.fireEvent('fail', json, text);
			}
		}).get();
	},

	html: function(url) {
		// _log('ui.request.get()', url);
		return new Request.HTML({
			url: url,
			onSuccess: function(json, text) {
				//_log('ui.request.get() ...success', json, text);
				this.fireEvent('ok', obj);
			},
			onError: function(text, error) {
				//_log('ui.request.get() ...error', text);
			},
			onFailure: function(xhr) {
				//_log('ui.request.get() ...failure', xhr);
			}
		}).get();
	},


	json: function(url) {
		//_log('ui.request.get()', url);
		return new Request.JSON({
			url: url,
			onSuccess: function(json, text) {
				this.fireEvent('ok', json);
			},
			onError: function(text, error) {
				this.fireEvent('error', text, error);
			},
			onFailure: function(xhr) {
				this.fireEvent('error', 'fail', xhr);
			}
		}).get();
	}
};


/*
	Object: ui.controller.keyboard
		private function

		Listen to the keyboard and propagate effect on menu

	Discussion:

		Should be also handled by ui.notification and UI.Menu

	*/


ui.keyboard = {
	opts: {
		container: window
	},

	init: function(){
		keyboard.opts.container.addEvent('keydown', function(e){
			if (e.key == 'down') {
				//_log('ui.keyboard.handle(down)');
			}
			else if (e.key == 'up') {
				//_log('ui.keyboard.handle(up)');
			}
			else if (e.key == 'enter') {
				//_log('ui.keyboard.handle(enter)');
			}
			else if (e.key == 'tab') {
				//_log('ui.keyboard.handle(tab)');
			}
			// var ev = new Event(e).stop();
		});
	}
};

/*
	Object: ui.controller.element

	Default element controller.
	It handle element's z-index as well as group managing and group serialization (usefull for controls values)

	Implied global:
		- MooLego - ui
		- Javascript - window

	Discussion:
		For now, the controller structure is not well defined,

*/
ui.controller.element = {

	list: [],
	zIndex: 1,
	groups: {},
	elements: [],

	/*
	Function: register
		private function

		Add passing element to the elements list

	Arguments:
		object - (object) an element class' instance

	*/
	register: function(object) {
		var oid = this.list.push(object) - 1;


		//_log('ui.controller.register()',object.element,object);

		//set z-index
		if (object.element.getStyle('zIndex') == 'auto' || object.element.getStyle('zIndex') === 0) {
			object.element.setStyle('zIndex', object.options.zIndex || this.zIndex++);
		}

		//add element to the group if needed
		if (object.options.group) {
			this.group(oid);
		}

		/*
		//get first element parent made with UI
		var element = object.element.getParent();
		while (element && !element.ui) {
			element = element.getParent();
		}

		//store element in first element parent made with UI
		if (element) {
			if (!element.elements) element.elements = new Hash();
			if (!element.elements[object.options.name]) element.elements[object.options.name] = new Array();
			element.elements[object.options.name].push(object);

		//store element in UI (element is not in our UI)
		} else {
			if (!this.list[object.options.name]) this.list[object.options.name] = new Array();
			this.list[object.options.name].push(object);
		}

		//replace tips
		// should in tips controller in tips.js

		if (object.options.name != 'tip') {
			window.fireEvent('setTipsPosition');
		}
		*/
	},

	/*
		Function: group
			private function

			Add passing element to the provided group

		Arguments:
			object - (object) an element class' instance

	*/
	group: function(oid) {
		//we check if the group exists, else we create it
		this.groups[this.list[oid].options.group] = this.groups[this.list[oid].options.group] || [];
		this.groups[this.list[oid].options.group].push(oid);
	},

	/*
	Function: serialize
		private function

		Add passing element to the elements list

	Arguments:
		groupID - (string) name of the group you want to serialize element's value.

	Discussion:

		Not implemented

	*/
	serialize: function(groupID) {
		if (!this.groups[groupID])
			return false;

		var string = [];
		this.groups[groupID].each(function(eC){
			if (eC.value) {
				string.push(eC.options.name + '=' + eC.value);
			}
		});

		return string.join('&');
	}
};





