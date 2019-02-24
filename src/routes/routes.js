import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('../components/Dashboard/Dashboard'),
  loading: Loading,
});

const ListDish = Loadable({
  loader: () => import('../components/Dish/list-dish'),
  loading: Loading,
});

const CreateDish = Loadable({
  loader: () => import('../components/Dish/create-dish'),
  loading: Loading,
});

const CreateCuisine = Loadable({
  loader: () => import('../components/Cuisine/create-cuisine'),
  loading: Loading,
});

const ListCuisine = Loadable({
  loader: () => import('../components/Cuisine/list-cuisine'),
  loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dish', exact: true, name: 'List Dish', component: ListDish },
  { path: '/dish/create', exact: true, name: 'Create Dish', component: CreateDish },
  { path: '/cuisine', exact: true, name: 'List Cuisine', component: ListCuisine },
  { path: '/cuisine/create', exact: true, name: 'Create Cuisine', component: CreateCuisine },
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
];

export default routes;
