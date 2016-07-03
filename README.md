# alurapic
Curso AngularJS: crie webapps poderosas

- 1 - Início

	1) Na pasta "arquivos-suporte/inicio" existe um zip com o projeto inicial
	
	2) Na pasta "arquivos-suporte/aulas" existe um arquivo para cada aula que deve ser seguida no curso.
	
	3) Na pasta "arquivos-suporte/exercicios" existe um arquivo com exercícios para cada aula que deve ser feito no final da mesma.

- 2 - Construindo o alicerce da nossa aplicação

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

- 3 - Tornando nossa aplicação mais próxima de uma aplicação real

	1) Melhore a experiência do usuário adicionando um componente jumbotron do Bootstrap. Este é um treinamento de Angular e não de Bootstrap, sendo assim, fique livre para consultar a qualquer momento o vídeo e o texto explicativo caso tenha dúvidas nas marcações do Bootstrap.

	2) No lugar de exibir a imagem da foto diretamente, exiba-a através de um panel-default do Bootstrap. Repare que até agora não há nenhuma novidade do mundo Angular. Aproveite também para adicionar o sistema de grids do Bootstrap.

	3) Altere seu controller para disponibilizar no mínimo três fotos para a view. Como? Lembra que uma propriedade em $scope pode ser uma lista, um array em JavaScript?

	4) Com esta alteração, altere seu painel em index.html para que ele construa um painel para cada foto em $scope.fotos. Para esta tarefa, você precisará realizar uma repetição através da diretiva ng-repeat.

	5) Agora que sua view index.html consegue exibir um painel para cada foto $scope.fotos, está na hora de deixar de trabalhar com dados fixos e buscar esses dados do servidor. Solicite em seu controller o serviço $http via injeção, aquele responsável por realizar requisições Ajax.

	6) O projeto baixado no primeiro capítulo já possui um servidor com endereços específicos para operações de inclusão, alteração, deleção e listagem. Nosso foco é no Angular, não na criação do back-end, porém é importantíssimo saber que consumiremos endpoints REST, que nada mais são do que URLs seguindo a convenção REST. A URL http://localhost:3000/v1/fotos é a responsável por obter todas as fotos, porém $http só precisa da parte v1/fotos para trabalhar.

	7) Acesse a URL através de $http.get, lembrando que este serviço retorna uma promise. O $http possui dois atalhos para esta operação e serão estes que você utilizará: success e error.

	8) Atualize $scope.fotos com os dados retornados pelo servidor. Agora, você terá dados dinâmicos e não estáticos como antes!

	9) Muita informação? Fique à vontade para assistir o vídeo e consultar a explicação textual quantas vezes for necessária. Não sinta a obrigação de decorar tudo de uma só vez, é natural dúvidas no que diz respeito à sintaxe do Angular.

- 4 - Minimizando a complexidade do nosso HTML

	O Bootstrap ajuda na aplicação de um visual profissional em nossa aplicação, porém seu uso baseado em tags e classes pode acabar deixando nosso HTML difícil de manter. Podemos minimizar essa complexidade através do Angular, criando componentes reutilizáveis chamados de diretivas, que podem encapsular, esconder a complexidade da marcação, inclusive de comportamento (algo que veremos mais à frente).
	Neste exercício, implemente os passos que foram vistos durante esta aula para criar sua primeira diretiva. Como sempre, seguem os passos gerais que devem ser empreendidos nesta tarefa:

	1) Sua primeira diretiva viverá em um módulo exclusivo chamado minhasDiretivas, declarado no arquivo public/js/directives/minhas-diretivas.js Criar módulos não é novidade, você já fez isso no primeiro capítulo. Não esqueça de importar o script do novo módulo em index.html, inclusive não esqueça de adicioná-lo como dependência do módulo alurapic, o módulo principal da aplicação.

	2) Do que adianta um módulo sem qualquer funcionalidade? Para o módulo minhasDiretivas crie a diretiva meuPainel através do encadeamento da função .directive. Ela recebe dois parâmetros, o nome da diretiva e a função que a define.

	3) Você precisa indicar a restrição da diretiva, seu template e escopo. Quando for declarar o template da diretiva, use templateUrl declarando seu template separadamente em um arquivo. Isso o ajudará na manutenção do seu código, principalmente do template.

	4) Terminou? Por mais que sua diretiva tenha o nome meuPainel, quando for utilizá-la em sua view index.html precisará usá-la como 
	<meu-painel></meu-painel>, fechando obrigatoriamente a tag. O padrão camelCase é substituído pelo uso de hífens na marcação HTML. Aliás, a diretiva deve ter a seguinte interface de uso: <meu-painel titulo="meuTitulo'></meu-painel>.

	5) A diretiva conterá elementos filhos e quando o Angular for trocá-la na view pela marcação do Bootstrap perderemos todos os seus elementos. Lembra ainda qual é o mecanismo do Angular que faz com que a diretiva mantenha seus elementos filhos? Você precisará utilizá-lo!

	6) Por fim, faça uso da diretiva, alterando index.html.

	Diretivas não encapsulam apenas marcações HTML, veremos ao longo do treinamento como encapsularmos comportamentos.

