'use strict';

var app = angular.module('taxApp', [
  'ngCookies',
  'ngResource'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
