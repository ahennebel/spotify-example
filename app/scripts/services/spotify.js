'use strict';

/**
 * @ngdoc service
 * @name musicApp.spotify
 * @description
 * # spotify
 * Service in the musicApp.
 */
angular.module('musicApp')
  .service('spotify', function ($http) {
    var service = this;

    service.getAlbums = function()
    {
      return $http.get('/datas/albums.json').then(function(response)
      {
        return response.data.albums;
      });
    };


  });
