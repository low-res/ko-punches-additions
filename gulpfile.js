// Node modules
var fs      = require('fs'),
    vm      = require('vm'),
    merge   = require('deeply'),
    chalk   = require('chalk'),
    es      = require('event-stream');

// Gulp and plugins
var gulp            = require('gulp'),
    rjs             = require('gulp-requirejs-bundler'),
    concat          = require('gulp-concat'),
    clean           = require('gulp-clean'),
    replace         = require('gulp-replace'),
    uglify          = require('gulp-uglify'),
    del             = require('del'),
    header          = require('gulp-header');


// banner for js and css
var banner = ['/*!',
    ' * Knockout Punches Additions',
    ' * @version v0.1',
    ' * @link https://github.com/low-res/ko-punches-additions',
    ' * @author we.byte GmbH - http://www.webyte.org',
    ' */',
    '',
    ''].join('\n');

// requirejs config
var requireJsRuntimeConfig = vm.runInNewContext(fs.readFileSync('src/app/require.config.js') + '; require;');
requireJsOptimizerConfig = merge(requireJsRuntimeConfig, {
    out: 'kopunches-additions.js',
    baseUrl: './src',
    name: 'app/main',
    paths: {
        requireLib: 'bower_modules/requirejs/require'
    },
    include: [
    ],
    insertRequire: ['app/main'],
    bundles: {
        // If you want parts of the site to load on demand, remove them from the 'include' list
        // above, and group them into bundles here.
        // 'bundle-name': [ 'some/module', 'another/module' ],
        // 'another-bundle-name': [ 'yet-another-module' ]
    }
});

// Discovers all AMD dependencies, concatenates together all required .js files, minifies them
gulp.task('js', function () {
    return rjs(requireJsOptimizerConfig)
        .pipe(uglify({ preserveComments: 'some' }))
        .pipe(header(banner))
        .pipe(gulp.dest('./dist/'));
});


// Removes all files from ./dist/
gulp.task('clean', function(cb) {
    del(['./dist/**/*'], {force: true}, cb);
});

// default task
gulp.task('default', ['clean', 'js'], function(callback) {
    callback();
    console.log('\nPlaced optimized files in ' + chalk.magenta('dist/\n'));
});
