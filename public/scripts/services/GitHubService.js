var miAppControllers = angular.module('miAppControllers');

miAppControllers.factory("GitHubService", function ($http) {
  var getGitHub = function(query, page, perpage) {
     return $http.get('https://api.github.com/search/repositories?q=' + query + '&page='+ page +'&per_page='+ perpage);  
   };

   return {
    getGitHub:getGitHub
   }

})