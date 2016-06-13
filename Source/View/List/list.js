/**
 * View.List
 * @class View.List
 * @extends View
 * @author Bruno Santos, Jerome Vial
 *
 * # Info Structure:
 *
 *      {
 *          _id: unique info id
 *          name: name
 *      }
 *
 *
 * # The options accept:
 *
 *      selectFirst: select the first node if there is no other node to select
 *
 */
define(function(require, exports, module) {

  var Mustache = require('Mustache');
  var DOM = require('utils/DOM');
  var View = require('UI/View/View');

  var Compat = require('UI/View/List/compat');
  var Expand = require('UI/View/List/expand');
  var Filter = require('UI/View/List/filter');
  var Insert = require('UI/View/List/insert');
  var Position = require('UI/View/List/position');
  var Search = require('UI/View/List/search');
  var Select = require('UI/View/List/select');
  //var Separator = require('UI/View/List/separator');
  var Settings = require('UI/View/List/settings');
  //var Sort = require('UI/View/List/sort');
  var Virtual = require('UI/View/List/virtual');

  var _log = __debug('view-core-ListV2').defineLevel();

  var ListView = new Class({

    Extends: View,

    Implements: [
      Compat,
      Expand,
      Filter,
      Insert,
      Position,
      Search,
      Select,
      //Separator,
      Settings,
      //Sort,
      Virtual
    ],

    options: {
      clss: 'listtwo',

      rangeSize: 50,

      save: {
        scrollTop: true
      },

      /*options to use mnml template module*/
      useTemplateModule: true,

      /*options to use multiple selection*/
      multipleSelect: false,

      selectable: true,

      template: {
        _type: 'simple',
        simple: '<div class="trunc">' +
          '<span class="small right">{{type}}</span><span class="name">{{name}}</span>' +
          '</div>',
      },

      /*integrated should be replaced client
      and event by server*/
      search: {
        type: 'integrated', //integrated || event
        enable: true
      },

      status: {
        enable: true
      },

      filter: {
        type: 'integrated', //integrated || event
        enable: true
      },

      expand: {
        enable: false,
        height: '630px'
      },

      sort: {
        key: 'name'
      },

      separator: {
        enable: false,
        type: 'alpha',
        key: 'name'
      },

      controller: {
        _list: ['view', 'search', 'expand', 'position', 'filter', /*'sort', 'position'*/ ],
        view: {
          'element.scroll': '_scroll',
          'element.click': '_elementDidClick',
          'add': 'new',
          'listtype': '_toggleList',
          //'content.click:relay(div.list-item)': '_onClickElement'
        },
        search: {
          'search': 'toggleSearch',
        },
        expand: {
          'elSelect': '_toggleExpand',
          'expand': '_renderViewport',
          'collapse': '_renderViewport'
        },
        filter: {
          'filter': 'toggleFilter',
        },
        sort: {
          'sort': '_setSort',
        },
        position: {
          'position': 'togglePosition',
          'moveup': 'moveUp',
          'movedown': 'moveDown',
        },
        /*settings: {
        	'select': 'settings.select',
        }*/
      }
    },

    /**
     * Initialize view
     * @return {void}
     */
    _initView: function() {
      this.parent();

      this.getRange = this.getRange || function() {};

      _log.debug('_initView', this.options);

      this.content = new Element('div', {
        'class': 'list-content list-virtual'
      }).inject(this.element);

      if (this.options.template) {
        this.element.addClass('type-' + this.options.template._type);
      }

      //define control obj to be used by the
      //plugins without trigger errors
      this.control = this.control || {};

      var self = this;

      /*timer used because the controls
      are not ready when we pass here*/
      setTimeout(function() {
        self._initCompat();
        //self._initStatus();
        self._initSearch();
        self._initExpand();
        self._initPosition();
        self._initFilter();
        //self._initSort();
        //self._initSeparator();
      }, 200);

      this.fireEvent('initialize');
    },

    /**
     * init events
     * @return {void}
     */
    _initEvents: function() {
      //_log.debug('_initEvents');

      this.parent();

      var self = this;

      this.content.addEvents({
        'click:relay(div.item-list)': this._onSelect.bind(this),
        'dblclick:relay(div.item-list)': function(ev, element) {
          self._onSelect(ev, element);
          self.fireEvent('choose', self.get('info'));
        }
      });
    },

    /**
     * when the list select
     * @param  {Object} ev
     * @return {void}
     */
    _onSelect: function(ev, element) {
      if (this.options.selectable === false) {
        return;
      }
      /*var item = ev.target;
      var element = DOM.getAttrFirst(item, 'data-id');*/
      this._selectByElement(element);
    },

    /**
     * element did click
     * @param  {Object} ev
     * @return {void}
     */
    _elementDidClick: function(ev) {
      //_log.debug('_elementDidClick');

      if (ev.target === this.element) {
        this.remove('new');
        this.removeSelected();
      }
    },

    /**
     * Setter
     * @param {string} prop
     * @param {string} value
     */
    set: function(prop, value, opts, opts1) {
      //_log.debug('set', prop, value);

      switch (prop) {
        case 'list':
          this._tempCache = [];
          this._tempCount = undefined;
          this.processModules = false;
          return this._setList(value);
        case 'virtualList':
          this._tempCache = [];
          this._tempCount = undefined;
          this.processModules = false;
          return this.setVirtualList(value, opts, opts1);
        case 'range':
          return this.setVirtualList(opts, value);
        case 'info':
          return this._setInfo(value);
        case 'settings':
          return this._defineSettings(value);
        case 'status':
          return this.setStatus(value);
        case 'searchValue':
          return this._setSearchValue(value);
        case 'selected':
          return this.select(value);
        default:
          return this._setInfo(prop);
      }

      this.fireEvent('set', [prop, value]);

      return this;
    },

    /**
     * Getter
     * @param {string} prop
     * @param {string} value
     */
    get: function(prop, value) {
      switch (prop) {
        case 'listIds':
        case 'idList':
          return this._getIdList();
        case 'listIdsSelected':
          return this._getIdsSelected();
        case 'info':
        case 'selectedInfo':
          return this.selectedInfo;
        case 'lastInfoRange':
          return this._getlastInfoRange(value);
        case 'id':
          return this.selectedId;
        case 'infoById':
          return this._getInfoById(value);
        case 'list':
          return this._getInfoList();
        case 'options':
          return this.options[value] || this.options;
        case 'control':
          return this.control[value];
        case 'caller':
          return this._caller;
        case 'type':
          return 'list';
      }

      return this;
    },

    /**
     * [renderInfo description]
     * @param  {Object} info
     * @param  {number} range
     * @return {void|item}
     */
    renderInfo: function(info, range, where) {
      //_log.debug('renderInfo', info, range);

      if (!info) {
        _log.warn('missing info', info);
        return;
      }

      var rangeEl = this.rangeEl[range];

      if (!rangeEl) {
        _log.warn('missing range el', rangeEl);
        return;
      }

      var item = this._createEl(info);

      if (!item) {
        _log.warn('missing item el', item);
        return;
      }

      where = where || 'bottom';

      item.inject(rangeEl, where);

      /*this.ccc = this.ccc ||0;
      if(this.ccc % 2 == 0 && range % 2 == 0)
      	item.destroy('height', '100px');
      	//item.setStyle('height', '100px');
      this.ccc++;*/

      return item;
    },

    /**
     * create info element
     * @param  {Object} info
     * @return {DOMElement}
     */
    _createEl: function(info) {
      _log.debug('_createEl', info);

      var item;

      /*clone obj because of mnml _process render*/
      if (info) {
        info = Object.clone(info);
      }

      var tmpl;
      var tmplType = this.options.template._type;
      var opts = this.options;
      if (this.templateFunction && opts.useTemplateModule === true) {
        //get template from templateFunction
        var result = this.templateFunction(info);

        tmpl = result.key || result.type || result.default;
        tmplType = this.nextTmpl || tmpl._type || tmplType;

        //process info
        info = this.processFunction(info);

        //handle template v2
        if (tmpl[tmplType] && typeof tmpl[tmplType] === 'object') {
          var defaultTmpl = result.default[tmplType].tmpl;
          var rendered = Mustache.render(defaultTmpl, tmpl[tmplType]);
          tmpl[tmplType] = rendered;
        }

        tmpl = tmpl[tmplType] || tmpl[Object.keys(tmpl)[0]];
      } else {
        //process info
        if (typeof this.processFunction === 'function') {
          info = this.processFunction(info);
        }
        tmpl = opts.template[tmplType] || opts.template.simple;
      }

      if (!tmpl) {
        _log.warn('missing tmpl', tmpl);
        return;
      }

      //console.log('tmplType', tmplType, this);

      var content = Mustache.render(tmpl, info);

      var klss = 'item-' + info.type + ' type-' + tmplType;

      item = new Element('div', {
        html: content,
        'data-id': info._id,
        'class': 'ui-item item-list ' + klss
      });

      return item;
    },

    _toggleList: function() {
      var info = this.virtualList[0];

      var result = this.templateFunction(info);

      var obj = result.tmpl.key || result.tmpl.type || result.tmpl.default;

      this.tmplUsed = this.tmplUsed || [];
      this.nextTmpl = undefined;

      for (var name in obj) {
        if (name === '_type' || this.tmplUsed.indexOf(name) !== -1) {
          continue;
        } else {
          this.tmplUsed.push(name);
          this.nextTmpl = name;
          break;
        }
      }

      if (!this.nextTmpl) {
        this.tmplUsed = [];
      }

      //console.log('_toggleList', this.nextTmpl, this.tmplUsed);

      this._setList(this.virtualList);
    },

    /**
     * when scroll
     * @return {void}
     */
    _scroll: function() {
      //_log.debug('_scroll');

      if (this.totalLoaded >= this.virtualSize) {
        this.__scroll();
      } else {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(this.__scroll.bind(this), 50);
      }
    },

    /**
     * __scroll
     * @return {void}
     */
    __scroll: function() {
      this._renderViewport();
      this.updateStatusIndex();

      var self = this;

      setTimeout(function() {
        self._saveSettings();
      }, 500);
    },
    /**
     * update status with current index
     * @return {void}
     */
    updateStatusIndex: function() {

      var itemSize = this.itemSize;

      //_log.debug('updateStatusIndex', itemSize);

      if (itemSize === 0) {
        this.setStatus(' / ' + this.virtualList.length);
        return;
      }

      var contentSize = this.element.getSize().y;
      var scrollTop = this.content.parentNode.scrollTop;
      var docsLen = this.virtualList.length;

      var displayCount = parseInt(contentSize / itemSize, 10);
      var idx = Math.ceil((scrollTop / itemSize) + displayCount);

      idx = idx.limit(0, docsLen);

      this.setStatus(idx + ' / ' + this.virtualList.length);
    },

    /**
     * empty list view
     * @return {void}
     */
    empty: function() {

      this.content.empty();
      this.content.setStyle('height', '0px');
      this.content.setStyle('padding-top', '0px');
      this.element.scrollTop = 0;
      this.setStatus('');
      this._start();

    },

    /**
     * reveal item
     * @param {string} id
     * @return {Object} this
     */
    reveal: function(id) {
      _log.debug('reveal', id);

      //find index
      /*var index = this.list.indexOf(id);

      if (index < 0) {
      	_log.warn('missing index to reveal');
      	return;
      }

      this.scrollData(index);

      this.fx.start(0, index * this.itemSize);
      this.fx.set(0, index * this.itemSize);

      return this;*/
    },

    /**
     * remove
     * @param  {string|Object} id
     * @return {void}
     */
    remove: function(id) {
      _log.debug('remove', id);

      if (typeof id === 'object') {
        id = id._id;
      }

      if (!id || this.virtualSize === undefined) {
        _log.warn('missing id when remove', id);
        return;
      }

      /*delete element from DOM*/
      for (var range in this.rangeEl) {
        if (!this.rangeEl.hasOwnProperty(range)) {
          continue;
        }

        var rangeEl = this.rangeEl[range];

        var el = rangeEl.getElement('[data-id="' + id + '"]');

        if (el) {
          el.destroy();
          break;
        }
      }

      /*delete from virtualList*/
      for (var i = 0; i < this.virtualList.length; i++) {
        var info = this.virtualList[i] || {};

        if (info && info._id === id) {
          this.virtualList[i] = undefined;
        }
      }
    },

    /**
     * process infos
     * @return {void}
     */
    processInfos: function() {
      var self = this;
      var infos;

      _log.debug('processInfos');

      if (!this._tempCache.length) {
        this._tempCache = this.get('list').slice(0);
        this._tempCount = this.options.data._count || this._tempCache.length;
        infos = this.get('list');
      } else {
        infos = this._tempCache.slice(0);
      }

      if (this.control.filter) {
        this.applyFilters(infos, function(respFltr) {
          if (self.control.search) {
            self.applySearch(respFltr, function(respSrc) {
              self._processInfos(respSrc);
            });
          } else {
            self._processInfos(respFltr);
          }
        });
      } else if (this.control.search) {
        this.applySearch(infos, function(respSrc) {
          self._processInfos(respSrc);
        });
      } else {
        this._processInfos(infos);
      }
    },

    /**
     * process infos
     * @param {Array} infos
     * @return {void}
     */
    _processInfos: function(infos) {
      //_log.debug('_processInfos', infos);

      //there is no result from filter/search
      var tmp = this._tempCache;
      if (
        tmp.length === infos.length &&
        tmp[0] === infos[0] &&
        tmp[tmp.length - 1] === infos[infos.length - 1]
      ) {
        this._makeVirtual(infos, 1, this._tempCount || infos.length);
        tmp = [];
        this._tempCount = undefined;
        //set filter/search result
      } else {
        this._makeVirtual(infos, 1, infos.length);
        this.element.scrollTop = 0;
      }
    },

    isElementInViewport: function(el) {

      var rect = el.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      );
    },




    /*METHODS TO REVIEW*/

    /**
     * draw background lines
     * @return {void}
     */
    _drawBackground: function() {
      _log.debug('_drawBackground', this.itemSize);

      return;

      var size = this.itemSize;

      //rgb(243, 243, 243)
      this.content.style.backgroundImage = 'url("data:image/svg+xml;utf8,' +
        "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='" + size + "'>" + //jshint ignore:line
        "<line x1='0' y1='" + size + "' x2='100' y2='" + size + "' style='stroke:rgb(243, 243, 243);stroke-width:1' />" + //jshint ignore:line
        '</svg>")';
    },

    /**
     * init canvas
     */
    _initCanvas: function(el, height) {
      var itemHeight = 56;
      height = 56 * 50;

      //console.log('_initCanvas', height, el);
      this.canvasReady = true;

      var canvas = new Element('canvas', {
        id: 'listcanvas_w',
        styles: {
          zIndex: 0,
          position: 'absolute',
          left: '0',
          top: '0',
          height: height,
          width: 341,
          background: '#ffffff'
        },
        height: height,
        width: '341'
      }).inject(el);


      var ctx = canvas.getContext('2d');
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = '#dedbdb';

      var total = height / itemHeight;
      //console.log('total', total);
      for (var j = 0; j <= total; j++) {
        var y = j * itemHeight + 0.5;
        //console.log('y', y);
        ctx.beginPath();
        ctx.moveTo(16, y);
        ctx.lineTo(340, y);
        ctx.stroke();
      }
    },

    _getElById: function(id) {
      _log.debug('_getElById', id);

      var el;
      for (var range in this.rangeEl) {
        if (!this.rangeEl.hasOwnProperty(range)) {
          continue;
        }

        var rangeEl = this.rangeEl[range];

        var exist = rangeEl.getElement('[data-id="' + id + '"]');
        if (exist) {
          el = exist;
          break;
        }
      }

      return el;
    },

    //temparory fix to get selected info
    _getInfoById: function(id) {
      _log.debug('_getInfoById', id);

      var info;
      for (var i = 0; i < this.virtualList.length; i++) {
        info = this.virtualList[i];
        if (info && info._id === id) {
          break;
        }
        info = undefined;
      }

      return info;
    },

    _getIdList: function() {
      _log.debug('_getIdList');

      var list = [];

      for (var i = 0; i < this.virtualList.length; i++) {
        var id = this.virtualList[i] || {};
        id = id._id;
        if (id && list.indexOf(id) === -1) {
          list.push(id);
        }
      }

      return list;
    },

    _getInfoList: function() {
      _log.debug('_getInfoList');

      var list = [];

      for (var i = 0; i < this.virtualList.length; i++) {
        var info = this.virtualList[i];

        if (info) {
          list.push(info);
        }
      }

      return list;
    },

  });

  module.exports = ListView;

});
