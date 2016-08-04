var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var modernizr = require('gulp-modernizr');

gulp.task('watch', function () {
  gulp.watch('public/scss/**/*.scss', ['sass']);
  gulp.watch('public/js/**/*.js', ['compilejs']); //'modernizr'
});

gulp.task('sass', function () {
  gulp.src('public/scss/style.scss') //'public/src/scss/**/*.scss'
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('compilejs', function () {
    gulp.src('public/js/src/**/*.js', {base: 'public/js/src/'})
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('public/js/'));
});

gulp.task('buildjs', function () {
    gulp.src('public/js/src/**/*.js', {base: 'public/js/src/'})
      .pipe(concat('main.min.js'))
      .pipe(uglify({
           compress: {
             drop_console: true
           }
         }))
      .pipe(gulp.dest('public/js/'));
});

gulp.task('modernizr', function() {
  gulp.src('public/js/src/**/*.js')
    .pipe(modernizr({
        // Avoid unnecessary builds (see Caching section below)
        "cache" : true,

        // Path to the build you're using for development.
        "devFile" : false,

        // Path to save out the built file
        "dest" : false,

        // Based on default settings on http://modernizr.com/download/
        "options" : [
            "setClasses",
            "addTest",
            // "html5printshiv",
            "testProp",
            "fnBind"
        ],

        // By default, source is uglified before saving
        // "uglify" : true,

        // Define any tests you want to explicitly include
        "tests" : ["csstransforms", "touchevents"],

        // Useful for excluding any tests that this tool will match
        // e.g. you use .notification class for notification elements,
        // but don’t want the test for Notification API
        "excludeTests": [],

        // By default, will crawl your project for references to Modernizr tests
        // Set to false to disable
        "crawl" : true,

        // Set to true to pass in buffers via the "files" parameter below
        "useBuffers" : false,

        // By default, this task will crawl all *.js, *.css, *.scss files.
        // "files" : {
        //     "src": [
        //         // "*[^(g|G)runt(file)?].{js,css,scss}",
        //         // "**[^node_modules]/**/*.{js,css,scss}",
        //         // "!lib/**/*",
        //         "./src/Byte/HegnarBundle/Resources/public/css/**/*.{css,scss}"
        //     ]
        // },

        // Have custom Modernizr tests? Add them here.
        "customTests" : []
    }))
    .pipe(uglify({
      compress: {
        drop_console: true
      }
    }))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('build', ['sass', 'buildjs']);

gulp.task('default', ['sass', 'compilejs', 'watch']);