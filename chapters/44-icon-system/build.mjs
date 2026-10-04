// Builds the three deliverables of the icon library from icons/*.svg.
// Zero dependencies: run with `node build.mjs`.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const SRC = new URL('./icons/', import.meta.url);
const OUT = new URL('./dist/', import.meta.url);
mkdirSync(OUT, { recursive: true });

// Every source file shares the same 24×24 grid and stroke settings, so only the inner shapes differ
const icons = readdirSync(SRC)
  .filter((f) => f.endsWith('.svg'))
  .sort()
  .map((f) => ({ name: f.slice(0, -4), body: readFileSync(new URL(f, SRC), 'utf8').replace(/^[\s\S]*?<svg[^>]*>|<\/svg>\s*$/g, '') }));

// 1. Sprite: one <symbol> per icon, used with <svg><use href="sprite.svg#name"/></svg>
writeFileSync(new URL('sprite.svg', OUT),
  '<svg xmlns="http://www.w3.org/2000/svg">' +
  // stroke-width is left out on purpose: the instance inherits it from .icon, so CSS can theme it
  icons.map((i) => `<symbol id="${i.name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${i.body}</symbol>`).join('') +
  '</svg>\n');

// 2. Component: a custom element <svg-icon name="home" label="Home"> that renders inline SVG
writeFileSync(new URL('icons.js', OUT), `// <svg-icon name="…" label="…"> renders an inline, themable SVG icon
const ICONS = ${JSON.stringify(Object.fromEntries(icons.map((i) => [i.name, i.body])), null, 2)};

class SvgIcon extends HTMLElement {
  static observedAttributes = ['name', 'label'];
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }
  render() {
    const body = ICONS[this.getAttribute('name')] ?? '';
    const label = this.getAttribute('label');
    // With a label the icon is an image; without one it is decoration next to visible text
    const a11y = label ? 'role="img" aria-label="' + label.replace(/"/g, '&quot;') + '"' : 'aria-hidden="true"';
    this.innerHTML = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' + a11y + '>' + body + '</svg>';
  }
}
customElements.define('svg-icon', SvgIcon);
`);

// 3. Mask CSS: every icon as a data: URL mask, painted with currentColor
const dataUrl = (body) => 'data:image/svg+xml,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`);
writeFileSync(new URL('icons.css', OUT), `/* <span class="i i-home"></span>: the icon is a mask, the color is currentColor */
.i { display: inline-block; width: var(--icon-size, 1.5em); height: var(--icon-size, 1.5em); background-color: currentColor;
  mask: var(--i) no-repeat center / contain; }
${icons.map((i) => `.i-${i.name} { --i: url("${dataUrl(i.body)}"); }`).join('\n')}
`);

// Shared sizing for the sprite and the component: the stroke width is themable, unlike the mask
writeFileSync(new URL('base.css', OUT), `/* Size and stroke for inline icons (sprite and <svg-icon>) */
.icon { width: var(--icon-size, 1.5em); height: var(--icon-size, 1.5em); stroke-width: var(--icon-stroke, 2); vertical-align: middle; flex: none; }
svg-icon { display: inline-flex; }
`);
console.log(`Built ${icons.length} icons into dist/`);
