"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svgBaseProps = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = _defineProperty({
  width: '1em',
  height: '1em',
  fill: 'currentColor'
}, 'aria-hidden', 'true');

exports.svgBaseProps = svgBaseProps;