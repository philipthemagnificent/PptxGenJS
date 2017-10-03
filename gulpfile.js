var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    ignore     = require('gulp-ignore'),
    uglify     = require('gulp-uglify');

gulp.task('build', function () {
    gulp.src(['src/pptxgen.js'])
        .pipe(concat('pptxgen.bundle.js'))
        .pipe(sourcemaps.init())
        .pipe(ignore.exclude(["**/*.map"]))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/'));

            // also copy source files
    gulp.src(['src/pptxgen.js'])
        .pipe(gulp.dest('dist/')
});
