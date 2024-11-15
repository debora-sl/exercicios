// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('TrocarNomesController', function($scope) {
    $scope.informacoes = "Este é um objeto de texto";

    $scope.informacoesComMaisDados = {
        nome: 'Debora',
        sobrenome: 'Souza'
    };

    $scope.trocarNome = function(){
        
        if($scope.informacoesComMaisDados.sobrenome == 'Souza'){
            $scope.informacoesComMaisDados.sobrenome = 'Lima' 
        } else {
            $scope.informacoesComMaisDados.sobrenome = 'Souza';
        }


    }
});