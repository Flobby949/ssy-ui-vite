import * as fs from "fs-extra";
import * as path from "path";
import { build, InlineConfig } from "vite";

// 全量打包
const buildAll = async () => {
  await build();
  const srcDir = path.resolve(__dirname, "../src/");
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      const outDir = path.resolve("./dist", name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // 导出模块名
          fileName: `index`,
          formats: [`esm`, `umd`],
        },
        outDir,
      };

      await build({
        build: custom,
      } as InlineConfig);

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
            "name": "ssy-ui-vite/${name}",
            "main": "index.umd.js",
            "module": "index.umd.js"
        }`,
        `utf-8`
      );
    });
};

buildAll();
