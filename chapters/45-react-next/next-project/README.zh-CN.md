# Next.js 服务器组件中的 SVG

[English](README.md) | **简体中文**

示例 45-3 的源码。`next.config.mjs` 设置了 `output: 'export'`，`npm run build` 会把页面渲染成静态文件，再由 [`publish.mjs`](publish.mjs) 复制到 [`../03-server-component/`](../03-server-component/)。这个目录已提交，GitHub Pages 可以直接提供。

```sh
npm install
npm run dev      # 本地开发服务器
npm run build    # 静态导出，再复制到 ../03-server-component/
```

| 文件 | 作用 |
| --- | --- |
| [`app/ServerChart.jsx`](app/ServerChart.jsx) | 服务器组件：构建时读取 `data/visits.json`，只有画好的 SVG 会到达浏览器 |
| [`app/HoverChart.jsx`](app/HoverChart.jsx) | 客户端组件（`'use client'`）：同样的图表，加上悬停状态；它的代码会作为 JavaScript 发到浏览器 |
| [`app/page.jsx`](app/page.jsx) | 把两张图表放到页面上，另外用 `next/image` 显示一个 SVG，再放一个 SVGR 组件 |
| [`next.config.mjs`](next.config.mjs) | 静态导出、适配 GitHub Pages 的 `basePath`，以及一条把 `*.react.svg` 转成组件的 Turbopack 规则 |

`basePath` 对应 GitHub Pages 上的目录；发布到别处时要改掉。
