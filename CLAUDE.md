# SVG 完全指南 · 协作约定

本仓库是《SVG 完全指南》（5 篇 50 章）的配套示例。教程正文写在 Claude Docs 文档里，
示例代码放在这里并部署到 https://createagle.github.io/svg-complete-guide/ ，正文引用线上地址。

## 提交与部署（每次改动都要做）

1. 改完代码后先本地验证：`python3 -m http.server` 起服务，用 Playwright（Chromium 已预装）打开页面截图，
   亮色、暗色都看一遍，交互控件实际操作一次。
2. 提交并推送到当前会话指定的 `claude/**` 分支：`git push -u origin <分支>`。
3. 推送会触发 `.github/workflows/sync-main.yml`：把分支快进合并到 `main`，再触发 `pages.yml` 部署。
   不需要手动开 PR 或合并。
4. 推送后检查两个 workflow 是否成功；失败要排查修复，不要把失败的部署留着。
5. 文档里引用的示例链接只写已部署成功的页面。

快进失败说明 `main` 上有分支没有的提交（例如有人在网页上直接改了 main）：
先 `git fetch origin main && git merge origin/main`，解决冲突后再推送。

## 示例约定

- 目录：`chapters/<NN-slug>/<NN-name>.html`，每章一个 `README.md`，练习答案放 `exercises/`。
- **示例页只放演示本身**：不写标题、说明文字、面包屑、源码面板。讲解全部写在 Claude Docs 文档里。
  页面要能直接作为 iframe 内嵌。
- **GitHub Pages 上的页面文案一律用英文**（`<title>`、控件标签、图注、`alt`、`aria-label`）。
  文档和仓库里的 Markdown 说明仍用中文。
- 页面结构：`<body class="demo">` 内放可选的 `<label class="control">` 控件和 `<div class="stage">` 演示区，
  引用 `../../assets/style.css`。演示需要的样式写在页面 `<head>` 的 `<style>` 里。
- 零依赖、双击可打开；支持暗色模式和 `prefers-reduced-motion`。
- 用现代写法：`href` 而非 `xlink:href`，`currentColor` / CSS 变量做主题。
- 新增示例后同步更新本章 `README.md` 和根目录 `index.html`（英文）。
- 文档里引用的代码片段要与页面源码一致；改了页面就同步改文档。

## 文档约定（Claude Docs）

- 每章是文档里的一个标签页，名为「第 N 章 标题」，排在大纲标签页之后。
- 小标题带序号：章内二级标题 `N.1`、`N.2`…，三级标题 `N.1.1`…；大纲标签页用 `1.`、`2.`… 和 `8.1` 这类。
- 每章按大纲的 7 段式结构写，每个示例配「在线演示」「查看源码」两个链接。

## 链接格式

- 在线演示：`https://createagle.github.io/svg-complete-guide/chapters/<章目录>/<示例>.html`
- 查看源码：`https://github.com/createagle/svg-complete-guide/blob/main/chapters/<章目录>/<示例>.html`
