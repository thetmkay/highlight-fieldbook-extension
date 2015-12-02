'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './src/js/background.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('background.js'))
    .pipe(buffer())
//    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
  //      .pipe(uglify())
    //    .on('error', gutil.log)
  //  .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('sass', function () {
	return gulp.src('src/scss/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('public/css'));
});

gulp.task('serve', function () {
	gulp.watch('src/scss/*.scss',['sass']);
	gulp.watch('src/js/*.js',['javascript']);
});

gulp.task('default', ['javascript', 'sass', 'serve']);
