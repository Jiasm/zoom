'use strict';
var libPath = '../public/';
var jsPath = './js/*.js';
var cssPath = ['./css/*.scss', './css/*.css'];
var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('js', () =>
  gulp.src(jsPath)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest(`${libPath}/js/`))
);

gulp.task('css', () =>
  gulp.src(cssPath)
  .pipe(sass())
  .pipe(gulp.dest(`${libPath}/css/`))
);

gulp.task('watch', () => gulp.watch([jsPath, cssPath], ['js', 'css']));
