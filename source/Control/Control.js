
/**
 * UI Control Class
 * @class  UI.Control
 * @extends {UI.Component}
 * @author Jerome Vial
 */
UI.Control = new Class({

	Extends: UI.Component,

	options: {
		//disabled: false
		error: false
	},

	/**
	 * [isEnable description]
	 * @return {Boolean} [description]
	 */
	isEnable: function() {
		//_log(this.state)
		if (this.state == 'disabled')
			return false;
		else return true;
	},

	/**
	 * [isActive description]
	 * @return {Boolean} [description]
	 */
	isActive: function() {
		if (this.state == 'active')
			return true;
		else return false;
	},


	/**
	 * [_initOptions description]
	 * @return {[type]} [description]
	 */
	_initOptions: function() {
		this.parent();

		var opts = this.options;

		this.value = opts.value;
		this.readonly = opts.read;
	},

	/*
		function : _initEvents

			Build the split containers

	*/
	_initEvents: function(){
		var self = this;

		//this.element.set('tabindex', 0);

		this.element.addEvents({
			click: function(e){
				//e.stopPropagation();
				self.fireEvent('click');
			},
			mouseup: function(){
				self.fireEvent('mouseup');
			}
		});
	}
});

