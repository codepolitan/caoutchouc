/**
 * UI Window Dialog Class
 * @extends {UI.Container}
 * @type {Class}
 */
var ButtonControl = require('control/button');
var Window = require('window/window');

var _log = __debug('ui-dialog').defineLevel();

var Dialog = new Class({

  Extends: Window,

  name: 'dialog',

  options: {
    center: true,
    title: 'Dialog',
    type: 'dialog',

    alert: false,

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
   * init element
   * @return {void}
   */
  _initElement: function() {
    this.parent();

    this._initBody();
    this._initActions();

    //this.buildButtons(this.options.action);
  },

  /**
   * init body
   * @return {void}
   */
  _initBody: function() {
    _log.debug('_initBody', this.content);

    var message = this.options.message;

    this.message = new Element('div', {
      class: 'container-body',
      styles: {
        padding: '16px'
      },
      html: message
    }).inject(this.foot, 'before');
  },


  /**
   * init message
   * @param  {string} message
   * @return {void}
   */
  _initMessage: function(message) {
    _log.debug('_initMessage', message);

  },

  /**
   * init controls
   * @return {void}
   */
  _initActions: function() {
    _log.debug('_initActions', this.foot);

    var self = this;

    this.actions = this.actions || [];

    var toolbar = new Element('div', {
      'class': 'ui-toolbar toolbar-action'
    }).inject(this.foot);

    if (this.options.alert) {
      var list = this.options.control._list;
      var idx = list.indexOf('cancel');
      if (idx > -1) {
        list.splice(idx, 1);
      }
    }

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
   * _init action
   * @param  {string} name
   * @param  {Object} opts
   * @param  {Object} toolbar
   * @return {void}
   */
  _initAction: function(name, opts, toolbar) {
    _log.debug('_intiAction', name, opts, toolbar);

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

module.exports = Dialog;
