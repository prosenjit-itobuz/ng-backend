var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var config = {
	app:'app'
};
var src = {
	styles:['bower_components/angular-material/angular-material.css'],
	scripts:[
		'bower_components/angular/angular.js',
		'bower_components/angular-animate/angular-animate.js',
		'bower_components/angular-aria/angular-aria.js',
		'bower_components/angular-material/angular-material.js'
	],
	configFiles :[
		'package.json',
		'bower.json',
		'gulpfile.js'
	]
};

gulp.task('serve',['bower_styles','bower_scripts'], function() {

    browserSync.init({
        server: "./"+config.app
    });

   	gulp.watch(src.configFiles, ['bower_styles','bower_scripts']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('bower_styles',function(){
	gulp.src(src.styles)
	.pipe(gulp.dest(config.app+'/css/'))
});

gulp.task('bower_scripts',function(){
	gulp.src(src.scripts)
	.pipe(gulp.dest(config.app+'/scripts/'))
});