webpackHotUpdate(5,{

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(553);

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

__webpack_require__(561);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/katherinethai/Development/hackRU/hackru-spring2018/components/UserMenu.js';


var UserMenu = function (_Component) {
  (0, _inherits3.default)(UserMenu, _Component);

  function UserMenu(props) {
    (0, _classCallCheck3.default)(this, UserMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UserMenu.__proto__ || (0, _getPrototypeOf2.default)(UserMenu)).call(this, props));

    _this.state = {
      playlists: [],
      selectedPlaylists: []
    };
    _this.selectPlaylist = _this.selectPlaylist.bind(_this);
    _this.merge = _this.merge.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(UserMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('http://localhost:3000/newPlaylist', { credentials: "same-origin" }).then(function (res) {
        return res.json();
      }).then(function (json) {
        console.log(json);
        _this2.setState({ playlists: json.body });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'merge',
    value: function merge() {
      console.log(this.state.selectedPlaylists);
      fetch('http://localhost:3000/mergePlaylists', {
        method: 'POST',
        body: (0, _stringify2.default)({ playlists: this.state.selectedPlaylists }),
        credentials: 'same-origin',
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        }
      });
    }
  }, {
    key: 'selectPlaylist',
    value: function selectPlaylist(playlist) {
      var _this3 = this;

      return function () {
        console.log(_this3.state.selectedPlaylists);
        var index = _this3.state.selectedPlaylists.indexOf(playlist);
        if (index > -1) {
          _this3.state.selectedPlaylists.splice(index, 1);
        } //remove it 
        else {
            _this3.state.selectedPlaylists.push(playlist);
          }
        _this3.setState({ selectedPlaylists: _this3.state.selectedPlaylists });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      if (!this.state.playlists.items) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        });
      }

      var listItems = this.state.playlists.items.map(function (playlist) {
        return _react2.default.createElement(AlbumSquare, { key: playlist.id, playlist: playlist, selected: _this4.state.selectedPlaylists.includes(playlist.id), clickedMethod: _this4.selectPlaylist(playlist.id), childClass: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        });
      });
      return _react2.default.createElement('div', { className: 'outerPlaylistBlock', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, listItems, _react2.default.createElement('button', { onClick: this.merge, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'submit'));
    }
  }]);

  return UserMenu;
}(_react.Component);

exports.default = UserMenu;


function AlbumSquare(props) {
  var className = props.childClass + ' playlistBlock';
  if (props.selected) {
    className = className + ' selected';
  }
  return _react2.default.createElement('div', { className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, _react2.default.createElement('img', { className: 'checkmark', src: 'static/img/green-check.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }), _react2.default.createElement(AlbumImage, { playlist: props.playlist, __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }), _react2.default.createElement('h3', { className: 'playlistName', __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, props.playlist.name));
}

function AlbumImage(props) {
  if (props.playlist === undefined || !props.playlist.images || props.playlist.images.length === 0) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      }
    });
  } else {
    return _react2.default.createElement('img', { src: props.playlist.images[0].url, className: 'playlistImage', onClick: props.clickedMethod, __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlck1lbnUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJVc2VyTWVudSIsInByb3BzIiwic3RhdGUiLCJwbGF5bGlzdHMiLCJzZWxlY3RlZFBsYXlsaXN0cyIsInNlbGVjdFBsYXlsaXN0IiwiYmluZCIsIm1lcmdlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiYm9keSIsImNhdGNoIiwiZXJyIiwibWV0aG9kIiwiaGVhZGVycyIsInBsYXlsaXN0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsIml0ZW1zIiwibGlzdEl0ZW1zIiwibWFwIiwiaWQiLCJpbmNsdWRlcyIsIkFsYnVtU3F1YXJlIiwiY2xhc3NOYW1lIiwiY2hpbGRDbGFzcyIsInNlbGVjdGVkIiwibmFtZSIsIkFsYnVtSW1hZ2UiLCJ1bmRlZmluZWQiLCJpbWFnZXMiLCJsZW5ndGgiLCJ1cmwiLCJjbGlja2VkTWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEI7Ozs7Ozs7SSxBQUVxQjtvQ0FDbkI7O29CQUFBLEFBQVksT0FBTzt3Q0FBQTs7MElBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7aUJBQVEsQUFDQSxBQUNYO3lCQUZGLEFBQWEsQUFFUSxBQUVyQjtBQUphLEFBQ1g7VUFHRixBQUFLLGlCQUFpQixNQUFBLEFBQUssZUFBTCxBQUFvQixLQUExQyxBQUNBO1VBQUEsQUFBSyxRQUFRLE1BQUEsQUFBSyxNQUFMLEFBQVcsS0FQUCxBQU9qQjtXQUNEOzs7Ozt3Q0FDbUI7bUJBQ2xCOztZQUFBLEFBQU0scUNBQXFDLEVBQUMsYUFBNUMsQUFBMkMsQUFBYyxpQkFBekQsQUFDRyxLQUFLLGVBQUE7ZUFBTyxJQUFQLEFBQU8sQUFBSTtBQURuQixTQUFBLEFBRUcsS0FBSyxnQkFBUSxBQUNaO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7ZUFBQSxBQUFLLFNBQVMsRUFBQyxXQUFVLEtBQXpCLEFBQWMsQUFBZ0IsQUFDL0I7QUFMSCxTQUFBLEFBTUcsTUFBTSxVQUFBLEFBQUMsS0FBUSxBQUFDO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQUs7QUFOcEMsQUFPRDs7Ozs0QkFFUyxBQUNOO2NBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBQUN6QjtZQUFBLEFBQU07Z0JBQXdDLEFBQ3JDLEFBQ1A7Y0FBSyx5QkFBZSxFQUFDLFdBQVUsS0FBQSxBQUFLLE1BRlEsQUFFdkMsQUFBZSxBQUFzQixBQUMxQztxQkFINEMsQUFHL0IsQUFDYjs7d0JBQVMsQUFDSyxBQUNkOzBCQU5GLEFBQThDLEFBSW5DLEFBRU8sQUFHbkI7QUFMWSxBQUNUO0FBTDRDLEFBQzVDOzs7O21DQVVXLEEsVUFBVTttQkFDdkI7O2FBQU8sWUFBTSxBQUNYO2dCQUFBLEFBQVEsSUFBSSxPQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7WUFBSSxRQUFRLE9BQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsUUFBekMsQUFBWSxBQUFxQyxBQUNqRDtZQUFJLFFBQVEsQ0FBWixBQUFhLEdBQUcsQUFDZDtpQkFBQSxBQUFLLE1BQUwsQUFBVyxrQkFBWCxBQUE2QixPQUE3QixBQUFvQyxPQUFwQyxBQUEwQyxBQUMzQztBQUZELFVBQUEsQUFFQzthQUNJLEFBQ0g7bUJBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsS0FBN0IsQUFBa0MsQUFDbkM7QUFDRDtlQUFBLEFBQUssU0FBUyxFQUFDLG1CQUFtQixPQUFBLEFBQUssTUFBdkMsQUFBYyxBQUErQixBQUM5QztBQVZELEFBV0Q7Ozs7NkJBRVE7bUJBQ1A7O1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQWhCLEFBQTBCLE9BQU8sQUFDL0I7OztzQkFBUTt3QkFBUixBQUFRLEFBQ1Q7QUFEUztBQUFBLFNBQUE7QUFHVjs7VUFBTSxpQkFBWSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLE1BQXJCLEFBQTJCLElBQUksVUFBQSxBQUFDLFVBQUQ7NkNBQy9DLEFBQUMsZUFBWSxLQUFLLFNBQWxCLEFBQTJCLElBQUksVUFBL0IsQUFBeUMsVUFBVSxVQUFVLE9BQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsU0FBUyxTQUFuRyxBQUE2RCxBQUErQyxLQUFLLGVBQWUsT0FBQSxBQUFLLGVBQWUsU0FBcEosQUFBZ0ksQUFBNkIsS0FBSyxZQUFsSyxBQUE2SztzQkFBN0s7d0JBRCtDLEFBQy9DO0FBQUE7U0FBQTtBQURGLEFBQWtCLEFBR2xCLE9BSGtCOzZCQUloQixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0c7QUFESDtPQUFBLEVBQUEsQUFFQywyQkFBQSxjQUFBLFlBQVEsU0FBUyxLQUFqQixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQUhILEFBQ0UsQUFFQyxBQUtKOzs7OztBLEFBL0RtQzs7a0JBQWpCLEE7OztBQWtFckIsU0FBQSxBQUFTLFlBQVQsQUFBcUIsT0FBTSxBQUN6QjtNQUFJLFlBQVksTUFBQSxBQUFNLGFBQXRCLEFBQW1DLEFBQ25DO01BQUksTUFBSixBQUFVLFVBQVUsQUFDbEI7Z0JBQVksWUFBWixBQUF3QixBQUN6QjtBQUNIO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO2dCQUFoQjtrQkFBQSxBQUNFO0FBREY7R0FBQSx5Q0FDTyxXQUFMLEFBQWUsYUFBWSxLQUEzQixBQUErQjtnQkFBL0I7a0JBREYsQUFDRSxBQUNBO0FBREE7b0NBQ0EsQUFBQyxjQUFXLFVBQVksTUFBeEIsQUFBOEI7Z0JBQTlCO2tCQUZGLEFBRUUsQUFDQTtBQURBO3NCQUNBLGNBQUEsUUFBSSxXQUFKLEFBQWM7Z0JBQWQ7a0JBQUEsQUFBOEI7QUFBOUI7V0FBOEIsQUFBTSxTQUp4QyxBQUNFLEFBR0UsQUFBNkMsQUFHaEQ7OztBQUVELFNBQUEsQUFBUyxXQUFULEFBQW9CLE9BQU8sQUFDdkI7TUFBSSxNQUFBLEFBQU0sYUFBTixBQUFtQixhQUFhLENBQUMsTUFBQSxBQUFNLFNBQXZDLEFBQWdELFVBQVUsTUFBQSxBQUFNLFNBQU4sQUFBZSxPQUFmLEFBQXNCLFdBQXBGLEFBQStGLEdBQUcsQUFDaEc7OztrQkFBTztvQkFBUCxBQUFPLEFBQ1I7QUFEUTtBQUFBLEtBQUE7QUFEVCxTQUVPLEFBQ0w7a0RBQVksS0FBSyxNQUFBLEFBQU0sU0FBTixBQUFlLE9BQWYsQUFBc0IsR0FBaEMsQUFBbUMsS0FBSyxXQUF4QyxBQUFrRCxpQkFBZ0IsU0FBUyxNQUEzRSxBQUFpRjtrQkFBakY7b0JBQVAsQUFBTyxBQUNSO0FBRFE7S0FBQTtBQUVWIiwiZmlsZSI6IlVzZXJNZW51LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXRoZXJpbmV0aGFpL0RldmVsb3BtZW50L2hhY2tSVS9oYWNrcnUtc3ByaW5nMjAxOCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/katherinethai/Development/hackRU/hackru-spring2018/components/UserMenu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/katherinethai/Development/hackRU/hackru-spring2018/components/UserMenu.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yYjg0NDE2NTllY2ZiMWEyNTA3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyTWVudS5qcz82NTRiNGM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwbGF5bGlzdHM6IFtdLFxuICAgICAgc2VsZWN0ZWRQbGF5bGlzdHM6IFtdLFxuICAgIH07XG4gICAgdGhpcy5zZWxlY3RQbGF5bGlzdCA9IHRoaXMuc2VsZWN0UGxheWxpc3QuYmluZCh0aGlzKVxuICAgIHRoaXMubWVyZ2UgPSB0aGlzLm1lcmdlLmJpbmQodGhpcylcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL25ld1BsYXlsaXN0Jywge2NyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJ9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXlsaXN0czpqc29uLmJvZHl9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge2NvbnNvbGUubG9nKGVycil9KTtcbiAgfVxuXG4gICAgbWVyZ2UoKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkUGxheWxpc3RzKTtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lcmdlUGxheWxpc3RzJywge1xuICAgICAgbWV0aG9kOidQT1NUJywgXG4gICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtwbGF5bGlzdHM6dGhpcy5zdGF0ZS5zZWxlY3RlZFBsYXlsaXN0c30pLFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAndXNlci1hZ2VudCc6ICdNb3ppbGxhLzQuMCBNRE4gRXhhbXBsZScsXG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgIH0pOyBcbiAgfVxuXG4gIHNlbGVjdFBsYXlsaXN0KHBsYXlsaXN0KSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2VsZWN0ZWRQbGF5bGlzdHMpO1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFBsYXlsaXN0cy5pbmRleE9mKHBsYXlsaXN0KTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRQbGF5bGlzdHMuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgfS8vcmVtb3ZlIGl0IFxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRQbGF5bGlzdHMucHVzaChwbGF5bGlzdCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFBsYXlsaXN0czogdGhpcy5zdGF0ZS5zZWxlY3RlZFBsYXlsaXN0c30pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5wbGF5bGlzdHMuaXRlbXMpIHtcbiAgICAgIHJldHVybiAoPGRpdiAvPik7XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gdGhpcy5zdGF0ZS5wbGF5bGlzdHMuaXRlbXMubWFwKChwbGF5bGlzdCkgPT5cbiAgICAgIDxBbGJ1bVNxdWFyZSBrZXk9e3BsYXlsaXN0LmlkfSBwbGF5bGlzdD17cGxheWxpc3R9IHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkUGxheWxpc3RzLmluY2x1ZGVzKHBsYXlsaXN0LmlkKX0gY2xpY2tlZE1ldGhvZD17dGhpcy5zZWxlY3RQbGF5bGlzdChwbGF5bGlzdC5pZCl9IGNoaWxkQ2xhc3M9XCJjb2wtbWQtM1wiLz5cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyUGxheWxpc3RCbG9ja1wiPlxuICAgICAgICB7bGlzdEl0ZW1zfVxuICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5tZXJnZX0+XG4gICAgICAgICAgIHN1Ym1pdCBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIEFsYnVtU3F1YXJlKHByb3BzKXtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNoaWxkQ2xhc3MgKyAnIHBsYXlsaXN0QmxvY2snO1xuICBpZiAocHJvcHMuc2VsZWN0ZWQpIHtcbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIHNlbGVjdGVkJztcbiAgfVxucmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgPGltZyBjbGFzc05hbWU9XCJjaGVja21hcmtcIiBzcmM9XCJzdGF0aWMvaW1nL2dyZWVuLWNoZWNrLnBuZ1wiLz5cbiAgICA8QWxidW1JbWFnZSBwbGF5bGlzdCA9IHtwcm9wcy5wbGF5bGlzdH0vPlxuICAgIDxoMyBjbGFzc05hbWU9XCJwbGF5bGlzdE5hbWVcIj57cHJvcHMucGxheWxpc3QubmFtZX08L2gzPlxuICA8L2Rpdj5cbiAgKTtcbn0gXG5cbmZ1bmN0aW9uIEFsYnVtSW1hZ2UocHJvcHMpIHtcbiAgICBpZiAocHJvcHMucGxheWxpc3QgPT09IHVuZGVmaW5lZCB8fCAhcHJvcHMucGxheWxpc3QuaW1hZ2VzIHx8IHByb3BzLnBsYXlsaXN0LmltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8aW1nIHNyYz17cHJvcHMucGxheWxpc3QuaW1hZ2VzWzBdLnVybH0gY2xhc3NOYW1lPVwicGxheWxpc3RJbWFnZVwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrZWRNZXRob2R9Lz5cbiAgICB9XG4gIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVXNlck1lbnUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFIQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFNQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBOztBQUVBO0FBR0E7QUFKQTtBQUpBOzs7O0FBVUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFLQTs7Ozs7QUEvREE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==