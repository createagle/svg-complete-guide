# SVG components in Vue

**English** | [简体中文](README.zh-CN.md)

Source of demo 46-1 and exercise 1. The built pages are committed one level up (`../01-vue-donut.html`, `../exercises/01-start.html`, `../exercises/01-final.html` and `../assets/vue/`) so GitHub Pages can serve them without a build step.

```sh
npm install
npm run dev      # local development server
npm run build    # rebuilds the pages one level up
```

| Page | Source |
| --- | --- |
| 46-1 Donut chart in Vue | [`src/Donut.vue`](src/Donut.vue), [`src/DonutSlice.vue`](src/DonutSlice.vue), [`src/App.vue`](src/App.vue) |
| Exercise 1 | [`src/Avatar.vue`](src/Avatar.vue) (starter), [`src/AvatarFinal.vue`](src/AvatarFinal.vue) (finished) |

The built pages use module scripts, so open them through a web server (GitHub Pages, `npm run dev` or `npx vite preview`), not by double-clicking.
