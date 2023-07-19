const typescript = require('@rollup/plugin-typescript');

module.exports = {
  input: 'src/read.browser.ts',
  output: {
    file: 'lib/jsonp-data.browser.js',
    format: 'umd',
    name: 'JsonpData',
  },
  plugins: [typescript()],
};
