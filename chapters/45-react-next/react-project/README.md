# SVG components in React

**English** | [简体中文](README.zh-CN.md)

Source of demos 45-1 and 45-2 and of both exercises. The built pages are committed one level up (`../01-unique-ids.html`, `../02-ref-as-prop.html`, `../exercises/*.html` and `../assets/`) so GitHub Pages can serve them without a build step.

```sh
npm install
npm run dev      # local development server
npm run build    # rebuilds the pages one level up
```

| Page | Source |
| --- | --- |
| 45-1 Unique ids with `useId` | [`src/ProgressRing.jsx`](src/ProgressRing.jsx), [`src/main-unique-ids.jsx`](src/main-unique-ids.jsx) |
| 45-2 Ref as a prop | [`src/Sparkline.jsx`](src/Sparkline.jsx), [`src/main-ref-as-prop.jsx`](src/main-ref-as-prop.jsx) |
| Exercise 1 | [`src/ex1-start.jsx`](src/ex1-start.jsx), [`src/ex1-final.jsx`](src/ex1-final.jsx) |
| Exercise 2 | [`src/ex2-start.jsx`](src/ex2-start.jsx), [`src/ex2-final.jsx`](src/ex2-final.jsx) |

The built pages use module scripts, so open them through a web server (GitHub Pages, `npm run dev` or `npx vite preview`), not by double-clicking.
