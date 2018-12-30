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

import * as React from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import Carousel from './carousel';

var ActivityIndicator =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ActivityIndicator, _React$PureComponent);

  function ActivityIndicator() {
    _classCallCheck(this, ActivityIndicator);

    return _possibleConstructorReturn(this, _getPrototypeOf(ActivityIndicator).apply(this, arguments));
  }

  _createClass(ActivityIndicator, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          _this$props$prefixCls = _this$props.prefixCls,
          prefixCls = _this$props$prefixCls === void 0 ? 'm-activity-indicator' : _this$props$prefixCls,
          type = _this$props.type,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 16 : _this$props$size,
          _this$props$color = _this$props.color,
          color = _this$props$color === void 0 ? '#1e9eff' : _this$props$color,
          vertical = _this$props.vertical,
          children = _this$props.children;
      var node;

      switch (type) {
        case 'carousel':
          node = React.createElement(Carousel, {
            size: size,
            color: color,
            prefixCls: prefixCls
          });
          break;

        default:
          node = React.createElement(Icon, {
            type: "loading",
            style: {
              color: color,
              fontSize: size
            }
          });
          break;
      }

      var wrapCls = classnames((_classnames = {}, _defineProperty(_classnames, prefixCls, true), _defineProperty(_classnames, "".concat(prefixCls, "-vertical"), vertical), _classnames));
      return React.createElement("div", {
        className: wrapCls
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-loading")
      }, node), React.createElement("div", {
        className: "".concat(prefixCls, "-text")
      }, children));
    }
  }]);

  return ActivityIndicator;
}(React.PureComponent);

export { ActivityIndicator as default };
ActivityIndicator.defaultProps = {
  type: 'roller',
  vertical: false
};