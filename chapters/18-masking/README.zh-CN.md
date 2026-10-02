# 第 18 章 遮罩 · 示例

[English](README.md) | **简体中文**

| 示例 | 在线演示 | 说明 |
| --- | --- | --- |
| 18-1 亮度遮罩与 alpha 遮罩 | [01-mask-modes.html](https://createagle.github.io/svg-complete-guide/chapters/18-masking/01-mask-modes.html) | 同一份遮罩内容分别用 `mask-type: luminance` 和 `alpha` 应用，旁边是遮罩内容本身的预览 |
| 18-2 不规则分隔线与渐隐效果 | [02-edges-and-fades.html](https://createagle.github.io/svg-complete-guide/chapters/18-masking/02-edges-and-fades.html) | 把可重复的 SVG 图块（data URI）作为 `mask-image`，切出波浪、锯齿或扇贝边；用 `linear-gradient` 遮罩让滚动列表的边缘渐隐 |

素材：`photo.jpg`。分隔线图块是 80 × 20 的 SVG，以 data URI 内联在 CSS 里（带 `preserveAspectRatio="none"`），这样直接从硬盘打开页面也能显示。

练习的初始代码和成品代码见 [exercises/](exercises/README.zh-CN.md)。
