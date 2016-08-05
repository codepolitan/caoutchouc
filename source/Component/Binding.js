
/**
 * Binding Component Class
 *
 * @class UI.Component.Binding
 * @author Jerome Vial, Bruno Santos
 */
define([
	
], function(

) {

	var _log = __debug('ui:binding');
		//_log.defineLevel('DEBUG');

	var exports = new Class({

		options: {
			api: {
				emit: 'trigger'
			}
		},

		/**
		 * Events communication controller
		 * Event bindings
		 * @return {Object} The class instance
		 */
		_initBinding: function(binding) {
			binding = binding || this.options.binding;
			this.binding = this.binding || {};
			if (!binding) {
				return;
			}

			if (!binding._list) {
				this._bindObject(binding);

			} else {
				var list = binding._list;

				for (var i = 0; list.length > i; i++ ) {
					var bind = binding[list[i]];
					

					this._bindObject(bind);
				}
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
				var value = obj[key];

				if (typeof value != 'object') {
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
			_log.debug('_bindkey', key, val);
			var eventKeys = key.split('.');
			var ev = eventKeys[eventKeys.length - 1];

			eventKeys.pop();
			var listenerCtx = this._path(eventKeys.join('.'));

			var valKeys = val.split('.');

			//check if it's an event
			if (valKeys[valKeys.length - 2] == this.options.api.emit) {
				var emit = valKeys[valKeys.length - 1];
				this._bindEvent(listenerCtx, ev, emit, val);
			} else {
				this._bindMethod(listenerCtx, ev, val);
			}
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
			_log.debug('_bindEvent', listenerCtx, ev, emit, val);
			var emitter = this.options.api.emit;

			var valKeys = val.split('.');
			valKeys.splice(-2, 2);

			var boundCtx = this._path(valKeys.join('.'));

			if (listenerCtx && listenerCtx.addEvent && boundCtx && boundCtx.fireEvent) {
				listenerCtx.addEvent(ev, boundCtx.fireEvent.bind(boundCtx, emit));
				// keep track of the binding
				this.binding[ev] = event;
			} else if (listenerCtx && listenerCtx.on && boundCtx && boundCtx.fireEvent) {
				this.binding[ev] = event;
				listenerCtx.on(ev, boundCtx.fireEvent.bind(boundCtx, emit));
			} else {
				_log.debug('Missing context or method', listenerCtx, val);
			}
		},

		/**
		 * Listen to the given event and bind to the given method
		 * @param  {Object} listenerCtx Object to listen
		 * @param  {string} ev Event that will be listened
		 * @param  {string} val Method path to be bound
		 * @return {void}
		 */
		_bindMethod: function(listenerCtx, ev, val) {
			//_log.debug('_bindMethod', listenerCtx, ev, val);
			var method = this._path(val);

			var valKeys = val.split('.');
			valKeys.pop();
			var boundCtx = this._path(valKeys.join('.'));

			if (listenerCtx && listenerCtx.addEvent && method) {
				listenerCtx.addEvent(ev, method.bind(boundCtx));
				// keep track of the binding
				this.binding[ev] = method;
			} else if (listenerCtx && listenerCtx.on && method) {
				this.binding[ev] = method;
				listenerCtx.on(ev, method.bind(boundCtx));
			} else {
				//_log.debug('Missing context or method', listenerCtx, val);
			}
		},

		/**
		 * Return the last reference to a object
		 * @param  {string} str Object path for example key1.key2.key3
		 * @return {Object}
		 */
		_path: function(str) {
			//_log.debug('_path', str);
			if (!str) return this;
			else if (!str.match(/\./)) return this[str];

			var last;

			var keys = str.split('.');
			for (var i = 0, l = keys.length; i < l; i++) {
				var key = keys[i];

				last = last || this;
				last = last[key];
			}

			return last;
		}

	});

	return exports;
});
