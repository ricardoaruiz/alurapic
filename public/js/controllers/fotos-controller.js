/**
 * recursoFoto está sendo injetado pelo angular, pois está definido em "meus-servicos.js" como uma factory 
 */
angular.module('alurapic').controller('FotosController', function($scope, recursoFoto, $location){

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoFoto.query(
        function(fotos){
            $scope.fotos = fotos;
        },
        function(erro){
            console.log(erro);
        }
    );

    $scope.remover = function(foto) {
        console.log(foto);

        recursoFoto.delete({ fotoId : foto._id }, 
            function() {
                let indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = 'A foto ' + foto.titulo + ' foi removida com sucesso';
            },
            function(erro) {
                console.log(erro);
                $scope.mensagem = 'Problema ao remover a foto';
            }
        );
    };
	
	$scope.editar = function(foto) {
		$location.path('/fotos/edit/' + foto._id);
	};

});