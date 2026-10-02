# SVG 完全指南 · 示例代码

《SVG 完全指南》（5 篇 50 章）的配套示例，部署在 GitHub Pages：

**https://createagle.github.io/svg-complete-guide/**

## 目录约定

```text
index.html                     # 示例总目录（按篇、章导航）
assets/
  style.css                    # 公共样式：亮/暗色主题、居中演示布局、prefers-reduced-motion
chapters/
  01-intro/
    README.md                  # 本章示例说明
    01-png-vs-svg.html         # 一个示例一个独立页面
    exercises/                 # 练习参考答案
  02-syntax/
  ...
  49-project/                  # 综合项目可以是独立 Vite 工程
.github/workflows/
  pages.yml                    # push 到 main 即自动部署
  sync-main.yml                # claude/** 分支自动快进到 main 并部署
```

- 示例链接：`https://createagle.github.io/svg-complete-guide/chapters/<章目录>/<示例>.html`
- 查看源码：`https://github.com/createagle/svg-complete-guide/blob/main/chapters/<章目录>/<示例>.html`
- 示例页只放演示本身（英文文案，无说明），可直接 iframe 内嵌；讲解在教程文档里。
- 除第 41 章和框架章节外，示例都是零依赖的 HTML 页面，双击即可打开；统一支持暗色模式和 `prefers-reduced-motion`。

### 新增示例

1. 复制一个现有示例页，修改英文 `<title>`、控件和 `.stage` 里的代码。
2. 在本章 `README.md` 的表格里加一行。
3. 在根目录 `index.html` 对应章节下加链接。

## 部署

- `.github/workflows/sync-main.yml`：推送到 `claude/**` 分支后，自动快进合并到 `main` 并触发部署。
- `.github/workflows/pages.yml`：推送到 `main`（或被上面的 workflow 触发）时部署到 GitHub Pages。

首次使用需在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

本地预览：

```sh
python3 -m http.server 8000
# 打开 http://localhost:8000/
```
