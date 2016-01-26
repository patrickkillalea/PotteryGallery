(function () {
  'use strict';

  angular
    .module('mean.about')
    .factory(About);

  About.$inject = [];

  function About() {
    return {
      name: 'about'
    };
  }
})();
