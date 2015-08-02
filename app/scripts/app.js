var ngAdmin = angular.module('ngAdmin', ['ui.router','ui.bootstrap']);

ngAdmin.config(function($stateProvider,$urlRouterProvider){
	
  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('home',{
  	url:'/',
  	templateUrl:'modules/home/home.html'
  })
  .state('post',{
  	url:'/post/:id',
  	templateUrl:'modules/post/post.html'
  })
  .state('posts',{
  	url:'/posts/',
  	templateUrl:'modules/posts/posts.html'
  })



});