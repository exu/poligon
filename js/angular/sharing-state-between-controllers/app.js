var myApp = angular.module('myApp',[]);

myApp.factory('Data', function () {
  return {
      message: "I'm data from a service"
  };
});


myApp.controller('FirstCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.data = Data;
}]);

myApp.controller('SecondCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.data = Data;
}]);
