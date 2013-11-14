

/*
	Implement element method

	These methods are shortcuts to access element from the UI Component

*/



UI.Component.implement({

	toElement: function() {
		return this.element;
	},

	show: function(){
		this.fireEvent('show');
		this.element.show();

		return this;
	},

	hide: function(){
		this.fireEvent('hide');
		this.element.hide();

		return this;
	},

	getStyle: function(style){
		return this.element.getStyle(style);
	},

	getSize: function() {
		//console.log('------',typeOf(this.element));
		if (typeOf(this.element) == 'object')
			console.log(this.options.name);

		return this.element.getSize();
	},

	getComputedSize: function() {
		return this.element.getComputedSized();
	},

	getCoordinates: function() {
		return this.element.getCoordinates();
	},

	addClass: function(klass){
		this.element.addClass(klass);
		return this;
	},

	removeClass: function(klass){
		return this.element.removeClass(klass);
	},

	get: function(property){
		return this.element.get(property);
	},

	morph: function(props){
		return this.element.morph(props);
	},


	setSize: function(width, height){
		this.element.x = width || this.options.width;
		this.element.y = height || this.options.height;

		if (this.element.x)
			this.element.setStyle('width', this.element.x);

		if (this.element.y)
			this.element.setStyle('height', this.element.y);

		this.fireEvent('resize');
		return this;
	},


	setStyle: function(style, value){
		this.element.setStyle(style, value);

		return this;
	},

	setStyles: function(styles){
		this.element.setStyles(styles);

		return this;
	},

	getElement: function(string){
		return this.element.getElement(string);
	},

	getElements: function(string){
		return this.element.getElements(string);
	},

	destroy: function(){
		this.element.destroy();
		return;
	}
});