// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('PalindromoController', function($scope) {
    console.log("Palindromo funcionando")

    $scope.informacoes = {
        palavraInformada: '',
        palavraInvertida: '',
        resultado: ''
    }

    $scope.verificarPalavra = function(){

        // .split('').reverse().join('') função para reverter a palavra
        $scope.informacoes.palavraInvertida = $scope.informacoes.palavraInformada.split('').reverse().join('');
        console.log($scope.informacoes.palavraInformada);
        console.log($scope.informacoes.palavraInvertida);

        if ($scope.informacoes.palavraInformada == $scope.informacoes.palavraInvertida) {
            $scope.informacoes.resultado = `A palavra informada '${$scope.informacoes.palavraInformada}' é Palindromo, pois invertida fica '${$scope.informacoes.palavraInvertida}'.`
        } else {
            $scope.informacoes.resultado = `A palavra informada '${$scope.informacoes.palavraInformada}' não é Palindromo, pois invertida fica '${$scope.informacoes.palavraInvertida}'.`
        }
        
        
    }
});