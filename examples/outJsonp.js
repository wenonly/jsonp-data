(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.unknown = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // value 都需要 base64 加密
  const exportData = "eyJhIjoxLCJiIjoyfQ==";

  // 用于 浏览器 跨域获取数据
  const currentScript = document.currentScript;
  if (currentScript) {
    var _window;
    const src = currentScript.src;
    const urlObj = new URL(src);
    const exportFuncName = urlObj.searchParams.get('exportFunc');
    const exportFunc = (_window = window) === null || _window === void 0 ? void 0 : _window[exportFuncName];
    if (typeof exportFunc === 'function') {
      exportFunc(exportData);
    }
  }
  var _default = exportData;
  _exports.default = _default;
});