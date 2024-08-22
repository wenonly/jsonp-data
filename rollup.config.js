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
        declaration: true,
        declarationDir: "lib",
      }),
    ],
  },
  {
    input: "src/read.browser.ts",
    output: {
      file: "lib/read.browser.js",
      format: "es",
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
    external: ["fs", "path", "@babel/core", "mkdirp"],
    output: {
      file: "lib/index.js",
      format: "cjs",
    },
    plugins: [
      typescript({
        declaration: true,
        declarationDir: "lib",
      }),
    ],
  },
];
