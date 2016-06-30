# alurapic
Curso AngularJS: crie webapps poderosas

- Na pasta "inicio" existe um zip com o projeto inicial e as instruções para configurar o ambiente de desenvolvimento.

2. Construindo o alicerce da nossa aplicação

	- Iniciamos incluindo a lib do angular em nossa index.html

			<script src="js/lib/angular.min.js"></script>

	- Criamos um arquivo "js/main.js" e incluimos também em nosso index.html

			<script src="js/main.js"></script>

	- No arquivo "js/main.js" declaramos o módulo principal da nossa aplicação da seguinte forma:

			angular.module('alurapic', []);

	- No arquivo index.html indicamos que o módulo criado será usado.

			<html lang="pt-br" ng-app='alurapic'>