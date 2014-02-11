var app = angular.module("animTodo", ["ngAnimate"]);

app.controller("TodoCtrl", function($scope) {
  $scope.items = [{text: "Titillium Web", complete: false},
                 {text: "Duru Sans", complete: false},
                 {text: "Audiowide", complete: false}, 
                 {text: "New Rocker", complete: false}];

  $scope.newTodo = "";

  $scope.addTodo = function() {
    $scope.items.push({text: $scope.newTodo, complete: false});
    $scope.newTodo = "";
  };
  
  $scope.removeTodo = function(index) {
    $scope.items.splice(index, 1);
  };
  
  $scope.clearAll = function() {
    $scope.items = [];
  };
});