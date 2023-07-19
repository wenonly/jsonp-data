# jsonp-data

使用 nodejs 生成 jsonp 文件，可以在浏览器或者 nodejs 端读取 jsonp 文件。
jsonp database, generate jsonp data file by nodejs, read jsonp data file by nodejs or browser

# 使用方法

## nodejs 端

```javascript
const { generateJsonp, readJsonpData } = require('jsonp-data');
const path = require('path');

(async function () {
  const filePath = path.resolve(__dirname, 'outJsonp.js');
  // 生成根据json对象生成jsonp文件
  await generateJsonp(filePath, { a: 1, b: 2 });

  // 读取jsonp文件json数据
  const data = readJsonpData(filePath);
  console.log(data);
})();
```

## 浏览器端

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>jsonpData test</title>
    <script src="$jsonp-data-path/jsonp-data.browser.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      // 通过http读取jsonp文件
      JsonpData.readJsonpData(
        'http://localhost:8080/examples/outJsonp.js'
      ).then((data) => {
        console.log(data);
        document.querySelector('#app').innerHTML = JSON.stringify(data);
      });
    </script>
  </body>
</html>
```
