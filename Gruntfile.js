module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            dev: {
                expand: true,
                files: [ "src/**/*.js", "test/**/*.js" ],
                tasks: [ 'jshint', 'mochaTest' ],
                options: {
                    spawn: false
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: true, // https://github.com/pghalliday/grunt-mocha-test#running-in-permanent-environments-like-watch
                    colors: false
                },
                src: ['test/**/*.spec.js']
            }
        }
    });

    // on watch events configure babel to only run on changed file
    grunt.event.on('watch', function(action, filepath) {
        testpath = /\.spec\.js$/.test(filepath) ? filepath : filepath.replace(/^src/, 'test').replace(/\.js$/, '.spec.js');

        grunt.config('mochaTest.test.src', testpath);
        grunt.config('jshint.src', filepath);
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.registerTask('default', ['watch']);
};
