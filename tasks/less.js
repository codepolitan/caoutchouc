
module.exports = function(grunt) {
	'use strict';

	grunt.config.merge({
		less: {
			floor: {
				files: {
					'dist/skin/material.css': 'Source/skin/material/material.less',
				}
			}
		}
	});

	grunt.registerTask('styles', ['less']);
	grunt.loadNpmTasks('grunt-contrib-less');
};
