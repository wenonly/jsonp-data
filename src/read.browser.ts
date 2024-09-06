let uid = 0;

export function readJsonpData<T = any>(url: string): Promise<T> {
  let fileUrl = url.startsWith("http")
    ? url
    : location.origin + (url.startsWith("/") ? url : "/" + url);
  const exportFuncName: string = `_jsonp_data_read${uid++}_`;
  const fileURLObject = new URL(fileUrl);
  fileURLObject.searchParams.append("exportFunc", exportFuncName);
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    (window as any)[exportFuncName] = function (data: string) {
      // 使用 atob() 解码
      const binaryString = atob(data);

      // 将二进制字符串转换为 Uint8Array
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // 使用 TextDecoder 将 Uint8Array 转换为 UTF-8 字符串
      const decoder = new TextDecoder("utf-8");
      const decodedString = decoder.decode(bytes);

      document.body.removeChild(script);
      delete (window as any)[exportFuncName];
      resolve(JSON.parse(decodedString));
    };
    script.onerror = (e) => {
      reject(e);
      document.body.removeChild(script);
      delete (window as any)[exportFuncName];
    };
    script.src = fileURLObject.href;
    document.body.appendChild(script);
  });
}
