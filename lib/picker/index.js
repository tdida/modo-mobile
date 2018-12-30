"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _arrayTreeFilter = _interopRequireDefault(require("array-tree-filter"));

var _pickerView = _interopRequireDefault(require("./picker-view"));

var _popup = _interopRequireDefault(require("../popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function noop() {}

var Picker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker() {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).apply(this, arguments));
    _this.state = {
      value: _this.getValue(),
      visible: false
    };

    _this.handleChange = function (value) {
      _this.setState({
        value: value
      });
    };

    _this.handlePopupCancel = function () {
      _this.props.onCancel();

      _this.setState({
        visible: false
      });
    };

    _this.handlePopupConfirm = function () {
      _this.props.onConfirm(_this.state.value);

      _this.props.onChange(_this.state.value);

      _this.setState({
        visible: false
      });
    };

    _this.fireVisibleChange = function () {
      var disabled = _this.props.disabled;

      if (!disabled) {
        _this.setState({
          visible: !_this.state.visible
        });
      }
    };

    _this.getLabel = function () {
      var _this$props = _this.props,
          cascade = _this$props.cascade,
          data = _this$props.data,
          cols = _this$props.cols;

      var value = (_this.props.value || _this.state.value || _this.props.defaultValue).slice(0, cols);

      var treeChildren = [];

      if (cascade) {
        treeChildren = (0, _arrayTreeFilter["default"])(data, function (c, level) {
          return c.value === value[level];
        });
      } else {
        value.forEach(function (v, i) {
          var item = data[i].find(function (col) {
            return col.value === v;
          });
          if (item) treeChildren.push(item);
        });
      }

      return treeChildren.map(function (v) {
        return v.label;
      }).join(' ');
    };

    return _this;
  }

  _createClass(Picker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: this.getValue(nextProps.data, nextProps.value)
        });
      }
    }
  }, {
    key: "getValue",
    value: function getValue(d, val) {
      var value = val || this.props.value || this.props.defaultValue || [];

      if (!value || !value.length || value.indexOf(undefined) > -1) {
        value = [];

        if (this.props.cascade) {
          var data = d || this.props.data;
          var cols = data.length > this.props.cols ? this.props.cols : data.length;

          for (var i = 0; i < cols; i++) {
            value[i] = data[0].value;
          }
        } else {
          var _data = d || this.props.data;

          var _cols = _data.length > this.props.cols ? this.props.cols : _data.length;

          for (var _i = 0; _i < _cols; _i++) {
            value[_i] = _data[_i][0].value;
          }
        }
      }

      return value.slice(0, this.props.cols);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          isView = _this$props2.isView,
          cols = _this$props2.cols,
          children = _this$props2.children,
          data = _this$props2.data,
          cascade = _this$props2.cascade,
          disabled = _this$props2.disabled,
          title = _this$props2.title,
          okText = _this$props2.okText,
          cancelText = _this$props2.cancelText,
          onColumnChange = _this$props2.onColumnChange;
      var _this$state = this.state,
          value = _this$state.value,
          visible = _this$state.visible;
      var pickerNode = React.createElement(_pickerView["default"], {
        prefixCls: prefixCls,
        data: data,
        cols: cols,
        value: value,
        cascade: cascade,
        onChange: this.handleChange,
        onColumnChange: onColumnChange
      });
      this.getLabel();
      return React.createElement(React.Fragment, null, isView ? pickerNode : React.createElement(React.Fragment, null, children && typeof children !== 'string' && React.isValidElement(children) && React.cloneElement(children, {
        disabled: disabled,
        onClick: this.fireVisibleChange,
        children: this.getLabel()
      }), React.createElement(_popup["default"], {
        position: "bottom",
        visible: visible,
        maskClosable: true,
        destroyed: true,
        onClose: this.fireVisibleChange
      }, React.createElement(_popup["default"].TitleBar, {
        title: title,
        okText: okText,
        cancelText: cancelText,
        onCancel: this.handlePopupCancel,
        onConfirm: this.handlePopupConfirm
      }), pickerNode)));
    }
  }]);

  return Picker;
}(React.Component);

exports["default"] = Picker;
Picker.defaultProps = {
  prefixCls: 'm-picker',
  isView: false,
  cols: 3,
  cascade: false,
  disabled: false,
  okText: '确定',
  cancelText: '取消',
  onChange: noop,
  onCancel: noop,
  onConfirm: noop,
  onColumnChange: noop
};