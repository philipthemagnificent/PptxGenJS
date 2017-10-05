var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    eslint     = require('gulp-eslint'),
    concat     = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    ignore     = require('gulp-ignore'),
    uglify     = require('gulp-uglify');

gulp.task('build', ['lint'], function () {
    gulp.src(['src/pptxgen.js'])
        .pipe(concat('pptxgen.bundle.js'))
        .pipe(sourcemaps.init())
        .pipe(ignore.exclude(["**/*.map"]))
        .pipe(uglify().on('error', gutil.log))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/'));

    // also copy source files
    gulp.src(['src/pptxgen.js'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('lint', () => {
  const src = [ 'src/**/*.js' ];
  return gulp.src(src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
