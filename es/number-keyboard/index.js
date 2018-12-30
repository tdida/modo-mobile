function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import * as React from 'react';
import Keyboard from './keyboard';
import Popup from '../popup';

var NumberKeyboard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(NumberKeyboard, _React$PureComponent);

  function NumberKeyboard() {
    _classCallCheck(this, NumberKeyboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(NumberKeyboard).apply(this, arguments));
  }

  _createClass(NumberKeyboard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          type = _this$props.type,
          okText = _this$props.okText,
          visible = _this$props.visible,
          disorder = _this$props.disorder,
          hideDot = _this$props.hideDot,
          onConfirm = _this$props.onConfirm,
          onDelete = _this$props.onDelete,
          onEnter = _this$props.onEnter,
          onHide = _this$props.onHide;
      return React.createElement("div", {
        className: "".concat(prefixCls, "-wrapper")
      }, React.createElement(Popup, {
        visible: visible,
        position: "bottom",
        hasMask: false
      }, React.createElement(Keyboard, {
        disorder: disorder,
        hideDot: hideDot,
        prefixCls: prefixCls,
        type: type,
        okText: okText,
        onConfirm: onConfirm,
        onDelete: onDelete,
        onEnter: onEnter,
        onHide: onHide
      })));
    }
  }]);

  return NumberKeyboard;
}(React.PureComponent);

export { NumberKeyboard as default };
NumberKeyboard.defaultProps = {
  prefixCls: 'm-number-keyboard',
  type: 'professional',
  okText: '确定',
  disorder: false,
  hideDot: false
};