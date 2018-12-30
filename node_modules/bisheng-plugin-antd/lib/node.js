'use strict';

var path = require('path');
var processDoc = require('./process-doc');
var processDemo = require('./process-demo');

module.exports = function (markdownData, _ref, isBuild) {
  var noPreview = _ref.noPreview,
      babelConfig = _ref.babelConfig,
      pxtorem = _ref.pxtorem,
      injectProvider = _ref.injectProvider;

  var isDemo = /\/demo$/i.test(path.dirname(markdownData.meta.filename));
  if (isDemo) {
    return processDemo({
      markdownData: markdownData,
      isBuild: isBuild,
      noPreview: noPreview,
      babelConfig: babelConfig && JSON.parse(babelConfig),
      pxtorem: pxtorem,
      injectProvider: injectProvider
    });
  }
  return processDoc(markdownData);
};