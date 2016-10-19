(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function() {

  var exports = {

    /**
     * Return Something (func) from a given path
     * @method _pathTo
     * @param {string} the path in dot notation
     * @return {Object}
     * @api {}
     */
    _pathTo: function(path, self) {

      //_log.debug('_pathTo', path);
      // Maybe should not be so restricive
      if (typeOf(path) === 'function') {
        return path;
      }

      var keys = path.split('.');

      var func = null;
      var context = null;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];

        func = func || self;
        func = func[key];
        context = context || self;

        if (typeof context[key] !== 'function') {
          context = context[key];
        }
      }

      /*_log.debug({
      	func: func,
      	context: context
      });*/

      return {
        func: func,
        context: context
      };
    },

    deref: function(obj, s) {
      var i = 0;
      s = s.split('.');
      while (obj && i < s.length) {
        obj = obj[s[i++]];
      }
      return obj;
    },

    /**
     * Get Class From String
     * @method getClassFromString
     * @param {string}
     * @return {clss}
     * @api public
     */
    strToClss: function(str) {
      if (typeOf(str) === 'class') {
        return str;
      }

      var keys = str.split('.');

      var clss = null;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (clss) {
          clss = clss[key];
        } else {
          clss = window[key];
        }
      }

      return clss;
    },

    /**
     * Get Class From String
     * @method getClassFromString
     * @param {string}
     * @return {clss}
     * @api public
     */
    toclss: function(str) {
      if (typeOf(str) === 'class') {
        return str;
      }

      var keys = str.split('.');

      var clss = null;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (clss) {
          clss = clss[key];
        } else {
          clss = window[key];
        }
      }

      return clss;
    }

  };

  return exports;

}));



//OLD FILE IF NEEDED

/*var mnml = mnml || {};
mnml.api = mnml.api || {};

mnml._pathTo = function(path, self) {

	//_log.debug('_pathTo', path);
	// Maybe should not be so restricive
	if (typeOf(path) == 'function') return path;

	var keys = path.split('.');

	var func = null,
		context = null;

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];

		func = func || self;
		func = func[key];
		context = context || self;

		if (typeof context[key] !== 'function')
			context = context[key];
	}

	/*_log.debug({
		func: func,
		context: context
	});*

	return {
		func: func,
		context: context
	};
};

mnml.deref = function (obj, s) {
	var i = 0;
	s = s.split('.');
	while (obj && i < s.length)
		obj = obj[s[i++]];
	return obj;
};

mnml.strToClss = function(str) {
	if (typeOf(str) == 'class') return str;

	var keys = str.split('.');

	var clss = null;

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		if (clss) clss = clss[key];
		else clss = window[key];
	}

	return clss;
};

mnml.api.toclss = function(clss) {
	if (typeOf(str) == 'class') return str;

	var keys = str.split('.');

	var clss = null;

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		if (clss) clss = clss[key];
		else clss = window[key];
	}

	return clss;
};

mnml.api.toclss = mnml.strToClss;*/
