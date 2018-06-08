angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main.html'
  })
  
  .otherwise({
    redirectTo: '/'
  })
});
