/**
 * recursoFoto está sendo injetado pelo angular, pois está definido em "meus-servicos.js" como uma factory 
 */
angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams){

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
            if($scope.foto._id) {
                recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, 
                    function() {
                        $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
                    },
                    function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível alerar a foto ' + $scope.foto.titulo;
                    }
                );
            } else {
                recursoFoto.save($scope.foto, 
                    function() {
                        $scope.foto = {};
                        $scope.mensagem = 'Foto incluída com sucesso.';
                    },
                    function(erro) {
                        $scope.mensagem = 'Não foi possível incluir a foto.';
                    }
                );
            }
        }
    }

});