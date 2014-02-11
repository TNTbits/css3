angular.module('fontTester.controllers', [])
  .controller('FontCtrl', ['$scope', 'GoogleWebfontsService', function($scope, GoogleWebfontsService) {

    $scope.data = {};
   
    GoogleWebfontsService.getFonts(function(data) {
       $scope.fonts = data.items;
    });

    $scope.items = [{text: "Titillium Web", complete: false},
                   {text: "Duru Sans", complete: false},
                   {text: "Ubuntu Condensed", complete: false},
                   {text: "Audiowide", complete: false}, 
                   {text: "New Rocker", complete: false}];

    $scope.newFont = "";

    $scope.addFont = function() {
      $scope.items.push({text: $scope.newFont, complete: false});
      $scope.newFont = "";
    };
    
    $scope.removeFont = function(index) {
      $scope.items.splice(index, 1);
    };
    
    $scope.clearAll = function() {
      $scope.items = [];
    };

    $scope.getUrl = function () {
      var res = "";
      for (var i = $scope.items.length - 1; i >= 0; i--) {
        res += $scope.items[i].text.replace(" ","+") + "|";
      };

      return "https://www.google.com/fonts#ReviewPlace:refine/Collection:" + res;
    }
}]);
