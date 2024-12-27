// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('AgendaController', function($scope, $http) {
    console.log("Agenda funcionando!")

    $scope.informacoesDosContatos = {
        nome: '',
        email: '',
        telefoneCelular: '',
        telefoneFixo: '',
        endereco: ''
    };
    
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
            if(response.status == 200){
                $scope.dadosDosContatos = response.data;
            }else{
                $scope.dadosDosContatos = "Ops, deu erro"
            }
        }, function(error){
            console.log("Ops, deu erro!!!");
            console.log(error);
            $scope.dadosDosContatos = error.data; 
        }) 
    } 

    // criando a função que exclui o contato
    $scope.deleletarContato = function(id){

        /* Para debugar
        console.log('Botão deletar, fui clicado!');
        console.log(id);
        */

        $url = 'http://localhost:8000/api/agenda/deletar/' + id;

        $http.delete($url).then(function(response){
            console.log(response);
        }, function(error){
            console.log('Erro, contato não apagado!', error);
        });
        
    };
});