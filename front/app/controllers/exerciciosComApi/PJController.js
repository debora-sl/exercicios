// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('PJController', function($scope, $http) {
    console.log("PJ funcionando!")
    
    // definindo o objeto para os dados das PJs
    $scope.informacoesdasPJs = {
        id: '',
        razaoSocial: '',
        cnpj: ''
    }

    // reseta os inputs
    $scope.resetar = function(){
        $scope.status = 'criando';
    
        $scope.informacoesdasPJs = {
            id: '',
            razaoSocial: '',
            cnpj: ''
        };
        
        // para atualizar a lista de PJs que foram cadastradas
        listar();
    }

    // criando o objeto pjs cadastrados
    $scope.pjCadastradas = [];

    // criando status para o formulário para Novo ou Editando
    $scope.status = 'criando';

    // cria/ salva uma pj no bd
    $scope.cadastrarPJ = function(){
        console.log('Botão salvar, foi clicado!');
        console.log('Dados enviados', $scope.informacoesdasPJs);

        $url = 'http://localhost:8000/api/pj/salvar';

        $scope.dadosDasPJs = {
            razaoSocial: $scope.informacoesdasPJs.razaoSocial,
            cnpj: $scope.informacoesdasPJs.cnpj
        }

        console.log($scope.dadosDasPJs);

        $http.post($url, $scope.dadosDasPJs).then(function(response){
            if(response.status == 201){
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'O cliente foi cadastrado com sucesso.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                listar();
                $scope.resetar();
            }else{
                $scope.dadosDasPJs = "Ops, deu erro"
            }
            }, function(error){
            console.log("Ops, deu erro!!!");
            console.log(error);
            $scope.dadosDasPJs = error.data; 
            });
    };

    // edita a PJ
    $scope.editarPJ = function(id){
        $url = 'http://localhost:8000/api/pj/listarUm/' + id;

        $http.get($url).then(function(response){
            console.log('Cliente editado com sucesso', response);
            $scope.status = 'editando';
            $scope.informacoesdasPJs = response.data;
            
        }, function(error){
            console.log('Erro, PJ não editado"', error);
        });
    };

    // editaSalvar a pj
    $scope.editarSalvar = function(){
        console.log('Botão editarSalvar foi clicado!!!');

        $url = 'http://localhost:8000/api/pj/atualizarParcial/' + $scope.informacoesdasPJs.id;

        $scope.dadosDasPJs = {
            razaoSocial: $scope.informacoesdasPJs.razaoSocial,
            cnpj: $scope.informacoesdasPJs.cnpj
        };

        $http.patch($url, $scope.dadosDasPJs).then(function(response){
            if(response.status == 200){
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'O cliente foi editado com sucesso.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                $scope.resetar();
            }else{
                $scope.dadosDosContatos = "Ops, deu erro"
            }
        }, function(error){
            console.log("Ops, deu erro!!!");
            console.log(error);
            $scope.dadosDosContatos = error.data; 
        })  
    }

    // exclui uma pj no bd
    $scope.deletarPJ = function(id){
        console.log('Botão de delatar foi clicado!');

        Swal.fire({
            title: "Você tem certeza?",
            text: "Excluir este cliente é irreversível!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, delete o cadastro!",
            cancelButtonText: "Cancelar"
          }).then((result)=>{
            if (result.isConfirmed){
                $url = 'http://localhost:8000/api/pj/deletar/' + id;
                $http.delete($url).then(function (response){
                    if(response.status == 200){
                        Swal.fire({
                            title: "Deletado!",
                            text: "O cliente foi deletado.",
                            timer: 3000,
                            timerProgressBar: true,
                            icon: "success"  
                        });
                        listar();
                    }
                }, function(error){
                    console.log(error);   
                })
            }
        })   
    }

    // lista pjs do bd no front
    listar = function(){
        $url = 'http://localhost:8000/api/pj/listar';

        $http.get($url).then(function(response){
            console.log('Ok, deu certo', response);
            $scope.pjCadastradas = response.data;
        }, function(error){
            console.log('Ops, deu erro', error);
            
        })
    }

    // chamando a função listar
    listar();

});