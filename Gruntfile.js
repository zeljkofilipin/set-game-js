module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configure a jscs task
    jscs: {
      src: ['Gruntfile.js', 'index.js', 'lib/**/*.js', 'test/**/*.js'],
      options: {
        fix: true, // Autofix code style violations when possible.
      }
    },

    // Configure a jshint task
    jshint: {
      all: ['Gruntfile.js', 'index.js', 'lib/**/*.js', 'test/**/*.js']
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
        args: ['./index.js']
      }
    }

  });

  // Add the grunt-jscs tasks.
  grunt.loadNpmTasks("grunt-jscs");

  // Add the grunt-contrib-jshint tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Add the grunt-jsonlint tasks.
  grunt.loadNpmTasks('grunt-jsonlint');

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');

  // Add the grunt-run tasks.
  grunt.loadNpmTasks('grunt-run');

  // Default task(s).
  grunt.registerTask('default', ['jscs', 'jshint', 'jsonlint', 'mochaTest', 'run']);

};
