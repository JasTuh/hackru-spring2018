webpackHotUpdate(5,{

/***/ 560:
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
            lineNumber: 39
          }
        });
      }

      var listItems = this.state.playlists.items.map(function (playlist) {
        return _react2.default.createElement(AlbumSquare, { key: playlist.id, playlist: playlist, selected: _this4.state.selectedPlaylists.includes(playlist.id), clickedMethod: _this4.selectPlaylist(playlist.id), childClass: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        });
      });
      return _react2.default.createElement('div', { className: 'outerPlaylistBlock', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, listItems);
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
  return _react2.default.createElement('div', { className: className, onClick: props.clickedMethod, __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement('img', { className: 'checkmark', src: 'static/img/green-check.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), _react2.default.createElement(AlbumImage, { playlist: props.playlist, __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }), _react2.default.createElement('h3', { className: 'playlistName', __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, props.playlist.name));
}

function AlbumImage(props) {
  if (props.playlist === undefined || !props.playlist.images || props.playlist.images.length === 0) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      }
    });
  } else {
    return _react2.default.createElement('img', { src: props.playlist.images[0].url, className: 'playlistImage', __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlck1lbnUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJVc2VyTWVudSIsInByb3BzIiwic3RhdGUiLCJwbGF5bGlzdHMiLCJzZWxlY3RlZFBsYXlsaXN0cyIsInNlbGVjdFBsYXlsaXN0IiwiYmluZCIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImJvZHkiLCJjYXRjaCIsImVyciIsInBsYXlsaXN0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsIml0ZW1zIiwibGlzdEl0ZW1zIiwibWFwIiwiaWQiLCJpbmNsdWRlcyIsIkFsYnVtU3F1YXJlIiwiY2xhc3NOYW1lIiwiY2hpbGRDbGFzcyIsInNlbGVjdGVkIiwiY2xpY2tlZE1ldGhvZCIsIm5hbWUiLCJBbGJ1bUltYWdlIiwidW5kZWZpbmVkIiwiaW1hZ2VzIiwibGVuZ3RoIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQjs7Ozs7OztJQUVxQixBO29DQUNuQjs7b0JBQUEsQUFBWSxPQUFPO3dDQUFBOzswSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztpQkFBUSxBQUNBLEFBQ1g7eUJBRkYsQUFBYSxBQUVRLEFBRXJCO0FBSmEsQUFDWDtVQUdGLEFBQUssaUJBQWlCLE1BQUEsQUFBSyxlQUFMLEFBQW9CLEtBTnpCLEFBTWpCO1dBQ0Q7Ozs7O3dDQUNtQjttQkFDbEI7O1lBQUEsQUFBTSxxQ0FBcUMsRUFBQyxhQUE1QyxBQUEyQyxBQUFjLGlCQUF6RCxBQUNHLEtBQUssZUFBQTtlQUFPLElBQVAsQUFBTyxBQUFJO0FBRG5CLFNBQUEsQUFFRyxLQUFLLGdCQUFRLEFBQ1o7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtlQUFBLEFBQUssU0FBUyxFQUFDLFdBQVUsS0FBekIsQUFBYyxBQUFnQixBQUMvQjtBQUxILFNBQUEsQUFNRyxNQUFNLFVBQUEsQUFBQyxLQUFRLEFBQUM7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFBSztBQU5wQyxBQU9EOzs7O21DQUVjLEEsVUFBVTttQkFDdkI7O2FBQU8sWUFBTSxBQUNYO2dCQUFBLEFBQVEsSUFBSSxPQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7WUFBSSxRQUFRLE9BQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsUUFBekMsQUFBWSxBQUFxQyxBQUNqRDtZQUFJLFFBQVEsQ0FBWixBQUFhLEdBQUcsQUFDZDtpQkFBQSxBQUFLLE1BQUwsQUFBVyxrQkFBWCxBQUE2QixPQUE3QixBQUFvQyxPQUFwQyxBQUEwQyxBQUMzQztBQUZELFVBQUEsQUFFQzthQUNJLEFBQ0g7bUJBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsS0FBN0IsQUFBa0MsQUFDbkM7QUFDRDtlQUFBLEFBQUssU0FBUyxFQUFDLG1CQUFtQixPQUFBLEFBQUssTUFBdkMsQUFBYyxBQUErQixBQUM5QztBQVZELEFBV0Q7Ozs7NkJBRVE7bUJBQ1A7O1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQWhCLEFBQTBCLE9BQU8sQUFDL0I7OztzQkFBUTt3QkFBUixBQUFRLEFBQ1Q7QUFEUztBQUFBLFNBQUE7QUFHVjs7VUFBTSxpQkFBWSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLE1BQXJCLEFBQTJCLElBQUksVUFBQSxBQUFDLFVBQUQ7NkNBQy9DLEFBQUMsZUFBWSxLQUFLLFNBQWxCLEFBQTJCLElBQUksVUFBL0IsQUFBeUMsVUFBVSxVQUFVLE9BQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsU0FBUyxTQUFuRyxBQUE2RCxBQUErQyxLQUFLLGVBQWUsT0FBQSxBQUFLLGVBQWUsU0FBcEosQUFBZ0ksQUFBNkIsS0FBSyxZQUFsSyxBQUE2SztzQkFBN0s7d0JBRCtDLEFBQy9DO0FBQUE7U0FBQTtBQURGLEFBQWtCLEFBR2xCLE9BSGtCOzZCQUloQixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0c7QUFESDtPQUFBLEVBREYsQUFDRSxBQUlIOzs7OztBQTlDbUMsQTs7a0IsQUFBakI7OztBQWlEckIsU0FBQSxBQUFTLFlBQVQsQUFBcUIsT0FBTSxBQUN6QjtNQUFJLFlBQVksTUFBQSxBQUFNLGFBQXRCLEFBQW1DLEFBQ25DO01BQUksTUFBSixBQUFVLFVBQVUsQUFDbEI7Z0JBQVksWUFBWixBQUF3QixBQUN6QjtBQUNIO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCLFdBQVcsU0FBUyxNQUFwQyxBQUEwQztnQkFBMUM7a0JBQUEsQUFDRTtBQURGO0dBQUEseUNBQ08sV0FBTCxBQUFlLGFBQVksS0FBM0IsQUFBK0I7Z0JBQS9CO2tCQURGLEFBQ0UsQUFDQTtBQURBO29DQUNBLEFBQUMsY0FBVyxVQUFZLE1BQXhCLEFBQThCO2dCQUE5QjtrQkFGRixBQUVFLEFBQ0E7QUFEQTtzQkFDQSxjQUFBLFFBQUksV0FBSixBQUFjO2dCQUFkO2tCQUFBLEFBQThCO0FBQTlCO1dBQThCLEFBQU0sU0FKeEMsQUFDRSxBQUdFLEFBQTZDLEFBR2hEOzs7QUFFRCxTQUFBLEFBQVMsV0FBVCxBQUFvQixPQUFPLEFBQ3ZCO01BQUksTUFBQSxBQUFNLGFBQU4sQUFBbUIsYUFBYSxDQUFDLE1BQUEsQUFBTSxTQUF2QyxBQUFnRCxVQUFVLE1BQUEsQUFBTSxTQUFOLEFBQWUsT0FBZixBQUFzQixXQUFwRixBQUErRixHQUFHLEFBQ2hHOzs7a0JBQU87b0JBQVAsQUFBTyxBQUNSO0FBRFE7QUFBQSxLQUFBO0FBRFQsU0FFTyxBQUNMO2tEQUFZLEtBQUssTUFBQSxBQUFNLFNBQU4sQUFBZSxPQUFmLEFBQXNCLEdBQWhDLEFBQW1DLEtBQUssV0FBeEMsQUFBa0Q7a0JBQWxEO29CQUFQLEFBQU8sQUFDUjtBQURRO0tBQUE7QUFFViIsImZpbGUiOiJVc2VyTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2F0aGVyaW5ldGhhaS9EZXZlbG9wbWVudC9oYWNrUlUvaGFja3J1LXNwcmluZzIwMTgifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/katherinethai/Development/hackRU/hackru-spring2018/components/UserMenu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/katherinethai/Development/hackRU/hackru-spring2018/components/UserMenu.js"); } } })();

/***/ }),

/***/ 563:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jM2Q3YjJhNzEwNjUzZWVjNDY5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyTWVudS5qcz9mZmVhYzQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwbGF5bGlzdHM6IFtdLFxuICAgICAgc2VsZWN0ZWRQbGF5bGlzdHM6IFtdLFxuICAgIH07XG4gICAgdGhpcy5zZWxlY3RQbGF5bGlzdCA9IHRoaXMuc2VsZWN0UGxheWxpc3QuYmluZCh0aGlzKVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbmV3UGxheWxpc3QnLCB7Y3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIn0pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheWxpc3RzOmpzb24uYm9keX0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7Y29uc29sZS5sb2coZXJyKX0pO1xuICB9XG5cbiAgc2VsZWN0UGxheWxpc3QocGxheWxpc3QpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZFBsYXlsaXN0cyk7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLnN0YXRlLnNlbGVjdGVkUGxheWxpc3RzLmluZGV4T2YocGxheWxpc3QpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFBsYXlsaXN0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICB9Ly9yZW1vdmUgaXQgXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFBsYXlsaXN0cy5wdXNoKHBsYXlsaXN0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkUGxheWxpc3RzOiB0aGlzLnN0YXRlLnNlbGVjdGVkUGxheWxpc3RzfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnBsYXlsaXN0cy5pdGVtcykge1xuICAgICAgcmV0dXJuICg8ZGl2IC8+KTtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0SXRlbXMgPSB0aGlzLnN0YXRlLnBsYXlsaXN0cy5pdGVtcy5tYXAoKHBsYXlsaXN0KSA9PlxuICAgICAgPEFsYnVtU3F1YXJlIGtleT17cGxheWxpc3QuaWR9IHBsYXlsaXN0PXtwbGF5bGlzdH0gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbGF5bGlzdHMuaW5jbHVkZXMocGxheWxpc3QuaWQpfSBjbGlja2VkTWV0aG9kPXt0aGlzLnNlbGVjdFBsYXlsaXN0KHBsYXlsaXN0LmlkKX0gY2hpbGRDbGFzcz1cImNvbC1tZC0zXCIvPlxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJQbGF5bGlzdEJsb2NrXCI+XG4gICAgICAgIHtsaXN0SXRlbXN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIEFsYnVtU3F1YXJlKHByb3BzKXtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNoaWxkQ2xhc3MgKyAnIHBsYXlsaXN0QmxvY2snO1xuICBpZiAocHJvcHMuc2VsZWN0ZWQpIHtcbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIHNlbGVjdGVkJztcbiAgfVxucmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17cHJvcHMuY2xpY2tlZE1ldGhvZH0+XG4gICAgPGltZyBjbGFzc05hbWU9XCJjaGVja21hcmtcIiBzcmM9XCJzdGF0aWMvaW1nL2dyZWVuLWNoZWNrLnBuZ1wiLz5cbiAgICA8QWxidW1JbWFnZSBwbGF5bGlzdCA9IHtwcm9wcy5wbGF5bGlzdH0vPlxuICAgIDxoMyBjbGFzc05hbWU9XCJwbGF5bGlzdE5hbWVcIj57cHJvcHMucGxheWxpc3QubmFtZX08L2gzPlxuICA8L2Rpdj5cbiAgKTtcbn0gXG5cbmZ1bmN0aW9uIEFsYnVtSW1hZ2UocHJvcHMpIHtcbiAgICBpZiAocHJvcHMucGxheWxpc3QgPT09IHVuZGVmaW5lZCB8fCAhcHJvcHMucGxheWxpc3QuaW1hZ2VzIHx8IHByb3BzLnBsYXlsaXN0LmltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8aW1nIHNyYz17cHJvcHMucGxheWxpc3QuaW1hZ2VzWzBdLnVybH0gY2xhc3NOYW1lPVwicGxheWxpc3RJbWFnZVwiLz5cbiAgICB9XG4gIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVXNlck1lbnUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUhBO0FBR0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFNQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7O0FBMUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=