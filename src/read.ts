// 读取生成的jsonp文件的json数据
export function readJsonpDataFromFile(filePath: string) {
  const base64Data = require(filePath).default;
  const jsonStr = Buffer.from(base64Data, "base64").toString("utf-8");
  const jsonData = JSON.parse(jsonStr);
  return jsonData;
}
