ngAdmin.service('dataservice', ['$http', '$q','appConfig', function($http, $q, appConfig){

	 function _post(id) {
		 	var dfd = $q.defer();
      var url = appConfig.apiEndPoint +'posts/'+id;
			$http.get(url)
				.success(function(data){
					dfd.resolve(data);
				})
				.error(function(data){
					serviceMessage(appConfig.message);
					dfd.reject(data);					
				});

			return dfd.promise;
   };
   function _posts(startfrom) {
		 	var dfd = $q.defer();
		 	var suffix = '?_start='+startfrom+'&_limit='+appConfig.postPerPage;
      var url = appConfig.apiEndPoint +'posts/'+suffix;
			$http.get(url)
				.success(function(data){
					dfd.resolve(data);
				})
				.error(function(data){
					serviceMessage(appConfig.message);
					dfd.reject(data);					
				});

			return dfd.promise;
   };


	return {
		post:_post,
		posts:_posts,
	};
}])