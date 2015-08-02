ngAdmin.controller('posteditCtrl', ['$scope','$stateParams', '$sce', 'dataservice', function($scope,$stateParams, $sce, dataservice){
	var id = $stateParams.id;
	dataservice.post(id).then(function(d){
		$scope.post = d;
		$scope.postBody  = $sce.trustAsHtml(d.body);
		 $scope.tinymceOptions = {
    onChange: function(e) {
      // put logic here for keypress and cut/paste changes
    },
    inline: true,
    plugins : 'advlist autolink link image lists charmap print preview',
    skin: 'lightgray',
    theme : 'modern'
  };
	});

}]);