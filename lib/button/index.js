"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return React.createElement("span", null, child);
  }

  return child;
}

var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));

    _this.handleClick = function (e) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick(e);
      }
    };

    return _this;
  }

  _createClass(Button, [{
    key: "isNeedInserted",
    value: function isNeedInserted() {
      var _this$props = this.props,
          icon = _this$props.icon,
          children = _this$props.children;
      return React.Children.count(children) === 1 && !icon;
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _a = this.props,
          children = _a.children,
          className = _a.className,
          prefixCls = _a.prefixCls,
          type = _a.type,
          size = _a.size,
          shape = _a.shape,
          inline = _a.inline,
          icon = _a.icon,
          loading = _a.loading,
          onClick = _a.onClick,
          restProps = __rest(_a, ["children", "className", "prefixCls", "type", "size", "shape", "inline", "icon", "loading", "onClick"]);

      var iconType = loading ? 'loading' : icon;
      var wrapCls = (0, _classnames2["default"])(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classnames, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_classnames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classnames, "".concat(prefixCls, "-inline"), inline || shape), _defineProperty(_classnames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classnames, "".concat(prefixCls, "-icon"), !!iconType), _classnames));
      var iconNode = iconType ? React.createElement(_icon["default"], {
        type: iconType
      }) : null;
      var kids = children || children === 0 ? React.Children.map(children, function (child) {
        return insertSpace(child, _this2.isNeedInserted());
      }) : null;

      if ('href' in restProps) {
        return React.createElement("a", _extends({}, restProps, {
          className: wrapCls,
          onClick: this.handleClick
        }), iconNode, kids);
      } else {
        var htmlType = restProps.htmlType,
            otherProps = __rest(restProps, ["htmlType"]);

        return React.createElement("button", _extends({}, otherProps, {
          type: htmlType || 'button',
          className: wrapCls,
          onClick: this.handleClick
        }), React.createElement("div", {
          className: "".concat(prefixCls, "-inner")
        }, iconNode, kids));
      }
    }
  }]);

  return Button;
}(React.PureComponent);

Button.defaultProps = {
  disabled: false,
  inline: false,
  loading: false,
  size: 'large',
  prefixCls: 'm-button'
};
var _default = Button;
exports["default"] = _default;