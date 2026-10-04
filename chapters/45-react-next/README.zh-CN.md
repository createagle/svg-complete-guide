# 第 45 章 SVG 在 React 与 Next.js 中 · 示例

[English](README.md) | **简体中文**

| 示例 | 在线演示 | 说明 |
| --- | --- | --- |
| 45-1 用 useId 生成唯一 id | [01-unique-ids.html](https://createagle.github.io/svg-complete-guide/chapters/45-react-next/01-unique-ids.html) | 三个进度环各有自己的渐变；id 写死时都用上了第一个渐变，隐藏第一张卡片后其余两个的描边也消失了 |
| 45-2 ref 作为普通 prop | [02-ref-as-prop.html](https://createagle.github.io/svg-complete-guide/chapters/45-react-next/02-ref-as-prop.html) | 折线图组件把 ref 当作普通 prop 接收（React 19），页面借它把 SVG 下载成文件；一个带清理函数的 ref 回调让图表跟随容器宽度 |
| 45-3 Next.js 服务器组件 | [03-server-component/](https://createagle.github.io/svg-complete-guide/chapters/45-react-next/03-server-component/) | 静态导出的页面：服务器组件渲染的柱状图（不需要 JS）和带悬停效果的客户端组件版本并排，另有经 next/image 显示的 SVG 和 SVGR 组件 |

示例 45-1、45-2 和练习由 [`react-project/`](react-project/README.zh-CN.md)（Vite + React 19）构建，构建出的页面和 `assets/` 已提交。示例 45-3 由 [`next-project/`](next-project/README.zh-CN.md)（Next.js 16，静态导出）构建到 `03-server-component/`。构建出的页面都使用模块脚本，要通过 Web 服务器打开。

练习的初始代码和成品代码见 [exercises/](exercises/README.zh-CN.md)。
