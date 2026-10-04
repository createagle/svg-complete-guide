# 第三方库

[English](README.md) | **简体中文**

第 33–35 章、第 40 章和第 42 章示例用到的第三方构建文件，原样从 npm 复制而来（`svgo.min.js` 例外，见下文），所以示例离线、双击打开也能运行。

| 文件 | 包 | 版本 | 许可证 | 大小（gzip -9） |
| --- | --- | --- | --- | --- |
| `gsap.min.js` | [gsap](https://www.npmjs.com/package/gsap) | 3.15.0 | [GSAP Standard "No Charge" License](https://gsap.com/standard-license) | 28.3 KB |
| `MorphSVGPlugin.min.js` | [gsap](https://www.npmjs.com/package/gsap) | 3.15.0 | [GSAP Standard "No Charge" License](https://gsap.com/standard-license) | 9.6 KB |
| `anime.umd.min.js` | [animejs](https://www.npmjs.com/package/animejs) | 4.5.0 | MIT | 40.6 KB |
| `motion.min.js`（`dist/motion.js`） | [motion](https://www.npmjs.com/package/motion) | 14.0.0 | MIT | 47.6 KB |
| `flubber.min.js` | [flubber](https://www.npmjs.com/package/flubber) | 0.4.2 | MIT | 18.2 KB |
| `lottie_svg.min.js` | [lottie-web](https://www.npmjs.com/package/lottie-web) | 5.13.0 | MIT | 62.3 KB |
| `svgo.min.js` | [svgo](https://www.npmjs.com/package/svgo) | 4.1.0 | MIT | 162.3 KB |
| `purify.min.js` | [dompurify](https://www.npmjs.com/package/dompurify) | 3.4.16 | MPL-2.0 或 Apache-2.0 | 11.1 KB |

大小按完整的 UMD 包计算。用打包工具对 ES 模块版本做 tree-shaking，实际体积通常更小。

`svgo.min.js` 是把 `svgo/dist/svgo.browser.js`（ES 模块）用 esbuild 重新打包成普通脚本，挂在 `window.SVGO` 上，因为模块脚本无法从 `file://` 加载：

```sh
esbuild entry.mjs --bundle --format=iife --global-name=SVGO --minify --legal-comments=eof
# entry.mjs: export { optimize, VERSION } from 'svgo/browser';
```
