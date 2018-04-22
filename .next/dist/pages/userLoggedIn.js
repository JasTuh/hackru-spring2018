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
    key: 'MergeTest',
    value: function MergeTest() {
      fetch('http://localhost:3000/mergePlaylists', { method: 'POST', body: (0, _stringify2.default)([1, 2, 3, 4, 5]) });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_main2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('nav', { className: 'navbar navbar-default userNavBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('a', { className: 'navbar-brand', href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'Spotify Playlist Manager')), _react2.default.createElement('ul', { className: 'nav navbar-nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('li', { className: 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('a', { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Home')), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('a', { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'New Playlist'))), _react2.default.createElement('ul', { className: 'nav navbar-nav navbar-right', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('a', { href: '/logout', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Log Out'))))), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, makingPlaylist), _react2.default.createElement(_UserMenu2.default, { url: this.props.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement('button', { onClick: this.MergeTest, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'wheeee'));
    }
  }]);

  return userLoggedIn;
}(_react2.default.Component);

exports.default = userLoggedIn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJMb2dnZWRJbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhZ2UiLCJVc2VyTWVudSIsIm1ha2luZ1BsYXlsaXN0IiwidXNlckxvZ2dlZEluIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwicHJvcHMiLCJ1cmwiLCJNZXJnZVRlc3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBSSxpQkFBSixBQUFvQjs7SSxBQUNDOzs7Ozs7Ozs7OztnQ0FFUCxBQUNWO1lBQUEsQUFBTSx3Q0FBd0MsRUFBQyxRQUFELEFBQVEsUUFBUSxNQUFLLHlCQUFlLENBQUEsQUFBQyxHQUFELEFBQUcsR0FBSCxBQUFLLEdBQUwsQUFBTyxHQUF6RixBQUE4QyxBQUFxQixBQUFlLEFBQVMsQUFDNUY7Ozs7NkJBQ1EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNJO0FBREo7QUFBQSxPQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsZ0JBQWUsTUFBNUIsQUFBaUM7b0JBQWpDO3NCQUFBO0FBQUE7U0FGSixBQUNFLEFBQ0UsQUFFRiw4Q0FBQSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBLEFBQXVCO0FBQXZCO3lCQUF1QixjQUFBLE9BQUcsTUFBSCxBQUFRO29CQUFSO3NCQUFBO0FBQUE7U0FEekIsQUFDRSxBQUF1QixBQUN2QiwwQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSx5QkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRO29CQUFSO3NCQUFBO0FBQUE7U0FOUixBQUlFLEFBRUUsQUFBSSxBQUVOLG1DQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLHlCQUFJLGNBQUEsT0FBRyxNQUFILEFBQVE7b0JBQVI7c0JBQUE7QUFBQTtTQVhkLEFBQ0ksQUFDRSxBQVFFLEFBQ0UsQUFBSSxBQUlWLGdDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLFNBZkosQUFlSSxBQUdBLGlDQUFBLEFBQUMsb0NBQVMsS0FBSyxLQUFBLEFBQUssTUFBcEIsQUFBMEI7b0JBQTFCO3NCQWxCSixBQWtCSSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxZQUFRLFNBQVMsS0FBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FwQk4sQUFDRSxBQW1CSSxBQUtQOzs7OztFQS9CdUMsZ0JBQU0sQTs7a0JBQTNCLEEiLCJmaWxlIjoidXNlckxvZ2dlZEluLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXRoZXJpbmV0aGFpL0RldmVsb3BtZW50L2hhY2tSVS9oYWNrcnUtc3ByaW5nMjAxOCJ9