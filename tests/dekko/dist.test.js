const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('modo-mobile.css')
  .hasFile('modo-mobile.min.css')
  .hasFile('modo-mobile.js')
  .hasFile('modo-mobile.min.js');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
