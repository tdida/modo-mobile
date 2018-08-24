const path = require('path');
const replaceLib = require('antd-tools/lib/replaceLib');
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;

const isDev = process.env.NODE_ENV === 'development';

function alertBabelConfig(rules) {
  rules.forEach(rule => {
    if (rule.loader && rule.loader === 'babel-loader') {
      if (rule.options.plugins.indexOf(replaceLib) === -1) {
        rule.options.plugins.push(replaceLib);
      }
      rule.options.plugins = rule.options.plugins.filter(
        plugin => !plugin.indexOf || plugin.indexOf('babel-plugin-add-module-exports') === -1
      );
    } else if (rule.use) {
      alertBabelConfig(rule.use);
    }
  });
}

module.exports = {
  themeConfig: {
    siteTitle: 'Modo Mobile',
    siteSubTitle: '萌岛移动端组件库',
    indexDemos: ['drawer'], // for kitchen 这些组件每个 demo 都需要全屏展示，首页直接放其各个 demo 链接
    subListDemos: ['list-view', 'pull-to-refresh', 'tab-bar'], // for kitchen 这些组件每个 demo 都需要全屏展示，首页直接放其各个 demo 链接
    hashSpliter: '-demo-', // for kitchen URL 中记录到 hash 里的特殊标记
    categoryOrder: [
      'Layout',
      'Navigation',
      'General',
      'Data Entry',
      'Data Display',
      'Feedback',
      'Gesture',
      'Combination',
      'Other',
    ],
    cateChinese: {
      Layout: '布局',
      Navigation: '导航',
      General: '通用',
      'Data Entry': '数据录入',
      'Data Display': '数据展示',
      Feedback: '操作反馈',
      Gesture: '手势',
      Combination: '组合组件',
      Other: '其他',
    },
  },
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index.html', '/index-cn.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
    }
    return filePath;
  },
  webpackConfig(config) {
    const conf = config;

    conf.resolve.alias = {
      'modo-mobile/lib': path.join(process.cwd(), 'components'),
      'modo-mobile/es': path.join(process.cwd(), 'components'),
      'modo-mobile': path.join(process.cwd(), 'index'),
      site: path.join(process.cwd(), 'site'),
    };

    conf.externals = {
      history: 'History',
      'babel-polyfill': 'this', // hack babel-polyfill has no exports
    };

    if (isDev) {
      conf.devtool = 'source-map';
    } else {
      conf.externals = Object.assign(conf.externals, {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
      });
    }

    alertBabelConfig(conf.module.rules);

    conf.plugins.push(new CSSSplitWebpackPlugin({ size: 4000 }));

    return conf;
  },
  htmlTemplateExtraData: {
    isDev,
  },
};
