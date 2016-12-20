'use strict';

/**
 * @ngdoc function
 * @name musicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the musicApp
 */
angular.module('musicApp')
  .controller('MainCtrl', function (spotify) {
    var ctrl = this;
    ctrl.results = [];

    spotify.getAlbums().then(function(albums)
    {
      ctrl.results = albums.items;
    });
  });
