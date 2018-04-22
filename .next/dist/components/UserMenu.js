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