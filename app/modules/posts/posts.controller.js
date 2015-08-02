ngAdmin.controller('postsCtrl', ['$scope','$stateParams', '$sce', 'dataservice', function($scope,$stateParams, $sce, dataservice){
	var page = 1;

	dataservice.posts(page).then(function(d){
		$scope.posts = d;
	});

}]);