// 把每个 .demo .stage 里的源码原样显示在效果下方，保证"看到的效果"和"展示的代码"一致。
// 优先读取页面原始 HTML（保留 <rect/> 等原写法）；file:// 下读取失败时退回 innerHTML。
(async () => {
  const stages = [...document.querySelectorAll('.demo .stage')];
  let sources = [];
  try {
    const html = await (await fetch(location.href)).text();
    sources = [...html.matchAll(/<div class="stage">\n([\s\S]*?)\n\s*<\/div>\s*<\/section>/g)].map((m) => m[1]);
  } catch (e) { /* 忽略，使用 innerHTML */ }

  stages.forEach((stage, i) => {
    const lines = (sources.length === stages.length ? sources[i] : stage.innerHTML)
      .replace(/^\s*\n|\n\s*$/g, '').split('\n');
    const indent = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length));
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = lines.map((l) => l.slice(indent)).join('\n');
    pre.appendChild(code);
    stage.closest('.demo').appendChild(pre);
  });
})();