- 5 - Melhorando a experiência do usuário

	1) Permita que o usuário filtre a lista digitando em um campo. Ele ficará imediatamente abaixo do jumbotron, como uma linha do grid do Bootstrap. Uma linha no grid do bootstrap é qualquer elemento container que tenha a classe row. Dúvida? Você pode consultar a explicação do capítulo e "colar" a estrutura, deixe para quebrar a cabeça com Angular apenas! Para filtrar, aplique um filter na diretiva ng-repeat, mas tome cuidado, pois tanto o campo de entrada quanto o valor de filter devem apontar para a mesma propriedade. A diferença é que o campo de entrada utilizará two-way data binding e a diretiva ng-repeat utilizará filter.

	2) Agora que sua lista é filtrada, melhore ainda mais a experiência do usuário animando os elementos que são removidos da lista, aplicando uma espécie de fade, que na verdade realiza uma transição do tamanho atual do elemento para um tamanho menor. Para esta tarefa, você precisará do módulo ngAnimate que, para estar disponível, você precisa importar o script angular.animate.min.js, já disponibilizado na pasta public/js/lib. Não custa nada lembrá-lo de que você ainda precisará declarar o módulo ngAnimate como dependência do módulo principal alurapic.

	3) Ter o módulo ngAnimate carregado não é suficiente. Você deve criar seus estilos CSS pegando carona nas classes adicionadas dinamicamente pelo Angular, quando este módulo está presente. Existem uma série de classes, porém foque na ng-leave-active. Como este é um treinamento de Angular e não de CSS, sinta-se livre para consultar o CSS na explicação do capítulo, inclusive para saber onde gravar o CSS e como adicioná-lo na marcação.

	4) Agora que sua lista é filtrada e elementos removidos sofrem animações, repare que a cada dígito o two-way data binding do Angular atualiza em$scope a propriedade que guarda o que o usuário digitou através da diretiva ng-model. Podemos dar um tempo antes que ng-model atualize a propriedade em $scope, que é usada por ng-repeat para filtrar a lista. Usamos para isso a diretiva ng-model-options. Lembre-se que ela trabalha com milissegundos, sendo assim, postergue em meio segundo a atualização.

- 6 - Dividir para conquistar!	

	1) Por mais que o Angular seja feito para criação de SPA's, não faz sentido colocar tudo numa única view, principalmente se o escopo do seu sistema for grande. O primeiro passo é extrair todo o conteúdo da tag body de index.html para um arquivo em separado. Adote a convenção de que todas as views parciais ficarão dentro de public/partials (em inglês). Para o conteúdo extraído, o nome da view será principal.html. Não esqueça que uma view parcial não possui as tag's head nem body. As dicas não foram suficientes? Você pode recorrer sempre à explicação do capítulo, mas encare o desafio!

	2) Com a parcial principal.html criada, abra uma lacuna em index.html usando a diretiva do sistema de rotas do Angular. Ainda lembra seu nome? Ela é muito importante, porque todo o conteúdo das parciais serão "jogadas" para dentro dela. Porém, vale frisar que apenas uma parcial por vez pode ser exibida.

	3) Neste ponto você tem a parcial criada e a lacuna na view index.html . Chegou a hora de habilitar o sistema de rotas na aplicação (ainda não configure as rotas). Lembre-se que dois passos são necessários: importar o script do módulo de rotas e declará-lo como dependência no módulo alurapic. Dica: o nome do módulo é ngRoute.

	4) Muito bem! O Angular não fez curso de adivinhação para saber como exibir suas views parciais. Podem existir zilhões delas em seu projeto e no mundo Web navegamos entre páginas através de links que acessam URL's. A questão é que essas URL's não podem ser URL's acessadas diretamente do nosso servidor, caso contrário as parciais seriam baixadas diretamente, a página seria recarregada (matando a SPA, que nunca recarrega sua página durante uso) e pior: como a parcial não tem head nem body, ela não seria exibida corretamente. Para resolver esse problema, podemos registrar URL's de 'mentirinha' no sistema de rotas do Angular. Essas URL's não acessam um recurso diretamente no servidor, elas são processadas no lado do cliente através do Angular, que traduz aquela URL em uma chamada Ajax que carrega a parcial para aquela URL. Como é o Angular que faz esse processo, ele se encarrega de incluir a parcial dentro da diretiva ng-view em index.html. Configure duas rotas (você precisará injetar um artefato do angular responsável por isso, lembra?): a primeira com o endereço /fotos, associada com controller FotosController. Não esqueça também de indicar qual template será carregado (parcial). A segunda rota é aquele disparada quando o usuário acessar uma rota que não existe, que por sua vez redirecionará o usuário para /fotos.

	5) Faça um teste. Acesse a URL localhost:3000/#/fotos ou localhost:3000/index.html#/fotos. Repare que o conteúdo de index.html é trocado pelo conteúdo da parcial. Não funcionou? Reveja seus passos e consulte a explicação do capítulo para verificar se deixou alguma coisa de fora das configurações.

	6) Habilite o HTML5MODE no sistema de rotas e faça um teste sem usar o hash, por exemplo, acessando localhost:3000/fotos. Só não esqueça de adicionar o base em index.html, caso contrário a rota não funcionará.

