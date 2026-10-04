/** @type {import('next').NextConfig} */
export default {
  // A static site: every page is rendered at build time, so GitHub Pages can host it
  output: 'export',
  // The folder the built site is published to on GitHub Pages
  basePath: '/svg-complete-guide/chapters/45-react-next/03-server-component',
  trailingSlash: true,
  turbopack: {
    rules: {
      // `import Logo from './logo.react.svg'` → a React component; plain `.svg` imports stay images for next/image
      '*.react.svg': { loaders: ['@svgr/webpack'], as: '*.js' },
    },
  },
};
