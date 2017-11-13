var app = angular.module('mapDashboard', []);
app.run(function ($rootScope) {
    $rootScope._ = window._;
});

app.controller('mainDash',['$scope','$http',
  function($scope, $http){
      $scope.testVar = "works angular";
  }]);
