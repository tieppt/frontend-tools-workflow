const gulp = require('gulp');
const del = require('del');
const gulpSass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

gulp.task('clean:css', function() {
  return del(['dist/*.css']);
});

gulp.task('build:css', ['clean:css'], () => {
  return gulp
    .src('src/scss/*.scss')
    .pipe(gulpSass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['build:css']);
