var mainApp = angular.module("mainApp", ['ngRoute']);
         mainApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/main', {
               templateUrl: 'views/main.html',
               controller: 'MainController'
            }).
            
            when('/cars', {
               templateUrl: 'views/main1.html',
               controller: 'ViewStudentsController'
            }).
            
            otherwise({
               redirectTo: '/main'
            });
         }]);
         
         mainApp.controller('MainController', function($scope) {
            $scope.message = "Cars";
         });
         
         mainApp.controller('ViewStudentsController', function($scope) {
            $scope.message = "This page will be used to display all the students";
         });
			
