const webpack = require('webpack');
const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');
const WebpackBar = require('webpackbar');

function usePrettyWebpackBar(config) {
  // remove old progress plugin.
  config.plugins = config.plugins.filter(
    plugin => !(plugin instanceof webpack.ProgressPlugin) && !(plugin instanceof WebpackBar)
  );

  // use brand new progress bar.
  config.plugins.push(
    new WebpackBar({
      name: '📦  Webpack',
      minimal: false,
    })
  );
}

const webpackConfig = getWebpackConfig(false);
if (process.env.RUN_ENV === 'PRODUCTION') {
  webpackConfig.forEach(config => {
    usePrettyWebpackBar(config);
  });
}

module.exports = webpackConfig;
