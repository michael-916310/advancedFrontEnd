type BuildMode = 'production' | 'development';

interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export type {
  BuildOptions, BuildMode, BuildPaths, BuildEnv,
};
