// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('CalculadoraController', function($scope) {
    console.log("Calculadora funcionando")

    $scope.valores = {
        primeiroNumero : 0,
        segundoNumero : 0,
        resultado: 0,
    };

    /* Funções individuais */
    $scope.somar = function () {
        $scope.valores.resultado = $scope.valores.primeiroNumero + $scope.valores.segundoNumero;
        console.log($scope.valores.resultado); 
    };
    $scope.subtrair = function () {
        $scope.valores.resultado = $scope.valores.primeiroNumero - $scope.valores.segundoNumero;
        console.log($scope.valores.resultado);    
    };
    $scope.multiplicar = function () {
        $scope.valores.resultado = $scope.valores.primeiroNumero * $scope.valores.segundoNumero;
        console.log($scope.valores.resultado);    
    };
    $scope.dividir = function () {
        if ($scope.valores.segundoNumero == 0) {
            $scope.valores.resultado = "Não é possível dividir por 0!"
        }else{
            $scope.valores.resultado = $scope.valores.primeiroNumero / $scope.valores.segundoNumero;
            console.log($scope.valores.resultado);    

        }
    };

    /* Função geral (calcula todas as operações)*/
    $scope.carcularTudo = function(){
        soma = $scope.valores.primeiroNumero + $scope.valores.segundoNumero;
        subtracao = $scope.valores.primeiroNumero - $scope.valores.segundoNumero;
        multiplicacao = $scope.valores.primeiroNumero * $scope.valores.segundoNumero;
        if($scope.valores.segundoNumero == 0){
            divisao = "Não é possível dividir por 0!"
        }else{
           divisao = $scope.valores.primeiroNumero / $scope.valores.segundoNumero;
        };
        $scope.valores.resultado = `Soma: ${soma}, Subtração: ${subtracao}, Multiplicação: ${multiplicacao}, Divisão: ${divisao}`
    };

    /* Função que limpa os campos */
    $scope.limpar = function(){
        $scope.valores = {
            primeiroNumero : 0,
            segundoNumero : 0,
            resultado: 0,
        };
    }
});