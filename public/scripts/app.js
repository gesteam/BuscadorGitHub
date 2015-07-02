var miApp = angular.module('miApp', [
  'ngRoute',
  'miAppControllers'
]);
miApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
             redirectTo: '/index'
        }).
        when('/index', {
             templateUrl: '/views/principal.html',
             controller: 'ControladorPrincipal'
        }).
        when('/:query/:perpage/:page', {
            templateUrl: '/views/resultados.html',
            controller: 'ControladorResultados'
        }).
        when('/:query/:perpage', {
            templateUrl: '/views/resultados.html',
            controller: 'ControladorResultados'
        }).
         otherwise({
            redirectTo: '/'
        });
  }]);