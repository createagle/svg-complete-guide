# Vue 中的 SVG 组件

[English](README.md) | **简体中文**

示例 46-1 和练习 1 的源码。构建结果提交在上一级目录（`../01-vue-donut.html`、`../exercises/01-start.html`、`../exercises/01-final.html` 和 `../assets/vue/`），GitHub Pages 不需要构建就能直接提供。

```sh
npm install
npm run dev      # 本地开发服务器
npm run build    # 重新生成上一级目录里的页面
```

| 页面 | 源码 |
| --- | --- |
| 46-1 Vue 环形图 | [`src/Donut.vue`](src/Donut.vue)、[`src/DonutSlice.vue`](src/DonutSlice.vue)、[`src/App.vue`](src/App.vue) |
| 练习 1 | [`src/Avatar.vue`](src/Avatar.vue)（初始）、[`src/AvatarFinal.vue`](src/AvatarFinal.vue)（成品） |

构建出的页面使用模块脚本，要通过 Web 服务器打开（GitHub Pages、`npm run dev` 或 `npx vite preview`），不能双击打开。
