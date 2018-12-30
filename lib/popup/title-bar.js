"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TitleBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TitleBar, _React$Component);

  function TitleBar() {
    var _this;

    _classCallCheck(this, TitleBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TitleBar).apply(this, arguments));

    _this.handleCancel = function () {
      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel();
      }
    };

    _this.handleConfirm = function () {
      var onConfirm = _this.props.onConfirm;
      if (onConfirm) onConfirm();
    };

    return _this;
  }

  _createClass(TitleBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          title = _this$props.title,
          describe = _this$props.describe,
          okText = _this$props.okText,
          cancelText = _this$props.cancelText;
      return React.createElement("div", {
        className: "".concat(prefixCls, "-title-bar")
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-title-bar-left"),
        onClick: this.handleCancel
      }, cancelText), React.createElement("div", {
        className: "".concat(prefixCls, "-title-bar-center")
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-title-bar-title")
      }, title), React.createElement("div", {
        className: "".concat(prefixCls, "-title-bar-describe")
      }, describe)), React.createElement("div", {
        className: "".concat(prefixCls, "-title-bar-right"),
        onClick: this.handleConfirm
      }, okText));
    }
  }]);

  return TitleBar;
}(React.Component);

exports["default"] = TitleBar;
TitleBar.defaultProps = {
  prefixCls: 'm-popup'
};