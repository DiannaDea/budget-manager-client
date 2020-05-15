import Banks from './pages/Banks';
import Groups from './pages/Groups';
import Cards from './pages/Cards';

const appRoutes = [
  {
    path: '/banks/:id/cards',
    key: 1,
    exact: true,
    component: Cards,
    isProtected: true,
  },
  {
    path: '/banks',
    key: 1,
    exact: true,
    component: Banks,
    isProtected: true,
  },
  {
    path: '/groups',
    key: 2,
    exact: true,
    component: Groups,
    isProtected: true,
  },
];
export default appRoutes;
