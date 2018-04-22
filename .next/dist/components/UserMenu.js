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
      playlistName: "",
      playlists: [],
      selectedPlaylists: []
    };
    _this.selectPlaylist = _this.selectPlaylist.bind(_this);
    _this.merge = _this.merge.bind(_this);
    _this.handleNameChange = _this.handleNameChange.bind(_this);
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
        body: (0, _stringify2.default)({ playlists: this.state.selectedPlaylists, playlistName: this.state.playlistName }),
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
    key: 'handleNameChange',
    value: function handleNameChange(e) {
      this.setState({ playlistName: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      if (!this.state.playlists.items) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        });
      }

      var listItems = this.state.playlists.items.map(function (playlist) {
        return _react2.default.createElement(AlbumSquare, { key: playlist.id, playlist: playlist, selected: _this4.state.selectedPlaylists.includes(playlist.id), clickedMethod: _this4.selectPlaylist(playlist.id), childClass: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        });
      });
      return _react2.default.createElement('div', { className: 'outerPlaylistBlock', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'nameForm', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Playlist Name:'), _react2.default.createElement('input', { type: 'text', value: this.state.playlistName, onChange: this.handleNameChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }))), listItems, _react2.default.createElement('a', { id: 'bMerge', onClick: this.merge, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Merge'));
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
      lineNumber: 87
    }
  }, _react2.default.createElement('img', { className: 'checkmark', src: 'static/img/green-check.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }), _react2.default.createElement(AlbumImage, { playlist: props.playlist, __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }), _react2.default.createElement('h3', { className: 'playlistName', __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, props.playlist.name));
}

function AlbumImage(props) {
  if (props.playlist === undefined || !props.playlist.images || props.playlist.images.length === 0) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      }
    });
  } else {
    return _react2.default.createElement('img', { src: props.playlist.images[0].url, className: 'playlistImage', __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlck1lbnUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJVc2VyTWVudSIsInByb3BzIiwic3RhdGUiLCJwbGF5bGlzdE5hbWUiLCJwbGF5bGlzdHMiLCJzZWxlY3RlZFBsYXlsaXN0cyIsInNlbGVjdFBsYXlsaXN0IiwiYmluZCIsIm1lcmdlIiwiaGFuZGxlTmFtZUNoYW5nZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImJvZHkiLCJjYXRjaCIsImVyciIsIm1ldGhvZCIsImhlYWRlcnMiLCJwbGF5bGlzdCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpdGVtcyIsImxpc3RJdGVtcyIsIm1hcCIsImlkIiwiaW5jbHVkZXMiLCJoYW5kbGVTdWJtaXQiLCJBbGJ1bVNxdWFyZSIsImNsYXNzTmFtZSIsImNoaWxkQ2xhc3MiLCJzZWxlY3RlZCIsImNsaWNrZWRNZXRob2QiLCJuYW1lIiwiQWxidW1JbWFnZSIsInVuZGVmaW5lZCIsImltYWdlcyIsImxlbmd0aCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCOzs7Ozs7O0lBRXFCLEE7b0NBQ25COztvQkFBQSxBQUFZLE9BQU87d0NBQUE7OzBJQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO29CQUFRLEFBQ0csQUFDZDtpQkFGVyxBQUVBLEFBQ1g7eUJBSEYsQUFBYSxBQUdRLEFBRXJCO0FBTGEsQUFDWDtVQUlGLEFBQUssaUJBQWlCLE1BQUEsQUFBSyxlQUFMLEFBQW9CLEtBQTFDLEFBQ0E7VUFBQSxBQUFLLFFBQVEsTUFBQSxBQUFLLE1BQUwsQUFBVyxLQUF4QixBQUNBO1VBQUEsQUFBSyxtQkFBbUIsTUFBQSxBQUFLLGlCQUFMLEFBQXNCLEtBVDdC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QUFNLFVBQVMsU0FBUyxLQUF4QixBQUE2QjtvQkFBN0I7c0JBQUE7QUFBQTtTQVRILEFBQ0UsQUFRQyxBQUtKOzs7OztBQTFFbUMsQTs7a0JBQWpCLEE7OztBQTZFckIsU0FBQSxBQUFTLFlBQVQsQUFBcUIsT0FBTSxBQUN6QjtNQUFJLFlBQVksTUFBQSxBQUFNLGFBQXRCLEFBQW1DLEFBQ25DO01BQUksTUFBSixBQUFVLFVBQVUsQUFDbEI7Z0JBQVksWUFBWixBQUF3QixBQUN6QjtBQUNIO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCLFdBQVcsU0FBUyxNQUFwQyxBQUEwQztnQkFBMUM7a0JBQUEsQUFDRTtBQURGO0dBQUEseUNBQ08sV0FBTCxBQUFlLGFBQVksS0FBM0IsQUFBK0I7Z0JBQS9CO2tCQURGLEFBQ0UsQUFDQTtBQURBO29DQUNBLEFBQUMsY0FBVyxVQUFZLE1BQXhCLEFBQThCO2dCQUE5QjtrQkFGRixBQUVFLEFBQ0E7QUFEQTtzQkFDQSxjQUFBLFFBQUksV0FBSixBQUFjO2dCQUFkO2tCQUFBLEFBQThCO0FBQTlCO1dBQThCLEFBQU0sU0FKeEMsQUFDRSxBQUdFLEFBQTZDLEFBR2hEOzs7QUFFRCxTQUFBLEFBQVMsV0FBVCxBQUFvQixPQUFPLEFBQ3ZCO01BQUksTUFBQSxBQUFNLGFBQU4sQUFBbUIsYUFBYSxDQUFDLE1BQUEsQUFBTSxTQUF2QyxBQUFnRCxVQUFVLE1BQUEsQUFBTSxTQUFOLEFBQWUsT0FBZixBQUFzQixXQUFwRixBQUErRixHQUFHLEFBQ2hHOzs7a0JBQU87b0JBQVAsQUFBTyxBQUNSO0FBRFE7QUFBQSxLQUFBO0FBRFQsU0FFTyxBQUNMO2tEQUFZLEtBQUssTUFBQSxBQUFNLFNBQU4sQUFBZSxPQUFmLEFBQXNCLEdBQWhDLEFBQW1DLEtBQUssV0FBeEMsQUFBa0Q7a0JBQWxEO29CQUFQLEFBQU8sQUFDUjtBQURRO0tBQUE7QUFFViIsImZpbGUiOiJVc2VyTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2F0aGVyaW5ldGhhaS9EZXZlbG9wbWVudC9oYWNrUlUvaGFja3J1LXNwcmluZzIwMTgifQ==