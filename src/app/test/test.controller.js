(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('TestController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $scope,_FinProjects) {

  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
  _FinProjects.index().success(function(data){

  });

  
  }
})();