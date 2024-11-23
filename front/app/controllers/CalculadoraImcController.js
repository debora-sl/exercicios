// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('CalculadoraImcController', function($scope) {
    console.log('Calculadora IMC funcionando!');

    $scope.dadosPessoa = {
        peso: 0,
        altura: 0.0,
        imc: 0
    }

    $scope.calcularIMC = function(){
        $scope.imc = $scope.dadosPessoa.peso / ($scope.dadosPessoa.altura * $scope.dadosPessoa.altura)
        $scope.imcCalculado = `seu IMC é: ${$scope.imc.toFixed(2)}`
    }

});