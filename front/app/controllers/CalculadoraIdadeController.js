// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('CalculadoraIdadeController', function($scope) {
    console.log("Calduladora de idade funcionando")

    $scope.informacoes = {
        dataDeNascimento: '',
        idadeCalculada: ''
    }

    $scope.calcularIdade = function(){
        console.log($scope.informacoes.dataDeNascimento);
        
    }

});