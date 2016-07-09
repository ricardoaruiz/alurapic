angular.module('alurapic')
.factory('recursoFoto', function($resource) {

    return $resource('v1/fotos/:fotoId', null, 
    {
        'update' : {
            method : 'PUT'
        }
    });

})
.factory('cadastroFoto', function(recursoFoto, $q) {
    return {
        salvar : function(foto){

            return $q(function(resolve, reject) {
             if(foto._id) {
                  recursoFoto.update({fotoId : foto._id}, foto,
                    function() {
                        resolve({
                            mensagem : 'Foto ' + foto.titulo + ' alterada com sucesso',
                            inclusao: false
                        });
                    },
                    function(erro) {
                        console.log(erro);
                        reject({
                            mensagem : 'Foto ' + foto.titulo + ' não pode ser alterada'
                        });
                    }
                  )

                } else {
                  
                  recursoFoto.save(foto,
                    function() {
                        resolve({
                            mensagem : 'Foto ' + foto.titulo + ' incluída com sucesso',
                            inclusao: true
                        });
                    },
                    function(erro) {
                        console.log(erro);
                        reject({
                            mensagem : 'Foto ' + foto.titulo + ' não pode ser alterada'
                        });
                    }
                  );  

                }
            });
        }
    };

});