let uid = 0;

export function readJsonpData(fileUrl: string) {
  const exportFuncName = `_jsonp_data_read${uid++}_`;
  const fileURLObject = new URL(fileUrl);
  fileURLObject.searchParams.append('exportFunc', exportFuncName);
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    window[exportFuncName] = function (data) {
      const dataStr = window.atob(data);
      resolve(JSON.parse(dataStr));
      document.body.removeChild(script);
      delete window[exportFuncName];
    };
    script.onerror = (e) => {
      reject(e);
      document.body.removeChild(script);
      delete window[exportFuncName];
    };
    script.src = fileURLObject.href;
    document.body.appendChild(script);
  });
}
