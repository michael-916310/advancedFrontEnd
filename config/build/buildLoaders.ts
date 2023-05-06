import webpack from "webpack";

function BuildLoaders():webpack.RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    typescriptLoader,
  ]
}

export { BuildLoaders };