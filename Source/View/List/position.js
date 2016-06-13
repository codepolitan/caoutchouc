/**
 * Position List.V2 View Class
 *
 * @class View.List.V2.Position
 * @author Jerome Vial, Bruno Santos
 */
define(function(require, exports, module) {

  var _log = __debug('view-core-listV2-position').defineLevel();

  var Position = new Class({

    /**
     * initialize
     * @return {Object} this
     */
    _initPosition: function() {
      _log.debug('_initPosition', this.control);

      var positionCtr = this.control.position;
      var upCtr = this.control.moveup;
      var downCtr = this.control.movedown;

      if (positionCtr && upCtr && downCtr) {
        upCtr.setState('disabled');
        downCtr.setState('disabled');

        this.positionEnable = false;
      } else {
        _log.debug('missing control for position');
      }

      return this;
    },

    /**
     * toggle position
     * @return {void}
     */
    togglePosition: function() {
      _log.debug('togglePosition', this.positionEnable);

      if (this.positionEnable === true) {
        this.disablePosition();
      } else if (this.positionEnable === false) {
        this._enablePosition();
      }
    },

    /**
     * enable position
     * @return {void}
     */
    _enablePosition: function() {
      _log.debug('_enablePosition');

      this.control.position.setState('active');
      this.control.moveup.setState('enable');
      this.control.movedown.setState('enable');

      this.checkInfosPositions();

      this.positionEnable = true;
    },

    /**
     * disable position
     * @return {void}
     */
    disablePosition: function() {
      _log.debug('disablePosition');

      this.control.position.setState('enable');
      this.control.moveup.setState('disabled');
      this.control.movedown.setState('disabled');

      this.positionEnable = false;

      this.fireEvent('update', this.virtualList);
    },

    /**
     * move up
     * @return {void}
     */
    moveUp: function() {
      var info = this.get('selectedInfo');

      var pos = parseInt(info.position);

      if (pos === 1) {
        _log.warn('can not move the first info up');
        return;
      }

      _log.debug('moveUp', pos);

      var oldIndex = pos - 1;
      var newIndex = oldIndex - 1;

      this.virtualList[oldIndex].position = this._pad(newIndex + 1);
      this.virtualList[newIndex].position = this._pad(oldIndex + 1);

      _log.debug(this.virtualList[oldIndex], this.virtualList[newIndex]);

      this.virtualList = this._moveArrayItem(oldIndex, newIndex, this.virtualList);

      var el = this.content.getElement('[data-id="' + info._id + '"]');
      this._moveEl(el, 'up');
    },

    /**
     * move down
     * @return {void}
     */
    moveDown: function() {
      var info = this.get('selectedInfo');

      var pos = parseInt(info.position);

      if (pos === this.virtualList.length) {
        _log.warn('can not move the last info down');
        return;
      }

      _log.debug('moveDown', pos);

      var oldIndex = pos - 1;
      var newIndex = oldIndex + 1;

      this.virtualList[oldIndex].position = this._pad(newIndex + 1);
      this.virtualList[newIndex].position = this._pad(oldIndex + 1);

      _log.debug(this.virtualList[oldIndex], this.virtualList[newIndex]);

      this.virtualList = this._moveArrayItem(oldIndex, newIndex, this.virtualList);

      var el = this.content.getElement('[data-id="' + info._id + '"]');
      this._moveEl(el, 'down');
    },

    /**
     * move array item
     * @param  {number} oldIndex
     * @param  {number} newIndex
     * @return {number}
     * @see http://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
     */
    _moveArrayItem: function(oldIndex, newIndex, arr) {
      while (oldIndex < 0) {
        oldIndex += arr.length;
      }
      while (newIndex < 0) {
        newIndex += arr.length;
      }
      if (newIndex >= arr.length) {
        var k = newIndex - arr.length;
        while ((k--) + 1) {
          arr.push(undefined);
        }
      }
      arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
      return arr;
    },

    /**
     * move element
     * @return {void}
     * @see http://stackoverflow.com/questions/7587646/how-do-i-move-an-element-up-down-one-position-in-tree
     */
    _moveEl: function(el, where) {
      _log.debug('moveEl', el, where);

      var parent = el.parentNode;
      var oldChild;

      if (where === 'up') {
        var prev = el.previousSibling;
        oldChild = parent.removeChild(el);
        parent.insertBefore(oldChild, prev);
      } else {
        var next = el.nextSibling;
        oldChild = parent.removeChild(el);
        parent.insertBefore(oldChild, next.nextSibling);
      }
    },

    /**
     * check consistency of infos position
     * @return {void}
     */
    checkInfosPositions: function() {

      var list = this.virtualList;

      _log.debug('checkInfosPositions', list);

      for (var i = 0; i < list.length; i++) {
        var info = list[i];

        info.position = this._pad(i + 1);

        _log.debug('position', info.name, info.position);
      }
    },

    /**
     * pad
     * @description convert 1 to 00001
     * @param  {number} num
     * @return {string}
     */
    _pad: function(num) {
      var s = num + '';
      while (s.length < 5) {
        s = '0' + s;
      }
      return s;
    },

  });

  module.exports = Position;

});
