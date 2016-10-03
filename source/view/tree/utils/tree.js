/**
 * Tree View Core
 * @see https://github.com/cpojer/mootools-tree
 */
var Tree = new Class({

  Implements: [Options, Events, Class.Binds, Class.Single],

  options: {
    //onChange: function() {},
    //onSelect: function(element) {},
    indicatorOffset: 0,
    cloneOffset: {
      x: 16,
      y: 16
    },
    cloneOpacity: 0,
    checkDrag: Function.from(true),
    checkDrop: Function.from(true)
  },

  initialize: function(element, options) {
    this.setOptions(options);
    element = this.element = document.id(element);
    return this.check(element) || this.setup();
  },

  setup: function() {
    this.indicator = new Element('div.treeIndicator');

    var self = this;
    this.handler = function(e) {
      self.mousedown(this, e);
    };

    this.handlerDblclick = function(e) {
      self.dblclick(this, e);
    };

    this.handlerMouseup = function(e) {
      self.mouseup(this, e);
    };

    this.handlerClick = function(e) {
      self.click(this, e);
    };

    this.handlerBlur = function(e) {
      self.blur(this, e);
    };

    this.attach();
  },

  attach: function() {
    this.element.addEvent('mouseup:relay(ul)', this.handlerMouseup);
    this.element.addEvent('click:relay(li)', this.handlerClick);
    this.element.addEvent('dblclick:relay(li)', this.handlerDblclick);
    this.element.addEvent('click', this.handlerBlur);
    return this;
  },

  detach: function() {
    this.element.removeEvent('click:relay(li)', this.handlerClick);
    return this;
  },

  enableDrag: function() {
    this.detach();
    this.element.addEvent('mousedown:relay(li)', this.handler);
  },

  disableDrag: function() {
    this.element.removeEvent('mousedown:relay(li)', this.handler);
    this.attach();
  },

  mousedown: function(element, event) {
    event.preventDefault();

    if (this.clone) {
      this.clone.destroy();
    }
    this.padding = (this.element.getElement('li ul li') || this.element.getElement('li')).getLeft() - this.element.getLeft() + this.options.indicatorOffset;
    if (this.collapse === undefined && typeof Collapse != 'undefined') {
      this.collapse = this.element.getInstanceOf(Collapse);
    }

    if (!this.options.checkDrag.call(this, element)) {
      return;
    }
    if (this.collapse && Slick.match(event.target, this.collapse.options.selector)) {
      return;
    }
    if (this.current) {
      this.current.removeClass('selected');
    }

    this.current = element.addClass('selected');
    this.clone = element.clone().setStyles({
      left: event.page.x + this.options.cloneOffset.x,
      top: event.page.y + this.options.cloneOffset.y,
      opacity: this.options.cloneOpacity
    }).addClass('drag').inject(document.body);

    this.clone.makeDraggable({
      unDraggableTags: ['button', 'input', 'textarea', 'select', 'option'],
      droppables: this.element.getElements('li span'),
      onLeave: this.bound('hideIndicator'),
      onDrag: this.bound('onDrag'),
      onDrop: this.bound('onDrop')
    }).start(event);
  },

  mouseup: function() {
    if (this.clone) {
      this.clone.destroy();
    }
  },

  click: function(element, ev) {
    if (this.clone) {
      this.clone.destroy();
    }

    if (ev.target.hasClass('label')) {
      if (this.current) {
        this.current.removeClass('selected');
      }
      this.current = element.addClass('selected');
      this.fireEvent('select', [element]);
    }

    var target = ev.target;
    var id = element.getAttribute('data-id');
    if (id && target.hasClass('collapse')) {
      this.fireEvent('collapse', id);
    } else if (id && target.hasClass('expand')) {
      this.fireEvent('expand', id);
    }
  },

  dblclick: function(element, ev) {
    if (this.clone) {
      this.clone.destroy();
    }
    if (this.current) {
      this.current.removeClass('selected');
    }

    this.current = element;

    if (ev.target.hasClass('label')) {
      this.fireEvent('dblclick', [element]);
    }
  },

  blur: function(element, ev) {
    if (element != ev.target) {
      return;
    }

    if (this.current) {
      this.current.removeClass('selected');
    }

    this.fireEvent('blur');
  },

  onDrag: function(el, event) {
    clearTimeout(this.timer);
    if (this.previous) {
      this.previous.fade(1);
    }
    this.previous = null;

    if (!event || !event.target) {
      return;
    }

    var droppable = (event.target.get('tag') == 'li') ? event.target : event.target.getParent('li');
    if (!droppable || this.element == droppable || !this.element.contains(droppable)) {
      return;
    }

    if (this.collapse) {
      this.expandCollapsed(droppable);
    }

    var coords = droppable.getCoordinates();
    var marginTop = droppable.getStyle('marginTop').toInt();
    var center = coords.top + marginTop + (coords.height / 2);
    var isSubnode = (event.page.x > coords.left + this.padding);
    var position = {
      x: coords.left + (isSubnode ? this.padding : 0),
      y: coords.top
    };

    var drop;
    if ([droppable, droppable.getParent('li')].contains(this.current)) {
      this.drop = {};
    } else if (event.page.y >= center) {
      position.y += coords.height;
      drop = {
        target: droppable,
        where: 'after',
        isSubnode: isSubnode
      };
      if (!this.options.checkDrop.call(this, droppable, drop)) {
        return;
      }
      this.setDropTarget(drop);
    } else if (event.page.y < center) {
      position.x = coords.left;
      drop = {
        target: droppable,
        where: 'before'
      };
      if (!this.options.checkDrop.call(this, droppable, drop)) {
        return;
      }
      this.setDropTarget(drop);
    }

    if (this.drop.target) {
      this.showIndicator(position);
    } else {
      this.hideIndicator();
    }
  },

  onDrop: function(el) {
    el.destroy();
    this.hideIndicator();

    var drop = this.drop;
    var current = this.current;
    if (!drop || !drop.target) {
      return;
    }

    var previous = current.getParent('li');
    if (drop.isSubnode) {
      current.inject(drop.target.getElement('ul') || new Element('ul').inject(drop.target), 'bottom');
    } else {
      current.inject(drop.target, drop.where || 'after');
    }

    if (this.collapse) {
      if (previous) {
        this.collapse.updateElement(previous);
      }
      this.collapse.updateElement(drop.target);
    }

    this.fireEvent('change');
  },

  setDropTarget: function(drop) {
    this.drop = drop;
  },

  showIndicator: function(position) {
    this.indicator.setStyles({
      zIndex: 1000,
      left: position.x + this.options.indicatorOffset,
      top: position.y
    }).inject(document.body);
  },

  hideIndicator: function() {
    this.indicator.dispose();
  },

  expandCollapsed: function(element) {
    var child = element.getElement('ul');
    if (!child || !this.collapse.isCollapsed(child)) {
      return;
    }

    element.set('tween', {
      duration: 150
    }).fade(0.5);
    this.previous = element;
    this.timer = (function() {
      element.fade(1);
      this.collapse.expand(element);
    }).delay(300, this);
  },

  serialize: function(fn, base) {
    if (!base) {
      base = base || this.element.getElement('ul');
    }
    if (!fn) {
      fn = function(el) {
        return el.get('data-id');
      };
    }

    var result = {};
    base.getChildren('li').each(function(el) {
      var child = el.getElement('ul');
      result[fn(el)] = child ? this.serialize(fn, child) : true;
    }, this);
    return result;
  }

});

module.exports = Tree;
