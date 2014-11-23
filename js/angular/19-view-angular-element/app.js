var app = angular.module("app", []);

app.directive("dumbPassword", function () {
  return {
    restrict: "E",
    replace: true,
    template: '<div>'+
      '<input type="text" ng-model="model.input">'+
      '<div>{{ model.input }}</div>'+
      '</div>',
    link: function (scope, element) {
      scope.$watch("model.input", function (value) {
        if(value === "password") {
          element.children(1).toggleClass("alert-box alert");
        }
      });
    }
  };
});
