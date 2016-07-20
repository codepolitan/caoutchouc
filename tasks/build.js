module.exports = function(grunt) {
  'use strict';

  grunt.config.merge({
    concat: {
      ui: {
        src: ['dist/**/*.js'],
        dest: 'dist/caoutchouc-min.js'
      },
    },
  });

  grunt.config.merge({
    clean: {
      js: {
        src: ['dist/**/*', '!dist/skin', '!dist/caoutchouc-min.js']
      }
    }
  });

  grunt.config.merge({
    requirejs: {
      ui: {
        options: {
          //optimize: 'none',
          preserveLicenseComments: false,
          baseUrl: 'Source',
          //appDir: 'Source',
          dir: 'dist',
          paths: {
            ui: './'
          },
          /**
           * @ignore
           */
          onBuildWrite: function(name, path, contents) {
            //console.log('Writing: ' + name);

            /*if (name === 'ui') {
            	contents = contents.replace('define(', "define('" + name + "', ");
            } else {
            	contents = contents.replace('define(', "define('ui/" + name + "', ");
            }*/
            contents = contents.replace('define(', "define('ui/" + name + "', ");

            return contents;
          },
        }
      }
    }
  });

  grunt.registerTask('build', ['requirejs:ui', 'concat:ui', 'clean:js', 'less']);

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
};
