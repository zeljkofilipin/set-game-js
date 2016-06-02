module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Configure a eslint task
    eslint: {
      target: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
    },

    // Configure a jshint task
    jshint: {
      all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
    },

    // Configure a jsonlint task
    jsonlint: {
      sample: {
        src: [ 'package.json' ]
      }
    },

    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
        },
        src: ['test/**/*.js']
      }
    },

    // Configure a run task
    run: {
      index: {
        args: ['./test/selenium.js']
      }
    }

  });

  // Default task(s).
  grunt.registerTask('default', ['eslint', 'jshint', 'jsonlint', 'mochaTest', 'run']);

};
