(function () {
  'use strict';

  angular
    .module('mean.gallery')
    .config(gallery);

  gallery.$inject = ['$stateProvider'];

  function gallery($stateProvider) {
    $stateProvider.state('gallery example page', {
      url: '/gallery/example',
      templateUrl: 'gallery/views/index.html'
    });
  }

})();
