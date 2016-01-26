(function () {
  'use strict';

  angular
    .module('mean.gallery')
    .factory(Gallery);

  Gallery.$inject = [];

  function Gallery() {
    return {
      name: 'gallery'
    };
  }
})();
