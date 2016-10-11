"use strict"
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
const embedTemplates = require('gulp-angular-embed-templates');

gulp.task('build', function(callback) {
    runSequence('clean:dist', ['sass', 'templates', 'useref', 'images', 'fonts'],
        callback
    )
});
gulp.task('default', function(callback) {
    runSequence(['sass', 'browserSync', 'watch'],
        callback
    )
});
gulp.task('templates', function() {
    gulp.src('src/scripts/**/*.js')
        .pipe(embedTemplates())
        .pipe(gulp.dest('./dist'));
});
gulp.task('sass', function() {
    return gulp.src('app/scss/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);

});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});
gulp.task('useref', function() {
    return gulp.src('app/*.html')
        .pipe(useref())
        // .pipe(gulpIf('js/**/*.js', embedTemplates()))
        .pipe(gulpIf('js/**/*.js', uglify()))

    // Minifies only if it's a CSS file
    .pipe(gulpIf('css/*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});
gulp.task('images', function() {
    return gulp.src('app/images/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});
gulp.task('fonts', function() {
    return gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
})
gulp.task('clean:dist', function() {
    return del.sync('dist');
})
