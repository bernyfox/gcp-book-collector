'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var cover = require('gulp-coverage');

var sourceFiles = ['api/**/*.js'];

gulp.task('test', function() {
  return gulp.src('test/**/*.specs.js')
    .pipe(cover.instrument({pattern: sourceFiles}))
    .pipe(mocha())
    .pipe(cover.gather())
    .pipe(cover.format())
    .pipe(gulp.dest('reports'))
    .pipe(cover.enforce())
    .on('error', function (error) {
      console.error(error.message);
      process.exit(1);
    });
});