import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * Import Components
 */
import Overview from '@/components/Contents/Overview';
import Income from '@/components/Contents/Income';
import Expenses from '@/components/Contents/Expenses';
import Settings from '@/components/Contents/Settings';
import IncomeForm from '@/components/Contents/IncomeForm';

Vue.use(VueRouter);

const mainRoutes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview,
  },
  {
    path: '/income',
    name: 'Income',
    component: Income,
  },
  {
    path: '/expenses',
    name: 'Expenses',
    component: Expenses,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
];

const subRoutes = [
  {
    path: '/income/add',
    name: 'IncomeAdd',
    component: IncomeForm,
    props: {
      mode: 'add',
    },
  },
  {
    path: '/income/:id',
    name: 'IncomeDetails',
    component: IncomeForm,
    props: true,
  },
];

const routes = [...mainRoutes, ...subRoutes];
  
const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: "active",
  routes, // short for `routes: routes`,
  mainRoutes,
});

export default router;