- 7 - Precisamos alimentar esse sistema

	Está pronto para criar uma nova parcial e usar todo o poder de validação do Angular? Como de costume, neste exercício será fornecido os passos gerais que devem ser implementados para que você consiga concretizar o que foi ensinado no capítulo.
	1) O primeiro passo será adicionar um botão ao lado da entrada do usuário, em index.html, que ao ser clicado levará o usuário para a parcial foto.html. Segue a "cola" da estrutra do HTML, isso porque a intenção é focar no Angular:

		<!-- public/partials/principal.html -->

		<div class="jumbotron">
		    <h1 class="text-center">Alurapic</h1>
		</div>

		<div class="row">
		    <div class="col-md-12">
		        <form>

		            <!-- Novidade! -->

		             <div class="input-group">
		                <span class="input-group-btn">
		                    <a href="/fotos/new" class="btn btn-primary" type="button">
		                        Nova foto
		                    </a>
		                </span>
		                <input class="form-control" placeholder="filtrar pelo título da foto" ng-model="filtro" ng-model-options="{ debounce: 500 }">
		            </div> 

		            <!-- fim novidade! -->

		        </form>
		    </div> <!-- fim col-md-12 -->
		</div> <!-- fim row -->

		<div class="row">
		    <meu-painel class="col-md-2 painel-animado" ng-repeat="foto in fotos | filter: filtro" titulo="{{foto.titulo}}">
		        <minha-foto url="{{foto.url}}" titulo="{{foto.titulo}}">
		        </minha-foto>
		    </meu-painel>
		</div>

	2) Veja que o link aponta para a rota /foto/news. O controlador desta rota ainda não existe em main.js. Cadastre-o como FotoController e mantenha à parcial foto.html, que ainda será criada.

	3) Crie a parcial foto.html. Mais uma "colher de chá", segue o HTML da página:

		<!-- public/partials/foto.html -->

		<div class="page-header text-center">
		    <h1>{{foto.titulo}}</h1>
		</div>

		<form name="formulario" class="row">
		    <div class="col-md-6">
		        <div class="form-group">
		            <label>Título</label>
		            <input name="titulo" class="form-control" ng-model="foto.titulo">    
		        </div>
		        <div class="form-group">
		            <label>URL</label>
		            <input name="url" class="form-control" ng-model="foto.url">
		        </div>
		        <div class="form-group">
		            <label>Descrição</label>
		            <textarea name="descricao" class="form-control" ng-model="foto.descricao">
		            </textarea>
		        </div>

		        <button type="submit" class="btn btn-primary">
		            Salvar
		        </button>
		         <a href="/" class="btn btn-primary">Voltar</a>
		        <hr>
		    </div>
		    <div class="col-md-6">
		        <minha-foto></minha-foto>
		    </div>
		</form>

	4) Crie FotoController em public/js/foto-controller.js. Não esqueça de importá-lo em index.html.

	5) Inicialmente, imprima no console os dados da foto quando o usuário submeter o formulário. Lembra qual diretiva você utiliza quando quer chamar um código em seu controller no momento da submissão do formulário? Não esqueça de adicionar um botão para submeter o formulário.

	6) Depois que você conseguir exibir no console do seu navegador os dados da foto capturada, já pode validar o formulário com Angular. Dica: não esqueça de desativar a validação do HTML e lembre-se do papel do atributo name do formulário e sua relação com o objeto formulário criado implicitamente pelo Angular. Faça com que o título e a URL sejam obrigatórios, inclusive não aceite um título com mais de 20 caracteres. Não lembra tudo de cabeça? Consulte a explicação e o vídeo do capítulo que estão sempre à disposição.

	7) Exiba a mensagem com possíveis erros de validação. Lembre-se da diretiva ng-show para exibição condicional de elementos na página.

	8) Integre FotoController com o servidor, através de $http.post para enviar os dados e garantir a persistência das informações cadastradas. Atenção: você precisa saber se o formulário está válido ou não antes de enviar os dados.