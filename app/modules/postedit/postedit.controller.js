ngAdmin.controller('posteditCtrl', ['$scope','$stateParams', '$sce', 'dataservice', function($scope,$stateParams, $sce, dataservice){
	var id = $stateParams.id;

	//get post
	dataservice.post(id).then(function(d){
		$scope.post = d;
		$scope.post.body  = $sce.trustAsHtml(d.body);
	
	});

 $scope.postUpdate = function () {
		dataservice.postUpdate(id,$scope.post).then(function(){
				console.log('success');
		});
	};

}]);