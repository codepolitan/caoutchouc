import Container from '../container/container';
import Window from '../window/window';

const _log = __debug('core-view-container').defineLevel();

export default new Class({

  options: {
    containers: {
      dispose: true
    }
  },

  /**
   * Initialize Container
   * @private
   */
  _initContainer: function() {
    _log.debug('_initContainer', this.container);
    var self = this;
    var opts = this.options;
    var type = typeOf(opts.container);

    if (type === 'object') {
      this.container.addEvent('resize', function() {
        self.fireEvent('resize');
      });
    } else if (type === 'element') {
      this.container = new Container({
        container: opts.container
      });
    } else {
      if (opts.window) {
        var win = new Window(opts.window);

        this.content = win.body;
        this.element = win.body;
        this.element.addClass('view-' + opts.clss);
        this.container = win;

        this.container.addEvent('resize', function() {
          self.fireEvent('resize');
        });
      }
    }

    if (!this.content) {
      this._initContent();
    }

    this.addEvents({
      focus: function() {
        self.container.setState('focus');
      },
      blur: function() {
        self.container.setState();
      }
    });

    /*this.container.addEvent('resize', function(){
      self.fireEvent('resize');
    });*/
  },

  /**
   * Add Slide(subview), intect it in the container, resize container and return it
   * @param {idx} idx
   */
  addContainer: function(idx) {
    var self = this;
    var opts = this.options.view;
    var index = idx || this.index;

    //var size = this.size;

    var container = new Container(opts).inject(this);

    self.addEvent('resize', function() {
      container.fireEvent('resize');
    });

    if (this.views.length === 0) {
      this.index = 0;
    }

    container.addClass('view' + index);
    this.views[index] = container;

    this.fireEvent('added', container);

    if (!idx) {
      this.view = container;
    }

    return container;
  },

  /**
   * Set the given view as active and move to it
   * @param {index} index
   */
  moveTo: function(index) {
    //_log.debug('moveTo', index);
    var opts = this.options;

    this.index = index;
    this.last = this.view;

    if (!this.views[index]) {
      this.view = this.addContainer(index);
    } else {
      this.view = this.views[index];

      if (opts.containers.dispose) {
        this.view.element.inject(this.element);
        this.fireEvent('updateWeekCell');
      } else {
        this.view.element.show();
      }
    }

    /*hide last element*/
    if (opts.containers.dispose) {
      this.last.element.dispose();
    } else {
      this.last.element.hide();
    }

    return this.view;
  },

  /**
   * Find the next view from the list and move to it if exist
   * @param {unit} unit
   */
  next: function(unit) {
    unit = unit || 1;

    var index = this.index + unit;

    this.moveTo(index, 1);
  },

  /**
   * Find the previous view from the list and move to it if exist
   * @param {unit} unit
   */
  back: function(unit) {
    unit = unit || 1;

    var index = this.index - unit;

    this.moveTo(index, -1);
  },

  /**
   * Go to
   * @param {unit} unit
   */
  /*goto: function(unit){
    unit = unit || 1;

    var index = this.index + unit;

    this.moveTo(index, 1);
  }*/

});
