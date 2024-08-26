import type { Config } from 'jest';
import cfg from './jest.config';


const config: Config = Object.assign(cfg, {
  displayName: 'HELPERS',
  testMatch: [
    '**/shared/helpers/**/*.test.ts'
  ]
});

export default config;
