function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * https://github.com/jasonslyvia/react-marquee
 * remove PC
 * support React Element for text prop
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

var Marquee =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Marquee, _React$Component);

  function Marquee() {
    var _this;

    _classCallCheck(this, Marquee);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Marquee).apply(this, arguments));
    _this.state = {
      animatedWidth: 0,
      overflowWidth: 0
    }; // tslint:disable-next-line:variable-name

    _this._marqueeTimer = 0;
    return _this;
  }

  _createClass(Marquee, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._measureText();

      this._startAnimation();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._measureText();

      if (!this._marqueeTimer) {
        this._startAnimation();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this._marqueeTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          text = _this$props.text;

      var style = _extends({
        position: 'relative',
        right: this.state.animatedWidth,
        whiteSpace: 'nowrap',
        display: 'inline-block'
      }, this.props.style);

      return React.createElement("div", {
        className: "".concat(prefixCls, "-marquee-wrap ").concat(className),
        style: {
          overflow: 'hidden'
        },
        role: "marquee"
      }, React.createElement("div", {
        ref: function ref(el) {
          return _this2.textRef = el;
        },
        className: "".concat(prefixCls, "-marquee"),
        style: style
      }, text));
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      var _this3 = this;

      if (this._marqueeTimer) {
        window.clearTimeout(this._marqueeTimer);
      }

      var fps = this.props.fps;
      var TIMEOUT = 1 / fps * 1000;
      var isLeading = this.state.animatedWidth === 0;
      var timeout = isLeading ? this.props.leading : TIMEOUT;

      var animate = function animate() {
        var overflowWidth = _this3.state.overflowWidth;
        var animatedWidth = _this3.state.animatedWidth + 1;
        var isRoundOver = animatedWidth > overflowWidth;

        if (isRoundOver) {
          if (_this3.props.loop) {
            animatedWidth = 0;
          } else {
            return;
          }
        }

        if (isRoundOver && _this3.props.trailing) {
          _this3._marqueeTimer = window.setTimeout(function () {
            _this3.setState({
              animatedWidth: animatedWidth
            });

            _this3._marqueeTimer = window.setTimeout(animate, TIMEOUT);
          }, _this3.props.trailing);
        } else {
          _this3.setState({
            animatedWidth: animatedWidth
          });

          _this3._marqueeTimer = window.setTimeout(animate, TIMEOUT);
        }
      };

      if (this.state.overflowWidth !== 0) {
        this._marqueeTimer = window.setTimeout(animate, timeout);
      }
    }
  }, {
    key: "_measureText",
    value: function _measureText() {
      var container = ReactDOM.findDOMNode(this);
      var node = this.textRef;

      if (container && node) {
        var containerWidth = container.offsetWidth;
        var textWidth = node.offsetWidth;
        var overflowWidth = textWidth - containerWidth;

        if (overflowWidth !== this.state.overflowWidth) {
          this.setState({
            overflowWidth: overflowWidth
          });
        }
      }
    }
  }]);

  return Marquee;
}(React.Component);

export { Marquee as default };
Marquee.defaultProps = {
  className: '',
  fps: 30,
  leading: 500,
  loop: true,
  text: '',
  trailing: 800
};