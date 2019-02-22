import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('../components/Dashboard/Dashboard'),
  loading: Loading,
});

const Dish = Loadable({
  loader: () => import('../components/Dish/dish'),
  loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dish/list', exact: true, name: 'List Dish', component: Dish },
  { path: '/dish/create', exact: true, name: 'Create Dish', component: Dish },
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
];

export default routes;
