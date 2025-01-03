// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('DeslogarController', function($scope, $http, $state) {
    console.log("LoginController funcionando!");
    
    $token = localStorage.getItem('token');

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
                // direcionando o usuário para a página home
                $state.go('login');
            };
            console.log(response);
        }, function(error){
            console.log(error);
            // matando o token e usuario do no localStorage
            localStorage.removeItem('token');
            localStorage.removeItem('usuario');
            // direcionando o usuário para a página home
            $state.go('login');
        })
    }

    $scope.deslogar();
});