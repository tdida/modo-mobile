webpackHotUpdate(15,{

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _dec, _class; /* eslint react/no-danger: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _collect = __webpack_require__(439);

var _collect2 = _interopRequireDefault(_collect);

var _utils = __webpack_require__(161);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Demo = (_dec = (0, _collect2.default)(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(nextProps) {
    var pathname, pageDataPath, pageData, locale, pageDataPromise, demosFetcher, _ref2, _ref3, localizedPageData, demos;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pathname = nextProps.location.pathname;
            pageDataPath = pathname.replace('-cn', '').split('/');
            pageData = nextProps.utils.get(nextProps.data, pageDataPath);

            if (pageData) {
              _context.next = 5;
              break;
            }

            throw 404;

          case 5:
            locale = (0, _utils.getQuery)('lang') || window.navigator.language;
            pageDataPromise = typeof pageData === 'function' ? pageData() : (pageData[locale] || pageData.index[locale] || pageData.index)();
            demosFetcher = nextProps.utils.get(nextProps.data, ['components', nextProps.params.component, 'demo']);

            if (!demosFetcher) {
              _context.next = 16;
              break;
            }

            _context.next = 11;
            return Promise.all([pageDataPromise, demosFetcher()]);

          case 11:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            localizedPageData = _ref3[0];
            demos = _ref3[1];
            return _context.abrupt('return', { localizedPageData: localizedPageData, demos: demos, locale: locale });

          case 16:
            _context.next = 18;
            return pageDataPromise;

          case 18:
            _context.t0 = _context.sent;
            _context.t1 = locale;
            return _context.abrupt('return', {
              localizedPageData: _context.t0,
              locale: _context.t1
            });

          case 21:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()), _dec(_class = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref4, [this].concat(args))), _this), _this.goToPage = function (name, index) {
      return function () {
        window.location.hash = name + '-demo-' + index;
      };
    }, _this.update = function () {
      _this.forceUpdate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('hashchange', this.update, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('hashChange', this.update, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          demos = _props.demos,
          location = _props.location,
          picked = _props.picked,
          config = _props.themeConfig,
          locale = _props.locale,
          params = _props.params;

      var demoMeta = void 0;
      var name = params.component;
      picked.components.forEach(function (i) {
        var meta = i.meta;

        if (meta.filename.split('/')[1] === name) {
          demoMeta = meta;
        }
      });
      var demoArr = [];
      var demoContent = void 0;
      Object.keys(demos).forEach(function (k) {
        demoArr.push(demos[k]);
      });
      var demoSort = demoArr.sort(function (a, b) {
        return parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10);
      });

      var hashArr = location.hash.split(config.hashSpliter);
      var order = hashArr[1] && parseInt(hashArr[1], 10);
      if (location.hash && config.indexDemos.concat(config.subListDemos).indexOf(name) > -1) {
        // 处理 config.indexDemos 里的组件 demo ，使其能只展示一个
        demoSort = demoSort.filter(function (i) {
          return parseInt(i.meta.order, 10) === order;
        });
      }

      if (!location.hash && config.subListDemos.indexOf(name) > -1) {
        // 处理 config.subListDemos 的 demo，使其展示一个二级菜单
        demoContent = demoSort.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { key: 'sub' + index },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: _this2.goToPage(name, index) },
                item.meta.title[locale === 'en-US' ? 'en-US' : 'zh-CN']
              )
            )
          );
        });
      } else {
        demoContent = demoSort.map(function (i, index) {
          return _react2.default.createElement(
            'div',
            { className: 'demo-preview-item', id: name + '-demo-' + i.meta.order, key: index },
            _react2.default.createElement(
              'div',
              { className: 'demoTitle' },
              i.meta.title[locale]
            ),
            _react2.default.createElement(
              'div',
              { className: 'demoContainer' },
              i.preview(_react2.default, _reactDom2.default)
            ),
            i.style ? _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: i.style } }) : null
          );
        });
      }

      var isLocalMode = window.location.port;
      var linkUrl = isLocalMode ? '/' : '/modo-mobile/mobile/';

      return _react2.default.createElement(
        'div',
        { id: name, className: 'demo' },
        _react2.default.createElement(
          'div',
          { className: 'demoName' },
          _react2.default.createElement('a', { className: 'icon', href: '' + linkUrl + window.location.search }),
          demoMeta.title,
          !demoMeta.subtitle || locale === 'en-US' ? null : _react2.default.createElement(
            'span',
            { className: 'ch' },
            demoMeta.subtitle
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'demo-list' },
          demoContent
        )
      );
    }
  }]);

  return Demo;
}(_react2.default.Component)) || _class);
exports.default = Demo;

/***/ })

})
//# sourceMappingURL=15.e135e29c77eadd391019.hot-update.js.map