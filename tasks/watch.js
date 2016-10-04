module.exports = function(grunt) {
  'use strict';

  grunt.config.merge({
    watch: {
      less: {
        files: ['source/skin/**/**/*.less'],
        tasks: ['less:caoutchouc']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
