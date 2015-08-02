var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var del = require('del');

var config = {
	app:'app'
};
var src = {
	styles:['bower_components/bootstrap/dist/css/bootstrap.css'],
	scripts:[
		'bower_components/angular/angular.js',
		'bower_components/angular-animate/angular-animate.js',
		'bower_components/angular-aria/angular-aria.js',
		'bower_components/angular-bootstrap/ui-bootstrap.js',
		'bower_components/angular-ui-router/release/angular-ui-router.js'
	],
	fonts:['bower_components/bootstrap/fonts/*.*'],
	configFiles :[
		'package.json',
		'bower.json',
		'gulpfile.js'
	]
};

gulp.task('serve',['bower_styles','bower_scripts','bower_fonts'], function() {

    browserSync.init({
        server: "./"+config.app
    });

   	gulp.watch(src.configFiles, ['bower_styles','bower_scripts']);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
});

gulp.task('bower_styles',function(){
	gulp.src(src.styles)
	.pipe(gulp.dest(config.app+'/css/'))
});

gulp.task('bower_scripts',function(){
	gulp.src(src.scripts)
	.pipe(gulp.dest(config.app+'/libs/scripts/'))
});

gulp.task('bower_fonts',function(){
	gulp.src(src.fonts)
	.pipe(gulp.dest(config.app+'/fonts/'))
});

gulp.task('clean',function(){
	del([
		 config.app+'/libs/'
		])
});