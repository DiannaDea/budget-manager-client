import Banks from './pages/Banks';
import Groups from './pages/Groups';
import Cards from './pages/Cards';
import Transactions from './pages/Transactions';

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
    key: 2,
    exact: true,
    component: Banks,
    isProtected: true,
  },
  {
    path: '/groups',
    key: 3,
    exact: true,
    component: Groups,
    isProtected: true,
  },
  {
    path: '/transactions',
    key: 4,
    exact: true,
    component: Transactions,
    isProtected: true,
  },
];
export default appRoutes;
