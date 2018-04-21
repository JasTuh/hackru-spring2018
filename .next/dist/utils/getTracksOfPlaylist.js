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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2dldFRyYWNrc09mUGxheWxpc3QuanMiXSwibmFtZXMiOlsiZ2V0VHJhY2tzIiwicGxheWxpc3QiLCJhY2Nlc3NUb2tlbiIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlSlNPTiIsIm5leHQiLCJuZXh0VHJhY2tzIiwidHJhY2tzIiwiaXRlbXMiLCJjb25jYXQiLCJ0b1JldHVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBLEFBS0E7Ozs7O0FBQWUsU0FBQSxBQUFTLFVBQVQsQUFBbUIsVUFBbkIsQUFBNkIsYUFBYSxBQUN2RDsrQkFBbUIsVUFBQSxBQUFDLFNBQUQsQUFBVSxRQUFXLEFBQ3RDO1VBQUEsQUFBTTtjQUFVLEFBQ04sQUFDUjs7bUNBRkYsQUFBZ0IsQUFFTCxBQUNrQjtBQURsQixBQUNQO0FBSFksQUFDZCxPQURGLEFBS0csS0FBSyxvQkFBQTthQUFZLFNBQVosQUFBWSxBQUFTO0FBTDdCLE9BQUEsQUFNRyxLQUFLLHdCQUFnQixBQUNwQjtVQUFJLGFBQUosQUFBaUIsTUFBSyxBQUNwQjtrQkFBVSxhQUFWLEFBQXVCLE1BQXZCLEFBQTZCLGFBQTdCLEFBQTBDLEtBQUssVUFBQSxBQUFDLFlBQWUsQUFDN0Q7Y0FBSSxTQUFRLGFBQVosQUFBeUIsQUFDekI7bUJBQVMsT0FBQSxBQUFPLE9BQU8sV0FBdkIsQUFBUyxBQUF5QixBQUNsQztjQUFNLFdBQU4sQUFBaUIsQUFDakI7bUJBQUEsQUFBUyxRQUFULEFBQWlCLEFBQ2pCO2tCQUFBLEFBQVEsQUFDVDtBQU5ELEFBT0Q7QUFSRCxhQVNLLEFBQ0g7Z0JBQUEsQUFBUSxBQUNUO0FBQ0Y7QUFuQkgsQUFvQkQ7QUFyQkQsQUFBTyxBQXNCUixHQXRCUSIsImZpbGUiOiJnZXRUcmFja3NPZlBsYXlsaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXRoZXJpbmV0aGFpL0RldmVsb3BtZW50L2hhY2tSVS9oYWNrcnUtc3ByaW5nMjAxOCJ9