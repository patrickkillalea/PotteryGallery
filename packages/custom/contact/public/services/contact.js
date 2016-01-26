(function () {
  'use strict';

  angular
    .module('mean.contact')
    .factory(Contact);

  Contact.$inject = [];

  function Contact() {
    return {
      name: 'contact'
    };
  }
})();
