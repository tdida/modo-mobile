function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import classNames from 'classnames';
import createFromIconfontCN from './IconFont';
import { svgBaseProps } from './utils';
import warning from '../_util/warning';
var IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_821530_icjpvt6k219.js'
});

var Icon = function Icon(props) {
  var _classNames;

  var style = props.style,
      className = props.className,
      type = props.type,
      Component = props.component,
      viewBox = props.viewBox,
      spin = props.spin,
      children = props.children,
      restProps = __rest(props, ["style", "className", "type", "component", "viewBox", "spin", "children"]);

  warning(Boolean(type || Component || children), 'Icon should have `type` prop or `component` prop or `children`.');
  var classString = classNames((_classNames = {}, _defineProperty(_classNames, "m-icon", true), _defineProperty(_classNames, "m-icon-".concat(type), Boolean(type)), _classNames), className);
  var svgClassString = classNames(_defineProperty({}, "m-icon-spin", !!spin || type === 'loading'));
  var innerNode; // component > children > type

  if (Component) {
    var innerSvgProps = _extends({}, svgBaseProps, {
      className: svgClassString,
      viewBox: viewBox
    });

    if (!viewBox) {
      delete innerSvgProps.viewBox;
    }

    innerNode = React.createElement(Component, innerSvgProps, children);
  }

  if (children) {
    warning(Boolean(viewBox) || React.Children.count(children) === 1 && React.Children.only(children).type === 'use', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');

    var _innerSvgProps = _extends({}, svgBaseProps, {
      className: svgClassString
    });

    innerNode = React.createElement("svg", _extends({}, _innerSvgProps, {
      viewBox: viewBox
    }), children);
  }

  if (typeof type === 'string') {
    var _classNames3;

    var iconFontCls = classNames((_classNames3 = {}, _defineProperty(_classNames3, "m-icon-".concat(type), type), _defineProperty(_classNames3, "m-icon-spin", !!spin || type === 'loading'), _classNames3));
    return React.createElement(IconFont, {
      className: iconFontCls,
      style: style,
      type: "icon-".concat(type)
    });
  }

  return React.createElement("i", _extends({}, restProps, {
    style: style,
    className: classString
  }), innerNode);
};

Icon.displayName = 'Icon';
Icon.createFromIconfontCN = createFromIconfontCN;
export default Icon;