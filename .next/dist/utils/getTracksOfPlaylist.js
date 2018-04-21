'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTracks;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * getTracksOfPlaylist will take in a playlist href
 * a list of tracks 
 */

function getTracks(playlist, accessToken) {
  return new _promise2.default(function (resolve, reject) {
    fetch(playlist, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    }).then(function (response) {
      return response.json();
    }).then(function (responseJSON) {
      if (responseJSON.next) {
        getTracks(responseJSON.next, accessToken).then(function (nextTracks) {
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