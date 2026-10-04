# Chapter 46 · SVG in Vue and Svelte · Demos

**English** | [简体中文](README.zh-CN.md)

| Demo | Live | What it shows |
| --- | --- | --- |
| 46-1 Donut chart in Vue | [01-vue-donut.html](https://createagle.github.io/svg-complete-guide/chapters/46-vue-svelte/01-vue-donut.html) | Two donut charts from one component: slices are child components with a <circle> root, useId keeps each gradient apart, sliders change the data, and the parent downloads the SVG through an exposed template ref |
| 46-2 Donut chart in Svelte | [02-svelte-donut.html](https://createagle.github.io/svg-complete-guide/chapters/46-vue-svelte/02-svelte-donut.html) | The same chart in Svelte 5: $props.id() for the gradient ids, events passed as props, and a bindable prop that hands the <svg> to the parent |

Demo 46-1 and exercise 1 are built from [`vue-project/`](vue-project/README.md) (Vite + Vue 3.5); demo 46-2 and exercise 2 from [`svelte-project/`](svelte-project/README.md) (Vite + Svelte 5). The built pages and `assets/` are committed. They use module scripts, so open them through a web server.

Exercise starter and finished code: [exercises/](exercises/README.md).
