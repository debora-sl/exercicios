// $scope é para comunicação entre JS e HTML
angular.module('meuApp')
.controller('CalculadoraIdadeController', function($scope) {
    console.log("Calduladora de idade funcionando")

    $scope.informacoes = {
        nome: '',
        dataDeNascimento: '',
        idadeCalculada: ''
    }

    // Criando o Objeto pessoas[]
    $scope.pessoas = []

    $scope.calcularIdade = function(){ 
        // Pegando o nome do campo input
        nomeInserido = $scope.informacoes.nome;

        // Pegando a data de nascimento e o dia atual
        dataNascimento = new Date($scope.informacoes.dataDeNascimento);
        hoje = new Date();
        
        // Pegando o ano, mes e dia
        anos = hoje.getFullYear() - dataNascimento.getFullYear();
        meses = hoje.getMonth() - dataNascimento.getMonth();
        dias = hoje.getDate() - dataNascimento.getDate();

        // Ajustando se o mês ou dia ainda não ocorreram
        if(dias < 0){
            meses--;
            dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate(); // dias do mês anterior
        }
        if(meses < 0){
            anos --;
            meses += 12;
        }
        $scope.informacoes.idadeCalculada = `${nomeInserido} tem ${anos} anos, ${meses} meses e ${dias} dias.`;

        $scope.pessoas.push(angular.copy($scope.informacoes));

        // Limpando os campos
        $scope.informacoes = {
            nome: '',
            dataDeNascimento: '',
            idadeCalculada: ''
        }
    }

});