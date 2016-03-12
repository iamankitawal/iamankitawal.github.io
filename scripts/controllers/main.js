'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('myapp')
  .controller('MainCtrl', function ($scope) {
    $scope.variable = [
      'Hello',
      'I am Ankit',
      'nice to meet you!!'
    ];
  });
