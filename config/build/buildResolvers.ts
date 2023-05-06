import { ResolveOptions } from "webpack";

function BuildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}

export { BuildResolvers };