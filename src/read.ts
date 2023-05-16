export function readJsonp(filePath: string) {
  const base64Data = require(filePath).default;
  const jsonStr = Buffer.from(base64Data, 'base64').toString();
  const jsonData = JSON.parse(jsonStr);
  return jsonData;
}
