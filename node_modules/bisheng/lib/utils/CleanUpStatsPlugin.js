"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// We should use `stats` props of webpack. But it not work in v4.
var CleanUpStatsPlugin =
/*#__PURE__*/
function () {
  function CleanUpStatsPlugin(option) {
    _classCallCheck(this, CleanUpStatsPlugin);

    this.option = _objectSpread({
      MiniCSSExtractPlugin: true,
      tsLoader: true
    }, option);
  }

  _createClass(CleanUpStatsPlugin, [{
    key: "shouldPickStatChild",
    value: function shouldPickStatChild(child) {
      var MiniCSSExtractPlugin = this.option.MiniCSSExtractPlugin;
      if (MiniCSSExtractPlugin && child.name.includes('mini-css-extract-plugin')) return false;
      return true;
    }
  }, {
    key: "shouldPickWarning",
    value: function shouldPickWarning(message) {
      var tsLoader = this.option.tsLoader;

      if (tsLoader && /export .* was not found in .*/.test(message)) {
        return false;
      }

      return true;
    }
  }, {
    key: "apply",
    value: function apply(compiler) {
      var _this = this;

      compiler.hooks.afterCompile.tap('CleanUpStatsPlugin', function (compilation) {
        var children = compilation.children,
            warnings = compilation.warnings;

        if (Array.isArray(children)) {
          compilation.children = children.filter(function (child) {
            return _this.shouldPickStatChild(child);
          });
        }

        if (Array.isArray(warnings)) {
          compilation.warnings = warnings.filter(function (message) {
            return _this.shouldPickWarning(message);
          });
        }
      });
    }
  }]);

  return CleanUpStatsPlugin;
}();

module.exports = CleanUpStatsPlugin;