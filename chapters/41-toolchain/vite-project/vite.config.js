import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import Icons from 'unplugin-icons/vite';
import svgSprite from './plugins/svg-sprite.js';

export default defineConfig({
  // Relative URLs, so the built page works from any folder on GitHub Pages
  base: './',
  build: { outDir: '../01-vite-pipeline', emptyOutDir: true },
  plugins: [
    react(),
    // `import Bell from './bell.svg?react'` → a React component
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        // @svgr/plugin-svgo ships SVGO 3, whose default preset still removes viewBox
        svgoConfig: {
          plugins: [{ name: 'preset-default', params: { overrides: { removeViewBox: false } } }],
        },
        // Replace hard-coded colors so the icon follows the surrounding text color
        replaceAttrValues: { '#1f2937': 'currentColor' },
        dimensions: false,
      },
    }),
    // `import IconHeart from '~icons/lucide/heart'` → a component built from Iconify data
    Icons({ compiler: 'jsx', jsx: 'react' }),
    svgSprite({ dir: 'src/sprite' }),
  ],
});
