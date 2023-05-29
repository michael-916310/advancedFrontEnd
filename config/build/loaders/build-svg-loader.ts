const buildSvgLoader = () => ({
  test: /\.svg$/i,
  use: ['@svgr/webpack'],
});

export { buildSvgLoader };
