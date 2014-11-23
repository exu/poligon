var app = angular.module("behaviorApp", []);

app.directive("enter", function(){
 return function(scope, element, attrs) {
      element.bind("mouseenter", function(){
        console.log("I'm inside of you!");
          element.addClass(attrs.enter);
      });
    };
});

app.directive("leave", function(){
 return function(scope, element, attrs) {
      element.bind("mouseleave", function(){
        console.log("I'm leaving on a jet plane!");
          element.removeClass(attrs.enter);
      });
    };
});
