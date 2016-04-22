var gulp = require('gulp'),
		clean = require('gulp-clean'),
		usemin = require('gulp-usemin'),
		minify = require('gulp-minify-css'),
		uglify = require('gulp-uglify'),
		sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./public/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/'))
});

gulp.task('sass:watch', function() {
	gulp.watch('./public/*.scss', ['sass']);
});

gulp.task('clean', function() {
	gulp.src('./build', {read: false})
		.pipe(clean());
});

gulp.task('copy', ['clean'], function() {
	gulp.src(['./public/img/*.jpg', './public/img/*.jpeg'])
		.pipe(gulp.dest('./build/img'));
	gulp.src(['./public/bower_components/fancybox/source/*.png', './public/bower_components/fancybox/source/helpers/*.png'])
		.pipe(gulp.dest('./build/css'));
});

gulp.task('usemin', ['copy'], function() {
	gulp.src('./public/index.html')
		.pipe(usemin({
			css: [minify()],
			js: [uglify()]
		}))
		.pipe(gulp.dest('./build'));
});

gulp.task('build', ['usemin']);