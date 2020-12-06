import { lazy } from 'react';
import { IRouteWithComponent } from '../types';

export enum Routes {
  Home = '/',
  Login = '/login',
  SignUp = '/sign-up',
  Rooms = '/rooms',
  Employees = '/employees',
  Customers = '/customers',
  Profile = '/profile',
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
  {
    component: lazy(() => import('../pages/employees')),
    path: Routes.Employees,
    isPrivate: true,
  },
  {
    component: lazy(() => import('../pages/customers')),
    path: Routes.Customers,
    isPrivate: true,
  },
  {
    component: lazy(() => import('../pages/profile')),
    path: Routes.Profile,
    isPrivate: true,
  },
  {
    component: lazy(() => import('../pages/rooms')),
    path: Routes.Rooms,
    isPrivate: true,
  },
];
