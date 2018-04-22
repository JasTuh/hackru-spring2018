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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

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
            lineNumber: 40
          }
        });
      }

      var listItems = this.state.playlists.items.map(function (playlist) {
        return _react2.default.createElement(AlbumSquare, { key: playlist.id, playlist: playlist, selected: _this4.state.selectedPlaylists.includes(playlist.id), clickedMethod: _this4.selectPlaylist(playlist.id), childClass: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        });
      });
      return _react2.default.createElement('div', { className: 'outerPlaylistBlock', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
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
      lineNumber: 60
    }
  }, _react2.default.createElement('img', { className: 'checkmark', src: 'static/img/green-check.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }), _react2.default.createElement(AlbumImage, { playlist: props.playlist, __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), _react2.default.createElement('h3', { className: 'playlistName', __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, props.playlist.name));
}

function AlbumImage(props) {
  if (props.playlist === undefined || !props.playlist.images || props.playlist.images.length === 0) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    });
  } else {
    return _react2.default.createElement('img', { src: props.playlist.images[0].url, className: 'playlistImage', __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlck1lbnUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCIkIiwiVXNlck1lbnUiLCJwcm9wcyIsInN0YXRlIiwicGxheWxpc3RzIiwic2VsZWN0ZWRQbGF5bGlzdHMiLCJzZWxlY3RQbGF5bGlzdCIsImJpbmQiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJib2R5IiwiY2F0Y2giLCJlcnIiLCJwbGF5bGlzdCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJpdGVtcyIsImxpc3RJdGVtcyIsIm1hcCIsImlkIiwiaW5jbHVkZXMiLCJBbGJ1bVNxdWFyZSIsImNsYXNzTmFtZSIsImNoaWxkQ2xhc3MiLCJzZWxlY3RlZCIsImNsaWNrZWRNZXRob2QiLCJuYW1lIiwiQWxidW1JbWFnZSIsInVuZGVmaW5lZCIsImltYWdlcyIsImxlbmd0aCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEI7O0FBQ0EsQUFBTzs7Ozs7Ozs7O0lBRWMsQTtvQ0FDbkI7O29CQUFBLEFBQVksT0FBTzt3Q0FBQTs7MElBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7aUJBQVEsQUFDQSxBQUNYO3lCQUZGLEFBQWEsQUFFUSxBQUVyQjtBQUphLEFBQ1g7VUFHRixBQUFLLGlCQUFpQixNQUFBLEFBQUssZUFBTCxBQUFvQixLQU56QixBQU1qQjtXQUNEOzs7Ozt3Q0FDbUI7bUJBQ2xCOztZQUFBLEFBQU0scUNBQXFDLEVBQUMsYUFBNUMsQUFBMkMsQUFBYyxpQkFBekQsQUFDRyxLQUFLLGVBQUE7ZUFBTyxJQUFQLEFBQU8sQUFBSTtBQURuQixTQUFBLEFBRUcsS0FBSyxnQkFBUSxBQUNaO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7ZUFBQSxBQUFLLFNBQVMsRUFBQyxXQUFVLEtB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