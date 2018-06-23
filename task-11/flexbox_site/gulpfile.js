var gulp = require('gulp');

gulp.task('mytask', function(){
	return gulp.src('source-files')
	.pipe(plugin())
		.pipe(gulp.dest('folder'))
});

	sass = require('gulp-sass');

	gulp.task('sass', function(){
		return gulp.src('sass/main.sass')
		.pipe(sass())
			.pipe(gulp.dest('css/'))
	});