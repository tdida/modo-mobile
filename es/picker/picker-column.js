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
import classNames from 'classnames';

var PickerColumn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PickerColumn, _React$Component);

  function PickerColumn(props) {
    var _this;

    _classCallCheck(this, PickerColumn);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PickerColumn).call(this, props));

    _this.scrollHanders = function () {
      var scrollY = -1;
      var lastY = 0;
      var startY = 0;
      var scrollDisabled = false;
      var isMoving = false;

      var setTransform = function setTransform(nodeStyle, value) {
        nodeStyle.transform = value;
        nodeStyle.webkitTransform = value;
      };

      var setTransition = function setTransition(nodeStyle, value) {
        nodeStyle.transition = value;
        nodeStyle.webkitTransition = value;
      };

      var scrollTo = function scrollTo(_x, y) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.3;

        if (scrollY !== y) {
          scrollY = y;
          setTransition(_this.listRef.style, "cubic-bezier(0,0,0.2,1.15) ".concat(time, "s"));
          setTransform(_this.listRef.style, "translate3d(0,".concat(-y, "px,0)"));
          setTimeout(function () {
            _this.scrollingComplete();

            if (_this.listRef) {
              setTransition(_this.listRef.style, '');
            }
          }, +time * 1000);
        }
      };

      var Velocity = function () {
        var minInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
        var maxInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var _time = 0;
        var _y = 0;
        var _velocity = 0;
        var recorder = {
          record: function record(y) {
            var now = +new Date();
            _velocity = (y - _y) / (now - _time);

            if (now - _time >= minInterval) {
              _velocity = now - _time <= maxInterval ? _velocity : 0;
              _y = y;
              _time = now;
            }
          },
          getVelocity: function getVelocity(y) {
            if (y !== _y) {
              recorder.record(y);
            }

            return _velocity;
          }
        };
        return recorder;
      }();

      var onFinish = function onFinish() {
        isMoving = false;
        var targetY = scrollY;
        var height = (_this.props.data.length - 1) * _this.itemHeight;
        var time = 0.3;
        var velocity = Velocity.getVelocity(targetY) * 4;

        if (velocity) {
          targetY = velocity * 40 + targetY;
          time = Math.abs(velocity) * 0.1;
        }

        if (targetY % _this.itemHeight !== 0) {
          targetY = Math.round(targetY / _this.itemHeight) * _this.itemHeight;
        }

        if (targetY < 0) {
          targetY = 0;
        } else if (targetY > height) {
          targetY = height;
        }

        scrollTo(0, targetY, time < 0.3 ? 0.3 : time);

        _this.onScrollChange();
      };

      var onStart = function onStart(y) {
        if (scrollDisabled) {
          return;
        }

        isMoving = true;
        startY = y;
        lastY = scrollY;
      };

      var onMove = function onMove(y) {
        if (scrollDisabled || !isMoving) {
          return;
        }

        scrollY = lastY - y + startY;
        Velocity.record(scrollY);

        _this.onScrollChange();

        setTransform(_this.listRef.style, "translate3d(0,".concat(-scrollY, "px,0)"));
      };

      return {
        touchstart: function touchstart(evt) {
          return onStart(evt.touches[0].screenY);
        },
        mousedown: function mousedown(evt) {
          return onStart(evt.screenY);
        },
        touchmove: function touchmove(evt) {
          evt.preventDefault();
          onMove(evt.touches[0].screenY);
        },
        mousemove: function mousemove(evt) {
          evt.preventDefault();
          onMove(evt.screenY);
        },
        touchend: function touchend() {
          return onFinish();
        },
        touchcancel: function touchcancel() {
          return onFinish();
        },
        mouseup: function mouseup() {
          return onFinish();
        },
        getValue: function getValue() {
          return scrollY;
        },
        scrollTo: scrollTo,
        setDisabled: function setDisabled() {
          var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          scrollDisabled = disabled;
        }
      };
    }();

    _this.onSelect = function (value, itemHeight, scrollTo) {
      var data = _this.props.data;

      for (var i = 0, len = data.length; i < len; i++) {
        if (data[i].value === value) {
          _this.selectByIndex(i, itemHeight, scrollTo);

          return;
        }
      }

      _this.selectByIndex(0, itemHeight, scrollTo);
    };

    _this.scrollTo = function (top) {
      _this.scrollHanders.scrollTo(0, top);
    };

    _this.scrollToWithoutAnimation = function (top) {
      _this.scrollHanders.scrollTo(0, top, 0);
    };

    _this.onScrollChange = function () {
      var top = _this.scrollHanders.getValue();

      if (top >= 0) {
        var _data = _this.props.data;

        var index = _this.computeChildIndex(top, _this.itemHeight, _data.length);

        if (_this.scrollValue !== index) {
          _this.scrollValue = index;
          var item = _data[index];

          if (item && _this.props.onScrollChange) {
            _this.props.onScrollChange(item.value);
          } else if (!item && console.warn) {
            console.warn('child not found', item, index);
          }
        }
      }
    };

    _this.computeChildIndex = function (top, itemHeight, childrenLength) {
      var index = Math.round(top / itemHeight);
      return Math.min(index, childrenLength - 1);
    };

    _this.scrollingComplete = function () {
      var top = _this.scrollHanders.getValue();

      if (top >= 0) {
        var _data2 = _this.props.data;

        var index = _this.computeChildIndex(top, _this.itemHeight, _data2.length);

        var item = _data2[index];

        if (item) {
          _this.fireValueChange(item.value);
        } else if (console.warn) {
          console.warn('child not found', item, index);
        }
      }
    };

    _this.fireValueChange = function (value) {
      if (value !== _this.state.value) {
        if (!('value' in _this.props)) {
          _this.setState({
            value: value
          });
        }

        if (_this.props.onValueChange) {
          _this.props.onValueChange(value);
        }
      }
    };

    var valueState;
    var _this$props = _this.props,
        value = _this$props.value,
        defaultValue = _this$props.defaultValue,
        data = _this$props.data;

    if (value !== undefined) {
      valueState = value;
    } else if (defaultValue !== undefined) {
      valueState = defaultValue;
    } else {
      valueState = data && data[0] && data[0].value;
    }

    _this.state = {
      value: valueState
    };
    return _this;
  }

  _createClass(PickerColumn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var listRef = this.listRef,
          indicatorRef = this.indicatorRef,
          maskRef = this.maskRef,
          rootRef = this.rootRef;
      var rootHeight = rootRef.getBoundingClientRect().height;
      var itemHeight = this.itemHeight = indicatorRef.getBoundingClientRect().height;
      var num = Math.floor(rootHeight / itemHeight);

      if (num % 2 === 0) {
        num--;
      }

      num--;
      num /= 2;
      listRef.style.padding = "".concat(itemHeight * num, "px 0");
      indicatorRef.style.top = "".concat(itemHeight * num, "px");
      maskRef.style.backgroundSize = "100% ".concat(itemHeight * num, "px"); // this.scrollHanders.setDisabled(this.props.disabled);

      this.onSelect(this.state.value, this.itemHeight, this.scrollTo);
      Object.keys(this.scrollHanders).forEach(function (key) {
        if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
          rootRef.addEventListener(key, _this2.scrollHanders[key], false);
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      Object.keys(this.scrollHanders).forEach(function (key) {
        if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
          _this3.rootRef.removeEventListener(key, _this3.scrollHanders[key]);
        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if ('value' in nextProps) {
        if (this.state.value !== nextProps.value) {
          this.setState({
            value: nextProps.value
          }, function () {
            _this4.onSelect(nextProps.value, _this4.itemHeight, _this4.scrollTo);
          });
        }
      } // this.scrollHanders.setDisabled(nextProps.disabled);

    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_nextProps, nextState) {
      return this.state.value !== nextState.value;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onSelect(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
    }
  }, {
    key: "selectByIndex",
    value: function selectByIndex(index, itemHeight, zscrollTo) {
      var data = this.props.data;

      if (index < 0 || index >= data.length || !itemHeight) {
        return;
      }

      zscrollTo(index * itemHeight);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if ('value' in this.props) {
        return this.props.value;
      }

      var data = this.props.data;
      return data && data[0] && data[0].value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          data = _this$props2.data;
      var value = this.state.value;
      var items = data.map(function (item) {
        var itemCls = classNames("".concat(prefixCls, "-item"), _defineProperty({}, "".concat(prefixCls, "-item-selected"), item.value === value));
        return React.createElement("div", {
          className: itemCls,
          key: item.value
        }, item.label);
      });
      return React.createElement("div", {
        className: "".concat(prefixCls),
        ref: function ref(el) {
          return _this5.rootRef = el;
        }
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-mask"),
        ref: function ref(el) {
          return _this5.maskRef = el;
        }
      }), React.createElement("div", {
        className: "".concat(prefixCls, "-indicator"),
        ref: function ref(el) {
          return _this5.indicatorRef = el;
        }
      }), React.createElement("div", {
        className: "".concat(prefixCls, "-list"),
        ref: function ref(el) {
          return _this5.listRef = el;
        }
      }, items));
    }
  }]);

  return PickerColumn;
}(React.Component);

export { PickerColumn as default };