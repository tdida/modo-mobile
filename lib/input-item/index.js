"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _numberKeyboard = _interopRequireDefault(require("../number-keyboard"));

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

function noop() {}

function normalizeValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return "".concat(value);
}

var InputItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputItem, _React$Component);

  function InputItem(props) {
    var _this;

    _classCallCheck(this, InputItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputItem).call(this, props));

    _this.onInputChange = function (e) {
      var value = e.target.value;
      var type = _this.props.type;
      var newValue = value;

      switch (type) {
        case 'bankCard':
          newValue = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
          break;

        case 'phone':
          newValue = value.replace(/\D/g, '').substring(0, 11);
          var valueLen = newValue.length;

          if (valueLen > 3 && valueLen < 8) {
            newValue = "".concat(newValue.substr(0, 3), " ").concat(newValue.substr(3));
          } else if (valueLen >= 8) {
            newValue = "".concat(newValue.substr(0, 3), " ").concat(newValue.substr(3, 4), " ").concat(newValue.substr(7));
          }

          break;

        case 'digit':
          newValue = value.replace(/\D/g, '');
          break;

        case 'text':
        case 'password':
        default:
          break;
      }

      _this.handleOnChange(newValue, newValue !== value);
    };

    _this.handleOnChange = function (value) {
      var isMutated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var onChange = _this.props.onChange;

      _this.setState({
        value: value
      });

      if (onChange) {
        isMutated ? setTimeout(function () {
          return onChange(value);
        }) : onChange(value);
      }
    };

    _this.onInputBlur = function (e) {
      var value = e.target.value;

      _this.onBlur(value);
    };

    _this.onInputFocus = function (e) {
      var value = e.target.value;

      _this.onFocus(value);
    };

    _this.onFocus = function (value) {
      if (_this.debounceTimeout) {
        clearTimeout(_this.debounceTimeout);
        _this.debounceTimeout = null;
      }

      _this.setState({
        focus: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(value);
      }
    };

    _this.onBlur = function (value) {
      if (_this.inputRef) {
        _this.debounceTimeout = window.setTimeout(function () {
          if (document.activeElement !== _this.inputRef) {
            _this.setState({
              focus: false
            });
          }
        }, 50);
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(value);
      }
    };

    _this.onVirtualFocus = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly;

      if (disabled || readOnly) {
        return;
      }

      _this.setState({
        focus: true
      }, function () {
        _this.addBlurListener();
      });
    };

    _this.onVirtualBlur = function () {
      var value = _this.state.value;

      _this.onBlur(value);
    };

    _this.onVirtualConfirm = function () {
      var value = _this.state.value;

      _this.onBlur(value);

      var onVirtualKeyboardConfirm = _this.props.onVirtualKeyboardConfirm;
      if (onVirtualKeyboardConfirm) onVirtualKeyboardConfirm(value);
    };

    _this.onVirtualEnter = function (num) {
      var value = _this.state.value;
      var maxLength = _this.props.maxLength;

      if (maxLength) {
        if (value.length < maxLength) {
          _this.handleOnChange(value + num);
        }
      } else {
        _this.handleOnChange(value + num);
      }
    };

    _this.onVirtualDelete = function () {
      var value = _this.state.value;
      if (value === '') return;

      _this.handleOnChange(value.substr(0, value.length - 1));
    };

    _this.addBlurListener = function () {
      document.addEventListener('click', _this.doBlur, false);
    };

    _this.removeBlurListener = function () {
      document.removeEventListener('click', _this.doBlur, false);
    };

    _this.doBlur = function (ev) {
      var value = _this.state.value;

      if (ev.target !== _this.inputRef) {
        _this.onBlur(value);
      }
    };

    _this.clearInput = function () {
      _this.setState({
        value: ''
      });

      if (_this.props.onChange) {
        _this.props.onChange('');
      }

      _this.focus();
    }; // this is instance method for user to use


    _this.focus = function () {
      _this.removeBlurListener();

      if (_this.inputRef) {
        _this.inputRef.focus();
      }

      setTimeout(function () {
        _this.addBlurListener();
      }, 50);
    };

    _this.state = {
      placeholder: props.placeholder,
      value: normalizeValue(props.value || props.defaultValue)
    };
    return _this;
  }

  _createClass(InputItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.debounceTimeout) {
        window.clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          title = _this$props2.title,
          extra = _this$props2.extra,
          type = _this$props2.type,
          name = _this$props2.name,
          align = _this$props2.align,
          clear = _this$props2.clear,
          error = _this$props2.error,
          brief = _this$props2.brief,
          placeholder = _this$props2.placeholder,
          readOnly = _this$props2.readOnly,
          disabled = _this$props2.disabled,
          maxLength = _this$props2.maxLength,
          className = _this$props2.className;
      var _this$state = this.state,
          value = _this$state.value,
          focus = _this$state.focus;
      var inputType = 'text';

      if (type === 'bankCard' || type === 'phone' || type === 'digit') {
        inputType = 'tel';
      } else {
        inputType = type;
      }

      var wrapCls = (0, _classnames3["default"])("".concat(prefixCls), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-").concat(align), align), _defineProperty(_classnames, "".concat(prefixCls, "-focus"), focus), _defineProperty(_classnames, "".concat(prefixCls, "-has-clear"), clear), _defineProperty(_classnames, "".concat(prefixCls, "-has-error"), error), _defineProperty(_classnames, "".concat(prefixCls, "-virtual-show"), focus && type === 'money'), _classnames));
      var virtualCls = (0, _classnames3["default"])("".concat(prefixCls, "-virtual-value"), _defineProperty({}, "".concat(prefixCls, "-virtual-placeholder"), !value));
      return React.createElement("div", {
        className: wrapCls
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-container")
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra), React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, title), React.createElement("div", {
        className: "".concat(prefixCls, "-control")
      }, type === 'money' ? React.createElement(React.Fragment, null, React.createElement("div", {
        ref: function ref(el) {
          return _this2.inputRef = el;
        },
        className: "".concat(prefixCls, "-virtual-input"),
        onClick: this.onVirtualFocus
      }, React.createElement("span", {
        className: virtualCls
      }, focus || value ? value : placeholder)), React.createElement(_numberKeyboard["default"], {
        visible: focus,
        onHide: this.onVirtualBlur,
        onDelete: this.onVirtualDelete,
        onEnter: this.onVirtualEnter,
        onConfirm: this.onVirtualConfirm
      })) : React.createElement("input", {
        className: "".concat(prefixCls, "-input"),
        ref: function ref(el) {
          return _this2.inputRef = el;
        },
        type: inputType,
        value: normalizeValue(value),
        name: name,
        placeholder: placeholder,
        readOnly: readOnly,
        disabled: disabled,
        maxLength: maxLength,
        onChange: this.onInputChange,
        onFocus: this.onInputFocus,
        onBlur: this.onInputBlur,
        autoComplete: "off"
      }), clear && !readOnly && !disabled && focus && value && "".concat(value).length > 0 ? React.createElement("div", {
        className: "".concat(prefixCls, "-clear"),
        onClick: this.clearInput
      }, React.createElement(_icon["default"], {
        type: "close-circle"
      })) : null)), brief || error ? React.createElement("div", {
        className: "".concat(prefixCls, "-tip")
      }, error || brief) : null);
    }
  }]);

  return InputItem;
}(React.Component);

exports["default"] = InputItem;
InputItem.defaultProps = {
  prefixCls: 'm-input-item',
  type: 'text',
  align: 'left',
  placeholder: '',
  readOnly: false,
  disabled: false,
  clear: false,
  onChange: noop,
  onBlur: noop,
  onFocus: noop,
  onVirtualKeyboardConfirm: noop
};