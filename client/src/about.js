'use strict';

angular.module('myApp')
  .controller('AboutCtrl', ['$scope','$http', function($scope,$http) {
    $scope.header = 'I am ready to be built!';	
  }]);
