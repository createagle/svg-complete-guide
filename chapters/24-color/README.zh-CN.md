# 第 24 章 颜色处理 · 示例

[English](README.md) | **简体中文**

| 示例 | 在线演示 | 说明 |
| --- | --- | --- |
| 24-1 颜色矩阵实验台 | [01-color-matrix.html](https://createagle.github.io/svg-complete-guide/chapters/24-color/01-color-matrix.html) | 可编辑的 4 × 5 `feColorMatrix`，带预设（灰度、饱和度、色相旋转、怀旧、反色、对比度、通道互换、亮度转透明度），并展开每种 `type` 对应的完整矩阵 |
| 24-2 双色调图片滤镜 | [02-duotone.html](https://createagle.github.io/svg-complete-guide/chapters/24-color/02-duotone.html) | 先用 `feColorMatrix` 转灰度，再用 `feComponentTransfer` 的 table 把明暗映射到两种（或三种）颜色 |
| 24-3 feComponentTransfer 曲线 | [03-tone-curves.html](https://createagle.github.io/svg-complete-guide/chapters/24-color/03-tone-curves.html) | 五种传递函数画成曲线，并按通道作用于图片 |

素材：`photo.jpg`（第 9 章图片的副本）和 `scene.svg`（练习 1、3 用的渐变日落图）。

练习的初始代码和成品代码见 [exercises/](exercises/README.zh-CN.md)。
