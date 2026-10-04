# React 中的 SVG 组件

[English](README.md) | **简体中文**

示例 45-1、45-2 和两道练习的源码。构建结果提交在上一级目录（`../01-unique-ids.html`、`../02-ref-as-prop.html`、`../exercises/*.html` 和 `../assets/`），GitHub Pages 不需要构建就能直接提供。

```sh
npm install
npm run dev      # 本地开发服务器
npm run build    # 重新生成上一级目录里的页面
```

| 页面 | 源码 |
| --- | --- |
| 45-1 用 `useId` 生成唯一 id | [`src/ProgressRing.jsx`](src/ProgressRing.jsx)、[`src/main-unique-ids.jsx`](src/main-unique-ids.jsx) |
| 45-2 ref 作为普通 prop | [`src/Sparkline.jsx`](src/Sparkline.jsx)、[`src/main-ref-as-prop.jsx`](src/main-ref-as-prop.jsx) |
| 练习 1 | [`src/ex1-start.jsx`](src/ex1-start.jsx)、[`src/ex1-final.jsx`](src/ex1-final.jsx) |
| 练习 2 | [`src/ex2-start.jsx`](src/ex2-start.jsx)、[`src/ex2-final.jsx`](src/ex2-final.jsx) |

构建出的页面使用模块脚本，要通过 Web 服务器打开（GitHub Pages、`npm run dev` 或 `npx vite preview`），不能双击打开。
