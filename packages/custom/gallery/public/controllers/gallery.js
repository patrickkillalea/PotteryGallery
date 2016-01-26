(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.gallery')
    .controller('GalleryController', GalleryController);

  GalleryController.$inject = ['$scope', 'Global', 'Gallery'];

  function GalleryController($scope, Global, Gallery) {
    $scope.global = Global;
    $scope.package = {
      name: 'gallery'
    };
  }
})();