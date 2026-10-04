# 第 36 章 滚动驱动与视图过渡 · 示例

[English](README.md) | **简体中文**

| 示例 | 在线演示 | 说明 |
| --- | --- | --- |
| 36-1 随滚动绘制的路线图 | [01-scroll-roadmap.html](https://createagle.github.io/svg-complete-guide/chapters/36-scroll-view/01-scroll-roadmap.html) | 路线在具名 `scroll-timeline` 上随滚动绘制，小圆点沿 `offset-path` 前进，站点在同一条时间线上用各自的 `animation-range`，路线画到时依次出现；不支持滚动时间线时直接显示完整路线 |
| 36-2 视图过渡的图标卡片 | [02-view-transitions.html](https://createagle.github.io/svg-complete-guide/chapters/36-scroll-view/02-view-transitions.html) | 天气图标用 `document.startViewTransition()` 在网格和详情之间飞行，`view-transition-name` 设在外层 `<svg>` 上，可切换慢动作 |

练习的初始代码和成品代码见 [exercises/](exercises/README.zh-CN.md)。
