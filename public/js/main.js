angular.module('alurapic', ['minhasDiretivas','ngAnimate','ngRoute'])
    .config(function($routeProvider, $locationProvider){

        // configura o angular a trabalhar no modo html5 não precisando passar o "#" na url para o 
        // sistema de rotas, porém o backend deve estar preparado para utilizar essa maneira.
        // No index.html temos que inserir: <base href="/">
        // TODO Pesquisar como configurar backend
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/fotos', {
                templateUrl: 'partials/principal.html',
                controller: 'FotosController'
            })
            .when('/fotos/new', {
                templateUrl: 'partials/foto.html',
                controller: 'FotoController'
            }).otherwise({ 
                redirectTo : '/fotos' 
            });
    })