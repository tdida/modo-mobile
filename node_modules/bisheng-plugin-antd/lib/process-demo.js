'use strict';

var fs = require('fs');
var path = require('path');
var JsonML = require('jsonml.js/lib/utils');
var Prism = require('node-prismjs');
var nunjucks = require('nunjucks');
var postcss = require('postcss');
var pxtoremPlugin = require('postcss-pxtorem');
nunjucks.configure({ autoescape: false });

var transformer = require('bisheng-plugin-react/lib/transformer');

var tmpl = fs.readFileSync(path.join(__dirname, 'template.html')).toString();
var watchLoader = path.join(__dirname, './loader/watch');

function isStyleTag(node) {
  return node && JsonML.getTagName(node) === 'style';
}

function getCode(node) {
  return JsonML.getChildren(JsonML.getChildren(node)[0])[0];
}

function getChineseIntroStart(contentChildren) {
  return contentChildren.findIndex(function (node) {
    return JsonML.getTagName(node) === 'h2' && JsonML.getChildren(node)[0] === 'zh-CN';
  });
}

function getEnglishIntroStart(contentChildren) {
  return contentChildren.findIndex(function (node) {
    return JsonML.getTagName(node) === 'h2' && JsonML.getChildren(node)[0] === 'en-US';
  });
}

function getCodeIndex(contentChildren) {
  return contentChildren.findIndex(function (node) {
    return JsonML.getTagName(node) === 'pre' && JsonML.getAttributes(node).lang === 'jsx';
  });
}

function getCorrespondingTSX(filename) {
  return path.join(process.cwd(), filename.replace(/\.md$/i, '.tsx'));
}

function getSourceCodeObject(contentChildren, codeIndex) {
  if (codeIndex > -1) {
    return {
      isES6: true,
      code: getCode(contentChildren[codeIndex])
    };
  }

  return {
    isTS: true
  };
}

function getStyleNode(contentChildren) {
  return contentChildren.filter(function (node) {
    return isStyleTag(node) || JsonML.getTagName(node) === 'pre' && JsonML.getAttributes(node).lang === 'css';
  })[0];
}

module.exports = function (_ref) {
  var markdownData = _ref.markdownData,
      isBuild = _ref.isBuild,
      noPreview = _ref.noPreview,
      babelConfig = _ref.babelConfig,
      pxtorem = _ref.pxtorem,
      injectProvider = _ref.injectProvider;

  var meta = markdownData.meta;
  meta.id = meta.filename.replace(/\.md$/, '').replace(/\//g, '-');
  // Should throw debugging demo while publish.
  if (isBuild && meta.debug) {
    return { meta: {} };
  }

  // Update content of demo.
  var contentChildren = JsonML.getChildren(markdownData.content);
  var chineseIntroStart = getChineseIntroStart(contentChildren);
  var englishIntroStart = getEnglishIntroStart(contentChildren);
  var codeIndex = getCodeIndex(contentChildren);
  var introEnd = codeIndex === -1 ? contentChildren.length : codeIndex;
  if (chineseIntroStart > -1 /* equal to englishIntroStart > -1 */) {
      markdownData.content = {
        'zh-CN': contentChildren.slice(chineseIntroStart + 1, englishIntroStart),
        'en-US': contentChildren.slice(englishIntroStart + 1, introEnd)
      };
    } else {
    markdownData.content = contentChildren.slice(0, introEnd);
  }

  var sourceCodeObject = getSourceCodeObject(contentChildren, codeIndex);
  if (sourceCodeObject.isES6) {
    markdownData.highlightedCode = contentChildren[codeIndex].slice(0, 2);
    if (!noPreview) {
      markdownData.preview = {
        __BISHENG_EMBEDED_CODE: true,
        code: transformer(sourceCodeObject.code, babelConfig)
      };
    }
  } else {
    // TODO: use loader's `this.dependencies` to watch
    var requireString = 'require(\'!!babel!' + watchLoader + '!' + getCorrespondingTSX(meta.filename) + '\')';
    markdownData.highlightedCode = {
      __BISHENG_EMBEDED_CODE: true,
      code: requireString + '.highlightedCode'
    };
    markdownData.preview = {
      __BISHENG_EMBEDED_CODE: true,
      code: requireString + '.preview'
    };
  }

  // Add style node to markdown data.
  var styleNode = getStyleNode(contentChildren);
  if (isStyleTag(styleNode)) {
    markdownData.style = JsonML.getChildren(styleNode)[0];
  } else if (styleNode) {
    var styleTag = contentChildren.filter(isStyleTag)[0];
    var originalStyle = getCode(styleNode) + (styleTag ? JsonML.getChildren(styleTag)[0] : '');
    if (pxtorem) {
      originalStyle = postcss(pxtoremPlugin({
        rootValue: 50,
        propList: ['*']
      })).process(originalStyle).css;
    }
    markdownData.style = originalStyle;
    markdownData.highlightedStyle = JsonML.getAttributes(styleNode).highlighted;
  }

  if (meta.iframe) {
    var html = nunjucks.renderString(tmpl, {
      id: meta.id,
      style: markdownData.style,
      script: markdownData.preview.code,
      reactRouter: meta.reactRouter === 'react-router' ? 'react-router@3/umd/ReactRouter' : meta.reactRouter === 'react-router-dom' ? 'react-router-dom@4/umd/react-router-dom' : false,
      injectProvider: !!injectProvider
    });
    var fileName = 'demo-' + Math.random() + '.html';
    fs.writeFile(path.join(process.cwd(), '_site', fileName), html, function () {});
    markdownData.src = path.join('/', fileName);
  }

  return markdownData;
};