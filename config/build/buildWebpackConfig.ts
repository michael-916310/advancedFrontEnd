import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { BuildPlugins } from "./buildPlugins";
import { BuildLoaders } from "./buildLoaders";
import { BuildResolvers } from "./buildResolvers";

function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths} = options;
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
      rules: BuildLoaders(),
    },
    resolve: BuildResolvers(),
  }
}

export { buildWebpackConfig }