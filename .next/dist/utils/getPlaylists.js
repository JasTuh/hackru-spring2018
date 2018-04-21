'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPlaylists;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPlaylistsHelper(link, accessToken) {
  return new _promise2.default(function (resolve, reject) {
    fetch(link, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    }).then(function (response) {
      return response.json();
    }).then(function (responseJSON) {
      if (responseJSON.next) {
        getPlaylistsHelper(responseJSON.next, accessToken).then(function (nextTracks) {
          var tracks = responseJSON.items;
          tracks = tracks.concat(nextTracks.items);
          var toReturn = responseJSON;
          toReturn.items = tracks;
          resolve(toReturn);
        });
      } else {
        resolve(responseJSON);
      }
    });
  });
}

function getPlaylists(accessToken) {
  var url = 'https://api.spotify.com/v1/me/playlists?limit=50';
  return getPlaylistsHelper(url, accessToken);
}