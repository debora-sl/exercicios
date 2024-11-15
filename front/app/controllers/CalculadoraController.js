// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('CalculadoraController', function($scope) {
    console.log("Calculadora funcionando")

    $scope.valores = {
        primeiroNumero : 0,
        segundoNumero : 0,
        resultado: 0
    };


    $scope.somar = function () {
        $scope.valores.resultado = $scope.valores.primeiroNumero + $scope.valores.segundoNumero;
        console.log($scope.valores.resultado);
        
    };

});