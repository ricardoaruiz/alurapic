/**
 * A diretiva é declarada utilizando o camel case "meuPainel", porém ao utilizá-la deve-sempre
 * usar o padrão com "-" "meu-painel "
 */
angular.module('minhasDiretivas', [])
    .directive('meuPainel', function() {

        // uma diretiva sempre deve retornar um DDO (Direct Definition Object)
        var ddo = {};

        // define o tipo da diretiva:
        // A - diretiva de atributo
        // E - diretiva de elemento
        ddo.restrict = "AE";

        // define o escopo da diretiva (parametros e etc...)
        ddo.scope = {
            titulo: '@' //ou poderia ser @titulo
        };

        // ativa o transclude que é o que permite a diretiva inserir elementos filhos dela 
        // na renderização final na view. No template da diretiva é necessário utilizar a 
        // diretiva do angular "ng-transclude" no elemento que se deseja inserir os filhos.
        ddo.transclude = true;

        // define o template da diretiva, ou seja, o que será renderizado por ela na view.
        ddo.templateUrl = 'js/directives/meu-painel.html';        

        return ddo;

    })
    .directive('minhaFoto', function() {
        return {
            restrict: 'E',
            scope : {
                url : '@',
                titulo : '@'
            },
            template : '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">'
        }
    });    


    