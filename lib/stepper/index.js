"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames4 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function getDecimalNum(num) {
  try {
    return num.toString().split('.')[1].length;
  } catch (e) {
    return 0;
  }
}

function accAdd(num1, num2) {
  var r1 = getDecimalNum(num1);
  var r2 = getDecimalNum(num2);
  var m = Math.pow(10, Math.max(r1, r2));
  return +((num1 * m + num2 * m) / m);
}

function subtr(num1, num2) {
  var r1 = getDecimalNum(num1);
  var r2 = getDecimalNum(num2);
  var m = Math.pow(10, Math.max(r1, r2));
  var n = r1 >= r2 ? r1 : r2;
  return +((num1 * m - num2 * m) / m).toFixed(n);
}

function getButtonStatus(value, min, max) {
  var status = {
    disabledReduce: false,
    disabledAdd: false
  };

  if (typeof value !== 'undefined' && value !== null) {
    status.disabledAdd = +value >= max;
    status.disabledReduce = +value <= min;
  }

  return status;
}

function formatNum(value, integer) {
  value = String(value).replace(/[^0-9.-]/g, '');
  return value === '' ? 0 : integer ? Math.floor(value) : +value;
}

function getValidValue(value, min, max, integer) {
  return Math.max(Math.min(formatNum(max, integer), formatNum(value, integer)), formatNum(min, integer));
}

var Stepper =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Stepper, _React$PureComponent);

  function Stepper(props) {
    var _this;

    _classCallCheck(this, Stepper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stepper).call(this, props));

    _this.onReduce = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          min = _this$props.min,
          step = _this$props.step,
          integer = _this$props.integer;
      var inputValue = _this.state.inputValue;
      var val = subtr(inputValue, step);

      if (disabled || formatNum(val, integer) < formatNum(min, integer)) {
        return;
      }

      _this.onChange(val);
    };

    _this.onAdd = function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          max = _this$props2.max,
          step = _this$props2.step,
          integer = _this$props2.integer;
      var inputValue = _this.state.inputValue;
      var val = accAdd(inputValue, step);

      if (disabled || formatNum(val, integer) > formatNum(max, integer)) {
        return;
      }

      _this.onChange(val);
    };

    _this.onChange = function (val) {
      var _this$props3 = _this.props,
          max = _this$props3.max,
          min = _this$props3.min;

      _this.setState(_extends({
        inputValue: val
      }, getButtonStatus(val, min, max)));

      var onChange = _this.props.onChange;
      if (onChange) onChange(val);
    };

    _this.handleChange = function (e) {
      var value = e.target.value;

      _this.onChange(value);
    };

    _this.handleInputBlur = function () {
      var _this$props4 = _this.props,
          max = _this$props4.max,
          min = _this$props4.min,
          integer = _this$props4.integer;
      var inputValue = _this.state.inputValue;

      _this.setState({
        inputValue: getValidValue(inputValue, min, max, integer)
      });
    };

    var value = props.value,
        defaultValue = props.defaultValue,
        max = props.max,
        min = props.min;
    var newValue = value || defaultValue || 0;

    var _getButtonStatus = getButtonStatus(newValue, min, max),
        disabledReduce = _getButtonStatus.disabledReduce,
        disabledAdd = _getButtonStatus.disabledAdd;

    _this.state = {
      inputValue: newValue,
      disabledReduce: disabledReduce,
      disabledAdd: disabledAdd
    };
    return _this;
  }

  _createClass(Stepper, [{
    key: "render",
    value: function render() {
      var _classnames, _classnames2, _classnames3;

      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          disabled = _this$props5.disabled,
          readOnly = _this$props5.readOnly,
          min = _this$props5.min,
          max = _this$props5.max,
          step = _this$props5.step;
      var _this$state = this.state,
          inputValue = _this$state.inputValue,
          disabledReduce = _this$state.disabledReduce,
          disabledAdd = _this$state.disabledAdd;
      var wrapCls = (0, _classnames4["default"])((_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls), true), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _classnames));
      var reduceCls = (0, _classnames4["default"])((_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-button"), true), _defineProperty(_classnames2, "".concat(prefixCls, "-button-reduce"), true), _defineProperty(_classnames2, "".concat(prefixCls, "-button-disabled"), disabledReduce), _classnames2));
      var addCls = (0, _classnames4["default"])((_classnames3 = {}, _defineProperty(_classnames3, "".concat(prefixCls, "-button"), true), _defineProperty(_classnames3, "".concat(prefixCls, "-button-add"), true), _defineProperty(_classnames3, "".concat(prefixCls, "-button-disabled"), disabledAdd), _classnames3));
      return React.createElement("div", {
        className: wrapCls
      }, React.createElement("div", {
        className: reduceCls,
        onClick: this.onReduce
      }), React.createElement("div", {
        className: "".concat(prefixCls, "-number")
      }, React.createElement("input", {
        type: "number",
        value: inputValue,
        readOnly: readOnly || disabled,
        onBlur: this.handleInputBlur,
        onChange: this.handleChange,
        min: min,
        max: max,
        step: step
      })), React.createElement("div", {
        className: addCls,
        onClick: this.onAdd
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (typeof nextProps.value !== 'undefined') {
        var value = nextProps.value,
            min = nextProps.min,
            max = nextProps.max;
        return getButtonStatus(value, min, max);
      }

      return null;
    }
  }]);

  return Stepper;
}(React.PureComponent);

exports["default"] = Stepper;
Stepper.defaultProps = {
  prefixCls: 'm-stepper',
  step: 1,
  min: -Number.MAX_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  disabled: false,
  readOnly: false,
  integer: false
};