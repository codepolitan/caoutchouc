const _log = __debug('view-core-listV2-insert').defineLevel();

export default new Class({

  /**
   * new info
   * @return {void}
   */
  new: function(info) {
    _log.debug('new', info);

    //handle view in arg
    if (info === this) {
      info = {};
    }

    info = info || {};

    var newInfo = {
      _id: 'new',
      type: this.options.data.type,
      nodes: []
    };

    info = Object.merge(newInfo, info);

    if (
      this.options.data &&
      this.options.data._id &&
      info.nodes.indexOf(this.options.data._id) === -1
    ) {
      info.nodes.push(this.options.data._id);
    }

    this.remove('new');
    this._setInfo(info);

    this.select('new');
  },

  /**
   * remove new info if exist
   * @return {void}
   */
  removeNew: function() {
    this.remove('new');
  },

  /**
   * set info
   * @param {Object} info
   */
  _setInfo: function(info) {
    _log.debug('_setInfo', info);

    if (this.virtualSize === undefined) {
      this._setList([]);
    }

    if (typeof info !== 'object' || this.virtualSize === undefined) {
      _log.warn('invalid info type', info);
      return;
    }

    //check if the id is in the list
    var exist = this._getInfoById(info._id);
    if (exist) {
      this.updateInfo(info);
      this.select(this.selectedId);
      return;
    }

    // return if there is a search or filter result in the list
    // maybe the list should be updated
    // if the info is part of the search/filter result
    if (this._tempCache.length !== this.virtualList.length) {
      return;
    }

    this.remove('new');
    this.virtualSize++;
    this.virtualList.unshift(info);
    this._tempCache.unshift(info);
    this.renderInfo(info, 1, 'top');
    this.element.scrollTop = 0;
    this._scroll();
  },

  /**
   * update info
   * @param  {Object} info
   * @return {void}
   */
  updateInfo: function(info) {
    _log.debug('updateInfo', info);

    //update element
    var oldEl = this._getElById(info._id);
    var newEl = this.render(info, this);

    //update the old el if has been already rendered
    if (oldEl) {
      newEl.replaces(oldEl);
    }

    //update virtualList
    for (var i = 0; i < this.virtualList.length; i++) {
      var oldInfo = this.virtualList[i];

      if (oldInfo && oldInfo._id === info._id) {
        this.virtualList[i] = info;
        break;
      }
    }

    //update _tempCache
    if (this._tempCache.length) {
      for (var j = 0; j < this._tempCache.length; j++) {
        var oldInfo = this._tempCache[j];

        if (oldInfo && oldInfo._id === info._id) {
          this._tempCache[j] = info;
          break;
        }
      }
    }
  },

});
