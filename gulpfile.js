var gulp = require('gulp');
var browserify = require('browserify'),
 babelify = require('babelify'),
 source = require('vinyl-source-stream');
gulp.task('default', function () {
 return browserify('./src/script.js')
 .transform(babelify)
 .bundle()
 .pipe(source('script.js'))
 .pipe(gulp.dest('./build/'));
});