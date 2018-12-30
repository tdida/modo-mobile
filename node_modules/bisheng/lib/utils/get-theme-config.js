"use strict";

var path = require('path');

var pluginHighlight = path.join(__dirname, '..', 'bisheng-plugin-highlight');

function isRelative(filepath) {
  return filepath.charAt(0) === '.';
}

function toAbsolutePath(plugin) {
  return isRelative(plugin) ? path.join(process.cwd(), plugin) : plugin;
}

module.exports = function getThemeConfig(configFile) {
  var customizedConfig = require(configFile);

  var config = Object.assign({
    plugins: []
  }, customizedConfig);
  config.plugins = [pluginHighlight].concat(config.plugins.map(toAbsolutePath));
  return config;
};