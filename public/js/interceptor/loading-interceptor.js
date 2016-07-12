angular.module('alurapic').factory('LoadingInterceptor', function($q, $rootScope, $timeout) {
	
	return {	
		request : function(config) {
			$rootScope.carregando = true;
			return config;
		},
		requestError : function(rejection) {
			$rootScope.carregando = false;
			return $q.reject(rejection);
		},
		response : function(response) {
			$timeout(function() {
				$rootScope.carregando = false;				
			}, 1000);
			return response;
		},
		responseError : function(reject) {
			$rootScope.carregando = false;
			return $q.reject(rejection);
		}
	};
	
})