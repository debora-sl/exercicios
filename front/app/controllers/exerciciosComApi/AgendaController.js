// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('AgendaController', function($scope, $http) {
    console.log("Agenda funcionando!")

    $scope.informacoesDosContatos = {
        id: '',
        nome: '',
        email: '',
        telefoneCelular: '',
        telefoneFixo: '',
        endereco: ''
    };

    // criando a função que reseta (limpa)
    $scope.resetar = function(){
        $scope.status = 'criando';

        $scope.informacoesDosContatos = {
            id: '',
            nome: '',
            email: '',
            telefoneCelular: '',
            telefoneFixo: '',
            endereco: ''
        };
        listar();
    }
    
    /* simulando um array de contatos
     $scope.contatos = [
         {
            nome:'Fulano Testando', 
            email:'fulano@teste.com',
            telefoneCelular:'11911111111',
            telefoneFixo:'1111111111',
            endereco:'Rua de teste, testando, Testada',
         },
         {
            nome:'Fulano Testando 2', 
            email:'fulano@teste.com',
            telefoneCelular:'11911112222',
            telefoneFixo:'1111113333',
            endereco:'Rua teste, testando, Testada',
         }
     ]; */
    
    $scope.contatos = [];
    console.log($scope.contatos);

    // criando a função que pega os contatos no bd e lista no front
    listar = function(){
        $url = 'http://localhost:8000/api/agenda/listar';

        $http.get($url).then(function(response){

            console.log(response);
            $scope.contatos = response.data;
            
        }, function(error){
            console.log(error);   
        });
    }

    // chamando a função listar
    listar();

    // criando status para o formulário para Novo ou Editando
    $scope.status = 'criando';

    // criando a função que cadastra o novo contato
    $scope.cadastrarContato = function(){
        console.log('Fui clicado!!!');

        $url = 'http://localhost:8000/api/agenda/salvar';

        $scope.dadosDosContatos = {
            nome: $scope.informacoesDosContatos.nome,
            email: $scope.informacoesDosContatos.email,
            telefoneCelular: $scope.informacoesDosContatos.telefoneCelular,
            telefoneFixo: $scope.informacoesDosContatos.telefoneFixo,
            endereco: $scope.informacoesDosContatos.endereco,
        };

        $http.post($url, $scope.dadosDosContatos).then(function(response){
            if(response.status == 201){
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'O contato foi cadastrado com sucesso.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                listar();
                resetar();
            }else{
                $scope.dadosDosContatos = "Ops, deu erro"
            }
            }, function(error){
            console.log("Ops, deu erro!!!");
            console.log(error);
            $scope.dadosDosContatos = error.data; 
            }) 
    }

        // criando a função que editaSalvar o contato
        $scope.editarSalvar = function(){
            console.log('Botão editarSalvar, fui clicado!!!');
    
            $url = 'http://localhost:8000/api/agenda/atualizarparcial/' + $scope.informacoesDosContatos.id;
    
            $scope.dadosDosContatos = {
                nome: $scope.informacoesDosContatos.nome,
                email: $scope.informacoesDosContatos.email,
                telefoneCelular: $scope.informacoesDosContatos.telefoneCelular,
                telefoneFixo: $scope.informacoesDosContatos.telefoneFixo,
                endereco: $scope.informacoesDosContatos.endereco,
            };
    
            $http.patch($url, $scope.dadosDosContatos).then(function(response){
                if(response.status == 200){
                    Swal.fire({
                        title: 'Sucesso!',
                        text: 'O contato editado com sucesso.',
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

    // criando a função que edita o contato
    $scope.editarContato = function(id){
        /* Para debugar
        console.log('Botão editar, fui clicado!');
        console.log(id);
        */

        $url = 'http://localhost:8000/api/agenda/lerUm/' + id;

        $http.get($url).then(function(response){
            console.log('Contato editado com sucesso!', response);
            $scope.status = 'editando'
            $scope.informacoesDosContatos = response.data;
        }, function(error){
            console.log('Erro, contato não editado!', error);
        });
        
    };

    // criando a função que exclui o contato
    $scope.deleletarContato = function(id){

        /* Para debugar
        console.log('Botão deletar, fui clicado!');
        console.log(id);
        */

        Swal.fire({
            title: "Você tem certeza?",
            text: "Excluir este dado não é irreversível!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, delete isso!",
            cancelButtonText: "Cancelar"
          }).then((result)=>{
            if (result.isConfirmed){
                $url = 'http://localhost:8000/api/agenda/deletar/' + id;
                $http.delete($url).then(function (response){
                    if(response.status == 200){
                        Swal.fire({
                            title: "Deletado!",
                            text: "O contado foi deletado.",
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
    };
});