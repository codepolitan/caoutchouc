module.exports = function(grunt) {
  'use strict';

  var config = require('../webpack.config');

  grunt.config.merge({
    webpack: {
      js: config
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.registerTask('pack', ['webpack']);

};
