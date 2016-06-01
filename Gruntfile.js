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
    }

  });

  // Add the grunt-jsonlint tasks. 
  grunt.loadNpmTasks('grunt-jsonlint');

  // Add the grunt-mocha-test tasks. 
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task(s).
  grunt.registerTask('default', ['jsonlint', 'mochaTest']);

};
