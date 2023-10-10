import * as babel from "@babel/core";
import fs, { promises } from "fs";
import * as path from "path";
import { mkdirp } from "mkdirp";

const DATA_SLOT = "{{data}}";

// 根据data数据返回生成的jsonp data格式字符串
export async function getJsonpFromData(data: any): Promise<string> {
  const dataStr = JSON.stringify(data);
  const dataBase64 = Buffer.from(dataStr).toString("base64");
  const jsonpTemplateJs = await promises.readFile(
    path.resolve(__dirname, "../template/jsonp_template.js"),
    { encoding: "utf-8" }
  );
  const jsonpTemplateJsWithData = jsonpTemplateJs.replace(
    DATA_SLOT,
    dataBase64
  );
  const result = await babel.transformAsync(jsonpTemplateJsWithData, {
    configFile: false,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            edge: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1",
          },
        },
      ],
    ],
    plugins: ["@babel/plugin-transform-modules-umd"],
  });
  return result?.code ?? "";
}

// 将json数据生成jsonp文件
export async function generateJsonp(filePath: string, data: any) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) await mkdirp(dir);
  await promises.writeFile(filePath, await getJsonpFromData(data), {
    encoding: "utf-8",
  });
}
