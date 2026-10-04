import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { rmSync } from 'node:fs';

// The Vue pages of this chapter; the Svelte project builds the others
const pages = ['01-vue-donut', 'exercises/01-start', 'exercises/01-final'];

// The output folder is shared with READMEs and the Svelte build, so remove only what this project wrote
const cleanPreviousBuild = () => ({
  name: 'clean-previous-build',
  buildStart() {
    rmSync(new URL('../assets/vue', import.meta.url), { recursive: true, force: true });
    for (const p of pages) rmSync(new URL(`../${p}.html`, import.meta.url), { force: true });
  },
});

export default defineConfig({
  base: './',
  plugins: [vue(), cleanPreviousBuild()],
  build: {
    outDir: '..',
    emptyOutDir: false,
    assetsDir: 'assets/vue',
    rollupOptions: { input: Object.fromEntries(pages.map((p) => [p, new URL(`${p}.html`, import.meta.url).pathname])) },
  },
});
