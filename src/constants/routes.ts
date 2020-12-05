import { lazy } from 'react';
import { IRouteWithComponent } from '../types/route';

export enum Routes {
  Home = '/',
  Login = '/login',
  SignUp = '/sign-up',
  Rooms = '/rooms',
}

export const routesWithComponent: IRouteWithComponent<Routes>[] = [
  {
    component: lazy(() => import('../pages/sign-up')),
    path: Routes.SignUp,
    isPrivate: false,
  },
  {
    component: lazy(() => import('../pages/login')),
    path: Routes.Login,
    isPrivate: false,
  },
  // {
  //   component: lazy(() => import('../pages/login')),
  //   path: Routes.Home,
  //   isPrivate: false,
  // },
];
