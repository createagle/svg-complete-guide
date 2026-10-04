import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { rmSync } from 'node:fs';

// The Svelte pages of this chapter; the Vue project builds the others
const pages = ['02-svelte-donut', 'exercises/02-start', 'exercises/02-final'];

// The output folder is shared with READMEs and the Vue build, so remove only what this project wrote
const cleanPreviousBuild = () => ({
  name: 'clean-previous-build',
  buildStart() {
    rmSync(new URL('../assets/svelte', import.meta.url), { recursive: true, force: true });
    for (const p of pages) rmSync(new URL(`../${p}.html`, import.meta.url), { force: true });
  },
});

export default defineConfig({
  base: './',
  plugins: [svelte(), cleanPreviousBuild()],
  build: {
    outDir: '..',
    emptyOutDir: false,
    assetsDir: 'assets/svelte',
    rollupOptions: { input: Object.fromEntries(pages.map((p) => [p, new URL(`${p}.html`, import.meta.url).pathname])) },
  },
});
