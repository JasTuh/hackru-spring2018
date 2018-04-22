webpackHotUpdate(6,{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(562);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _main = __webpack_require__(555);

var _main2 = _interopRequireDefault(_main);

var _UserMenu = __webpack_require__(566);

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
          lineNumber: 14
        }
      }, _react2.default.createElement('nav', { className: 'navbar navbar-default userNavBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('a', { className: 'navbar-brand', href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'Spotify Playlist Merger')), _react2.default.createElement('ul', { className: 'nav navbar-nav navbar-right', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('a', { href: '/logout', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Log Out'))))), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, makingPlaylist), _react2.default.createElement(_UserMenu2.default, { url: this.props.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }));
    }
  }]);

  return userLoggedIn;
}(_react2.default.Component);

exports.default = userLoggedIn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJMb2dnZWRJbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhZ2UiLCJVc2VyTWVudSIsIm1ha2luZ1BsYXlsaXN0IiwidXNlckxvZ2dlZEluIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwicHJvcHMiLCJ1cmwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBR1AsSUFBSSxpQkFBSixBQUFvQjs7SSxBQUNDOzs7Ozs7Ozs7OztnQ0FFUCxBQUNWO1lBQUEsQUFBTSx3Q0FBd0MsRUFBQyxRQUFELEFBQVEsUUFBUSxNQUFLLHlCQUFlLENBQUEsQUFBQyxHQUFELEFBQUcsR0FBSCxBQUFLLEdBQUwsQUFBTyxHQUF6RixBQUE4QyxBQUFxQixBQUFlLEFBQVMsQUFDNUY7Ozs7NkJBQ1EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNJO0FBREo7QUFBQSxPQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsZ0JBQWUsTUFBNUIsQUFBaUM7b0JBQWpDO3NCQUFBO0FBQUE7U0FGSixBQUNFLEFBQ0UsQUFFRiw2Q0FBQSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSx5QkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRO29CQUFSO3NCQUFBO0FBQUE7U0FQZCxBQUNJLEFBQ0UsQUFJRSxBQUNFLEFBQUksQUFJVixnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxTQVhKLEFBV0ksQUFHQSxpQ0FBQSxBQUFDLG9DQUFTLEtBQUssS0FBQSxBQUFLLE1BQXBCLEFBQTBCO29CQUExQjtzQkFmTixBQUNFLEFBY0ksQUFHUDtBQUhPOzs7Ozs7RUFyQmdDLGdCQUFNLEE7O2tCQUEzQixBIiwiZmlsZSI6InVzZXJMb2dnZWRJbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2F0aGVyaW5ldGhhaS9EZXZlbG9wbWVudC9oYWNrUlUvaGFja3J1LXNwcmluZzIwMTgifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/katherinethai/Development/hackRU/hackru-spring2018/pages/userLoggedIn.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/katherinethai/Development/hackRU/hackru-spring2018/pages/userLoggedIn.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(109)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/userLoggedIn")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi44Y2RiZDI0MDUxMjEwYzMyM2NjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlckxvZ2dlZEluLmpzPzk4MGM0MGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlIGZyb20gJy4uL2xheW91dHMvbWFpbic7XG5pbXBvcnQgVXNlck1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyTWVudSc7XG5cblxudmFyIG1ha2luZ1BsYXlsaXN0PSBmYWxzZTsgXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB1c2VyTG9nZ2VkSW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgTWVyZ2VUZXN0KCkge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVyZ2VQbGF5bGlzdHMnLCB7bWV0aG9kOidQT1NUJywgYm9keTpKU09OLnN0cmluZ2lmeShbMSwyLDMsNCw1XSl9KTsgXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCB1c2VyTmF2QmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlNwb3RpZnkgUGxheWxpc3QgTWVyZ2VyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2xvZ291dFwiPkxvZyBPdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge21ha2luZ1BsYXlsaXN0fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8VXNlck1lbnUgdXJsPXt0aGlzLnByb3BzLnVybH0gLz5cbiAgICAgICAgPC9QYWdlPlxuICAgICkgXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3VzZXJMb2dnZWRJbi5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUdBO0FBSEE7Ozs7OztBQXJCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==