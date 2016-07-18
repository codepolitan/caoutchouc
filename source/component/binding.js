/**
 * Binding Core Module Class
 * @class Core.Module.Binding
 * @author Jerome Vial, Bruno Santos
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function() {

  var _log = __debug('core:module-binding').defineLevel();

  if (typeof define !== 'function') {
    Class = require('primish');
    Events = require('primish/emitter');
  }

  var exports = new Class({

    Implements: [Events],

    options: {
      api: {
        emit: 'trigger'
      }
    },

    /**
     * Initialize
     * @return {void}
     */
    initialize: function() {
      _log.debug('initialize binding');

      var self = this;

      this.addEvent('initReady', function() {
        self._initBinding.bind(this)();
      });
    },

    /**
     * Events communication controller
     * Event bindings
     * @return {Object}
     */
    _initBinding: function(binding) {
      binding = binding || this.options.controller || this.options.binding;

      this.binding = this.binding || {};

      _log.debug('_initBinding', this.options.name, binding);

      if (!binding) {
        _log.debug('missing binding options');
        return;
      }

      if (!binding._list) {
        this._bindObject(binding);
        return;
      }

      var list = binding._list;

      //_log.debug(list, binding);

      for (var i = 0; list.length > i; i++) {
        var bind = binding[list[i]];
        this.binding = this.binding || {};

        this._bindObject(bind);
      }

      if (this.fireEvent) {
        this.fireEvent('bindingsReady');
      } else if (this.trigger) {
        this.trigger('bindingsReady');
      }

      return this.binding;
    },

    /**
     * Bind an object
     * @param  {Object} obj obj whit key and value to be bound
     * @return {void}
     */
    _bindObject: function(obj) {
      //_log.debug('_bindObject', obj);

      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) {
          continue;
        }
        var value = obj[key];

        if (typeof value !== 'object') {
          this._bindkey(key, value);
        } else {
          this._bindList(key, value);
        }
      }
    },

    /**
     * Bind a list of events to a specific object
     * @param  {string} key Object path that will listen
     * @param  {Array} values List if values to bind
     * @return {void}
     */
    _bindList: function(key, values) {
      //_log.debug('_bindList', key, values);

      for (var i = 0; i < values.length; i++) {
        this._bindkey(key, values[i]);
      }
    },

    /**
     * Bind to object path
     * get the event,
     * get the reference to the last key of the first object,
     * check if there is a event or a mehtod to bind
     * @param  {string} key Object path that will listen
     * @param  {string} val Object path to be bound
     * @return {void}
     */
    _bindkey: function(key, val) {
      //_log.debug('_bindkey', key, val);

      var eventKeys = key.split('.');
      var ev = eventKeys[eventKeys.length - 1];
      eventKeys.pop();
      var listenerCtx = this._path(eventKeys.join('.'));

      //handle obj
      var obj = this._getObj(listenerCtx, val);
      if (obj) {
        for (var newCtx in obj) {
          if (!obj.hasOwnProperty(newCtx)) {
            continue;
          }
          var newKey = eventKeys.join('.') + '.' + newCtx + '.' + ev;
          //_log.debug('_bindkey', newKey, val);
          this._bindkey(newKey, val);
        }
        return;
      }

      //handle args
      var args;
      if (typeof val === 'object') {
        for (var k in val) {
          if (!val.hasOwnProperty(k)) {
            continue;
          }
          break;
        }
        args = this._processKeyObj(k, val);
        val = k;
      }

      var valKeys = val.split('.');

      //Check if it's an event
      if (valKeys[valKeys.length - 2] === this.options.api.emit) {
        var emit = valKeys[valKeys.length - 1];
        this._bindEvent(listenerCtx, ev, emit, val);
      } else {
        this._bindMethod(listenerCtx, ev, val, args);
      }
    },

    /**
     * Process Key Obj
     * @param  {string} key
     * @param  {Object} val
     * @return {Object}
     */
    _processKeyObj: function(key, val) {
      //_log.debug('_processKeyObj', key, val);

      var args = val[key];

      for (var i = 0; i < args.length; i++) {
        var arg = args[i];

        if (arg.split('.')[0] === 'this') {
          arg = arg.split('.');
          arg.shift();
          args[i] = this._path(arg.join('.'));
        }
      }

      return args;
    },

    /**
     * Listen to the given event and trigger another
     * @param  {Object} listenerCtx Object to listen
     * @param  {string} ev Event that will be listened
     * @param  {string} emit Event that will be emitted
     * @param  {string} val Method path to be bound
     * @return {void}
     */
    _bindEvent: function(listenerCtx, ev, emit, val) {
      //_log.debug('_bindEvent', listenerCtx, ev, emit, val);

      var emitter = this.options.api.emit;

      var valKeys = val.split('.');
      var save = valKeys[valKeys.length - 1];
      valKeys.splice(-2, 2);
      var boundCtx = this._path(valKeys.join('.'));

      //handle obj
      var obj = this._getObj(boundCtx, val);
      if (obj) {
        for (var newCtx in obj) {
          if (!obj.hasOwnProperty(newCtx)) {
            continue;
          }
          var newKey = valKeys.join('.') + '.' + newCtx + '.' + emitter + '.' + save;
          //_log.debug('_bindEvent', newKey);
          this._bindEvent(listenerCtx, ev, emit, newKey);
        }
        return;
      }

      if (listenerCtx && listenerCtx.addEvent && boundCtx && boundCtx.fireEvent) {
        //_log.debug('bind val', val);
        listenerCtx.addEvent(ev, boundCtx.fireEvent.bind(boundCtx, emit));
        // keep track of the binding
        //this.binding[ev] = event;
      } else if (listenerCtx && listenerCtx.on && boundCtx && boundCtx.fireEvent) {
        //this.binding[ev] = event;
        listenerCtx.on(ev, boundCtx.fireEvent.bind(boundCtx, emit));
      } else {
        _log.warn('missing context or method', listenerCtx, val, this);
      }
    },

    /**
     * Listen to the given event and bind to the given method
     * @param  {Object} listenerCtx Object to listen
     * @param  {string} ev Event that will be listened
     * @param  {string} val Method path to be bound
     * @return {void}
     */
    _bindMethod: function(listenerCtx, ev, val, args) {
      //_log.debug('_bindMethod', listenerCtx, ev, val);
      var method = this._path(val);

      var valKeys = val.split('.');
      valKeys.pop();
      var boundCtx = this._path(valKeys.join('.'));

      //handle obj
      var obj = this._getObj(boundCtx, val);
      if (obj) {
        for (var newCtx in obj) {
          if (!obj.hasOwnProperty(newCtx)) {
            continue;
          }
          var newKey = valKeys.slice(0, 2).join('.');
          newKey = val.replace(newKey, newKey + '.' + newCtx);
          //_log.debug('_bindMethod', newKey);
          this._bindMethod(listenerCtx, ev, newKey, args);
        }
        return;
      }

      if (listenerCtx && listenerCtx.addEvent && method) {
        if (args) {
          listenerCtx.addEvent(ev, method.bind(boundCtx, args));
        } else {
          listenerCtx.addEvent(ev, method.bind(boundCtx));
        }
        // keep track of the binding
        this.binding[ev] = method;
      } else if (listenerCtx && listenerCtx.on && method) {
        this.binding[ev] = method;
        listenerCtx.on(ev, method.bind(boundCtx));
      } else {
        _log.warn('missing context or method', listenerCtx, val, this);
      }
    },

    /**
     * Return the last reference to a object
     * @param  {string} str Object path for example key1.key2.key3
     * @return {Object}
     */
    _path: function(str) {
      //_log.debug('_path', str);
      if (!str) {
        return this;
      } else if (!str.match(/\./)) {
        return this[str];
      }

      var last;

      var keys = str.split('.');
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];

        last = last || this;
        last = last[key];
      }

      return last;
    },


    _getObj: function(ctx, str) {

      if (ctx && ctx.constructor && ctx.constructor.name === 'Object') {
        for (var first in ctx) {
          if (!ctx.hasOwnProperty(first)) {
            continue;
          }
          break;
        }
        if (str.indexOf(first) !== -1) {
          return;
        }
        //_log.debug('_getObj', str, ctx, first);
        return ctx;
      }
    },

  });

  return exports;

}));
