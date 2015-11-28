module.exports = function (grunt) {


  'use strict';


  require('load-grunt-tasks')(grunt);


  grunt.initConfig({
    /**
     * Compile files from SASS format in /scss into
     * vanilla CSS in /css.
     */
    sass: {
      dist: {
        src: 'src/scss/style.scss', 
        dest: 'src/css/style.css'
      }
    },


    jshint: {
      main: {
        src: './src/scripts/**/*.js',
        options: {
          node: true,
          globals: {
            'location': false
          }
        }
      }
    },


    /**
     * Run 'grunt watch:sass' to watch for changes to .scss
     * files and compile .scss down to .css on changes.
     */
    watch: {
      sass: {
        files: ['./src/scss/**/*.scss'],
        tasks: ['sass']
      },

      build: {
        files: ['./src/scripts/**/*.js'],
        tasks: ['build']
      }
    },


    wiredep: {
      app: {
        src: ['src/views/index.html'],
        ignorePath:  /\.\.\//
      },
      css: {
        src: ['src/css/**/*.css']
      }
    },


    browserify: {
      main: {
          src: './src/scripts/app.js',
          dest: 'build/bundle.js'
      }
    }
  });

  grunt.registerTask('watch-sass',  ['sass', 'watch:sass']);
  grunt.registerTask('build', ['jshint', 'browserify']);
  grunt.registerTask('watch-build', ['build', 'watch:build']);

};
