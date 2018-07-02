var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('AnimConfigure', function() {
    gulp.src('client/component/Login/LoginAninm/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('client/component/Login/LoginAninm/'));
});