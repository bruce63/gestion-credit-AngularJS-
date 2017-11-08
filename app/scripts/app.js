'use strict';

/**
 * @ngdoc overview
 * @name atelierAngularJsApp
 * @description
 * # atelierAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('atelierAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
