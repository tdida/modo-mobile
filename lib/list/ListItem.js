"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames5 = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var ListItem =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ListItem, _React$PureComponent);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _a = this.props,
          prefixCls = _a.prefixCls,
          children = _a.children,
          className = _a.className,
          style = _a.style,
          disabled = _a.disabled,
          align = _a.align,
          title = _a.title,
          brief = _a.brief,
          wrap = _a.wrap,
          arrow = _a.arrow,
          extra = _a.extra,
          solid = _a.solid,
          restProps = __rest(_a, ["prefixCls", "children", "className", "style", "disabled", "align", "title", "brief", "wrap", "arrow", "extra", "solid"]);

      var wrapCls = (0, _classnames5["default"])("".concat(prefixCls), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-has-arrow"), arrow !== ''), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-").concat(align), align), _classnames));
      var contentCls = (0, _classnames5["default"])("".concat(prefixCls, "-content"), _defineProperty({}, "".concat(prefixCls, "-content-wrap"), wrap));
      var arrowCls = (0, _classnames5["default"])("".concat(prefixCls, "-arrow"), _defineProperty({}, "".concat(prefixCls, "-arrow-").concat(arrow), arrow));
      var labelCls = (0, _classnames5["default"])("".concat(prefixCls, "-label"), _defineProperty({}, "".concat(prefixCls, "-label-solid"), solid));
      var extraDom = extra ? React.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, typeof extra === 'string' ? React.createElement("img", {
        src: extra
      }) : extra) : null;
      var arrowDom = arrow && React.createElement("div", {
        className: arrowCls,
        "aria-hidden": "true"
      }, React.createElement(_icon["default"], {
        type: "right"
      }));
      return React.createElement("div", _extends({
        className: wrapCls,
        style: style
      }, restProps), React.createElement("div", {
        className: "".concat(prefixCls, "-inner")
      }, extraDom, React.createElement("div", {
        className: labelCls
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, title), brief ? React.createElement("div", {
        className: "".concat(prefixCls, "-brief")
      }, brief) : null), React.createElement("div", {
        className: contentCls
      }, children !== undefined && children), arrowDom));
    }
  }]);

  return ListItem;
}(React.PureComponent);

exports["default"] = ListItem;
ListItem.defaultProps = {
  prefixCls: 'm-list-item',
  align: 'right',
  arrow: '',
  solid: false
};