(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	}
}(this, function() {

	return {
		power: 'mdi-action-power-settings-new',
		side: 'mdi-action-chrome-reader-mode',
		checked: 'mdi-check-box',
		sprints: 'mdi-action-run',
		package: 'mdi-package',
		planning: 'mdi-calendar-clock',
		notes: 'mdi-app-notes',
		files: 'mdi-app-files',
		news: 'mdi-app-news',
		template: 'mdi-app-template'
	};

}));
