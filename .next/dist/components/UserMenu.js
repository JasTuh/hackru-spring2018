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

require('isomorphic-fetch');

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