// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('JogoDeAdivinharAPalavraController', function($scope) {
    console.log("Jogo funcionando")

    $scope.jogo = {
        palavraTentada: '',
        palavraAleatoria: ''
    }

    $scope.iniciarJogo = function(){
        console.log('Botão clicado!');
        
        
        
    }
    
    $scope.verificarPalavra = function(){
        console.log('Botão verificar palavra clicado!');


    }

});