
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

define(function() {


	var exports = new Class({

		Implements: [Events, Options],

		options: {
			onBuild: {},
			onStart: {}
		},

		/**
		 * [initialize description]
		 * @param  {[type]} source  [description]
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		initialize: function(source,options){
			this.setOptions(options);

			typeOf(source) === "string" ? this.object = JSON.decode(source) : this.object = source;

			this._initElement(this.object);

			return this.dom || '';
		},

		/**
		 * [_initElement description]
		 * @param  {[type]} object    [description]
		 * @param  {[type]} container [description]
		 * @return {[type]}           [description]
		 */
		_initElement: function(object,container){
			var dom, tag, func, next = '';

			object.each( function(o,i) {
				if (typeOf(o) === "string") {
					(typeOf(object[i+1]) === "object") ? tag = o : dom.set("html",o);
				} else if (typeOf(o) === "object") {
					dom = new Element(tag, o)
					container ? dom.inject(container) : this.dom = dom;
				} else if (typeOf(o) === "array") {
					this._initElement(o, dom);
				} else if (typeOf(o) === "function") {
					this.dom.addEvent('click',function() { o() });
				}
			}, this)
		}
	});

	return exports;
});

