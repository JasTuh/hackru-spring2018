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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2dldFBsYXlsaXN0cy5qcyJdLCJuYW1lcyI6WyJnZXRQbGF5bGlzdHNIZWxwZXIiLCJsaW5rIiwiYWNjZXNzVG9rZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZUpTT04iLCJuZXh0IiwibmV4dFRyYWNrcyIsInRyYWNrcyIsIml0ZW1zIiwiY29uY2F0IiwidG9SZXR1cm4iLCJnZXRQbGF5bGlzdHMiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxTQUFBLEFBQVMsbUJBQVQsQUFBNEIsTUFBNUIsQUFBa0MsYUFBYSxBQUM3QzsrQkFBbUIsVUFBQSxBQUFDLFNBQUQsQUFBVSxRQUFXLEFBQ3RDO1VBQUEsQUFBTTtjQUFNLEFBQ0YsQUFDUjs7bUNBRkYsQUFBWSxBQUVELEFBQ2tCO0FBRGxCLEFBQ1A7QUFIUSxBQUNWLE9BREYsQUFLRyxLQUFLLG9CQUFBO2FBQVksU0FBWixBQUFZLEFBQVM7QUFMN0IsT0FBQSxBQU1HLEtBQUssd0JBQWdCLEFBQ3BCO1VBQUksYUFBSixBQUFpQixNQUFLLEFBQ3BCOzJCQUFtQixhQUFuQixBQUFnQyxNQUFoQyxBQUFzQyxhQUF0QyxBQUFtRCxLQUFLLFVBQUEsQUFBQyxZQUFlLEFBQ3RFO2NBQUksU0FBUyxhQUFiLEFBQTBCLEFBQzFCO21CQUFTLE9BQUEsQUFBTyxPQUFPLFdBQXZCLEFBQVMsQUFBeUIsQUFDbEM7Y0FBTSxXQUFOLEFBQWlCLEFBQ2pCO21CQUFBLEFBQVMsUUFBVCxBQUFpQixBQUNqQjtrQkFBQSxBQUFRLEFBQ1Q7QUFORCxBQU9EO0FBUkQsYUFTSyxBQUNIO2dCQUFBLEFBQVEsQUFDVDtBQUNGO0FBbkJILEFBb0JEO0FBckJELEFBQU8sQUFzQlIsR0F0QlE7QUF3QlQ7O0FBQWUsU0FBQSxBQUFTLGFBQVQsQUFBc0IsYUFBYSxBQUNoRDtNQUFNLE1BQU4sQUFBWSxBQUNaO1NBQU8sbUJBQUEsQUFBbUIsS0FBMUIsQUFBTyxBQUF3QixBQUNoQyIsImZpbGUiOiJnZXRQbGF5bGlzdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thdGhlcmluZXRoYWkvRGV2ZWxvcG1lbnQvaGFja1JVL2hhY2tydS1zcHJpbmcyMDE4In0=