"use strict";

var fs = require('fs');

var path = require('path');

var sourceData = require('../utils/source-data');

var resolvePlugins = require('../utils/resolve-plugins');

var context = require('../context');

var boss = require('./common/boss');

module.exports = function bishengDataLoader()
/* content */
{
  if (this.cacheable) {
    this.cacheable();
  }

  var bishengConfig = context.bishengConfig,
      themeConfig = context.themeConfig;
  var markdown = sourceData.generate(bishengConfig.source, bishengConfig.transformers);
  var browserPlugins = resolvePlugins(themeConfig.plugins, 'browser');
  var pluginsString = browserPlugins.map(function (plugin) {
    return "[require('".concat(plugin[0], "'), ").concat(JSON.stringify(plugin[1]), "]");
  }).join(',\n');
  var callback = this.async();
  var picked = {};
  var pickedPromises = []; // Flag to remind loader that job is done.

  if (themeConfig.pick) {
    var nodePlugins = resolvePlugins(themeConfig.plugins, 'node');
    sourceData.traverse(markdown, function (filename) {
      var fileContent = fs.readFileSync(path.join(process.cwd(), filename)).toString();
      pickedPromises.push(new Promise(function (resolve) {
        boss.queue({
          filename: filename,
          content: fileContent,
          plugins: nodePlugins,
          transformers: bishengConfig.transformers,
          isBuild: context.isBuild,
          callback: function callback(err, result) {
            var parsedMarkdown = eval("(".concat(result, ")")); // eslint-disable-line no-eval

            Object.keys(themeConfig.pick).forEach(function (key) {
              if (!picked[key]) {
                picked[key] = [];
              }

              var picker = themeConfig.pick[key];
              var pickedData = picker(parsedMarkdown);

              if (pickedData) {
                picked[key].push(pickedData);
              }
            });
            resolve();
          }
        });
      }));
    });
  }

  Promise.all(pickedPromises).then(function () {
    var sourceDataString = sourceData.stringify(markdown, {
      lazyLoad: themeConfig.lazyLoad
    });
    callback(null, 'module.exports = {' + "\n  markdown: ".concat(sourceDataString, ",") + "\n  picked: ".concat(JSON.stringify(picked, null, 2), ",") + "\n  plugins: [\n".concat(pluginsString, "\n],") + '\n};');
  });
};