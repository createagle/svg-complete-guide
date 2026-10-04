# Svelte 中的 SVG 组件

[English](README.md) | **简体中文**

示例 46-2 和练习 2 的源码。构建结果提交在上一级目录（`../02-svelte-donut.html`、`../exercises/02-start.html`、`../exercises/02-final.html` 和 `../assets/svelte/`），GitHub Pages 不需要构建就能直接提供。

```sh
npm install
npm run dev      # 本地开发服务器
npm run build    # 重新生成上一级目录里的页面
```

| 页面 | 源码 |
| --- | --- |
| 46-2 Svelte 环形图 | [`src/Donut.svelte`](src/Donut.svelte)、[`src/DonutSlice.svelte`](src/DonutSlice.svelte)、[`src/App.svelte`](src/App.svelte) |
| 练习 2 | [`src/BarLink.svelte`](src/BarLink.svelte)（初始）、[`src/BarLinkFinal.svelte`](src/BarLinkFinal.svelte)（成品） |

构建出的页面使用模块脚本，要通过 Web 服务器打开（GitHub Pages、`npm run dev` 或 `npx vite preview`），不能双击打开。
