# Chapter 22 · Filter Basics · Demos

**English** | [简体中文](README.zh-CN.md)

| Demo | Live | What it shows |
| --- | --- | --- |
| 22-1 Filter pipeline debugger | [01-pipeline-debugger.html](https://createagle.github.io/svg-complete-guide/chapters/22-filter-basics/01-pipeline-debugger.html) | Edit a `<filter>` and see the output of every primitive, which inputs feed it and who uses its result; flags `in` / `in2` names that point nowhere and outlines the filter region |
| 22-2 Filter region | [02-filter-region.html](https://createagle.github.io/svg-complete-guide/chapters/22-filter-basics/02-filter-region.html) | One blur filter on a circle, a thin bar and a horizontal line; change `filterUnits`, `x` / `y` / `width` / `height` and `stdDeviation` and watch the region clip the blur |
| 22-3 color-interpolation-filters | [03-color-space.html](https://createagle.github.io/svg-complete-guide/chapters/22-filter-basics/03-color-space.html) | Three color pairs blurred in `linearRGB` (the SVG default), in `sRGB`, and with CSS `blur()` |
| 22-4 SVG filters on HTML | [04-html-filters.html](https://createagle.github.io/svg-complete-guide/chapters/22-filter-basics/04-html-filters.html) | An HTML card with `filter: url(#…)`: soft shadow, outline, wobble, and an SVG filter chained with CSS `grayscale()` |

Asset: `photo.jpg` (a copy of the chapter 9 image).

Exercise starter and finished code: [exercises/](exercises/README.md).
