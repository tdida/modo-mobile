"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function stringify(node) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var indent = '  '.repeat(depth);

  if (Array.isArray(node)) {
    return "[\n".concat(node.map(function (item) {
      return "".concat(indent, "  ").concat(stringify(item, depth + 1));
    }).join(',\n'), "\n").concat(indent, "]");
  }

  if (_typeof(node) === 'object' && node !== null && !(node instanceof Date)) {
    if (node.__BISHENG_EMBEDED_CODE) {
      return node.code;
    }

    return "{\n".concat(Object.keys(node).map(function (key) {
      var value = node[key];
      return "".concat(indent, "  \"").concat(key, "\": ").concat(stringify(value, depth + 1));
    }).join(',\n'), "\n").concat(indent, "}");
  }

  return JSON.stringify(node, null, 2);
};