
var gulp = require('gulp'),
	notify = require('gulp-notify');
	plumber = require('gulp-plumber');
	sass = require('gulp-sass');
	uglify = require('gulp-uglify');
	browserSync = require('browser-sync').create();

var PUBLIC = 'public_html';

gulp.task('sass', function(){
	return gulp.src('src/sass/main.scss')
		.pipe(plumber())
		.pipe(sass({outputStyle:'nested'})
			.on('error', notify.onError('Error: <%= error.message %>'))
		)
		.pipe(plumber.stop())
		.pipe(gulp.dest(PUBLIC+'/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('js', function(){
	return gulp.src('src/js/main.js')
		.pipe(plumber())
		.pipe(uglify()
			.on('error', notify.onError('Error: <%= error.message %>'))
		)
		.pipe(plumber.stop())
		.pipe(gulp.dest(PUBLIC+'/js'))
});

gulp.task('browserSync', function() {
	browserSync.init({
		proxy: 'http://designsponge.dev/',
		host: 'designsponge.dev',
		open: 'external',
		notify: true
	})
});

gulp.task('default', ["browserSync", "sass", 'js'], function(){
	gulp.watch('src/sass/main.scss', ['sass']);
	gulp.watch('src/js/main.js', ['js']);
});
