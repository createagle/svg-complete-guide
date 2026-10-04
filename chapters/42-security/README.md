# Chapter 42 · SVG Security · Demos

**English** | [简体中文](README.zh-CN.md)

| Demo | Live | What it shows |
| --- | --- | --- |
| 42-1 Untrusted SVG: four ways to embed | [01-sanitize-matrix.html](https://createagle.github.io/svg-complete-guide/chapters/42-security/01-sanitize-matrix.html) | Five harmless test files (script, event handler, foreignObject, javascript: link, SMIL-set href) inserted with innerHTML, shown with img, opened as a document, and sanitized with DOMPurify; every frame is sandboxed and a payload can only report that it ran |
| 42-2 Content Security Policy vs an injected handler | [02-csp.html](https://createagle.github.io/svg-complete-guide/chapters/42-security/02-csp.html) | The same unsanitized SVG injected twice; a nonce-based script-src policy blocks the inline handler in the second frame |

DOMPurify is loaded from [`assets/vendor/`](../../assets/vendor/README.md). The test files only call `postMessage` (or change a status line in the exercises); they contain nothing harmful.

Exercise starter and finished code: [exercises/](exercises/README.md).
