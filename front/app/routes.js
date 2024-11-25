// Arquivo de rotas 
angular.module('meuApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    //Redirecionando para a dashboard por padrão
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            abstract: true,
            templateUrl: 'app/views/partials/comHeaderMenuEFooter.html', // Template com header, sidebar e footer
        })
        .state('main.home', {
            url: '/',
            templateUrl: 'app/views/home.html', // Template da dashboard
            controller: 'testeController' // Controller para a dashboard
        })
        .state('main.trocarNomes', {
            url: '/trocarNomes',
            templateUrl: 'app/views/trocarNomes.html', // Template do trocar nomes
            controller: 'TrocarNomesController' // Controller para do trocar nomes
        })
        .state('main.calculadora', {
            url: '/calculadora',
            templateUrl: 'app/views/calculadora.html', // Template da calculadora
            controller: 'CalculadoraController' // Controller para da calculadora
        })
        .state('main.contador', {
            url: '/contador',
            templateUrl: 'app/views/contador.html', // Template do contador
            controller: 'ContadorController' // Controller para do contador
        })
        .state('main.calculadoraImc', {
            url: '/calculadoraImc',
            templateUrl: 'app/views/calculadoraImc.html', // Template da Calculadora Imc
            controller: 'CalculadoraImcController' // Controller para da Calculadora Imc
        })
        .state('main.calculadoraIdade', {
            url: '/calculadoraIdade',
            templateUrl: 'app/views/calculadoraIdade.html', // Template da Calculadora de Idade
            controller: 'CalculadoraIdadeController' // Controller para da Calculadora de Idade
        })
        .state('main.palindromo', {
            url: '/palindromo',
            templateUrl: 'app/views/palindromo.html', // Template da Calculadora de Idade
            controller: 'PalindromoController' // Controller para da Calculadora de Idade
        })
        .state('main.conversorDeUnidade', {
            url: '/conversorDeUnidade',
            templateUrl: 'app/views/conversorDeUnidade.html', // Template da Calculadora de Idade
            controller: 'ConversorDeUnidadeController' // Controller para da Calculadora de Idade
        })

       /* .state('main.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/partials/dashboard.html', // Template da dashboard
            controller: 'DashboardController' // Controller para a dashboard
        }) */ 
       

});
