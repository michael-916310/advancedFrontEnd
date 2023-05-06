
type BuildMode = 'production' | 'development';

interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
}

export type {BuildOptions, BuildMode, BuildPaths};