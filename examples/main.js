const { generateJsonp, readJsonpData } = require('../lib/index');
const path = require('path');

(async function () {
  await generateJsonp(path.resolve(__dirname, 'outJsonp.js'), { a: 1, b: 2 });

  console.log(readJsonpData(path.resolve(__dirname, 'outJsonp.js')));
})();
