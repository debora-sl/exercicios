// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('JogoDeAdivinharAPalavraController', function($scope) {
    console.log("Jogo funcionando")

    $scope.jogo = {
        palavraTentada: '',
        quantidadeTentativas: 0,
        quantidadeLetrasIguais: 0,
        jogoIniciado: 0,
        mensagem: ''
    }

    palavras = [
        'abacaxi', 'banana', 'laranja', 'morango', 'coco',
        'melancia', 'pessego', 'uva', 'pera',
        'ameixa', 'kiwi', 'manga', 'framboesa', 'limao',
        'tangerina', 'cereja', 'amora', 'maracuja', 'goiaba'
    ];

    $palavraAleatoria= '';

    $scope.iniciarJogo = function(){
        console.log('botão iniciar o jogo clicado');
        palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
        
        console.log(palavraAleatoria);
        
    }

    $scope.verificarPalavra = function(){
        console.log('botão verificar Palavra clicado');
        $scope.jogo.palavraTentada++;
        $scope.jogo.quantidadeLetrasIguais = calcularLetrasIguais();
        console.log($scope.jogo.quantidadeLetrasIguais);
        
        
    }

    calcularLetrasIguais = function(){
        palavra1 = palavraAleatoria;
        palavra2 = $scope.jogo.palavraTentada;

        contador = 0;
        comprimento = Math.min(palavra1.length, palavra2.length);

        for (let i = 0; i < comprimento; i++) {
            if (palavra1[i] === palavra2[i]) {
                contador++;
            }
        }

        return contador;
    }

    
});