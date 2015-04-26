'use strict';
var blogReader = angular.module('blogReader', ['ngAnimate', 'ngResource', 'ngRoute', 'ngTouch', 'textAngular']);

blogReader.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
