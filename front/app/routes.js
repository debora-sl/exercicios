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

       /* .state('main.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/partials/dashboard.html', // Template da dashboard
            controller: 'DashboardController' // Controller para a dashboard
        }) */ 
       

});
