"use strict";

var markTwain = require('mark-twain');

var _require = require('../utils/escape-win-path'),
    toUriPath = _require.toUriPath;

module.exports = function (filename, fileContent) {
  var markdown = markTwain(fileContent);
  markdown.meta.filename = toUriPath(filename);
  return markdown;
};