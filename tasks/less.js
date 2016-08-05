module.exports = function(grunt) {
  'use strict';

  grunt.config.merge({
    less: {
      caoutchouc: {
        files: {
          'dist/skin/material.css': 'source/skin/material/material.less',
        }
      }
    }
  });

  grunt.registerTask('styles', ['less']);
  grunt.loadNpmTasks('grunt-contrib-less');
};
