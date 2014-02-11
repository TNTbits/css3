angular.module('fontTester.services', [])
  .factory('GoogleWebfontsService', function($http) {
   return {
     getFonts: function(callback) {
       $http.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDCb8qiRwb8O1lBSQf1oOAlWdwItrqE7H8').success(callback);
     }
   }
});