// <svg-icon name="…" label="…"> renders an inline, themable SVG icon
const ICONS = {
  "arrow-right": "<path d=\"M5 12h14m-6-6 6 6-6 6\"/>",
  "bell": "<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"/><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"/>",
  "calendar": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/>",
  "check": "<path d=\"m5 12.5 4.5 4.5L19 7.5\"/>",
  "close": "<path d=\"M6 6l12 12M18 6 6 18\"/>",
  "download": "<path d=\"M12 4v11m-5-5 5 5 5-5M5 20h14\"/>",
  "heart": "<path d=\"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8Z\"/>",
  "home": "<path d=\"M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3Z\"/>",
  "mail": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"m3 7 9 6 9-6\"/>",
  "plus": "<path d=\"M12 5v14M5 12h14\"/>",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m21 21-4.3-4.3\"/>",
  "sliders": "<path d=\"M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1\"/><circle cx=\"15\" cy=\"6\" r=\"2\"/><circle cx=\"9\" cy=\"12\" r=\"2\"/><circle cx=\"17\" cy=\"18\" r=\"2\"/>",
  "star": "<path d=\"m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9Z\"/>",
  "user": "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c1-4 4.5-6 8-6s7 2 8 6\"/>"
};

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
