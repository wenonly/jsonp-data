const { generateJsonp } = require('../lib/generate');
const path = require('path');

generateJsonp(path.resolve(__dirname, 'outJsonp.js'), { a: 1, b: 2 });
