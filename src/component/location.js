export default new Class({

  _initLocation: function() {
    var list = ['left', 'top', 'right', 'bottom'];
    var location = this.getInitialLocation();

    for (var i = 0; i < list.length; i++) {
      if (location[list[i]]) {
        this.options[list[i]] = location[list[i]];
      }
    }

    // _log.debug('location', location);

    this.element.setStyles(location);
  },

  setLocation: function(left, top, morph) {
    var opts = this.options,
      el = this.element;

    this.element.left = left || opts.left || el.getCoordinates().x;
    this.element.top = top || opts.top || el.getCoordinates().y;

    this.element[morph ? 'morph' : 'setStyles']({
      top: this.element.top,
      left: this.element.left
    });

    return this;
  },

  getCenterLocation: function() {
    var location = {};
    var height = this.options.height;

    if (this.options.height != 'auto') {
      location.top = (window.getHeight() - height.toInt()) / 2;
    } else {
      location.top = 160;
    }

    location.left = (window.getWidth() - this.options.width.toInt()) / 2;

    return location;
  },


  /*
  Function: getInitialLocation
    private function

    Return the initial location depending on location options and window's size

  Returns:
    coordinates - (object) Object containing top and left properties
  */
  getInitialLocation: function() {
    if (this.options.top || this.options.right || this.options.bottom || this.options.left) {
      /*//right || left
      var left = (this.options.right && !this.options.left) ?
        Window.getWidth() - this.options.right - this.options.width :
        this.options.left;

      //top || bottom
      var top = (this.options.bottom && !this.options.top) ?
        Window.getHeight() - this.options.bottom - this.options.height :
        this.options.top;*/

      return {
        top: this.options.top,
        bottom: this.options.bottom,
        left: this.options.left,
        right: this.options.right
      };
    } else if (this.options.location == 'center') {
      return this.getCenterLocation();
    } else {
      var c = this.controller.getCascadeLocation(this);
      return {
        top: c.top,
        left: c.left
      };
    }
  },

  adaptLocation: function() {
    var location = {};
    var needed = false;
    var coordinates = this.element.getCoordinates();

    if (coordinates.top.toInt() > window.getHeight()) {
      location.top = window.getHeight() - Number.random(25, 75);
      needed = true;
    }

    if (coordinates.top.toInt() < 0) {
      location.top = 50;
      needed = true;
    }

    if (coordinates.left.toInt() + this.element.getStyle('width').toInt() < 0) {
      location.left = Number.random(25, 75) - this.element.getStyle('width').toInt();
      needed = true;
    }

    if (this.element.getStyle('left').toInt() > window.getWidth()) {
      location.left = window.getWidth() - Number.random(25, 75);
      needed = true;
    }

    if (needed) {

      //this.minimize();

      if (this.options.fx && this.options.fx.adaptLocation) {
        if (!this.reposFx) {
          this.reposFx = new Fx.Morph(this.element, this.options.fx.adaptLocation);
        }
        this.reposFx.start(location);
      }
    }
  }

});
