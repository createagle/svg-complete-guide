# 第 2 章 练习参考答案

[English](README.md) | **简体中文**

## 练习 1：修好一个坏掉的 SVG 文件

题目：[01-broken.svg](01-broken.svg)　答案：[01-fixed.svg](01-fixed.svg)

共 5 处错误：

1. 缺少 `xmlns="http://www.w3.org/2000/svg"`，独立文件不会被当成 SVG。
2. `viewbox` 应为 `viewBox`，XML 区分大小写。
3. `x=10` 缺少引号。
4. `<rect …>` 没有闭合，应写成 `<rect … />`。
5. `&nbsp;` 在 XML 中未定义，改为 `&#160;`。

## 练习 2：预测颜色

```html
<style>
  circle { fill: green; }
  #c { fill: purple; }
</style>
<svg viewBox="0 0 10 10">
  <circle id="c" cx="5" cy="5" r="4" fill="blue" style="fill: orange"/>
</svg>
```

答案：**橙色**。内联 `style` 高于任何没有 `!important` 的样式表规则；`#c` 比 `circle` 优先级高，但两者都输给内联样式；`fill="blue"` 是表现属性，优先级最低。

删掉 `style="fill: orange"` 后是**紫色**（`#c` 的选择器优先级高于 `circle`）。

## 练习 3：把旧写法改成 SVG 2

题目：[03-legacy.svg](03-legacy.svg)　答案：[03-modern.svg](03-modern.svg)

把三处 `xlink:href` 改成 `href`，再删除根元素上的 `xmlns:xlink` 声明。
