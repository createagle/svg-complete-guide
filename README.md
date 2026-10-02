# SVG 完全指南 · 示例代码

《SVG 完全指南》教程的配套示例，部署在 GitHub Pages：

**https://createagle.github.io/svg-complete-guide/**

## 目录约定

```
index.html                      在线示例首页（章节列表）
assets/style.css                示例页公共样式（自动适配深色模式）
assets/demo.js                  自动把 .demo .stage 里的代码显示在效果下方
examples/chNN-<slug>/NN-<name>.html   每个示例一页
```

示例的线上地址 = `https://createagle.github.io/svg-complete-guide/` + 文件路径，例如
`examples/ch01-intro/01-hello-svg.html`。

新增示例时：复制一个现有示例页，改 `<title>`、标题和 `.stage` 内的 SVG，然后在 `index.html` 对应章节下加链接。

## 部署

推送到 `main` 后由 `.github/workflows/pages.yml` 自动部署。首次使用需在仓库
**Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

本地预览：

```sh
python3 -m http.server 8000
# 打开 http://localhost:8000/
```
