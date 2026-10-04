# Chapter 45 · SVG in React and Next.js · Demos

**English** | [简体中文](README.zh-CN.md)

| Demo | Live | What it shows |
| --- | --- | --- |
| 45-1 Unique ids with useId | [01-unique-ids.html](https://createagle.github.io/svg-complete-guide/chapters/45-react-next/01-unique-ids.html) | Three progress rings, each with its own gradient; with a fixed id all of them use the first gradient, and hiding the first card makes the others lose their stroke |
| 45-2 Ref as a prop | [02-ref-as-prop.html](https://createagle.github.io/svg-complete-guide/chapters/45-react-next/02-ref-as-prop.html) | A sparkline component takes ref as a plain prop (React 19); the page uses it to download the SVG, and a ref callback with cleanup keeps the chart as wide as its box |
| 45-3 Server Components in Next.js | [03-server-component/](https://createagle.github.io/svg-complete-guide/chapters/45-react-next/03-server-component/) | A static export: a bar chart rendered by a Server Component (no JS for it) next to the same chart as a Client Component with hover, plus an SVG through next/image and an SVGR component |

Demos 45-1, 45-2 and the exercises are built from [`react-project/`](react-project/README.md) (Vite + React 19); the built pages and `assets/` are committed. Demo 45-3 is built from [`next-project/`](next-project/README.md) (Next.js 16, static export) into `03-server-component/`. All built pages use module scripts, so open them through a web server.

Exercise starter and finished code: [exercises/](exercises/README.md).
