var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var del = require('del');

// JSON Server 
var jsonServer = require('json-server')
// 
// Returns an Express server
var server = jsonServer.create()

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults)

// Returns an Express router
var router = jsonServer.router('db.json')
server.use(router)


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
		'bower_components/angular-ui-router/release/angular-ui-router.js',
		'bower_components/angular-ui-tinymce/src/tinymce.js'
	],
	tinymce:'bower_components/tinymce-dist/**/*.*',
	fonts:['bower_components/bootstrap/fonts/*.*'],
	configFiles :[
		'package.json',
		'bower.json',
		'gulpfile.js'
	]
};

gulp.task('serve',['bower_styles','bower_scripts','tinymce','bower_fonts'], function() {

    browserSync.init({
        server: {
            baseDir: "app",
            routes: {
                "/bower_components": "bower_components"
            }
        },
        port: 8080
    });

   	gulp.watch(src.configFiles, ['bower_styles','bower_scripts']);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);

    server.listen(3000);
});

gulp.task('bower_styles',function(){
	gulp.src(src.styles)
	.pipe(gulp.dest(config.app+'/css/'))
});

gulp.task('bower_scripts',function(){
	gulp.src(src.scripts)
	.pipe(gulp.dest(config.app+'/libs/scripts/'))
});

gulp.task('tinymce',function(){
	gulp.src(src.tinymce)
	.pipe(gulp.dest(config.app+'/libs/tinymce'))
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