(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("controlicon", [], factory);
	else if(typeof exports === 'object')
		exports["controlicon"] = factory();
	else
		root["caoutchouc"] = root["caoutchouc"] || {}, root["caoutchouc"]["controlicon"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);


/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * map control name with ui-icon-
	 */
	exports.default = {
	  validator: 'minimal-icon-thumbs-up',
	  subcribe: 'mdi-content-mail',
	  resendClosure: 'mdi-content-mail',
	  resendApproval: 'mdi-content-mail',
	  beat: 'mdi-image-flash-on',
	  invite: 'mdi-maps-local-post-office',
	  ticket: 'mdi-action-input',
	  listtype: 'mdi-action-view-module',
	  grid: 'mdi-action-list',
	  stream: 'mdi-action-view-stream',
	  three: 'mdi-maps-map',
	  folder: 'mdi-file-folder-open',
	  column: 'mdi-action-view-column',
	  history: 'mdi-action-history',
	  savedraft: 'mdi-action-done',
	  approve: 'mdi-action-done',
	  reject: 'mdi-navigation-cancel',
	  setPending: 'mdi-av-timer',
	  submit: 'mdi-action-done',
	  favorite_o: 'mdi-action-favorite-outline',
	  favorite: 'mdi-action-favorite',
	  addnode: 'mdi-content-add-box',
	  launcher: 'mdi-notification-vibration',
	  desktop: 'mdi-action-open-in-browser',
	  tablet: 'mdi-hardware-tablet',
	  phone: 'mdi-hardware-smartphone',
	  infoview: 'mdi-action-info-outline',
	  editinfo: 'mdi-av-explicit',
	  infoedit: 'mdi-av-explicit',
	  organize: 'mdi-editor-format-line-spacing',
	  repair: 'fa-wrench',
	  process: 'fa-wrench',
	  emptyNode: 'icon-trash-o',
	  processView: 'icon-trash-o',
	  emptyView: 'icon-trash-o',
	  screenshot: 'mdi-image-camera',
	  notification: 'mdi-social-notifications',
	  clear: 'mdi-action-highlight-remove',
	  navi: 'mdi-navigation-menu',
	  list: 'mdi-navigation-menu',
	  side: 'mdi-navigation-menu',
	  share: 'mdi-social-share',
	  info: 'mdi-action-info',
	  more: 'mdi-navigation-more-vert',
	  space: 'mdi-navigation-more-horiz',
	  duplicate: 'mdi-content-content-copy',
	  separator: 'undefined',
	  add: 'mdi-content-add',
	  addOne: 'mdi-social-plus-one',
	  people: 'mdi-social-group',
	  print: 'mdi-action-print',
	  power: 'mdi-power',
	  proforma: 'mdi-action-print',
	  user: 'mdi-action-account-circle',
	  apps: 'mdi-navigation-apps',
	  zoomOut: 'mdi-content-remove-circle-outline',
	  zoomIn: 'mdi-content-add-circle-outline',
	  date: 'mdi-action-event',
	  today: 'mdi-action-today',
	  fixed: 'mdi-action-schedule',
	  talk: 'mdi-communication-chat',
	  replan: 'mdi-action-schedule',
	  complete: 'mdi-action-done',
	  ship: 'mdi-maps-flight',
	  cancelCase: 'mdi-navigation-cancel',
	  cancelChange: 'mdi-navigation-cancel',
	  mailing: 'icon-envelope',
	  send: 'mdi-content-send',
	  openinnew: 'mdi-action-open-in-new',
	  switchapp: 'mdi-action-open-in-new',
	  look: 'mdi-image-remove-red-eye',
	  preview: 'mdi-image-remove-red-eye',
	  code: 'mdi-image-remove-red-eye',
	  save: 'icon-envelope',
	  recipients: 'minimal-icon-list-all',
	  move: 'mdi-action-open-with',
	  insert: 'mdi-navigation-check',
	  publish: 'mdi-editor-publish',
	  generateURL: 'icon-level-down',
	  publishAll: 'mdi-action-done-all',
	  forward: 'mdi-navigation-arrow-forward',
	  previous: 'mdi-navigation-arrow-back',
	  next: 'mdi-navigation-arrow-forward',
	  nextstep: 'mdi-navigation-arrow-forward',
	  back: 'mdi-navigation-arrow-back',
	  reload: 'mdi-navigation-refresh',
	  SLSync: 'mdi-navigation-refresh',
	  participant: 'mdi-content-add',
	  search: 'mdi-action-search',
	  settings: 'mdi-action-settings',
	  properties: 'mdi-action-settings-applications',
	  upload: 'mdi-file-cloud-upload',
	  searchField: 'mdi-action-search',
	  invoice: 'minimal-icon-barcode',
	  edit: 'mdi-editor-mode-edit',
	  filter: 'mdi-content-filter-list',
	  trash: 'mdi-action-delete',
	  delete: 'mdi-navigation-cancel',
	  editmove: 'mdi-editor-format-line-spacing',
	  position: 'mdi-editor-format-line-spacing',
	  moveup: 'mdi-hardware-keyboard-arrow-up',
	  movedown: 'mdi-hardware-keyboard-arrow-down',
	  orderSession: 'mdi-content-add',
	  choose: 'mdi-action-done',
	  sync: 'mdi-notification-sync',
	  export: 'mdi-file-file-download',
	  download: 'mdi-file-file-download',
	  sort: 'mdi-content-sort',
	  minus: 'mdi-content-remove-circle-outline',
	  showAll: 'mdi-action-list',
	  restore: 'mdi-action-restore',
	  apply: 'mdi-action-done',
	  cancel: 'mdi-navigation-close',
	  close: 'mdi-navigation-close',
	  tracker: 'mdi-action-track-changes',
	  contact: 'mdi-action-perm-contact-cal',
	  collapse: 'mdi-navigation-unfold-less',
	  uncollapse: 'mdi-navigation-unfold-more',
	  checked: 'mdi-check-box',
	  sprints: 'mdi-action-run',
	  package: 'mdi-package',
	  planning: 'mdi-calendar-clock',
	  notes: 'mdi-app-notes',
	  files: 'mdi-app-files',
	  news: 'mdi-app-news',
	  template: 'mdi-app-template'
	};

/***/ }

/******/ })
});
;