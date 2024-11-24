// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('CalculadoraImcController', function($scope) {
    console.log('Calculadora IMC funcionando!');

    $scope.dadosPessoa = {
        peso: 0,
        altura: 0.0,
        imc: 0
    }

    $scope.classificacoes = {
        magreza: 'Magreza',
        normal: 'Normal',
        sobrepeso: 'Sobrepeso',
        obesidadeGrauI: 'Obesidade grau I',
        obesidadeGrauII: 'Obesidade grau II',
        obesidadeGrauIII: 'Obesidade grau III'
    }

    $scope.calcularIMC = function(){
        $scope.imc = $scope.dadosPessoa.peso / ($scope.dadosPessoa.altura * $scope.dadosPessoa.altura)
        $scope.imcCalculado = `${$scope.imc.toFixed(2)}`

        if ($scope.imcCalculado < 18.5) {
            $scope.classificacao = `com IMC: ${$scope.imcCalculado}, você tem indice de: ${$scope.classificacoes.magreza}`   
        } 
        if ($scope.imcCalculado > 18.5 && $scope.imcCalculado <= 24.99) {
            $scope.classificacao = `com IMC de ${$scope.imcCalculado}, você tem indice de: ${$scope.classificacoes.normal}` 
        }
        else if ($scope.imcCalculado > 25 && $scope.imcCalculado <= 29.99) {
            $scope.classificacao = `com IMC de ${$scope.imcCalculado}, você tem indice de: ${$scope.classificacoes.sobrepeso}` 
        }
        else if ($scope.imcCalculado > 30 && $scope.imcCalculado <= 34.99) {
            $scope.classificacao = `com IMC de ${$scope.imcCalculado}, você tem indice de: ${$scope.classificacoes.obesidadeGrauI}` 
        }
        else if ($scope.imcCalculado > 35 && $scope.imcCalculado <= 39.99) {
            $scope.classificacao = `com IMC de ${$scope.imcCalculado}, você tem indice de: ${$scope.classificacoes.obesidadeGrauII}` 
        }
        else if ($scope.imcCalculado > 40) {
            $scope.classificacao = `com IMC de ${$scope.imcCalculado}, você tem indice de: ${$scope.classificacoes.obesidadeGrauIII}` 
        }else if($scope.imcCalculado < 10){
            $scope.classificacao = `com IMC de ${$scope.imcCalculado}, você tem indice de: Não foi possível calcular` 
        }

        
    }

});