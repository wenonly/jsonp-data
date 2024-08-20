const typescript = require("@rollup/plugin-typescript");

module.exports = [
  {
    input: "src/read.browser.ts",
    output: {
      file: "lib/read.browser.js",
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
