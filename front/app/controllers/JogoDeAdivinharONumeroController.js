// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('JogoDeAdivinharONumeroController', function($scope) {
    console.log("Jogo funcionando")

    $scope.mensagem = '';
    $scope.mensagemDeErroDoJogo = '';

    $scope.configuracao = {
        minimo: 0,
        maximo: 0,
        intervalo: 10,
        jogoIniciou: 0,
        jogoFinalizou: 0
    }

    $scope.jogo = {
        numeroAleatorio: 0,
        quantidadeDeTentativa: 0,
        tentativa: 0
    }

    $scope.iniciarJogo = function(){
        
        intervalo = $scope.configuracao.maximo - $scope.configuracao.minimo;

        if(intervalo < $scope.configuracao.intervalo){
            $scope.mensagemDeErroDoJogo = `O jogo não pode começar, o intervalo precisa ser maior que ${$scope.configuracao.intervalo}`
        }else{
            $scope.configuracao.jogoIniciou = 1;
            $scope.jogo.numeroAleatorio = gerarNumeroAleatorio($scope.configuracao.minimo, $scope.configuracao.maximo);
            console.log( $scope.jogo.numeroAleatorio);
            
        }
        
    }



    gerarNumeroAleatorio = function(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    $scope.testar = function(){
         if($scope.jogo.tentativa == $scope.jogo.numeroAleatorio){
            console.log('Acertou');
            $scope.mensagem = `Acertou! Você chutou ${$scope.jogo.tentativa}, o número é: ${$scope.jogo.numeroAleatorio}`
            
         }else{
            console.log('Errou');
            $scope.mensagemDeErroDoJogo = `Errou! Você chutou ${$scope.jogo.tentativa}`
         }
    }

});