var app = angular.module('phoneApp', []);

var phoneAppStuff = {
  controllers : {},
  directives : {}
};


phoneAppStuff.controllers.AppCtrl = function ($scope) {
  this.sayHi = function () {
    alert("hi");
  };

  return $scope.AppCtrl = this;
};


phoneAppStuff.directives.panel = function () {
  return {
    restrict: "E"
  };
};

app.directive(phoneAppStuff.directives);
app.controller(phoneAppStuff.controllers);
