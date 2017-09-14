angular.module('shadeApp',['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                // controller: 'mainCtrl'
            })
            .state('shades', {
                url: '/shades',
                templateUrl: './views/shades.html',
                // controller: 'mainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: './views/about.html',
                // controller: 'mainCtrl'
            })
            .state('results', {
                url: '/results/:type',
                templateUrl: './views/results.html',
                controller: 'mainCtrl'
            });
    
        $urlRouterProvider
            .otherwise('/');
    })