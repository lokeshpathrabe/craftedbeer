/**
 * This scripts and related modules need upgrade.
 * I have moved to webpack-babel configuration and no more use gulp for packaging.
 */

var gulp = require('gulp');
//https://fettblog.eu/gulp-browserify-multiple-bundles/
var browserify = require('browserify'),
 babelify = require('babelify'),
 source = require('vinyl-source-stream');

gulp.task('default', function () {
 return browserify({entries: './src/script.jsx', extensions: ['.jsx'], debug: true})
 .transform(babelify)
 .bundle()
 .pipe(source('script.js'))
 .pipe(gulp.dest('./build/'));
});

gulp.task('deploy-css', function(){
    return browserify(['./src/projects/craftedBeer/css/beer-style.css'])
    .bundle()
    .pipe(source('style.css'))
    .pipe(gulp.dest('./css/style.css'));
})