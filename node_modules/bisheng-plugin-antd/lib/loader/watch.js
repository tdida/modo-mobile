'use strict';

var ts = require('typescript');
var generator = require('babel-generator').default;
var transformer = require('bisheng-plugin-react/lib/transformer');
var utils = require('../utils');

module.exports = function watch(tsCode) {
  if (this.cacheable) {
    this.cacheable();
  }

  var es6Code = ts.transpileModule(tsCode, {
    compilerOptions: {
      jsx: 'preserve',
      target: 'es6'
    }
  }).outputText;
  var highlightedCode = {
    es6: Prism.highlight(es6Code, Prism.languages.jsx),
    ts: Prism.highlight(tsCode, Prism.languages.typescript)
  };
  var preview = transformer(es6Code);
  return 'module.exports = {\n' + ('  highlightedCode: ' + JSON.stringify(highlightedCode) + ',\n') + ('  preview: ' + preview.replace(/;$/, '')) + '\n}';
};