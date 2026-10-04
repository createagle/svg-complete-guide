# 第 46 章 SVG 在 Vue 与 Svelte 中 · 示例

[English](README.md) | **简体中文**

| 示例 | 在线演示 | 说明 |
| --- | --- | --- |
| 46-1 Vue 环形图 | [01-vue-donut.html](https://createagle.github.io/svg-complete-guide/chapters/46-vue-svelte/01-vue-donut.html) | 同一个组件画出的两个环形图：每一段是根元素为 <circle> 的子组件，useId 让两份渐变互不干扰，滑块改数据，父组件通过 defineExpose 暴露的模板引用下载 SVG |
| 46-2 Svelte 环形图 | [02-svelte-donut.html](https://createagle.github.io/svg-complete-guide/chapters/46-vue-svelte/02-svelte-donut.html) | 同样的图表用 Svelte 5 实现：$props.id() 生成渐变 id，事件作为 prop 传递，用可绑定的 prop 把 <svg> 交给父组件 |

示例 46-1 和练习 1 由 [`vue-project/`](vue-project/README.zh-CN.md)（Vite + Vue 3.5）构建，示例 46-2 和练习 2 由 [`svelte-project/`](svelte-project/README.zh-CN.md)（Vite + Svelte 5）构建，构建出的页面和 `assets/` 已提交。页面使用模块脚本，要通过 Web 服务器打开。

练习的初始代码和成品代码见 [exercises/](exercises/README.zh-CN.md)。
