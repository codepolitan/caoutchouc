/*
---

name: Collapse

description: Allows to expand or collapse a list or a tree.

authors: Christoph Pojer (@cpojer)

requires: [Core/Events, Core/Element.Event, Core/Element.Style, Core/Element.Dimensions, Core/Fx, More/Element.Delegation, Class-Extras/Class.Singleton]

provides: Collapse

...
*/

define(function(require, exports, module) {

  var Collapse = new Class({

    Implements: [Options, Class.Single],

    options: {
      animate: false,
      fadeOpacity: 1,
      className: 'collapse',
      selector: 'a.expand',
      listSelector: 'li',
      childSelector: 'ul'
    },

    initialize: function(element, options) {
      this.setOptions(options);
      element = this.element = document.id(element);

      return this.check(element) || this.setup();
    },

    setup: function() {
      var self = this;
      this.handler = function(e) {
        self.toggle(this, e);
      };

      this.mouseover = function() {
        if (self.hasChildren(this)) this.getElement(self.options.selector).fade(1);
      };

      this.mouseout = function() {
        if (self.hasChildren(this)) this.getElement(self.options.selector).fade(self.options.fadeOpacity);
      };

      this.prepare().attach();
    },

    attach: function() {
      var element = this.element;
      element.addEvent('click:relay(' + this.options.selector + ')', this.handler);
      if (this.options.animate) {
        element.addEvent('mouseover:relay(' + this.options.listSelector + ')', this.mouseover);
        element.addEvent('mouseout:relay(' + this.options.listSelector + ')', this.mouseout);
      }
      return this;
    },

    detach: function() {
      this.element.removeEvent('click:relay(' + this.options.selector + ')', this.handler)
        .removeEvent('mouseover:relay(' + this.options.listSelector + ')', this.mouseover)
        .removeEvent('mouseout:relay(' + this.options.listSelector + ')', this.mouseout);
      return this;
    },

    prepare: function() {
      this.prepares = true;
      this.element.getElements(this.options.listSelector).each(this.updateElement, this);
      this.prepares = false;
      return this;
    },

    updateElement: function(element) {
      var child = element.getElement(this.options.childSelector),
        icon = element.getElement(this.options.selector);

      if (!this.hasChildren(element)) {
        if (!this.options.animate || this.prepares) icon.setStyle('opacity', 0);
        else icon.fade(0);
        return;
      }

      if (this.options.animate) icon.fade(this.options.fadeOpacity);
      else icon.setStyle('opacity', this.options.fadeOpacity);

      if (this.isCollapsed(child)) icon.removeClass('collapse');
      else icon.addClass('collapse');
    },

    hasChildren: function(element) {
      var child = element.getElement(this.options.childSelector);
      return (child && child.getChildren().length);
    },

    isCollapsed: function(element) {
      if (!element) return;
      return (element.getStyle('display') == 'none');
    },

    toggle: function(element, event) {
      if (event) event.preventDefault();

      if (!element.match(this.options.listSelector)) element = element.getParent(this.options.listSelector);

      if (this.isCollapsed(element.getElement(this.options.childSelector))) this.expand(element);
      else this.collapse(element);

      return this;
    },

    expand: function(element) {
      element.getElement(this.options.childSelector).setStyle('display', 'block');
      element.getElement(this.options.selector).addClass(this.options.className);
      return this;
    },

    collapse: function(element) {
      if (!element.getElement(this.options.childSelector)) return;
      element.getElement(this.options.childSelector).setStyle('display', 'none');
      element.getElement(this.options.selector).removeClass(this.options.className);
      return this;
    }

  });


  /*
  ---

  name: Collapse.Persistent

  description: Interface to automatically save the state to persistent storage.

  authors: [Christoph Pojer (@cpojer), Sean McArthur (@seanmonstar)]

  requires: [Collapse]

  provides: Collapse.Persistent

  ...
  */

  Collapse.Persistent = new Class({

    Extends: Collapse,

    options: {

      getAttribute: function(element) {
        return element.get('id');
      },

      getIdentifier: function(element) {
        return 'collapse_' + element.get('id') + '_' + element.get('class').split(' ').join('_');
      }

    },

    setup: function() {
      this.key = this.options.getIdentifier.call(this, this.element);
      this.state = this.getState();
      this.parent();
    },

    prepare: function() {
      this.first = true;

      var obj = null, //minimal.settings.get('node.collapse'),
        elId,
        state;
      this.element.getElements(this.options.listSelector).each(function(element) {
        if (!element.getElement(this.options.childSelector)) return;

        elId = element.get('data-id');

        if (!obj) state = 1;
        else state = obj[elId];

        if (state == 1) this.expand(element);
        else if (state === 0) this.collapse(element);
      }, this);
      this.first = false;

      return this.parent();
    },

    /*prepare: function(){
      var obj = this.state;
      this.element.getElements(this.options.listSelector).each(function(element){
        if (!element.getElement(this.options.childSelector)) return;

        var state = obj[this.options.getAttribute.call(this, element)];
        if (state == 1) this.expand(element);
        else if (state == 0) this.collapse(element);
      }, this);

      return this.parent();
    },*/

    getState: function() {
      return {};
    },

    setState: function(element, state) {
      this.state[this.options.getAttribute.call(this, element)] = state;
      return this;
    },

    expand: function(element) {
      this.parent(element);
      this.setState(element, 1);
      return this;
    },

    collapse: function(element) {
      this.parent(element);
      this.setState(element, 0);
      return this;
    }

  });


  /*
  ---

  name: Collapse.Cookie

  description: Automatically saves the collapsed/expanded state in a Cookie.

  authors: [Christoph Pojer (@cpojer), Sean McArthur (@seanmonstar)]

  requires: [Core/Cookie, Core/JSON, Collapse.Persistent]

  provides: Collapse.Cookie

  ...
  */

  Collapse.Cookie = new Class({

    Extends: Collapse.Persistent,

    getState: function() {
      var self = this;
      return Function.attempt(function() {
        return JSON.decode(Cookie.read(self.key));
      }) || {};
    },

    setState: function(element, state) {
      this.parent(element, state);
      Cookie.write(this.key, JSON.encode(this.state), {
        duration: 30
      });
      return this;
    }

  });


  /*
  ---

  name: Collapse.LocalStorage

  description: Automatically saves the collapsed/expanded state to localStorage.

  authors: Sean McArthur (@seanmonstar)

  requires: [Core/JSON, Collapse.Persistent]

  provides: Collapse.LocalStorage

  ...
  */

  Collapse.LocalStorage = new Class({

    Extends: Collapse.Persistent,

    getState: function() {
      var self = this;
      return Function.attempt(function() {
        return JSON.decode(localStorage.getItem(self.key));
      }) || {};
    },

    setState: function(element, state) {
      this.parent(element, state);
      localStorage.setItem(this.key, JSON.encode(this.state));
      return this;
    }

  });


  /*
  ---

  name: Collapse.Settings

  description: Automatically saves the collapsed/expanded state to Settings.

  authors: Sean McArthur (@seanmonstar)

  requires: [Core/JSON, Collapse.Persistent]

  provides: Collapse.Settings

  ...
  */

  Collapse.Settings = new Class({

    Extends: Collapse.Persistent,

    /*getState: function(){
      var self = this;
      return Function.attempt(function(){
        return JSON.decode(localStorage.getItem(self.key));
      }) || {};
    },*/

    setState: function(element, state) {
      //this.parent(element, state);
      //localStorage.setItem(this.key, JSON.encode(this.state));
      if (!this.first) {
        var elId = element.get('data-id');

        return this;
      }
    }

  });

  module.exports = Collapse;

});
