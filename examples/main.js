const { generateJsonp, readJsonp } = require('../lib/index');
const path = require('path');

generateJsonp(path.resolve(__dirname, 'outJsonp.js'), { a: 1, b: 2 });

console.log(readJsonp(path.resolve(__dirname, 'outJsonp.js')));
