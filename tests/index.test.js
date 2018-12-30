import pkg from '../package.json';

const testDist = process.env.LIB_DIR === 'dist';

describe('modo-mobile dist files', () => {
  it('exports modules correctly', () => {
    const modo = testDist ? require('../dist/modo-mobile') : require('../components'); // eslint-disable-line
    expect(Object.keys(modo)).toMatchSnapshot();
  });

  if (testDist) {
    it('should have modo.version', () => {
      const modo = require('../dist/modo-mobile'); // eslint-disable-line
      expect(modo.version).toBe(pkg.version);
    });
  }
});
