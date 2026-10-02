# 第 11 章 引用与片段标识符 · 示例

[English](README.md) | **简体中文**

| 示例 | 在线演示 | 说明 |
| --- | --- | --- |
| 11-1 一个文件切出多个图标 | [01-fragment-sprite.html](https://createagle.github.io/svg-complete-guide/chapters/11-fragments/01-fragment-sprite.html) | 用三种方式在 `<img>` 里只显示雪碧图中的一个图标：`<view>` 的 id、`#svgView(viewBox(…))`、堆叠雪碧图配 `:target` |
| 11-2 多个内联 SVG 的 id 冲突 | [02-id-conflict.html](https://createagle.github.io/svg-complete-guide/chapters/11-fragments/02-id-conflict.html) | 两个内联 SVG 都定义了 `id="shine"`，两个圆都用上了第一个渐变，改成各自唯一的 id 后才恢复 |

素材：`sprite.svg`（三个图标横排，每个配一个 `<view>`）和 `stack.svg`（图标叠放，用 `:target` 显示）。

练习的初始代码和成品代码见 [exercises/](exercises/README.zh-CN.md)。
