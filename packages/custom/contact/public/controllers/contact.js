(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.contact')
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$scope', 'Global', 'Contact'];

  function ContactController($scope, Global, Contact) {
    $scope.global = Global;
    $scope.package = {
      name: 'contact'
    };
  }
})();