let uid = 0;

export function readJsonpData(fileUrl: string) {
  const exportFuncName: string = `_jsonp_data_read${uid++}_`;
  const fileURLObject = new URL(fileUrl);
  fileURLObject.searchParams.append('exportFunc', exportFuncName);
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    (window as any)[exportFuncName] = function (data: string) {
      const dataStr = window.atob(data);
      document.body.removeChild(script);
      delete (window as any)[exportFuncName];
      resolve(JSON.parse(dataStr));
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
