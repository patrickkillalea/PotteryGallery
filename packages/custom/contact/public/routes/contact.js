(function () {
  'use strict';

  angular
    .module('mean.contact')
    .config(contact);

  contact.$inject = ['$stateProvider'];

  function contact($stateProvider) {
    $stateProvider.state('contact example page', {
      url: '/contact/example',
      templateUrl: 'contact/views/index.html'
    });
  }

})();
