import Component from './component';

/**
 * @description
 * based on Valerio's Mootools scrollbar plugin.
 * found in upload folder of mootools website
 * @author Bruno Santos, Jerome Vial
 */
export default new Class({

  Extends: Component,

  options: {
    name: 'scrollbar',
    klass: 'ui-scrollbar',
    type: 'track',

    maxThumbSize: 36,
    wheel: 16,
    autoHide: 1000,
    size: 8
  },

  /**
   * [initialize description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  initialize: function(options) {

    this.parent(options);

    this.bound = {
      start: this.start.bind(this),
      end: this.end.bind(this),
      drag: this.drag.bind(this),
      wheel: this.wheel.bind(this),
      page: this.page.bind(this)
    };

    //_log.debug('initalize',this.options.container,'before');

    this.container = this.options.container;
    this.position = {};
    this.mouse = {};
    this.update();
    this.attachEvent();
  },

  /**
   * [_initElement description]
   * @return {[type]} [description]
   */
  _initElement: function() {
    if (!this.options.container) {
      return;
    }

    this.options.width = this.options.size;

    this.parent();

    this.element.inject(this.options.container, 'before');

    this.thumb = new UI.Component({
      name: 'thumb',
      klass: 'ui-thumb'
    }).inject(this.element);
  },

  /**
   * [update description]
   * @return {[type]} [description]
   */
  update: function() {
    //_log.debug(this.options.container.getSize().y, this.options.container.scrollHeight);

    this.containerSize = this.options.container.getSize().y;

    this.setSize(this.options.width.toInt(), this.containerSize);
    this.containerScrollSize = this.options.container.scrollHeight;
    //this.containerScrollSize = this.options.containerSize;_log.debug(this.containerScrollSize);
    this.trackSize = this.element.offsetHeight.toInt();
    //this.trackSize = this.element.offsetHeight.toInt();_log.debug(this.trackSize);

    if (this.containerScrollSize === 0) {
      return;
    }

    if (this.visible()) {
      this.thumb.element.setStyle('visibility', 'visible');
    } else {
      this.thumb.element.setStyle('visibility', 'hidden');
    }

    this.containerRatio = this.containerSize / this.containerScrollSize;
    this.thumbSize = this.trackSize * this.containerRatio;

    var offset;

    if (this.thumbSize < this.options.maxThumbSize.toInt()) {
      offset = this.trackSize - (this.options.maxThumbSize.toInt() - this.thumbSize);
      this.thumbSize = this.options.maxThumbSize.toInt();
    } else
    if (this.thumbSize > this.trackSize) {
      this.thumbSize = this.options.maxThumbSize.toInt();
    } else {
      offset = this.trackSize;
    }

    this.scrollRatio = this.containerScrollSize / offset;

    this.thumb.setSize(this.options.width, this.thumbSize);

    this.updateThumbFromContentScroll();
    this.updateContentFromThumbPosition();

    var el = this.element;

    if (this.options.autoHide) {
      this.timer = (function() {
        el.fade(0);
      }).delay(this.options.autoHide);
    }
  },

  /**
   * [updateContentFromThumbPosition description]
   * @return {[type]} [description]
   */
  updateContentFromThumbPosition: function() {
    this.options.container.scrollTop = this.position.now * this.scrollRatio;
  },

  /**
   * [updateThumbFromContentScroll description]
   * @return {[type]} [description]
   */
  updateThumbFromContentScroll: function() {
    //_log.debug('this.options.container', this.options.container);
    clearTimeout(this.timer);
    this.element.setStyle('opacity', '1');
    //this.element.set('opacity','1');

    this.position.now = (this.options.container.scrollTop / this.scrollRatio).limit(0, (this.trackSize));
    this.thumb.setStyle('top', this.position.now + 'px');

    var el = this.element;

    if (this.options.autoHide) {
      this.timer = (function() {
        el.fade(0);
      }).delay(this.options.autoHide);
    }
  },

  /**
   * [attachEvent description]
   * @return {[type]} [description]
   */
  attachEvent: function() {
    this.thumb.element.addEvent('mousedown', this.bound.start);

    if (this.options.wheel) {
      this.options.container.addEvent('mousewheel', this.bound.wheel);
    }
    this.element.addEvent('mouseup', this.bound.page);
  },

  /**
   * [wheel description]
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  wheel: function(event) {
    var opts = this.options;

    clearTimeout(this.timer);
    this.element.setStyle('visibility', 'visible');

    opts.container.scrollTop -= event.wheel * opts.wheel;
    this.updateThumbFromContentScroll();

    this.fireEvent('scrolling', event);

    event.stop();
  },

  /**
   * [page description]
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  page: function(event) {
    var opts = this.options,
      container = opts.container;

    if (event.page.y > this.thumb.element.getPosition().y) {
      container.scrollTop += container.offsetHeight;
    } else {
      container.scrollTop -= container.offsetHeight;
    }


    this.updateThumbFromContentScroll();
    event.stop();
  },

  /**
   * [start description]
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  start: function(event) {
    this.mouse.start = event.page.y;
    this.position.start = this.thumb.element.getStyle('top').toInt();

    document.addEvent('mousemove', this.bound.drag);
    document.addEvent('mouseup', this.bound.end);
    this.thumb.element.addEvent('mouseup', this.bound.end);

    event.stop();
  },

  /**
   * [end description]
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  end: function(event) {
    document.removeEvent('mousemove', this.bound.drag);
    document.removeEvent('mouseup', this.bound.end);
    this.thumb.element.removeEvent('mouseup', this.bound.end);
    this.fireEvent('dragCompplete');
    event.stop();
  },

  /**
   * [drag description]
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  drag: function(event) {
    this.mouse.now = event.page.y;

    this.position.now = (this.position.start + (this.mouse.now - this.mouse.start)).limit(0, (this.trackSize - this.thumbSize));
    this.updateContentFromThumbPosition();
    this.updateThumbFromContentScroll();

    if (Math.ceil(this.position.now + this.thumbSize) >= this.trackSize) {
      this.options.container.scrollTop = this.containerScrollSize;
    }

    this.fireEvent('drag', event);

    event.stop();
  },

  /**
   * [visible description]
   * @return {[type]} [description]
   */
  visible: function() {
    if (this.containerSize < this.containerScrollSize) {
      return true;
    } else {
      return false;
    }
  }

});
