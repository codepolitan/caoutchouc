import Component from '../component/component';
import ButtonControl from '../control/button';
import Container from './container';

const _log = __debug('container-tab').defineLevel();

export default new Class({

  Extends: Container,

  options: {
    clss: 'tab',
    name: 'tab',
    base: 'container',

    head: true,
    content: null,
    node: [{
      name: 'one'
    }, {
      name: 'two'
    }],
    comp: ['body']
  },

  /**
   * initialize
   * @param  {Object} options
   * @return {void}
   */
  initialize: function(options) {
    _log.debug('initialize', options);

    this.list = [];
    this.components = [];

    this.parent(options);
  },

  /**
   * Set Content of the current container (tab)
   * @param {[type]} method  [description]
   * @param {[type]} source  [description]
   * @param {[type]} options [description]
   */
  setContent: function(method, source, options) {
    _log.debug('setContent', method, source, options);
    this.active.setContent(method, source, options);
  },

  /**
   * Create tab and its related container and addEvent
   * @param {[type]} container [description]
   * @param {[type]} position  [description]
   */
  addTab: function(container, position) {
    _log.debug('addTab', container, position);

    var self = this;
    var opts = container.options;

    var text = opts.text || opts.title || opts.name;

    var tab = new ButtonControl({
      type: 'tab',
      text: text,
      name: opts.name,
      onPress: function(e) {
        self.activate(container);
      }
    }).inject(this.bar);

    container.inject(this.body);

    this.components.push(container);

    if (this.components.length === 1) {
      this.activate(container);
    } else {
      container.hide();
    }

    container.element.store('tab', tab);

    if (this.active == container) {
      self._setActiveTab(tab);
    }
  },

  /**
   * Set wich tab should be activated
   * @param {[type]} container [description]
   * @return {void}
   */
  setActive: function(container) {
    _log.debug('setActive', container);

    if (typeOf(container) === 'object') {
      var index = this.list.indexOf(container);

      if (index >= 0) {
        this.list[index].setState('active');
        this.list[num].fireEvent('click');
      }
    }
  },

  activate: function(container) {
    _log.debug('activate', container);

    if (typeOf(container) !== 'object') {
      return;
    }

    if (this.active) {
      this.active.hide();
    }

    container.show();
    container.fireEvent('resize');

    this._setActiveTab(container.element.retrieve('tab'));

    this.active = container;
    container.fireEvent('resize');

    this.fireEvent('activate', container);

    return this;
  },

  _initElement: function() {
    _log.debug('_initElement');

    this.parent();
    this._initBar();
  },

  /**
   * Build the split containers
   * @return {void}
   */
  _initComponent: function() {
    _log.debug('_initComponent');

    var self = this;
    var opts = this.options;

    this.components = [];

    if (opts.node === null) {
      return;
    }

    this.node = [];

    if (!this.layout) {
      this.layout = {};
    }

    opts.node.each(function(node, i) {
      if (!node.component) {
        node.component = 'container';
      }

      node.container = self.content;
      node.main = self.main;

      var container = new UI[node.component.capitalize()](node);

      container.addEvent('focus', function() {
        self.activate(container);
      });

      self.components.push(container);

      self.addEvent('resize', function() {
        //_log.debug('tab resize,, views', container.name);
        container.fireEvent('resize');
      });

      self.node.push(container);

      if (i < 1) {
        self.activate(container);
      }

      self.addTab(container);
      if (i > 0) {
        container.hide();
      }

      self.layout[self.main][container.name] = container;
      //ui.node[self.main][node.name] = container;

    });

    //self._initSplitter();
    //self._initSize();
  },

  _initClass: function() {
    this.parent();

    this.element.addClass('ui-tab');
  },

  /**
   * Create tabbar and add tabs
   * @return {void}
   */
  _initBar: function() {
    //var self = this;

    this.bar = new Component({
      tag: 'div',
      klass: 'tab-bar',
      name: 'bar'
    }).inject(this.head, 'bottom');

    this.addEvent('resize', function() {
      //self.element.setStyle('padding-top', self.head.getSize().y+'px');
    }.bind(this));
  },

  /**
   * Set some behaviours
   * @return {void}
   */
  _initEvents: function() {
    _log.debug('_initEvents');

    this.parent();

    var self = this;

    this.addEvents({
      resize: function() {
        self.components.each(function(c) {
          c.fireEvent('resize');
        });
      },
      injected: function() {

      }
    });
  },

  _setActiveTab: function(tab) {
    if (!tab) {
      return;
    }

    if (this.tab) {
      this.tab.element.removeClass('ui-selected');
      this.tab.setState('default');
    }

    tab.addClass('ui-selected');
    tab.setState('active');

    this.tab = tab;
  }

});
