import * as babel from '@babel/core';
import * as fs from 'fs';
import * as path from 'path';

const DATA_SLOT = '{{data}}';

export function getJsonpFromData(data): string {
  const dataStr = JSON.stringify(data);
  const dataBase64 = Buffer.from(dataStr).toString('base64');
  const jsonpTemplateJs = fs.readFileSync(
    path.resolve(__dirname, '../template/jsonp_template.js'),
    { encoding: 'utf-8' }
  );
  const jsonpTemplateJsWithData = jsonpTemplateJs.replace(
    DATA_SLOT,
    dataBase64
  );
  const result = babel.transform(jsonpTemplateJsWithData, {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            edge: '17',
            firefox: '60',
            chrome: '67',
            safari: '11.1',
          },
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-modules-umd'],
  });
  return result?.code ?? '';
}

export function generateJsonp(filePath: string, data: any) {
  fs.writeFileSync(filePath, getJsonpFromData(data), {
    encoding: 'utf-8',
  });
}
