'use strict';

angular.module('myApp')
  .controller('MainCtrl', ['$scope', function($scope) {
  	$scope.welcome = 'Welcome to your App!';
  	$scope.buttonText = 'This is your Button';
  }]);
