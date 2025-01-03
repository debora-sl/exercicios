// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('LoginController', function($scope, $http, $state) {
    console.log("LoginController funcionando!");
    
    // criando o objeto com e-mail e senha
    $scope.login = {
        email: '',
        password: ''
    };

    // criando o objeto com nome e e-mail
    $scope.dadosDoUsuario = {
        name: '',
        email: ''
    };

    // para apaecer o formulário de login, para o usuario fornecer os dados
    $scope.estaLogado=false;

    // função que verifica quem está logado (me)
    verificarMe =  function(redirecionar){
        $url = 'http://localhost:8000/api/usuarios/me';

    // pedindo para ler o token
    $token = localStorage.getItem('token')
    console.log($token);

    // verificando se o usuário esta logado
    if($token == null){
        return;
    };
        $config = {
            headers: {
                'Authorization': 'Bearer' + $token
            }
        };
        
        $http.get($url, $config).then(function(response){
            console.log(response);
            if(response.status == 200){
                //trazendo o name do bd para ser exibido no cabeçalho
                localStorage.setItem('usuario', JSON.stringify(response.data));
                // trazendo os dados do bd
                $scope.dadosDoUsuario = response.data;
                if (redirecionar == true) {
                    $state.go('main.home')
                }
            }
        }, function(error){
            console.log(error);
        });
    };

    verificarMe(false);
    
    // criando a função para logar
    $scope.logar = function(){
        $url = 'http://localhost:8000/api/usuarios/login';

        $http.post($url, $scope.login).then(function(response){
            // salvando na máquina do usuário
            if(response.status == 200){
                localStorage.setItem('token', response.data.token);
                verificarMe(true);
            }
            console.log('Usuário logado com sucesso!', response);
        }, function(error){
            console.log("Ops, deu erro: ", error); 
        });
    }

    // criando a função para deslogar
    $scope.deslogar = function(){
        $url = 'http://localhost:8000/api/usuarios/logout';

        // 
        $config = {
            headers: {
                'Authorization': 'Bearer' + $token
            }
        }
        console.log($config);
        
        $http.get($url, $config).then(function(response){
            if(response.status == 200){
                // matando o token e usuario do no localStorage
                localStorage.removeItem('token');
                localStorage.removeItem('usuario');

                $scope.estaLogado = false;
                // zarando os dados do usuário
                $scope.dadosDoUsuario = {
                    name: '',
                    email: ''
                };
            };
            console.log(response);
        }, function(error){
            console.log(error);
        })
    }
});