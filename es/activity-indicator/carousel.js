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
import CarouselCircle from './carousel-circle';

var Carousel =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Carousel, _React$PureComponent);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).apply(this, arguments));
    _this.state = {
      animateValues: [[1, 0.8, 0.6, 0.6, 0.6, 0.8, 1], [0.6, 0.8, 1, 0.8, 0.6, 0.6, 0.6], [0.6, 0.6, 0.6, 0.8, 1, 0.8, 0.6]]
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          size = _this$props.size,
          color = _this$props.color;
      var animateValues = this.state.animateValues;
      var circleNode = animateValues.map(function (value, index) {
        return React.createElement(CarouselCircle, {
          key: index,
          size: size,
          index: index,
          animateValues: value
        });
      });
      var viewWidth = animateValues.length * size + (animateValues.length - 1) * size / 2;
      var viewBox = "0 0 ".concat(viewWidth, " ").concat(size);
      var svgStyle = {
        width: viewWidth,
        height: size
      };
      return React.createElement("div", {
        className: "".concat(prefixCls, "-carousel")
      }, React.createElement("svg", {
        viewBox: viewBox,
        className: "".concat(prefixCls, "-carousel-svg"),
        style: svgStyle,
        fill: color,
        xmlns: "http://www.w3.org/2000/svg"
      }, circleNode));
    }
  }]);

  return Carousel;
}(React.PureComponent);

export { Carousel as default };