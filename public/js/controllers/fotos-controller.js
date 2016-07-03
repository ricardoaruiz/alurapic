angular.module('alurapic').controller('FotosController', function($scope, $http){

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

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

    $scope.remover = function(foto) {
        console.log(foto);

        $http.delete('v1/fotos/' + foto._id)
            .success(function() {
                let indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = 'A foto ' + foto.titulo + ' foi removida com sucesso';

            })
            .error(function(erro){
                console.log(erro);
                $scope.mensagem = 'Problema ao remover a foto';
            });

    }

});