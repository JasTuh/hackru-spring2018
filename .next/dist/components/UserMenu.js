'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-fetch');

var _getPlaylists = require('../utils/getPlaylists');

var _getPlaylists2 = _interopRequireDefault(_getPlaylists);

var _getTracksOfPlaylist = require('../utils/getTracksOfPlaylist');

var _getTracksOfPlaylist2 = _interopRequireDefault(_getTracksOfPlaylist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/katherinethai/Development/hackRU/hackru-spring2018/components/UserMenu.js';


var UserMenu = function (_Component) {
  (0, _inherits3.default)(UserMenu, _Component);

  function UserMenu(props) {
    (0, _classCallCheck3.default)(this, UserMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UserMenu.__proto__ || (0, _getPrototypeOf2.default)(UserMenu)).call(this, props));

    _this.state = {
      playlists: []
    };
    return _this;
  }

  (0, _createClass3.default)(UserMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _getPlaylists2.default)(this.props.url.query.accessToken).then(function (res) {
        console.log(res);
        _this2.setState({
          playlists: res
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.playlists.items) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        });
      }
      // const row = () => <div class="row">;
      // const col = () => <div class="col-md-3">;
      // let x = 0;

      // for (var i = 0; i < this.state.playlists.items.length; i++)

      var listItems = this.state.playlists.items.map(function (playlist) {
        return _react2.default.createElement(AlbumSquare, { playlist: playlist, childClass: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        });
      });
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, listItems);
    }
  }]);

  return UserMenu;
}(_react.Component);

exports.default = UserMenu;


function AlbumSquare(props) {
  return _react2.default.createElement('div', { className: props.childClass + ' playlistBlock', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(AlbumImage, { playlist: props.playlist, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), _react2.default.createElement('h3', { className: 'playlistName', __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, props.playlist.name));
}
function AlbumImage(props) {
  if (!props.playlist.images) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    });
  } else {
    return _react2.default.createElement('img', { src: props.playlist.images[0].url, className: 'playlistImage', __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlck1lbnUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRQbGF5bGlzdHMiLCJnZXRUcmFja3NPZlBsYXlsaXN0IiwiVXNlck1lbnUiLCJwcm9wcyIsInN0YXRlIiwicGxheWxpc3RzIiwidXJsIiwicXVlcnkiLCJhY2Nlc3NUb2tlbiIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJpdGVtcyIsImxpc3RJdGVtcyIsIm1hcCIsInBsYXlsaXN0IiwiQWxidW1TcXVhcmUiLCJjaGlsZENsYXNzIiwibmFtZSIsIkFsYnVtSW1hZ2UiLCJpbWFnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCOztBQUNBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SSxBQUVjO29DQUNuQjs7b0JBQUEsQUFBWSxPQUFPO3dDQUFBOzswSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztpQkFGWSxBQUVqQixBQUFhLEFBQ0E7QUFEQSxBQUNYO1dBRUg7Ozs7O3dDQUNtQjttQkFDbEI7O2tDQUFhLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQTVCLEFBQWtDLGFBQWxDLEFBQStDLEtBQUssVUFBQSxBQUFDLEtBQVEsQUFDM0Q7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtlQUFBLEFBQUs7cUJBQUwsQUFBYyxBQUNELEFBRWQ7QUFIZSxBQUNaO0FBSEosQUFNRDs7Ozs2QkFJUSxBQUNQO1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQWhCLEFBQTBCLE9BQU8sQUFDL0I7OztzQkFBUTt3QkFBUixBQUFRLEFBQ1Q7QUFEUztBQUFBLFNBQUE7QUFFVjtBQUNBO0FBQ0E7QUFFQTs7QUFFQTs7VUFBTSxpQkFBWSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLE1BQXJCLEFBQTJCLElBQUksVUFBQSxBQUFDLFVBQUQ7NkNBQy9DLEFBQUMsZUFBWSxVQUFiLEFBQXVCLFVBQVUsWUFBakMsQUFBNEM7c0JBQTVDO3dCQUQrQyxBQUMvQztBQUFBO1NBQUE7QUFERixBQUFrQixBQUdsQixPQUhrQjs2QkFJaEIsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxFQURGLEFBQ0UsQUFJSDs7Ozs7QUFwQ21DLEE7O2tCQUFqQixBOzs7QUF1Q3JCLFNBQUEsQUFBUyxZQUFULEFBQXFCLE9BQU0sQUFDM0I7eUJBQ0UsY0FBQSxTQUFLLFdBQVcsTUFBQSxBQUFNLGFBQXRCLEFBQW1DO2dCQUFuQztrQkFBQSxBQUNFO0FBREY7R0FBQSxnQ0FDRSxBQUFDLGNBQVcsVUFBWSxNQUF4QixBQUE4QjtnQkFBOUI7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQSxRQUFJLFdBQUosQUFBYztnQkFBZDtrQkFBQSxBQUE4QjtBQUE5QjtXQUE4QixBQUFNLFNBSHhDLEFBQ0UsQUFFRSxBQUE2QyxBQUdoRDs7QUFDRCxTQUFBLEFBQVMsV0FBVCxBQUFvQixPQUFPLEFBQ3ZCO01BQUksQ0FBQyxNQUFBLEFBQU0sU0FBWCxBQUFvQixRQUFRLEFBQzFCOzs7a0JBQU87b0JBQVAsQUFBTyxBQUNSO0FBRFE7QUFBQSxLQUFBO0FBRFQsU0FFTyxBQUNMO2tEQUFZLEtBQUssTUFBQSxBQUFNLFNBQU4sQUFBZSxPQUFmLEFBQXNCLEdBQWhDLEFBQW1DLEtBQUssV0FBeEMsQUFBa0Q7a0JBQWxEO29CQUFQLEFBQU8sQUFDUjtBQURRO0tBQUE7QUFFViIsImZpbGUiOiJVc2VyTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2F0aGVyaW5ldGhhaS9EZXZlbG9wbWVudC9oYWNrUlUvaGFja3J1LXNwcmluZzIwMTgifQ==