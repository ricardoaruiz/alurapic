/**
 * recursoFoto está sendo injetado pelo angular, pois está definido em "meus-servicos.js" como uma factory 
 */
angular.module('alurapic').controller('FotoController', 
    ['$scope', 'recursoFoto', 'cadastroFoto', '$routeParams', '$location', 
    function($scope, recursoFoto, cadastroFoto, $routeParams, $location){

    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId) {
        recursoFoto.get({fotoId : $routeParams.fotoId}, 
            function(foto) {
                $scope.foto = foto;
            },
            function(erro) {
                console.log(erro);
                $scope.mensagem = 'Erro ao carregar a foto';
            }
        );            
    }

    $scope.submeter = function() {
        if($scope.formulario.$valid){
            cadastroFoto.salvar($scope.foto)
            .then(function(data){
                $scope.mensagem = data.mensagem;
                if(data.inclusao) {
                    $scope.foto = {};
					$location.path('/fotos');
                }
            })
            .catch(function(data){
                $scope.mensagem = data.mensagem;
            });
        }
    }
}]);