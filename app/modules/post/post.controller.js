ngAdmin.controller('postCtrl', ['$scope','$stateParams', '$sce', 'dataservice', function($scope,$stateParams, $sce, dataservice){
	var id = $stateParams.id;
	dataservice.post(id).then(function(d){
		$scope.post = d;
		$scope.postBody  = $sce.trustAsHtml(d.body);
	});

}]);