# Vendored libraries

**English** | [简体中文](README.zh-CN.md)

Third-party builds used by the demos in chapters 33–35, 40, 42 and 47. They are copied from npm unchanged (except `svgo.min.js`, see below), so the demos work offline and when opened by double-click.

| File | Package | Version | License | Size (gzip -9) |
| --- | --- | --- | --- | --- |
| `gsap.min.js` | [gsap](https://www.npmjs.com/package/gsap) | 3.15.0 | [GSAP Standard "No Charge" License](https://gsap.com/standard-license) | 28.3 KB |
| `MorphSVGPlugin.min.js` | [gsap](https://www.npmjs.com/package/gsap) | 3.15.0 | [GSAP Standard "No Charge" License](https://gsap.com/standard-license) | 9.6 KB |
| `anime.umd.min.js` | [animejs](https://www.npmjs.com/package/animejs) | 4.5.0 | MIT | 40.6 KB |
| `motion.min.js` (`dist/motion.js`) | [motion](https://www.npmjs.com/package/motion) | 14.0.0 | MIT | 47.6 KB |
| `flubber.min.js` | [flubber](https://www.npmjs.com/package/flubber) | 0.4.2 | MIT | 18.2 KB |
| `lottie_svg.min.js` | [lottie-web](https://www.npmjs.com/package/lottie-web) | 5.13.0 | MIT | 62.3 KB |
| `svgo.min.js` | [svgo](https://www.npmjs.com/package/svgo) | 4.1.0 | MIT | 162.3 KB |
| `purify.min.js` | [dompurify](https://www.npmjs.com/package/dompurify) | 3.4.16 | MPL-2.0 or Apache-2.0 | 11.1 KB |
| `d3.min.js` | [d3](https://www.npmjs.com/package/d3) | 7.9.0 | ISC | 90.2 KB |

Sizes are for the full UMD bundles. A bundler that tree-shakes the ES module builds will usually ship less.

`svgo.min.js` is `svgo/dist/svgo.browser.js` (an ES module) rebundled with esbuild as a classic script that exposes `window.SVGO`, because module scripts do not load from `file://`:

```sh
esbuild entry.mjs --bundle --format=iife --global-name=SVGO --minify --legal-comments=eof
# entry.mjs: export { optimize, VERSION } from 'svgo/browser';
```
