import Banks from './pages/Banks';
import Groups from './pages/Groups';

const appRoutes = [
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
