# 第 44 章 实战：图标系统 · 示例

[English](README.md) | **简体中文**

| 示例 | 在线演示 | 说明 |
| --- | --- | --- |
| 44-1 一套图标，三种交付方式 | [01-three-deliveries.html](https://createagle.github.io/svg-complete-guide/chapters/44-icon-system/01-three-deliveries.html) | 同一套图标分别以内联雪碧图 + use、自定义元素和 CSS 遮罩交付，用 color、--icon-size、--icon-stroke 统一换肤 |
| 44-2 图标库目录页 | [02-icon-catalog.html](https://createagle.github.io/svg-complete-guide/chapters/44-icon-system/02-icon-catalog.html) | 全部 14 个图标，可以搜索、切换尺寸和描边，并显示所选图标的三种用法 |

图标库本身：源文件在 `icons/`，零依赖的构建脚本 `build.mjs`（运行 `node build.mjs`），产物在 `dist/`（`sprite.svg`、`icons.js`、`icons.css`、`base.css`），由 `package.json` 描述。

练习的初始代码和成品代码见 [exercises/](exercises/README.zh-CN.md)。
