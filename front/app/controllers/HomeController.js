// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('HomeController', function($scope, $state) {
    $scope.saudacaoHome = 'Olá, você está na tela Home!'

    // trazendo dados do bd
    $token = localStorage.getItem('token');
    $scope.usuario = JSON.parse(localStorage.getItem('usuario'));
    
    console.log($token);

    // verificando se usurário está logado, se não é direcionado para o login
    if($token == null){
        $state.go('login');
    }

});