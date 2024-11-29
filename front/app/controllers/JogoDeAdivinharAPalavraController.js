// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('JogoDeAdivinharAPalavraController', function($scope) {
    console.log("Jogo funcionando")

    $scope.jogo = {
        quantidadeTentativa: 0,
        quantidadeLetrasIguais: 0,
        jogoIniciado: 0,
        palavraTentada: '',
    }

    $scope.palavraAleatoria= '',

    palavras = ['abacaxi', 'banana', 'laranja', 'uva', 'melancia', 'pêssego', 'ameixa', 'manga', 'kiwi' ]

    $scope.iniciarJogo = function(){
        console.log('Botão clicado!');

        
    }
    
    $scope.verificarPalavra = function(){
        console.log('Botão verificar palavra clicado!');

    }

    $scope.reiniciarOJogo = function(){
        console.log('Botão reiniciar o jogo, clicado!');
        
    }

    calcularLetrasIguais = function(){
        palavra1 = $scope.palavraAleatoria;
        palavra2 = $scope.jogo.palavraTentada;
    }

});