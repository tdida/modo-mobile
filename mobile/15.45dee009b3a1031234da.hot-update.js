webpackHotUpdate(15,{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _modoMobile = __webpack_require__(167);

var _reactIntl = __webpack_require__(412);

__webpack_require__(432);

var _enUS = __webpack_require__(435);

var _enUS2 = _interopRequireDefault(_enUS);

var _zhCN = __webpack_require__(437);

var _zhCN2 = _interopRequireDefault(_zhCN);

var _utils = __webpack_require__(161);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint arrow-body-style: 0 */
/* eslint no-console:0 */

var sort = function sort(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _initialiseProps.call(_this);

    var lang = (0, _utils.getQuery)('lang') || window.navigator.language;
    var appLocale = lang.toLowerCase() === 'zh-cn' ? _zhCN2.default : _enUS2.default;
    (0, _reactIntl.addLocaleData)(appLocale.data);
    _this.state = _extends({
      appLocale: appLocale,
      cateOpend: [false, false, false, false, false, false, false]
    }, _this.getStateCache());
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window.parent && window.parent.postMessage) {
        window.parent.postMessage('mobile_loaded', '/');
      }
      var scrollTop = this.state.scrollTop;

      if (scrollTop) {
        setTimeout(function () {
          document.documentElement.scrollTop = scrollTop;
          document.body.scrollTop = scrollTop;
        }, 500);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          picked = _props.picked,
          config = _props.themeConfig,
          location = _props.location;
      var _state = this.state,
          appLocale = _state.appLocale,
          cateOpend = _state.cateOpend;

      var lists = {};

      console.log(config);

      picked.components.filter(function (item) {
        return item.meta.filename.includes(appLocale.locale);
      }).forEach(function (i) {
        var meta = i.meta;

        if (!lists[meta.type]) {
          lists[meta.type] = [];
        }
        var fileName = meta.filename.split('/')[1];
        if (fileName && config.indexDemos.indexOf(fileName) > -1) {
          // add demos
          var demos = [];
          picked.indexDemos.forEach(function (j) {
            if (j.component === fileName) {
              demos.push(j.meta);
            }
          });
          meta.demos = demos;
        }
        var source = (0, _utils.getQuery)('source');
        if (source && source === 'design') {
          if (meta.source && meta.source === 'design') {
            lists[meta.type].push(meta);
          }
        } else {
          lists[meta.type].push(meta);
        }
      });

      var rootPath = location.basename + 'components';
      if (window.location.port === '8002') {
        rootPath = '/components';
      }

      return _react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: appLocale.locale, messages: appLocale.messages },
        _react2.default.createElement(
          'div',
          { className: 'm-demo-page' },
          _react2.default.createElement(
            'div',
            { className: 'm-demo-header' },
            _react2.default.createElement(
              'h1',
              { className: 'm-demo-title' },
              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.site.title' })
            ),
            _react2.default.createElement(
              'h2',
              { className: 'm-demo-subtitle' },
              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app.site.subTitle' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'm-demo-content' },
            Object.keys(lists).sort(function (a, b) {
              return config.typeOrder[a] - config.typeOrder[b];
            }).map(function (cate, index) {
              return lists[cate].length ? _react2.default.createElement(
                'div',
                {
                  key: cate + '-' + index,
                  className: 'm-demo-category ' + (cateOpend[index] ? 'm-demo-category-open' : 'm-demo-category-closed')
                },
                _react2.default.createElement(
                  'div',
                  {
                    onClick: function onClick() {
                      return _this2.onOpenChange(index);
                    },
                    className: 'm-demo-category-title'
                  },
                  _react2.default.createElement(
                    'div',
                    { className: 'm-demo-category-name' },
                    appLocale.locale === 'en-US' ? cate : config.typeChinese[cate] + ' ' + cate
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'm-demo-category-arrow' },
                    _react2.default.createElement(_modoMobile.Icon, { type: 'down' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'm-demo-category-list' },
                  lists[cate].sort(function (a, b) {
                    return sort(a.title.toLowerCase(), b.title.toLowerCase());
                  }).map(function (item) {
                    var paths = item.filename.split('/');
                    if (config.indexDemos.indexOf(paths[1]) > -1) {
                      return item.demos.sort(function (a, b) {
                        return a.order > b.order;
                      }).map(function (j) {
                        return _react2.default.createElement(
                          'div',
                          {
                            className: 'm-demo-category-item',
                            key: j.filename + '-' + cate,
                            onClick: function onClick() {
                              _this2.setStateCache({
                                scrollTop: _this2.scrollTop()
                              });
                              window.location.href = rootPath + '/' + paths[1] + _this2.addSearch() + '#' + (paths[1] + config.hashSpliter + j.order);
                            }
                          },
                          item.title + ' ' + (appLocale.locale === 'zh-CN' ? item.subtitle : '') + '-' + j.title[appLocale.locale]
                        );
                      });
                    }
                    return _react2.default.createElement(
                      'div',
                      {
                        className: 'm-demo-category-item',
                        key: item.filename + '-' + cate,
                        onClick: function onClick() {
                          _this2.setStateCache({
                            scrollTop: _this2.scrollTop()
                          });
                          window.location.href = rootPath + '/' + paths[1] + _this2.addSearch();
                        }
                      },
                      item.title + ' ',
                      !item.subtitle || appLocale.locale === 'en-US' ? null : item.subtitle
                    );
                  })
                )
              ) : null;
            })
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getStateCache = function () {
    try {
      var data = JSON.parse(localStorage.getItem('_mobile-index-state'));
      if (data && +new Date() - data.lastDate < 30 * 60000) {
        return data;
      }
    } catch (error) {
      console.warn('state cache get error:', error);
    }
    return {};
  };

  this.setStateCache = function () {
    var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    try {
      var _state2 = _this3.state,
          appLocale = _state2.appLocale,
          data = _objectWithoutProperties(_state2, ['appLocale']);

      localStorage.setItem('_mobile-index-state', JSON.stringify(_extends({}, data, {
        lastDate: +new Date()
      }, newData)));
    } catch (error) {
      console.warn('state cache set error:', error);
    }
  };

  this.onOpenChange = function (index) {
    var cateOpend = _this3.state.cateOpend;

    cateOpend[index] = !cateOpend[index];
    _this3.setState({ cateOpend: cateOpend }, function () {
      _this3.setStateCache({
        scrollTop: 0
      });
    });
  };

  this.addSearch = function () {
    return window.location.search || '';
  };

  this.scrollTop = function () {
    return document.documentElement.scrollTop || document.body.scrollTop;
  };
};

exports.default = App;

/***/ })

})
//# sourceMappingURL=15.45dee009b3a1031234da.hot-update.js.map