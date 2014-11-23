var app = angular.module('choreApp', []);


app.controller("ChoreCtrl", function($scope){
  $scope.logChore = function(chore){
    alert(chore + " is done!");
  };
});

app.directive("kid", function() {
  return {
    restrict: "E",
    scope: {
        done: "&"
      },
    template: '<input type="text" ng-model="chore">' +
      '{{chore}}' +
      '<div class="btn btn-primary" ng-click="done({chore: chore})">I\'m done</div>'
  };
});


// @ will be passed as string
app.directive("drink", function () {
  return {
    scope: {
      flavor: "@"
    },
    template: '<div>{{ flavor }}</div>'
  };
});


// = will be passed as object
app.directive("coffe", function () {
  return {
    scope: {
      flavor: "="
    },
    template: '<div>{{ flavor }}</div>'
  };
});


app.controller("AppCtrl", function ($scope) {
  $scope.callHome = function (message) {
    alert(message);
  };
});

// & will
app.directive("phone", function () {
  return {
    scope: {
      dial: "&"
    },
    template: '<input type="text" ng-model="value">' +
      '<div class="button" ng-click="dial({message:value})">' +
      'Call home!</div>',
  };
});
