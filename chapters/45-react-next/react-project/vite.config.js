import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { rmSync } from 'node:fs';

// Every page of this project, built next to the chapter's other files
const pages = ['01-unique-ids', '02-ref-as-prop', 'exercises/01-start', 'exercises/01-final', 'exercises/02-start', 'exercises/02-final'];

// The output folder also holds READMEs, so remove only what the previous build wrote
const cleanPreviousBuild = () => ({
  name: 'clean-previous-build',
  buildStart() {
    rmSync(new URL('../assets', import.meta.url), { recursive: true, force: true });
    for (const p of pages) rmSync(new URL(`../${p}.html`, import.meta.url), { force: true });
  },
});

export default defineConfig({
  // Relative URLs, so the built pages work from any folder on GitHub Pages
  base: './',
  plugins: [react(), cleanPreviousBuild()],
  build: {
    outDir: '..',
    emptyOutDir: false,
    rollupOptions: { input: Object.fromEntries(pages.map((p) => [p, new URL(`${p}.html`, import.meta.url).pathname])) },
  },
});
