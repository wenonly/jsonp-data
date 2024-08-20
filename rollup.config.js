const typescript = require("@rollup/plugin-typescript");

module.exports = [
  {
    input: "src/read.browser.ts",
    output: {
      file: "lib/jsonp-data.browser.js",
      format: "umd",
      name: "JsonpData",
    },
    plugins: [
      typescript({
        declaration: false,
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      file: "lib/index.js",
      format: "umd",
      name: "JsonpData",
    },
    plugins: [
      typescript({
        declaration: true,
        declarationDir: "lib",
      }),
    ],
  },
];
