"use strict";

var R = require('ramda');

var exist = require('exist.js');

var _require = require('path'),
    join = _require.join;

var _require2 = require('./escape-win-path'),
    toUriPath = _require2.toUriPath;

function hasParams(path) {
  return path.split('/').some(function (snippet) {
    return snippet.startsWith(':');
  });
}

function has404(filesPath) {
  return filesPath.indexOf('/404.html') >= 0;
}

function flattenRoutes(routes) {
  var flattenedRoutes = [];
  (Array.isArray(routes) ? routes : [routes]).forEach(function (item) {
    var copy = Object.assign({}, item);

    if (!copy.dataPath) {
      copy.dataPath = copy.path;
    }

    flattenedRoutes.push(copy);

    if (item.childRoutes) {
      var nestedRoutes = R.chain(flattenRoutes, item.childRoutes.map(function (child) {
        return Object.assign({}, child, {
          path: join(item.path, child.path)
        });
      }));
      flattenedRoutes = flattenedRoutes.concat(nestedRoutes);
    }
  });
  return flattenedRoutes;
}

module.exports = function generateFilesPath(routes, markdown) {
  var flattenedRoutes = flattenRoutes(routes).map(function (item) {
    item.path = toUriPath(item.path);
    item.dataPath = toUriPath(item.dataPath);
    return item;
  });
  var filesPath = R.chain(function (item) {
    if (hasParams(item.path)) {
      var dataPathSnippets = item.dataPath.split('/').slice(1);
      var firstParamIndex = dataPathSnippets.findIndex(function (snippet) {
        return snippet.startsWith(':');
      });
      var firstParam = dataPathSnippets[firstParamIndex];
      var dataSet = exist.get(markdown, dataPathSnippets.slice(0, firstParamIndex), {});
      var processedCompleteRoutes = Object.keys(dataSet).map(function (key) {
        var pathSnippet = key.replace(/\.md/, '');
        var path = item.path.replace(firstParam, pathSnippet);
        var dataPath = item.dataPath.replace(firstParam, pathSnippet);
        return {
          path: path,
          dataPath: dataPath
        };
      });
      return generateFilesPath(processedCompleteRoutes, markdown);
    } else if (item.path.endsWith('/')) {
      return ["".concat(item.path, "index.html")];
    }

    return ["".concat(item.path, ".html")];
  }, flattenedRoutes);
  return has404(filesPath) ? filesPath : filesPath.concat('/404.html');
};