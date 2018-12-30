const path = require('path');
const commonConfig = require('./bisheng.common.config');

const desktopConfig = {
  port: 7001,
  source: {
    components: './components',
    docs: './docs',
    changelog: ['CHANGELOG.zh-CN.md', 'CHANGELOG.en-US.md'],
  },
  root: '/modo-mobile/',
  theme: './site/desktop/src',
  htmlTemplate: path.join(__dirname, './desktop/src/static/template.html'),
};

module.exports = Object.assign({}, commonConfig, desktopConfig);
