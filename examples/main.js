const { generateJsonp, readJsonpData } = require('../lib/index');
const path = require('path');

(async function () {
  const filePath = path.resolve(__dirname, 'outJsonp.js');
  // 生成根据json对象生成jsonp文件
  await generateJsonp(filePath, { a: 1, b: 2 });

  // 读取jsonp文件json数据
  const data = readJsonpData(filePath);
  console.log(data);
})();
