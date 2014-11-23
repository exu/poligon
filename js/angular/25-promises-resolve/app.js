var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',
    {
      templateUrl: "app.html",
      controller: "AppCtrl",
      resolve: {
        prepData: appCtrl.prepData,
        loadData: appCtrl.loadData
      }
    }
  );
});



var appCtrl = app.controller("AppCtrl", function ($scope, $route, $q) {

  var defer = $q.defer();

  console.log($route);

  defer.promise
    .then(function (weapon) {
      alert("You can have my " + weapon);
      return "bow";
    })
    .then(function (weapon) {
      alert("And my " + weapon);
      return "axe";
    })
    .then(function (weapon) {
      alert("And my " + weapon);
    });


  defer.resolve();

  $scope.model = {
    message: "This is my app!!!"
  };
});


appCtrl.prepData = function ($q, $timeout) {
  var defer = $q.defer();

  $timeout(function() {
    defer.resolve("prepData");
  }, 2000);

  return defer.promise;
};

appCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();

  $timeout(function() {
    defer.resolve("loadData");
  }, 2000);

  return defer.promise;
};
