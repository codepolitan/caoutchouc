/**
* Minimalistic Class for UI.Builder Management
*
* @class UI.Builder
* @Extends UI.Builder
* @Require Mootools
* @param {object} json
* @param {parent} container
* @return {parent} the dom structure
* @example (start code)	new UI.Builder(object); (end)
* @author Jerome Vial
* @copyright © 1999-2014 - Jerome D. Vial. All Rights reserved.
*/

UI.Builder = new Class({
	Implements: [Events, Options],
	options: {

	},

	initialize: function(object, container) {
		this._initElement(object, container);

//		object.level++;

	},

	/*
	Method: _initElement
		private function

		Creates html structure and inject it to the dom.

	Returns:
		(void)

	*/

	_initElement: function(object, container) {
		//console.log('builder._initElement container ',object.level,object.name);

		var container = {};

		if (typeOf(object) == 'object') {
			if (!object.container)
				object.container = 'container';

			container = new UI[object.container.capitalize()](object)
			.inject(container);

			// shoub define ui.controller.container.register
			if (!ui.controller.workspace)
				ui.controller.workspace = {};

			ui.controller.workspace[object.name] = container;

			//console.log(ui.controller.workspace);

		}

		//console.log('UI.Builder._initElement()', container.views);

		if (object.views) {
			object.views.each( function(sub, i) {
				new UI.Builder(sub, container.views[i]);
			});
		}

		return ui.controller.workspace;
	}
});


// DOMBuilder,  Copyright (c) 2008 Jerome Vial, <http://code.floor.ch/>, MIT Style License.
/*

Script: DOMBuilder.js
  Class for creating a dom object from json string or javascript object source


Dependencies:
	MooTools, <http://mootools.net/>

Author:
	Jerome Vial, <http://code.floor.ch/>

License:
  MIT-style license.

*/

/*

Class: DomBuilder 0.1
	A minimimalist Dom Builder class
	Return or inject a dom object from json string or javascript object source

Arguments:
	source	: the json or javascript source
	options :
		container : the container where to inject the new dom object

Example :

	// this example inject inside this.wrapper the json_string

	var json_string = '["table",{ class : "mytable"}, ["tr", { class : "row1" },["td",{ class : "col1" },"bonjour","td",{ class : "col2" }]],["tr", { class : "row2" },["td",{ class : "col1"},"td",{ class : "col2" }]],["tr", { class : "row3" },["td",{ class : "col1"},"td",{ class : "col2" }]]]'

	this.dom = new UI.Dom.Builder(json_string)
	 .inject(this.container);

*/

var DOMBuilder = new Class({
	Implements: [Events, Options],

	options: {
		onBuild: {},
		onStart: {}
	},

	initialize: function(source,options){
		this.setOptions(options);

		typeOf(source) == "string" ? this.object = JSON.decode(source) : this.object = source;

		this._initElement(this.object);

		return this.dom || '';
	},

	_initElement: function(object,container){
		var dom, tag, func, next = '';

		object.each( function(o,i) {
			if (typeOf(o) == "string") {
				(typeOf(object[i+1]) == "object") ? tag = o : dom.set("html",o);
			} else if (typeOf(o) == "object") {
				dom = new Element(tag, o)
				container ? dom.inject(container) : this.dom = dom;
			} else if (typeOf(o) == "array") {
				this._initElement(o, dom);
			} else if (typeOf(o) == "function") {
				this.dom.addEvent('click',function() { o() });
			}
		},this)
	}
});


