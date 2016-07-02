angular.module('alurapic').controller('FotosController', function($scope, $http){

    $scope.fotos = [];
    $scope.filtro = '';

    //Utilizando o success/error com arrow function
    $http.get('/v1/fotos')
        .success(fotos => $scope.fotos = fotos)
        .error(error => console.log(error));

    //Utilizando o success/error        
    /*
    $http.get('/v1/fotos')
        .success(function(fotos) {
            $scope.fotos = fotos;
        })
        .error(function(error) {
            console.log(error);
        });
    */

    //Utilizando o then/catch        
    /*
    $http.get('/v1/fotos')
        .then(function(response) {
            $scope.fotos = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
    */
});