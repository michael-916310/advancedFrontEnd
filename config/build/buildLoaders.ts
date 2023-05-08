import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

function BuildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (path: string) => path.includes('.module.'),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : '[hash:base64:8]',
          },
        }
      },
      "sass-loader",
    ],
  };

  // ts-loader хватает для работы с JSX без babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    typescriptLoader,
    cssLoader
  ]
}

export { BuildLoaders };