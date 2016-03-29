App.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'Client/Views/index.html',
        }).state('dishconfig', {
            url: '/dishconfig',
            templateUrl: 'Client/views/dishesconfig.html',
        });

    $locationProvider.html5Mode(true);

});