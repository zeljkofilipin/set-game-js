module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Configure a eslint task
    eslint: {
      target: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
    },

    // Configure a jscs task
    jscs: {
      src: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
      options: {
        config: '.jscsrc',
        fix: true // Autofix code style violations when possible.
      },
    },

    // Configure a jshint task
    jshint: {
      all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Configure a jsonlint task
    jsonlint: {
      sample: {
        src: ['.jshintrc', '.*.json', '*.json'],
      },
    },

    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          timeout: 10000,
        },
        src: ['test/**/*.js'],
      },
    },

  });

  // Default task(s).
  grunt.registerTask('default', ['eslint', 'jscs', 'jshint', 'jsonlint', 'mochaTest']);

};
