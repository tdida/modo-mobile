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

import classnames from 'classnames';
import * as React from 'react';
import Icon from '../icon';

var Agree =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Agree, _React$PureComponent);

  function Agree(props) {
    var _this;

    _classCallCheck(this, Agree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Agree).call(this, props));

    _this.handleClick = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled;

      if (!disabled) {
        _this.setState({
          value: !_this.state.value
        });

        if (onChange) {
          onChange(!_this.state.value);
        }
      }
    };

    _this.state = {
      value: props.value || props.defaultValue
    };
    return _this;
  }

  _createClass(Agree, [{
    key: "render",
    value: function render() {
      var _classnames;

      var value = this.state.value;
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          className = _this$props2.className;
      var wrapCls = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-checked"), value), _classnames));
      return React.createElement("div", {
        className: wrapCls
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-icon"),
        onClick: this.handleClick
      }, React.createElement(Icon, {
        type: "check-circle"
      })), React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }
    }
  }]);

  return Agree;
}(React.PureComponent);

export { Agree as default };
Agree.defaultProps = {
  disabled: false,
  prefixCls: 'm-agree'
};