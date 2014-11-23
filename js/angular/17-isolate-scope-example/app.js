var app = angular.module('phoneApp', []);

app.controller('AppController', function($scope){
  $scope.leaveVoicemail = function(number, message){
    alert('Number: ' + number + ' said: ' + message);
  };
});

app.directive('phone', function(){
  return {
    restrict: 'E',
    scope: {
      number: '@',
      network: '=',
      makeCall: '&'
    },
    template: '<div>' +
      'Number: {{number}}' +
      'Network:<select class="form-control" ng-model="network" ng-options="net for net in networks"></select>' +
      '</div>' +
      '<input class="form-control" type="text" ng-model="value">' +
      '<div class="btn btn-primary" ng-click="makeCall({message: value, number: number})">' +
      'Call Home!' +
      '</div>',


    link: function(scope){
      scope.networks = ["Verizon", "AT&T", "Sprint"];
      scope.network = scope.networks[0];
    }
  };
});
