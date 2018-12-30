function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ToastOptions from './toast';
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
  var component = React.createElement(ToastOptions, _extends(props, {
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

export default {
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