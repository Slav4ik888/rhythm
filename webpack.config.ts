import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import { BuildEnv, BuildPaths, BuildProject } from './config/build/types';


export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry : path.resolve(__dirname, 'src', 'index.tsx'),
    build : path.resolve(__dirname, 'build'),
    html  : path.resolve(__dirname, 'public', 'index.html'),
    src   : path.resolve(__dirname, 'src'),
  };

  const { port, apiUrl, mode = 'development' } = env;
  const isDev = mode === 'development';
  const project = BuildProject.FRONTEND;


  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project
  });

  return config;
}
