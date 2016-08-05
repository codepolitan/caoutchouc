/**
 * UI Control Search Class
 * @class UI.Control.Search
 * @extends {UI.Control}
 * @type {Class}
 */
define(function(require, exports, module) {

  var Field = require('ui/control/field');
  var Choice = require('ui/control/choice');
  var Method = require('ui/component/method');

  var _log = __debug('ui-control-filter').defineLevel();

  var Filter = new Class({

    Extends: Field,

    Implements: [Options, Events, Method],

    options: {
      name: 'filter',
      error: false,
      label: false,
      timer: 150
    },

    /**
     * initialize
     * @param  {Object} options
     * @return {Object}
     */
    initialize: function(options) {
      this.setOptions(options);
      var opts = this.options;

      this.fireEvent('init');

      this.filters = {};
      this.controls = {};
      this.filterEnable = false;

      this._initOptions(opts);
      this._initElement();
      //this._initEvents();

      return this;
    },

    /**
     * init element
     * @return {void}
     */
    _initElement: function() {
      //create a new div as input element
      this.parent();

      this.element.addClass('head-filter');
      this.element.setStyle('display', 'none');

      this._initFilterControls();
    },

    /**
     * initInput
     * @return {void}
     */
    _initInput: function() {
      //_log.debug('_initInput', this.options);
      //this.parent();

      //this.input.set('autocomplete', 'off');
    },

    /**
     * get
     * @return {void}
     */
    get: function(what) {

      if (what === 'filters') {
        return this.filters;
      }

    },

    /**
     * init filter controls
     * @return {void}
     */
    _initFilterControls: function() {
      var opts = this.options;
      var filter = opts.filter;
      var list = filter.list || [];

      _log.debug('_initFilterControls', filter, list);

      for (var i = 0; list.length > i; i++) {
        var name = list[i];
        var f = filter[name];

        var values = f.text;
        values = values || f.values;

        var choice = this._initChoice(name, values, f.value);

        this.controls[f.key] = choice;
      }
    },

    /**
     * init choice
     * @param  {string} name
     * @param  {Array} values
     * @param  {string} value
     * @return {Object}
     */
    _initChoice: function(name, values, value) {
      _log.debug('_initChoice', name, values, value);

      /*handle text*/
      var list = [];
      var f = this.options.filter[name];
      if (f.valuesText) {
        list = f.valuesText;
      } else {
        list = values;
      }

      var choice = new Choice({
        name: name,
        type: 'push',
        error: false,
        list: list,
        value: value
      }).inject(this.element).addEvents({
        change: this._choiceDidChange.bind(this, name)
      });

      if (value) {
        this.changeFilter(name, value);
      }

      return choice;
    },

    /**
     * choice did change
     * @param  {string} name
     * @param  {string} value
     * @return {void}
     */
    _choiceDidChange: function(name, value) {
      _log.debug('_choiceDidChange', name, value);

      if (value !== undefined) {
        this.changeFilter(name, value);
      } else {
        this.removeFilter(name);
      }

      _log.debug('change', this.filters[name]);

      this.fireEvent('change', this.filters[name]);
    },

    /**
     * change filter
     * @param {string} name
     * @param {string} value
     */
    changeFilter: function(name, value) {
      var filter = this.options.filter[name];

      filter.value = value;

      _log.debug('changeFilter', name, value, filter);

      this.filters[name] = filter;
    },

    /**
     * remove filter
     * @param {string} name
     */
    removeFilter: function(name) {
      _log.debug('removeFilter', name);

      if (this.filters[name]) {
        delete this.filters[name];
      }
    },

    /**
     * select filter
     * @param  {string} key
     * @param  {string} value
     * @return {Object}
     */
    select: function(key, value) {
      _log.debug('selectFilter', key, value, this.controls);

      if (this.controls && this.controls[key]) {
        this.controls[key].select(value);
      }

      return this;
    },

    /**
     * set filter
     * @param {Object} filter
     */
    setFilter: function(filter) {
      _log.debug('setFilter', filter);

      this.options.filter = filter;

      if (this.filterBar) {
        this.filterBar.empty();
      }

      this._initFilter(filter);
    },

    /**
     * init events
     * @return {void}
     */
    _initEvents: function() {
      this.parent();

      var self = this;
      var opts = this.options;
      var timer;

      this.input.addEvents({
        keyup: function() {
          clearTimeout(timer);
          timer = setTimeout(function() {
            self.fireEvent('search', self.input.get('value'));
          }, opts.timer);
        },
        mousedown: function(e) {
          e.stopPropagation();
        }
      });
    },

    /**
     * empty
     * @return {Object}
     */
    empty: function() {
      _log.debug('empty', this.filters);

      var filters = this.filters;

      for (var filter in filters) {
        if (!filters.hasOwnProperty(filter)) {
          continue;
        }
        this.controls[filters[filter].key].toggle_selected();
        this.removeFilter(filter);
      }

      return this;
    },


  });

  module.exports = Filter;

});
