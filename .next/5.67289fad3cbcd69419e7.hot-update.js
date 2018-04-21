webpackHotUpdate(5,{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

__webpack_require__(553);

var _getPlaylists = __webpack_require__(561);

var _getPlaylists2 = _interopRequireDefault(_getPlaylists);

var _getTracksOfPlaylist = __webpack_require__(562);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/katherinethai/Development/hackRU/hackru-spring2018/components/UserMenu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/katherinethai/Development/hackRU/hackru-spring2018/components/UserMenu.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42NzI4OWZhZDNjYmNkNjk0MTllNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyTWVudS5qcz80OTlhOTQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IGdldFBsYXlsaXN0cyBmcm9tICcuLi91dGlscy9nZXRQbGF5bGlzdHMnO1xuaW1wb3J0IGdldFRyYWNrc09mUGxheWxpc3QgZnJvbSAnLi4vdXRpbHMvZ2V0VHJhY2tzT2ZQbGF5bGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBsYXlsaXN0czogW10sXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBnZXRQbGF5bGlzdHModGhpcy5wcm9wcy51cmwucXVlcnkuYWNjZXNzVG9rZW4pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwbGF5bGlzdHM6IHJlcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUucGxheWxpc3RzLml0ZW1zKSB7XG4gICAgICByZXR1cm4gKDxkaXYgLz4pO1xuICAgIH1cbiAgICAvLyBjb25zdCByb3cgPSAoKSA9PiA8ZGl2IGNsYXNzPVwicm93XCI+O1xuICAgIC8vIGNvbnN0IGNvbCA9ICgpID0+IDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjtcbiAgICAvLyBsZXQgeCA9IDA7XG5cbiAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUucGxheWxpc3RzLml0ZW1zLmxlbmd0aDsgaSsrKVxuXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gdGhpcy5zdGF0ZS5wbGF5bGlzdHMuaXRlbXMubWFwKChwbGF5bGlzdCkgPT5cbiAgICAgIDxBbGJ1bVNxdWFyZSBwbGF5bGlzdD17cGxheWxpc3R9IGNoaWxkQ2xhc3M9XCJjb2wtbWQtM1wiLz5cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7bGlzdEl0ZW1zfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBbGJ1bVNxdWFyZShwcm9wcyl7XG5yZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2hpbGRDbGFzcyArICcgcGxheWxpc3RCbG9jayd9PlxuICAgIDxBbGJ1bUltYWdlIHBsYXlsaXN0ID0ge3Byb3BzLnBsYXlsaXN0fS8+XG4gICAgPGgzIGNsYXNzTmFtZT1cInBsYXlsaXN0TmFtZVwiPntwcm9wcy5wbGF5bGlzdC5uYW1lfTwvaDM+XG4gIDwvZGl2PlxuICApO1xufSBcbmZ1bmN0aW9uIEFsYnVtSW1hZ2UocHJvcHMpIHtcbiAgICBpZiAoIXByb3BzLnBsYXlsaXN0LmltYWdlcykge1xuICAgICAgcmV0dXJuIDxkaXYgLz5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxpbWcgc3JjPXtwcm9wcy5wbGF5bGlzdC5pbWFnZXNbMF0udXJsfSBjbGFzc05hbWU9XCJwbGF5bGlzdEltYWdlXCIvPlxuICAgIH1cbiAgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Vc2VyTWVudS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBR0E7QUFGQTtBQUdBOzs7O0FBS0E7QUFBQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7O0FBaENBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFxQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOzs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9