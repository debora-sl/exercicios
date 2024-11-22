// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('ContadorController', function($scope) {
    console.log("Contador funcionando")

    $scope.numerosDeAte = {
        numeroDe: 0,
        numeroAte: 0,
    }

    $scope.contar = function(){
        $scope.numerosContados = '';

        for ($x = $scope.numerosDeAte.numeroDe; $x <= $scope.numerosDeAte.numeroAte; $x++){
            $scope.numerosContados = $scope.numerosContados + ' - ' + $x;
        }

    }

});