/**
 * UI Window Prompt Class
 * @class UI.Window.Prompt
 * @extends {UI.Container}
 * @type {Class}
 */
define(function(require, exports, module) {

  var UIText = require('ui/component/text');
  var ButtonControl = require('ui/control/button');
  var Window = require('ui/window/window');

  module.exports = new Class({

    Extends: Window,

    name: 'prompt',

    /**
     * options
     * @type {Object}
     */
    options: {
      center: true,
      title: 'Prompt',
      type: 'prompt',

      // Default size
      width: 480,
      height: 200,
      location: 'center',
      zIndex: 6000,
      modal: true,

      foot: {
        'class': 'ui-foot'
      },

      controls: ['minimize', 'maximize', 'close'],

      control: {
        _list: ['cancel', 'ok::is-primary']
      },
      useOverlay: false
        // Components Options
        /*head: true,
        controls: ['close'],
        container: {},
        foot: true,
        overflow: 'scrollbar',

        resizable: false,

        action: {
        	list: ['cancel'],
        	cancel: {
        		text: 'Cancel',
        		fire: 'close'
        	},
        	confirm: {
        		clss: 'confirm',
        		text: 'Apply'
        	}
        }*/
    },

    /**
     * [initialize description]
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    initialize: function(options) {
      this.parent(options);

      this.message.focus();
    },

    /**
     * [_initElement description]
     * @return {[type]} [description]
     */
    _initElement: function() {
      this.parent();

      this._initBody();
      this._initActions();
    },

    /**
     * [_initHead description]
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    _initHead: function(options) {
      //_log.debug('_initHead', options);
      this.parent(options);

      this.title = new UIText({
        type: 'title',
        text: this.options.title
      }).inject(this.head);
    },

    /**
     * [_initBody description]
     * @return {[type]} [description]
     */
    _initBody: function() {
      //_log.debug('_initBody', this.content);
      var self = this;

      this.message = new Element('textarea', {
        class: 'ui-prompt'
      }).inject(this.foot, 'before');

      this.addEvents({
        ok: function() {
          var val = self.message.get('value');
          self.fireEvent('confirm', val);
        },
      });
    },

    /**
     * [_initControls description]
     * @param  {[type]} controls [description]
     * @return {[type]}          [description]
     */
    _initActions: function() {
      //_log.debug('_initActions', this.foot);
      var self = this;

      this.actions = this.actions || [];

      var toolbar = new Element('div', {
        'class': 'ui-toolbar toolbar-action'
      }).inject(this.foot);

      var control = this.options.control || {};
      var list = control._list || [];

      for (var i = 0; i < list.length; i++) {
        //_log.debug('for..loop', i);
        var name = list[i];
        var opts = control[name];

        self._initAction(name, opts, toolbar);
      }
    },

    /**
     * [_intiControl description]
     * @param  {[type]} name      [description]
     * @param  {[type]} opts      [description]
     * @param  {[type]} container [description]
     * @return {[type]}           [description]
     */
    _initAction: function(name, opts, toolbar) {
      //_log.debug('_intiAction', name, opts, toolbar);
      var self = this;

      var n = name.split('::');

      name = n[0];

      var klss = n[1];

      var action = new ButtonControl({
        name: name,
        text: name,
        klss: klss
      }).addEvent('press', function() {
        //_log.debug('press', name);
        self.fireEvent(name);
        self.close();
      }).inject(toolbar);

      this.actions.push(action);
    }

  });

});
