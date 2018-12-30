"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Marquee = _interopRequireDefault(require("./Marquee"));

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

var NoticeBar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(NoticeBar, _React$PureComponent);

  function NoticeBar(props) {
    var _this;

    _classCallCheck(this, NoticeBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoticeBar).call(this, props));

    _this.handleHide = function (time) {
      var timer = setTimeout(function () {
        _this.handleClose();

        clearTimeout(timer);
      }, time);
    };

    _this.handleClose = function () {
      _this.setState({
        closed: true
      });

      var onClick = _this.props.onClick;
      if (onClick) onClick();
    };

    _this.state = {
      closed: false
    };
    return _this;
  }

  _createClass(NoticeBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var duration = this.props.duration;

      if (duration) {
        this.handleHide(duration);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          prefixCls = _this$props.prefixCls,
          action = _this$props.action,
          children = _this$props.children,
          mode = _this$props.mode,
          onClick = _this$props.onClick;
      var extraProps = {};
      var closeIcon = null;

      if (mode === 'closable') {
        closeIcon = React.createElement("div", {
          onClick: this.handleClose,
          className: "".concat(prefixCls, "-close-icon")
        }, action || React.createElement(_icon["default"], {
          type: "close"
        }));
      } else {
        if (mode === 'link') {
          closeIcon = React.createElement("div", {
            className: "".concat(prefixCls, "-close-icon")
          }, action || React.createElement(_icon["default"], {
            type: "right"
          }));
        }

        extraProps.onClick = onClick;
      }

      return this.state.closed ? null : React.createElement("div", _extends({
        className: prefixCls
      }, extraProps), React.createElement("div", {
        className: "".concat(prefixCls, "-icon")
      }, icon), React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, React.createElement(_Marquee["default"], {
        prefixCls: prefixCls,
        text: children
      })), closeIcon);
    }
  }]);

  return NoticeBar;
}(React.PureComponent);

exports["default"] = NoticeBar;
NoticeBar.defaultProps = {
  prefixCls: 'm-notice-bar',
  mode: '',
  duration: 0,
  icon: React.createElement(_icon["default"], {
    type: "info-circle"
  }),
  onClick: function onClick() {}
};