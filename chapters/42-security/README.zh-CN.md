# 第 42 章 SVG 安全 · 示例

[English](README.md) | **简体中文**

| 示例 | 在线演示 | 说明 |
| --- | --- | --- |
| 42-1 不可信的 SVG：四种嵌入方式 | [01-sanitize-matrix.html](https://createagle.github.io/svg-complete-guide/chapters/42-security/01-sanitize-matrix.html) | 五个无害化测试文件（script、事件处理器、foreignObject、javascript: 链接、SMIL 改写 href）分别用 innerHTML 插入、用 img 显示、当作文档打开、经 DOMPurify 清洗；每个框架都在沙箱里，载荷只能报告自己执行了 |
| 42-2 CSP 拦截注入的事件处理器 | [02-csp.html](https://createagle.github.io/svg-complete-guide/chapters/42-security/02-csp.html) | 同一段未清洗的 SVG 注入两次；第二个框架里基于 nonce 的 script-src 策略拦下了内联事件处理器 |

DOMPurify 从 [`assets/vendor/`](../../assets/vendor/README.zh-CN.md) 加载。测试文件里的载荷只调用 `postMessage`（练习里是改一行状态文字），不含任何有害内容。

练习的初始代码和成品代码见 [exercises/](exercises/README.zh-CN.md)。
