import { RouteConfig } from 'react-router-config';

import App from '../App';
import ComponentsWelcome from '../page/components/welcome';
import HooksWelcome from '../page/hooks/welcome';

const config: RouteConfig[] = [
  {
    path: '/',
    component: App,
    routes: [
      // {
      //   path: '/',
      //   component: Home,
      //   exact: true,
      // },
      {
        path: '/componentsWelcome',
        component: ComponentsWelcome,
        exact: true,
      },
      {
        path: '/hooksWelcome',
        component: HooksWelcome,
        exact: true,
      },
    ],
  },
];

export default config;
