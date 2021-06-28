import { RoutePath } from './type';

export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      { redirect: '/main', path: '/' },
      {
        path: '/main',
        component: '@/layouts/main',
        wrappers: ['@/wrappers/ChatWrapper.tsx'],
        routes: [
          { redirect: RoutePath.message, path: '/main' },
          {
            path: RoutePath.message,
            component: '@/pages/message',
          },
          {
            path: RoutePath.file,
            component: '@/pages/file',
          },
        ],
      },
    ],
  },
];
