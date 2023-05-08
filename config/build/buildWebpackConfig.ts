import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { BuildPlugins } from "./buildPlugins";
import { BuildLoaders } from "./buildLoaders";
import { BuildResolvers } from "./buildResolvers";
import { BuildDevServer } from "./buildDevServer";

function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev} = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: BuildPlugins(options),
    module: {
      rules: BuildLoaders(options),
    },
    resolve: BuildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? BuildDevServer(options) : undefined,
  }
}

export { buildWebpackConfig }