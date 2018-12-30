"use strict";

var path = require('path');

var R = require('ramda');

var loaderUtils = require('loader-utils');

var resolve = require('resolve');

var _require = require('./escape-win-path'),
    escapeWinPath = _require.escapeWinPath;

function resolvePlugin(plugin) {
  var result;

  try {
    result = resolve.sync(plugin, {
      basedir: process.cwd()
    });
  } catch (e) {} // eslint-disable-line no-empty


  return result;
}

module.exports = function resolvePlugins(plugins, moduleName) {
  return plugins.map(function (plugin) {
    var snippets = plugin.split('?');
    var pluginName = path.join(snippets[0], 'lib', moduleName);
    var pluginQuery = snippets[1] ? loaderUtils.parseQuery("?".concat(snippets[1])) : {};
    var resolvedPlugin = resolvePlugin(pluginName);

    if (!resolvedPlugin) {
      return false;
    }

    return [escapeWinPath(resolvedPlugin), pluginQuery];
  }).filter(R.identity);
};