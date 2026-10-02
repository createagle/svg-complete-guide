# Chapter 16 · Coordinate Systems & Nested SVG · Demos

**English** | [简体中文](README.zh-CN.md)

| Demo | Live | What it shows |
| --- | --- | --- |
| 16-1 Pointer position in every coordinate system | [01-pointer-coords.html](https://createagle.github.io/svg-complete-guide/chapters/16-coordinate-systems/01-pointer-coords.html) | Move the pointer over a root `<svg>`, a nested `<svg>` and a rotated `<g>`; each layer converts the pointer with `getScreenCTM().inverse()` and draws a marker in its own coordinates |
| 16-2 Dragging inside a rotated, scaled layer | [02-drag-rotated.html](https://createagle.github.io/svg-complete-guide/chapters/16-coordinate-systems/02-drag-rotated.html) | Two handles in rotated, scaled layers: one adds raw `movementX/Y` and drifts away from the pointer, the other converts the pointer and stays under it |

Exercise starter and finished code: [exercises/](exercises/README.md).
