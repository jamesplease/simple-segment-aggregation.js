module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      version: '<%= pkg.version %>',
      banner: '// SimpleSegmentAggregation v<%= meta.version %>\n'
    },

    preprocess: {
      segments: {
        src: 'src/wrapper.js',
        dest: 'tmp/simple-segment-aggregation.js'
      }
    },

    template: {
      options: {
        data: {
          version: '<%= meta.version %>'
        }
      },
      segments: {
        src: '<%= preprocess.segments.dest %>',
        dest: '<%= preprocess.segments.dest %>'
      }
    },

    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      segments: {
        src: '<%= preprocess.segments.dest %>',
        dest: 'dist/simple-segment-aggregation.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      segments: {
        src: '<%= concat.segments.dest %>',
        dest: 'dist/simple-segment-aggregation.min.js',
        options: {
          sourceMap: true
        }
      }
    },

    jshint: {
      segments: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['src/simple-segment-aggregation.js']
      },
      tests: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/unit/**/*.js']
      }
    },

    mochaTest: {
      spec: {
        options: {
          require: 'test/setup/node.js',
          reporter: 'dot',
          clearRequireCache: true,
          mocha: require('mocha')
        },
        src: [
          'test/setup/helpers.js',
          'test/unit/**/*.js'
        ]
      }
    }
  });

  grunt.registerTask('test', 'Test the library', [
    'preprocess',
    'jshint',
    'mochaTest'
  ]);

  grunt.registerTask('build', 'Build the library', [
    'test',
    'preprocess:segments',
    'template',
    'concat',
    'uglify'
  ]);

  grunt.registerTask('default', 'An alias of test', [
    'test'
  ]);
};
