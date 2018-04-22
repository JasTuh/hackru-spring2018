'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _main = require('../layouts/main');

var _main2 = _interopRequireDefault(_main);

var _UserMenu = require('../components/UserMenu');

var _UserMenu2 = _interopRequireDefault(_UserMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/katherinethai/Development/hackRU/hackru-spring2018/pages/userLoggedIn.js?entry';


var makingPlaylist = false;

var userLoggedIn = function (_React$Component) {
  (0, _inherits3.default)(userLoggedIn, _React$Component);

  function userLoggedIn() {
    (0, _classCallCheck3.default)(this, userLoggedIn);

    return (0, _possibleConstructorReturn3.default)(this, (userLoggedIn.__proto__ || (0, _getPrototypeOf2.default)(userLoggedIn)).apply(this, arguments));
  }

  (0, _createClass3.default)(userLoggedIn, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      fetch('/newPlaylist').then(function (res) {
        console.log(res);
      });
    }
  }, {
    key: 'MergeTest',
    value: function MergeTest() {
      fetch('/mergePlaylists', {
        method: 'POST',
        body: (0, _stringify2.default)({ playlists: [1, 2, 3, 4, 5, 6] })
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_main2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('nav', { className: 'navbar navbar-default userNavBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('a', { className: 'navbar-brand', href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Spotify Playlist Manager')), _react2.default.createElement('ul', { className: 'nav navbar-nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('li', { className: 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('a', { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Home')), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('a', { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'New Playlist'))), _react2.default.createElement('ul', { className: 'nav navbar-nav navbar-right', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('a', { href: '/logout', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Log Out'))))), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, makingPlaylist), _react2.default.createElement(_UserMenu2.default, { url: this.props.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement('button', { onClick: this.MergeTest, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Activate Lasers'));
    }
  }]);

  return userLoggedIn;
}(_react2.default.Component);

exports.default = userLoggedIn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJMb2dnZWRJbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhZ2UiLCJVc2VyTWVudSIsIm1ha2luZ1BsYXlsaXN0IiwidXNlckxvZ2dlZEluIiwiZmV0Y2giLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJwbGF5bGlzdHMiLCJwcm9wcyIsInVybCIsIk1lcmdlVGVzdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFJLGlCQUFKLEFBQW9COztJLEFBQ0M7Ozs7Ozs7Ozs7O3dDQUVBLEFBQ2pCO1lBQUEsQUFBTSxnQkFBTixBQUFzQixLQUFLLGVBQU8sQUFBQztnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUFLO0FBQXBELEFBQ0Q7Ozs7Z0NBQ1csQUFDVjtZQUFBLEFBQU07Z0JBQW1CLEFBQ2YsQUFDUjtjQUFNLHlCQUFlLEVBQUMsV0FBVSxDQUFBLEFBQUMsR0FBRCxBQUFHLEdBQUgsQUFBSyxHQUFMLEFBQU8sR0FBUCxBQUFTLEdBRjNDLEFBQXlCLEFBRWpCLEFBQWUsQUFBVyxBQUFXLEFBRTlDO0FBSjBCLEFBQ3ZCOzs7OzZCQUlLLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGdCQUFlLE1BQTVCLEFBQWlDO29CQUFqQztzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBRUYsOENBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUF1QjtBQUF2Qjt5QkFBdUIsY0FBQSxPQUFHLE1BQUgsQUFBUTtvQkFBUjtzQkFBQTtBQUFBO1NBRHpCLEFBQ0UsQUFBdUIsQUFDdkIsMEJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEseUJBQUksY0FBQSxPQUFHLE1BQUgsQUFBUTtvQkFBUjtzQkFBQTtBQUFBO1NBTlIsQUFJRSxBQUVFLEFBQUksQUFFTixtQ0FBQSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSx5QkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRO29CQUFSO3NCQUFBO0FBQUE7U0FYZCxBQUNJLEFBQ0UsQUFRRSxBQUNFLEFBQUksQUFJVixnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxTQWZKLEFBZUksQUFHQSxpQ0FBQSxBQUFDLG9DQUFTLEtBQUssS0FBQSxBQUFLLE1BQXBCLEFBQTBCO29CQUExQjtzQkFsQkosQUFrQkksQUFDQTtBQURBOzBCQUNBLGNBQUEsWUFBUSxTQUFTLEtBQWpCLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBcEJOLEFBQ0UsQUFtQkksQUFLUDs7Ozs7RUFyQ3VDLGdCQUFNLEE7O2tCQUEzQixBIiwiZmlsZSI6InVzZXJMb2dnZWRJbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2F0aGVyaW5ldGhhaS9EZXZlbG9wbWVudC9oYWNrUlUvaGFja3J1LXNwcmluZzIwMTgifQ==