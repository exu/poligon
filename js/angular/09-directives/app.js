var app = angular.module("superhero", []);

app.directive("batman", function(){
    return {
        restrict: "E",
        link: function(){
            console.log(this, "I'm batman - I'm killing some enemies");
        }
    };
});

app.directive("superman", function(){
    return {
        restrict: "A",
        link: function(){
            console.log(this, "I'm superman - I'm working");
        }
    };
});

app.directive("superwoman", function(){
    return {
        restrict: "C",
        link: function(){
            console.log(this, "I'm superwoman - I'm using washing machine");
        }
    };
});
