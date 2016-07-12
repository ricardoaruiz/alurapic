angular.module('alurapic').config(function($httpProvider) {
	$httpProvider.interceptors.push('LoadingInterceptor');
});