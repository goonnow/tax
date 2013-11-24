'use strict';

var app = angular.module('taxApp', [
  'ngCookies',
  'ngResource'
]);

app.config(function ($routeProvider ) {
    $routeProvider
      .when('/', steps[0] )
      .when('/step/:id', steps[1] )
      .otherwise({
        redirectTo: '/'
      });

});

app.run(function($rootScope) {
    $rootScope.items = window.items;
});
