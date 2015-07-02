var miAppControllers = angular.module('miAppControllers', []);



miAppControllers.controller('ControladorCompeticion', function ($scope, $http) {


  $scope.competicion = competicion;
});



miAppControllers.controller('ControladorPrincipal', ['$scope', '$routeParams', '$http', 
  function ($scope, $routeParams, $http) {


    $scope.nombre = 'Busca en GitHub';
  
  }]);


miAppControllers.controller('ControladorResultados', ['$scope', '$routeParams', '$location', '$anchorScroll', 'GitHubService',
  function ($scope, $routeParams,  $location, $anchorScroll, GitHubService) {

    var query = $routeParams.query;
    var page = $routeParams.page;
    var perpage = $routeParams.perpage;
    
    if (page != null) {
        pageSig = parseInt(page) + 1;
        pageAnt = parseInt(page) -1;

    } else {
        pageSig = 2;
        pageAnt = 1;
        $scope.pagina = 1;
        page= 1;
    };
    
    $scope.pagina = page;
 
    var paginasTotal;

    GitHubService.getGitHub( query , page , perpage).success(function (data) {
      $scope.data = data;
      paginasTotal = Math.ceil(parseInt(data.total_count)/parseInt(perpage));
      $scope.paginasTotal = paginasTotal;
      console.log(data);
    }).error(function (data, status, headers, config) {
              //Controlar el error
    });

   


    $location.hash('bottom');
    $anchorScroll();

    
    var pageSig;
    var pageAnt;

    if (page != null) {
        pageSig = parseInt(page) + 1;
        pageAnt = parseInt(page) -1;

    } else {
        pageSig = 2;
        pageAnt = 1;
        $scope.pagina = 1;
    };

    if (pageAnt == 0 ) {
        pageAnt = 1;
    };

    $scope.paginaSiguiente = function() {
            $location.path('/'+query+'/'+perpage+ '/'+pageSig);
    };

    $scope.paginaAnterior = function() {
       $location.path('/'+query+'/'+perpage+ '/'+pageAnt);
    };
      }]);



  