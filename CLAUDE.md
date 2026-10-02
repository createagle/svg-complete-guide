# SVG 完全指南 · 协作约定

本仓库是《SVG 完全指南》（5 篇 50 章）的配套示例。教程正文写在 Claude Docs 文档里，
示例代码放在这里并部署到 https://createagle.github.io/svg-complete-guide/ ，正文引用线上地址。

## 提交与部署（每次改动都要做）

1. 改完代码后先本地验证：`python3 -m http.server` 起服务，用 Playwright（Chromium 已预装）打开页面截图，
   亮色、暗色都看一遍，确认 `.demo` 下方的源码正确显示。
2. 提交并推送到当前会话指定的 `claude/**` 分支：`git push -u origin <分支>`。
3. 推送会触发 `.github/workflows/sync-main.yml`：把分支快进合并到 `main`，再触发 `pages.yml` 部署。
   不需要手动开 PR 或合并。
4. 推送后检查两个 workflow 是否成功；失败要排查修复，不要把失败的部署留着。
5. 文档里引用的示例链接只写已部署成功的页面。

快进失败说明 `main` 上有分支没有的提交（例如有人在网页上直接改了 main）：
先 `git fetch origin main && git merge origin/main`，解决冲突后再推送。

## 示例约定

- 目录：`chapters/<NN-slug>/<NN-name>.html`，每章一个 `README.md`，练习答案放 `exercises/`。
- 示例页引用 `../../assets/style.css` 和 `../../assets/demo.js`；演示代码写在 `<section class="demo">` 内的
  `<div class="stage">` 里，`demo.js` 会把它原样显示在效果下方。
- 零依赖、双击可打开；支持暗色模式和 `prefers-reduced-motion`。
- 用现代写法：`href` 而非 `xlink:href`，`currentColor` / CSS 变量做主题。
- 新增示例后同步更新本章 `README.md` 和根目录 `index.html`。

## 链接格式

- 在线演示：`https://createagle.github.io/svg-complete-guide/chapters/<章目录>/<示例>.html`
- 查看源码：`https://github.com/createagle/svg-complete-guide/blob/main/chapters/<章目录>/<示例>.html`
