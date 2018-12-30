"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-unused-vars */
var React = require('react');
/* eslint-enable no-unused-vars */


var NProgress = require('nprogress-for-antd');

module.exports = function createElement(Component, props) {
  NProgress.done();
  var dynamicPropsKey = props.location.pathname;
  return React.createElement(Component, _extends({}, props, Component[dynamicPropsKey]));
};