/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of modo-mobile, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}

export { default as Button } from './button/index';
export { default as Icon } from './icon/index';
export { default as NoticeBar } from './notice-bar/index';
export { default as Agree } from './agree/index';
export { default as List } from './list/index';
export { default as version } from './version';
