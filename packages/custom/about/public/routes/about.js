(function () {
  'use strict';

  angular
    .module('mean.about')
    .config(about);

  about.$inject = ['$stateProvider'];

  function about($stateProvider) {
    $stateProvider.state('about example page', {
      url: '/about/example',
      templateUrl: 'about/views/index.html'
    });
  }

})();
