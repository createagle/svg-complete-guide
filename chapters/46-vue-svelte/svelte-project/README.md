# SVG components in Svelte

**English** | [简体中文](README.zh-CN.md)

Source of demo 46-2 and exercise 2. The built pages are committed one level up (`../02-svelte-donut.html`, `../exercises/02-start.html`, `../exercises/02-final.html` and `../assets/svelte/`) so GitHub Pages can serve them without a build step.

```sh
npm install
npm run dev      # local development server
npm run build    # rebuilds the pages one level up
```

| Page | Source |
| --- | --- |
| 46-2 Donut chart in Svelte | [`src/Donut.svelte`](src/Donut.svelte), [`src/DonutSlice.svelte`](src/DonutSlice.svelte), [`src/App.svelte`](src/App.svelte) |
| Exercise 2 | [`src/BarLink.svelte`](src/BarLink.svelte) (starter), [`src/BarLinkFinal.svelte`](src/BarLinkFinal.svelte) (finished) |

The built pages use module scripts, so open them through a web server (GitHub Pages, `npm run dev` or `npx vite preview`), not by double-clicking.
