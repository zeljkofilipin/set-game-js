module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

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

  // Add the grunt-jsonlint tasks. 
  grunt.loadNpmTasks('grunt-jsonlint');

  // Add the grunt-mocha-test tasks. 
  grunt.loadNpmTasks('grunt-mocha-test');

  // Add the grunt-run tasks. 
  grunt.loadNpmTasks('grunt-run');

  // Default task(s).
  grunt.registerTask('default', ['jsonlint', 'mochaTest', 'run']);

};
