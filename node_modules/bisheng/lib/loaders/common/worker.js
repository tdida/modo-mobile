"use strict";

var sourceData = require('../../utils/source-data');

var stringify = require('../../utils/stringify');

process.on('message', function (task) {
  var filename = task.filename,
      content = task.content,
      plugins = task.plugins,
      transformers = task.transformers,
      isBuild = task.isBuild;
  var parsedMarkdown = sourceData.process(filename, content, plugins, transformers, isBuild);
  var result = stringify(parsedMarkdown);
  process.send(result);
});