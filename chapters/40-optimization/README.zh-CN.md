# 第 40 章 优化与性能 · 示例

[English](README.md) | **简体中文**

| 示例 | 在线演示 | 说明 |
| --- | --- | --- |
| 40-1 SVGO 在线优化台 | [01-svgo-playground.html](https://createagle.github.io/svg-complete-guide/chapters/40-optimization/01-svgo-playground.html) | 在页面里用 SVGO 4 优化一份设计工具导出的文件：精度、多遍优化、`convertStyleToAttrs`、`removeDimensions`，以及保留 `role` 和 `aria-*` 所指 id 的开关；显示优化前后的原始大小和 gzip 大小 |
| 40-2 渲染开销实验 | [02-render-cost.html](https://createagle.github.io/svg-complete-guide/chapters/40-optimization/02-render-cost.html) | 最多一万个圆，分别用分组的单个变换、逐个改属性、再叠加模糊滤镜来移动；实时显示帧时间和 DOM 节点数 |

SVGO 从 [`assets/vendor/`](../../assets/vendor/README.zh-CN.md) 加载。

练习的初始代码和成品代码见 [exercises/](exercises/README.zh-CN.md)。
