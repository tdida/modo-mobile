"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _arrayTreeFilter = _interopRequireDefault(require("array-tree-filter"));

var _pickerColumn = _interopRequireDefault(require("./picker-column"));

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

var PickerView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PickerView, _React$Component);

  function PickerView() {
    var _this;

    _classCallCheck(this, PickerView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PickerView).apply(this, arguments));
    _this.state = {
      value: _this.props.value || []
    };

    _this.onValueChange = function (index, val) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onColumnChange = _this$props.onColumnChange,
          data = _this$props.data,
          cols = _this$props.cols,
          cascade = _this$props.cascade;

      var value = _this.state.value.slice(0);

      value[index] = val;

      if (cascade) {
        var newData = data;
        var item = newData.find(function (v) {
          return v.value === value[0];
        });

        var _loop = function _loop(i) {
          if (item && item.children && item.children.length) {
            var child = item.children.find(function (v) {
              return v.value === value[i];
            });

            if (child) {
              item = child;
            } else {
              value[i] = item.children[0].value;
              item = item.children[0];
            }
          } else {
            value[i] = '';
          }
        };

        for (var i = 1; i < cols; i++) {
          _loop(i);
        }
      }

      _this.setState({
        value: value
      });

      if (onChange) onChange(value);
      if (onColumnChange) onColumnChange(val, index);
    };

    return _this;
  }

  _createClass(PickerView, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        if (this.state.value !== nextProps.value) {
          this.setState({
            value: nextProps.value
          });
        }
      }
    }
  }, {
    key: "getColumn",
    value: function getColumn() {
      var _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          data = _this$props2.data,
          cascade = _this$props2.cascade,
          cols = _this$props2.cols;
      var value = this.state.value;
      var colums;

      if (cascade) {
        var childrenTree = (0, _arrayTreeFilter["default"])(data, function (c, level) {
          return c.value === value[level];
        }).map(function (c) {
          return c.children;
        });
        var needPad = cols - childrenTree.length;

        if (needPad > 0) {
          for (var i = 0; i < needPad; i++) {
            childrenTree.push([]);
          }
        }

        childrenTree.length = cols - 1;
        childrenTree.unshift(data);
        colums = childrenTree.map(function () {
          var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var index = arguments.length > 1 ? arguments[1] : undefined;
          return React.createElement(_pickerColumn["default"], {
            key: index,
            prefixCls: "".concat(prefixCls, "-column"),
            data: col,
            value: value && value[index],
            onValueChange: function onValueChange(val) {
              return _this2.onValueChange(index, val);
            }
          });
        });
      } else {
        colums = data.map(function (col, index) {
          return React.createElement(_pickerColumn["default"], {
            key: index,
            prefixCls: "".concat(prefixCls, "-column"),
            data: col,
            value: value && value[index],
            onValueChange: function onValueChange(val) {
              return _this2.onValueChange(index, val);
            }
          });
        });
      }

      return colums;
    }
  }, {
    key: "render",
    value: function render() {
      var prefixCls = this.props.prefixCls;
      return React.createElement("div", {
        className: prefixCls
      }, this.getColumn());
    }
  }]);

  return PickerView;
}(React.Component);

exports["default"] = PickerView;
PickerView.defaultProps = {
  prefixCls: 'm-picker',
  cascade: false
};