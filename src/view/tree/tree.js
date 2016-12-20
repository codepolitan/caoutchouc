/**
 * Tree View
 *
 * # Info Structure:
 *
 *      {
 *          id: unique info id
 *          name: name
 *          count: number of documents inside this node
 *          sort: sortKey
 *          path: node path
 *      }
 *
 *
 * # The options accept:
 *
 *      selectFirst: select the first node if there is no other node to select
 *      selectedId: the selected node, will be the node with this id
 *      selectedCode: the selected node, will be the node with this code - override the selectedId
 *      selectedIndex: the selected node, will be the node with this index in the list - override the selectedCode
 *      toggle: if set to true the view will toggle when initialize
 *      nodes: a list of documents that will be render when the view intanciate
 *      displayCount: true or false - if the tree display the count element
 *
 */
import options from './options';
import { array } from 'minimal-utils';
import View from '../view';
import TreeCollapse from './utils/collapse';
import Tree from './utils/tree';
import Collapse from './collapse';
import Count from './count';

const _log = __debug('view-core-tree').defineLevel();

export default new Class({

  Extends: View,

  Implements: [Collapse, Count],

  options: options,

  /**
   * On resize complete
   * @param  {string} modifier
   * @param  {integer} size
   * @return {void}
   * @private
   */
  _onViewResizeComplete: function(modifier, size) {
    //_log.debug('_onViewResizeComplete');
    this.zoomFx = this.zoomFx || new Fx.Tween(this.element, {
      duration: 250,
      transition: 'quart:out',
      //link: 'cancel',
      property: 'zoom'
    });

    if (size < 200) {
      //_log.debug('go small', this.element);
      this.element.setStyle('zoom', '.8');
      //this.zoomFx.start(1, 0.7);
      this.isSmall = true;
    } else {
      //_log.debug('go big', this.element);
      this.element.setStyle('zoom', '1');
      //this.zoomFx.start(0.7, 1);
      this.isSmall = false;
    }
  },

  /**
   * Initialize View
   * @return {void}
   * @private
   */
  _initView: function() {
    var opts = this.options;

    this.parent();

    this.multipleSelect = [];

    this._initTree();
    this._initTitle();

    if (opts.autoScroll) {
      this._initAutoScroll();
    }

    //For the settings
    if (opts.nodeId) {
      this.nodeId = opts.nodeId;
    }
  },

  /**
   * Initialize list if exist
   * @return {void}
   * @private
   */
  _initList: function() {
    _log.debug('_initList', this.options);

    var opts = this.options;

    if (opts.nodes) {
      this.set('list', opts.nodes);
    }
  },

  /**
   * Initialize tree
   * @return {void}
   * @private
   */
  _initTree: function() {
    var params = {
      /** @ignore */
      checkDrop: function(element) {
        return !element.hasClass('nodrop');
      }
    };

    this.tree = new Tree(this.content, params);
  },

  /**
   * Initialize tree title
   * @return {void}
   * @private
   */
  _initTitle: function() {
    //_log.debug('_initTitle');

    if (!this.control || !this.control.title) {
      return;
    }

    var titleControl = this.control.title;

    var title = this.options.data.kind || this.options.data.type;

    if (titleControl) {
      titleControl.set('text', title);
    }
  },

  /**
   * Setter
   * @param {string} prop
   * @param {string|Object} value
   * @return {void}
   */
  set: function(prop, value) {
    switch (prop) {
      case 'count':
        this.refreshCount(value);
        break;
      case 'info':
        this._setInfo(value);
        break;
      case 'list':
        this._setList(value);
        break;
      case 'settings':
        this._setSettings(value);
        break;
      case 'selectCode':
        this._selectByCode(value);
        break;
      case 'selectedByName':
        this._selectByName(value);
    }

    this.fireEvent('set', [prop, value]);
  },

  /**
   * Getter
   * @param {string} prop
   * @param {string} value
   * @return {void}
   */
  get: function(prop, value) {
    switch (prop) {
      case 'multiSelected':
        return this.multipleSelect;
      case 'id':
        return this.getSelectedId();
      case 'info':
        return this.getSelectedDoc();
      case 'count':
        return this.getNodeCount(value);
      case 'list':
        return this.list;
      case 'options':
        return this.options;
      case 'type':
        return 'tree';
    }
  },

  /**
   * Set settings
   * @param {string} prop settings property
   * @private
   */
  _setSettings: function(prop) {
    if (!this.settings) {
      return;
    }

    var props = ['select'];

    if (props.indexOf(prop) === -1) {
      return;
    }

    if (props === 'select') {
      this.settings.select(this.getSelectedId());
    }
  },

  /**
   * Set nodes
   * @param {Object} node
   * @return {void}
   * @private
   */
  _setInfo: function(node) {
    _log.debug('_setInfo', node);

    var info = array.findObjByKey(this.list, '_id', node._id);

    if (info && !node._count) {
      node._count = info._count;
    }

    if (info) {
      info = node;
      array.updateObjByKey(this.list, '_id', node._id, node);
    } else {
      this.list.push(node);
    }

    this.refresh();
  },

  /**
   * remove
   * @param {Object} node
   * @return {void}
   * @private
   */
  remove: function(node) {
    _log.debug('remove', node);

    if (typeof node === 'string') {
      array.deleteObjByKey(this.list, '_id', node);
    } else {
      array.deleteObjByKey(this.list, '_id', node._id);
    }

    this.refresh();
  },

  /**
   * Set nodes
   * @param {Array} list Nodes objects
   * @return {void}
   * @private
   */
  _setList: function(list) {
    _log.debug('_setList', list.length);

    this.fireEvent('settingList');

    this.list = list;

    this.fireEvent('listSet', list);
  },

  /**
   * Get tree list
   * @return {Array}
   * @private
   */
  _getList: function() {
    return this.list;
  },

  /**
   * init selected by code
   * @return {void}
   * @private
   */
  _initSelectedCode: function() {
    var opts = this.options;

    if (!opts.selectedCode) {
      return;
    }

    this._selectByCode(opts.selectedCode);
  },

  /**
   * Initialize select
   * @return {void}
   * @private
   */
  _initSelected: function() {
    //_log.debug('_initSelected', this.nodeId);
    if (!this.options.selectFirst) {
      return;
    }

    var info = array.findObjByKey(this.list, '_id', this.nodeId);

    if (!info) {
      var nodes = this.list;
      if (nodes && nodes[0]) {
        this.select(nodes[0]._id);
      }
    }
  },

  /**
   * Select node by code
   * @param {string} code
   * @return {void}
   * @private
   */
  _selectByCode: function(code) {
    var info = array.findObjByKey(this.list, 'code', code);

    if (!info) {
      return;
    }

    var id = info._id;

    this.select(id);
  },

  /**
   * Select node by name
   * @param {string} name
   * @return {void}
   * @private
   */
  _selectByName: function(name) {
    var info = array.findObjByKey(this.list, 'name', name);

    if (!info) {
      return;
    }

    var id = info._id;

    this.select(id);
  },

  /**
   * Get info by index and select it
   * @return {void}
   * @private
   */
  _initSelectedIndex: function() {
    var opts = this.options;

    if (opts.selectedIndex === null) {
      return;
    }

    var nodes = this.list;

    var info = nodes[opts.selectedIndex];

    if (!info) {
      return;
    }

    var id = info._id;

    this.select(id);
  },

  /**
   * Get scrollTop value
   * and fire scroll event
   * @return {void}
   * @private
   */
  _elementDidScroll: function() {
    //_log.debug('_elementDidScroll');
    var self = this;

    clearTimeout(this.scrollTimeout);

    this.scrollTimeout = setTimeout(function() {
      var val = self.element.scrollTop;
      self.fireEvent('scroll', val);
      self.fireEvent('settings', ['scrollTop', val]);
    }, 50);
  },

  /**
   * Initialize scroll top
   * @return {void}
   * @private
   */
  _initScrollTop: function() {
    var opts = this.options;

    if (opts.scrollTop) {
      this.element.scrollTop = opts.scrollTop;
    }
  },

  /**
   * Initialize Tree Object
   * @param {Array} list
   * @return {Array} tree
   * @private
   */
  _getTreeObject: function(list) {
    //_log.debug('_getTreeObject', list);
    var tree = [];
    var mem = {};
    var node;
    var kind = this.options.kind;

    for (var i = 0; i < list.length; i++) {
      node = list[i];
      var n = {
        _id: node._id,
        name: node.name,
        count: node._count,
        sort: node.sort,
        nodes: [],
        select: node._select,
      };
      if (!kind) {
        mem[node._id] = n;
      } else if (kind === node.kind) {
        mem[node._id] = n;
      }
    }

    list = array.sort(list, 'sort');

    for (var j = 0; j < list.length; j++) {
      node = list[j];
      if (!mem[node._id]) {
        continue;
      }

      var obj = mem[node._id];

      node.path = node.path || [];

      var parentId = node.path[node.path.length - 1];

      if (!parentId) {
        tree.push(obj);
      } else {
        //The solution as delete the node id that don't exist from the node
        //IN TEST
        if (!mem[parentId]) {
          node.path.splice(node.path.length - 1, 1);
          j--;
        } else {
          mem[parentId].nodes.push(obj);
        }

      }
    }

    return tree;
  },

  /**
   * Render list
   * @param  {Array} list
   * @return {void}
   */
  render: function(list) {
    list = this.list;

    _log.debug('render', list.length);

    var tree = this._getTreeObject(list);

    this.clear();

    this._render(tree, this.content);

    this.select(this.nodeId, undefined, true);

    // this is horrible and need to disapear!
    var ul = this.content.getElement('ul').addClass('tree').addClass('collapse');
    this.collapse = new TreeCollapse(ul);

    //repeated code
    if (this.orderMode) {
      this.element.firstChild.addClass('mode-edit');
      if (this.options.shake === true) {
        this.element.firstChild.addClass('shake');
      }
    }

    this._setCollapse();

    /**
     * @event rendered
     * Fired when the view render
     * @param {Object} view instance
     */
    this.fireEvent('rendered');
  },

  /**
   * Render data
   * @param {data} data
   * @param {container} container
   * @private
   */
  _render: function(data, container) {
    //_log.debug('_render', data);

    if (!data) {
      return;
    }

    var ul = new Element('ul').inject(container);

    for (var i = 0; i < data.length; i++) {
      var node = data[i];

      var li = new Element('li', {
        'data-id': node._id
      }).inject(ul);

      var line = new Element('div', {
        class: 'line'
      }).inject(li);

      if (this.options.checkbox) {

        /*should use a UI.Checkbox instead*/
        var checkbox = new Element('div', {
          class: 'ui-checkbox',
          styles: {
            'flex': 'none 1 0%',
            'width': '32px',
            'padding': '3px 6px',
            'margin': '0 0 0 0px',
            'opacity': '.8',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-image': 'url(/vendor/caoutchouc/icon/mdi/svg/checkbox.svg)'
          },
        }).inject(line);

        checkbox.addEvent('click', this._handleCheckboxClick.bind(this, node._id, checkbox));

        if (node.select) {
          this._handleCheckboxClick(node._id, checkbox);
        }
      }

      new Element('a', {
        class: 'label',
        html: node.name
      }).inject(line);

      var count = node.count || '';
      if (!this.options.displayCount) {
        count = '';
      }

      new Element('span', {
        class: 'count',
        html: count
      }).inject(line);

      new Element('a', {
        'class': 'expand',
        href: '#'
      }).inject(line, 'top');

      this._render(node.nodes, li);
    }
  },

  /**
   * select checkbox
   * @param  {string} id Info id
   * @param  {DOMElement} el
   * @return {void}
   */
  _handleCheckboxClick: function(id, el) {
    _log.debug('_handleCheckboxClick', id, el);

    var unselect = false;
    if (el.hasClass('is-checked')) {
      unselect = true;
    }

    //handle children
    var l = this.list;
    for (var i = 0; i < l.length; i++) {
      var info = l[i];

      if (info.path.indexOf(id) !== -1) {
        var relatedEl = this.content.getElement('[data-id="' + info._id + '"]');

        if (!relatedEl) {
          continue;
        }

        relatedEl = relatedEl.getElement('.ui-checkbox');

        if (unselect) {
          this._unselectCheckbox(info._id, relatedEl);
        } else {
          this._selectCheckbox(info._id, relatedEl);
        }
      }
    }

    if (unselect) {
      this._unselectCheckbox(id, el);
    } else {
      this._selectCheckbox(id, el);
    }
  },

  /**
   * select Checkbox
   * @param  {string} id
   * @param  {DOMElement} el
   * @param  {boolean} quiet
   * @return {void}
   */
  _selectCheckbox: function(id, el, quiet) {
    el.addClass('is-checked');
    /*should use the is-checked class instead of change the background like this*/
    el.setStyle('background-image', 'url(/vendor/caoutchouc/icon/mdi/svg/checked.svg)');

    var idx = this.multipleSelect.indexOf(id);
    if (idx === -1) {
      this.multipleSelect.push(id);
    }

    if (!quiet) {
      this.fireEvent('checkboxSelect', id, el);
    }
  },

  /**
   * unselect Checkbox
   * @param  {string} id
   * @param  {DOMElement} el
   * @param  {boolean} quiet
   * @return {void}
   */
  _unselectCheckbox: function(id, el, quiet) {
    el.removeClass('is-checked');
    /*should use the is-checked class instead of change the background like this*/
    el.setStyle('background-image', 'url(/vendor/caoutchouc/icon/mdi/svg/checkbox.svg)');

    var idx = this.multipleSelect.indexOf(id);
    if (idx !== -1) {
      this.multipleSelect.splice(idx, 1);
    }

    if (!quiet) {
      this.fireEvent('checkboxUnselect', id, el);
    }
  },

  /**
   * Select By element
   * @param  {element} element DOM element
   * @return {void}
   * @private
   */
  _selectByElement: function(element) {
    var id = element.get('data-id');
    this.select(id);
  },

  /**
   * Select Id
   * @param  {string} id Id to be selected
   * @param  {boolean} quiet
   * @param  {boolean} settings
   */
  select: function(id, quiet, settings) {
    _log.debug('select', id, quiet);

    /*if the view is a checkbox do not
    use the default select method*/
    if (this.options.checkbox) {
      this.removeSelected();
      return;
    }

    id = id || this.get('id');

    var el = this.content.getElement('[data-id="' + id + '"]');

    if (!el) {
      this.unselect();
      return;
    }

    this.removeSelected();

    this.tree.current = el;
    el.addClass('selected');

    //this.scroll.toElement(el);

    /*nodeId should be set before triggering any event*/
    this.nodeId = id;

    if (!quiet && id !== 'new') {
      var info = array.findObjByKey(this.list, '_id', id);
      /**
       * @event select
       * Fired when the view select a document
       * @param {Object} view instance
       * @param {Array} document id and document type
       */
      this.fireEvent('select', [info, this]);
    }

    if (!settings) {
      this.fireEvent('settings', ['nodeId', id]);
    }
  },

  /**
   * unselect
   * @return {void}
   */
  unselect: function() {
    this.nodeId = null;
    this.fireEvent('settings', ['nodeId', null]);
    this.fireEvent('unselect');

    this.removeSelected();
  },

  /**
   * Remove selected class from the
   * selected element
   * @return {void}
   */
  removeSelected: function() {
    //_log.debug('removeSelected');
    var el = this.tree.current;

    if (el) {
      el.removeClass('selected');
      this.nodeId = null;
    }
  },

  /**
   * Update sort and path for all nodes
   * @return {void}
   * @private
   */
  _updateSortAndPath: function() {
    //_log.debug('_updateSortAndPath', treeOjb);
    var treeOjb = this._serialize();
    this._updateData(treeOjb);
    this.refresh();
  },

  /**
   * on disable drag
   * @return {void}
   * @private
   */
  _onDisableDrag: function() {
    //_log.debug('_onDisableDrag', this.list);
    this.fireEvent('save', [this.list]);
  },

  /**
   * Update Node Sortkey
   * @param {Object} object
   * @param {boolean} level Inter var
   * @private
   */
  _updateData: function(object, level) {
    //_log.debug('_updateData', treeObj);
    var count = 1;

    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var node = array.findObjByKey(this.list, '_id', key);

        if (!level) {
          node.sort = this._fillSortkey(count);
          node.path = [];
          count++;
          var tmp = array.findObjByKey(this.list, '_id', node._id);
          tmp = node;
        }

        if (typeof object[key] !== 'object') {
          continue;
        }

        var list = [];
        for (var cid in object[key]) {
          if (object[key].hasOwnProperty(cid)) {
            list.push(cid);
          }
        }

        for (var i = 0, len = list.length; i < len; i++) {
          var id = list[i];
          var doc = array.findObjByKey(this.list, '_id', id);

          doc.sort = node.sort + this._fillSortkey(i + 1);
          doc.path = Array.clone(node.path);

          if (node._id) {
            doc.path.push(node._id);
          }

          var tmp1 = array.findObjByKey(this.list, '_id', id);
          tmp1 = doc;
        }

        this._updateData(object[key], true);
      }
    }
  },

  /**
   * Get selected document
   * @return {Object} selected document or null
   */
  getSelectedDoc: function() {
    if (!this.nodeId) {
      return null;
    }

    var info = array.findObjByKey(this.list, '_id', this.nodeId);

    if (info) {
      return info;
    }

    return null;
  },

  /**
   * Get selected id
   * @return {string} selected id or null
   */
  getSelectedId: function() {
    return this.nodeId || null;
  },

  /**
   * Get count from selected node
   * @return {void}
   */
  getNodeCount: function(id) {
    //_log.debug('getNodeCount');
    id = id || this.nodeId;

    if (!id) {
      return null;
    }

    var info = array.findObjByKey(this.list, '_id', id);

    if (!info) {
      return null;
    }

    return info._count;
  },

  /**
   * Clear tree
   * @return {void}
   */
  clear: function() {
    this.content.empty();
  },

  /**
   * Get Node Sort key And Path key
   * @return {Object}
   * @private
   */
  _getMainkeys: function() {
    var sortkey = 0;
    var path = [];
    var list = this.list;

    for (var i = 0; i < list.length; i++) {
      var node = list[i];

      if (node.sort.length === 5) {
        sortkey = node.sort.substr(4);
        path = node.path;
      }
    }

    sortkey++;
    sortkey = this._fillSortkey(sortkey);

    return {
      sort: sortkey,
      path: path
    };
  },

  /**
   * Get Node Parent Sort key And Path key
   * @param {Object} parent
   * @return {Object}
   * @private
   */
  _getParentKeys: function(parent) {
    var sortkey = 0;
    var path = [];
    var list = this.list;

    for (var i = 0; i < list.length; i++) {
      var node = list[i];

      if (node.sort === parent.sort && node.sort.length === parent.sort.length + 5) {
        sortkey++;
        path = Array.clone(parent.path);
      }
    }

    sortkey = this._fillSortkey(sortkey);
    sortkey = parent.sort + sortkey;

    parent.path = parent.path || [];
    path = Array.clone(parent.path);
    path.push(parent._id);

    return {
      sort: sortkey,
      path: path
    };
  },

  /**
   * New Node
   * @param {Object} parentId
   * @return {void}
   * @private
   */
  _addNode: function(parentId) {
    if (!parentId || typeof parentId !== 'string') {
      parentId = this.nodeId;
    }

    _log.debug('_addNode', parentId);

    var opts = this.options;
    var len = this.list.length;

    //if (!parentId && len > 0) return;

    var sortkey = this._fillSortkey(len + 1);

    var node = {
      type: opts.data.type,
      kind: opts.data.kind || undefined,
      node: true,
      sort: sortkey,
      name: 'New node',
      path: [],
      _count: 0
    };

    if (parentId) {
      if (opts.collapse && opts.collapse[parentId]) {
        delete opts.collapse[parentId];
      }

      var parent = array.findObjByKey(this.list, '_id', parentId);
      var keys;

      if (parent) {
        keys = this._getParentKeys(parent);
      } else {
        keys = this._getMainkeys();
      }

      node.path = keys.path;
      node.sort = keys.sort;
    }

    this.list.push(node);

    var info = this.list[len];
    info._id = 'new';

    this.refresh();
    this.setNameById('new');
  },

  /**
   * Set name by id
   * @return {void}
   */
  setNameById: function(id) {
    this.select(id);
    this._setName();
  },

  /**
   * Set Name
   * @param {element} el DOM element
   * @private
   */
  _setName: function(el) {
    _log.debug('updateName', el);
    el = el || this.tree.current;

    if (!el || this.orderMode) {
      return;
    }

    var control = this.control;

    if (control) {
      if (control.add) {
        control.add.setState('disabled');
      }
      if (control.edit) {
        control.edit.setState('disabled');
      }
      if (control.trash) {
        control.trash.setState('disabled');
      }
      if (control.properties) {
        control.properties.setState('disabled');
      }
    }

    var self = this;
    var id = el.get('data-id');
    var info = array.findObjByKey(this.list, '_id', id);
    var name = el.getElement('.label');
    var text = name.get('html');
    var key = null;

    this._selectElementContent(name);

    name.addEvents({
      /** @function */
      blur: function() {
        name.set('contenteditable', false);

        if (control) {
          if (control.add) {
            control.add.setState('enable');
          }
          if (control.edit) {
            control.edit.setState('enable');
          }
          if (control.trash) {
            control.trash.setState('enable');
          }
          if (control.properties) {
            control.properties.setState('enable');
          }
        }

        var value = name.get('html');

        if (id === 'new' && key === 'esc') {
          array.deleteObjByKey(self.list, '_id', id);
          self.refresh();
        } else if (text !== value || value === 'New node') {
          info.name = value;
          if (info._id === 'new') {
            info._id = undefined;
            array.deleteObjByKey(self.list, '_id', info._id);
          }
          self.fireEvent('save', info);
        }
      },
      /** @function */
      keydown: function(ev) {
        key = ev.key;

        if (ev.key === 'enter') {
          ev.stop();
          name.set('contenteditable', false);
        }

        //cancel
        if (ev.key === 'esc') {
          ev.stop();
          name.set('contenteditable', false);
          name.set('html', text);
        }
      }
    });
  },

  /**
   * Select Element Content
   * @param {element} el
   * @private
   */
  _selectElementContent: function(el) {
    el.set('contenteditable', true);
    el.focus();
    el.removeEvents('blur', 'keydown');

    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  },

  /**
   * Refresh Node View
   */
  refresh: function() {
    //_log.debug('refresh', this.list);
    this._setList(this.list);
  },

  /**
   * Toggle Order Mode
   * @private
   */
  _toggleOrganize: function() {
    //_log.debug('toggleOrderMode');

    if (this.orderMode) {
      this._disableOrganize();
    } else {
      this._enableOrganize();
    }
  },

  /**
   * Enable Organize
   * @return {void}
   * @private
   */
  _enableOrganize: function() {
    var control = this.control;

    this.element.firstChild.addClass('mode-edit');
    if (this.options.shake === true) {
      this.element.firstChild.addClass('shake');
    }

    this.tree.enableDrag();

    this.orderMode = true;

    if (control) {
      //control.organize.element.addClass('state-active');
      control.organize.setState('active');
      control.addnode.setState('disabled');
      control.trash.setState('disabled');
      control.infoview.setState('disabled');
    }

    this.fireEvent('dragEnabled');
  },

  /**
   * Disable Organize
   * @return {void}
   * @private
   */
  _disableOrganize: function() {
    var control = this.control;

    this.element.removeClass('mode-edit');

    this.tree.disableDrag();

    this.orderMode = false;

    if (control) {
      //control.organize.element.removeClass('state-active');
      control.organize.setState('enable');
      control.addnode.setState('enable');
      control.trash.setState('enable');
      control.infoview.setState('enable');
    }

    this.fireEvent('dragDisabled');
  },

  /**
   * Serialize tree
   * @return {Object} serialize
   * @private
   */
  _serialize: function() {
    this.content.getElement('ul').addClass('tree');
    var serialize = this.tree.serialize();

    return serialize;
  },

  /**
   * Util to fill the a new sortkey
   * @param  {integer} num
   * @return {integer} num
   * @private
   */
  _fillSortkey: function(num) {
    num += '';
    while (num.length < 5) {
      num = '0' + num;
    }
    return num;
  }

});
