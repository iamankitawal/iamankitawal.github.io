'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
 

var myapp = angular
  .module('myapp', [
 
  ]);
  
  myapp.controller('control123', function($scope) {
            $scope.yourname = "Ankit Awal";
         });
         
         
  // myapp.config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: '/views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/hey', {
  //       templateUrl: '/views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
  
 
  
