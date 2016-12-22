(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("appicon", [], factory);
	else if(typeof exports === 'object')
		exports["appicon"] = factory();
	else
		root["caoutchouc"] = root["caoutchouc"] || {}, root["caoutchouc"]["appicon"] = factory();
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * map app name with ui-icon-
	 */
	exports.default = {
	  template: 'mdi-app-template',
	  news: 'mdi-app-news',
	  files: 'mdi-app-files',
	  cases: 'minimal-icon-folder-open',
	  customers: 'mdi-social-people',
	  course: 'mdi-social-school',
	  sessions: 'mdi-social-group-add',
	  jobs: 'minimal-icon-briefcase',
	  datatype: 'minimal-icon-cubes',
	  export: 'mdi-file-file-download',
	  hds_accounts: 'mdi-social-domain',
	  accounts: 'mdi-social-domain',
	  website: 'mdi-action-explore',
	  content: 'mdi-action-description',
	  inventory: 'mdi-action-description',
	  items: 'mdi-action-description',
	  mail: 'mdi-maps-local-post-office',
	  lists: 'mdi-action-list',
	  messages: 'mdi-communication-message',
	  tracker: 'mdi-action-track-changes',
	  contacts: 'mdi-communication-contacts',
	  participants: 'mdi-communication-contacts',
	  directory: 'mdi-action-bookmark',
	  mailing: 'mdi-content-send',
	  invoices: 'mdi-action-receipt',
	  sprints: 'mdi-action-run',
	  quotes: 'mdi-action-receipt',
	  orders: 'mdi-action-receipt',
	  changes: 'mdi-action-assignment-turned-in',
	  resources: 'mdi-social-people',
	  activity: 'mdi-maps-traffic',
	  places: 'mdi-maps-place',
	  agenda: 'mdi-action-event',
	  backup: 'mdi-action-dns',
	  inbox: 'mdi-content-inbox',
	  desktop: 'mdi-action-open-in-browser',
	  logs: 'mdi-action-list',
	  ticket: 'mdi-action-input',
	  trash: 'mdi-action-delete',
	  shares: 'mdi-social-share',
	  users: 'mdi-action-account-box',
	  roles: 'mdi-action-assignment-ind',
	  document: 'mdi-action-description'
	};

/***/ }
/******/ ])
});
;