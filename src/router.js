/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ManagerApp from './components/ManagerApp';
import Login from './pages/Login';
import Register from './pages/Register';

import Banks from './pages/Banks';
import Groups from './pages/Groups';
import Goals from './pages/Goals';
import Cards from './pages/Cards';
import Transactions from './pages/Transactions';

export const managerRoutes = [
  {
    path: '/manager/banks/:id/cards',
    key: 1,
    exact: true,
    component: Cards,
    isProtected: true,
  },
  {
    path: '/manager/banks',
    key: 2,
    exact: true,
    component: Banks,
    isProtected: true,
  },
  {
    path: '/manager/groups',
    key: 3,
    exact: true,
    component: Groups,
    isProtected: true,
  },
  {
    path: '/manager/transactions',
    key: 4,
    exact: true,
    component: Transactions,
    isProtected: true,
  },
  {
    path: '/manager/goals',
    key: 5,
    exact: true,
    component: Goals,
    isProtected: true,
  },
];

export const appRoutes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/manager',
    component: ManagerApp,
  },
  {
    path: '/signin',
    component: Login,
  },
  {
    path: '/signup',
    component: Register,
  },
];

export const router = (routes) => (
  <>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={(route.exact)}
        render={(props) => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    ))}
  </>
);
