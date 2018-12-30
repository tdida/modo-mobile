const path = require('path');
const commonConfig = require('./bisheng.common.config');

const mobileConfig = {
  port: 7002,
  source: {
    components: './components',
  },
  output: './_site/mobile',
  root: '/modo-mobile/mobile/',
  entryName: 'mobile',
  theme: './site/mobile',
  htmlTemplate: path.join(__dirname, './mobile/static/template.html'),
};

module.exports = Object.assign({}, commonConfig, mobileConfig);
