# Vite 流水线中的 SVG

[English](README.md) | **简体中文**

示例 41-1 的源码。构建结果提交在 [`../01-vite-pipeline/`](../01-vite-pipeline/)，GitHub Pages 无需构建步骤就能直接发布。

```sh
npm install
npm run dev      # 本地开发服务器
npm run build    # 重新生成 ../01-vite-pipeline/
```

| 导入写法 | 得到什么 | 在哪里配置 |
| --- | --- | --- |
| `import url from './bell.svg'` | 一个 URL；小文件会变成 `data:` URL | Vite 内置 |
| `import raw from './bell.svg?raw'` | 文件的文本内容 | Vite 内置 |
| `import Bell from './bell.svg?react'` | 一个 React 组件 | `vite.config.js` 里的 `vite-plugin-svgr` |
| `import IconHeart from '~icons/lucide/heart'` | 由 Iconify 数据生成的组件 | `unplugin-icons` + `@iconify-json/lucide` |
| `import sprite from 'virtual:svg-sprite'` | `src/sprite/` 里每个文件变成一个 `<symbol>` | [`plugins/svg-sprite.js`](plugins/svg-sprite.js) |

构建出的页面使用模块脚本，要通过 Web 服务器打开（GitHub Pages、`npm run dev` 或 `npx vite preview`），不能双击打开。
