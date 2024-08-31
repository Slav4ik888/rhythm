import { Configuration as DevServerConfiguraion } from 'webpack-dev-server';
import { BuildOptions } from './types';

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguraion => ({
  port,
  open               : false,
  hot                : true,
  historyApiFallback : true,
  proxy: [
    {
      context: ['/api'],
      target: 'http://localhost:7575'
    }
  ]
});
