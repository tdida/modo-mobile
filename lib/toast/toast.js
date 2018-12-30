"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _popup = _interopRequireDefault(require("../popup"));

var _PropsType = require("./PropsType");

require("./style/index.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Toast =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Toast, _React$PureComponent);

  function Toast() {
    var _this;

    _classCallCheck(this, Toast);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
    _this.state = {
      visible: true
    };

    _this.clearCloseTimer = function () {
      var duration = _this.props.duration;

      if (duration) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };

    _this.startCloseTimer = function (duration) {
      clearTimeout(_this.closeTimer);

      _this.setState({
        visible: true
      });

      if (duration) {
        _this.closeTimer = setTimeout(function () {
          _this.onClose();
        }, duration);
      }
    };

    _this.onClose = function () {
      _this.setState({
        visible: false
      });
    };

    _this.handleAnimateEnd = function (exists) {
      var willUnmount = _this.props.willUnmount;

      if (!exists && willUnmount) {
        willUnmount();
      }
    };

    return _this;
  }

  _createClass(Toast, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer(this.props.duration);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.clearCloseTimer();
      this.startCloseTimer(nextProps.duration);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          icon = _this$props.icon,
          content = _this$props.content,
          hasMask = _this$props.hasMask,
          position = _this$props.position;
      var wrapCls = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls), true), _defineProperty(_classNames, "".concat(prefixCls, "-icon"), icon), _defineProperty(_classNames, position, true), _classNames));
      return React.createElement("div", {
        className: wrapCls
      }, React.createElement(_popup["default"], {
        visible: this.state.visible,
        hasMask: hasMask,
        onAnimateEnd: this.handleAnimateEnd
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-wrapper")
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, content ? React.createElement("span", null, content) : ''))));
    }
  }]);

  return Toast;
}(React.PureComponent);

Toast.defaultProps = _PropsType.defaultProps;
var _default = Toast;
exports["default"] = _default;