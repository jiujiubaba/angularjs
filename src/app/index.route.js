(function() {
  'use strict';

  angular
    .module('angularjs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('test', {
        url: '/test',
        templateUrl: 'app/test/test.html',
        controller: 'TestController',
        controllerAs: 'test'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
