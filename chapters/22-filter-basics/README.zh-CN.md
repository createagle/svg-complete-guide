# 第 22 章 滤镜基础 · 示例

[English](README.md) | **简体中文**

| 示例 | 在线演示 | 说明 |
| --- | --- | --- |
| 22-1 滤镜管线可视化调试器 | [01-pipeline-debugger.html](https://createagle.github.io/svg-complete-guide/chapters/22-filter-basics/01-pipeline-debugger.html) | 编辑 `<filter>` 代码，逐个查看每个图元的输出、它的输入来自哪里、结果被谁使用；标出指向不存在结果的 `in` / `in2`，并画出滤镜区域 |
| 22-2 滤镜区域 | [02-filter-region.html](https://createagle.github.io/svg-complete-guide/chapters/22-filter-basics/02-filter-region.html) | 同一个模糊滤镜作用于圆、细长条和水平线；调整 `filterUnits`、`x` / `y` / `width` / `height` 和 `stdDeviation`，观察滤镜区域怎样裁掉模糊 |
| 22-3 滤镜的颜色空间 | [03-color-space.html](https://createagle.github.io/svg-complete-guide/chapters/22-filter-basics/03-color-space.html) | 三组颜色分别用 `linearRGB`（SVG 默认）、`sRGB` 和 CSS `blur()` 模糊后的对比 |
| 22-4 给 HTML 元素加 SVG 滤镜 | [04-html-filters.html](https://createagle.github.io/svg-complete-guide/chapters/22-filter-basics/04-html-filters.html) | HTML 卡片使用 `filter: url(#…)`：柔和投影、描边、扭曲，以及 SVG 滤镜与 CSS `grayscale()` 串联 |

素材：`photo.jpg`（第 9 章图片的副本）。

练习的初始代码和成品代码见 [exercises/](exercises/README.zh-CN.md)。
