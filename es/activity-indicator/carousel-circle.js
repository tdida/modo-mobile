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

var CarouselCircle =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CarouselCircle, _React$PureComponent);

  function CarouselCircle() {
    _classCallCheck(this, CarouselCircle);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarouselCircle).apply(this, arguments));
  }

  _createClass(CarouselCircle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          index = _this$props.index,
          animateValues = _this$props.animateValues;
      var cx = index * size * 1.5 + size / 2;
      var opacityValues = animateValues.join(';');
      var sizeValues = animateValues.map(function (val) {
        return val * size / 2;
      }).join(';');
      return React.createElement("circle", {
        cx: cx,
        cy: size / 2,
        r: size / 2
      }, React.createElement("animate", {
        attributeName: "fill-opacity",
        calcMode: "linear",
        repeatCount: "indefinite",
        attributeType: "XML",
        begin: "0s",
        dur: "1s",
        values: opacityValues
      }), React.createElement("animate", {
        attributeName: "r",
        calcMode: "linear",
        repeatCount: "indefinite",
        attributeType: "XML",
        begin: "0s",
        dur: "1s",
        values: sizeValues
      }));
    }
  }]);

  return CarouselCircle;
}(React.PureComponent);

export { CarouselCircle as default };
CarouselCircle.defaultProps = {
  index: 0,
  size: 16,
  animateValues: []
};