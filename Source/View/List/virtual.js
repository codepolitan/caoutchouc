/* jshint forin:false */
/**
 * Virtual List.V2 View Class
 * @class View.List.V2.Virtual
 * @author Bruno Santos, Jerome Vial
 * @description
 * 		1-receive a list of infos, a range and a count
 * 		2-reset all vars
 * 		3-calculate number of ranges
 * 		4-create ranges Els wrappers in memory
 * 		5-create a array with the size of the count and set undefined for missing infos
 * 		6-update range el with data
 * 		7-render current viewport
 */
define(function(require, exports, module) {

  var _log = __debug('view-core-listV2-virtual').defineLevel();

  var Virtual = new Class({

    /**
     * used to set a complete list, can't set a range after
     * @param {Array} list
     * @return {void}
     */
    _setList: function(list) {
      _log.debug('_setList', list);

      this._makeVirtual(list, 1, list.length);
    },

    /**
     * Set a list and make it virtual
     * @param {Array} list
     * @param {Integer} range
     * @param {Integer} count
     * @return {void}
     */
    setVirtualList: function(list, range, count) {
      _log.debug('setVirtualList', list.length, range, count);

      //temporary fix for incomplete lists
      var self = this;
      setTimeout(function() {
        self.fireEvent('noData');
      }, 40000);

      if (!isNaN(count)) {
        this._makeVirtual(list, range, count);
      } else {
        this._setRange(list, range);
      }
    },

    /**
     * make virtual
     * @param {Array} list
     * @param {Integer} range
     * @param {Integer} count
     * @return {void}
     */
    _makeVirtual: function(list, range, count) {
      _log.debug('_makeVirtual', list.length, range, count);

      range = range || 1;

      this.empty();

      this.virtualSize = count;

      /*num min of ranges is 1*/
      this.ranges = Math.ceil(count / this.options.rangeSize) || 1;

      this._createRangesEls();

      /*populate virtual list*/
      var arr = this.virtualList;
      while (arr.length < count) {
        arr.push(undefined);
      }

      if (list.length === count) {
        this.isFullyLoaded = true;
      }

      this._setRange(list, range);

      if (count == 0) {
        this.set('status', count + ' Results');
      } else {
        this.set('status', ' / ' + count);
      }
    },

    /**
     * reset local variables
     * @return {void}
     */
    _start: function() {
      _log.debug('_start');

      /*total number of loaded infos*/
      this.totalLoaded = 0;

      /*selected id*/
      this.selectedId = undefined;

      /*save selected values in multi-select mode*/
      this.multipleSelect = [];

      /*default item size*/
      this.itemSize = 0;

      /*settings status (if has been set)*/
      this.settingsReady = false;

      /*settings status (if has been set)*/
      this.processModules = this.processModules || false;

      /*empty top reference*/
      this.top = 0;

      /*list of infos ids*/
      this.idsList = [];

      /*list of infos by order*/
      this.virtualList = [];

      /*first range height*/
      this.firstRangeHeight = 0;

      /*list of ranges height*/
      this.rangesHeight = {};

      /*range els*/
      this.rangeEl = {};

      /*number of ranges*/
      this.ranges = [];

      /*count for virtual list*/
      this.virtualSize = undefined;

      /*if the list is fully loaded*/
      this.isFullyLoaded = false;

      /*current rendered ranges*/
      this.renderedRanges = [];

      this.lastSearch = undefined;

      //cache list temporarily
      this._tempCache = this._tempCache || [];
      this._tempCount = this._tempCount || undefined;
    },

    /**
     * set range
     * @param {Array} list
     * @param {number} range
     * @return {void}
     */
    _setRange: function(list, range) {
      _log.debug('set range', range, 'with', list.length, 'infos');

      this._updateVirtualList(list, range);
      //this._updateRangeEl(range);
      this._renderViewport(range);

      if (list.length && this.settingsReady === false) {
        this.onSettings(this);
      }

      if (this.totalLoaded >= this.virtualSize) {
        this.fireEvent('setList');

        //process info modules for filter and search
        var s = (this.search && this.search.getValue());
        var f = this.filter;
        var sf = (s || f);
        if (this.processModules === false && sf) {
          this.processModules = true;
          this.processInfos();
        }
      } else if (!this.options.data.fetchAll) {
        this.fireEvent('setList');
      }
    },

    /**
     * Create ranges Elements and save in memory
     * @return {void}
     */
    _createRangesEls: function() {
      var ranges = this.ranges;

      _log.debug('_createRangesEls', ranges);

      for (var range = 1; range <= ranges; range++) {
        var el = new Element('div', {
          class: 'list-range',
          'data-range': range
        });

        this.rangeEl[range] = el;
        this.rangesHeight[range] = undefined;

        /*if (!this.canvasReady) {
        	this._initCanvas(el);
        }*/
      }

      //_log.debug('rangeEl', this.rangeEl, this.rangesHeight);
    },

    /**
     * Process ranges
     * @return {void}
     * @description
     * 	create this.virtualList with undefined when there is no info,
     */
    _updateVirtualList: function(list, range) {
      //_log.debug('update virtualList range:', range, 'length:', list.length);

      var arr = this.virtualList;

      this.totalLoaded += list.length;

      /*find index to start the insert*/
      var rangeSize = this.options.rangeSize;
      var idx = (range * rangeSize) - rangeSize;
      if (arr[idx]) {
        var count = idx;
        while (arr[count]) {
          idx = count;
          count++;
        }
      }

      /**
       * @ignore
       */
      /*function insertArrayAt(array, index, arrayToInsert) {
      	Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
      }*/

      //insertArrayAt(arr, idx, list);
      Array.prototype.splice.apply(arr, [idx, list.length].concat(list));

      /*update range el if not updated*/
      for (var r = 1; r <= this.ranges; r++) {
        var index = (r * rangeSize) - rangeSize;
        if (!this.rangeEl[r].firstChild && this.virtualList[index]) {
          this._updateRangeEl(r);
        }
      }

      //_log.debug('virtualList', list.length, range, this.virtualList.length);
    },

    /**
     * _updateRangeEl
     * @param  {number} range
     * @param  {Array|undefined} list
     * @return {void}
     */
    _updateRangeEl: function(range, list) {
      list = list || this._getListByRange(range);

      var rangeEl = this.rangeEl[range];

      if (!rangeEl) {
        _log.warn('missing rangeEl');
        return;
      }

      rangeEl.empty();

      _log.debug('update range el', rangeEl, list.length);

      for (var i = 0, leng = list.length; i < leng; i++) {
        var info = list[i];
        this.renderInfo(info, range);
      }

      /*get and set range height when render
      the range el for the first time
      (uncomment to remove getSize)*/
      /*rangeEl.inject(document.body);
      this.rangesHeight[range] = rangeEl.getSize().y;
      rangeEl.dispose();
      this._resizeViewPort();*/
    },

    /**
     * render current viewport
     * @param  {number} range
     * @return {void}
     */
    _renderViewport: function(range) {
      //_log.debug('_renderViewport', range);

      if (this.rendering) {
        return;
      }

      var firstRangeEl = this.content.firstChild;

      /*if list view is empty*/
      if (!firstRangeEl) {
        this._injectRange(range, 'first');
        return;
      }

      /*take default size for item and set settings*/
      if (this.itemSize === 0 && firstRangeEl && firstRangeEl.firstChild) {
        var item = firstRangeEl.firstChild;
        this.itemSize = item.getSize().y;

        this._drawBackground();

        this.updateStatusIndex();
      }

      this.rendering = true;

      var ranges = this._getViewportRanges();

      //_log.debug('render viewport', ranges, this.renderedRanges);

      this._cleanViewport(ranges);

      for (var i = 0; i < ranges.length; i++) {
        var r = ranges[i];

        if (i === 0) {
          this._injectRange(r, 'first');
        } else {
          this._injectRange(r);
        }
      }

      this.rendering = false;

      this.fireEvent('viewportRendered');
    },

    /**
     * get current ranges in the viewport
     * @return {Array} ranges
     */
    _getViewportRanges: function() {
      //_log.debug('_getViewportRanges');

      var ranges = [];
      var range;

      var rangesHeight = this.rangesHeight;

      var viewportHeight = this.element.getSize().y;
      var scrollTop = this.content.parentNode.scrollTop;
      var total = 0;
      for (var key in rangesHeight) {
        total += rangesHeight[key];

        /*range found if scrollTop is smaller than the total height*/
        if (scrollTop <= total) {
          range = parseInt(key, 10);
          ranges.push(range);

          //_log.debug('scrollTop', range, total, viewportHeight, scrollTop);

          /*find transition from one range to another (display 2 ranges)*/
          if (scrollTop + viewportHeight >= total) {
            ranges.push(range + 1);
          }

          this.top = total - rangesHeight[key];

          break;
        }
      }

      /*temporary fix*/
      if (!ranges.length) {
        ranges.push(1);
      }

      //_log.debug('viewport ranges', range, ranges, this.ranges);

      return ranges;
    },

    /**
     * clean viewport
     * @param  {Array} ranges
     * @return {void}
     */
    _cleanViewport: function(ranges) {
      //_log.debug('_cleanViewport', ranges);

      var render = [];

      var renderedRanges = this.renderedRanges;
      var len = renderedRanges.length;
      var renderedRange;
      var rangeEl;

      for (var r = 0; r < len; r++) {
        renderedRange = renderedRanges[r];

        if (ranges.indexOf(renderedRange) !== -1) {
          continue;
        }

        rangeEl = this.rangeEl[renderedRange];

        if (rangeEl) {
          this.renderedRanges.splice(len, 1);

          rangeEl.dispose();
        }
      }

      return render;
    },

    /**
     * inject range
     * @param  {number} range
     * @param  {string} where
     * @return {void}
     */
    _injectRange: function(range, where) {
      //_log.debug('_injectRange', range, where);

      var rangeEl = this.rangeEl[range];

      if (!rangeEl) {
        //_log.warn('missing range el', rangeEl);
        return;
      }

      rangeEl.inject(this.content);

      var rangeHeight = this.rangesHeight[range];

      var height;
      if (where === 'first') {
        var top = this.top;

        rangeEl.style.paddingTop = top + 'px';

        height = rangeEl.getSize().y;

        if (!this.firstRangeHeight) {
          this.firstRangeHeight = height;
        }

        this.rangesHeight[range] = height - top;

        if (rangeHeight !== height) {
          this._resizeViewPort();
        }
      } else {
        rangeEl.style.paddingTop = '0px';

        height = rangeEl.getSize().y;

        this.rangesHeight[range] = height;

        if (rangeHeight !== height) {
          this._resizeViewPort();
        }
      }

      if (this.renderedRanges.indexOf(range) === -1) {
        this.renderedRanges.push(range);
        this.getRange(range);
      }
    },

    /**
     * update viewport EL with the right height
     * @return {void}
     */
    _resizeViewPort: function() {
      var height = 0;
      var rangesHeight = this.rangesHeight;
      var result;
      for (var key in rangesHeight) {
        result = rangesHeight[key];

        if (!result) {
          result = this.firstRangeHeight;
          rangesHeight[key] = result;
        }

        height += result;
      }

      //_log.debug('_resizeViewPort', height);

      this.content.setStyle('height', height);
    },

    /**
     * get list by range
     * @param  {number} range
     * @return {Array}
     */
    _getListByRange: function(range) {
      var rangeSize = this.options.rangeSize;
      var from = (range * rangeSize) - rangeSize;
      var docs = this.virtualList.slice(from, from + rangeSize);

      _log.debug('_getListByRange', range, docs.length);

      if (!docs.length || docs[0] === undefined) {
        this.getRange(range);
      }

      return docs;
    }

  });

  module.exports = Virtual;

});
