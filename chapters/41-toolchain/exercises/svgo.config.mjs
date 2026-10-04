// svgo.config.mjs: run with `npx svgo icon-start.svg -o icon-final.svg`
export default {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Every color becomes currentColor, so CSS `color` themes the icon
          convertColors: { currentColor: true },
        },
      },
    },
    // Not part of preset-default in v4: the exported <title>star</title> is only a layer name
    'removeTitle',
    // Size comes from CSS, not from the file
    'removeDimensions',
    // These icons sit next to a text label, so screen readers should skip them
    { name: 'addAttributesToSVGElement', params: { attributes: [{ 'aria-hidden': 'true' }] } },
  ],
};
