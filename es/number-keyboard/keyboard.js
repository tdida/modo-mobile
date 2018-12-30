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
import Icon from '../icon';

var Keyboard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Keyboard, _React$PureComponent);

  function Keyboard() {
    var _this;

    _classCallCheck(this, Keyboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Keyboard).apply(this, arguments));
    _this.state = {
      baseStack: []
    };

    _this.orderKeyNumber = function () {
      var disorder = _this.props.disorder;
      var baseStack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      var keyNumberList = [];

      if (disorder) {
        var index = 0;

        while (index < 10) {
          keyNumberList[index] = baseStack.splice(Math.floor(Math.random() * baseStack.length), 1)[0] || 0;
          index++;
        }
      } else {
        keyNumberList = baseStack;
      }

      _this.setState({
        baseStack: keyNumberList
      });
    };

    _this.onNumberClick = function (e, num) {
      e.nativeEvent.stopImmediatePropagation();
      var onEnter = _this.props.onEnter;
      if (onEnter) onEnter(num);
    };

    _this.onSlideDoneClick = function (e) {
      e.nativeEvent.stopImmediatePropagation();
      var onHide = _this.props.onHide;
      if (onHide) onHide();
    };

    _this.onDeleteClick = function (e) {
      e.nativeEvent.stopImmediatePropagation();
      var onDelete = _this.props.onDelete;
      if (onDelete) onDelete();
    };

    _this.onConfirmClick = function (e) {
      e.nativeEvent.stopImmediatePropagation();
      var onConfirm = _this.props.onConfirm;
      if (onConfirm) onConfirm();
    };

    return _this;
  }

  _createClass(Keyboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.orderKeyNumber();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          type = _this$props.type,
          okText = _this$props.okText,
          hideDot = _this$props.hideDot;
      var baseStack = this.state.baseStack;
      var numberNode = baseStack.map(function (num, index) {
        return index !== 9 ? React.createElement("li", {
          key: num,
          className: "".concat(prefixCls, "-number-item"),
          onClick: function onClick(e) {
            return _this2.onNumberClick(e, num);
          }
        }, num) : null;
      });
      var numOperateNode = type === 'professional' ? React.createElement(React.Fragment, null, hideDot ? React.createElement("li", {
        className: "".concat(prefixCls, "-number-item ").concat(prefixCls, "-number-item-no")
      }) : React.createElement("li", {
        className: "".concat(prefixCls, "-number-item"),
        onClick: function onClick(e) {
          return _this2.onNumberClick(e, '.');
        }
      }, "."), React.createElement("li", {
        className: "".concat(prefixCls, "-number-item"),
        onClick: function onClick(e) {
          return _this2.onNumberClick(e, baseStack[9]);
        }
      }, baseStack[9]), React.createElement("li", {
        className: "".concat(prefixCls, "-number-item ").concat(prefixCls, "-number-item-slidedown"),
        onClick: this.onSlideDoneClick
      }, React.createElement(Icon, {
        type: "keyboard"
      }))) : React.createElement(React.Fragment, null, React.createElement("li", {
        className: "".concat(prefixCls, "-number-item ").concat(prefixCls, "-number-item-no")
      }), React.createElement("li", {
        className: "".concat(prefixCls, "-number-item"),
        onClick: function onClick(e) {
          return _this2.onNumberClick(e, baseStack[9]);
        }
      }, baseStack[9]), React.createElement("li", {
        className: "".concat(prefixCls, "-number-item ").concat(prefixCls, "-number-item-delete"),
        onClick: this.onDeleteClick
      }, React.createElement(Icon, {
        type: "backspace"
      })));
      return React.createElement("div", {
        className: prefixCls
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-number")
      }, React.createElement("ul", {
        className: "".concat(prefixCls, "-number-list")
      }, numberNode, numOperateNode)), type === 'professional' ? React.createElement("div", {
        className: "".concat(prefixCls, "-operate")
      }, React.createElement("ul", {
        className: "".concat(prefixCls, "-operate-list")
      }, React.createElement("li", {
        className: "".concat(prefixCls, "-operate-item ").concat(prefixCls, "-operate-item-delete"),
        onClick: this.onDeleteClick
      }, React.createElement(Icon, {
        type: "backspace"
      })), React.createElement("li", {
        className: "".concat(prefixCls, "-operate-item ").concat(prefixCls, "-operate-item-confirm"),
        onClick: this.onConfirmClick
      }, okText))) : null);
    }
  }]);

  return Keyboard;
}(React.PureComponent);

export { Keyboard as default };
Keyboard.defaultProps = {
  prefixCls: 'm-number-keyboard',
  type: 'professional',
  okText: '确定',
  disorder: false,
  hideDot: false
};