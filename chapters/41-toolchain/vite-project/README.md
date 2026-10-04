# SVG in a Vite pipeline

**English** | [简体中文](README.zh-CN.md)

Source of demo 41-1. The built page is committed in [`../01-vite-pipeline/`](../01-vite-pipeline/) so GitHub Pages can serve it without a build step.

```sh
npm install
npm run dev      # local development server
npm run build    # rebuilds ../01-vite-pipeline/
```

| Import | What you get | Set up in |
| --- | --- | --- |
| `import url from './bell.svg'` | A URL; small files become a `data:` URL | Vite, built in |
| `import raw from './bell.svg?raw'` | The file's text | Vite, built in |
| `import Bell from './bell.svg?react'` | A React component | `vite-plugin-svgr` in `vite.config.js` |
| `import IconHeart from '~icons/lucide/heart'` | A component generated from Iconify data | `unplugin-icons` + `@iconify-json/lucide` |
| `import sprite from 'virtual:svg-sprite'` | Every file in `src/sprite/` as `<symbol>`s | [`plugins/svg-sprite.js`](plugins/svg-sprite.js) |

The built page uses module scripts, so open it through a web server (GitHub Pages, `npm run dev` or `npx vite preview`), not by double-clicking.
