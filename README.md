# alurapic
Curso AngularJS: crie webapps poderosas

- 1. Início

	1) Na pasta "arquivos-suporte/inicio" existe um zip com o projeto inicial e as instruções para configurar o ambiente de desenvolvimento.

- 2. Construindo o alicerce da nossa aplicação

	1) Angular nada mais é do que um framework escrito em JavaScript e como qualquer script deve ser importado na página. Importe-o dentro da tag <head>. Lembre-se que você pode verificar através do developer tools (console do navegador) se o script foi importado, olhando a aba network (rede). Isso é importante, porque muitas vezes perdemos tempo achando que nosso código não funciona, quando na verdade é o script que não foi carregado.

	2) Só carregar o Angular não é suficiente, precisamos criar o primeiro módulo da aplicação. Crie o arquivo main.js e declare o módulo. Lembre-se que esse processo é feito por intermédio do objeto global angular.

	3) Um módulo criado ainda não é suficiente. Você precisa fazer com que o Angular carregue o módulo assim que sua página for carregada. Lembra da diretiva ng-app? Lembra qual tem que ser o valor atribuído à ela? Mais alguma coisa? O módulo main.js tem que ser importado também na página, certo?

	4) Agora que tudo está no lugar, dentro da tag <body> você vai adicionar a marcação que existe uma foto. Não lembra da marcação? Não se preocupe, vai uma cola:

		<!-- dentro do body -->
		<div class="container">
		   <h1 class="text-center">Alurapic</h1>
		   <img class="img-responsive center-block" src="http://www.fundosanimais.com/Minis/leoes.jpg" alt="Leão">
		</div><!-- fim container -->

	5) Abra uma lacuna para os atributos src e alt da imagem, criando um controller que forneça os dados de que ela precisa. Lembre-se de criar um controller em um arquivo em separado usando a convenção de pastas que vimos. Ele se chamará FotosController e disponibilizará para a view um objeto foto com duas propriedades: url e titulo. Ainda lembra como um controller disponibiliza dados para a view?

	6) Ainda lembra como criamos o controller para o módulo alurapic? Ainda lembra que precisamos importar o script do controller em nossa view index.html. Por fim, ainda lembra para que serve a diretiva ng-controller?

- 3. Tornando nossa aplicação mais próxima de uma aplicação real

	1) Melhore a experiência do usuário adicionando um componente jumbotron do Bootstrap. Este é um treinamento de Angular e não de Bootstrap, sendo assim, fique livre para consultar a qualquer momento o vídeo e o texto explicativo caso tenha dúvidas nas marcações do Bootstrap.

	2) No lugar de exibir a imagem da foto diretamente, exiba-a através de um panel-default do Bootstrap. Repare que até agora não há nenhuma novidade do mundo Angular. Aproveite também para adicionar o sistema de grids do Bootstrap.

	3) Altere seu controller para disponibilizar no mínimo três fotos para a view. Como? Lembra que uma propriedade em $scope pode ser uma lista, um array em JavaScript?

	4) Com esta alteração, altere seu painel em index.html para que ele construa um painel para cada foto em $scope.fotos. Para esta tarefa, você precisará realizar uma repetição através da diretiva ng-repeat.

	5) Agora que sua view index.html consegue exibir um painel para cada foto $scope.fotos, está na hora de deixar de trabalhar com dados fixos e buscar esses dados do servidor. Solicite em seu controller o serviço $http via injeção, aquele responsável por realizar requisições Ajax.

	6) O projeto baixado no primeiro capítulo já possui um servidor com endereços específicos para operações de inclusão, alteração, deleção e listagem. Nosso foco é no Angular, não na criação do back-end, porém é importantíssimo saber que consumiremos endpoints REST, que nada mais são do que URLs seguindo a convenção REST. A URL http://localhost:3000/v1/fotos é a responsável por obter todas as fotos, porém $http só precisa da parte v1/fotos para trabalhar.

	7) Acesse a URL através de $http.get, lembrando que este serviço retorna uma promise. O $http possui dois atalhos para esta operação e serão estes que você utilizará: success e error.

	8) Atualize $scope.fotos com os dados retornados pelo servidor. Agora, você terá dados dinâmicos e não estáticos como antes!

	9) Muita informação? Fique à vontade para assistir o vídeo e consultar a explicação textual quantas vezes for necessária. Não sinta a obrigação de decorar tudo de uma só vez, é natural dúvidas no que diz respeito à sintaxe do Angular.