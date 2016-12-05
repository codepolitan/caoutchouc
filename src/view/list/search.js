import SearchControl from '../../control/search';
import { search as searchUtil } from 'minimal-utils';

const _log = __debug('view-core-list-search').defineLevel();

export default new Class({

  /**
   * Initialize Search
   * @private
   */
  _initSearch: function() {
    if (!this.control.search) {
      return;
    }

    _log.debug('_initSearch');

    this.search = new SearchControl().inject(this.container.head, 'after');

    this.search.addClass('container-search');

    this._initSearchEvents();
    this._initSearchSettings();
  },

  /**
   * init search events
   * @return {void}
   */
  _initSearchEvents: function() {
    this.search.addEvents({
      search: this._searchDidChange.bind(this),
      hide: this.processInfos.bind(this),
      //reset: this.fireEvent.bind(this, 'searchEmpty')
    });
  },

  /**
   * init search settings
   * @return {void}
   */
  _initSearchSettings: function() {
    var opts = this.options.search;
    if (opts.open === true) {
      this.showSearch();
    }
    if (opts.value) {
      this.search.setValue(opts.value);
    }
  },

  /**
   * search did change
   * @return {void}
   */
  _searchDidChange: function() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(this.processInfos.bind(this), 300);
  },

  /**
   * applySearch
   * @param  {Array} infos
   * @return {void}
   */
  applySearch: function(infos, cb) {
    var str = this.search.getValue();

    _log.debug('applySearch', infos.length, str);

    //handle same search value
    if (this.lastSearch === str) {
      return;
    } else {
      this.lastSearch = str;
    }

    if (this.options.search.type === 'event') {
      this.fireEvent('searchStr', [this, str, infos, cb.bind(this)]);
    } else {
      cb(searchUtil.search(str, infos, this.options.search));
    }

    this.fireEvent('settings', ['search.value', str]);
  },

  /**
   * Toggle Search
   * @return {void}
   */
  toggleSearch: function() {
    _log.debug('toggleSearch', search);

    var search = this.control.search;

    if (!search) {
      return;
    }

    if (search.isActive()) {
      this.hideSearch();
    } else {
      this.showSearch();
    }

    this.fireEvent('toggleSearch');
  },

  /**
   * Hide Search
   * @return {void}
   */
  hideSearch: function() {
    var search = this.control.search;

    if (!search) {
      return;
    }

    search.setState(null);
    this.search.empty();
    this.search.hide();
    this.fireEvent('settings', ['search.open', false]);
    this.fireEvent('settings', ['search.value', '']);
  },

  /**
   * Show Search
   * @return {void}
   */
  showSearch: function() {
    var search = this.control.search;

    if (!search) {
      return;
    }

    search.setState('active');
    this.search.show();
    this.search.focus();
    this.fireEvent('settings', ['search.open', true]);
  },

  /**
   * search a string
   * @param  {string} str
   * @return {void}
   */
  setSearch: function(str) {
    _log.debug('setSearch', str);

    var search = this.control.search;

    if (!search) {
      return;
    }

    this.showSearch();
    this.search.setValue(str);
    this.processInfos();
  },

});
