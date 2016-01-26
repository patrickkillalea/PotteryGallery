(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.about')
    .controller('AboutController', AboutController);

  AboutController.$inject = ['$scope', 'Global', 'About'];

  function AboutController($scope, Global, About) {
    $scope.global = Global;
    $scope.package = {
      name: 'about'
    };
  }
})();