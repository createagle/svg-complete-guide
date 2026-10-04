# SVG in Next.js Server Components

**English** | [简体中文](README.zh-CN.md)

Source of demo 45-3. `next.config.mjs` sets `output: 'export'`, so `npm run build` renders the page to static files, and [`publish.mjs`](publish.mjs) copies them to [`../03-server-component/`](../03-server-component/), which is committed so GitHub Pages can serve it.

```sh
npm install
npm run dev      # local development server
npm run build    # static export, then copy to ../03-server-component/
```

| File | Role |
| --- | --- |
| [`app/ServerChart.jsx`](app/ServerChart.jsx) | Server Component: reads `data/visits.json` at build time; only the finished SVG reaches the browser |
| [`app/HoverChart.jsx`](app/HoverChart.jsx) | Client Component (`'use client'`): the same chart with a hover state; its code ships as JavaScript |
| [`app/page.jsx`](app/page.jsx) | Puts both charts on the page, plus an SVG through `next/image` and an SVGR component |
| [`next.config.mjs`](next.config.mjs) | Static export, `basePath` for GitHub Pages, and a Turbopack rule that turns `*.react.svg` into components |

`basePath` matches the folder on GitHub Pages; change it if you publish somewhere else.
