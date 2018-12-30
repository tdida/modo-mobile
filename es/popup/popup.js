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
import Animate from 'rc-animate';
import TitleBar from './title-bar';
import View from '../view';

var Popup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popup, _React$Component);

  function Popup() {
    var _this;

    _classCallCheck(this, Popup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popup).apply(this, arguments));

    _this.handlePreventScroll = function (isBind) {
      var handler = isBind ? 'addEventListener' : 'removeEventListener';

      if (_this.maskRef) {
        _this.maskRef[handler]('touchmove', _this.handlePreventDefault, false);
      } // if (this.boxRef) {
      //   this.boxRef[handler]('touchmove', this.handlePreventDefault, false);
      // }


      _this.handlePreventScrollExclude(isBind, null);
    };

    _this.handlePreventScrollExclude = function (isBind, preventScrollExclude) {
      var handler = isBind ? 'addEventListener' : 'removeEventListener';
      preventScrollExclude = preventScrollExclude || _this.props.preventScrollExclude;
      var excluder = preventScrollExclude ? typeof preventScrollExclude === 'string' ? _this.boxRef.querySelector(preventScrollExclude) : preventScrollExclude : null;

      if (excluder) {
        excluder[handler]('touchmove', _this.handleStopImmediatePropagation, false);
      }
    };

    _this.handleOpen = function () {
      if (_this.props.preventScroll) {
        _this.handlePreventScroll(true);
      }
    };

    _this.handleClose = function (e) {
      var onClose = _this.props.onClose;

      if (_this.props.preventScroll) {
        _this.handlePreventScroll(false);
      }

      if (onClose) {
        onClose(e);
      }
    };

    _this.handleMaskClick = function (e) {
      if (_this.props.maskClosable) {
        _this.handleClose(e);
      }
    };

    _this.handleOnEnd = function (key, exists) {
      var onAnimateEnd = _this.props.onAnimateEnd;
      if (onAnimateEnd) onAnimateEnd(exists, key);
    };

    return _this;
  }

  _createClass(Popup, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.visible && !prevProps.visible) {
        this.handleOpen();
      }

      if (this.props.preventScrollExclude !== prevProps.preventScrollExclude) {
        this.handlePreventScrollExclude(false, this.props.preventScrollExclude);
        this.handlePreventScrollExclude(true, prevProps.preventScrollExclude);
      }
    }
  }, {
    key: "handlePreventDefault",
    value: function handlePreventDefault(e) {
      e.preventDefault();
    }
  }, {
    key: "handleStopImmediatePropagation",
    value: function handleStopImmediatePropagation(e) {
      e.stopImmediatePropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          visible = _this$props.visible,
          children = _this$props.children,
          hasMask = _this$props.hasMask,
          position = _this$props.position,
          destroyed = _this$props.destroyed;

      var transtion = function () {
        switch (position) {
          case 'bottom':
            return 'move-down';

          case 'top':
            return 'move-up';

          case 'left':
            return 'move-left';

          case 'right':
            return 'move-right';

          default:
            return 'fade';
        }
      }();

      var maskNode = hasMask && React.createElement(Animate, {
        component: "",
        transitionName: "fade",
        showProp: "show"
      }, visible || !destroyed ? React.createElement(View, {
        show: visible
      }, React.createElement("div", {
        ref: function ref(e) {
          return _this2.maskRef = e;
        },
        className: "".concat(prefixCls, "-mask"),
        onClick: this.handleMaskClick
      })) : null);
      return React.createElement("div", {
        className: "".concat(prefixCls, " ").concat(prefixCls, "-").concat(position)
      }, maskNode, React.createElement(Animate, {
        component: "",
        transitionName: transtion,
        showProp: "show",
        onEnd: this.handleOnEnd
      }, visible || !destroyed ? React.createElement(View, {
        show: visible
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-box"),
        ref: function ref(e) {
          return _this2.boxRef = e;
        }
      }, children)) : null));
    }
  }]);

  return Popup;
}(React.Component);

Popup.TitleBar = TitleBar;
Popup.defaultProps = {
  closable: true,
  hasMask: true,
  maskClosable: true,
  destroyed: false,
  position: 'center',
  prefixCls: 'm-popup',
  preventScroll: false,
  preventScrollExclude: '',
  visible: false
};
export default Popup;