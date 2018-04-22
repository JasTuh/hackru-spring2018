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

var _getPlaylists = require('../utils/getPlaylists');

var _getPlaylists2 = _interopRequireDefault(_getPlaylists);

var _getTracksOfPlaylist = require('../utils/getTracksOfPlaylist');

var _getTracksOfPlaylist2 = _interopRequireDefault(_getTracksOfPlaylist);

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

      (0, _getPlaylists2.default)(this.props.url.query.accessToken).then(function (res) {
        console.log(res);
        _this2.setState({
          playlists: res
        });
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
            lineNumber: 41
          }
        });
      }
      var listItems = this.state.playlists.items.map(function (playlist) {
        return _react2.default.createElement(AlbumSquare, { key: playlist.id, playlist: playlist, clickedMethod: _this4.selectPlaylist(playlist.id), childClass: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        });
      });
      return _react2.default.createElement('div', {
        __source: {
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
  return _react2.default.createElement('div', { className: props.childClass + ' playlistBlock', onClick: props.clickedMethod, __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement(AlbumImage, { playlist: props.playlist, __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), _react2.default.createElement('h3', { className: 'playlistName', __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, props.playlist.name));
}

function AlbumImage(props) {
  if (!props.playlist.images) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    });
  } else {
    return _react2.default.createElement('img', { src: props.playlist.images[0].url, className: 'playlistImage', __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlck1lbnUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRQbGF5bGlzdHMiLCJnZXRUcmFja3NPZlBsYXlsaXN0IiwiVXNlck1lbnUiLCJwcm9wcyIsInN0YXRlIiwicGxheWxpc3RzIiwic2VsZWN0ZWRQbGF5bGlzdHMiLCJzZWxlY3RQbGF5bGlzdCIsImJpbmQiLCJ1cmwiLCJxdWVyeSIsImFjY2Vzc1Rva2VuIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInBsYXlsaXN0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsIml0ZW1zIiwibGlzdEl0ZW1zIiwibWFwIiwiaWQiLCJBbGJ1bVNxdWFyZSIsImNoaWxkQ2xhc3MiLCJjbGlja2VkTWV0aG9kIiwibmFtZSIsIkFsYnVtSW1hZ2UiLCJpbWFnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCOztBQUNBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SUFFYyxBO29DQUNuQjs7b0JBQUEsQUFBWSxPQUFPO3dDQUFBOzswSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztpQkFBUSxBQUNBLEFBQ1g7eUJBRkYsQUFBYSxBQUVRLEFBRXJCO0FBSmEsQUFDWDtVQUdGLEFBQUssaUJBQWlCLE1BQUEsQUFBSyxlQUFMLEFBQW9CLEtBTnpCLEFBTWpCO1dBQ0Q7Ozs7O3dDQUNtQjttQkFDbEI7O2tDQUFhLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQTVCLEFBQWtDLGFBQWxDLEFBQStDLEtBQUssVUFBQSxBQUFDLEtBQVEsQUFDM0Q7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtlQUFBLEFBQUs7cUJBQUwsQUFBYyxBQUNELEFBRWQ7QUFIZSxBQUNaO0FBSEosQUFNRDs7OzttQyxBQUVjLFVBQVU7bUJBQ3ZCOzthQUFPLFlBQU0sQUFDWDtnQkFBQSxBQUFRLElBQUksT0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO1lBQUksUUFBUSxPQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFYLEFBQTZCLFFBQXpDLEFBQVksQUFBcUMsQUFDakQ7WUFBSSxRQUFRLENBQVosQUFBYSxHQUFHLEFBQ2Q7aUJBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsT0FBN0IsQUFBb0MsT0FBcEMsQUFBMEMsQUFFM0M7QUFIRCxVQUFBLEFBR0M7YUFDSSxBQUNIO21CQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFYLEFBQTZCLEtBQTdCLEFBQWtDLEFBQ25DO0FBQ0Q7ZUFBQSxBQUFLLFNBQVMsRUFBQyxtQkFBbUIsT0FBQSxBQUFLLE1BQXZDLEFBQWMsQUFBK0IsQUFDOUM7QUFYRCxBQVlEOzs7OzZCQUVRO21CQUNQOztVQUFJLENBQUMsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFoQixBQUEwQixPQUFPLEFBQy9COzs7c0JBQVE7d0JBQVIsQUFBUSxBQUNUO0FBRFM7QUFBQSxTQUFBO0FBRVY7VUFBTSxpQkFBWSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLE1BQXJCLEFBQTJCLElBQUksVUFBQSxBQUFDLFVBQUQ7NkNBQy9DLEFBQUMsZUFBWSxLQUFLLFNBQWxCLEFBQTJCLElBQUksVUFBL0IsQUFBeUMsVUFBVSxlQUFlLE9BQUEsQUFBSyxlQUFlLFNBQXRGLEFBQWtFLEFBQTZCLEtBQUssWUFBcEcsQUFBK0c7c0JBQS9HO3dCQUQrQyxBQUMvQztBQUFBO1NBQUE7QUFERixBQUFrQixBQUdsQixPQUhrQjs2QkFJaEIsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxFQURGLEFBQ0UsQUFJSDs7Ozs7QSxBQTdDbUM7O2tCQUFqQixBOzs7QUFnRHJCLFNBQUEsQUFBUyxZQUFULEFBQXFCLE9BQU0sQUFDM0I7eUJBQ0UsY0FBQSxTQUFLLFdBQVcsTUFBQSxBQUFNLGFBQXRCLEFBQW1DLGtCQUFrQixTQUFTLE1BQTlELEFBQW9FO2dCQUFwRTtrQkFBQSxBQUNFO0FBREY7R0FBQSxnQ0FDRSxBQUFDLGNBQVcsVUFBWSxNQUF4QixBQUE4QjtnQkFBOUI7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQSxRQUFJLFdBQUosQUFBYztnQkFBZDtrQkFBQSxBQUE4QjtBQUE5QjtXQUE4QixBQUFNLFNBSHhDLEFBQ0UsQUFFRSxBQUE2QyxBQUdoRDs7O0FBRUQsU0FBQSxBQUFTLFdBQVQsQUFBb0IsT0FBTyxBQUN2QjtNQUFJLENBQUMsTUFBQSxBQUFNLFNBQVgsQUFBb0IsUUFBUSxBQUMxQjs7O2tCQUFPO29CQUFQLEFBQU8sQUFDUjtBQURRO0FBQUEsS0FBQTtBQURULFNBRU8sQUFDTDtrREFBWSxLQUFLLE1BQUEsQUFBTSxTQUFOLEFBQWUsT0FBZixBQUFzQixHQUFoQyxBQUFtQyxLQUFLLFdBQXhDLEFBQWtEO2tCQUFsRDtvQkFBUCxBQUFPLEFBQ1I7QUFEUTtLQUFBO0FBRVYiLCJmaWxlIjoiVXNlck1lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thdGhlcmluZXRoYWkvRGV2ZWxvcG1lbnQvaGFja1JVL2hhY2tydS1zcHJpbmcyMDE4In0=