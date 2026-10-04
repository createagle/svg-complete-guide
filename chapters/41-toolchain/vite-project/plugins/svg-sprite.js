// A tiny sprite plugin: every SVG in a folder becomes a <symbol>, and the whole
// sprite is available as `import sprite from 'virtual:svg-sprite'`.
import { readdirSync, readFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { optimize } from 'svgo';

const ID = 'virtual:svg-sprite';

export default function svgSprite({ dir, prefix = 'icon-' }) {
  function build() {
    const symbols = readdirSync(dir)
      .filter((f) => f.endsWith('.svg'))
      .sort()
      .map((file) => {
        const id = prefix + basename(file, '.svg');
        // Optimize, and prefix internal ids so two icons never clash inside one document
        const svg = optimize(readFileSync(join(dir, file), 'utf8'), {
          plugins: ['preset-default', { name: 'prefixIds', params: { prefix: id } }, 'removeDimensions'],
        }).data;
        // <svg ...attrs>children</svg>  →  <symbol id viewBox ...attrs>children</symbol>
        return svg
          .replace(/^<svg\b([^>]*)>/, (_, attrs) => `<symbol id="${id}"${attrs.replace(/\s+xmlns="[^"]*"/, '')}>`)
          .replace(/<\/svg>$/, '</symbol>');
      });
    return `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbols.join('')}</svg>`;
  }
  return {
    name: 'svg-sprite',
    resolveId: (id) => (id === ID ? '\0' + ID : null),
    load(id) {
      if (id !== '\0' + ID) return null;
      // Rebuild when an icon is added or edited during `vite dev`
      for (const f of readdirSync(dir)) this.addWatchFile(join(dir, f));
      return `export default ${JSON.stringify(build())};`;
    },
  };
}
