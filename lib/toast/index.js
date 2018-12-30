"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _toast = _interopRequireDefault(require("./toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var toastComponent;
var div;

function Toast(_ref) {
  var _ref$content = _ref.content,
      content = _ref$content === void 0 ? '' : _ref$content,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? '' : _ref$icon,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 0 : _ref$duration,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'center' : _ref$position,
      _ref$hasMask = _ref.hasMask,
      hasMask = _ref$hasMask === void 0 ? false : _ref$hasMask;
  var props = {
    content: content,
    duration: duration,
    hasMask: hasMask,
    icon: icon,
    position: position
  };

  if (toastComponent) {
    toastComponent.props = props;
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }

  next(props);
}

function next(props) {
  var component = React.createElement(_toast["default"], _extends(props, {
    ref: function ref(el) {
      toastComponent = el;
    },
    willUnmount: function willUnmount() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
      div = null;
      toastComponent = null;
    }
  }));
  ReactDOM.render(component, div);
}

var _default = {
  info: function info(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var hasMask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return Toast({
      content: content,
      duration: duration,
      hasMask: hasMask
    });
  },
  success: function success(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var hasMask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return Toast({
      content: content,
      duration: duration,
      hasMask: hasMask,
      icon: 'check-circle'
    });
  },
  fail: function fail(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var hasMask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return Toast({
      content: content,
      duration: duration,
      hasMask: hasMask,
      icon: 'close-circle'
    });
  },
  loading: function loading(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var hasMask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return Toast({
      content: content,
      duration: duration,
      hasMask: hasMask,
      icon: 'loading'
    });
  },
  hide: function hide() {
    if (div) {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
      div = null;
      toastComponent = null;
    }
  }
};
exports["default"] = _default;