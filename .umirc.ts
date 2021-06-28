import { defineConfig } from 'umi';
import { routes } from './config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  hash: true,
  history: {
    type: 'hash',
  },
  dva: {
    immer: true,
    hmr: false,
  },
  fastRefresh: {},
});
