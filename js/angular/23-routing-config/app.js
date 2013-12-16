var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when("/:message", {
      templateUrl: "app.html",
      controller: "AppCtrl"
    })
    .when("/pizza", {
      template: "Youm!!!!"
    })
    .when("/dupa/:one/:two/:three", {
      templateUrl: "app.html",
      controller: "AppCtrl"
    })
    .when("/t/:a/:b/:c", {
      redirectTo: function(routeParams, path, search) {
        console.log(routeParams);
        console.log(path);
        console.log(search);

        return "/dupa/" + routeParams.a;
      }
    })
    .otherwise({
      redirectTo: "/"
    });
});


app.controller("AppCtrl", function($scope, $routeParams){
  $scope.model = {
    message: "This is my: " + $routeParams.message + ' ' +
      $routeParams.one + ' ' +
      $routeParams.two + ' ' +
      $routeParams.three
  };

});
