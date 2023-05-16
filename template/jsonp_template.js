// value 都需要 base64 加密
const exportData = `{{data}}`;

// 用于 浏览器 跨域获取数据
const currentScript = globalThis.document?.currentScript;
if (currentScript) {
  const src = currentScript.src;
  const urlObj = new URL(src);
  const exportFuncName = urlObj.searchParams.get('exportFunc');
  const exportFunc = globalThis?.[exportFuncName];
  if (typeof exportFunc === 'function') {
    exportFunc(exportData);
  }
}

export default exportData;
