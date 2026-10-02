# SVG Complete Guide · Demos

**English** | [简体中文](README.zh-CN.md)

Companion demos for *SVG Complete Guide* (5 parts, 50 chapters), deployed on GitHub Pages:

**https://createagle.github.io/svg-complete-guide/**

## Layout

```text
index.html                     # Demo index (by part and chapter)
assets/
  style.css                    # Shared styles: light/dark theme, centered demo layout, prefers-reduced-motion
chapters/
  01-intro/
    README.md                  # Chapter demo list
    01-png-vs-svg.html         # One demo per standalone page
    exercises/                 # Exercise starter (NN-start) and finished (NN-final) code
  02-syntax/
  ...
  49-project/                  # The capstone may be a standalone Vite project
tools/
  reading_time.py              # Estimates a chapter's reading time from its Markdown export
.github/workflows/
  pages.yml                    # Deploys on every push to main
  sync-main.yml                # Fast-forwards claude/** branches to main and deploys
```

- Live demo: `https://createagle.github.io/svg-complete-guide/chapters/<chapter>/<demo>.html`
- Source: `https://github.com/createagle/svg-complete-guide/blob/main/chapters/<chapter>/<demo>.html`
- Demo pages contain only the demo itself (English copy, no explanations) so they can be embedded in an iframe; explanations live in the tutorial.
- Except for chapter 41 and the framework chapters, every demo is a dependency-free HTML page you can open by double-clicking. All demos support dark mode and `prefers-reduced-motion`.
- Every Markdown file comes in English (`README.md`) and Chinese (`README.zh-CN.md`), linked to each other at the top.

### Adding a demo

1. Copy an existing demo page and change its English `<title>`, controls, and the code inside `.stage`.
2. Add a row to the chapter's `README.md` and `README.zh-CN.md`.
3. Link it under its chapter in the root `index.html`.

## Deployment

- `.github/workflows/sync-main.yml`: after a push to a `claude/**` branch, fast-forwards `main` and triggers a deploy.
- `.github/workflows/pages.yml`: deploys to GitHub Pages on a push to `main` (or when triggered by the workflow above).

First-time setup: in the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

Local preview:

```sh
python3 -m http.server 8000
# open http://localhost:8000/
```
