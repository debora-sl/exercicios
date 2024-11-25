// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('ConversorDeUnidadeController', function($scope) {
    console.log("Conversor De UnidadeController funcionando")

    $scope.comprimentos = {
        valor: 0,
        milimetro: 0,
        centimetro: 0,
        metro: 0
    }

    $scope.converter = function(){
        console.log($scope.comprimentos.valor);
        
        // Convertendo de Milimetro para Centrimetro
        $scope.comprimentos.milimetro = $scope.comprimentos.valor / 10;
        $scope.resultadoMilimetroPorCentrimetro = `${$scope.comprimentos.valor} milimetro(s) = ${$scope.comprimentos.milimetro} centimetro(s).`;
        // Convertendo de Milimetro para Metro
        $scope.comprimentos.metro = $scope.comprimentos.valor / 1000;
        $scope.resultadoMilimetroPorMetro = `${$scope.comprimentos.valor} milimetro(s) = ${$scope.comprimentos.metro} metro(s).`;

        // Convertendo de Centrimetro para Milimetro
        $scope.comprimentos.centimetro = $scope.comprimentos.valor * 10;
        $scope.resultadoCentimetroPorMilimetro = `${$scope.comprimentos.valor} centimetros(s) = ${$scope.comprimentos.centimetro} milimetro(s).`;
        // Convertendo de Centrimetro para Metro
        $scope.comprimentos.metro = $scope.comprimentos.valor / 100;
        $scope.resultadoCentimetroPorMetro = `${$scope.comprimentos.valor} centimetro(s) = ${$scope.comprimentos.metro} metro(s).`;
        
        // Convertendo de Metro para Milimetro
        $scope.comprimentos.metro = $scope.comprimentos.valor * 1000;
        $scope.resultadoMetroPorMilimetro = `${$scope.comprimentos.valor} metro(s) = ${$scope.comprimentos.metro} milimetro(s).`;
        // Convertendo de Metro para Centrimetro
        $scope.comprimentos.metro = $scope.comprimentos.valor * 100;
        $scope.resultadoMetroPorCentrimetro = `${$scope.comprimentos.valor} metro(s) = ${$scope.comprimentos.metro} centimetro(s).`;

    }
});