const $ = require('dekko');

$('dist')
  .isDirectory()
  .hasFile('modo-mobile.css')
  .hasFile('modo-mobile.min.css')
  .hasFile('modo-mobile.js')
  .hasFile('modo-mobile.min.js');

// eslint-disable-next-line
console.log('`dist` directory is valid.');
