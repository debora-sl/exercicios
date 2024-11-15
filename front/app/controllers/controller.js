// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('testeController', function($scope) {
    $scope.saudacaoHome = 'Olá, você está na tela Home!'

});