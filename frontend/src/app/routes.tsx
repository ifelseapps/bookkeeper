import AccountsPage from 'pages/Accounts';
import MainPage from 'pages/Main';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/settings/accounts/',
    element: <AccountsPage />,
  },
];
