# 第 16 章 坐标系变换与嵌套 svg · 示例

[English](README.md) | **简体中文**

| 示例 | 在线演示 | 说明 |
| --- | --- | --- |
| 16-1 鼠标位置实时换算为 SVG 坐标 | [01-pointer-coords.html](https://createagle.github.io/svg-complete-guide/chapters/16-coordinate-systems/01-pointer-coords.html) | 在根 `<svg>`、嵌套 `<svg>` 和旋转的 `<g>` 上移动鼠标；每一层都用 `getScreenCTM().inverse()` 换算指针位置，并在自己的坐标里画出标记 |
| 16-2 在旋转缩放的图层里拖动 | [02-drag-rotated.html](https://createagle.github.io/svg-complete-guide/chapters/16-coordinate-systems/02-drag-rotated.html) | 两个手柄都在旋转、缩放过的图层里：一个直接累加 `movementX/Y`，越拖越偏；另一个先换算指针坐标，始终跟手 |

练习的初始代码和成品代码见 [exercises/](exercises/README.zh-CN.md)。
