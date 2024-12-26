// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('CalculadoraComApiController', function($scope, $http) {
    console.log("Calculadora funcionando")

    $scope.valores = {
        primeiroNumero : 0,
        segundoNumero : 0,
        resultado: 0,
    };

    /* Funções individuais API */
    $scope.somar = function () {
        // chamando a função que calcula e passando o parametro da operação
        calcular('+');
    };

    $scope.subtrair = function () {
        // chamando a função que calcula e passando o parametro da operação
        calcular('-');
    };

    $scope.multiplicar = function () {
        // chamando a função que calcula e passando o parametro da operação
        calcular('*');
    };

    $scope.dividir = function () {
        // chamando a função que calcula e passando o parametro da operação
        calcular('/');
    };

    function calcular($operacao){
        $url = 'http://localhost:8000/api/calculadora/calcular';

        $dados = {
            valorUm: $scope.valores.primeiroNumero,
            valorDois: $scope.valores.segundoNumero,
            operacao: $operacao
        };

        $http.post($url, $dados).then(function(response){
            if(response.status == 200){
                $scope.valores.resultado = response.data;
            }else{
                $scope.valores.resultado = "Ops, deu erro!!!"  
            }
            console.log(response);
            
        }, function(error){
            console.log("Ops, deu erro!!!");
            console.log(error);
            $scope.valores.resultado = error.data; 
        });
    }

    /* Função que limpa os campos */
    $scope.limpar = function(){
        $scope.valores = {
            primeiroNumero : 0,
            segundoNumero : 0,
            resultado: 0,
        };
    }
});