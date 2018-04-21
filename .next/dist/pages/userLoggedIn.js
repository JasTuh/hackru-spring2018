'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('../layouts/main');

var _main2 = _interopRequireDefault(_main);

var _UserMenu = require('../components/UserMenu');

var _UserMenu2 = _interopRequireDefault(_UserMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jasontuhy/projects/spotify-playlist-manager/pages/userLoggedIn.js?entry';

exports.default = function (props) {
  return _react2.default.createElement(_main2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('nav', { className: 'navbar navbar-default userNavBar', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', { className: 'container-fluid', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', { className: 'navbar-brand', href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Spotify Playlist Manager')), _react2.default.createElement('ul', { className: 'nav navbar-nav', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('li', { className: 'active', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Home')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'New Playlist'))), _react2.default.createElement('ul', { className: 'nav navbar-nav navbar-right', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('a', { href: '/logout', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Log Out'))))), _react2.default.createElement(_UserMenu2.default, { url: props.url, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }));
};