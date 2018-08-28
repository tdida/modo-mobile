/**
 * This is the entry file for `npm run dist`
 */
/**
 * build for `dist/modo-mobile.css`
 */
const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);
req.keys().forEach(mod => {
  req(mod);
});

/**
 * build for `dist/modo-mobile.js`
 */
module.exports = require('./components/index');
