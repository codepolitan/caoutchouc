module.exports = function(grunt) {
  'use strict';

  grunt.config.merge({
    'git-flow': {
      core: {
        options: {
          files: ['package.json']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-git-flow');

  grunt.registerTask('git', ['git-flow']);

};
